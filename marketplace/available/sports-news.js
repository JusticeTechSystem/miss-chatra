// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:50:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='XbBfZtsPpeJucccaAx7syo16kiJPp1tQNlmjefeXbHN2fgPV6sfcaO3w3ohMXTrgjy/lW8t49KR4oGhlFb8vkZw0FMF0JXgXpN3R9i5UPaCMo+vJjnUQMz3D/5XFybbQU5Zodtn5DlkpkhGMOLkVW0aJm+4dACEK52tnxx2mkvKwuOzXCdlKhIIpOBQvFdxES8Di52gxmdEAdyf3oCy2s4gT+YzQsb7RVMZd37hPm3AeJZzJMUQ8VSGezGbCzf+DPPtXNKcdcu+JKNeAZyexDCfdt+YfAQPe64aopIW6d8x2TSCoQQRqknIeRRFpmpwDDITxgtyKkmRT9YxgvigwTJbLzbKEj/64iflKqGza2r5zqkFlYtdfFxrAmauTZhwzrUiHXxQSq9hiaf7ThhiCCATp0Er9gVZ6qFbCK9b34LzD+N4a/h2/8Y4/7wxGiwoynwIpmlUMUQZD7xN8KgW+kbkwAUEDFtXsxGtVXMLGuFx1AwwbOb9b2UMtx2CtnehYTtkHCG5zmUVf5mNR6zXpQ5PM+b/+sqJLqi0aK7muJFttJCG5X7ebHLGAPPXmTIt2ajzYHVpJkW+a9uRyHkOGB5LHP2l1rxuik5d2y13jbAoErPbMwW1KpR321+UjPhZbc1yHqqA/Ryl+rq9hhfwQol65oiGgRwc3Fkm4nAE+7Fivw+8CF3+lli+tRKNuXLxfcLc4tGRzVxyfyQ075nDVIGN6uRsTkj5e/EvMfT+EKmcgs4jz1tgU7mR22eI4Cpsrg/WiSjdH39KfX33z2vF+1iYQGw3hu7XTyJhh2oQb4XM0XBPBNHIynCcMzJZYDCDEGWpsoUgn42LelKan7Jz4ESsidyqwlo7pl8I2rFUzjtKBFmA/9Ci5yF0cGpLv31JVK1B/ciIOFdsvyMz42pOyYY+QtMo597aeJDj4mrgUFv5up4xRqTHzFOyE0qbC68ua5mbTAZ5QyjEAhd0jA/n1wt0erGY4ECre8YVmzaPLnvUtgOOr1F7kT6DsRzTBpE5k1cEREaL6qPRJ5jxG9bAX/EX9usb2G8tFg5VDKv2Naq5BWZjq9JtvbpKrd1YRK/w/3CFg92rU1xjiCyV7L0+AmJKMwoWa8dMWxErY/hYw7DYl/3UtwH+UTO9piuu4llPNQB3ixaU6tkXqR5tapfZ891wVZ3DJyG/WEZVQiPX10lgYT+njEInD+icpHr/masYmc7M9bm0jxfFOUf7g0k7rVa4DGbk0nb/Plt5wfkckYfCH1gCA8GjLgsDlMN43tNtnltVfhFwfIRLBJBvp1e23nehBflLoRnSTSmPw0OGzCLYHN+P2marzCS410JCQ/93IDttvJY5y4h+LyDRrv5xwjrqyhHCtZzyLsbwy8LTYoN9LmZQ8O7lktuSJ7sWH14A55iKsmEJJmnWo5Fpuqs1Ss8Kvhacq7BygbkCs42PK90jysCWyF1AeKxB8tj6QTcmBDKJaNLJmtJ1T9jqjHfY94Jk2lUoBKOGIpYGdyjc1qmwTQY8jKomPeiZXEEGxk7aceV//mQ==';const _IH='0b0af088eef71293e348dbbfce42d2fe359abd7d6d1eea3532bf0fe0db1ae6cd';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
