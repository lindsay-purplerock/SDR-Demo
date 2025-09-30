var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_EPAPRTRFacilities2023_1 = new ol.format.GeoJSON();
var features_EPAPRTRFacilities2023_1 = format_EPAPRTRFacilities2023_1.readFeatures(json_EPAPRTRFacilities2023_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EPAPRTRFacilities2023_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EPAPRTRFacilities2023_1.addFeatures(features_EPAPRTRFacilities2023_1);
var lyr_EPAPRTRFacilities2023_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EPAPRTRFacilities2023_1, 
                style: style_EPAPRTRFacilities2023_1,
                popuplayertitle: 'EPA PRTR Facilities 2023',
                interactive: true,
                title: '<img src="styles/legend/EPAPRTRFacilities2023_1.png" /> EPA PRTR Facilities 2023'
            });
var format_Proposed_National_Heritage_Area_2 = new ol.format.GeoJSON();
var features_Proposed_National_Heritage_Area_2 = format_Proposed_National_Heritage_Area_2.readFeatures(json_Proposed_National_Heritage_Area_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Proposed_National_Heritage_Area_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Proposed_National_Heritage_Area_2.addFeatures(features_Proposed_National_Heritage_Area_2);
var lyr_Proposed_National_Heritage_Area_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Proposed_National_Heritage_Area_2, 
                style: style_Proposed_National_Heritage_Area_2,
                popuplayertitle: 'Proposed_National_Heritage_Area',
                interactive: true,
                title: '<img src="styles/legend/Proposed_National_Heritage_Area_2.png" /> Proposed_National_Heritage_Area'
            });
var format_National_Heritage_Areas_3 = new ol.format.GeoJSON();
var features_National_Heritage_Areas_3 = format_National_Heritage_Areas_3.readFeatures(json_National_Heritage_Areas_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_National_Heritage_Areas_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_National_Heritage_Areas_3.addFeatures(features_National_Heritage_Areas_3);
var lyr_National_Heritage_Areas_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_National_Heritage_Areas_3, 
                style: style_National_Heritage_Areas_3,
                popuplayertitle: 'National_Heritage_Areas',
                interactive: true,
                title: '<img src="styles/legend/National_Heritage_Areas_3.png" /> National_Heritage_Areas'
            });
var format_SheelaNaGigLocations_4 = new ol.format.GeoJSON();
var features_SheelaNaGigLocations_4 = format_SheelaNaGigLocations_4.readFeatures(json_SheelaNaGigLocations_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SheelaNaGigLocations_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SheelaNaGigLocations_4.addFeatures(features_SheelaNaGigLocations_4);
var lyr_SheelaNaGigLocations_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SheelaNaGigLocations_4, 
                style: style_SheelaNaGigLocations_4,
                popuplayertitle: ' Sheela Na Gig Locations',
                interactive: true,
                title: '<img src="styles/legend/SheelaNaGigLocations_4.png" />  Sheela Na Gig Locations'
            });
var format_PrehistoricRockArt_5 = new ol.format.GeoJSON();
var features_PrehistoricRockArt_5 = format_PrehistoricRockArt_5.readFeatures(json_PrehistoricRockArt_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PrehistoricRockArt_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrehistoricRockArt_5.addFeatures(features_PrehistoricRockArt_5);
var lyr_PrehistoricRockArt_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PrehistoricRockArt_5, 
                style: style_PrehistoricRockArt_5,
                popuplayertitle: 'Prehistoric Rock Art',
                interactive: true,
                title: '<img src="styles/legend/PrehistoricRockArt_5.png" /> Prehistoric Rock Art'
            });
var format_NMSWreckInventory_6 = new ol.format.GeoJSON();
var features_NMSWreckInventory_6 = format_NMSWreckInventory_6.readFeatures(json_NMSWreckInventory_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NMSWreckInventory_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NMSWreckInventory_6.addFeatures(features_NMSWreckInventory_6);
var lyr_NMSWreckInventory_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NMSWreckInventory_6, 
                style: style_NMSWreckInventory_6,
                popuplayertitle: ' NMS Wreck Inventory',
                interactive: true,
                title: '<img src="styles/legend/NMSWreckInventory_6.png" />  NMS Wreck Inventory'
            });
var format_NMS_Stone_Circles_7 = new ol.format.GeoJSON();
var features_NMS_Stone_Circles_7 = format_NMS_Stone_Circles_7.readFeatures(json_NMS_Stone_Circles_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NMS_Stone_Circles_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NMS_Stone_Circles_7.addFeatures(features_NMS_Stone_Circles_7);
var lyr_NMS_Stone_Circles_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NMS_Stone_Circles_7, 
                style: style_NMS_Stone_Circles_7,
                popuplayertitle: 'NMS_Stone_Circles',
                interactive: true,
                title: '<img src="styles/legend/NMS_Stone_Circles_7.png" /> NMS_Stone_Circles'
            });
var format_NMS_Sites_and_Monuments_Records_8 = new ol.format.GeoJSON();
var features_NMS_Sites_and_Monuments_Records_8 = format_NMS_Sites_and_Monuments_Records_8.readFeatures(json_NMS_Sites_and_Monuments_Records_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NMS_Sites_and_Monuments_Records_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NMS_Sites_and_Monuments_Records_8.addFeatures(features_NMS_Sites_and_Monuments_Records_8);
var lyr_NMS_Sites_and_Monuments_Records_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NMS_Sites_and_Monuments_Records_8, 
                style: style_NMS_Sites_and_Monuments_Records_8,
                popuplayertitle: 'NMS_Sites_and_Monuments_Records',
                interactive: true,
                title: '<img src="styles/legend/NMS_Sites_and_Monuments_Records_8.png" /> NMS_Sites_and_Monuments_Records'
            });
var format_NMS_Prehistoric_Art_9 = new ol.format.GeoJSON();
var features_NMS_Prehistoric_Art_9 = format_NMS_Prehistoric_Art_9.readFeatures(json_NMS_Prehistoric_Art_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NMS_Prehistoric_Art_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NMS_Prehistoric_Art_9.addFeatures(features_NMS_Prehistoric_Art_9);
var lyr_NMS_Prehistoric_Art_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NMS_Prehistoric_Art_9, 
                style: style_NMS_Prehistoric_Art_9,
                popuplayertitle: 'NMS_Prehistoric_Art',
                interactive: true,
                title: '<img src="styles/legend/NMS_Prehistoric_Art_9.png" /> NMS_Prehistoric_Art'
            });
var format_NMS_Archaelogical_Survey_10 = new ol.format.GeoJSON();
var features_NMS_Archaelogical_Survey_10 = format_NMS_Archaelogical_Survey_10.readFeatures(json_NMS_Archaelogical_Survey_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NMS_Archaelogical_Survey_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NMS_Archaelogical_Survey_10.addFeatures(features_NMS_Archaelogical_Survey_10);
var lyr_NMS_Archaelogical_Survey_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NMS_Archaelogical_Survey_10, 
                style: style_NMS_Archaelogical_Survey_10,
                popuplayertitle: 'NMS_Archaelogical_Survey',
                interactive: true,
                title: '<img src="styles/legend/NMS_Archaelogical_Survey_10.png" /> NMS_Archaelogical_Survey'
            });
var format_NIAHPost1700sArchitechturalHeritage_11 = new ol.format.GeoJSON();
var features_NIAHPost1700sArchitechturalHeritage_11 = format_NIAHPost1700sArchitechturalHeritage_11.readFeatures(json_NIAHPost1700sArchitechturalHeritage_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NIAHPost1700sArchitechturalHeritage_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NIAHPost1700sArchitechturalHeritage_11.addFeatures(features_NIAHPost1700sArchitechturalHeritage_11);
var lyr_NIAHPost1700sArchitechturalHeritage_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NIAHPost1700sArchitechturalHeritage_11, 
                style: style_NIAHPost1700sArchitechturalHeritage_11,
                popuplayertitle: 'NIAH Post-1700s Architechtural Heritage',
                interactive: true,
                title: '<img src="styles/legend/NIAHPost1700sArchitechturalHeritage_11.png" /> NIAH Post-1700s Architechtural Heritage'
            });
var format_GSIGeoheritageAuditedSites_12 = new ol.format.GeoJSON();
var features_GSIGeoheritageAuditedSites_12 = format_GSIGeoheritageAuditedSites_12.readFeatures(json_GSIGeoheritageAuditedSites_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GSIGeoheritageAuditedSites_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GSIGeoheritageAuditedSites_12.addFeatures(features_GSIGeoheritageAuditedSites_12);
var lyr_GSIGeoheritageAuditedSites_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GSIGeoheritageAuditedSites_12, 
                style: style_GSIGeoheritageAuditedSites_12,
                popuplayertitle: 'GSI Geoheritage Audited Sites',
                interactive: true,
                title: '<img src="styles/legend/GSIGeoheritageAuditedSites_12.png" /> GSI Geoheritage Audited Sites'
            });
var format_HigherEducationInstitutes_13 = new ol.format.GeoJSON();
var features_HigherEducationInstitutes_13 = format_HigherEducationInstitutes_13.readFeatures(json_HigherEducationInstitutes_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HigherEducationInstitutes_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HigherEducationInstitutes_13.addFeatures(features_HigherEducationInstitutes_13);
var lyr_HigherEducationInstitutes_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HigherEducationInstitutes_13, 
                style: style_HigherEducationInstitutes_13,
                popuplayertitle: 'Higher Education Institutes',
                interactive: true,
                title: '<img src="styles/legend/HigherEducationInstitutes_13.png" /> Higher Education Institutes'
            });
var format_TipperaryCountyBoundary_14 = new ol.format.GeoJSON();
var features_TipperaryCountyBoundary_14 = format_TipperaryCountyBoundary_14.readFeatures(json_TipperaryCountyBoundary_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TipperaryCountyBoundary_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TipperaryCountyBoundary_14.addFeatures(features_TipperaryCountyBoundary_14);
var lyr_TipperaryCountyBoundary_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TipperaryCountyBoundary_14, 
                style: style_TipperaryCountyBoundary_14,
                popuplayertitle: 'Tipperary County Boundary',
                interactive: false,
                title: '<img src="styles/legend/TipperaryCountyBoundary_14.png" /> Tipperary County Boundary'
            });
var format_TownandCityBoundaries_15 = new ol.format.GeoJSON();
var features_TownandCityBoundaries_15 = format_TownandCityBoundaries_15.readFeatures(json_TownandCityBoundaries_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TownandCityBoundaries_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TownandCityBoundaries_15.addFeatures(features_TownandCityBoundaries_15);
var lyr_TownandCityBoundaries_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TownandCityBoundaries_15, 
                style: style_TownandCityBoundaries_15,
                popuplayertitle: 'Town and City Boundaries',
                interactive: true,
                title: '<img src="styles/legend/TownandCityBoundaries_15.png" /> Town and City Boundaries'
            });
var format_WindFarmsJune2022_16 = new ol.format.GeoJSON();
var features_WindFarmsJune2022_16 = format_WindFarmsJune2022_16.readFeatures(json_WindFarmsJune2022_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WindFarmsJune2022_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WindFarmsJune2022_16.addFeatures(features_WindFarmsJune2022_16);
var lyr_WindFarmsJune2022_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WindFarmsJune2022_16, 
                style: style_WindFarmsJune2022_16,
                popuplayertitle: 'Wind Farms June 2022',
                interactive: true,
                title: '<img src="styles/legend/WindFarmsJune2022_16.png" /> Wind Farms June 2022'
            });
var group_Energy = new ol.layer.Group({
                                layers: [lyr_WindFarmsJune2022_16,],
                                fold: 'open',
                                title: 'Energy'});
var group_AdminstrativeBoundaries = new ol.layer.Group({
                                layers: [lyr_TipperaryCountyBoundary_14,lyr_TownandCityBoundaries_15,],
                                fold: 'open',
                                title: 'Adminstrative Boundaries'});
var group_People = new ol.layer.Group({
                                layers: [lyr_HigherEducationInstitutes_13,],
                                fold: 'close',
                                title: 'People'});
var group_Geoheritage = new ol.layer.Group({
                                layers: [lyr_GSIGeoheritageAuditedSites_12,],
                                fold: 'close',
                                title: 'Geoheritage'});
var group_HistoricalConservation = new ol.layer.Group({
                                layers: [lyr_Proposed_National_Heritage_Area_2,lyr_National_Heritage_Areas_3,lyr_SheelaNaGigLocations_4,lyr_PrehistoricRockArt_5,lyr_NMSWreckInventory_6,lyr_NMS_Stone_Circles_7,lyr_NMS_Sites_and_Monuments_Records_8,lyr_NMS_Prehistoric_Art_9,lyr_NMS_Archaelogical_Survey_10,lyr_NIAHPost1700sArchitechturalHeritage_11,],
                                fold: 'close',
                                title: 'Historical Conservation'});
var group_Pollution = new ol.layer.Group({
                                layers: [lyr_EPAPRTRFacilities2023_1,],
                                fold: 'close',
                                title: 'Pollution'});

lyr_OpenStreetMap_0.setVisible(true);lyr_EPAPRTRFacilities2023_1.setVisible(false);lyr_Proposed_National_Heritage_Area_2.setVisible(false);lyr_National_Heritage_Areas_3.setVisible(false);lyr_SheelaNaGigLocations_4.setVisible(false);lyr_PrehistoricRockArt_5.setVisible(false);lyr_NMSWreckInventory_6.setVisible(false);lyr_NMS_Stone_Circles_7.setVisible(false);lyr_NMS_Sites_and_Monuments_Records_8.setVisible(false);lyr_NMS_Prehistoric_Art_9.setVisible(false);lyr_NMS_Archaelogical_Survey_10.setVisible(false);lyr_NIAHPost1700sArchitechturalHeritage_11.setVisible(false);lyr_GSIGeoheritageAuditedSites_12.setVisible(true);lyr_HigherEducationInstitutes_13.setVisible(false);lyr_TipperaryCountyBoundary_14.setVisible(true);lyr_TownandCityBoundaries_15.setVisible(false);lyr_WindFarmsJune2022_16.setVisible(false);
var layersList = [lyr_OpenStreetMap_0,group_Pollution,group_HistoricalConservation,group_Geoheritage,group_People,group_AdminstrativeBoundaries,group_Energy];
lyr_EPAPRTRFacilities2023_1.set('fieldAliases', {'fid': 'fid', 'MainSector': 'MainSector', 'MainSect_1': 'MainSect_1', 'MainReport': 'MainReport', 'Organisati': 'Organisati', 'FacilityId': 'FacilityId', 'FacilityNa': 'FacilityNa', 'FacilityTo': 'FacilityTo', 'FacilityCo': 'FacilityCo', 'CurrentReg': 'CurrentReg', 'CurrentLic': 'CurrentLic', });
lyr_Proposed_National_Heritage_Area_2.set('fieldAliases', {'fid': 'fid', 'SITECODE': 'SITECODE', 'SITE_NAME': 'SITE_NAME', 'COUNTY': 'COUNTY', 'VERSION': 'VERSION', 'HA': 'HA', 'Source_CRS': 'Source_CRS', 'SourcScale': 'SourcScale', 'URL': 'URL', });
lyr_National_Heritage_Areas_3.set('fieldAliases', {'fid': 'fid', 'SITECODE': 'SITECODE', 'SITE_NAME': 'SITE_NAME', 'COUNTY': 'COUNTY', 'VERSION': 'VERSION', 'HA': 'HA', 'Source_CRS': 'Source_CRS', 'SourcScale': 'SourcScale', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'URL': 'URL', });
lyr_SheelaNaGigLocations_4.set('fieldAliases', {'fid': 'fid', 'SMR_No': 'SMR_No', 'Class': 'Class', 'County': 'County', 'Townland': 'Townland', 'ITM_Eastin': 'ITM_Eastin', 'ITM_Northi': 'ITM_Northi', 'Location': 'Location', 'Image': 'Image', 'Descriptio': 'Descriptio', });
lyr_PrehistoricRockArt_5.set('fieldAliases', {'fid': 'fid', 'ENTITY_ID': 'ENTITY_ID', 'CLASS_CODE': 'CLASS_CODE', 'SMRS': 'SMRS', 'COUNTY': 'COUNTY', 'TOWNLAND': 'TOWNLAND', 'COUNTY_ID': 'COUNTY_ID', 'ZONE_ID': 'ZONE_ID', 'ITM_E': 'ITM_E', 'ITM_N': 'ITM_N', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'MONUMENT_T': 'MONUMENT_T', 'FIRST_EDIT': 'FIRST_EDIT', 'LATEST_EDI': 'LATEST_EDI', 'WEBSITE_LI': 'WEBSITE_LI', 'WEB_NOTES': 'WEB_NOTES', });
lyr_NMSWreckInventory_6.set('fieldAliases', {'fid': 'fid', 'Wreck Name': 'Wreck Name', 'Wreck No': 'Wreck No', 'Classifica': 'Classifica', 'Place of L': 'Place of L', 'Date of Lo': 'Date of Lo', 'DD_Lat': 'DD_Lat', 'DD_Long': 'DD_Long', 'Source of': 'Source of', 'Descriptio': 'Descriptio', 'Record Sou': 'Record Sou', 'Date_of_Lo': 'Date_of_Lo', });
lyr_NMS_Stone_Circles_7.set('fieldAliases', {'fid': 'fid', 'ENTITY_ID': 'ENTITY_ID', 'CLASS_CODE': 'CLASS_CODE', 'SMRS': 'SMRS', 'COUNTY': 'COUNTY', 'TOWNLAND': 'TOWNLAND', 'COUNTY_ID': 'COUNTY_ID', 'ZONE_ID': 'ZONE_ID', 'ITM_E': 'ITM_E', 'ITM_N': 'ITM_N', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'MONUMENT_T': 'MONUMENT_T', 'FIRST_EDIT': 'FIRST_EDIT', 'LATEST_EDI': 'LATEST_EDI', 'WEBSITE_LI': 'WEBSITE_LI', 'WEB_NOTES': 'WEB_NOTES', });
lyr_NMS_Sites_and_Monuments_Records_8.set('fieldAliases', {'fid': 'fid', 'ENTITY_ID': 'ENTITY_ID', 'CLASS_CODE': 'CLASS_CODE', 'SMRS': 'SMRS', 'COUNTY': 'COUNTY', 'TOWNLAND': 'TOWNLAND', 'ZONE_ID': 'ZONE_ID', 'ITM_E': 'ITM_E', 'ITM_N': 'ITM_N', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'MONUMENT_C': 'MONUMENT_C', 'FIRST_EDIT': 'FIRST_EDIT', 'LATEST_EDI': 'LATEST_EDI', 'WEBSITE_LI': 'WEBSITE_LI', 'WEB_NOTES': 'WEB_NOTES', 'REFERENCES': 'REFERENCES', });
lyr_NMS_Prehistoric_Art_9.set('fieldAliases', {'fid': 'fid', 'ENTITY_ID': 'ENTITY_ID', 'CLASS_CODE': 'CLASS_CODE', 'SMRS': 'SMRS', 'COUNTY': 'COUNTY', 'TOWNLAND': 'TOWNLAND', 'COUNTY_ID': 'COUNTY_ID', 'ZONE_ID': 'ZONE_ID', 'ITM_E': 'ITM_E', 'ITM_N': 'ITM_N', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'MONUMENT_T': 'MONUMENT_T', 'FIRST_EDIT': 'FIRST_EDIT', 'LATEST_EDI': 'LATEST_EDI', 'WEBSITE_LI': 'WEBSITE_LI', 'WEB_NOTES': 'WEB_NOTES', });
lyr_NMS_Archaelogical_Survey_10.set('fieldAliases', {'fid': 'fid', 'ENTITY_ID': 'ENTITY_ID', 'CLASS_CODE': 'CLASS_CODE', 'SMRS': 'SMRS', 'COUNTY': 'COUNTY', 'TOWNLAND': 'TOWNLAND', 'ZONE_ID': 'ZONE_ID', 'ITM_E': 'ITM_E', 'ITM_N': 'ITM_N', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'MONUMENT_C': 'MONUMENT_C', 'FIRST_EDIT': 'FIRST_EDIT', 'LATEST_EDI': 'LATEST_EDI', 'WEBSITE_LI': 'WEBSITE_LI', 'WEB_NOTES': 'WEB_NOTES', 'REFERENCES': 'REFERENCES', });
lyr_NIAHPost1700sArchitechturalHeritage_11.set('fieldAliases', {'fid': 'fid', 'OBJECTID_1': 'OBJECTID_1', 'REG_NO': 'REG_NO', 'ORIGINAL_T': 'ORIGINAL_T', 'IN_USE_AS_': 'IN_USE_AS_', 'NAME': 'NAME', 'NUMBER': 'NUMBER', 'STREET1': 'STREET1', 'STREET2': 'STREET2', 'TOWN': 'TOWN', 'TOWNLAND': 'TOWNLAND', 'COUNTY': 'COUNTY', 'BAILE_FEAR': 'BAILE_FEAR', 'CONTAE': 'CONTAE', 'LOCAL_AUTH': 'LOCAL_AUTH', 'DESCRIPTIO': 'DESCRIPTIO', 'APPRAISAL': 'APPRAISAL', 'DATEFROM': 'DATEFROM', 'DATETO': 'DATETO', 'RATING': 'RATING', 'ITM_E': 'ITM_E', 'ITM_N': 'ITM_N', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'IMAGE_LINK': 'IMAGE_LINK', 'WEBSITE_LI': 'WEBSITE_LI', 'SURVEY': 'SURVEY', 'CSI': 'CSI', });
lyr_GSIGeoheritageAuditedSites_12.set('fieldAliases', {'fid': 'fid', 'SITECODE': 'SITECODE', 'SITENAME': 'SITENAME', 'IGH1': 'IGH1', 'IGH2': 'IGH2', 'IGH3': 'IGH3', 'IGH4': 'IGH4', 'COUNTY': 'COUNTY', 'DESCRIPT': 'DESCRIPT', 'GEOLOGICAL': 'GEOLOGICAL', 'DESIGNAT': 'DESIGNAT', 'REPORT': 'REPORT', 'X_IG': 'X_IG', 'Y_IG': 'Y_IG', 'X_ITM': 'X_ITM', 'Y_ITM': 'Y_ITM', });
lyr_HigherEducationInstitutes_13.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'loc_name': 'loc_name', });
lyr_TipperaryCountyBoundary_14.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'GUID': 'GUID', 'GMS_JOB_ID': 'GMS_JOB_ID', 'CAPTURE_SPECIFICATION': 'CAPTURE_SPECIFICATION', 'CAPTURE_SPECIFICATION_VALUE': 'CAPTURE_SPECIFICATION_VALUE', 'URI': 'URI', 'POLY_GEOM_CAPTURE_DATE': 'POLY_GEOM_CAPTURE_DATE', 'POLY_GEOM_CAPTURE_SRC': 'POLY_GEOM_CAPTURE_SRC', 'POLY_GEOM_CAPTURE_SRC_VALUE': 'POLY_GEOM_CAPTURE_SRC_VALUE', 'POLY_GEOM_CHANGE_CODE': 'POLY_GEOM_CHANGE_CODE', 'POLY_GEOM_CHANGE_CODE_VALUE': 'POLY_GEOM_CHANGE_CODE_VALUE', 'POLY_GEOM_CHANGE_DATE': 'POLY_GEOM_CHANGE_DATE', 'POLY_GEOM_CAPTURE_METH': 'POLY_GEOM_CAPTURE_METH', 'POLY_GEOM_CAPTURE_METH_VALUE': 'POLY_GEOM_CAPTURE_METH_VALUE', 'POLY_GEOM_CAPTURE_RES': 'POLY_GEOM_CAPTURE_RES', 'POLY_GEOM_CAPTURE_RES_VALUE': 'POLY_GEOM_CAPTURE_RES_VALUE', 'POLY_GEOM_HT_ERR_VALUE': 'POLY_GEOM_HT_ERR_VALUE', 'POLY_GEOM_VALID_AUTH': 'POLY_GEOM_VALID_AUTH', 'POLY_GEOM_VALID_AUTH_VALUE': 'POLY_GEOM_VALID_AUTH_VALUE', 'POLY_GEOM_VALID_DATE': 'POLY_GEOM_VALID_DATE', 'BDY_TYPE_ID': 'BDY_TYPE_ID', 'BDY_TYPE_VALUE': 'BDY_TYPE_VALUE', 'BDY_TYPE_CAPTURE_DATE': 'BDY_TYPE_CAPTURE_DATE', 'BDY_TYPE_CAPTURE_SRC': 'BDY_TYPE_CAPTURE_SRC', 'BDY_TYPE_CAPTURE_SRC_VALUE': 'BDY_TYPE_CAPTURE_SRC_VALUE', 'BDY_TYPE_CHANGE_CODE': 'BDY_TYPE_CHANGE_CODE', 'BDY_TYPE_CHANGE_CODE_VALUE': 'BDY_TYPE_CHANGE_CODE_VALUE', 'BDY_TYPE_CHANGE_DATE': 'BDY_TYPE_CHANGE_DATE', 'BDY_TYPE_VALID_AUTH': 'BDY_TYPE_VALID_AUTH', 'BDY_TYPE_VALID_AUTH_VALUE': 'BDY_TYPE_VALID_AUTH_VALUE', 'BDY_TYPE_VALID_DATE': 'BDY_TYPE_VALID_DATE', 'BDY_ID': 'BDY_ID', 'BDY_ID_CAPTURE_DATE': 'BDY_ID_CAPTURE_DATE', 'BDY_ID_CAPTURE_SRC': 'BDY_ID_CAPTURE_SRC', 'BDY_ID_CAPTURE_SRC_VALUE': 'BDY_ID_CAPTURE_SRC_VALUE', 'BDY_ID_CHANGE_CODE': 'BDY_ID_CHANGE_CODE', 'BDY_ID_CHANGE_CODE_VALUE': 'BDY_ID_CHANGE_CODE_VALUE', 'BDY_ID_CHANGE_DATE': 'BDY_ID_CHANGE_DATE', 'BDY_ID_VALID_AUTH': 'BDY_ID_VALID_AUTH', 'BDY_ID_VALID_AUTH_VALUE': 'BDY_ID_VALID_AUTH_VALUE', 'BDY_ID_VALID_DATE': 'BDY_ID_VALID_DATE', 'ENG_NAME_VALUE': 'ENG_NAME_VALUE', 'ENG_NAME_CAPTURE_DATE': 'ENG_NAME_CAPTURE_DATE', 'ENG_NAME_CAPTURE_SRC': 'ENG_NAME_CAPTURE_SRC', 'ENG_NAME_CAPTURE_SRC_VALUE': 'ENG_NAME_CAPTURE_SRC_VALUE', 'ENG_NAME_CHANGE_CODE': 'ENG_NAME_CHANGE_CODE', 'ENG_NAME_CHANGE_CODE_VALUE': 'ENG_NAME_CHANGE_CODE_VALUE', 'ENG_NAME_CHANGE_DATE': 'ENG_NAME_CHANGE_DATE', 'ENG_NAME_VALID_AUTH': 'ENG_NAME_VALID_AUTH', 'ENG_NAME_VALID_AUTH_VALUE': 'ENG_NAME_VALID_AUTH_VALUE', 'ENG_NAME_VALID_DATE': 'ENG_NAME_VALID_DATE', 'GLE_NAME_VALUE': 'GLE_NAME_VALUE', 'GLE_NAME_CAPTURE_DATE': 'GLE_NAME_CAPTURE_DATE', 'GLE_NAME_CAPTURE_SRC': 'GLE_NAME_CAPTURE_SRC', 'GLE_NAME_CAPTURE_SRC_VALUE': 'GLE_NAME_CAPTURE_SRC_VALUE', 'GLE_NAME_CHANGE_CODE': 'GLE_NAME_CHANGE_CODE', 'GLE_NAME_CHANGE_CODE_VALUE': 'GLE_NAME_CHANGE_CODE_VALUE', 'GLE_NAME_CHANGE_DATE': 'GLE_NAME_CHANGE_DATE', 'GLE_NAME_VALID_AUTH': 'GLE_NAME_VALID_AUTH', 'GLE_NAME_VALID_AUTH_VALUE': 'GLE_NAME_VALID_AUTH_VALUE', 'GLE_NAME_VALID_DATE': 'GLE_NAME_VALID_DATE', 'GAELTACHT_AREA': 'GAELTACHT_AREA', 'SE_ANNO_CAD_DATA': 'SE_ANNO_CAD_DATA', });
lyr_TownandCityBoundaries_15.set('fieldAliases', {'fid': 'fid', 'NAME': 'NAME', 'SETTCODE': 'SETTCODE', });
lyr_WindFarmsJune2022_16.set('fieldAliases', {'fid': 'fid', 'Windfarm_N': 'Name', 'DSO_TSO': 'DSO/TSO', 'Connection': 'Connection', 'County': 'County', 'Present_St': 'Present Status', 'Installed_': 'Installed_', 'MEC__MW_': 'MEC__MW_', 'Gate': 'Gate', 'F110kV_Nod': 'F110kV_Nod', 'Target_Con': 'Target_Con', 'Date_of_Co': 'Date_of_Co', 'Year_of_Co': 'Year_of_Co', 'Nat_Grid_E': 'Nat_Grid_E', 'Nat_Grid_N': 'Nat_Grid_N', 'Type': 'Type', });
lyr_EPAPRTRFacilities2023_1.set('fieldImages', {'fid': '', 'MainSector': '', 'MainSect_1': '', 'MainReport': '', 'Organisati': '', 'FacilityId': '', 'FacilityNa': '', 'FacilityTo': '', 'FacilityCo': '', 'CurrentReg': '', 'CurrentLic': '', });
lyr_Proposed_National_Heritage_Area_2.set('fieldImages', {'fid': 'TextEdit', 'SITECODE': 'TextEdit', 'SITE_NAME': 'TextEdit', 'COUNTY': 'TextEdit', 'VERSION': 'TextEdit', 'HA': 'TextEdit', 'Source_CRS': 'TextEdit', 'SourcScale': 'TextEdit', 'URL': 'TextEdit', });
lyr_National_Heritage_Areas_3.set('fieldImages', {'fid': 'TextEdit', 'SITECODE': 'TextEdit', 'SITE_NAME': 'TextEdit', 'COUNTY': 'TextEdit', 'VERSION': 'TextEdit', 'HA': 'TextEdit', 'Source_CRS': 'TextEdit', 'SourcScale': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'URL': 'TextEdit', });
lyr_SheelaNaGigLocations_4.set('fieldImages', {'fid': 'TextEdit', 'SMR_No': 'TextEdit', 'Class': 'TextEdit', 'County': 'TextEdit', 'Townland': 'TextEdit', 'ITM_Eastin': 'TextEdit', 'ITM_Northi': 'TextEdit', 'Location': 'TextEdit', 'Image': 'TextEdit', 'Descriptio': 'TextEdit', });
lyr_PrehistoricRockArt_5.set('fieldImages', {'fid': 'TextEdit', 'ENTITY_ID': 'TextEdit', 'CLASS_CODE': 'TextEdit', 'SMRS': 'TextEdit', 'COUNTY': 'TextEdit', 'TOWNLAND': 'TextEdit', 'COUNTY_ID': 'TextEdit', 'ZONE_ID': 'TextEdit', 'ITM_E': 'TextEdit', 'ITM_N': 'TextEdit', 'LATITUDE': 'TextEdit', 'LONGITUDE': 'TextEdit', 'MONUMENT_T': 'TextEdit', 'FIRST_EDIT': 'TextEdit', 'LATEST_EDI': 'TextEdit', 'WEBSITE_LI': 'TextEdit', 'WEB_NOTES': 'TextEdit', });
lyr_NMSWreckInventory_6.set('fieldImages', {'fid': 'TextEdit', 'Wreck Name': 'TextEdit', 'Wreck No': 'TextEdit', 'Classifica': 'TextEdit', 'Place of L': 'TextEdit', 'Date of Lo': 'TextEdit', 'DD_Lat': 'TextEdit', 'DD_Long': 'TextEdit', 'Source of': 'TextEdit', 'Descriptio': 'TextEdit', 'Record Sou': 'TextEdit', 'Date_of_Lo': 'TextEdit', });
lyr_NMS_Stone_Circles_7.set('fieldImages', {'fid': 'TextEdit', 'ENTITY_ID': 'TextEdit', 'CLASS_CODE': 'TextEdit', 'SMRS': 'TextEdit', 'COUNTY': 'TextEdit', 'TOWNLAND': 'TextEdit', 'COUNTY_ID': 'TextEdit', 'ZONE_ID': 'TextEdit', 'ITM_E': 'TextEdit', 'ITM_N': 'TextEdit', 'LATITUDE': 'TextEdit', 'LONGITUDE': 'TextEdit', 'MONUMENT_T': 'TextEdit', 'FIRST_EDIT': 'TextEdit', 'LATEST_EDI': 'TextEdit', 'WEBSITE_LI': 'TextEdit', 'WEB_NOTES': 'TextEdit', });
lyr_NMS_Sites_and_Monuments_Records_8.set('fieldImages', {'fid': 'TextEdit', 'ENTITY_ID': 'TextEdit', 'CLASS_CODE': 'TextEdit', 'SMRS': 'TextEdit', 'COUNTY': 'TextEdit', 'TOWNLAND': 'TextEdit', 'ZONE_ID': 'TextEdit', 'ITM_E': 'TextEdit', 'ITM_N': 'TextEdit', 'LATITUDE': 'TextEdit', 'LONGITUDE': 'TextEdit', 'MONUMENT_C': 'TextEdit', 'FIRST_EDIT': 'TextEdit', 'LATEST_EDI': 'TextEdit', 'WEBSITE_LI': 'TextEdit', 'WEB_NOTES': 'TextEdit', 'REFERENCES': 'TextEdit', });
lyr_NMS_Prehistoric_Art_9.set('fieldImages', {'fid': 'TextEdit', 'ENTITY_ID': 'TextEdit', 'CLASS_CODE': 'TextEdit', 'SMRS': 'TextEdit', 'COUNTY': 'TextEdit', 'TOWNLAND': 'TextEdit', 'COUNTY_ID': 'TextEdit', 'ZONE_ID': 'TextEdit', 'ITM_E': 'TextEdit', 'ITM_N': 'TextEdit', 'LATITUDE': 'TextEdit', 'LONGITUDE': 'TextEdit', 'MONUMENT_T': 'TextEdit', 'FIRST_EDIT': 'TextEdit', 'LATEST_EDI': 'TextEdit', 'WEBSITE_LI': 'TextEdit', 'WEB_NOTES': 'TextEdit', });
lyr_NMS_Archaelogical_Survey_10.set('fieldImages', {'fid': 'TextEdit', 'ENTITY_ID': 'TextEdit', 'CLASS_CODE': 'TextEdit', 'SMRS': 'TextEdit', 'COUNTY': 'TextEdit', 'TOWNLAND': 'TextEdit', 'ZONE_ID': 'TextEdit', 'ITM_E': 'TextEdit', 'ITM_N': 'TextEdit', 'LATITUDE': 'TextEdit', 'LONGITUDE': 'TextEdit', 'MONUMENT_C': 'TextEdit', 'FIRST_EDIT': 'TextEdit', 'LATEST_EDI': 'TextEdit', 'WEBSITE_LI': 'TextEdit', 'WEB_NOTES': 'TextEdit', 'REFERENCES': 'TextEdit', });
lyr_NIAHPost1700sArchitechturalHeritage_11.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID_1': 'TextEdit', 'REG_NO': 'TextEdit', 'ORIGINAL_T': 'TextEdit', 'IN_USE_AS_': 'TextEdit', 'NAME': 'TextEdit', 'NUMBER': 'TextEdit', 'STREET1': 'TextEdit', 'STREET2': 'TextEdit', 'TOWN': 'TextEdit', 'TOWNLAND': 'TextEdit', 'COUNTY': 'TextEdit', 'BAILE_FEAR': 'TextEdit', 'CONTAE': 'TextEdit', 'LOCAL_AUTH': 'TextEdit', 'DESCRIPTIO': 'TextEdit', 'APPRAISAL': 'TextEdit', 'DATEFROM': 'TextEdit', 'DATETO': 'TextEdit', 'RATING': 'TextEdit', 'ITM_E': 'TextEdit', 'ITM_N': 'TextEdit', 'LATITUDE': 'TextEdit', 'LONGITUDE': 'TextEdit', 'IMAGE_LINK': 'TextEdit', 'WEBSITE_LI': 'TextEdit', 'SURVEY': 'TextEdit', 'CSI': 'TextEdit', });
lyr_GSIGeoheritageAuditedSites_12.set('fieldImages', {'fid': 'TextEdit', 'SITECODE': 'TextEdit', 'SITENAME': 'TextEdit', 'IGH1': 'TextEdit', 'IGH2': 'TextEdit', 'IGH3': 'TextEdit', 'IGH4': 'TextEdit', 'COUNTY': 'TextEdit', 'DESCRIPT': 'TextEdit', 'GEOLOGICAL': 'TextEdit', 'DESIGNAT': 'TextEdit', 'REPORT': 'TextEdit', 'X_IG': 'TextEdit', 'Y_IG': 'TextEdit', 'X_ITM': 'TextEdit', 'Y_ITM': 'TextEdit', });
lyr_HigherEducationInstitutes_13.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'loc_name': 'TextEdit', });
lyr_TipperaryCountyBoundary_14.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'GUID': 'TextEdit', 'GMS_JOB_ID': 'TextEdit', 'CAPTURE_SPECIFICATION': 'TextEdit', 'CAPTURE_SPECIFICATION_VALUE': 'TextEdit', 'URI': 'TextEdit', 'POLY_GEOM_CAPTURE_DATE': 'DateTime', 'POLY_GEOM_CAPTURE_SRC': 'TextEdit', 'POLY_GEOM_CAPTURE_SRC_VALUE': 'TextEdit', 'POLY_GEOM_CHANGE_CODE': 'TextEdit', 'POLY_GEOM_CHANGE_CODE_VALUE': 'TextEdit', 'POLY_GEOM_CHANGE_DATE': 'DateTime', 'POLY_GEOM_CAPTURE_METH': 'TextEdit', 'POLY_GEOM_CAPTURE_METH_VALUE': 'TextEdit', 'POLY_GEOM_CAPTURE_RES': 'TextEdit', 'POLY_GEOM_CAPTURE_RES_VALUE': 'TextEdit', 'POLY_GEOM_HT_ERR_VALUE': 'TextEdit', 'POLY_GEOM_VALID_AUTH': 'TextEdit', 'POLY_GEOM_VALID_AUTH_VALUE': 'TextEdit', 'POLY_GEOM_VALID_DATE': 'DateTime', 'BDY_TYPE_ID': 'TextEdit', 'BDY_TYPE_VALUE': 'TextEdit', 'BDY_TYPE_CAPTURE_DATE': 'DateTime', 'BDY_TYPE_CAPTURE_SRC': 'TextEdit', 'BDY_TYPE_CAPTURE_SRC_VALUE': 'TextEdit', 'BDY_TYPE_CHANGE_CODE': 'TextEdit', 'BDY_TYPE_CHANGE_CODE_VALUE': 'TextEdit', 'BDY_TYPE_CHANGE_DATE': 'DateTime', 'BDY_TYPE_VALID_AUTH': 'TextEdit', 'BDY_TYPE_VALID_AUTH_VALUE': 'TextEdit', 'BDY_TYPE_VALID_DATE': 'DateTime', 'BDY_ID': 'TextEdit', 'BDY_ID_CAPTURE_DATE': 'DateTime', 'BDY_ID_CAPTURE_SRC': 'TextEdit', 'BDY_ID_CAPTURE_SRC_VALUE': 'TextEdit', 'BDY_ID_CHANGE_CODE': 'TextEdit', 'BDY_ID_CHANGE_CODE_VALUE': 'TextEdit', 'BDY_ID_CHANGE_DATE': 'DateTime', 'BDY_ID_VALID_AUTH': 'TextEdit', 'BDY_ID_VALID_AUTH_VALUE': 'TextEdit', 'BDY_ID_VALID_DATE': 'DateTime', 'ENG_NAME_VALUE': 'TextEdit', 'ENG_NAME_CAPTURE_DATE': 'DateTime', 'ENG_NAME_CAPTURE_SRC': 'TextEdit', 'ENG_NAME_CAPTURE_SRC_VALUE': 'TextEdit', 'ENG_NAME_CHANGE_CODE': 'TextEdit', 'ENG_NAME_CHANGE_CODE_VALUE': 'TextEdit', 'ENG_NAME_CHANGE_DATE': 'DateTime', 'ENG_NAME_VALID_AUTH': 'TextEdit', 'ENG_NAME_VALID_AUTH_VALUE': 'TextEdit', 'ENG_NAME_VALID_DATE': 'DateTime', 'GLE_NAME_VALUE': 'TextEdit', 'GLE_NAME_CAPTURE_DATE': 'DateTime', 'GLE_NAME_CAPTURE_SRC': 'TextEdit', 'GLE_NAME_CAPTURE_SRC_VALUE': 'TextEdit', 'GLE_NAME_CHANGE_CODE': 'TextEdit', 'GLE_NAME_CHANGE_CODE_VALUE': 'TextEdit', 'GLE_NAME_CHANGE_DATE': 'DateTime', 'GLE_NAME_VALID_AUTH': 'TextEdit', 'GLE_NAME_VALID_AUTH_VALUE': 'TextEdit', 'GLE_NAME_VALID_DATE': 'DateTime', 'GAELTACHT_AREA': 'TextEdit', 'SE_ANNO_CAD_DATA': 'Binary', });
lyr_TownandCityBoundaries_15.set('fieldImages', {'fid': 'TextEdit', 'NAME': 'TextEdit', 'SETTCODE': 'TextEdit', });
lyr_WindFarmsJune2022_16.set('fieldImages', {'fid': 'TextEdit', 'Windfarm_N': 'TextEdit', 'DSO_TSO': 'TextEdit', 'Connection': 'TextEdit', 'County': 'TextEdit', 'Present_St': 'TextEdit', 'Installed_': 'TextEdit', 'MEC__MW_': 'TextEdit', 'Gate': 'TextEdit', 'F110kV_Nod': 'TextEdit', 'Target_Con': 'TextEdit', 'Date_of_Co': 'TextEdit', 'Year_of_Co': 'TextEdit', 'Nat_Grid_E': 'TextEdit', 'Nat_Grid_N': 'TextEdit', 'Type': 'TextEdit', });
lyr_EPAPRTRFacilities2023_1.set('fieldLabels', {'fid': 'inline label - visible with data', 'MainSector': 'inline label - visible with data', 'MainSect_1': 'inline label - visible with data', 'MainReport': 'inline label - visible with data', 'Organisati': 'inline label - visible with data', 'FacilityId': 'inline label - visible with data', 'FacilityNa': 'inline label - visible with data', 'FacilityTo': 'inline label - visible with data', 'FacilityCo': 'inline label - visible with data', 'CurrentReg': 'inline label - visible with data', 'CurrentLic': 'inline label - visible with data', });
lyr_Proposed_National_Heritage_Area_2.set('fieldLabels', {'fid': 'inline label - visible with data', 'SITECODE': 'inline label - visible with data', 'SITE_NAME': 'inline label - visible with data', 'COUNTY': 'inline label - visible with data', 'VERSION': 'inline label - visible with data', 'HA': 'inline label - visible with data', 'Source_CRS': 'inline label - visible with data', 'SourcScale': 'inline label - visible with data', 'URL': 'inline label - visible with data', });
lyr_National_Heritage_Areas_3.set('fieldLabels', {'fid': 'inline label - visible with data', 'SITECODE': 'inline label - visible with data', 'SITE_NAME': 'inline label - visible with data', 'COUNTY': 'inline label - visible with data', 'VERSION': 'inline label - visible with data', 'HA': 'inline label - visible with data', 'Source_CRS': 'inline label - visible with data', 'SourcScale': 'inline label - visible with data', 'Shape_Leng': 'inline label - visible with data', 'Shape_Area': 'inline label - visible with data', 'URL': 'inline label - visible with data', });
lyr_SheelaNaGigLocations_4.set('fieldLabels', {'fid': 'inline label - visible with data', 'SMR_No': 'inline label - visible with data', 'Class': 'inline label - visible with data', 'County': 'inline label - visible with data', 'Townland': 'inline label - visible with data', 'ITM_Eastin': 'inline label - visible with data', 'ITM_Northi': 'inline label - visible with data', 'Location': 'inline label - visible with data', 'Image': 'inline label - visible with data', 'Descriptio': 'inline label - visible with data', });
lyr_PrehistoricRockArt_5.set('fieldLabels', {'fid': 'inline label - visible with data', 'ENTITY_ID': 'inline label - visible with data', 'CLASS_CODE': 'inline label - visible with data', 'SMRS': 'inline label - visible with data', 'COUNTY': 'inline label - visible with data', 'TOWNLAND': 'inline label - visible with data', 'COUNTY_ID': 'inline label - visible with data', 'ZONE_ID': 'inline label - visible with data', 'ITM_E': 'inline label - visible with data', 'ITM_N': 'inline label - visible with data', 'LATITUDE': 'inline label - visible with data', 'LONGITUDE': 'inline label - visible with data', 'MONUMENT_T': 'inline label - visible with data', 'FIRST_EDIT': 'inline label - visible with data', 'LATEST_EDI': 'inline label - visible with data', 'WEBSITE_LI': 'inline label - visible with data', 'WEB_NOTES': 'inline label - visible with data', });
lyr_NMSWreckInventory_6.set('fieldLabels', {'fid': 'inline label - visible with data', 'Wreck Name': 'inline label - visible with data', 'Wreck No': 'inline label - visible with data', 'Classifica': 'inline label - visible with data', 'Place of L': 'inline label - visible with data', 'Date of Lo': 'inline label - visible with data', 'DD_Lat': 'inline label - visible with data', 'DD_Long': 'inline label - visible with data', 'Source of': 'inline label - visible with data', 'Descriptio': 'inline label - visible with data', 'Record Sou': 'inline label - visible with data', 'Date_of_Lo': 'inline label - visible with data', });
lyr_NMS_Stone_Circles_7.set('fieldLabels', {'fid': 'inline label - visible with data', 'ENTITY_ID': 'inline label - visible with data', 'CLASS_CODE': 'inline label - visible with data', 'SMRS': 'inline label - visible with data', 'COUNTY': 'inline label - visible with data', 'TOWNLAND': 'inline label - visible with data', 'COUNTY_ID': 'inline label - visible with data', 'ZONE_ID': 'inline label - visible with data', 'ITM_E': 'inline label - visible with data', 'ITM_N': 'inline label - visible with data', 'LATITUDE': 'inline label - visible with data', 'LONGITUDE': 'inline label - visible with data', 'MONUMENT_T': 'inline label - visible with data', 'FIRST_EDIT': 'inline label - visible with data', 'LATEST_EDI': 'inline label - visible with data', 'WEBSITE_LI': 'inline label - visible with data', 'WEB_NOTES': 'inline label - visible with data', });
lyr_NMS_Sites_and_Monuments_Records_8.set('fieldLabels', {'fid': 'inline label - visible with data', 'ENTITY_ID': 'inline label - visible with data', 'CLASS_CODE': 'inline label - visible with data', 'SMRS': 'inline label - visible with data', 'COUNTY': 'inline label - visible with data', 'TOWNLAND': 'inline label - visible with data', 'ZONE_ID': 'inline label - visible with data', 'ITM_E': 'inline label - visible with data', 'ITM_N': 'inline label - visible with data', 'LATITUDE': 'inline label - visible with data', 'LONGITUDE': 'inline label - visible with data', 'MONUMENT_C': 'inline label - visible with data', 'FIRST_EDIT': 'inline label - visible with data', 'LATEST_EDI': 'inline label - visible with data', 'WEBSITE_LI': 'inline label - visible with data', 'WEB_NOTES': 'inline label - visible with data', 'REFERENCES': 'inline label - visible with data', });
lyr_NMS_Prehistoric_Art_9.set('fieldLabels', {'fid': 'inline label - visible with data', 'ENTITY_ID': 'inline label - visible with data', 'CLASS_CODE': 'inline label - visible with data', 'SMRS': 'inline label - visible with data', 'COUNTY': 'inline label - visible with data', 'TOWNLAND': 'inline label - visible with data', 'COUNTY_ID': 'inline label - visible with data', 'ZONE_ID': 'inline label - visible with data', 'ITM_E': 'inline label - visible with data', 'ITM_N': 'inline label - visible with data', 'LATITUDE': 'inline label - visible with data', 'LONGITUDE': 'inline label - visible with data', 'MONUMENT_T': 'inline label - visible with data', 'FIRST_EDIT': 'inline label - visible with data', 'LATEST_EDI': 'inline label - visible with data', 'WEBSITE_LI': 'inline label - visible with data', 'WEB_NOTES': 'inline label - visible with data', });
lyr_NMS_Archaelogical_Survey_10.set('fieldLabels', {'fid': 'inline label - visible with data', 'ENTITY_ID': 'inline label - visible with data', 'CLASS_CODE': 'inline label - visible with data', 'SMRS': 'inline label - visible with data', 'COUNTY': 'inline label - visible with data', 'TOWNLAND': 'inline label - visible with data', 'ZONE_ID': 'inline label - visible with data', 'ITM_E': 'inline label - visible with data', 'ITM_N': 'inline label - visible with data', 'LATITUDE': 'inline label - visible with data', 'LONGITUDE': 'inline label - visible with data', 'MONUMENT_C': 'inline label - visible with data', 'FIRST_EDIT': 'inline label - visible with data', 'LATEST_EDI': 'inline label - visible with data', 'WEBSITE_LI': 'inline label - visible with data', 'WEB_NOTES': 'inline label - visible with data', 'REFERENCES': 'inline label - visible with data', });
lyr_NIAHPost1700sArchitechturalHeritage_11.set('fieldLabels', {'fid': 'inline label - visible with data', 'OBJECTID_1': 'inline label - visible with data', 'REG_NO': 'inline label - visible with data', 'ORIGINAL_T': 'inline label - visible with data', 'IN_USE_AS_': 'inline label - visible with data', 'NAME': 'inline label - visible with data', 'NUMBER': 'inline label - visible with data', 'STREET1': 'inline label - visible with data', 'STREET2': 'inline label - visible with data', 'TOWN': 'inline label - visible with data', 'TOWNLAND': 'inline label - visible with data', 'COUNTY': 'inline label - visible with data', 'BAILE_FEAR': 'inline label - visible with data', 'CONTAE': 'inline label - visible with data', 'LOCAL_AUTH': 'inline label - visible with data', 'DESCRIPTIO': 'inline label - visible with data', 'APPRAISAL': 'inline label - visible with data', 'DATEFROM': 'inline label - visible with data', 'DATETO': 'inline label - visible with data', 'RATING': 'inline label - visible with data', 'ITM_E': 'inline label - visible with data', 'ITM_N': 'inline label - visible with data', 'LATITUDE': 'inline label - visible with data', 'LONGITUDE': 'inline label - visible with data', 'IMAGE_LINK': 'inline label - visible with data', 'WEBSITE_LI': 'inline label - visible with data', 'SURVEY': 'inline label - visible with data', 'CSI': 'inline label - visible with data', });
lyr_GSIGeoheritageAuditedSites_12.set('fieldLabels', {'fid': 'inline label - visible with data', 'SITECODE': 'inline label - visible with data', 'SITENAME': 'inline label - visible with data', 'IGH1': 'inline label - visible with data', 'IGH2': 'inline label - visible with data', 'IGH3': 'inline label - visible with data', 'IGH4': 'inline label - visible with data', 'COUNTY': 'inline label - visible with data', 'DESCRIPT': 'inline label - visible with data', 'GEOLOGICAL': 'inline label - visible with data', 'DESIGNAT': 'inline label - visible with data', 'REPORT': 'inline label - visible with data', 'X_IG': 'inline label - visible with data', 'Y_IG': 'inline label - visible with data', 'X_ITM': 'inline label - visible with data', 'Y_ITM': 'inline label - visible with data', });
lyr_HigherEducationInstitutes_13.set('fieldLabels', {'fid': 'inline label - visible with data', 'id': 'inline label - visible with data', 'loc_name': 'inline label - visible with data', });
lyr_TipperaryCountyBoundary_14.set('fieldLabels', {'fid': 'inline label - visible with data', 'OBJECTID': 'inline label - visible with data', 'GUID': 'inline label - visible with data', 'GMS_JOB_ID': 'inline label - visible with data', 'CAPTURE_SPECIFICATION': 'inline label - visible with data', 'CAPTURE_SPECIFICATION_VALUE': 'inline label - visible with data', 'URI': 'inline label - visible with data', 'POLY_GEOM_CAPTURE_DATE': 'inline label - visible with data', 'POLY_GEOM_CAPTURE_SRC': 'inline label - visible with data', 'POLY_GEOM_CAPTURE_SRC_VALUE': 'inline label - visible with data', 'POLY_GEOM_CHANGE_CODE': 'inline label - visible with data', 'POLY_GEOM_CHANGE_CODE_VALUE': 'inline label - visible with data', 'POLY_GEOM_CHANGE_DATE': 'inline label - visible with data', 'POLY_GEOM_CAPTURE_METH': 'inline label - visible with data', 'POLY_GEOM_CAPTURE_METH_VALUE': 'inline label - visible with data', 'POLY_GEOM_CAPTURE_RES': 'inline label - visible with data', 'POLY_GEOM_CAPTURE_RES_VALUE': 'inline label - visible with data', 'POLY_GEOM_HT_ERR_VALUE': 'inline label - visible with data', 'POLY_GEOM_VALID_AUTH': 'inline label - visible with data', 'POLY_GEOM_VALID_AUTH_VALUE': 'inline label - visible with data', 'POLY_GEOM_VALID_DATE': 'inline label - visible with data', 'BDY_TYPE_ID': 'inline label - visible with data', 'BDY_TYPE_VALUE': 'inline label - visible with data', 'BDY_TYPE_CAPTURE_DATE': 'inline label - visible with data', 'BDY_TYPE_CAPTURE_SRC': 'inline label - visible with data', 'BDY_TYPE_CAPTURE_SRC_VALUE': 'inline label - visible with data', 'BDY_TYPE_CHANGE_CODE': 'inline label - visible with data', 'BDY_TYPE_CHANGE_CODE_VALUE': 'inline label - visible with data', 'BDY_TYPE_CHANGE_DATE': 'inline label - visible with data', 'BDY_TYPE_VALID_AUTH': 'inline label - visible with data', 'BDY_TYPE_VALID_AUTH_VALUE': 'inline label - visible with data', 'BDY_TYPE_VALID_DATE': 'inline label - visible with data', 'BDY_ID': 'inline label - visible with data', 'BDY_ID_CAPTURE_DATE': 'inline label - visible with data', 'BDY_ID_CAPTURE_SRC': 'inline label - visible with data', 'BDY_ID_CAPTURE_SRC_VALUE': 'inline label - visible with data', 'BDY_ID_CHANGE_CODE': 'inline label - visible with data', 'BDY_ID_CHANGE_CODE_VALUE': 'inline label - visible with data', 'BDY_ID_CHANGE_DATE': 'inline label - visible with data', 'BDY_ID_VALID_AUTH': 'inline label - visible with data', 'BDY_ID_VALID_AUTH_VALUE': 'inline label - visible with data', 'BDY_ID_VALID_DATE': 'inline label - visible with data', 'ENG_NAME_VALUE': 'inline label - visible with data', 'ENG_NAME_CAPTURE_DATE': 'inline label - visible with data', 'ENG_NAME_CAPTURE_SRC': 'inline label - visible with data', 'ENG_NAME_CAPTURE_SRC_VALUE': 'inline label - visible with data', 'ENG_NAME_CHANGE_CODE': 'inline label - visible with data', 'ENG_NAME_CHANGE_CODE_VALUE': 'inline label - visible with data', 'ENG_NAME_CHANGE_DATE': 'inline label - visible with data', 'ENG_NAME_VALID_AUTH': 'inline label - visible with data', 'ENG_NAME_VALID_AUTH_VALUE': 'inline label - visible with data', 'ENG_NAME_VALID_DATE': 'inline label - visible with data', 'GLE_NAME_VALUE': 'inline label - visible with data', 'GLE_NAME_CAPTURE_DATE': 'inline label - visible with data', 'GLE_NAME_CAPTURE_SRC': 'inline label - visible with data', 'GLE_NAME_CAPTURE_SRC_VALUE': 'inline label - visible with data', 'GLE_NAME_CHANGE_CODE': 'inline label - visible with data', 'GLE_NAME_CHANGE_CODE_VALUE': 'inline label - visible with data', 'GLE_NAME_CHANGE_DATE': 'inline label - visible with data', 'GLE_NAME_VALID_AUTH': 'inline label - visible with data', 'GLE_NAME_VALID_AUTH_VALUE': 'inline label - visible with data', 'GLE_NAME_VALID_DATE': 'inline label - visible with data', 'GAELTACHT_AREA': 'inline label - visible with data', 'SE_ANNO_CAD_DATA': 'inline label - visible with data', });
lyr_TownandCityBoundaries_15.set('fieldLabels', {'fid': 'inline label - visible with data', 'NAME': 'inline label - visible with data', 'SETTCODE': 'inline label - visible with data', });
lyr_WindFarmsJune2022_16.set('fieldLabels', {'fid': 'inline label - visible with data', 'Windfarm_N': 'inline label - visible with data', 'DSO_TSO': 'inline label - visible with data', 'Connection': 'inline label - visible with data', 'County': 'inline label - visible with data', 'Present_St': 'inline label - visible with data', 'Installed_': 'inline label - visible with data', 'MEC__MW_': 'inline label - visible with data', 'Gate': 'inline label - visible with data', 'F110kV_Nod': 'inline label - visible with data', 'Target_Con': 'inline label - visible with data', 'Date_of_Co': 'inline label - visible with data', 'Year_of_Co': 'inline label - visible with data', 'Nat_Grid_E': 'inline label - visible with data', 'Nat_Grid_N': 'inline label - visible with data', 'Type': 'inline label - visible with data', });
lyr_WindFarmsJune2022_16.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});