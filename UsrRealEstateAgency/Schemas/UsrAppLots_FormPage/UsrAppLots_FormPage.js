define("UsrAppLots_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "SaveButton",
				"values": {
					"size": "large",
					"iconPosition": "only-text"
				}
			},
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
					"entitySchemaName": "UsrLot"
				}
			},
			{
				"operation": "merge",
				"name": "AttachmentList",
				"values": {
					"columns": [
						{
							"id": "8be80e86-b9e2-43eb-a38b-5a8c5cd77b9b",
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
				"name": "UsrName",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.UsrName",
					"control": "$UsrName",
					"labelPosition": "auto"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Button_pquk12e",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_pquk12e_caption)#",
					"color": "default",
					"disabled": false,
					"size": "large",
					"iconPosition": "only-text",
					"visible": true,
					"clicked": {
						"request": "crt.RunBusinessProcessRequest",
						"params": {
							"processName": "UsrGenerateLotViewsProcess",
							"processRunType": "ForTheSelectedPage",
							"saveAtProcessStart": true,
							"showNotification": true,
							"recordIdProcessParameterName": "LotId"
						}
					},
					"clickMode": "default"
				},
				"parentName": "SideContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ComboBox_yep1qhf",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrStatus_0pz9jxw",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_UsrStatus_0pz9jxw"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "addRecord_66k0w32",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_66k0w32_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_yep1qhf",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_xg3nd4d",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrRealty_hzihhx1",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_UsrRealty_hzihhx1"
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "addRecord_xb8a0s6",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_xb8a0s6_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_xg3nd4d",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_5ti9dtt",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrRealtor_otpw7n4",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_UsrRealtor_otpw7n4"
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "addRecord_1me11ma",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_1me11ma_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_5ti9dtt",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "NumberInput_4flgrdo",
				"values": {
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrCommission_k5zfv5j",
					"control": "$PDS_UsrCommission_k5zfv5j",
					"readonly": false,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "DateTimePicker_4pbrx3k",
				"values": {
					"type": "crt.DateTimePicker",
					"label": "$Resources.Strings.PDS_UsrPublishedOn_079o8dq",
					"placeholder": "",
					"readonly": false,
					"labelPosition": "auto",
					"tooltip": "",
					"pickerType": "datetime",
					"control": "$PDS_UsrPublishedOn_079o8dq"
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "ComboBox_mpu878s",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrOwner_g9vncyj",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_UsrOwner_g9vncyj"
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "addRecord_8rkabzh",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_8rkabzh_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_mpu878s",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "NumberInput_hxjdne6",
				"values": {
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrPrice_66ar3n2",
					"control": "$PDS_UsrPrice_66ar3n2",
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
				"name": "ComboBox_1f5nn60",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrCurrency_jw4gexs",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_UsrCurrency_jw4gexs"
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "addRecord_czhcwvf",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_czhcwvf_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_1f5nn60",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_4z5opvm",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrType_at9nmeh",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_UsrType_at9nmeh"
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 8
			},
			{
				"operation": "insert",
				"name": "addRecord_lyca7w9",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_lyca7w9_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_4z5opvm",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_6re1gtq",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_6re1gtq_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "small",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"fitContent": true
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 9
			},
			{
				"operation": "insert",
				"name": "Button_hj1m116",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_hj1m116_caption)#",
					"color": "default",
					"disabled": false,
					"size": "large",
					"iconPosition": "only-text",
					"visible": true,
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "UsrLotView",
							"defaultValues": [
								{
									"attributeName": "UsrViewLot",
									"value": "$Id"
								}
							]
						}
					},
					"clickMode": "default"
				},
				"parentName": "ExpansionPanel_6re1gtq",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DataGrid_zq08gw0",
				"values": {
					"type": "crt.DataGrid",
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						},
						"editable": {
							"enable": false,
							"itemsCreation": false,
							"floatingEditPanel": false
						}
					},
					"items": "$DataGrid_zq08gw0",
					"primaryColumnName": "DataGrid_zq08gw0DS_Id",
					"columns": [
						{
							"id": "aad41eee-a43b-edca-b805-0f29bad54c28",
							"code": "DataGrid_zq08gw0DS_UsrClient",
							"caption": "#ResourceString(DataGrid_zq08gw0DS_UsrClient)#",
							"dataValueType": 10
						},
						{
							"id": "b5765a90-0604-ef88-af1d-a6c52f79942f",
							"code": "DataGrid_zq08gw0DS_UsrViewDate",
							"caption": "#ResourceString(DataGrid_zq08gw0DS_UsrViewDate)#",
							"dataValueType": 7
						},
						{
							"id": "030c57e7-6dee-6cda-c848-ed4c7c3a14dd",
							"code": "DataGrid_zq08gw0DS_UsrStatus",
							"caption": "#ResourceString(DataGrid_zq08gw0DS_UsrStatus)#",
							"dataValueType": 10
						},
						{
							"id": "2baa61c2-3739-c9e7-6d1f-d382d454dccd",
							"code": "DataGrid_zq08gw0DS_UsrResposible",
							"caption": "#ResourceString(DataGrid_zq08gw0DS_UsrResposible)#",
							"dataValueType": 10
						},
						{
							"id": "ca4c0c07-7dc4-c3f2-94a9-e3c50372ce0c",
							"code": "DataGrid_zq08gw0DS_UsrResult",
							"caption": "#ResourceString(DataGrid_zq08gw0DS_UsrResult)#",
							"dataValueType": 10
						}
					],
					"placeholder": false,
					"visible": true,
					"fitContent": true
				},
				"parentName": "ExpansionPanel_6re1gtq",
				"propertyName": "tools",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_braz3n8",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_6re1gtq",
				"propertyName": "items",
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
					"UsrName": {
						"modelConfig": {
							"path": "PDS.UsrName"
						}
					},
					"PDS_UsrStatus_0pz9jxw": {
						"modelConfig": {
							"path": "PDS.UsrStatus"
						}
					},
					"PDS_UsrStatus_0pz9jxw_List": {
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
					"PDS_UsrRealty_hzihhx1": {
						"modelConfig": {
							"path": "PDS.UsrRealty"
						}
					},
					"PDS_UsrRealty_hzihhx1_List": {
						"isCollection": true,
						"modelConfig": {
							"sortingConfig": {
								"default": [
									{
										"columnName": "UsrRealtyName",
										"direction": "asc"
									}
								]
							}
						}
					},
					"PDS_UsrRealtor_otpw7n4": {
						"modelConfig": {
							"path": "PDS.UsrRealtor"
						}
					},
					"PDS_UsrRealtor_otpw7n4_List": {
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
					"PDS_UsrCommission_k5zfv5j": {
						"modelConfig": {
							"path": "PDS.UsrCommission"
						}
					},
					"PDS_UsrPublishedOn_079o8dq": {
						"modelConfig": {
							"path": "PDS.UsrPublishedOn"
						}
					},
					"PDS_UsrOwner_g9vncyj": {
						"modelConfig": {
							"path": "PDS.UsrOwner"
						}
					},
					"PDS_UsrOwner_g9vncyj_List": {
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
					"PDS_UsrPrice_66ar3n2": {
						"modelConfig": {
							"path": "PDS.UsrPrice"
						}
					},
					"PDS_UsrCurrency_jw4gexs": {
						"modelConfig": {
							"path": "PDS.UsrCurrency"
						}
					},
					"PDS_UsrCurrency_jw4gexs_List": {
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
					"PDS_UsrType_at9nmeh": {
						"modelConfig": {
							"path": "PDS.UsrType"
						}
					},
					"PDS_UsrType_at9nmeh_List": {
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
					"DataGrid_zq08gw0": {
						"isCollection": true,
						"modelConfig": {
							"path": "DataGrid_zq08gw0DS",
							"filterAttributes": [
								{
									"loadOnChange": true,
									"name": "DataGrid_zq08gw0_PredefinedFilter"
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
								"DataGrid_zq08gw0DS_UsrClient": {
									"modelConfig": {
										"path": "DataGrid_zq08gw0DS.UsrClient"
									}
								},
								"DataGrid_zq08gw0DS_UsrViewDate": {
									"modelConfig": {
										"path": "DataGrid_zq08gw0DS.UsrViewDate"
									}
								},
								"DataGrid_zq08gw0DS_UsrStatus": {
									"modelConfig": {
										"path": "DataGrid_zq08gw0DS.UsrStatus"
									}
								},
								"DataGrid_zq08gw0DS_UsrResposible": {
									"modelConfig": {
										"path": "DataGrid_zq08gw0DS.UsrResposible"
									}
								},
								"DataGrid_zq08gw0DS_UsrResult": {
									"modelConfig": {
										"path": "DataGrid_zq08gw0DS.UsrResult"
									}
								},
								"DataGrid_zq08gw0DS_Id": {
									"modelConfig": {
										"path": "DataGrid_zq08gw0DS.Id"
									}
								}
							}
						}
					},
					"DataGrid_zq08gw0_PredefinedFilter": {
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
						"DataGrid_zq08gw0DS": [
							{
								"attributePath": "UsrViewLot",
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
							"entitySchemaName": "UsrLot"
						},
						"scope": "page"
					},
					"DataGrid_zq08gw0DS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "UsrLotView",
							"attributes": {
								"UsrClient": {
									"path": "UsrClient"
								},
								"UsrViewDate": {
									"path": "UsrViewDate"
								},
								"UsrStatus": {
									"path": "UsrStatus"
								},
								"UsrResposible": {
									"path": "UsrResposible"
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
		handlers: /**SCHEMA_HANDLERS*/[
			{
				
				request: "crt.HandleViewModelAttributeChangeRequest",
				handler: async (request, next) => {
					
					const priceAttr = "PDS_UsrPrice_66ar3n2";
					const typeAttr = "PDS_UsrType_at9nmeh";
					const commissionAttr = "PDS_UsrCommission_k5zfv5j";

					if (request.attributeName === priceAttr || request.attributeName === typeAttr) {
						
						const price = await request.$context[priceAttr];
						const type = await request.$context[typeAttr];

						if (!price || !type) {
							return next?.handle(request);
						}

						let percent = 0;
						if (type.displayValue === "Оренда") {
							percent = 50;
						} else if (type.displayValue === "Продаж") {
							percent = 5;
						}

						let calculatedCommission = price * (percent / 100);

						const maxCommission = await new Promise((resolve) => {
							Terrasoft.SysSettings.querySysSettingsItem("UsrMaxRealtorCommission", resolve);
						});

						console.log("Розрахована базова комісія:", calculatedCommission);
						console.log("Максимальна комісія з налаштувань:", maxCommission);

						if (maxCommission !== undefined && maxCommission !== null && calculatedCommission > maxCommission) {
							calculatedCommission = maxCommission;
						}

						request.$context[commissionAttr] = calculatedCommission;
					}

					return next?.handle(request);
				}
			}
			]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});