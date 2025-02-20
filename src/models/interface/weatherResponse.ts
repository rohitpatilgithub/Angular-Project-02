export interface weatherResponse {
    location: {
      name: string;
      region: string;
      country: string;
      localtime:string
    };
    current: {
      temp_c: number;
      temp_f: number;
      condition: {
        text: string;
        icon: string;
      };
      humidity: number;
      wind_mph: number;
    };
  }