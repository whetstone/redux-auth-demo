import React from 'react';

export default class App {
    render() {
        return (
            <section>
                <header></header>

                <section>
                    {this.props.children}
                </section>
            </section>
        );
    }
}
