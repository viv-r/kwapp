import Header from '../components/Header';
import Link from 'next/link';
import { Text } from '@blueprintjs/core';

export default (props) => (
    <div>
        <Header {...props.url} />
        <Text>Nothing here yet.</Text>
    </div>
);