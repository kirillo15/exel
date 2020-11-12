import {ExcelComponet} from '@core/ExcelComponet'
import { createTable } from './table.template'

export class Table extends ExcelComponet{
    static className = 'excel__table'

    toHTML() {
        return createTable()
    }
}