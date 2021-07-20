import {disableForm} from './lock-form.js';
import {checkValidityForm, resetForm, setUserFormSubmit } from './form-validity.js';
import {initializationMap} from './map.js';
import {getData} from './api.js';
import {getPreview} from './preview-img.js';

disableForm();
initializationMap()
  .then(getPreview)
  .then(getData)
  .then(checkValidityForm)
  .then(setUserFormSubmit(resetForm));
