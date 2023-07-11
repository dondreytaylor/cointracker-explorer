export class User {

  props:any = {}
  propsUpdated:any = {}

  constructor(props?:any) {
      this.props = typeof props === "object" ? props : {};
  }

  set(key:string, value:any) {
      this.props[key] = value
      this.propsUpdated[key] = value
  }

  get(key:string, fallbackValue:any = ''): any {
      let v = this.props[key]
      return v == undefined || (typeof v == 'string' && v.length == 0) ? fallbackValue : v
  }

}
