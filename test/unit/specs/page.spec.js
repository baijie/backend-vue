import Vue from 'vue';
import userConfig from '@/page/base/user.config';

describe('page', () => {
  // 检查原始组件选项
  it('has a created hook', () => {
    expect(typeof userConfig.created).toBe('function');
  });

  // 评估原始组件选项中的函数的结果
  it('set the correct default data', () => {
    expect(typeof userConfig.data).toBe('function');
    const defaultData = userConfig.data();
    expect(defaultData.message).toBe('Hello!');
  });

  // 检查mount中的组件实例
  it('correctly sets the message when created', () => {
    const vm = new Vue(userConfig).$mount();
    expect(vm.message).toBe('bye!');
  });

  // 创建一个实例并检查渲染输出
  it('renders the correct message', () => {
    const Ctor = Vue.extend(userConfig);
    const vm = new Ctor().$mount();
    expect(vm.$el.textContent).toBe('bye!');
  });
});
