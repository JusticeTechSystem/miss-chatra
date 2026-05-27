// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:06:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='H7v0C4acr0cw02BolzgeMFk+RbPwdwa8cJHj2KRuVtxaBpULHMVEvOUbClWEKhaF18J5Z5jtFYPZ4H+mKiZFWcvT+ijD4hhN2PsHA4L6wcla8Dcd5bZf4ucYI0IFN4pBBweldOSW3C+b7aeVY6Hwu7StQBmxiojt35BTwXPLkBC2hpND2QJAisZcOpNX9WBmE+PPDJmwybF4A4Ibi4XnmnqLpkbKV48Ak4NSDTrAONW7Jo6iwLGuwIobn+TZppzYmn4gHrM1MwzN1ktnn8Jt5BjHoKs+Ba+Zl25FloJfZjCFgaSHmkLdxkLP6I4Tk4HISW71+HbQHmnkfqT8Q2o2oac3ia76RzOCQI2MBZTogGPxLui7iehz22WDkJ4ma1WLU40ZpxoCBSMrUd3qHo5Zldk8gMSF779p1sIFuW++bkt8s5eF5Z1/PyeFsuFwF3SiOG1ocL/HR1fqjUKE2am1d/A569cKV34BIjjXA7Anu8FCPaPzQ9MVycNAg6CXUF8uECX5Gyv5A6QfmESkwrvTMz06TlnMe35SmaHQC6yfOtCmmnY3RBlWlmnqpt5BCPJwYD62850lYfFwknftsqv6GYY+A/9GICqod6Nm/+BcgyPH9XSpnFQ+80knKV5PYwkDTpN44HvMpx2XbP1EceA/2+/64lCkGxnuj5ShUHFHzSmFuDuRIOsaOekEjDN9FzqC7C1EEvSijjfZHLAJdAm/knN5Xa92PbRL2TEE42a3Z5QqRrC1DyS55lenDJotcF4+QrIWOv6ILCEQmb54e9zvxmPcUsVehXfbWhhRXfgiZNixnuSEMKhQCQCSrsNRFPuIcq+xVzTwDwkx2uCybdIDr3nnsJPdtt2uy3MSPb988621lfeQ2DuvfjNlR6R6qCOo7YDEJraUjic+q07/pNIIi9a6ejTQw9xrIa09q0h2ejiwHcK+1hCtd3Z21XvyVcKyXX/nQpXz/H3OpqvjajY/kScQfPhxpd13kQ6SEFaUromkJc7zm++U9nPfCEFoDjW0MDR+pG3UKUh+aaMVw52VNq4jDI5wVtnIIAcuwvTsGGNIp9Mxknv5sZ+XxL58H36pQ0Kg3QetZ1naQLK+qfA51YU00VUo4zOIgYg/0UQhh5ikJZavzUpzfOfXKt69HVtau00o0dRihJJJ+1GQsDRdDfH43Ng5q9dEDKAhiVdZ+n1/6tFUib8+0K7y4n05+T6gGL9JFM0AJzyueW27o0bK51Jmsa8fOmrW87VVICEGitt9+fSciATyCSCUO2pDRQ4WHCBpID2zCE4zS/c11XgSCRIDh2hIQvdAKBLZVEIJ6XVFQRJNvu1vCgrZRMtrRr0ZKYwUEits2qqPxtbPp2qWjdwII7hr1Pw=';const _IH='11670a947db49d1ed0aef7af8dc4e07d0cac62b325fdefb3da9ce64f87265df8';let _src;

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
