import { Component, Prop, Event, EventEmitter } from '@stencil/core';

const MODULNAME: string = 'Sgb9Radio: '; 

@Component({
  tag: 'sgb9-radio',
  styleUrl: 'sgb9-radio.css',
//  host: {
//    theme: 'sgb-form-field sgb-form-field-can-float sgb-form-field-hide-placeholder sgb-form-field-type-sgb-input sgb-input-container sgb-primary',
//  }

})
export class Sgb9Radio {

  // Indicate that thewe should be public properties on the component
  @Prop() group: string;
  @Prop() label: string;
  @Prop() value: number; 
  @Prop() idValue: string;
  @Prop() checked: boolean = false;
  @Prop() dummy: number;
  
  @Event() checkRadioChange: EventEmitter;
  checkChangeHandler(value: number) {
      console.log(MODULNAME + "checkChange emitted! " + value)
      this.checkRadioChange.emit({"value": value, "group": this.group});
  }    

  focusGained(evt) {
    console.log(MODULNAME + "focusGained", evt);
    console.log(evt.path);
//    evt.path[4].classList.add("sgb-form-field-should-float");
//    evt.path[4].classList.add("sgb-focused");
  }
  focusLost(evt) {
    console.log(MODULNAME + "focusLost", evt);
    console.log(evt.path);
//    evt.path[4].classList.remove("sgb-form-field-should-float");
//    evt.path[4].classList.remove("sgb-focused");
  }
  labelClicked(evt) {
    console.log(MODULNAME + "labelClicked", evt);
    console.log(this.group);
    var b = document.getElementsByName(this.group);
    console.log(b);
  }
  radioClicked(evt) {
    console.log(MODULNAME + "radioClicked", evt);
    console.log(this.group);
    this.checkChangeHandler(this.value)
  }
  radioChanged() {
    console.log(MODULNAME + "radioChanged ", this.value);
    console.log(this.group);
    this.checkChangeHandler(this.value)
  }

  render() {
    console.log(MODULNAME + this.checked);
    return(
      <div class="elan-radio-padding">
          <label class="elan-radio-label-padding" htmlFor={this.idValue} aria-owns={this.idValue} >
        {this.checked
          ? <input class="sgb-input-element" onChange= { ()=> {this.radioChanged();}} checked type="radio" name={this.group} value={this.value} id={this.idValue} aria-invalid="false" aria-required="false"/>
          : <input class="sgb-input-element" onChange= { ()=> {this.radioChanged();}} type="radio" name={this.group} value={this.value} id={this.idValue} aria-invalid="false" aria-required="false"/>
        }
          <span class="elan-radio-label-padding">
           {this.label}
          </span>
        </label>
    </div>
    );    
  }

  componentWillLoad() {
    console.log(MODULNAME + 'The component will load');
    console.log("group: " + this.group);
    console.log("label: " + this.label);
    console.log("value: " + this.value);
    console.log("idValue: " + this.idValue);
    console.log("checked: " + this.checked);
  }
  componentDidLoad() { 
    console.log(MODULNAME + 'The component did load');
    console.log("group: " + this.group);
    console.log("label: " + this.label);
    console.log("value: " + this.value);
    console.log("idValue: " + this.idValue);
    console.log("checked: " + this.checked);
  }
}  
