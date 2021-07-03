const packageJson = require('../package.json');
const localConfigJson = require('../localConfig.json');

export const groupBy = (list, f) => {
  return list.reduce((r, v, i, a, k = f(v)) => ((r[k] || (r[k] = [])).push(v), r), {});
};


export function getEnvironment() {
  return process.env.NODE_ENV || '';
}

export function getConfig() {
  return getEnvironment() === 'production' ? packageJson : localConfigJson;
}

export function isEmpty(object) {
    return (!object || !Object.keys(object).length);
}

export const getServerURL = () => {
  const config = getConfig();

  if (isEmpty(config)) {
    console.error('Server configuration not found!');
    return '';
  }

  return config[`serverURL`];
};

export const getRequestedHeader = () => {
  const config = {
    headers: {Authorization: getAnyUserInfoFromLocalStorage(`AUTH_TOKEN`)},
  };

  return config;
};

export const getAnyUserInfoFromLocalStorage = key => {
//   const userInfo = localStorage.getItem('USER_INFO');
let userInfo
  if (!userInfo) return '';

  return userInfo ? JSON.parse(userInfo)[key] : '';
};

export const setUserInLocalStorage = token => {
  if (!token) {
    console.warn('No Token sent to setTokenInLocalStorage');
    return false;
  }

  localStorage.setItem(
    'USER_INFO',
    JSON.stringify({AUTH_TOKEN: token}),
  );

  return true;
};



// //define your utils methods here
// import * as React from 'react';
// import moment from 'moment';
// import Pusher from 'pusher-js';
// import store from '../../redux/store';
// import i18n from '../i18n/index';
// import {toast} from 'react-toastify';
// import {VALID_IMAGE_EXTENSION} from '../constants';
// import {TEST_TYPE} from '../constants';
// import {FormModel} from '../model/FormModel.js';
// import {updateRawData, CLEAR_MODEL} from '../../redux/actions/index.js';
// import {enableOrDisableLoading} from '../../redux/actions';
// import {PUSHER_KEY} from '../constants/index';
// import {PersianReshaper} from '../utils/persian-script-reshape';
// import {COUNTRY_CODES} from '../constants/countryCodes.js';

// //Check whether the environment is desktop environment.
// export const isDesktop = () => {
//     return window && window.process && window.process.type;
// };

// export function getCookie(cname) {
//     let name = cname + '=';
//     let decodedCookie = decodeURIComponent(document.cookie);
//     let ca = decodedCookie.split(';');
//     for (let i = 0; i < ca.length; i++) {
//         let c = ca[i];
//         while (c.charAt(0) === ' ') {
//             c = c.substring(1);
//         }
//         if (c.indexOf(name) === 0) {
//             return c.substring(name.length, c.length);
//         }
//     }

//     return '';
// }

// // Check wether the color is valid or not
// export const isValidColorInput = (color) => {
//     return /^#[0-9A-F]{6}$/i.test(color);
// };

// // Get react select option of Array.
// export const getArrayToSelectOptions = (list = []) => {
//     let option = [];

//     list.forEach((value) => {
//         option.push({label: value, value});
//     });

//     return option;
// };

// // Get react react select value from value.
// export const getReactSelectValue = (value) => ({
//     label: value,
//     value: value
// });

// // Get option for react-data-grid select options list.
// export const createOptionForTableSelect = (list, valueKey, labelKey) => {
//     const options = [];
//     list.map((instance, index) => {
//         options.push({
//             id: instance[valueKey || 'id'],
//             title: instance[labelKey || 'name'],
//             index: index + 1,
//             ...instance
//         });
//     });

//     return options;
// };

// // Get option for react-data-grid select options from Array.
// export const createArrayToTableOption = (list) => {
//     const options = [];
//     list.map((item) => {
//         options.push({
//             id: item,
//             title: item
//         });
//     });

//     return options;
// };

// // Get date like: `monday, 10th June`
// export const getWeekdayDateAndMonthFormat = (date) => {
//     const momentDate = moment(date);

//     return `${momentDate.format('dddd')}, ${momentDate.date()}th ${momentDate.format('MMMM')}`;
// };

// // Get value i.e {label: anyLabel, value: 'anyValue'} for react select.
// export const getValueForSelectList = (value, list) => {
//     const newList = list.filter((element) => element.value === value);
//     if (newList.length) {
//         return newList[0];
//     }

//     return value;
// };

// // Check whether the email is valid or not
// export const isValidEmail = (email) => {
//     if (!email) return false;

//     const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

//     return email.match(regex) ? true : false;
// };

// // Check whether the password is valid or not
// export const isPasswordValid = (password) => {
//     if (!password) return false;

//     const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&#])[A-Za-z\d$@$!%*?&#]{8,}/;

//     return password.match(regex) ? true : false;
// };

// // Create List for react select option
// export const createOptionForReactSelect = (list, labelKey, valueKey, newObject = {}) => {
//     const options = [];
//     if (!list) {
//         return options;
//     }

//     list.map((instance) => {
//         options.push({
//             value: getValueFromKey(instance, valueKey),
//             label: getValueFromKey(instance, labelKey),
//             ...instance,
//             ...newObject
//         });
//     });

//     return options;
// };

// //This function will extract data from nested keys
// export const getValueFromKey = (object, key) => {
//     if (isEmpty(object)) return '';
//     const splits = key.split('.');
//     if (splits.length === 1) return object[splits[0]];

//     return getValueFromKey(object[splits[0]], splits.slice(1).join('.'));
// };

// // Check wether the image is valid or not.

// /**
//  * @extensionList is list
//  */
// export const isValidImage = (event, sizeKB = 800, extensionList = VALID_IMAGE_EXTENSION) => {
//     if (event.target.files && event.target.files[0]) {
//         const {files} = event.target;
//         const extension = files[0].type.split('/')[1];

//         if (extensionList.length && !extensionList.includes(extension.toLowerCase())) {
//             showAlert('File is not valid.', 'error');

//             return;
//         }

//         if (files[0].size > sizeKB * 1024) {
//             return showAlert(`File should not be greater then ${sizeKB}KB.`, 'error');
//         }
//     }

//     return true;
// };

// export function getBase64DataFromFile(file, readAs = 'readAsDataURL') {
//     return new Promise((resolve, reject) => {
//         try {
//             const fileReader = new FileReader();
//             fileReader.onerror = reject;
//             if (fileReader[readAs]) fileReader[readAs](file);
//             fileReader.onload = (e) =>
//                 resolve({
//                     fileData: e.target.result,
//                     extension: file.type.split('/')[1]
//                 });
//         } catch (error) {
//             reject(error);
//         }
//     });
// }

// export const SplitTime = (numberOfHours) => {
//     let Days = Math.floor(numberOfHours / 24);
//     let Remainder = numberOfHours % 24;
//     let Hours = Math.floor(Remainder);
//     let Minutes = Math.floor(60 * (Remainder - Hours));

//     return {Days: Days, Hours: Hours, Minutes: Minutes};
// };

// //get hh:mm format from milli second.
// export const getHourFromMS = (milliSecond) => {
//     const hh = milliSecond / 3600;
//     const mm = (milliSecond % 3600) / 60;

//     return `${hh ? Math.floor(hh) : '00'}:${mm ? mm : '00'}:00`;
// };

// // Set data in local storage
// export const setDataInLocalStorage = (key, value) => {
//     localStorage.setItem(key, JSON.stringify(value));
// };

// // Get data from local storage
// export const getDataFromLocalStorage = (key) => {
//     return JSON.parse(localStorage.getItem(key));
// };

// // To get status of current from redux.
// export const isUnAuthenticatedPage = () => {
//     return store.getState().isUnAuthenticatedPage;
// };

// // To show a notification.
// export const showAlert = (message, type = 'default', autoClose = 2000) => {
//     let toastId = store.getState().rawData.toastId;
//     const toastPositionObj = {1: 'top-right', 2: 'top-center', 3: 'bottom-right'};
//     const {statusNotificationPosition = 1} = getSessionData();
//     const positionSide = toastPositionObj[statusNotificationPosition];
//     if (type === 'success') {
//         autoClose = 1200;
//     }
//     if (!toast.isActive(toastId)) {
//         toastId = toast(message, {autoClose: autoClose, type, position: positionSide});
//     } else {
//         toast.update(toastId, {render: message, type, autoClose: autoClose, position: positionSide});
//     }

//     updateRawData({toastId});
// };

// // check wether the user is root user
// export const isRootUser = () => {
//     const labuseraccessmaster = store.getState().Permission.labuseraccessmaster;

//     return labuseraccessmaster && labuseraccessmaster.isRootUser;
// };

// // Set any key of list with provided value
// export const setUntitledNameInList = (list, key = 'name', value = 'Untitled') => {
//     return list.filter((instance, index) => {
//         if (!instance[key]) instance[key] = `${value} ${index}`;

//         return instance;
//     });
// };

// export const inputHandler = (instance, formName, updateComponent) => {
//     new FormModel(formName).$update(instance);
//     if (updateComponent) updateComponent();
// };

// export const updateValidation = (validation, formName, updateComponent) => {
//     new FormModel(formName).$updateValidation(validation);
//     if (updateComponent) updateComponent();
// };

// export const otherLabForUser = () => {
//     const {labdata, userLabList} = store.getState().Permission;
//     if (labdata || userLabList.length) {
//         return userLabList.filter((center) => center.childLab.labId !== labdata.labForId.labId);
//     }

//     return [];
// };

// export const showLoadingOverlay = (value, msg) => {
//     store.dispatch(enableOrDisableLoading(value, msg));
// };

// export const testListWithAdditionalAttribute = (testList) => {
//     let listWithAdditionalKey = [];
//     testList.map((test, index) => {
//         let instance = {
//             ...test,
//             id: test.testID,
//             value: test.testID,
//             index: index + 1,
//             label: test.testName,
//             sample: test.sampleId ? test.sampleId.type : '',
//             setting: test.reportSettingsId ? test.reportSettingsId.name : '',
//             department: test.departmentId ? test.departmentId.name : '',
//             testType: TEST_TYPE[Number(test.isRadiology)]
//         };

//         listWithAdditionalKey.push(instance);
//     });

//     return listWithAdditionalKey;
// };

// //Ascending order
// export const sortListByKey = (list, key, type = 0) => {
//     if (type === 1) {
//         list.sort((a, b) => (a[key].toLowerCase() > b[key].toLowerCase() ? 1 : -1));
//     } else if (type === 2) {
//         list.sort((a, b) => new Date(a[key]) - new Date(b[key]));
//     } else {
//         list.sort((a, b) => Number(a[key]) - Number(b[key]));
//     }

//     return list;
// };

// //Descending order
// // type 0 = number, 1 = string, 2 = date
// export const sortListByKeyDesc = (list, key, type = 0) => {
//     let newList = [];

//     if (type === 1) {
//         newList = list.sort((a, b) => (a[key].toLowerCase() < b[key].toLowerCase() ? 1 : -1));
//     } else if (type === 2) {
//         newList = list.sort((a, b) => new Date(b[key]) - new Date(a[key]));
//     } else {
//         newList = list.sort((a, b) => Number(b[key]) - Number(a[key]));
//     }

//     return newList;
// };

// export const getAllEnabledTestList = (list) => {
//     return list.filter((test) => !test.isDisable);
// };

// export const getUserTestDisableAccess = () => {
//     const labuseraccessmaster = store.getState().Permission.labuseraccessmaster;

//     return labuseraccessmaster && labuseraccessmaster.userCancelTests;
// };

// //reorder list for draggable
// export const reorderDraggable = (list, startIndex, endIndex) => {
//     const result = Array.from(list);
//     const [removed] = result.splice(startIndex, 1);
//     result.splice(endIndex, 0, removed);

//     return result;
// };

// export const getLabDetails = (labId) => {
//     const userLabList = store.getState().Permission.userLabList;

//     return userLabList.filter((labDetails) => labDetails.childLab.labId === labId)[0].childLab;
// };

// export const checkStringIsValid = (value) => value && value.trim();

// export const formatToCurrency = (value) => {
//     let dataValue = new Intl.NumberFormat('en-US', {
//         style: 'currency',
//         currency: 'INR',
//         minimumFractionDigits: 0
//     });

//     return dataValue.format(value);
// };

// export const trimAndLowercase = (str) => {
//     return str.trim().toLowerCase();
// };


// export const setKeyValueToTheList = (list, fk, fv, sk, sv) => {
//     return list.filter((ins) => {
//         if (ins[fk] === fv) {
//             ins[sk] = sv;
//         }

//         return ins;
//     });
// };

// export const initializePusher = (subscriberList) => {
//     const labId = document.getElementById('labIdV4')?.value || getSessionDataFromRedux()?.labId;
//     const is_using_centrifugo = document.getElementById('is_using_centrifugo').value;
//     if (labId) {
//         const subscribedChannels = {};
//         if (is_using_centrifugo == '1') {
//             subscriberList.forEach((subscribers) => {
//                 subscribedChannels[subscribers.channel] = subscribers.key + labId;
//             });
//         } else {
//             if (!window.pusher) {
//                 window.pusher = new Pusher(PUSHER_KEY(), {
//                     cluster: 'ap2',
//                     encrypted: true,
//                     disableStats: true
//                 });
//             }
//             subscriberList.forEach((subscribers) => {
//                 subscribedChannels[subscribers.channel] = window.pusher.subscribe(subscribers.key + labId);
//             });
//         }
//         updateRawData({subscribedChannels});
//     }
// };

// export const printViaApplicationFlag = () => {
//     const data = document?.getElementById('userBillSettings')?.value
//         ? document.getElementById('userBillSettings').value
//         : {};

//     return JSON.parse(data || {}).printBarcodeViaApplication || 0;
// };

// const getPRNSettings = () => {
//     let data = document?.getElementById('userBillSettings')?.value
//         ? document.getElementById('userBillSettings').value
//         : {};

//     const {prnSettings = '{}'} = JSON.parse(data || {});
//     return JSON.parse(prnSettings) || {};
// };

// export const printViaApplication = (dataList) => {
//     let url = '';
//     const protocol = 'lhprint://';
//     let {printDOB = 0} = getPRNSettings();
//     const link = document.createElement('a');
//     const formatAge = (age, dob) => (printDOB ? `${age}|${dob}` : age);

//     if (dataList.length === 1) {
//         const {name, age, sex, dateOfBirth, patientId, orgCode, sampleType, tests, time, sampleId} = dataList[0];
//         url = `0^${name}^${formatAge(
//             age,
//             dateOfBirth
//         )}^${sex}^${patientId}^${orgCode}^${time}^${sampleId}^${sampleType}^${tests}`;
//         console.log(protocol + url);
//         link.href = protocol + url;
//         link.click();

//         return;
//     }

//     const {name, age, sex, dateOfBirth, patientId, orgCode, time} = dataList[0];
//     const mainData = `${name}^${formatAge(age, dateOfBirth)}^${sex}^${patientId}^${orgCode}^${time}`;

//     dataList.forEach((ins) => {
//         const {sampleType, tests, sampleId} = ins;

//         url += `$${sampleId}^${sampleType}^${tests}`;
//     });

//     console.log(protocol + '1^' + mainData + url);

//     link.href = protocol + '1^' + mainData + url;
//     link.click();
// };

// export const getDateTimeDthMonthYearTime = (date) => {
//     const momentDate = moment(date);

//     return momentDate.isValid() ? momentDate.format('Do MMM YY, h:mm a') : '-';
// };

// export const getDateDthMonthYearTime = (date) => {
//     return moment(date).format('Do MMM YY, h:mm a');
// };

// export const charToNumber = (char) => {
//     return parseInt(char, 36) - 9;
// };


// export const getSessionData = () => {
//     return store.getState().forms.sessionData || {};
// };

// export const getSessionDataFromRedux = (key) => {
//     if (key) return store.getState()?.forms?.sessionData[key];

//     return store.getState().forms.sessionData || {};
// };

// export const getFormDataFromRedux = (key) => {
//     if (key) return store.getState().forms[key] || {};

//     return store.getState().forms || {};
// };

// export const isCC = () => {
//     return Number(getSessionDataFromRedux().isCollectionCenter);
// };

// export const isAdmin = () => {
//     return Number(getSessionDataFromRedux()?.admin || 0);
// };
// export const arrayToObject = (list, key) => {
//     let obj = {};
//     list.forEach((item) => (obj[item[key]] = item));

//     return obj;
// };

// export const formatMoney = (n, c, d, t) => {
//     c = isNaN((c = Math.abs(c))) ? 2 : c;
//     d = !d ? '.' : d;
//     t = !t ? ',' : t;
//     let s = n < 0 ? '-' : '';
//     let i = String(parseInt((n = Math.abs(Number(n) || 0).toFixed(c))));
//     let j = i.length > 3 ? i.length % 3 : 0;

//     return (
//         s +
//         (j ? i.substr(0, j) + t : '') +
//         i.substr(j).replace(/(\d{3})(?=\d)/g, '$1' + t) +
//         (c
//             ? d +
//               Math.abs(n - i)
//                   .toFixed(c)
//                   .slice(2)
//             : '')
//     );
// };

// export const checkWordIdArabic = (name) => {
//     let arabic = /[\u0600-\u06FF]/;
//     if (arabic.test(name)) {
//         name = PersianReshaper.convertArabic(name);
//         name = reverse(name);
//     }

//     return name;
// };

// export const reverse = (s) => {
//     let o = '';
//     for (let i = s.length - 1; i >= 0; i--) o += s[i];

//     return o;
// };

// export const getCountryCodeByDialCode = (dialCode) => {
//     let value = Object.values(COUNTRY_CODES).filter((ins) => ins.code == dialCode);
//     if (value.length) return value[0];

//     return [];
// };

// export function mouseOverForKeySupport(e, ref, element, id) {
//     if (!element) {
//         element = e.target;
//     }
//     element = document.getElementById(id);
//     e.preventDefault();
//     element.style.cursor = 'pointer';
//     element.focus();
//     ref.current.activeElement = element;
// }

// export function mouseFocus(myRef, {onEnter}) {
//     const node = myRef.current;
//     // if (node.children.length) node.children[0].focus();

//     if (!node.hasAttribute('already')) {
//         let att = document.createAttribute('already');
//         att.value = 'already';
//         node.setAttributeNode(att);
//         node.addEventListener('keydown', (e) => {
//             e.preventDefault();
//             e.target.style.cursor = 'none';
//             const active = document.activeElement;

//             if (e.keyCode === 40 && active.nextSibling) {
//                 activeNextTabIndex(active);
//                 active.nextSibling.focus();
//             }
//             if (e.keyCode === 38 && active.previousSibling) {
//                 activePreviousTabIndex(active);
//                 active.previousSibling.focus();
//             }

//             if (e.keyCode === 13 && onEnter) onEnter(active);
//         });
//     }
// }

// function activeNextTabIndex(node) {
//     const nextSibling = node.nextSibling;
//     if (nextSibling) {
//         if (nextSibling.hasAttribute('tabindex')) {
//             node.nextSibling.focus();
//         } else if (nextSibling.nextSibling) {
//             activeNextTabIndex(nextSibling);
//         }
//     }
// }
// function activePreviousTabIndex(node) {
//     const previousSibling = node.previousSibling;
//     if (previousSibling) {
//         if (previousSibling.hasAttribute('tabindex')) {
//             node.previousSibling.focus();
//         } else if (previousSibling.previousSibling) {
//             activePreviousTabIndex(previousSibling);
//         }
//     }
// }

// export const getDateTimeDthMonthYear = (date) => {
//     return moment(date).format('DD MMM, YYYY');
// };

// export const changeLanguage = (lng) => {
//     i18n.changeLanguage(lng);
// };


