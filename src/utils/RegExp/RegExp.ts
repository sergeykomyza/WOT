//* ========================== Регулярные выражения ============================== //*

export const regExIsStrDateNum: RegExp = /^\d{1,4}([-._,\\/\\|])?\d{1,2}\1\d{1,4}([T\s]\d\d[:]?\d\d[:]?\d\d)?(\.\d+)?(([+-]\d\d[:]?\d\d)|Z)?$/i
export const ISO_8601: RegExp = /^\d{4}(-\d\d(-\d\d(T\d\d:\d\d(:\d\d)?(\.\d+)?(([+-]\d\d:\d\d)|Z)?)?)?)?$/i
export const ISO_8601_FULL: RegExp = /^\d{4}-\d\d(-\d\d(T\d\d:\d\d(:\d\d)?(\.\d+)?(([+-]\d\d:\d\d)|Z)?)?)?$/i
export const spaceInNum: RegExp = /\B(?=(?:\d{3})*$)/g
export const regExIsStrNum: RegExp = /^-?(\d*\.)?\d+$/