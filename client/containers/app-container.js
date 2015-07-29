import React from 'react';

export default class AppContainer {
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
