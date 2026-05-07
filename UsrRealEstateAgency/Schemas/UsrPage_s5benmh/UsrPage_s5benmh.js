define("UsrPage_s5benmh", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "insert",
				"name": "ComboBox_6j67y41",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.UsrLotViewDS_UsrResposible_nlri741",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "above",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$UsrLotViewDS_UsrResposible_nlri741"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "addRecord_fiqqo2g",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_fiqqo2g_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_6j67y41",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DateTimePicker_tfl01ho",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"label": "$Resources.Strings.UsrLotViewDS_UsrViewDate_3f4t5r9",
					"placeholder": "",
					"readonly": false,
					"labelPosition": "above",
					"tooltip": "",
					"pickerType": "datetime",
					"control": "$UsrLotViewDS_UsrViewDate_3f4t5r9"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ComboBox_gia3r6e",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 3,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.UsrLotViewDS_UsrClient_vfdiave",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "above",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$UsrLotViewDS_UsrClient_vfdiave"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "addRecord_rvk84em",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_rvk84em_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_gia3r6e",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Input_qs1ezor",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 4,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.UsrLotViewDS_UsrClientMess_98ajukt",
					"control": "$UsrLotViewDS_UsrClientMess_98ajukt",
					"placeholder": "",
					"tooltip": "",
					"readonly": false,
					"multiline": false,
					"labelPosition": "above"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "ComboBox_g2gct7y",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 5,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.UsrLotViewDS_UsrResult_1jtbpg5",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "above",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$UsrLotViewDS_UsrResult_1jtbpg5"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "addRecord_wzriq0y",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_wzriq0y_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_g2gct7y",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_3d8chzu",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 6,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.UsrLotViewDS_UsrStatus_swzlhvl",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "above",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$UsrLotViewDS_UsrStatus_swzlhvl"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "addRecord_hubaaw1",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_hubaaw1_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_3d8chzu",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Input_zujtvy9",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 7,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.UsrLotViewDS_UsrRealtorMess_qnnqxwh",
					"control": "$UsrLotViewDS_UsrRealtorMess_qnnqxwh",
					"placeholder": "",
					"tooltip": "",
					"readonly": false,
					"multiline": false,
					"labelPosition": "above"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "ComboBox_yjj70g0",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 8,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.UsrLotViewDS_UsrViewLot_0l2yx82",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "above",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$UsrLotViewDS_UsrViewLot_0l2yx82"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "addRecord_lt35z3s",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_lt35z3s_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_yjj70g0",
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
					"UsrLotViewDS_UsrResposible_nlri741": {
						"modelConfig": {
							"path": "UsrLotViewDS.UsrResposible"
						}
					},
					"UsrLotViewDS_UsrResposible_nlri741_List": {
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
					"UsrLotViewDS_UsrViewDate_3f4t5r9": {
						"modelConfig": {
							"path": "UsrLotViewDS.UsrViewDate"
						}
					},
					"UsrLotViewDS_UsrClient_vfdiave": {
						"modelConfig": {
							"path": "UsrLotViewDS.UsrClient"
						}
					},
					"UsrLotViewDS_UsrClient_vfdiave_List": {
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
					"UsrLotViewDS_UsrClientMess_98ajukt": {
						"modelConfig": {
							"path": "UsrLotViewDS.UsrClientMess"
						}
					},
					"UsrLotViewDS_UsrRealtorMess_qnnqxwh": {
						"modelConfig": {
							"path": "UsrLotViewDS.UsrRealtorMess"
						}
					},
					"UsrLotViewDS_UsrViewLot_0l2yx82": {
						"modelConfig": {
							"path": "UsrLotViewDS.UsrViewLot"
						}
					},
					"UsrLotViewDS_UsrViewLot_0l2yx82_List": {
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
					"UsrLotViewDS_UsrResult_1jtbpg5": {
						"modelConfig": {
							"path": "UsrLotViewDS.UsrResult"
						}
					},
					"UsrLotViewDS_UsrResult_1jtbpg5_List": {
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
					"UsrLotViewDS_UsrStatus_swzlhvl": {
						"modelConfig": {
							"path": "UsrLotViewDS.UsrStatus"
						}
					},
					"UsrLotViewDS_UsrStatus_swzlhvl_List": {
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
			    // подія  на натискання  кнопки "Зберегти"
			    request: "crt.SaveRecordRequest",
			    handler: async (request, next) => {
					console.log("!!! ВАЛІДАТОР ЗАПУЩЕНО !!!");
			        const dateAttr = "UsrLotViewDS_UsrViewDate_3f4t5r9";
			        const lotAttr = "UsrLotViewDS_UsrViewLot_0l2yx82";
			        
			        const viewDate = await request.$context[dateAttr];
			        const viewLot = await request.$context[lotAttr];
			        const currentId = await request.$context.Id;
			
			        // перевірка дати і лоту
			        if (viewDate && viewLot) {
			            
			            //  Отримуємо системне налаштування : мінімальна перерва
			            const sysSettingsResult = await request.$context.executeRequest({
			                type: "crt.QuerySysSettingsRequest",
			                sysSettingsNameArray: ["MinViewingBreak"]
			            });
			            const minBreakMinutes = sysSettingsResult?.MinViewingBreak || 30; 
			            const minBreakMs = minBreakMinutes * 60 * 1000;
			
			            // запит в базу
			            // всі перегляди (UsrLotView)
			            const esq = new Terrasoft.EntitySchemaQuery({ rootSchemaName: "UsrLotView" });
			            esq.addColumn("UsrViewDate");
			            
			            // перегляди тільки для вибраного 
			            esq.filters.add("LotFilter", Terrasoft.createColumnFilterWithParameter(
			                Terrasoft.ComparisonType.EQUAL, "UsrViewLot", viewLot.value
			            ));
			
			            if (currentId) {
			                esq.filters.add("IdFilter", Terrasoft.createColumnFilterWithParameter(
			                    Terrasoft.ComparisonType.NOT_EQUAL, "Id", currentId
			                ));
			            }
			
			            //запит у базу
			            const response = await new Promise((resolve) => esq.getEntityCollection(resolve));
			            
			            let hasConflict = false;
			
			            // Перевірка кожного знайденого перегляду
			            if (response && response.success) {
			                response.collection.each(function(item) {
			                    const existingDate = item.get("UsrViewDate");
			                    if (existingDate) {
			                        // різниця в часі між існуючим і новим переглядом
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
			                
			                return false;
			            }
			        }
			        
			        return await next?.handle(request);
			    }
			}
		]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});