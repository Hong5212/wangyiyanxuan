/*与后台交互模块*/
import ajax from 'ajax'

//获取data数组
export const reqData = () => ajax('/data')
