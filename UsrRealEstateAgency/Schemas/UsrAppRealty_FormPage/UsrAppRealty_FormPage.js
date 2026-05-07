define("UsrAppRealty_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "Tabs",
				"values": {
					"styleType": "default",
					"mode": "tab",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto",
					"allowToggleClose": true
				}
			},
			{
				"operation": "merge",
				"name": "Feed",
				"values": {
					"dataSourceName": "PDS",
					"entitySchemaName": "UsrRealty"
				}
			},
			{
				"operation": "merge",
				"name": "AttachmentList",
				"values": {
					"columns": [
						{
							"id": "b4cf209f-21da-4614-a778-a8ca1d7370e0",
							"code": "AttachmentListDS_Name",
							"caption": "#ResourceString(AttachmentListDS_Name)#",
							"dataValueType": 28,
							"width": 200
						}
					]
				}
			},
			{
				"operation": "insert",
				"name": "UsrRealtyName",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.UsrRealtyName",
					"control": "$UsrRealtyName",
					"labelPosition": "auto",
					"multiline": false
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "IndicatorWidget_u6mbj4k",
				"values": {
					"type": "crt.IndicatorWidget",
					"config": {
						"title": "#ResourceString(IndicatorWidget_u6mbj4k_title)#",
						"data": {
							"providing": {
								"attribute": "IndicatorWidget_u6mbj4k_Data",
								"schemaName": "UsrLotView",
								"filters": {
									"filter": {
										"items": {
											"23903aa2-fb2f-4def-87f9-89aeb7814201": {
												"filterType": 4,
												"comparisonType": 3,
												"isEnabled": true,
												"trimDateTimeParameterToDate": false,
												"leftExpression": {
													"expressionType": 0,
													"columnPath": "UsrResult"
												},
												"isAggregative": false,
												"dataValueType": 10,
												"referenceSchemaName": "UsrViewResult",
												"rightExpressions": [
													{
														"expressionType": 2,
														"parameter": {
															"dataValueType": 10,
															"value": {
																"Name": "Угода",
																"Id": "bda9f5ef-dd55-4c06-b034-ce6af80f82e7",
																"value": "bda9f5ef-dd55-4c06-b034-ce6af80f82e7",
																"displayValue": "Угода"
															}
														}
													}
												]
											}
										},
										"logicalOperation": 0,
										"isEnabled": true,
										"filterType": 6,
										"rootSchemaName": "UsrLotView"
									},
									"filterAttributes": []
								},
								"aggregation": {
									"column": {
										"orderDirection": 0,
										"orderPosition": -1,
										"isVisible": true,
										"expression": {
											"expressionType": 1,
											"functionArgument": {
												"expressionType": 0,
												"columnPath": "Id"
											},
											"functionType": 2,
											"aggregationType": 1,
											"aggregationEvalType": 2
										}
									}
								},
								"dependencies": [
									{
										"attributePath": "UsrViewLot.UsrRealty",
										"relationPath": "PDS.Id"
									}
								]
							},
							"formatting": {
								"type": "number",
								"decimalSeparator": ".",
								"decimalPrecision": 0,
								"thousandSeparator": ","
							}
						},
						"text": {
							"template": "#ResourceString(IndicatorWidget_u6mbj4k_template)#",
							"metricMacros": "{0}",
							"fontSizeMode": "medium",
							"labelPosition": "above-under"
						},
						"layout": {
							"color": "green"
						},
						"theme": "without-fill",
						"hideTitle": false
					},
					"visible": true
				},
				"parentName": "SideContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "IndicatorWidget_ou28ies",
				"values": {
					"type": "crt.IndicatorWidget",
					"config": {
						"title": "#ResourceString(IndicatorWidget_ou28ies_title)#",
						"data": {
							"providing": {
								"attribute": "IndicatorWidget_ou28ies_Data",
								"schemaName": "UsrLotView",
								"filters": {
									"filter": {
										"items": {},
										"logicalOperation": 0,
										"isEnabled": true,
										"filterType": 6,
										"rootSchemaName": "UsrLotView"
									},
									"filterAttributes": []
								},
								"aggregation": {
									"column": {
										"orderDirection": 0,
										"orderPosition": -1,
										"isVisible": true,
										"expression": {
											"expressionType": 1,
											"functionArgument": {
												"expressionType": 0,
												"columnPath": "UsrViewDate"
											},
											"functionType": 2,
											"aggregationType": 5,
											"aggregationEvalType": 0
										}
									}
								},
								"dependencies": [
									{
										"attributePath": "UsrViewLot.UsrRealty",
										"relationPath": "PDS.Id"
									}
								]
							},
							"formatting": {
								"type": "datetime",
								"date": {
									"display": true
								},
								"time": {
									"display": false
								}
							}
						},
						"text": {
							"template": "#ResourceString(IndicatorWidget_ou28ies_template)#",
							"metricMacros": "{0}",
							"fontSizeMode": "medium",
							"labelPosition": "above-under"
						},
						"layout": {
							"color": "green"
						},
						"theme": "without-fill",
						"hideTitle": false
					},
					"visible": true
				},
				"parentName": "SideContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Input_13pz7hz",
				"values": {
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_UsrDescription_jo3u7gm",
					"control": "$PDS_UsrDescription_jo3u7gm",
					"placeholder": "",
					"tooltip": "",
					"readonly": false,
					"multiline": true,
					"labelPosition": "auto",
					"visible": true
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ComboBox_r3gbuv5",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrType_j5rz9s6",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_UsrType_j5rz9s6"
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "addRecord_76t371m",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_76t371m_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_r3gbuv5",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Input_9otx0zc",
				"values": {
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_UsrAdress_cbytioa",
					"control": "$PDS_UsrAdress_cbytioa",
					"placeholder": "",
					"tooltip": "",
					"readonly": false,
					"multiline": false,
					"labelPosition": "auto"
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "NumberInput_hx99cuq",
				"values": {
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrFloor_74vtbp5",
					"control": "$PDS_UsrFloor_74vtbp5",
					"readonly": false,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "NumberInput_8plp8ty",
				"values": {
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrRealtySquare_no0iqh5",
					"control": "$PDS_UsrRealtySquare_no0iqh5",
					"readonly": false,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "NumberInput_ca99667",
				"values": {
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrLivingArea_5gr2y0q",
					"control": "$PDS_UsrLivingArea_5gr2y0q",
					"readonly": false,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "NumberInput_xmlwjtc",
				"values": {
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrRoomsCount_botg8ub",
					"control": "$PDS_UsrRoomsCount_botg8ub",
					"readonly": false,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "ComboBox_bdhpbcj",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrResponsible_a8uybnf",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_UsrResponsible_a8uybnf"
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 8
			},
			{
				"operation": "insert",
				"name": "addRecord_svm5ut6",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_svm5ut6_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_bdhpbcj",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DataGrid_x4n110j",
				"values": {
					"type": "crt.DataGrid",
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						}
					},
					"items": "$DataGrid_x4n110j",
					"primaryColumnName": "DataGrid_x4n110jDS_Id",
					"columns": [
						{
							"id": "24237f9e-579e-d24d-9d75-33f68484b469",
							"code": "DataGrid_x4n110jDS_UsrClient",
							"caption": "#ResourceString(DataGrid_x4n110jDS_UsrClient)#",
							"dataValueType": 10
						},
						{
							"id": "9c440a7c-fd58-14ec-cb48-c4e6ec1c965a",
							"code": "DataGrid_x4n110jDS_UsrResposible",
							"caption": "#ResourceString(DataGrid_x4n110jDS_UsrResposible)#",
							"dataValueType": 10
						},
						{
							"id": "a873e09b-952f-c017-b9f7-64c90a7beb3c",
							"code": "DataGrid_x4n110jDS_UsrClient",
							"caption": "#ResourceString(DataGrid_x4n110jDS_UsrClient)#",
							"dataValueType": 10
						},
						{
							"id": "7e68aa21-c1b4-cee0-7fac-70ff3bcdde13",
							"code": "DataGrid_x4n110jDS_UsrViewLot",
							"caption": "#ResourceString(DataGrid_x4n110jDS_UsrViewLot)#",
							"dataValueType": 10
						},
						{
							"id": "8d1eb226-d504-386f-98d8-0f32189dc5f4",
							"code": "DataGrid_x4n110jDS_UsrStatus",
							"caption": "#ResourceString(DataGrid_x4n110jDS_UsrStatus)#",
							"dataValueType": 10
						},
						{
							"id": "98245908-a0df-9936-b342-c4530409d963",
							"code": "DataGrid_x4n110jDS_UsrResult",
							"caption": "#ResourceString(DataGrid_x4n110jDS_UsrResult)#",
							"dataValueType": 10
						}
					],
					"placeholder": false,
					"visible": true,
					"fitContent": true
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 9
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"UsrRealtyName": {
						"modelConfig": {
							"path": "PDS.UsrRealtyName"
						}
					},
					"PDS_UsrAdress_cbytioa": {
						"modelConfig": {
							"path": "PDS.UsrAdress"
						}
					},
					"PDS_UsrResponsible_a8uybnf": {
						"modelConfig": {
							"path": "PDS.UsrResponsible"
						}
					},
					"PDS_UsrResponsible_a8uybnf_List": {
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
					"PDS_UsrLivingArea_5gr2y0q": {
						"modelConfig": {
							"path": "PDS.UsrLivingArea"
						}
					},
					"PDS_UsrRoomsCount_botg8ub": {
						"modelConfig": {
							"path": "PDS.UsrRoomsCount"
						}
					},
					"PDS_UsrDescription_jo3u7gm": {
						"modelConfig": {
							"path": "PDS.UsrDescription"
						}
					},
					"PDS_UsrRealtySquare_no0iqh5": {
						"modelConfig": {
							"path": "PDS.UsrRealtySquare"
						}
					},
					"PDS_UsrFloor_74vtbp5": {
						"modelConfig": {
							"path": "PDS.UsrFloor"
						}
					},
					"PDS_UsrType_j5rz9s6": {
						"modelConfig": {
							"path": "PDS.UsrType"
						}
					},
					"PDS_UsrType_j5rz9s6_List": {
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
					"DataGrid_x4n110j": {
						"isCollection": true,
						"modelConfig": {
							"path": "DataGrid_x4n110jDS",
							"filterAttributes": [
								{
									"loadOnChange": true,
									"name": "DataGrid_x4n110j_PredefinedFilter"
								}
							],
							"sortingConfig": {
								"default": [
									{
										"direction": "asc",
										"columnName": "UsrClient"
									}
								]
							}
						},
						"viewModelConfig": {
							"attributes": {
								"DataGrid_x4n110jDS_UsrClient": {
									"modelConfig": {
										"path": "DataGrid_x4n110jDS.UsrClient"
									}
								},
								"DataGrid_x4n110jDS_UsrResposible": {
									"modelConfig": {
										"path": "DataGrid_x4n110jDS.UsrResposible"
									}
								},
								"DataGrid_x4n110jDS_UsrViewLot": {
									"modelConfig": {
										"path": "DataGrid_x4n110jDS.UsrViewLot"
									}
								},
								"DataGrid_x4n110jDS_UsrStatus": {
									"modelConfig": {
										"path": "DataGrid_x4n110jDS.UsrStatus"
									}
								},
								"DataGrid_x4n110jDS_UsrResult": {
									"modelConfig": {
										"path": "DataGrid_x4n110jDS.UsrResult"
									}
								},
								"DataGrid_x4n110jDS_Id": {
									"modelConfig": {
										"path": "DataGrid_x4n110jDS.Id"
									}
								}
							}
						}
					},
					"DataGrid_x4n110j_PredefinedFilter": {
						"value": null
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Id",
					"modelConfig"
				],
				"values": {
					"path": "PDS.Id"
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"primaryDataSourceName": "PDS",
					"dependencies": {
						"DataGrid_x4n110jDS": [
							{
								"attributePath": "UsrViewLot.UsrRealty",
								"relationPath": "PDS.Id"
							}
						]
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"dataSources"
				],
				"values": {
					"PDS": {
						"type": "crt.EntityDataSource",
						"config": {
							"entitySchemaName": "UsrRealty"
						},
						"scope": "page"
					},
					"DataGrid_x4n110jDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "UsrLotView",
							"attributes": {
								"UsrClient": {
									"path": "UsrClient"
								},
								"UsrResposible": {
									"path": "UsrResposible"
								},
								"UsrViewLot": {
									"path": "UsrViewLot"
								},
								"UsrStatus": {
									"path": "UsrStatus"
								},
								"UsrResult": {
									"path": "UsrResult"
								}
							}
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});