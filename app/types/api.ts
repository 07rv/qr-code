export type EmergencyContact = {
  label: string;
  phoneToken: string;
};

export type EmergencyProfilePublic = {
  qrCode: string;
  publicServices: {
    police: string;
    ambulance: string;
    fire: string;
  };
  emergencyContacts: {
    label: string;
    token: string;
  }[];
};

export type EmergencyProfileLean = {
  qrCode: string;
  publicServices: {
    police: string;
    ambulance: string;
    fire: string;
  };
  emergencyContacts: EmergencyContact[];
};
