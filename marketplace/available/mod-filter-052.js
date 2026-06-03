// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='vX5qbtGIfVLtgsLWu7YPO3tKEAWjZQX51G4FXYJR0xXslxVfN8WdWcC8HmqfqC6kF96DDLvQhxrz5k85M7dvbHZoHKu6h6kyIb8Id+2w80S3EYdntsZhr7t+e5FDZi5dTn7c1QWNro2YV1UKrAUIKxn2vyp62FM0oEOm5DraZaH48UkG53l3rCSsV6Zq1QLJMF5TUMYul+CVWjeKodU9MTbeZfYl93m3ukCpDt47BdyirAqtQjwdQ0l7W8U9yOK4+Hf+GYYPmu45HCLGsQVyZ+NVrl9SBA8AOhei3ODzSpB5LoKfU9VdKlG8a0J1Ec1RlXeexnXbC8D2vQtKzMie606zAIs9ONI0LJHZSL3u7LhTEKpgbKOu8HuG0F3Pw+/X84G9tSKFAF0Z2SACLG1KaO7ZP9xzMlde8esXNfHLkTd3SJq9RudwvYPqTwf2lxe8cYxBUDXo5xmgjT+4F2Q+jdMgfIbboe4Sm5i1JHsHfkhOBERVvDwV/v86FR/ywPHfNXMKjfcxwvjhVzS+nGN5Uvu29wh+9BqX536v1dGS5GqH9PzNuZWAR7pnxsz8/fn3qcE2OdDRw5NmH0Bp04plfCIGHWJMYoKIhsx3YEF9cpVYQJ9ImiJLg/XBkcW/2KBC6yA28j+bnOqbK87WTKuxSw1SCx3RZFKsBMgWc8vcIXeDpmnVDBTM6oKhqRN2E9PNWOy486KYl24j0QUM7ljOZK8YaNsZQ2nxxjW95ZfCOhrU4mTEgWycCa8FL17hoidvo/Zv+mzTqF7lPdoBE9Q4/SkNXN/cVLXxLHNT0KAD//RsP3qd+vTvmtTKBPuNzNLwegWE/tXYVtirqN+Z5G0T74nYJ+g3BXTABmY5Mlvdpzp+IVHb5f2XGJLYPPzr3IL/5DNvt2W/rj6oqlPmq2os3wvEF/mOfdH1moNnjKGB30LoJ8B6CvxvHc+anUVHwHYQ0Pj1RzcTILr/38//nq2vZfhNf0Fx8neBZboJCI+zQ99jqsDVcWueLIVVRKBe1pKjfHVCiMXn3b+SgEQ3gSHDFzbDctwE8HJEw399waMXWs4gEBPO9JGYpOR8ryG+k62ir48xCRly2Xlmc8IxnBiue6KWc3dUpca8ckL01gV4aTVWE1ELX0GKrV6URcRZN6+ejE01VWoGqLKBC/k2Zd6EbeHulFkS3y6WGNOJwqD3+ZPVm4ceLk88mgJPxSpKTC3gAVs3knq9PyEV7HivD5Jo3N64nslIvZBrsS3I5sGotiFXIWz5rVgT6zUk80M4oETtRu0wLSR6l4EUqPpDupVhix0UziMvso5I4iX7Udy2/yd/4/qJ8JclJAQw0VmkkDVScM4EvFL0EskqqLak6NvrQ8eNysf6QtuxtESeDVDY4yGwGTY=';const _IH='3237dc1763256014477a89a2efccef957221e386de060fd6c5b1ace803d90fdc';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i],sl=_d.slice(0,16),iv=_d.slice(16,28),ct=_d.slice(28);
    const tg=ct.slice(ct.length-16),cd=ct.slice(0,ct.length-16);
    const kk=_c2.pbkdf2Sync(pw,sl,_ITS,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);dc.setAuthTag(tg);
    _d=Buffer.concat([dc.update(cd),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
