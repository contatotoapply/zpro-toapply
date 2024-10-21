/**
 * THIS FILE IS GENERATED AUTOMATICALLY.
 * DO NOT EDIT.
 *
 * You are probably looking on adding startup/initialization code.
 * Use "quasar new boot <name>" and add it there.
 * One boot file per concern. Then reference the file(s) in quasar.conf.js > boot:
 * boot: ['file', ...] // do not add ".js" extension to it.
 *
 * Boot files are your "main.js"
 **/

import lang from 'quasar/lang/pt-br'

import iconSet from 'quasar/icon-set/material-icons'


import Vue from 'vue'

import {Quasar,Ripple,ClosePopup,Notify,Dialog,LocalStorage} from 'quasar'


Vue.use(Quasar, { config: {"dark":false},lang: lang,iconSet: iconSet,directives: {Ripple,ClosePopup},plugins: {Notify,Dialog,LocalStorage} })
