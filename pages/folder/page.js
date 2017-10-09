import Header from '../../components/Header';
import Link from 'next/link';
import { Text, NonIdealState } from '@blueprintjs/core';

export default (props) => (
    <div className="main">
        <style jsx> {` 
            .main { 
                height: 90vh; 
            }
        `} </style>
        <Header {...props.url} />
        <NonIdealState visual="warning-sign" title="Empty page" description="There's nothing here!" />
    </div>
);