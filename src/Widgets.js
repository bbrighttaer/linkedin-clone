import React from 'react'
import './Widgets.css'
import InfoIcon from '@material-ui/icons/Info'
import FibreManualRecordIcon from '@material-ui/icons/FiberManualRecord'

function Widgets() {

    const newsArticle = (heading, subtitle) => {
        return (
            <div className="widgets__article">
                <div className="widgets__articleLeft">
                    <FibreManualRecordIcon />
                </div>
                <div className="widgets__articleRight">
                    <h4>{heading}</h4>
                    <p>{subtitle}</p>
                </div>
            </div>
        );
    }

    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>

            {newsArticle("BBRIGHTTAER IS BACK!", "Building the ideas, one at a time")}
            {newsArticle("Oh Yeah Full-Stack baby!", "Building the ideas, one at a time")}
            {newsArticle("This is Dope!", "Building the ideas, one at a time")}
            {newsArticle("WhatsApp live coding now!", "Building the ideas, one at a time")}
            {newsArticle("Juicy stuff in Java!", "Building the ideas, one at a time")}
            {newsArticle("JS is gonna be compulsory!", "Building the ideas, one at a time")}
            {newsArticle("Jobs on LinkedIn break records!", "Building the ideas, one at a time")}
            {newsArticle("Amazon is in the news!", "Building the ideas, one at a time")}
            {newsArticle("Philip: He dies and I keep getting breaking news!", "Building the ideas, one at a time")}
        </div>
    )
}

export default Widgets
