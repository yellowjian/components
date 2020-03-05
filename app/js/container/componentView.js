import React, { useState, createRef, Fragment } from 'react'
import { render } from 'react-dom'
import { connect } from 'react-redux'
import Button from '../components/button'
import ButtonGroup from '../components/buttonGroup'
import Icon from '../components/icon'
import Input from '../components/input'
import Table from '../components/table'
import Dropdown from '../components/dropdown/dropdown'
import CheckBox from '../components/checkbox'
import RadioBox from '../components/radiobox'
import RadioBoxGroup from '../components/radioboxGroup'
import ToolTip from '../components/tooltip'
import {column, data, options, themeOptions} from '../utils/tableData'
import Actions from '../action'

function ComponentView(props) {
  const { updateThemeAction } = props
  const [loading, setLoading] = useState(true)
  const [inputValue, setInputValue] = useState('')

  return (
    <div className='component-list'>
      <div>
        <Button label='Default'/>
        <Button label='Default' disabled/>
        <Button label='Default' iconShow={loading} icon='loading' iconPosition='left' onClick={() => setLoading(!loading)}/>
        <Button label='Default' icon='arrow_left' iconPosition='left'/>
        <Button label='Default' icon='arrow_right' iconPosition='right'/>
        <Button label='Yes' icon='check'/>
        <Button label='Sort' icon='arrow_down' iconPosition='right'/>
        <Button label='Sort' icon='arrow_up' iconPosition='right'/>
        <div className='swtich-theme'>
          <Dropdown
            options={themeOptions}
            value='dark'
            onChange={selected => {updateThemeAction(selected)}}
          >
          </Dropdown>
        </div>
        <ButtonGroup
          onClick={(e, option) => {console.log(e, option)}}
          options={[
            { label: 'Left', value: 'Left', icon: 'arrow_left', iconPosition: 'left'},
            { label: 'Middle', value: 'Middle', disabled: true},
            { label: 'Right', value: 'Right', icon: 'arrow_right', iconPosition: 'right'},
          ]}
          value='Right'
        >
        </ButtonGroup>
      </div>
      <div>
        <Icon type='loading' className='icon-loading '/>
        <Icon type='loading' className='icon-loading icon-style'/>
        <Icon type='loading' className='icon-loading '/>
        <Icon type='arrow_left'/>
        <Icon type='arrow_right'/>
        <Icon type='check'/>
        <Icon type='arrow_down'/>
        <Icon type='arrow_up'/>
      </div>
      <div>
        <RadioBox label='RadioBox1'/>
        <RadioBox label='RadioBox2' isSelected/>
        <RadioBoxGroup
          onClick={(e, option) => {console.log(e, option)}}
          options={[
            { label: 'RadioBoxGroup1', value: 'RadioBoxGroup1'},
            { label: 'RadioBoxGroup2', value: 'RadioBoxGroup2', disabled: true},
            { label: 'RadioBoxGroup3', value: 'RadioBoxGroup3'},
          ]}
          value='RadioBoxGroup3'
        >
        </RadioBoxGroup>
      </div>
      <div>
        <CheckBox label='CheckBox1'/>
        <CheckBox label='CheckBox2' isSelected/>
        <CheckBox label='CheckBox3' disabled/>
      </div>
      <div>
        <Input placeholder='Place Input Name' value={inputValue} 
          onChange={(e) => {setInputValue(e.target.value)}}/>
      </div>
      <div>
        <ToolTip ref={createRef()} label='ToolTipLeft' tooltipText='ToolTipLeft' position='top'/>
        <ToolTip ref={createRef()} label='ToolTipBottom' tooltipText='ToolTipBottom' position='bottom'/>
        <ToolTip 
          ref={createRef()} 
          tooltipText='ToolTipLeft' 
          position='left'
          renderChildComponent={() => <Button key='tooltip' label='ToolTip'/>}
        />
        <ToolTip ref={createRef()} label='ToolTipRight' tooltipText='ToolTipRight' position='right'/>
      </div>
      <div>
        <Dropdown
          options={options}
          width={200}
          value='Button'
          pureMenu
        >
        </Dropdown>
        <Dropdown
          options={options}
          width={200}
          value='CheckBox'
        >
        </Dropdown>
        <Dropdown
          options={options}
          width={200}
          value='CheckBox'
          multiple
        >
        </Dropdown>
        <Dropdown
          options={options}
          width={150}
          value={['Button', 'CheckBox', 'CheckBoxGroup', 'RadioBox', 'RadioBoxGroup', 'Dropdown']}
          multiple
        >
        </Dropdown>
      </div>
    </div>
  )
}
const mapStateToProps = (state, ownProps) => {
  return {
    data: state
  }
}

const mapDispatchToProps = {
  updateThemeAction: Actions.updateTheme
}
export default connect(mapStateToProps, mapDispatchToProps)(ComponentView)
