// @ts-nocheck
import React from 'react';
import { ApplyPluginsType } from '/Users/yiqianyao/workspace/webGL-Three.js-CSS3/renderer/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/~demos/:uuid",
    "layout": false,
    "wrappers": [require('/Users/yiqianyao/workspace/webGL-Three.js-CSS3/renderer/node_modules/@umijs/preset-dumi/lib/theme/layout').default],
    "component": (props) => {
        const { default: getDemoRenderArgs } = require('/Users/yiqianyao/workspace/webGL-Three.js-CSS3/renderer/node_modules/@umijs/preset-dumi/lib/plugins/features/demo/getDemoRenderArgs');
        const { default: Previewer } = require('dumi-theme-default/es/builtins/Previewer.js');
        const { default: demos } = require('@@/dumi/demos');
        const { usePrefersColor } = require('dumi/theme');

        
      const renderArgs = getDemoRenderArgs(props, demos);

      // for listen prefers-color-schema media change in demo single route
      usePrefersColor();

      switch (renderArgs.length) {
        case 1:
          // render demo directly
          return renderArgs[0];

        case 2:
          // render demo with previewer
          return React.createElement(
            Previewer,
            renderArgs[0],
            renderArgs[1],
          );

        default:
          return `Demo ${props.match.params.uuid} not found :(`;
      }
    
        }
  },
  {
    "path": "/_demos/:uuid",
    "redirect": "/~demos/:uuid"
  },
  {
    "__dumiRoot": true,
    "layout": false,
    "path": "/",
    "wrappers": [require('/Users/yiqianyao/workspace/webGL-Three.js-CSS3/renderer/node_modules/@umijs/preset-dumi/lib/theme/layout').default, require('/Users/yiqianyao/workspace/webGL-Three.js-CSS3/renderer/node_modules/dumi-theme-default/es/layout.js').default],
    "routes": [
      {
        "path": "/",
        "component": require('/Users/yiqianyao/workspace/webGL-Three.js-CSS3/renderer/docs/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/index.md",
          "updatedTime": 1635869128000,
          "title": "API",
          "order": 4,
          "slugs": [
            {
              "depth": 2,
              "value": "使用",
              "heading": "使用"
            },
            {
              "depth": 2,
              "value": "简介",
              "heading": "简介"
            },
            {
              "depth": 2,
              "value": "构造函数",
              "heading": "构造函数"
            },
            {
              "depth": 3,
              "value": "数据",
              "heading": "数据"
            },
            {
              "depth": 3,
              "value": "属性",
              "heading": "属性"
            },
            {
              "depth": 4,
              "value": "fillLayer",
              "heading": "filllayer"
            },
            {
              "depth": 3,
              "value": "方法",
              "heading": "方法"
            },
            {
              "depth": 4,
              "value": "updateData(data, joinBy)",
              "heading": "updatedatadata-joinby"
            },
            {
              "depth": 3,
              "value": "getFillData",
              "heading": "getfilldata"
            },
            {
              "depth": 4,
              "value": "show",
              "heading": "show"
            },
            {
              "depth": 4,
              "value": "hide",
              "heading": "hide"
            },
            {
              "depth": 4,
              "value": "destroy",
              "heading": "destroy"
            },
            {
              "depth": 3,
              "value": "案例",
              "heading": "案例"
            },
            {
              "depth": 4,
              "value": "中国地图",
              "heading": "中国地图"
            }
          ]
        },
        "title": "API - renderer"
      },
      {
        "path": "/demo/base",
        "component": require('/Users/yiqianyao/workspace/webGL-Three.js-CSS3/renderer/docs/demo/base.zh.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/demo/base.zh.md",
          "updatedTime": 1635869128000,
          "title": "simple demo",
          "order": 1,
          "slugs": [
            {
              "depth": 1,
              "value": "标准地图",
              "heading": "标准地图"
            },
            {
              "depth": 2,
              "value": "simple demo",
              "heading": "simple-demo"
            }
          ],
          "group": {
            "path": "/demo",
            "title": "Demo"
          }
        },
        "title": "simple demo - renderer"
      },
      {
        "path": "/demo",
        "meta": {},
        "exact": true,
        "redirect": "/demo/base"
      }
    ],
    "title": "renderer",
    "component": (props) => props.children
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}