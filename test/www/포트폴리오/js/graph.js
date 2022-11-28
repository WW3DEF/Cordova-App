window.onload = function() {

var chartDom = document.getElementById('container');
var myChart = echarts.init(chartDom);
var option;

option = {
  title: {
    text: 'Skills',
    left: 'center'
  },
  tooltip: {
    trigger: 'item'
  },
  legend: {
    orient: 'vertical',
    left: 'left'
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: '50%',
      data: [
        { value: 40, name: 'HTML5' },
        { value: 45, name: 'CSS3' },
        { value: 30, name: 'Javascript' },
        { value: 15, name: 'React' }
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
};

option && myChart.setOption(option);

}