
/**
 * Dark theme for Highcharts JS
 * @author Torstein Honsi
 */

// highcharts and table
$(function () {

    $(document).ready(function () {

        // Build the chart
        $('#chart').highcharts({
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            title: {
                text: 'Alerts'
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false
                    },
                    showInLegend: false
                }
            },
            series: [{
                name: 'Protocols',
                colorByPoint: true,
                data: [{
                    name: 'TCP',
                    y: 56.33
                }, {
                    name: 'UDP',
                    y: 24.03,
                    sliced: true,
                    selected: true
                }, {
                    name: 'ICMP',
                    y: 10.38
                }, {
                    name: 'IP',
                    y: 4.77
            }]
          }]
        });

        //time hover
        $(".glyphicon.glyphicon-time").attr('title', '28-10-2016-16:19');
    });
});
