import React from 'react'

var ContentEditable = React.createClass({
    render: function(){
        return <div id="contenteditable"
            contentEditable="true"
            onKeyDown={this.emitChange}
            onBlur={this.emitChange}
            dangerouslySetInnerHTML={{__html: this.props.html}}></div>;
    },

    shouldComponentUpdate: function(nextProps){
        return nextProps.html !== this.getDOMNode().innerHTML;
    },

    componentDidUpdate: function() {
        if ( this.props.html !== this.getDOMNode().innerHTML ) {
           this.getDOMNode().innerHTML = this.props.html;
        }
    },

    emitChange: function(e, a, c){
        if(e.which == 13){
            e.stopPropagation()
            e.preventDefault()

            var html = this.getDOMNode().innerHTML;
            if (this.props.onChange && html !== this.lastHtml) {
                this.props.onChange({
                    target: {
                        value: html
                    }
                });
            }
            this.lastHtml = html;

        }
    }
});

export default ContentEditable;
