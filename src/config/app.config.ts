interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Restaurant Owner'],
  customerRoles: ['Guest'],
  tenantRoles: ['Restaurant Owner', 'Restaurant Manager', 'Wait Staff', 'Chef', 'Customer'],
  tenantName: 'Restaurant',
  applicationName: 'Restaurant booking engine',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'View restaurant information',
    'View menus',
    'View table availability',
    'View reservation status',
  ],
  ownerAbilities: ['Manage restaurant information', 'Manage menus', 'Manage bookings', 'Manage tables'],
  getQuoteUrl: 'https://roq-wizzard-git-qa03-roqtech.vercel.app/proposal/f829da41-8afa-4c99-b17b-d8720d531bcc',
};
