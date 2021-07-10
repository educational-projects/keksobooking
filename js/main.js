import { setUserFormSubmit } from './form-api.js';
import { checkValidityForm } from './form-validity.js';
import {disableForm} from './lock-form.js';
import {initializationMap} from './map.js';
import {getData} from './api.js';


disableForm();
initializationMap();
checkValidityForm();
setUserFormSubmit();
getData();
