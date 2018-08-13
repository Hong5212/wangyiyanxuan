/*与后台交互模块*/
import ajax from './ajax'

//获取data数组
export const reqData = () => ajax('/data')

//获取banner数组
export const reqBanner = () => ajax('/banner')

//获取home数据
export const reqHome = () => ajax('/home')

//获取 识物页 数据
export const reqDetail = () => ajax('/detail')

//获取 分类页 数据
export const reqNav = () => ajax('/nav')
