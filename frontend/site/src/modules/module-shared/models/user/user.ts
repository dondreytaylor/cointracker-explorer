enum Roles {
    Base                =        "user:base",
    Contributor         =        "user:base:contributor",
    Admin               =        "user:admin",
    AdminPhunds         =        "user:admin:phunds",
    AdminContributor    =        "user:admin:contributor",
    PhundsOrg           =        "user:phunds:org",
    PhundsOrgMember     =        "user:phunds:org:member",
    AccHolder           =        "user:banking:accholder",
    AccHolderBusiness   =        "user:banking:accholder:business",
}

export class User {

  props:any = {}
  propsUpdated:any = {}
  static Roles = Roles

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

  hasRole(role:string):boolean {
    var roles:any[] = this.props['roles'] instanceof Array ? this.props['roles'] : []
    return roles.indexOf(role) > -1
  }

  isAdmin(adminRole:string = Roles.Admin) {
    return this.hasRole(Roles.Admin) || this.hasRole(adminRole)
  }

  isAnyAdmin() {
    var roles:string = (this.props['roles'] instanceof Array ? this.props['roles'] : []).join(',')
    return roles.indexOf('user:admin') > -1
  }

}
