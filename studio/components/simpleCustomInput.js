import React from 'react'
import PatchEvent, {set, unset} from 'part:@sanity/form-builder/patch-event'
import PropTypes from 'prop-types'
import {withDocument} from 'part:@sanity/form-builder'
import FormField from 'part:@sanity/components/formfields/default'

const createPatchFrom = value => PatchEvent.from(value === '' ? unset() : set(value))

class SimpleCustomInput extends React.Component {

    static propTypes = {
        value: PropTypes.string,
        onChange: PropTypes.func.isRequired,

        // for display
        type: PropTypes.shape({
            title: PropTypes.string,
            description: PropTypes.string
        }).isRequired,
    }

    handleChange = (e) => {
        const {onChange} = this.props
        // console.log('>>>>>>>>>> value: ', e.target.value, this.timeInput.current.value)
        onChange(createPatchFrom(String(e.target.value)))
    }

    timeInput = React.createRef()
    focus = () => {
        this.timeInput.current.focus()
    }

    render = () => {
        const {value, type} = this.props
        return (
            <FormField label={type.title} description={type.description}>
                <div>
                    Test Field: <input type='text' value={value} onChange={this.handleChange} ref={this.timeInput} />
                </div>
            </FormField>

        )
    }
  }

  export default SimpleCustomInput