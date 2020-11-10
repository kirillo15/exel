import {ExcelComponet} from '@core/ExcelComponet'

export class Table extends ExcelComponet{
    static className = 'excel__table'

    toHTML() {
        return '<h1>Table</h1>'
    }
}