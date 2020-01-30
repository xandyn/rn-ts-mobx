import { observable, action } from 'mobx';

class AppStore {
  @observable value = '';

  @action
  setValue(value: string) {
    this.value = value;
  }
}

export const appStore = new AppStore();
