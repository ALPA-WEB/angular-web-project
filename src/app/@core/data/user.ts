export class User {
  uid: string;
  email: string;
  displayName: string;
  ALPA: boolean;
  HYCUBE: boolean;
  JARAM: boolean;
  ZERONE: boolean;
  FIFO: boolean;
  constructor() {
    this.uid = '';
    this.email = '';
    this.displayName = '';
    this.ALPA = false;
    this.HYCUBE = false;
    this.JARAM = false;
    this.ZERONE = false;
    this.FIFO = false;
  }
}
