import {Excel} from './core/component/excel/Excel'
import {Header} from './core/component/header/Header'
import {Toolbar} from './core/component/toolbar/Toolbar'
import {Formula} from './core/component/formula/Formula'
import {Table} from './core/component/table/Table'
import './scss/index.scss'



const excel = new Excel('#app', {
    components : [Header, Toolbar, Formula, Table]
}
    
)


excel.render()