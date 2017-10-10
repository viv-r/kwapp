import Header from '../components/Header';
import Card from '../components/Card';
import Svg from '../components/Svg';

import Link from 'next/link';
import { select } from 'd3-selection';
import { scaleLinear } from 'd3-scale';
import { max } from 'd3-array';
import 'd3-transition';
import { Slider, Text } from '@blueprintjs/core';
import { Popover2 } from '@blueprintjs/labs';

const BarChart = Svg((node, props) => {
    const size = [props.width, props.height];

    const dataMax = max(props.data)
    const yScale = scaleLinear()
        .domain([0, dataMax])
        .range([0, size[1]])

    const fill = (d, i) => i % 2 == 0 ? '#444' : '#333';

    select(node)
        .selectAll('rect')
        .remove()

    select(node)
        .selectAll('rect')
        .data(props.data)
        .enter()
        .append('rect')
        .attr('x', (d, i) => i * (props.barWidth + props.barSpacing))
        .attr('y', d => size[1] - yScale(d))
        .attr('height', d => yScale(d))
        .attr('width', props.barWidth)
        .style('fill', fill)
        .on('mouseover', (data, index, nodes) => {
            select(nodes[index])
                .style('fill', '#aaaaaa')
        })
        .on('mouseout', (data, index, nodes) => {
            select(nodes[index])
                .transition()
                .duration(200)
                .style('fill', fill)
        })
});

class RandomBarChartComponent extends React.Component {
    constructor() {
        super();
        const bars = Math.random() * 100 + 250;
        const data = [];
        for (let i = 0; i < bars; i++) data.push(Math.random());
        this.state = {
            barWidth: Math.random() * 4 + 2,
            barSpacing: Math.random() * 3 + 1,
            height: 250,
            bars,
            data,
        }
    }

    render() {
        const width = (this.state.bars + 2) * (this.state.barSpacing + this.state.barWidth);

        return (
            <Card>
                <div className="title">
                    <style jsx>{` 
                        div.title { 
                            display: flex;
                            justify-content: flex-end;
                        }
                    `}</style>
                    <Popover2 portalClassName="barGraphOptions">
                        <button className="pt-button pt-minimal pt-icon-cog"></button>
                        <div className="container">
                            <div>
                                <Text>Bar width: </Text>
                                <Slider
                                    min={0}
                                    max={20}
                                    stepSize={0.2}
                                    labelStepSize={5}
                                    onChange={barWidth => this.setState({ barWidth })}
                                    value={this.state.barWidth}
                                />
                            </div>
                            <div>
                                <Text>Bar spacing   : </Text>
                                <Slider
                                    min={0}
                                    max={20}
                                    stepSize={0.2}
                                    labelStepSize={5}
                                    onChange={barSpacing => this.setState({ barSpacing })}
                                    value={this.state.barSpacing}
                                />
                            </div>
                        </div>
                    </Popover2>
                </div>
                <div>
                    <style jsx>{`div { overflow: scroll; }`}</style>
                    <BarChart {...this.state} width={width} />
                </div>
            </Card>
        );
    }
}

export default props => (
    <div>
        <Header {...props.url} />

        <RandomBarChartComponent />
        <RandomBarChartComponent />
        <RandomBarChartComponent />
        <RandomBarChartComponent />
        <RandomBarChartComponent />
        <RandomBarChartComponent />
        <RandomBarChartComponent />
        <RandomBarChartComponent />
    </div>
);