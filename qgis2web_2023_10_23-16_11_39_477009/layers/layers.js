ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:4210").setExtent([34.699603, -0.708671, 35.919797, 0.023861]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_KerichoHealthFacilities_1 = new ol.format.GeoJSON();
var features_KerichoHealthFacilities_1 = format_KerichoHealthFacilities_1.readFeatures(json_KerichoHealthFacilities_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4210'});
var jsonSource_KerichoHealthFacilities_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KerichoHealthFacilities_1.addFeatures(features_KerichoHealthFacilities_1);
var lyr_KerichoHealthFacilities_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KerichoHealthFacilities_1, 
                style: style_KerichoHealthFacilities_1,
                interactive: true,
                title: '<img src="styles/legend/KerichoHealthFacilities_1.png" /> KerichoHealthFacilities'
            });
var format_KerichoCounty_2 = new ol.format.GeoJSON();
var features_KerichoCounty_2 = format_KerichoCounty_2.readFeatures(json_KerichoCounty_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4210'});
var jsonSource_KerichoCounty_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KerichoCounty_2.addFeatures(features_KerichoCounty_2);
var lyr_KerichoCounty_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KerichoCounty_2, 
                style: style_KerichoCounty_2,
                interactive: true,
                title: '<img src="styles/legend/KerichoCounty_2.png" /> KerichoCounty'
            });

lyr_OpenStreetMap_0.setVisible(false);lyr_KerichoHealthFacilities_1.setVisible(true);lyr_KerichoCounty_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_KerichoHealthFacilities_1,lyr_KerichoCounty_2];
lyr_KerichoHealthFacilities_1.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'F_NAME': 'F_NAME', 'PROV': 'PROV', 'DIST': 'DIST', 'DIVISION': 'DIVISION', 'LOCATION': 'LOCATION', 'SUB_LOCATI': 'SUB_LOCATI', 'F_TYPE': 'F_TYPE', 'AGENCY': 'AGENCY', 'LONGITUDE': 'LONGITUDE', 'LATITUDE': 'LATITUDE', 'MLFCode': 'MLFCode', 'filter_1': 'filter_1', 'elevation': 'elevation', });
lyr_KerichoCounty_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Male': 'Male', 'Female': 'Female', 'TotalPop': 'TotalPop', 'Code': 'Code', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'District': 'District', 'NAME': 'NAME', });
lyr_KerichoHealthFacilities_1.set('fieldImages', {'fid': '', 'OBJECTID': '', 'F_NAME': '', 'PROV': '', 'DIST': '', 'DIVISION': '', 'LOCATION': '', 'SUB_LOCATI': '', 'F_TYPE': '', 'AGENCY': '', 'LONGITUDE': '', 'LATITUDE': '', 'MLFCode': '', 'filter_1': '', 'elevation': '', });
lyr_KerichoCounty_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'Male': 'TextEdit', 'Female': 'TextEdit', 'TotalPop': 'TextEdit', 'Code': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'District': 'TextEdit', 'NAME': 'TextEdit', });
lyr_KerichoHealthFacilities_1.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'F_NAME': 'inline label', 'PROV': 'no label', 'DIST': 'no label', 'DIVISION': 'no label', 'LOCATION': 'no label', 'SUB_LOCATI': 'no label', 'F_TYPE': 'no label', 'AGENCY': 'no label', 'LONGITUDE': 'no label', 'LATITUDE': 'no label', 'MLFCode': 'no label', 'filter_1': 'no label', 'elevation': 'no label', });
lyr_KerichoCounty_2.set('fieldLabels', {'OBJECTID': 'no label', 'Male': 'no label', 'Female': 'no label', 'TotalPop': 'no label', 'Code': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'District': 'no label', 'NAME': 'no label', });
lyr_KerichoCounty_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});