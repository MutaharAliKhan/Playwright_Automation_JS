// import LoginPage from '../pages/login.page.js';


// class PageManager {
//   constructor(page) {
//     this.page = page;
//     this.loginPage = new LoginPage(page);
//     this.transactionSecurityPage = new TransactionSecurityPage(page);
//   }
// }


// class PageManager {
//   constructor(page) {
//     this.page = page;
//   }

//   get loginPage() {
//     return new LoginPage(this.page);
//   }

//   get transactionSecurityPage() {
//     return new TransactionSecurityPage(this.page);
//   }
// }

// export default PageManager;





import { LoginPage } from './login.page';

export const pageManager = (page) => ({
  LoginPage: new LoginPage(page)
});
