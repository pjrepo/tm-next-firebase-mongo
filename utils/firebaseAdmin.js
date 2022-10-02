import * as admin from 'firebase-admin';

const firebaseAdminConfig = {
  type: 'service_account',
  project_id: 'todo-app-e95f8',
  private_key_id: '063e0eae64f3ce54d838d0d7e0467c4a6a5de8c7',
  private_key:
    '-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCzqajWzAmNhff0\nvRBFaPiAlgzNTHoVNKcyojbPbBPIpNBDcPUsrLJviyokK5mfJHBlNOE2tDr9s+Kb\nH775DZsiZh1CappV/Jhl7ZF8JVQNMWfcnWHL1Fj/3wJP84ATliJdjkqZOefO9NLu\ny0h0uJYs1zQp2zb8kFn5yVfBoKixGwsKdSGTGksrBZhlOvFI1cssHWAv9oOwqkeR\ncmUMk2JgTANwRAqCgUQeQvYJzHkQi1LsbkinFNEKVG0G0XlfH1DYHg9bgla0lD2i\nnzYmjOAMB1DoQWSF7/cT2eI6fkfbFQyc8XPfdsHDRmf2aUr/vmClPE+pqVU90Yj+\nGVDP/HD7AgMBAAECggEAQPpW8JypxdASjibE2D2vRp4+Mg/7RWkeIV9usFUX0KTf\nF80mNwqcnF/6FUvZiyecKNZXr7e+cBxblBwGrz+fAHFrGqbAe+HX4mFqETrU69KX\nDEC1aok5yQzIYs8f3rWZZzm7vDAnqP99vFS0N1a9JamNmafJes3gZMlPnl1zNV4F\nPmN5s63Y909JFk91PdmIR3kI40uC4Mn9PU4BWUoLh8nszuPGz0rpg0BPCnvxc4iq\naDbmOPOOPVOKTaOlQldG6AOLLIT3tgJgHVzkN1TZ2qY8X027CjeHrKgliNXjoSbU\nW5UNPyzGS2ivakaoHlaY3zAw8y6vQjm37nc8pjcapQKBgQDqnYyisCrO9/gL+wHe\n7FB0w1Nc94WCXVdNgJ5npZYmdwHSAwb/to9zY0FEig59Ol/T/to771AMSf0dSXfI\nYIrX/Bvn0v+obp9g8ILAqLhD7xqkRnWFCp43TlqUYM8v2dXNfen2uaSlaM4opP1V\nPn4M0xeT4AFnCbKemtN3i4XsXQKBgQDECdwA+5kXCi+zcRHrTwcrZsg/ibjX2R9s\n7SgY84mydbw4BF08iE3DNNl60Wvjs/lfAL74w/Q8Iu+txzCxj8bZPYhSfIEO5S1f\n51SvjYilximozuX6xngC3443tDkb5IM8ZSAzzd3CbRGH1rin421ikkNRt4abJJhg\neT1Fli69NwKBgQCtvFuPgetBdqkNniPlg5OU06vg1T7dqedjchJbaGiHNWt4rFs7\nc2JJLUAA1EckftzFrRzIc1AQuZ2hWW1FShCnHn8/raU6giit7Yy1xHsne2F8Mt0F\n1zYQeIplBEeJBMPptwtRdGmzP6giuwMKZAuNzafRDnmbZrgJ8VcVWJGk1QKBgGi3\nF4SS4HiVIVvJlxfJc/v0AB0odMsfmJC3sYZ6eGASUcLeWetep6MRFOZs/SN5XEgp\n/tik205QHxUFZHZEZaRfIPVmug15z5391Jedk5NxYYlhUyl8YFiwj6gjpanHi250\nWhox6jXTytxzjtlnO2O+2yTIUqeGibpmqJsGGNtLAoGBAIzKP3aKroelpoSd3C43\nc+odLVfq+1ti8Uf+pnFi4i4r0DYMjpRNZdczqytRS4+xbbLg/rq3o2HxRhstrv46\nFrBN1R+w3AYHghghRrnIBHKH1sYgtmTCMm6g6Hm/iiIyt7Ie7X8ZkPYdeElUMmf9\nH9ywQyqpuwHklz/Ez2rVlJf4\n-----END PRIVATE KEY-----\n',
  client_email:
    'firebase-adminsdk-dppbt@todo-app-e95f8.iam.gserviceaccount.com',
  client_id: '115382397999423810096',
  auth_uri: 'https://accounts.google.com/o/oauth2/auth',
  token_uri: 'https://oauth2.googleapis.com/token',
  auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
  client_x509_cert_url:
    'https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-dppbt%40todo-app-e95f8.iam.gserviceaccount.com',
};

(async () => {
  try {
    await admin.initializeApp({
      credential: admin.credential.cert(firebaseAdminConfig),
    });
  } catch (error) {
    if (!/already exists/u.test(error.message)) {
      console.error('Firebase admin initialization error', error.stack);
    }
  }
})();

export default admin;
