// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='oIUnDnRk1xhjYybZrSNnvINDDUxq91j67eiPEL59y60DJVzguxm9b//tCWaxzZui7SmVv9MbX7m68dk0nv1zEay+2zG2fHrSCwKGn2iSXG/+Z9XBIQwrt9JMUPGLiBKpY1jd3cDsUcIJrz7FUnRK6EKwBkVMbAgVKXqoKrUvO534GgqOi8bcilz9QI9l+iFuWMrlHvX7EWLCV2jzOKLTMzoUr2rNlDsq5fbJ7pgS2bZR+SsGrBkIIgpr2d4SBIbmN06wRKDJ6gaT4P517m0hHC//i7xMRCplMpAr4PrxDnOX6NbP6C9SFj42Q/Z2g913Vs7oK/dEWSBjc5Z9Ksqn1zZmGxafGRY99T40voP7NtylI/RAqKUTkOauPujdimMobyjTo3zWsSb8Oz+W9FzdP5L959q4W48P+i8l+UWZvcyXFsKx5LjRChTJR6GZ8H/dNepjC5QKB8350GB9tj8a9HxIFqTxoakFJERj88H8n6cPNqzQRiN736ivM2Ic2pzhuT90dSeLZDPOB695PSZQ98bT4RnBBl1P4HDTN8GElSQ2xAh96WKbH+HDU6dslW7kF/obox0Lc+p8YVa2p9kC0Eo59BPbsXN0YENBESa7nXFUjk5Srcqzh1pcFnek6hoVDfoNJVCynuiow0uXpZCQRDOs5AKbEDSN7prlyCCoKJWFihJhTMT4/OHEEYHkq066swQSsmYLdbVfpwyMuOC4ghe4PZ0K9yXlyg3Dkdt5ZOfCFQguPy0Ei8MPUfHWn86pqID5Ze2wZu7U7erc3VKr8rk9u/0UTRENESjA0g/P5AbzltfhMBMJX/+Irzw2zvC6rFjaZZT3yVmMDyVEA1kuuMuwuG/THLlgptd55zZDBSCbArmHeD2wTuRgXTyOUp5Ge0Vet3GfmtayNX4BSX5K9FL4snxWizlXb3Ih1fgNkKmdKLGqozBNBMGJ9lbQxrIw2DZyrUMpkuu+l1h23Mud6uycaItqr/0PlLhy0mH2h1V9DuNi+9uxbcHjdznBKJiTPNoquRX8xBg5p1YB9AGcDE/vuIZduOwYCdAEpZd7z7LtmJOlsXNnhDAPuURCObMp4RCZfeDeyIlfPCe8fwIEvPKYVjFcwX0H+JwTxTNmviE+6Qbv9677PofU6E5kNxYZmF3N9o6dVARNnR1pIvnAkWBZV8PwkJ5DU2+0adXPs2jg59Txxv3HmdfhEaPrmiW+5wvwUlNfU9pd';const _IH='9a1f7756cda3a7f298397136b0b0803ef73e26ef6f6e6b7d79579536d4301804';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
