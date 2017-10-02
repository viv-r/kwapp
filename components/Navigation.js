import React, { Component } from 'react';
import Link from 'next/link';

export default class Navigation extends React.Component {
    getPaths() {
        return this.props.pathname.split('/').reduce((accum, name) => ([
            ...accum,
            {
                name,
                path: name ? accum[accum.length - 1].path + '/' + name : ''
            }
        ]), []).splice(1);
    }
    render() {
        return (
            <nav className="pt-navbar">
                <div className="pt-navbar-group pt-align-left">
                    <ul className="pt-breadcrumbs">
                        <li><a className="pt-breadcrumbs-collapsed" href="/"></a></li>
                        {
                            this.getPaths().map(
                                c => <li><a className="pt-breadcrumb" href={c.path}>{c.name}</a></li>
                            )
                        }
                    </ul>
                </div>
                <div className="pt-navbar-group pt-align-right">
                    <Link href="/">
                        <button className="pt-button pt-minimal pt-icon-home">Home</button>
                    </Link>
                    <Link href="/about">
                        <button className="pt-button pt-minimal pt-icon-document">About</button>
                    </Link>
                    <Link href="/folder/page">
                        <button className="pt-button pt-minimal pt-icon-document">Page</button>
                    </Link>
                    <span className="pt-navbar-divider"></span>
                    <button className="pt-button pt-minimal pt-icon-user"></button>
                </div>
            </nav>
        );
    }
}