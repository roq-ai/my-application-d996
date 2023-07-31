interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: [],
  tenantRoles: ['Administrator'],
  tenantName: 'Organization',
  applicationName: 'My Application',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
};
