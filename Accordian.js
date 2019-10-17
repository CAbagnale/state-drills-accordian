import React from 'react';

export default class Accordian extends React.Component {
    static defaultProps = {
        sections: []
    }
    state = {
        activeSection: null
    }
    handleSetActiveSection = (sectionIndex) => {
        this.setState({ activeSection: sectionIndex })
    }
    renderButtons(section, idx, activeSection) {
        return (
            <li key={idx}>
                <button
                    type='button'
                    onClick={() => this.handleSetActiveSection(idx)}
                >
                    {section.title}
                </button>
                {(activeSection === idx) && <p>{section.content}</p>}
            </li>
        )
    }
    render() {
        console.log(this.props)
        const { activeSection } = this.state
        const { sections } = this.props
        return (
            <ul className='Accordian'>
                {sections.map((section, idx) => 
                    this.renderButtons(section, idx, activeSection)
                )}
            </ul>
        )
    }
}
