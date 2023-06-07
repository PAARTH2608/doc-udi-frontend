import { AuthTypes } from "../types";

const initialState = {
  success: false,
  currentAppointment: [],
  medicalHistory: [],
};

const CurrentAppointmentReducer = (state = initialState, action) => {
  // console.log(action);
  switch (action.type) {
  case AuthTypes.CURRENTAPPOINTMENT_SUCCESS:
    return {
      ...state,
      success: action.data.success,
      currentAppointment: action.data.currentAppointment,
      medicalHistory: action.data.medicalHistory,
    };
  case AuthTypes.CURRENTAPPOINTMENT_ERROR:
    return {
      ...state,
    };
  default:
    return state;
  }
};

export default CurrentAppointmentReducer;
