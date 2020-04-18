declare module "cover-func" {
  /** 构建树 */
  export function toTreeData(params:IToTreeDataParams):any[]
  /** 扁平化树 */
  export function readTree(params:IReadTreeParams):any[]
  /** 查找树 */
  export function searchTreeDta(params:ISearchTreeDtaParams):any
  /** 解析url query字符串 */
  export function queryParse(url:string):object
  /** url query字符串 反序列化 */
  export function queryString(data:string|Array|object):string
}

declare interface IToTreeDataParams {
  /** 数据源 */
  data:any[];
  /** 父级pid的值 */
  pid:any;
  /** id的key值 */
  idKey?:string;
  /** pid的key值 */
  pidKey?:string;
}

declare interface IReadTreeParams {
  /** 树状数据源 */
  data:any[];
  /** 初始值 */
  val?:any[];
}

declare interface ISearchTreeDtaParams {
  /** 树状数据源 */
  data:any[]; 
  /** 要查找的键值 */
  key:string;
  /** 要查找的值 */
  value:any;
}
