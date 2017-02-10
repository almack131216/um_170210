import { inject, customElement, bindable } from 'aurelia-framework';
import 'bootstrap-datepicker';
import $ from 'bootstrap'
//import '../../../css/bootstrap-datepicker3.css';

var moment = require('moment');

@inject(Element)
@bindable('value')
export class FormDatepicker {
    element;
    value;

    @bindable format = 'yyyy-mm-dd';

    constructor(element) {
        this.element = element;
    }

    attached() {

        $(this.element).find('.datepicker')
            .datepicker({
                format: this.format,
                startDate: '2000-01-01',
                autoclose: true,
                todayBtn: 'linked',
                todayHighlight: true
            })
            .on('changeDate', (e) => {
                this.value = moment(e.date).format("YYYY-MM-DD");
            });
    }
}