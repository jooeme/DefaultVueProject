/**
 * article模块接口列表
 */

import base from "./base"; // 导入接口域名列表
import axios from "./http"; // 导入http中创建的axios实例
import qs from "qs"; // 根据需求是否导入qs模块

const interfaces = {
  // // 新闻列表
  // articleList() {
  //   return axios.get(`${base.sq}/topics`);
  // },
  // // 新闻详情,演示
  // articleDetail(id, params) {
  //   return axios.get(`${base.sq}/topic/${id}`, {
  //     params: params
  //   });
  // },
  // // post提交
  // login(params) {
  //   return axios.post(`${base.sq}/accesstoken`, qs.stringify(params));
  // }
  // // 其他接口…………

  // // 登录
  // login(params = {}) {
  //   return axios.get(base.sq, {
  //     params: {
  //       act: "login",
  //       ...params
  //     }
  //   });
  // },

  // 登录
  login(params = {}) {
    return axios.post(
      base.sq,
      qs.stringify({
        act: "login",
        ...params
      })
    );
  },

  // 获取中国省市县信息
  chinaarea(params = {}) {
    return axios.get(base.sq, {
      params: {
        act: "chinaarea",
        ...params
      }
    });
  }
};

export default interfaces;
