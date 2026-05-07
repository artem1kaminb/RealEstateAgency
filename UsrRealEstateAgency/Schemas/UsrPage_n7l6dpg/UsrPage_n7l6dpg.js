define("UsrPage_n7l6dpg", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "remove",
				"name": "CloseButton"
			},
			{
				"operation": "insert",
				"name": "DateTimePicker_bcpuguh",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"label": "$Resources.Strings.UsrLotViewDS_UsrViewDate_u6oapup",
					"placeholder": "",
					"readonly": false,
					"labelPosition": "above",
					"tooltip": "",
					"pickerType": "datetime",
					"control": "$UsrLotViewDS_UsrViewDate_u6oapup"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_9dyamo7",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.UsrLotViewDS_UsrResposible_qakcgw9",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "above",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$UsrLotViewDS_UsrResposible_qakcgw9"
				},
				"parentName": "Main",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "addRecord_vbwn4am",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_vbwn4am_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_9dyamo7",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_0ofium1",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.UsrLotViewDS_UsrClient_mnvk9ww",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "above",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$UsrLotViewDS_UsrClient_mnvk9ww"
				},
				"parentName": "Main",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "addRecord_1ahll46",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_1ahll46_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_0ofium1",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Input_iodhn90",
				"values": {
					"type": "crt.Input",
					"label": "$Resources.Strings.UsrLotViewDS_UsrRealtorMess_u1v2pnq",
					"control": "$UsrLotViewDS_UsrRealtorMess_u1v2pnq",
					"placeholder": "",
					"tooltip": "",
					"readonly": false,
					"multiline": false,
					"labelPosition": "above"
				},
				"parentName": "Main",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "Input_o7kojza",
				"values": {
					"type": "crt.Input",
					"label": "$Resources.Strings.UsrLotViewDS_UsrClientMess_0ohbvw3",
					"control": "$UsrLotViewDS_UsrClientMess_0ohbvw3",
					"placeholder": "",
					"tooltip": "",
					"readonly": false,
					"multiline": false,
					"labelPosition": "above"
				},
				"parentName": "Main",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "ComboBox_qs6occk",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.UsrLotViewDS_UsrViewLot_5dnqh4k",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "above",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$UsrLotViewDS_UsrViewLot_5dnqh4k"
				},
				"parentName": "Main",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "addRecord_40ad0cq",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_40ad0cq_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_qs6occk",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_42z21f0",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.UsrLotViewDS_UsrResult_e9ch20w",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "above",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$UsrLotViewDS_UsrResult_e9ch20w"
				},
				"parentName": "Main",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "addRecord_i56qqor",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_i56qqor_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_42z21f0",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_0my7ntt",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.UsrLotViewDS_UsrStatus_4hnag5u",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "above",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$UsrLotViewDS_UsrStatus_4hnag5u"
				},
				"parentName": "Main",
				"propertyName": "items",
				"index": 8
			},
			{
				"operation": "insert",
				"name": "addRecord_4q3d5ug",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_4q3d5ug_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_0my7ntt",
				"propertyName": "listActions",
				"index": 0
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"UsrLotViewDS_UsrStatus_7vhiaqo": {
						"modelConfig": {
							"path": "UsrLotViewDS.UsrStatus"
						}
					},
					"UsrLotViewDS_UsrViewDate_u6oapup": {
						"modelConfig": {
							"path": "UsrLotViewDS.UsrViewDate"
						}
					},
					"MyCustomLotAttribute": {
						"modelConfig": {
							"path": "UsrLotViewDS.UsrViewLot"
						}
					},
					"UsrLotViewDS_UsrResposible_qakcgw9": {
						"modelConfig": {
							"path": "UsrLotViewDS.UsrResposible"
						}
					},
					"UsrLotViewDS_UsrResposible_qakcgw9_List": {
						"isCollection": true,
						"modelConfig": {}
					},
					"UsrLotViewDS_UsrClient_mnvk9ww": {
						"modelConfig": {
							"path": "UsrLotViewDS.UsrClient"
						}
					},
					"UsrLotViewDS_UsrClient_mnvk9ww_List": {
						"isCollection": true,
						"modelConfig": {
							"sortingConfig": {
								"default": [
									{
										"columnName": "Name",
										"direction": "asc"
									}
								]
							}
						}
					},
					"UsrLotViewDS_UsrClientMess_0ohbvw3": {
						"modelConfig": {
							"path": "UsrLotViewDS.UsrClientMess"
						}
					},
					"UsrLotViewDS_UsrRealtorMess_u1v2pnq": {
						"modelConfig": {
							"path": "UsrLotViewDS.UsrRealtorMess"
						}
					},
					"UsrLotViewDS_UsrViewLot_5dnqh4k": {
						"modelConfig": {
							"path": "UsrLotViewDS.UsrViewLot"
						}
					},
					"UsrLotViewDS_UsrViewLot_5dnqh4k_List": {
						"isCollection": true,
						"modelConfig": {
							"sortingConfig": {
								"default": [
									{
										"columnName": "UsrName",
										"direction": "asc"
									}
								]
							}
						}
					},
					"UsrLotViewDS_UsrResult_e9ch20w": {
						"modelConfig": {
							"path": "UsrLotViewDS.UsrResult"
						}
					},
					"UsrLotViewDS_UsrResult_e9ch20w_List": {
						"isCollection": true,
						"modelConfig": {
							"sortingConfig": {
								"default": [
									{
										"columnName": "Name",
										"direction": "asc"
									}
								]
							}
						}
					},
					"UsrLotViewDS_UsrStatus_4hnag5u": {
						"modelConfig": {
							"path": "UsrLotViewDS.UsrStatus"
						}
					},
					"UsrLotViewDS_UsrStatus_4hnag5u_List": {
						"isCollection": true,
						"modelConfig": {
							"sortingConfig": {
								"default": [
									{
										"columnName": "Name",
										"direction": "asc"
									}
								]
							}
						}
					}
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"dataSources": {
						"UsrLotViewDS": {
							"type": "crt.EntityDataSource",
							"scope": "page",
							"config": {
								"entitySchemaName": "UsrLotView",
								"loadParameters": {
									"options": {
										"pagingConfig": {
											"rowCount": 1,
											"rowsOffset": -1
										},
										"sortingConfig": {
											"columns": []
										}
									}
								},
								"allowCopyingRecords": false
							}
						}
					},
					"primaryDataSourceName": "UsrLotViewDS"
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[
			{
			    request: "crt.SaveRecordRequest",
			    handler: async (request, next) => {
					const formFields = Object.keys(request.$context).filter(key => key.includes("UsrLotViewDS"));
					console.log("Поля форми:", formFields);
			        console.log("запуск");
			        
					const dateAttr = "UsrLotViewDS_UsrViewDate_u6oapup";
					const lotAttr = "MyCustomLotAttribute";
			        
			        const viewDate = await request.$context[dateAttr];
			        const viewLot = await request.$context[lotAttr];
			        const currentId = await request.$context.Id;
			
			        console.log("Зчитана дата:", viewDate);
			        console.log("Зчитаний лот:", viewLot?.value);
			
			        if (viewDate && viewLot) {
			            
						let minBreakMinutes = await new Promise((resolve) => {
						    Terrasoft.SysSettings.querySysSettingsItem("MinViewingBreak", resolve);
						});
						
						minBreakMinutes = minBreakMinutes || 30; 
						const minBreakMs = minBreakMinutes * 60 * 1000;
			
			            const esq = new Terrasoft.EntitySchemaQuery({ rootSchemaName: "UsrLotView" });
			            esq.addColumn("UsrViewDate");
			            
			            esq.filters.add("LotFilter", Terrasoft.createColumnFilterWithParameter(
			                Terrasoft.ComparisonType.EQUAL, "UsrViewLot", viewLot.value
			            ));
			
			            if (currentId) {
			                esq.filters.add("IdFilter", Terrasoft.createColumnFilterWithParameter(
			                    Terrasoft.ComparisonType.NOT_EQUAL, "Id", currentId
			                ));
			            }
			
			            const response = await new Promise((resolve) => esq.getEntityCollection(resolve));
			            
			            let hasConflict = false;
			
			            if (response && response.success) {
			                response.collection.each(function(item) {
			                    const existingDate = item.get("UsrViewDate");
			                    if (existingDate) {
			                        const diffMs = Math.abs(viewDate.getTime() - existingDate.getTime());
			                        
			                        if (diffMs < minBreakMs) {
			                            hasConflict = true;
			                        }
			                    }
			                });
			            }
			
			            if (hasConflict) {
			                await request.$context.executeRequest({
			                    type: "crt.ShowDialogRequest",
			                    $context: request.$context,
			                    dialogConfig: {
			                        data: {
			                            message: `Перерва між переглядами має бути не менше ніж ${minBreakMinutes} хвилин.`,
			                            actions: [{
			                                key: "OK",
			                                config: { color: "primary", caption: "Зрозуміло" }
			                            }]
			                        }
			                    }
			                });
			                
			                return false; // Блокуємо збереження
			            }
			        } else {
			            console.log(" Дата або лот не зчитали");
			        }
			        
			        return await next?.handle(request);
			    }
			}
		]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});