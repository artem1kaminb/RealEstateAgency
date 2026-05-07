namespace Terrasoft.Configuration
{
    using System;
    using System.Collections.Generic;
    using System.Runtime.Serialization;
    using System.ServiceModel;
    using System.ServiceModel.Web;
    using System.ServiceModel.Activation;
    using Terrasoft.Common;
    using Terrasoft.Core;
    using Terrasoft.Core.Entities;
    using Terrasoft.Web.Common;

    [DataContract]
    public class LotDto
    {
        [DataMember(Name = "id")]
        public Guid Id { get; set; }
        
        [DataMember(Name = "name")]
        public string Name { get; set; }
        
        [DataMember(Name = "price")]
        public decimal Price { get; set; }
        
        [DataMember(Name = "viewsCount")]
        public int ViewsCount { get; set; }
    }

    [ServiceContract]
    [AspNetCompatibilityRequirements(RequirementsMode = AspNetCompatibilityRequirementsMode.Required)]
    public class UsrRealEstateService : BaseService
    {
        [OperationContract]
        [WebInvoke(Method = "POST", UriTemplate = "GetLotsByStatus", RequestFormat = WebMessageFormat.Json, BodyStyle = WebMessageBodyStyle.Wrapped, ResponseFormat = WebMessageFormat.Json)]
        public List<LotDto> GetLotsByStatus(string statusName)
        {
            var resultList = new List<LotDto>();

            var esq = new EntitySchemaQuery(UserConnection.EntitySchemaManager, "UsrLot");
            var idCol = esq.AddColumn("Id");
            var nameCol = esq.AddColumn("UsrName");   
            var priceCol = esq.AddColumn("UsrPrice"); 

            esq.Filters.Add(esq.CreateFilterWithParameters(FilterComparisonType.Equal, "UsrStatus.Name", statusName));

            var entityCollection = esq.GetEntityCollection(UserConnection);

            foreach (var entity in entityCollection)
            {
                Guid lotId = entity.GetTypedColumnValue<Guid>(idCol.Name);

                var viewsEsq = new EntitySchemaQuery(UserConnection.EntitySchemaManager, "UsrLotView");
                viewsEsq.AddColumn("Id");
                viewsEsq.Filters.Add(viewsEsq.CreateFilterWithParameters(FilterComparisonType.Equal, "UsrViewLot", lotId));
                
                int viewsCount = viewsEsq.GetEntityCollection(UserConnection).Count;

                resultList.Add(new LotDto
                {
                    Id = lotId,
                    Name = entity.GetTypedColumnValue<string>(nameCol.Name),
                    Price = entity.GetTypedColumnValue<decimal>(priceCol.Name),
                    ViewsCount = viewsCount
                });
            }

            return resultList;
        }

        [OperationContract]
        [WebInvoke(Method = "POST", UriTemplate = "GetSuccessfulLotsCount", RequestFormat = WebMessageFormat.Json, BodyStyle = WebMessageBodyStyle.Wrapped, ResponseFormat = WebMessageFormat.Json)]
        public int GetSuccessfulLotsCount(string clientCode)
        {
            var esq = new EntitySchemaQuery(UserConnection.EntitySchemaManager, "UsrLot");
            esq.AddColumn("Id");
            esq.Filters.Add(esq.CreateFilterWithParameters(FilterComparisonType.Equal, "UsrOwner.Id", clientCode));
            esq.Filters.Add(esq.CreateFilterWithParameters(FilterComparisonType.Equal, "UsrStatus.Name", "Закрито"));
            
            var entityCollection = esq.GetEntityCollection(UserConnection);
            
            if (entityCollection.Count == 0) {
                return -1;
            }
            return entityCollection.Count;
        }

        [OperationContract]
        [WebInvoke(Method = "POST", UriTemplate = "GetSuccessfulLotsTotalValue", RequestFormat = WebMessageFormat.Json, BodyStyle = WebMessageBodyStyle.Wrapped, ResponseFormat = WebMessageFormat.Json)]
        public decimal GetSuccessfulLotsTotalValue(string clientCode)
        {
            var esq = new EntitySchemaQuery(UserConnection.EntitySchemaManager, "UsrLot");
            var priceColumn = esq.AddColumn("UsrPrice");
            esq.Filters.Add(esq.CreateFilterWithParameters(FilterComparisonType.Equal, "UsrOwner.Id", clientCode));
            esq.Filters.Add(esq.CreateFilterWithParameters(FilterComparisonType.Equal, "UsrStatus.Name", "Закрито"));
            
            var entityCollection = esq.GetEntityCollection(UserConnection);
            
            if (entityCollection.Count == 0) {
                return -1m;
            }

            decimal totalValue = 0;
            foreach (var entity in entityCollection) {
                totalValue += entity.GetTypedColumnValue<decimal>(priceColumn.Name);
            }
            return totalValue;
        }
    }
}