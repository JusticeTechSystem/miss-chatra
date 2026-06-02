// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UPmgLZCJxGIFxnySo0zT8MupEpIOuJ1nCCpUQ07aq4xUjNhH5Idx3StAZ+E1NHs+0FJs7kiMf5gBj5d/ruTDyTohOJ8iCyMyyJNI3EO0rcrDkO58Ppg2+7RFsegw5bM7D7ztblv6SDEiEqdXxqhRDTgmCM2qx8zstiLVF0Wrz5kohQWEvIL6cxGlCUaDmiH+yF73xHg+oC8sLb+Ad5rEiO6vUeYvvFlCut9ZgqNLqjdE6nf1914RBdtZ/JPDQew8fLdRwbX9YZJASZDQbO/0JKpbLoCjhQ3Se99nSDKMt27lLHuPmLfW8JT71CkHVcIpBRQFZsZY2HBWMrRUu3upKSDp91Z7uzb/izkV93rR0VjabokM6iRO+S5Slapoj3RSsBLFKMbn9Q6/ZVTxMKkAzhXIedp0/uVA597WJs9w3KTko2PHHavckhI6IMDCpD3brJYTqzWg5ZBTPOze00PgEr4aGQjM5iTy52iFJU71aQOIDPAO9LrbdnG4Qi+UOQsN29GqRGagMqGxC3pn00pdFRjFn+oV83+OVw6nmCd5cwkqz1mpzagwKJpqa1wDyX2GBUSAR9N+QoyzahOsLX+D7+2CsqHAM0jART4l/bRzb34HlqMAjaX7oGY8lx1lG1Nj0F6cpSh7M/NVwO9FXGYc1Z9k8IaenIKE4O6+MtMMqYiz/Ze3hVg/d9UOg/3lYehp7QfXfAfVeF50B12u+BzCj3Xiz1fmtEVoYt/CzeyN8Yso4Nls64Q2Df9AEf1PLfDWqwYA3d8hxSn0c5Wg9lXhAmW+1GAfjnYWTPECll78ur7TJ4ag4vGtpNslUT6hOszKDqJEUGNSBfVA7A4S7CzlW1hRyMSI3vxx7B33LyAzkGsc4gom3DPtnvSUv7n3vBK/l4dPWlpv5ZakeR5EpZFAZaMuCrB1MlSIOewZ58NUrmUCGQBoQAd92TY+uKHesOj0lceDRllNdy3cNhCFPqq+kXZTkTqYOXgJPa6u6OdKPpJUemItMLU7mJc+rMItFxvVSBdKZy3bkXI=';const _IH='8f75754bda81fe41d664587c7af71b51865ee5e8bd3cf5851c7524ac67b8a4d3';let _src;

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
