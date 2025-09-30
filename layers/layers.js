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
var format_SpecialProtectionAreas_2 = new ol.format.GeoJSON();
var features_SpecialProtectionAreas_2 = format_SpecialProtectionAreas_2.readFeatures(json_SpecialProtectionAreas_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SpecialProtectionAreas_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SpecialProtectionAreas_2.addFeatures(features_SpecialProtectionAreas_2);
var lyr_SpecialProtectionAreas_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SpecialProtectionAreas_2, 
                style: style_SpecialProtectionAreas_2,
                popuplayertitle: 'Special Protection Areas',
                interactive: true,
                title: '<img src="styles/legend/SpecialProtectionAreas_2.png" /> Special Protection Areas'
            });
var format_SpecialAreasofConservation_3 = new ol.format.GeoJSON();
var features_SpecialAreasofConservation_3 = format_SpecialAreasofConservation_3.readFeatures(json_SpecialAreasofConservation_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SpecialAreasofConservation_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SpecialAreasofConservation_3.addFeatures(features_SpecialAreasofConservation_3);
var lyr_SpecialAreasofConservation_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SpecialAreasofConservation_3, 
                style: style_SpecialAreasofConservation_3,
                popuplayertitle: 'Special Areas of Conservation',
                interactive: true,
                title: '<img src="styles/legend/SpecialAreasofConservation_3.png" /> Special Areas of Conservation'
            });
var format_AncientWoodlandInventory_4 = new ol.format.GeoJSON();
var features_AncientWoodlandInventory_4 = format_AncientWoodlandInventory_4.readFeatures(json_AncientWoodlandInventory_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AncientWoodlandInventory_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AncientWoodlandInventory_4.addFeatures(features_AncientWoodlandInventory_4);
var lyr_AncientWoodlandInventory_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AncientWoodlandInventory_4, 
                style: style_AncientWoodlandInventory_4,
                popuplayertitle: 'Ancient Woodland Inventory',
                interactive: true,
                title: '<img src="styles/legend/AncientWoodlandInventory_4.png" /> Ancient Woodland Inventory'
            });
var format_National_Heritage_Areas_5 = new ol.format.GeoJSON();
var features_National_Heritage_Areas_5 = format_National_Heritage_Areas_5.readFeatures(json_National_Heritage_Areas_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_National_Heritage_Areas_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_National_Heritage_Areas_5.addFeatures(features_National_Heritage_Areas_5);
var lyr_National_Heritage_Areas_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_National_Heritage_Areas_5, 
                style: style_National_Heritage_Areas_5,
                popuplayertitle: 'National_Heritage_Areas',
                interactive: true,
                title: '<img src="styles/legend/National_Heritage_Areas_5.png" /> National_Heritage_Areas'
            });
var format_SheelaNaGigLocations_6 = new ol.format.GeoJSON();
var features_SheelaNaGigLocations_6 = format_SheelaNaGigLocations_6.readFeatures(json_SheelaNaGigLocations_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SheelaNaGigLocations_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SheelaNaGigLocations_6.addFeatures(features_SheelaNaGigLocations_6);
var lyr_SheelaNaGigLocations_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SheelaNaGigLocations_6, 
                style: style_SheelaNaGigLocations_6,
                popuplayertitle: ' Sheela Na Gig Locations',
                interactive: true,
                title: '<img src="styles/legend/SheelaNaGigLocations_6.png" />  Sheela Na Gig Locations'
            });
var format_PrehistoricRockArt_7 = new ol.format.GeoJSON();
var features_PrehistoricRockArt_7 = format_PrehistoricRockArt_7.readFeatures(json_PrehistoricRockArt_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PrehistoricRockArt_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrehistoricRockArt_7.addFeatures(features_PrehistoricRockArt_7);
var lyr_PrehistoricRockArt_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PrehistoricRockArt_7, 
                style: style_PrehistoricRockArt_7,
                popuplayertitle: 'Prehistoric Rock Art',
                interactive: true,
                title: '<img src="styles/legend/PrehistoricRockArt_7.png" /> Prehistoric Rock Art'
            });
var format_NMSWreckInventory_8 = new ol.format.GeoJSON();
var features_NMSWreckInventory_8 = format_NMSWreckInventory_8.readFeatures(json_NMSWreckInventory_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NMSWreckInventory_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NMSWreckInventory_8.addFeatures(features_NMSWreckInventory_8);
var lyr_NMSWreckInventory_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NMSWreckInventory_8, 
                style: style_NMSWreckInventory_8,
                popuplayertitle: ' NMS Wreck Inventory',
                interactive: true,
                title: '<img src="styles/legend/NMSWreckInventory_8.png" />  NMS Wreck Inventory'
            });
var format_NMS_Stone_Circles_9 = new ol.format.GeoJSON();
var features_NMS_Stone_Circles_9 = format_NMS_Stone_Circles_9.readFeatures(json_NMS_Stone_Circles_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NMS_Stone_Circles_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NMS_Stone_Circles_9.addFeatures(features_NMS_Stone_Circles_9);
var lyr_NMS_Stone_Circles_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NMS_Stone_Circles_9, 
                style: style_NMS_Stone_Circles_9,
                popuplayertitle: 'NMS_Stone_Circles',
                interactive: true,
                title: '<img src="styles/legend/NMS_Stone_Circles_9.png" /> NMS_Stone_Circles'
            });
var format_NMS_Sites_and_Monuments_Records_10 = new ol.format.GeoJSON();
var features_NMS_Sites_and_Monuments_Records_10 = format_NMS_Sites_and_Monuments_Records_10.readFeatures(json_NMS_Sites_and_Monuments_Records_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NMS_Sites_and_Monuments_Records_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NMS_Sites_and_Monuments_Records_10.addFeatures(features_NMS_Sites_and_Monuments_Records_10);
var lyr_NMS_Sites_and_Monuments_Records_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NMS_Sites_and_Monuments_Records_10, 
                style: style_NMS_Sites_and_Monuments_Records_10,
                popuplayertitle: 'NMS_Sites_and_Monuments_Records',
                interactive: true,
                title: '<img src="styles/legend/NMS_Sites_and_Monuments_Records_10.png" /> NMS_Sites_and_Monuments_Records'
            });
var format_NMS_Prehistoric_Art_11 = new ol.format.GeoJSON();
var features_NMS_Prehistoric_Art_11 = format_NMS_Prehistoric_Art_11.readFeatures(json_NMS_Prehistoric_Art_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NMS_Prehistoric_Art_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NMS_Prehistoric_Art_11.addFeatures(features_NMS_Prehistoric_Art_11);
var lyr_NMS_Prehistoric_Art_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NMS_Prehistoric_Art_11, 
                style: style_NMS_Prehistoric_Art_11,
                popuplayertitle: 'NMS_Prehistoric_Art',
                interactive: true,
                title: '<img src="styles/legend/NMS_Prehistoric_Art_11.png" /> NMS_Prehistoric_Art'
            });
var format_NMS_Archaelogical_Survey_12 = new ol.format.GeoJSON();
var features_NMS_Archaelogical_Survey_12 = format_NMS_Archaelogical_Survey_12.readFeatures(json_NMS_Archaelogical_Survey_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NMS_Archaelogical_Survey_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NMS_Archaelogical_Survey_12.addFeatures(features_NMS_Archaelogical_Survey_12);
var lyr_NMS_Archaelogical_Survey_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NMS_Archaelogical_Survey_12, 
                style: style_NMS_Archaelogical_Survey_12,
                popuplayertitle: 'NMS_Archaelogical_Survey',
                interactive: true,
                title: '<img src="styles/legend/NMS_Archaelogical_Survey_12.png" /> NMS_Archaelogical_Survey'
            });
var format_NIAHPost1700sArchitechturalHeritage_13 = new ol.format.GeoJSON();
var features_NIAHPost1700sArchitechturalHeritage_13 = format_NIAHPost1700sArchitechturalHeritage_13.readFeatures(json_NIAHPost1700sArchitechturalHeritage_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NIAHPost1700sArchitechturalHeritage_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NIAHPost1700sArchitechturalHeritage_13.addFeatures(features_NIAHPost1700sArchitechturalHeritage_13);
var lyr_NIAHPost1700sArchitechturalHeritage_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NIAHPost1700sArchitechturalHeritage_13, 
                style: style_NIAHPost1700sArchitechturalHeritage_13,
                popuplayertitle: 'NIAH Post-1700s Architechtural Heritage',
                interactive: true,
                title: '<img src="styles/legend/NIAHPost1700sArchitechturalHeritage_13.png" /> NIAH Post-1700s Architechtural Heritage'
            });
var format_GSIGeoheritageAuditedSites_14 = new ol.format.GeoJSON();
var features_GSIGeoheritageAuditedSites_14 = format_GSIGeoheritageAuditedSites_14.readFeatures(json_GSIGeoheritageAuditedSites_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GSIGeoheritageAuditedSites_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GSIGeoheritageAuditedSites_14.addFeatures(features_GSIGeoheritageAuditedSites_14);
var lyr_GSIGeoheritageAuditedSites_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GSIGeoheritageAuditedSites_14, 
                style: style_GSIGeoheritageAuditedSites_14,
                popuplayertitle: 'GSI Geoheritage Audited Sites',
                interactive: true,
                title: '<img src="styles/legend/GSIGeoheritageAuditedSites_14.png" /> GSI Geoheritage Audited Sites'
            });
var format_PopulationCentres_15 = new ol.format.GeoJSON();
var features_PopulationCentres_15 = format_PopulationCentres_15.readFeatures(json_PopulationCentres_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PopulationCentres_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PopulationCentres_15.addFeatures(features_PopulationCentres_15);
var lyr_PopulationCentres_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PopulationCentres_15, 
                style: style_PopulationCentres_15,
                popuplayertitle: 'Population Centres',
                interactive: true,
                title: '<img src="styles/legend/PopulationCentres_15.png" /> Population Centres'
            });
var format_HigherEducationInstitutes_16 = new ol.format.GeoJSON();
var features_HigherEducationInstitutes_16 = format_HigherEducationInstitutes_16.readFeatures(json_HigherEducationInstitutes_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HigherEducationInstitutes_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HigherEducationInstitutes_16.addFeatures(features_HigherEducationInstitutes_16);
var lyr_HigherEducationInstitutes_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HigherEducationInstitutes_16, 
                style: style_HigherEducationInstitutes_16,
                popuplayertitle: 'Higher Education Institutes',
                interactive: true,
                title: '<img src="styles/legend/HigherEducationInstitutes_16.png" /> Higher Education Institutes'
            });
var format_TipperaryCountyBoundary_17 = new ol.format.GeoJSON();
var features_TipperaryCountyBoundary_17 = format_TipperaryCountyBoundary_17.readFeatures(json_TipperaryCountyBoundary_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TipperaryCountyBoundary_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TipperaryCountyBoundary_17.addFeatures(features_TipperaryCountyBoundary_17);
var lyr_TipperaryCountyBoundary_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TipperaryCountyBoundary_17, 
                style: style_TipperaryCountyBoundary_17,
                popuplayertitle: 'Tipperary County Boundary',
                interactive: false,
                title: '<img src="styles/legend/TipperaryCountyBoundary_17.png" /> Tipperary County Boundary'
            });
var format_TownandCityBoundaries_18 = new ol.format.GeoJSON();
var features_TownandCityBoundaries_18 = format_TownandCityBoundaries_18.readFeatures(json_TownandCityBoundaries_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TownandCityBoundaries_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TownandCityBoundaries_18.addFeatures(features_TownandCityBoundaries_18);
var lyr_TownandCityBoundaries_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TownandCityBoundaries_18, 
                style: style_TownandCityBoundaries_18,
                popuplayertitle: 'Town and City Boundaries',
                interactive: true,
                title: '<img src="styles/legend/TownandCityBoundaries_18.png" /> Town and City Boundaries'
            });
var format_WindFarmsJune2022_19 = new ol.format.GeoJSON();
var features_WindFarmsJune2022_19 = format_WindFarmsJune2022_19.readFeatures(json_WindFarmsJune2022_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WindFarmsJune2022_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WindFarmsJune2022_19.addFeatures(features_WindFarmsJune2022_19);
var lyr_WindFarmsJune2022_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WindFarmsJune2022_19, 
                style: style_WindFarmsJune2022_19,
                popuplayertitle: 'Wind Farms June 2022',
                interactive: true,
                title: '<img src="styles/legend/WindFarmsJune2022_19.png" /> Wind Farms June 2022'
            });
var group_Energy = new ol.layer.Group({
                                layers: [lyr_WindFarmsJune2022_19,],
                                fold: 'open',
                                title: 'Energy'});
var group_AdminstrativeBoundaries = new ol.layer.Group({
                                layers: [lyr_TipperaryCountyBoundary_17,lyr_TownandCityBoundaries_18,],
                                fold: 'open',
                                title: 'Adminstrative Boundaries'});
var group_People = new ol.layer.Group({
                                layers: [lyr_PopulationCentres_15,lyr_HigherEducationInstitutes_16,],
                                fold: 'open',
                                title: 'People'});
var group_Geoheritage = new ol.layer.Group({
                                layers: [lyr_GSIGeoheritageAuditedSites_14,],
                                fold: 'open',
                                title: 'Geoheritage'});
var group_HistoricalConservation = new ol.layer.Group({
                                layers: [lyr_National_Heritage_Areas_5,lyr_SheelaNaGigLocations_6,lyr_PrehistoricRockArt_7,lyr_NMSWreckInventory_8,lyr_NMS_Stone_Circles_9,lyr_NMS_Sites_and_Monuments_Records_10,lyr_NMS_Prehistoric_Art_11,lyr_NMS_Archaelogical_Survey_12,lyr_NIAHPost1700sArchitechturalHeritage_13,],
                                fold: 'open',
                                title: 'Historical Conservation'});
var group_NaturalConservation = new ol.layer.Group({
                                layers: [lyr_SpecialProtectionAreas_2,lyr_SpecialAreasofConservation_3,lyr_AncientWoodlandInventory_4,],
                                fold: 'open',
                                title: 'Natural Conservation'});
var group_Pollution = new ol.layer.Group({
                                layers: [lyr_EPAPRTRFacilities2023_1,],
                                fold: 'open',
                                title: 'Pollution'});

lyr_OpenStreetMap_0.setVisible(true);lyr_EPAPRTRFacilities2023_1.setVisible(true);lyr_SpecialProtectionAreas_2.setVisible(true);lyr_SpecialAreasofConservation_3.setVisible(true);lyr_AncientWoodlandInventory_4.setVisible(true);lyr_National_Heritage_Areas_5.setVisible(true);lyr_SheelaNaGigLocations_6.setVisible(true);lyr_PrehistoricRockArt_7.setVisible(true);lyr_NMSWreckInventory_8.setVisible(true);lyr_NMS_Stone_Circles_9.setVisible(true);lyr_NMS_Sites_and_Monuments_Records_10.setVisible(true);lyr_NMS_Prehistoric_Art_11.setVisible(true);lyr_NMS_Archaelogical_Survey_12.setVisible(true);lyr_NIAHPost1700sArchitechturalHeritage_13.setVisible(true);lyr_GSIGeoheritageAuditedSites_14.setVisible(true);lyr_PopulationCentres_15.setVisible(true);lyr_HigherEducationInstitutes_16.setVisible(true);lyr_TipperaryCountyBoundary_17.setVisible(true);lyr_TownandCityBoundaries_18.setVisible(true);lyr_WindFarmsJune2022_19.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,group_Pollution,group_NaturalConservation,group_HistoricalConservation,group_Geoheritage,group_People,group_AdminstrativeBoundaries,group_Energy];
lyr_EPAPRTRFacilities2023_1.set('fieldAliases', {'fid': 'fid', 'MainSector': 'Main Sector', 'MainSect_1': 'Main Sector 1', 'MainReport': 'Main Report', 'Organisati': 'Organization', 'FacilityId': 'Facility ID', 'FacilityNa': 'Facility Name', 'FacilityTo': 'Town', 'FacilityCo': 'County', 'CurrentReg': 'CurrentReg', 'CurrentLic': 'CurrentLic', });
lyr_SpecialProtectionAreas_2.set('fieldAliases', {'fid': 'fid', 'SITECODE': 'Site Code', 'SITE_NAME': 'Site Name', 'COUNTY': 'County', 'VERSION': 'Version', 'HA': 'Area (ha)', 'Source_CRS': 'Source_CRS', 'SourcScale': 'SourcScale', 'URL': 'URL', });
lyr_SpecialAreasofConservation_3.set('fieldAliases', {'fid': 'fid', 'SITECODE': 'Site Code', 'SITE_NAME': 'Site Name', 'VERSION': 'Version', 'COUNTY': 'County', 'HA': 'Area (ha)', 'Source_CRS': 'Source_CRS', 'SourcScale': 'SourcScale', 'URL': 'URL', });
lyr_AncientWoodlandInventory_4.set('fieldAliases', {'fid': 'fid', 'ALEW_ID': 'ALEW_ID', 'SITE_NAME': 'SITE_NAME', 'STATUS': 'STATUS', 'AREA': 'AREA', 'COUNTY': 'COUNTY', 'OWNERSHIP': 'OWNERSHIP', 'NSNW_NO': 'NSNW_NO', 'FIPS98_NO': 'FIPS98_NO', 'WOOD_TYPE': 'WOOD_TYPE', 'SURVEY': 'SURVEY', 'OSI_1ST_ED': 'OSI_1ST_ED', 'OSI_3RD_ED': 'OSI_3RD_ED', 'HYPERLINK': 'HYPERLINK', 'PARISH': 'PARISH', 'TOWNLAND': 'TOWNLAND', });
lyr_National_Heritage_Areas_5.set('fieldAliases', {'fid': 'fid', 'SITECODE': 'Site Code', 'SITE_NAME': 'Site Name', 'COUNTY': 'County', 'VERSION': 'Version', 'HA': 'Area (ha)', 'Source_CRS': 'Source_CRS', 'SourcScale': 'SourcScale', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'URL': 'URL', });
lyr_SheelaNaGigLocations_6.set('fieldAliases', {'fid': 'fid', 'SMR_No': 'SMR Number', 'Class': 'Class', 'County': 'County', 'Townland': 'Townland', 'ITM_Eastin': 'ITM_Eastin', 'ITM_Northi': 'ITM_Northi', 'Location': 'Location', 'Image': 'Image', 'Descriptio': 'Description', });
lyr_PrehistoricRockArt_7.set('fieldAliases', {'fid': 'fid', 'ENTITY_ID': 'ENTITY_ID', 'CLASS_CODE': 'Class Code', 'SMRS': 'SMRS', 'COUNTY': 'County', 'TOWNLAND': 'Townland', 'COUNTY_ID': 'COUNTY_ID', 'ZONE_ID': 'ZONE_ID', 'ITM_E': 'ITM_E', 'ITM_N': 'ITM_N', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'MONUMENT_T': 'Monument Type', 'FIRST_EDIT': 'First Edit', 'LATEST_EDI': 'Latest Edit', 'WEBSITE_LI': 'Website Link', 'WEB_NOTES': 'Web Notes', });
lyr_NMSWreckInventory_8.set('fieldAliases', {'fid': 'fid', 'Wreck Name': 'Wreck Name', 'Wreck No': 'Wreck Number', 'Classifica': 'Classification', 'Place of L': 'Place of Loss', 'Date of Lo': 'Date of Loss', 'DD_Lat': 'DD_Lat', 'DD_Long': 'DD_Long', 'Source of': 'Source', 'Descriptio': 'Description', 'Record Sou': 'Record Source', 'Date_of_Lo': 'Date_of_Lo', });
lyr_NMS_Stone_Circles_9.set('fieldAliases', {'fid': 'fid', 'ENTITY_ID': 'ENTITY_ID', 'CLASS_CODE': 'Class Code', 'SMRS': 'SMRS', 'COUNTY': 'County', 'TOWNLAND': 'Townland', 'COUNTY_ID': 'COUNTY_ID', 'ZONE_ID': 'Zone ID', 'ITM_E': 'ITM_E', 'ITM_N': 'ITM_N', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'MONUMENT_T': 'MONUMENT_T', 'FIRST_EDIT': 'First Edit', 'LATEST_EDI': 'Latest Edit', 'WEBSITE_LI': 'Website Link', 'WEB_NOTES': 'Web Notes', });
lyr_NMS_Sites_and_Monuments_Records_10.set('fieldAliases', {'fid': 'fid', 'ENTITY_ID': 'ENTITY_ID', 'CLASS_CODE': 'Class Code', 'SMRS': 'SMRS', 'COUNTY': 'County', 'TOWNLAND': 'Townland', 'ZONE_ID': 'Zone ID', 'ITM_E': 'ITM_E', 'ITM_N': 'ITM_N', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'MONUMENT_C': 'Monument Catagory', 'FIRST_EDIT': 'First Edit', 'LATEST_EDI': 'Latest Edit', 'WEBSITE_LI': 'Website Link', 'WEB_NOTES': 'Web Notes', 'REFERENCES': 'References', });
lyr_NMS_Prehistoric_Art_11.set('fieldAliases', {'fid': 'fid', 'ENTITY_ID': 'ENTITY_ID', 'CLASS_CODE': 'Class Code', 'SMRS': 'SMRS', 'COUNTY': 'County', 'TOWNLAND': 'Townland', 'COUNTY_ID': 'COUNTY_ID', 'ZONE_ID': 'ZONE_ID', 'ITM_E': 'ITM_E', 'ITM_N': 'ITM_N', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'MONUMENT_T': 'Monument Type', 'FIRST_EDIT': 'First Edit', 'LATEST_EDI': 'Latest Edit', 'WEBSITE_LI': 'Website Link', 'WEB_NOTES': 'Web Notes', });
lyr_NMS_Archaelogical_Survey_12.set('fieldAliases', {'fid': 'fid', 'ENTITY_ID': 'ENTITY_ID', 'CLASS_CODE': 'Class Code', 'SMRS': 'SMRS', 'COUNTY': 'County', 'TOWNLAND': 'Townland', 'ZONE_ID': 'Zone ID', 'ITM_E': 'ITM_E', 'ITM_N': 'ITM_N', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'MONUMENT_C': 'Monument Catagory', 'FIRST_EDIT': 'First Edit', 'LATEST_EDI': 'Latest Edit', 'WEBSITE_LI': 'Website Link', 'WEB_NOTES': 'Web Notes', 'REFERENCES': 'References', });
lyr_NIAHPost1700sArchitechturalHeritage_13.set('fieldAliases', {'fid': 'fid', 'OBJECTID_1': 'OBJECTID_1', 'REG_NO': 'Registration Number', 'ORIGINAL_T': 'Original Type', 'IN_USE_AS_': 'In Use As', 'NAME': 'Name', 'NUMBER': 'Number', 'STREET1': 'Street 1', 'STREET2': 'Street 2', 'TOWN': 'Town', 'TOWNLAND': 'Townland', 'COUNTY': 'County', 'BAILE_FEAR': 'BAILE_FEAR', 'CONTAE': 'CONTAE', 'LOCAL_AUTH': 'Local Authority', 'DESCRIPTIO': 'Description', 'APPRAISAL': 'Appraisal', 'DATEFROM': 'From Date', 'DATETO': 'To Date', 'RATING': 'Rating', 'ITM_E': 'ITM_E', 'ITM_N': 'ITM_N', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'IMAGE_LINK': 'Image Link', 'WEBSITE_LI': 'Website Link', 'SURVEY': 'Survey', 'CSI': 'CSI', });
lyr_GSIGeoheritageAuditedSites_14.set('fieldAliases', {'fid': 'fid', 'SITECODE': 'Site Code', 'SITENAME': 'Site Name', 'IGH1': 'IGH1', 'IGH2': 'IGH2', 'IGH3': 'IGH3', 'IGH4': 'IGH4', 'COUNTY': 'County', 'DESCRIPT': 'Description', 'GEOLOGICAL': 'Geological', 'DESIGNAT': 'Designation', 'REPORT': 'Report', 'X_IG': 'X_IG', 'Y_IG': 'Y_IG', 'X_ITM': 'X_ITM', 'Y_ITM': 'Y_ITM', });
lyr_PopulationCentres_15.set('fieldAliases', {'fid': 'fid', 'OBJECTID_1': 'OBJECTID_1', 'County': 'County', 'Contae': 'Contae', 'Local_Gove': 'Local Government', 'Limistéar': 'Limistéar', 'Classifica': 'Classification', 'Cineál': 'Cineál', 'Gaeltacht': 'Gaeltacht', 'Town_Class': 'Town Class', 'ID': 'ID', 'English_Na': 'English Name', 'Irish_Name': 'Irish Name', 'Foirm_Ghin': 'Forim Ghin', 'Alternativ': 'Alternative Names', 'IG_E': 'IG_E', 'IG_N': 'IG_N', 'ITM_E': 'ITM_E', 'ITM_N': 'ITM_N', 'Irish_Vali': 'Irish_Vali', 'Legislatio': 'Legislatio', 'Validated_': 'Validated', 'Date_': 'Date', 'Comment_': 'Comments', });
lyr_HigherEducationInstitutes_16.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'loc_name': 'Name', });
lyr_TipperaryCountyBoundary_17.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'GUID': 'GUID', 'GMS_JOB_ID': 'GMS_JOB_ID', 'CAPTURE_SPECIFICATION': 'CAPTURE_SPECIFICATION', 'CAPTURE_SPECIFICATION_VALUE': 'CAPTURE_SPECIFICATION_VALUE', 'URI': 'URI', 'POLY_GEOM_CAPTURE_DATE': 'POLY_GEOM_CAPTURE_DATE', 'POLY_GEOM_CAPTURE_SRC': 'POLY_GEOM_CAPTURE_SRC', 'POLY_GEOM_CAPTURE_SRC_VALUE': 'POLY_GEOM_CAPTURE_SRC_VALUE', 'POLY_GEOM_CHANGE_CODE': 'POLY_GEOM_CHANGE_CODE', 'POLY_GEOM_CHANGE_CODE_VALUE': 'POLY_GEOM_CHANGE_CODE_VALUE', 'POLY_GEOM_CHANGE_DATE': 'POLY_GEOM_CHANGE_DATE', 'POLY_GEOM_CAPTURE_METH': 'POLY_GEOM_CAPTURE_METH', 'POLY_GEOM_CAPTURE_METH_VALUE': 'POLY_GEOM_CAPTURE_METH_VALUE', 'POLY_GEOM_CAPTURE_RES': 'POLY_GEOM_CAPTURE_RES', 'POLY_GEOM_CAPTURE_RES_VALUE': 'POLY_GEOM_CAPTURE_RES_VALUE', 'POLY_GEOM_HT_ERR_VALUE': 'POLY_GEOM_HT_ERR_VALUE', 'POLY_GEOM_VALID_AUTH': 'POLY_GEOM_VALID_AUTH', 'POLY_GEOM_VALID_AUTH_VALUE': 'POLY_GEOM_VALID_AUTH_VALUE', 'POLY_GEOM_VALID_DATE': 'POLY_GEOM_VALID_DATE', 'BDY_TYPE_ID': 'BDY_TYPE_ID', 'BDY_TYPE_VALUE': 'BDY_TYPE_VALUE', 'BDY_TYPE_CAPTURE_DATE': 'BDY_TYPE_CAPTURE_DATE', 'BDY_TYPE_CAPTURE_SRC': 'BDY_TYPE_CAPTURE_SRC', 'BDY_TYPE_CAPTURE_SRC_VALUE': 'BDY_TYPE_CAPTURE_SRC_VALUE', 'BDY_TYPE_CHANGE_CODE': 'BDY_TYPE_CHANGE_CODE', 'BDY_TYPE_CHANGE_CODE_VALUE': 'BDY_TYPE_CHANGE_CODE_VALUE', 'BDY_TYPE_CHANGE_DATE': 'BDY_TYPE_CHANGE_DATE', 'BDY_TYPE_VALID_AUTH': 'BDY_TYPE_VALID_AUTH', 'BDY_TYPE_VALID_AUTH_VALUE': 'BDY_TYPE_VALID_AUTH_VALUE', 'BDY_TYPE_VALID_DATE': 'BDY_TYPE_VALID_DATE', 'BDY_ID': 'BDY_ID', 'BDY_ID_CAPTURE_DATE': 'BDY_ID_CAPTURE_DATE', 'BDY_ID_CAPTURE_SRC': 'BDY_ID_CAPTURE_SRC', 'BDY_ID_CAPTURE_SRC_VALUE': 'BDY_ID_CAPTURE_SRC_VALUE', 'BDY_ID_CHANGE_CODE': 'BDY_ID_CHANGE_CODE', 'BDY_ID_CHANGE_CODE_VALUE': 'BDY_ID_CHANGE_CODE_VALUE', 'BDY_ID_CHANGE_DATE': 'BDY_ID_CHANGE_DATE', 'BDY_ID_VALID_AUTH': 'BDY_ID_VALID_AUTH', 'BDY_ID_VALID_AUTH_VALUE': 'BDY_ID_VALID_AUTH_VALUE', 'BDY_ID_VALID_DATE': 'BDY_ID_VALID_DATE', 'ENG_NAME_VALUE': 'ENG_NAME_VALUE', 'ENG_NAME_CAPTURE_DATE': 'ENG_NAME_CAPTURE_DATE', 'ENG_NAME_CAPTURE_SRC': 'ENG_NAME_CAPTURE_SRC', 'ENG_NAME_CAPTURE_SRC_VALUE': 'ENG_NAME_CAPTURE_SRC_VALUE', 'ENG_NAME_CHANGE_CODE': 'ENG_NAME_CHANGE_CODE', 'ENG_NAME_CHANGE_CODE_VALUE': 'ENG_NAME_CHANGE_CODE_VALUE', 'ENG_NAME_CHANGE_DATE': 'ENG_NAME_CHANGE_DATE', 'ENG_NAME_VALID_AUTH': 'ENG_NAME_VALID_AUTH', 'ENG_NAME_VALID_AUTH_VALUE': 'ENG_NAME_VALID_AUTH_VALUE', 'ENG_NAME_VALID_DATE': 'ENG_NAME_VALID_DATE', 'GLE_NAME_VALUE': 'GLE_NAME_VALUE', 'GLE_NAME_CAPTURE_DATE': 'GLE_NAME_CAPTURE_DATE', 'GLE_NAME_CAPTURE_SRC': 'GLE_NAME_CAPTURE_SRC', 'GLE_NAME_CAPTURE_SRC_VALUE': 'GLE_NAME_CAPTURE_SRC_VALUE', 'GLE_NAME_CHANGE_CODE': 'GLE_NAME_CHANGE_CODE', 'GLE_NAME_CHANGE_CODE_VALUE': 'GLE_NAME_CHANGE_CODE_VALUE', 'GLE_NAME_CHANGE_DATE': 'GLE_NAME_CHANGE_DATE', 'GLE_NAME_VALID_AUTH': 'GLE_NAME_VALID_AUTH', 'GLE_NAME_VALID_AUTH_VALUE': 'GLE_NAME_VALID_AUTH_VALUE', 'GLE_NAME_VALID_DATE': 'GLE_NAME_VALID_DATE', 'GAELTACHT_AREA': 'GAELTACHT_AREA', 'SE_ANNO_CAD_DATA': 'SE_ANNO_CAD_DATA', });
lyr_TownandCityBoundaries_18.set('fieldAliases', {'fid': 'fid', 'NAME': 'NAME', 'SETTCODE': 'SETTCODE', });
lyr_WindFarmsJune2022_19.set('fieldAliases', {'fid': 'fid', 'Windfarm_N': 'Name', 'DSO_TSO': 'DSO/TSO', 'Connection': 'Connection', 'County': 'County', 'Present_St': 'Present Status', 'Installed_': 'Installed', 'MEC__MW_': 'MEC__MW_', 'Gate': 'Gate', 'F110kV_Nod': 'F110kV_Nod', 'Target_Con': 'Target Construction', 'Date_of_Co': 'Date of Construction', 'Year_of_Co': 'Year of Construction', 'Nat_Grid_E': 'Nat_Grid_E', 'Nat_Grid_N': 'Nat_Grid_N', 'Type': 'Type', });
lyr_EPAPRTRFacilities2023_1.set('fieldImages', {'fid': 'TextEdit', 'MainSector': 'TextEdit', 'MainSect_1': 'TextEdit', 'MainReport': 'TextEdit', 'Organisati': 'TextEdit', 'FacilityId': 'TextEdit', 'FacilityNa': 'TextEdit', 'FacilityTo': 'TextEdit', 'FacilityCo': 'TextEdit', 'CurrentReg': 'TextEdit', 'CurrentLic': 'TextEdit', });
lyr_SpecialProtectionAreas_2.set('fieldImages', {'fid': 'TextEdit', 'SITECODE': 'TextEdit', 'SITE_NAME': 'TextEdit', 'COUNTY': 'TextEdit', 'VERSION': 'TextEdit', 'HA': 'TextEdit', 'Source_CRS': 'TextEdit', 'SourcScale': 'TextEdit', 'URL': 'TextEdit', });
lyr_SpecialAreasofConservation_3.set('fieldImages', {'fid': 'TextEdit', 'SITECODE': 'TextEdit', 'SITE_NAME': 'TextEdit', 'VERSION': 'TextEdit', 'COUNTY': 'TextEdit', 'HA': 'TextEdit', 'Source_CRS': 'TextEdit', 'SourcScale': 'TextEdit', 'URL': 'TextEdit', });
lyr_AncientWoodlandInventory_4.set('fieldImages', {'fid': 'TextEdit', 'ALEW_ID': 'Range', 'SITE_NAME': 'TextEdit', 'STATUS': 'TextEdit', 'AREA': 'Range', 'COUNTY': 'TextEdit', 'OWNERSHIP': 'TextEdit', 'NSNW_NO': 'Range', 'FIPS98_NO': 'Range', 'WOOD_TYPE': 'TextEdit', 'SURVEY': 'TextEdit', 'OSI_1ST_ED': 'TextEdit', 'OSI_3RD_ED': 'TextEdit', 'HYPERLINK': 'TextEdit', 'PARISH': 'TextEdit', 'TOWNLAND': 'TextEdit', });
lyr_National_Heritage_Areas_5.set('fieldImages', {'fid': 'TextEdit', 'SITECODE': 'TextEdit', 'SITE_NAME': 'TextEdit', 'COUNTY': 'TextEdit', 'VERSION': 'TextEdit', 'HA': 'TextEdit', 'Source_CRS': 'TextEdit', 'SourcScale': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'URL': 'TextEdit', });
lyr_SheelaNaGigLocations_6.set('fieldImages', {'fid': 'TextEdit', 'SMR_No': 'TextEdit', 'Class': 'TextEdit', 'County': 'TextEdit', 'Townland': 'TextEdit', 'ITM_Eastin': 'TextEdit', 'ITM_Northi': 'TextEdit', 'Location': 'TextEdit', 'Image': 'TextEdit', 'Descriptio': 'TextEdit', });
lyr_PrehistoricRockArt_7.set('fieldImages', {'fid': 'TextEdit', 'ENTITY_ID': 'TextEdit', 'CLASS_CODE': 'TextEdit', 'SMRS': 'TextEdit', 'COUNTY': 'TextEdit', 'TOWNLAND': 'TextEdit', 'COUNTY_ID': 'TextEdit', 'ZONE_ID': 'TextEdit', 'ITM_E': 'TextEdit', 'ITM_N': 'TextEdit', 'LATITUDE': 'TextEdit', 'LONGITUDE': 'TextEdit', 'MONUMENT_T': 'TextEdit', 'FIRST_EDIT': 'TextEdit', 'LATEST_EDI': 'TextEdit', 'WEBSITE_LI': 'TextEdit', 'WEB_NOTES': 'TextEdit', });
lyr_NMSWreckInventory_8.set('fieldImages', {'fid': 'TextEdit', 'Wreck Name': 'TextEdit', 'Wreck No': 'TextEdit', 'Classifica': 'TextEdit', 'Place of L': 'TextEdit', 'Date of Lo': 'TextEdit', 'DD_Lat': 'TextEdit', 'DD_Long': 'TextEdit', 'Source of': 'TextEdit', 'Descriptio': 'TextEdit', 'Record Sou': 'TextEdit', 'Date_of_Lo': 'TextEdit', });
lyr_NMS_Stone_Circles_9.set('fieldImages', {'fid': 'TextEdit', 'ENTITY_ID': 'TextEdit', 'CLASS_CODE': 'TextEdit', 'SMRS': 'TextEdit', 'COUNTY': 'TextEdit', 'TOWNLAND': 'TextEdit', 'COUNTY_ID': 'TextEdit', 'ZONE_ID': 'TextEdit', 'ITM_E': 'TextEdit', 'ITM_N': 'TextEdit', 'LATITUDE': 'TextEdit', 'LONGITUDE': 'TextEdit', 'MONUMENT_T': 'TextEdit', 'FIRST_EDIT': 'TextEdit', 'LATEST_EDI': 'TextEdit', 'WEBSITE_LI': 'TextEdit', 'WEB_NOTES': 'TextEdit', });
lyr_NMS_Sites_and_Monuments_Records_10.set('fieldImages', {'fid': 'TextEdit', 'ENTITY_ID': 'TextEdit', 'CLASS_CODE': 'TextEdit', 'SMRS': 'TextEdit', 'COUNTY': 'TextEdit', 'TOWNLAND': 'TextEdit', 'ZONE_ID': 'TextEdit', 'ITM_E': 'TextEdit', 'ITM_N': 'TextEdit', 'LATITUDE': 'TextEdit', 'LONGITUDE': 'TextEdit', 'MONUMENT_C': 'TextEdit', 'FIRST_EDIT': 'TextEdit', 'LATEST_EDI': 'TextEdit', 'WEBSITE_LI': 'TextEdit', 'WEB_NOTES': 'TextEdit', 'REFERENCES': 'TextEdit', });
lyr_NMS_Prehistoric_Art_11.set('fieldImages', {'fid': 'TextEdit', 'ENTITY_ID': 'TextEdit', 'CLASS_CODE': 'TextEdit', 'SMRS': 'TextEdit', 'COUNTY': 'TextEdit', 'TOWNLAND': 'TextEdit', 'COUNTY_ID': 'TextEdit', 'ZONE_ID': 'TextEdit', 'ITM_E': 'TextEdit', 'ITM_N': 'TextEdit', 'LATITUDE': 'TextEdit', 'LONGITUDE': 'TextEdit', 'MONUMENT_T': 'TextEdit', 'FIRST_EDIT': 'TextEdit', 'LATEST_EDI': 'TextEdit', 'WEBSITE_LI': 'TextEdit', 'WEB_NOTES': 'TextEdit', });
lyr_NMS_Archaelogical_Survey_12.set('fieldImages', {'fid': 'TextEdit', 'ENTITY_ID': 'TextEdit', 'CLASS_CODE': 'TextEdit', 'SMRS': 'TextEdit', 'COUNTY': 'TextEdit', 'TOWNLAND': 'TextEdit', 'ZONE_ID': 'TextEdit', 'ITM_E': 'TextEdit', 'ITM_N': 'TextEdit', 'LATITUDE': 'TextEdit', 'LONGITUDE': 'TextEdit', 'MONUMENT_C': 'TextEdit', 'FIRST_EDIT': 'TextEdit', 'LATEST_EDI': 'TextEdit', 'WEBSITE_LI': 'TextEdit', 'WEB_NOTES': 'TextEdit', 'REFERENCES': 'TextEdit', });
lyr_NIAHPost1700sArchitechturalHeritage_13.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID_1': 'TextEdit', 'REG_NO': 'TextEdit', 'ORIGINAL_T': 'TextEdit', 'IN_USE_AS_': 'TextEdit', 'NAME': 'TextEdit', 'NUMBER': 'TextEdit', 'STREET1': 'TextEdit', 'STREET2': 'TextEdit', 'TOWN': 'TextEdit', 'TOWNLAND': 'TextEdit', 'COUNTY': 'TextEdit', 'BAILE_FEAR': 'TextEdit', 'CONTAE': 'TextEdit', 'LOCAL_AUTH': 'TextEdit', 'DESCRIPTIO': 'TextEdit', 'APPRAISAL': 'TextEdit', 'DATEFROM': 'TextEdit', 'DATETO': 'TextEdit', 'RATING': 'TextEdit', 'ITM_E': 'TextEdit', 'ITM_N': 'TextEdit', 'LATITUDE': 'TextEdit', 'LONGITUDE': 'TextEdit', 'IMAGE_LINK': 'TextEdit', 'WEBSITE_LI': 'TextEdit', 'SURVEY': 'TextEdit', 'CSI': 'TextEdit', });
lyr_GSIGeoheritageAuditedSites_14.set('fieldImages', {'fid': 'TextEdit', 'SITECODE': 'TextEdit', 'SITENAME': 'TextEdit', 'IGH1': 'TextEdit', 'IGH2': 'TextEdit', 'IGH3': 'TextEdit', 'IGH4': 'TextEdit', 'COUNTY': 'TextEdit', 'DESCRIPT': 'TextEdit', 'GEOLOGICAL': 'TextEdit', 'DESIGNAT': 'TextEdit', 'REPORT': 'TextEdit', 'X_IG': 'TextEdit', 'Y_IG': 'TextEdit', 'X_ITM': 'TextEdit', 'Y_ITM': 'TextEdit', });
lyr_PopulationCentres_15.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID_1': 'TextEdit', 'County': 'TextEdit', 'Contae': 'TextEdit', 'Local_Gove': 'TextEdit', 'Limistéar': 'TextEdit', 'Classifica': 'TextEdit', 'Cineál': 'TextEdit', 'Gaeltacht': 'TextEdit', 'Town_Class': 'TextEdit', 'ID': 'TextEdit', 'English_Na': 'TextEdit', 'Irish_Name': 'TextEdit', 'Foirm_Ghin': 'TextEdit', 'Alternativ': 'TextEdit', 'IG_E': 'TextEdit', 'IG_N': 'TextEdit', 'ITM_E': 'TextEdit', 'ITM_N': 'TextEdit', 'Irish_Vali': 'TextEdit', 'Legislatio': 'TextEdit', 'Validated_': 'TextEdit', 'Date_': 'TextEdit', 'Comment_': 'TextEdit', });
lyr_HigherEducationInstitutes_16.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'loc_name': 'TextEdit', });
lyr_TipperaryCountyBoundary_17.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'GUID': 'TextEdit', 'GMS_JOB_ID': 'TextEdit', 'CAPTURE_SPECIFICATION': 'TextEdit', 'CAPTURE_SPECIFICATION_VALUE': 'TextEdit', 'URI': 'TextEdit', 'POLY_GEOM_CAPTURE_DATE': 'DateTime', 'POLY_GEOM_CAPTURE_SRC': 'TextEdit', 'POLY_GEOM_CAPTURE_SRC_VALUE': 'TextEdit', 'POLY_GEOM_CHANGE_CODE': 'TextEdit', 'POLY_GEOM_CHANGE_CODE_VALUE': 'TextEdit', 'POLY_GEOM_CHANGE_DATE': 'DateTime', 'POLY_GEOM_CAPTURE_METH': 'TextEdit', 'POLY_GEOM_CAPTURE_METH_VALUE': 'TextEdit', 'POLY_GEOM_CAPTURE_RES': 'TextEdit', 'POLY_GEOM_CAPTURE_RES_VALUE': 'TextEdit', 'POLY_GEOM_HT_ERR_VALUE': 'TextEdit', 'POLY_GEOM_VALID_AUTH': 'TextEdit', 'POLY_GEOM_VALID_AUTH_VALUE': 'TextEdit', 'POLY_GEOM_VALID_DATE': 'DateTime', 'BDY_TYPE_ID': 'TextEdit', 'BDY_TYPE_VALUE': 'TextEdit', 'BDY_TYPE_CAPTURE_DATE': 'DateTime', 'BDY_TYPE_CAPTURE_SRC': 'TextEdit', 'BDY_TYPE_CAPTURE_SRC_VALUE': 'TextEdit', 'BDY_TYPE_CHANGE_CODE': 'TextEdit', 'BDY_TYPE_CHANGE_CODE_VALUE': 'TextEdit', 'BDY_TYPE_CHANGE_DATE': 'DateTime', 'BDY_TYPE_VALID_AUTH': 'TextEdit', 'BDY_TYPE_VALID_AUTH_VALUE': 'TextEdit', 'BDY_TYPE_VALID_DATE': 'DateTime', 'BDY_ID': 'TextEdit', 'BDY_ID_CAPTURE_DATE': 'DateTime', 'BDY_ID_CAPTURE_SRC': 'TextEdit', 'BDY_ID_CAPTURE_SRC_VALUE': 'TextEdit', 'BDY_ID_CHANGE_CODE': 'TextEdit', 'BDY_ID_CHANGE_CODE_VALUE': 'TextEdit', 'BDY_ID_CHANGE_DATE': 'DateTime', 'BDY_ID_VALID_AUTH': 'TextEdit', 'BDY_ID_VALID_AUTH_VALUE': 'TextEdit', 'BDY_ID_VALID_DATE': 'DateTime', 'ENG_NAME_VALUE': 'TextEdit', 'ENG_NAME_CAPTURE_DATE': 'DateTime', 'ENG_NAME_CAPTURE_SRC': 'TextEdit', 'ENG_NAME_CAPTURE_SRC_VALUE': 'TextEdit', 'ENG_NAME_CHANGE_CODE': 'TextEdit', 'ENG_NAME_CHANGE_CODE_VALUE': 'TextEdit', 'ENG_NAME_CHANGE_DATE': 'DateTime', 'ENG_NAME_VALID_AUTH': 'TextEdit', 'ENG_NAME_VALID_AUTH_VALUE': 'TextEdit', 'ENG_NAME_VALID_DATE': 'DateTime', 'GLE_NAME_VALUE': 'TextEdit', 'GLE_NAME_CAPTURE_DATE': 'DateTime', 'GLE_NAME_CAPTURE_SRC': 'TextEdit', 'GLE_NAME_CAPTURE_SRC_VALUE': 'TextEdit', 'GLE_NAME_CHANGE_CODE': 'TextEdit', 'GLE_NAME_CHANGE_CODE_VALUE': 'TextEdit', 'GLE_NAME_CHANGE_DATE': 'DateTime', 'GLE_NAME_VALID_AUTH': 'TextEdit', 'GLE_NAME_VALID_AUTH_VALUE': 'TextEdit', 'GLE_NAME_VALID_DATE': 'DateTime', 'GAELTACHT_AREA': 'TextEdit', 'SE_ANNO_CAD_DATA': 'Binary', });
lyr_TownandCityBoundaries_18.set('fieldImages', {'fid': 'TextEdit', 'NAME': 'TextEdit', 'SETTCODE': 'TextEdit', });
lyr_WindFarmsJune2022_19.set('fieldImages', {'fid': 'TextEdit', 'Windfarm_N': 'TextEdit', 'DSO_TSO': 'TextEdit', 'Connection': 'TextEdit', 'County': 'TextEdit', 'Present_St': 'TextEdit', 'Installed_': 'TextEdit', 'MEC__MW_': 'TextEdit', 'Gate': 'TextEdit', 'F110kV_Nod': 'TextEdit', 'Target_Con': 'TextEdit', 'Date_of_Co': 'TextEdit', 'Year_of_Co': 'TextEdit', 'Nat_Grid_E': 'TextEdit', 'Nat_Grid_N': 'TextEdit', 'Type': 'TextEdit', });
lyr_EPAPRTRFacilities2023_1.set('fieldLabels', {'fid': 'inline label - visible with data', 'MainSector': 'inline label - visible with data', 'MainSect_1': 'inline label - visible with data', 'MainReport': 'inline label - visible with data', 'Organisati': 'inline label - visible with data', 'FacilityId': 'inline label - visible with data', 'FacilityNa': 'inline label - visible with data', 'FacilityTo': 'inline label - visible with data', 'FacilityCo': 'inline label - visible with data', 'CurrentReg': 'inline label - visible with data', 'CurrentLic': 'inline label - visible with data', });
lyr_SpecialProtectionAreas_2.set('fieldLabels', {'fid': 'hidden field', 'SITECODE': 'inline label - visible with data', 'SITE_NAME': 'inline label - visible with data', 'COUNTY': 'inline label - visible with data', 'VERSION': 'inline label - visible with data', 'HA': 'inline label - visible with data', 'Source_CRS': 'hidden field', 'SourcScale': 'hidden field', 'URL': 'inline label - visible with data', });
lyr_SpecialAreasofConservation_3.set('fieldLabels', {'fid': 'hidden field', 'SITECODE': 'inline label - visible with data', 'SITE_NAME': 'inline label - visible with data', 'VERSION': 'inline label - visible with data', 'COUNTY': 'inline label - visible with data', 'HA': 'inline label - visible with data', 'Source_CRS': 'hidden field', 'SourcScale': 'hidden field', 'URL': 'inline label - visible with data', });
lyr_AncientWoodlandInventory_4.set('fieldLabels', {'fid': 'hidden field', 'ALEW_ID': 'inline label - visible with data', 'SITE_NAME': 'inline label - visible with data', 'STATUS': 'inline label - visible with data', 'AREA': 'inline label - visible with data', 'COUNTY': 'inline label - visible with data', 'OWNERSHIP': 'inline label - visible with data', 'NSNW_NO': 'inline label - visible with data', 'FIPS98_NO': 'inline label - visible with data', 'WOOD_TYPE': 'inline label - visible with data', 'SURVEY': 'inline label - visible with data', 'OSI_1ST_ED': 'inline label - visible with data', 'OSI_3RD_ED': 'inline label - visible with data', 'HYPERLINK': 'inline label - visible with data', 'PARISH': 'inline label - visible with data', 'TOWNLAND': 'inline label - visible with data', });
lyr_National_Heritage_Areas_5.set('fieldLabels', {'fid': 'hidden field', 'SITECODE': 'inline label - visible with data', 'SITE_NAME': 'inline label - visible with data', 'COUNTY': 'inline label - visible with data', 'VERSION': 'inline label - visible with data', 'HA': 'inline label - visible with data', 'Source_CRS': 'hidden field', 'SourcScale': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', 'URL': 'inline label - visible with data', });
lyr_SheelaNaGigLocations_6.set('fieldLabels', {'fid': 'hidden field', 'SMR_No': 'inline label - visible with data', 'Class': 'inline label - visible with data', 'County': 'inline label - visible with data', 'Townland': 'inline label - visible with data', 'ITM_Eastin': 'hidden field', 'ITM_Northi': 'hidden field', 'Location': 'inline label - visible with data', 'Image': 'inline label - visible with data', 'Descriptio': 'inline label - visible with data', });
lyr_PrehistoricRockArt_7.set('fieldLabels', {'fid': 'hidden field', 'ENTITY_ID': 'inline label - visible with data', 'CLASS_CODE': 'inline label - visible with data', 'SMRS': 'inline label - visible with data', 'COUNTY': 'inline label - visible with data', 'TOWNLAND': 'inline label - visible with data', 'COUNTY_ID': 'hidden field', 'ZONE_ID': 'hidden field', 'ITM_E': 'hidden field', 'ITM_N': 'hidden field', 'LATITUDE': 'hidden field', 'LONGITUDE': 'hidden field', 'MONUMENT_T': 'inline label - visible with data', 'FIRST_EDIT': 'inline label - visible with data', 'LATEST_EDI': 'inline label - visible with data', 'WEBSITE_LI': 'inline label - visible with data', 'WEB_NOTES': 'inline label - visible with data', });
lyr_NMSWreckInventory_8.set('fieldLabels', {'fid': 'hidden field', 'Wreck Name': 'inline label - visible with data', 'Wreck No': 'inline label - visible with data', 'Classifica': 'inline label - visible with data', 'Place of L': 'inline label - visible with data', 'Date of Lo': 'inline label - visible with data', 'DD_Lat': 'hidden field', 'DD_Long': 'hidden field', 'Source of': 'inline label - visible with data', 'Descriptio': 'inline label - visible with data', 'Record Sou': 'inline label - visible with data', 'Date_of_Lo': 'hidden field', });
lyr_NMS_Stone_Circles_9.set('fieldLabels', {'fid': 'hidden field', 'ENTITY_ID': 'inline label - visible with data', 'CLASS_CODE': 'inline label - visible with data', 'SMRS': 'inline label - visible with data', 'COUNTY': 'inline label - visible with data', 'TOWNLAND': 'inline label - visible with data', 'COUNTY_ID': 'hidden field', 'ZONE_ID': 'hidden field', 'ITM_E': 'hidden field', 'ITM_N': 'hidden field', 'LATITUDE': 'hidden field', 'LONGITUDE': 'hidden field', 'MONUMENT_T': 'inline label - visible with data', 'FIRST_EDIT': 'inline label - visible with data', 'LATEST_EDI': 'inline label - visible with data', 'WEBSITE_LI': 'inline label - visible with data', 'WEB_NOTES': 'inline label - visible with data', });
lyr_NMS_Sites_and_Monuments_Records_10.set('fieldLabels', {'fid': 'hidden field', 'ENTITY_ID': 'inline label - visible with data', 'CLASS_CODE': 'inline label - visible with data', 'SMRS': 'inline label - visible with data', 'COUNTY': 'inline label - visible with data', 'TOWNLAND': 'inline label - visible with data', 'ZONE_ID': 'hidden field', 'ITM_E': 'hidden field', 'ITM_N': 'hidden field', 'LATITUDE': 'hidden field', 'LONGITUDE': 'hidden field', 'MONUMENT_C': 'inline label - visible with data', 'FIRST_EDIT': 'inline label - visible with data', 'LATEST_EDI': 'inline label - visible with data', 'WEBSITE_LI': 'inline label - visible with data', 'WEB_NOTES': 'inline label - visible with data', 'REFERENCES': 'inline label - visible with data', });
lyr_NMS_Prehistoric_Art_11.set('fieldLabels', {'fid': 'hidden field', 'ENTITY_ID': 'inline label - visible with data', 'CLASS_CODE': 'inline label - visible with data', 'SMRS': 'inline label - visible with data', 'COUNTY': 'inline label - visible with data', 'TOWNLAND': 'inline label - visible with data', 'COUNTY_ID': 'hidden field', 'ZONE_ID': 'hidden field', 'ITM_E': 'hidden field', 'ITM_N': 'hidden field', 'LATITUDE': 'hidden field', 'LONGITUDE': 'hidden field', 'MONUMENT_T': 'inline label - visible with data', 'FIRST_EDIT': 'inline label - visible with data', 'LATEST_EDI': 'inline label - visible with data', 'WEBSITE_LI': 'inline label - visible with data', 'WEB_NOTES': 'inline label - visible with data', });
lyr_NMS_Archaelogical_Survey_12.set('fieldLabels', {'fid': 'hidden field', 'ENTITY_ID': 'inline label - visible with data', 'CLASS_CODE': 'inline label - visible with data', 'SMRS': 'inline label - visible with data', 'COUNTY': 'inline label - visible with data', 'TOWNLAND': 'inline label - visible with data', 'ZONE_ID': 'hidden field', 'ITM_E': 'hidden field', 'ITM_N': 'hidden field', 'LATITUDE': 'hidden field', 'LONGITUDE': 'hidden field', 'MONUMENT_C': 'inline label - visible with data', 'FIRST_EDIT': 'inline label - visible with data', 'LATEST_EDI': 'inline label - visible with data', 'WEBSITE_LI': 'inline label - visible with data', 'WEB_NOTES': 'inline label - visible with data', 'REFERENCES': 'inline label - visible with data', });
lyr_NIAHPost1700sArchitechturalHeritage_13.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID_1': 'hidden field', 'REG_NO': 'inline label - visible with data', 'ORIGINAL_T': 'inline label - visible with data', 'IN_USE_AS_': 'inline label - visible with data', 'NAME': 'inline label - visible with data', 'NUMBER': 'inline label - visible with data', 'STREET1': 'inline label - visible with data', 'STREET2': 'inline label - visible with data', 'TOWN': 'inline label - visible with data', 'TOWNLAND': 'inline label - visible with data', 'COUNTY': 'inline label - visible with data', 'BAILE_FEAR': 'inline label - visible with data', 'CONTAE': 'inline label - visible with data', 'LOCAL_AUTH': 'inline label - visible with data', 'DESCRIPTIO': 'inline label - visible with data', 'APPRAISAL': 'inline label - visible with data', 'DATEFROM': 'inline label - visible with data', 'DATETO': 'inline label - visible with data', 'RATING': 'inline label - visible with data', 'ITM_E': 'hidden field', 'ITM_N': 'hidden field', 'LATITUDE': 'hidden field', 'LONGITUDE': 'hidden field', 'IMAGE_LINK': 'inline label - visible with data', 'WEBSITE_LI': 'inline label - visible with data', 'SURVEY': 'inline label - visible with data', 'CSI': 'inline label - visible with data', });
lyr_GSIGeoheritageAuditedSites_14.set('fieldLabels', {'fid': 'inline label - visible with data', 'SITECODE': 'inline label - visible with data', 'SITENAME': 'inline label - visible with data', 'IGH1': 'inline label - visible with data', 'IGH2': 'inline label - visible with data', 'IGH3': 'inline label - visible with data', 'IGH4': 'inline label - visible with data', 'COUNTY': 'inline label - visible with data', 'DESCRIPT': 'inline label - visible with data', 'GEOLOGICAL': 'inline label - visible with data', 'DESIGNAT': 'inline label - visible with data', 'REPORT': 'hidden field', 'X_IG': 'hidden field', 'Y_IG': 'hidden field', 'X_ITM': 'hidden field', 'Y_ITM': 'hidden field', });
lyr_PopulationCentres_15.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID_1': 'hidden field', 'County': 'inline label - visible with data', 'Contae': 'inline label - visible with data', 'Local_Gove': 'inline label - visible with data', 'Limistéar': 'inline label - visible with data', 'Classifica': 'inline label - visible with data', 'Cineál': 'inline label - visible with data', 'Gaeltacht': 'inline label - visible with data', 'Town_Class': 'inline label - visible with data', 'ID': 'inline label - visible with data', 'English_Na': 'inline label - visible with data', 'Irish_Name': 'inline label - visible with data', 'Foirm_Ghin': 'inline label - visible with data', 'Alternativ': 'inline label - visible with data', 'IG_E': 'inline label - visible with data', 'IG_N': 'inline label - visible with data', 'ITM_E': 'inline label - visible with data', 'ITM_N': 'inline label - visible with data', 'Irish_Vali': 'inline label - visible with data', 'Legislatio': 'inline label - visible with data', 'Validated_': 'inline label - visible with data', 'Date_': 'inline label - visible with data', 'Comment_': 'inline label - visible with data', });
lyr_HigherEducationInstitutes_16.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'loc_name': 'inline label - visible with data', });
lyr_TipperaryCountyBoundary_17.set('fieldLabels', {'fid': 'inline label - visible with data', 'OBJECTID': 'inline label - visible with data', 'GUID': 'inline label - visible with data', 'GMS_JOB_ID': 'inline label - visible with data', 'CAPTURE_SPECIFICATION': 'inline label - visible with data', 'CAPTURE_SPECIFICATION_VALUE': 'inline label - visible with data', 'URI': 'inline label - visible with data', 'POLY_GEOM_CAPTURE_DATE': 'inline label - visible with data', 'POLY_GEOM_CAPTURE_SRC': 'inline label - visible with data', 'POLY_GEOM_CAPTURE_SRC_VALUE': 'inline label - visible with data', 'POLY_GEOM_CHANGE_CODE': 'inline label - visible with data', 'POLY_GEOM_CHANGE_CODE_VALUE': 'inline label - visible with data', 'POLY_GEOM_CHANGE_DATE': 'inline label - visible with data', 'POLY_GEOM_CAPTURE_METH': 'inline label - visible with data', 'POLY_GEOM_CAPTURE_METH_VALUE': 'inline label - visible with data', 'POLY_GEOM_CAPTURE_RES': 'inline label - visible with data', 'POLY_GEOM_CAPTURE_RES_VALUE': 'inline label - visible with data', 'POLY_GEOM_HT_ERR_VALUE': 'inline label - visible with data', 'POLY_GEOM_VALID_AUTH': 'inline label - visible with data', 'POLY_GEOM_VALID_AUTH_VALUE': 'inline label - visible with data', 'POLY_GEOM_VALID_DATE': 'inline label - visible with data', 'BDY_TYPE_ID': 'inline label - visible with data', 'BDY_TYPE_VALUE': 'inline label - visible with data', 'BDY_TYPE_CAPTURE_DATE': 'inline label - visible with data', 'BDY_TYPE_CAPTURE_SRC': 'inline label - visible with data', 'BDY_TYPE_CAPTURE_SRC_VALUE': 'inline label - visible with data', 'BDY_TYPE_CHANGE_CODE': 'inline label - visible with data', 'BDY_TYPE_CHANGE_CODE_VALUE': 'inline label - visible with data', 'BDY_TYPE_CHANGE_DATE': 'inline label - visible with data', 'BDY_TYPE_VALID_AUTH': 'inline label - visible with data', 'BDY_TYPE_VALID_AUTH_VALUE': 'inline label - visible with data', 'BDY_TYPE_VALID_DATE': 'inline label - visible with data', 'BDY_ID': 'inline label - visible with data', 'BDY_ID_CAPTURE_DATE': 'inline label - visible with data', 'BDY_ID_CAPTURE_SRC': 'inline label - visible with data', 'BDY_ID_CAPTURE_SRC_VALUE': 'inline label - visible with data', 'BDY_ID_CHANGE_CODE': 'inline label - visible with data', 'BDY_ID_CHANGE_CODE_VALUE': 'inline label - visible with data', 'BDY_ID_CHANGE_DATE': 'inline label - visible with data', 'BDY_ID_VALID_AUTH': 'inline label - visible with data', 'BDY_ID_VALID_AUTH_VALUE': 'inline label - visible with data', 'BDY_ID_VALID_DATE': 'inline label - visible with data', 'ENG_NAME_VALUE': 'inline label - visible with data', 'ENG_NAME_CAPTURE_DATE': 'inline label - visible with data', 'ENG_NAME_CAPTURE_SRC': 'inline label - visible with data', 'ENG_NAME_CAPTURE_SRC_VALUE': 'inline label - visible with data', 'ENG_NAME_CHANGE_CODE': 'inline label - visible with data', 'ENG_NAME_CHANGE_CODE_VALUE': 'inline label - visible with data', 'ENG_NAME_CHANGE_DATE': 'inline label - visible with data', 'ENG_NAME_VALID_AUTH': 'inline label - visible with data', 'ENG_NAME_VALID_AUTH_VALUE': 'inline label - visible with data', 'ENG_NAME_VALID_DATE': 'inline label - visible with data', 'GLE_NAME_VALUE': 'inline label - visible with data', 'GLE_NAME_CAPTURE_DATE': 'inline label - visible with data', 'GLE_NAME_CAPTURE_SRC': 'inline label - visible with data', 'GLE_NAME_CAPTURE_SRC_VALUE': 'inline label - visible with data', 'GLE_NAME_CHANGE_CODE': 'inline label - visible with data', 'GLE_NAME_CHANGE_CODE_VALUE': 'inline label - visible with data', 'GLE_NAME_CHANGE_DATE': 'inline label - visible with data', 'GLE_NAME_VALID_AUTH': 'inline label - visible with data', 'GLE_NAME_VALID_AUTH_VALUE': 'inline label - visible with data', 'GLE_NAME_VALID_DATE': 'inline label - visible with data', 'GAELTACHT_AREA': 'inline label - visible with data', 'SE_ANNO_CAD_DATA': 'inline label - visible with data', });
lyr_TownandCityBoundaries_18.set('fieldLabels', {'fid': 'hidden field', 'NAME': 'inline label - visible with data', 'SETTCODE': 'hidden field', });
lyr_WindFarmsJune2022_19.set('fieldLabels', {'fid': 'hidden field', 'Windfarm_N': 'inline label - visible with data', 'DSO_TSO': 'inline label - visible with data', 'Connection': 'inline label - visible with data', 'County': 'inline label - visible with data', 'Present_St': 'inline label - visible with data', 'Installed_': 'inline label - visible with data', 'MEC__MW_': 'inline label - visible with data', 'Gate': 'inline label - visible with data', 'F110kV_Nod': 'inline label - visible with data', 'Target_Con': 'inline label - visible with data', 'Date_of_Co': 'inline label - visible with data', 'Year_of_Co': 'inline label - visible with data', 'Nat_Grid_E': 'hidden field', 'Nat_Grid_N': 'hidden field', 'Type': 'inline label - visible with data', });
lyr_WindFarmsJune2022_19.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});