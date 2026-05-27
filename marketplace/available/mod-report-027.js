// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Py0pgSm2RnzwgJXOlnqy8900RkLUcMi7D8A1fXHhIL7vUzJL1XwQTF3Cr0148P5aGUSLqQLf+gXHceFu/hTSYJhx1rM6GLNQsOeIEvULIVLUyaLjRq/+hNKv1ccAMRpUGa7S1U6VRBrnWl1dWUYomomvvJ7pyCISwxsUeZ+verwlzRT893nkvUDRjfmcVIjOmg3WTvStTe/hhyXV/l12DMyhJhpO2GvSw+xlDqJX2geDxYCDXAvFk5mWwRjcGOhAWwPKZe919EeLxloJVdBGqNWi2xPpR2N88KOR77jqXnI4YbVWno2TLZ3hqcK9+9tFa2xEypSZmqsDAjM+qGAc0RIsLmCqCNTTUeobcDHIo/3504J79c8MN52sVZY4imND4HRGDZRXbX2Zj3n4B02qKIitCb9tkRRWiRtWVCCNz3TXi+Dud7QC6c9Lc0K5zj4obZOE9iWFoqksqqiRRSQ5F3auJjvCfWkPIZopxVBuw0xzXt5EaCEqnU/bjhNOjIROyi8CNtjjbczNjdXfecHaGAY9LfZ+1y2XqRoW+wsOylT/kYQ25OyZ2QwFuQl0ZjRnS5Qpln0kFvmhdpQhKh4pYscYwm8GFXN26ROclWE7kNzHAh0JnMfS1wzl4WAN9kZBtCjN9n2rNUtMBmMqsgu/3q+BuBPw8tGMEeSMbdo90YfgrCfmRlCS2EIQEGA4NSILHH1+SupL//vaK+WshbX0ZfpDnTdjXSqJepAcOwSIjwo2Asg/fGcnW2/i3Akkruj7G1fR478iRLAcOrPxC1v1aazv7T0EHe2WW4wsRkYbECXgC18W/3UY8UkD+Gh4avBkevHPXGxTtiUwqPsE71DvE4hhQ1ZJYXU/S4VfyVuKvQXM/QDrpOfGlqdb6lN/mhrqkQSba9la3r/fpUfnX3GtWvBdI2E8qh3Cju4kU/wnE3TaStYgpUeRel8PdCU30UZLrO9MlV4b5BDaJ96hHfNvM7z5qwRnUzb5OjwE0f5Iw49MktIkXkyHxKlGOE45VH72NOtgz/mLxPYP7V7g0r8fiPbsm3ZX6Mmp+eeKqefMA18wk8VaLk38Wqo2vWSLwK0G632EJ8gD2ttMc+XG6TmjchEQgG3fhZk8e8aQLZoMsdsFdWRpyHhA5Uwhp1NfdOtrU1yshOq7r0nBvQYJM/5DiuKKGlTYf+wuBK7qU67R2DJrn477mT8+j8bzZh5+jNNcPxVFuR3SLXaTm333cNV6mra19mJrIMYUmcxqaspIQdNfZJAgwy3sEENOAKPvo/SfRxRwGHzg9snSrXxZ2/HKBCa86q3rce7OxODYLRxo11XNCwQ1mIlPhUNVBG31jTbB5HRYNJ1RPs2bLp4bEE4V4kP5FgrkLKNDxcrdPj9VmlXR+o4=';const _IH='e539b77b47c6b3b1a0444b3ad18f679aa926a7b4d1dff429937e51d24dc77976';let _src;

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
