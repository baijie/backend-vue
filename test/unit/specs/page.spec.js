import Vue from 'vue';
import ElementUI from 'element-ui';
import UserConfig from '@/page/base/user.config';

Vue.use(ElementUI);
describe('MyComponent', () => {
  // 检查原始组件选项
  it('has a created hook', () => {
    expect(typeof UserConfig.created).to.equal('function');
  });

  it('function is function', () => {
    expect('function').to.equal('function');
  });

  // 评估原始组件选项中的函数的结果
  it('set the correct default data', () => {
    expect(typeof UserConfig.data).to.equal('function');
    const defaultData = UserConfig.data();
    expect(defaultData.message).to.equal('hello');
  });

  // 检查mount中的组件实例
  it('correctly sets the message when created', () => {
    const vm = new Vue(UserConfig).$mount();
    expect(vm.message).to.equal('bye!');
  });

  // 创建一个实例并检查渲染输出
  it('renders the correct message', () => {
    const Ctor = Vue.extend(UserConfig);
    const vm = new Ctor().$mount();
    expect(vm.$el.textContent).to.equal('bye!');
  });
});
