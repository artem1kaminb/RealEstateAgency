define("UsrPage_j9c8amg", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "insert",
				"name": "DateTimePicker_ugn9s56",
				"values": {
					"type": "crt.DateTimePicker",
					"label": "$Resources.Strings.UsrLotViewDS_UsrViewDate_ef3ep48",
					"placeholder": "",
					"readonly": false,
					"labelPosition": "auto",
					"tooltip": "",
					"pickerType": "datetime",
					"control": "$UsrLotViewDS_UsrViewDate_ef3ep48"
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ComboBox_p0vbg3h",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.UsrLotViewDS_UsrResposible_df1nrrr",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$UsrLotViewDS_UsrResposible_df1nrrr"
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "addRecord_xgn920u",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_xgn920u_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_p0vbg3h",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_sbpdrnz",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.UsrLotViewDS_UsrStatus_gm1ec7c",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$UsrLotViewDS_UsrStatus_gm1ec7c"
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "addRecord_5djsyp8",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_5djsyp8_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_sbpdrnz",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_oewrf9b",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.UsrLotViewDS_UsrClient_qa29ot4",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$UsrLotViewDS_UsrClient_qa29ot4"
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "addRecord_sip5any",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_sip5any_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_oewrf9b",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Input_bfezs0b",
				"values": {
					"type": "crt.Input",
					"label": "$Resources.Strings.UsrLotViewDS_UsrClientMess_6anvk0h",
					"control": "$UsrLotViewDS_UsrClientMess_6anvk0h",
					"placeholder": "",
					"tooltip": "",
					"readonly": false,
					"multiline": false,
					"labelPosition": "auto"
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "Input_6ifqcmj",
				"values": {
					"type": "crt.Input",
					"label": "$Resources.Strings.UsrLotViewDS_UsrRealtorMess_aiwypuc",
					"control": "$UsrLotViewDS_UsrRealtorMess_aiwypuc",
					"placeholder": "",
					"tooltip": "",
					"readonly": false,
					"multiline": false,
					"labelPosition": "auto"
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "ComboBox_52sduap",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.UsrLotViewDS_UsrViewLot_v93cehq",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$UsrLotViewDS_UsrViewLot_v93cehq"
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "addRecord_kx7j8t7",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_kx7j8t7_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_52sduap",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_qpvro3f",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.UsrLotViewDS_UsrResult_t7rninj",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$UsrLotViewDS_UsrResult_t7rninj"
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 8
			},
			{
				"operation": "insert",
				"name": "addRecord_yg2fwkr",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_yg2fwkr_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_qpvro3f",
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
					"UsrLotViewDS_UsrViewDate_ef3ep48": {
						"modelConfig": {
							"path": "UsrLotViewDS.UsrViewDate"
						}
					},
					"UsrLotViewDS_UsrResposible_df1nrrr": {
						"modelConfig": {
							"path": "UsrLotViewDS.UsrResposible"
						}
					},
					"UsrLotViewDS_UsrResposible_df1nrrr_List": {
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
					"UsrLotViewDS_UsrStatus_gm1ec7c": {
						"modelConfig": {
							"path": "UsrLotViewDS.UsrStatus"
						}
					},
					"UsrLotViewDS_UsrStatus_gm1ec7c_List": {
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
					"UsrLotViewDS_UsrClient_qa29ot4": {
						"modelConfig": {
							"path": "UsrLotViewDS.UsrClient"
						}
					},
					"UsrLotViewDS_UsrClient_qa29ot4_List": {
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
					"UsrLotViewDS_UsrClientMess_6anvk0h": {
						"modelConfig": {
							"path": "UsrLotViewDS.UsrClientMess"
						}
					},
					"UsrLotViewDS_UsrRealtorMess_aiwypuc": {
						"modelConfig": {
							"path": "UsrLotViewDS.UsrRealtorMess"
						}
					},
					"UsrLotViewDS_UsrViewLot_v93cehq": {
						"modelConfig": {
							"path": "UsrLotViewDS.UsrViewLot"
						}
					},
					"UsrLotViewDS_UsrViewLot_v93cehq_List": {
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
					"UsrLotViewDS_UsrResult_t7rninj": {
						"modelConfig": {
							"path": "UsrLotViewDS.UsrResult"
						}
					},
					"UsrLotViewDS_UsrResult_t7rninj_List": {
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
					"primaryDataSourceName": "UsrLotViewDS"
				}
			},
			{
				"operation": "merge",
				"path": [
					"dataSources"
				],
				"values": {
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
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});