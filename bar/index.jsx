const React = require('react')
const ReactDOM = require('react-dom')
const {Bar} = require("react-chartjs")
const randomColorFactor = require('../lib/randomColorFactor')

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
]

const options = {
  // Elements options apply to all of the options unless overridden in a dataset
  // In this case, we are setting the border of each bar to be 2px wide and green
  elements: {
    rectangle: {
      borderWidth: 2,
      borderColor: 'rgb(0, 255, 0)',
      borderSkipped: 'bottom'
    }
  },
  responsive: true,
  legend: {
    position: 'top'
  },
  title: {
    display: true,
    text: 'Chart.js Bar Chart'
  }
}

const App = React.createClass({
  getInitialState() {
    return {
      labels: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July"
      ],
      datasets: [
        {
          label: 'Dataset 1',
          backgroundColor: "rgba(220,220,220,0.5)",
          data: [
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor()
          ]
        }, {
          hidden: true,
          label: 'Dataset 2',
          backgroundColor: "rgba(151,187,205,0.5)",
          data: [
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor()
          ]
        }, {
          label: 'Dataset 3',
          backgroundColor: "rgba(151,187,205,0.5)",
          data: [
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor()
          ]
        }
      ]
    }
  },
  handleClick() {
    const zero = Math.random() < 0.2
      ? true
      : false

    const newData = this.state.datasets.map((dataset) => {
      return {
        backgroundColor: randomColor(),
        data: dataset.data.map(function() {
          return zero
            ? 0.0
            : randomScalingFactor()
        })
      }
    })

    this.setState({datasets: newData})
  },
  render() {
    return <div>
      <Bar data={this.state} options={options} ref={(ref) => this.Bar = ref}/>
      <button onClick={this.handleClick}>Randomize Data</button>
    </div>
  }
})

ReactDOM.render(
  <App/>, document.querySelector('#container'))

function randomScalingFactor() {
  return (Math.random() > 0.5
    ? 1.0
    : -1.0) * Math.round(Math.random() * 100)
}

function randomColor(opacity) {
  return 'rgba(' + randomColorFactor() + ',' + randomColorFactor() + ',' + randomColorFactor() + ',0.7)'
}
