// 判断手机号
export const phone = (phone: string): boolean => {
    var myreg = /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57]|19[0-9]|16[0-9])[0-9]{8}$/;
    return !phone || !myreg.test(phone) || !(/^[1-9]\d*$/).test(phone) || phone.length !== 11 ? false : true;
}
//判断电子邮箱 
export const email = (phone: string): boolean => {
    var myreg = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/;
    return !phone || !myreg.test(phone) ? false : true;
}
// 判断用户名是不是中文2~16位
export const user = (username: string): boolean => {
    //判断用户名是不是中文
    var userna = /^[\u4E00-\u9FA5]{2,16}$/i;
    if (!username) {
        return false;
    } else if (userna.test(username)) {
        return true;
    } else {
        return false;
    }
}
// 判断是否为空
export const isNotBlank = (string: any): boolean => {
    if (string == null) {
        return false;
    } else if (string == undefined) {
        return false;
    } else if (string.length == 0) {
        return false;
    } else {
        return true;
    }
};

/** 判断对象是否为空 */
export const judgeObj = (obj: any): boolean => {
    if (JSON.stringify(obj) == "{}" || obj == null) return true;
    else return false;
};

/** 判断数组是否为空 */
export const judgeArray = (arr: any): boolean => {
    if (arr.length == 0 || arr == null || arr == undefined) return true;
    else return false;
};


//判断是否是字符串
export const isString = (str: string): boolean => {
    if (Object.prototype.toString.call(str) === "[object String]") {
        return true;
    } else {
        return false;
    }
};

/**
 * 手机号码校验
 */
export const phoneNumber = (value: string): boolean => {
    if (value && (!(/^[1][34578]\d{9}$/).test(value) || !(/^[1-9]\d*$/).test(value) || value.length !== 11)) {
        return false
    } else {
        return true
    }
};

/**
 * 电话号码校验
 */
export const telephoneNumber = (value: string): boolean => {
    if (value && (!(/^((0\d{2,3}-\d{7,8})|(1[3584]\d{9}))$/).test(value))) {
        return false
    } else {
        return true
    }
};


/** 正则验证身份证号码 */

export const checkID = (val: string): boolean => {
    if (checkCode(val)) {
        var date = val.substring(6, 14);
        if (checkDate(date)) {
            if (checkProv(val.substring(0, 2))) {
                return true;
            }
        }
    }
    return false;
};
var checkCode = function (val: any): boolean {
    var p = /^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
    var factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
    var parity = [1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2];

    var code = val.substring(17);
    if (p.test(val)) {
        var sum = 0;
        for (var i = 0; i < 17; i++) {
            sum += val[i] * factor[i];
        }
        if (parity[sum % 11] == code.toUpperCase()) {
            return true;
        }
    }
    return false;
}
var checkDate = function (val: any) {
    var pattern = /^(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)$/;
    if (pattern.test(val)) {
        var year = val.substring(0, 4);
        var month = val.substring(4, 6);
        var date = val.substring(6, 8);
        var date2 = new Date(year + "-" + month + "-" + date);
        if (date2 && date2.getMonth() == (parseInt(month) - 1)) {
            return true;
        }
    }
    return false;
}
var checkProv = function (val: any): boolean {
    var pattern = /^[1-9][0-9]/;
    var provs: any = { 11: "北京", 12: "天津", 13: "河北", 14: "山西", 15: "内蒙古", 21: "辽宁", 22: "吉林", 23: "黑龙江 ", 31: "上海", 32: "江苏", 33: "浙江", 34: "安徽", 35: "福建", 36: "江西", 37: "山东", 41: "河南", 42: "湖北 ", 43: "湖南", 44: "广东", 45: "广西", 46: "海南", 50: "重庆", 51: "四川", 52: "贵州", 53: "云南", 54: "西藏 ", 61: "陕西", 62: "甘肃", 63: "青海", 64: "宁夏", 65: "新疆", 71: "台湾", 81: "香港", 82: "澳门" };
    if (pattern.test(val)) {
        if (provs[val]) {
            return true;
        }
    }
    return false;
}
// 转换日期格式
export const formatDate = (date: string, fmt: string): string => {
    var dat = new Date(date);
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (dat.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    let o: any = {
        'M+': dat.getMonth() + 1,
        'd+': dat.getDate(),
        'h+': dat.getHours(),
        'm+': dat.getMinutes(),
        's+': dat.getSeconds()
    };
    for (let k in o) {
        if (new RegExp(`(${k})`).test(fmt)) {
            let str: string = o[k] + '';
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
        }
    }
    return fmt;
};

const padLeftZero = (str: string): string => {
    return ('00' + str).substr(str.length);
};

// 保存两位小数
export const toDecimal = (x: string | number): string | boolean => {
    let f;
    var s:any
    if (typeof x == 'string') {
        f = parseFloat(x)
        if (isNaN(f)) {
            return false
        }else{
        s = f.toString()
        }
    }
    if (typeof x == 'number') {
        f = Math.round(x * 100) / 100
        s = f.toString()
    }
    var rs = s.indexOf('.')
    if (rs < 0) {
        rs = s.length
        s += '.'
    }
    while (s.length <= rs + 2) {
        s += '0'
    }
    return s
};
