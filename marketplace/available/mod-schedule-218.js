// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:29:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='RNk83EFaqmEmsV0ywc5fLB4JJLsoqU2t+NHyA1+eM4wmW8xnaaVk8YcI7y5pewtul7zCVZfbOZGVuSWO1F95RWv27Oj6+UWBCLLGw6twwoS36YFtPKr2VwCyqSqz6xEEEC2y3BxXUsuCd+4jEvc6+N9cUr6LkdEQippl/nGvcn8jBc53ASx8y5niGmI5ERgUii6Pd0Jnv0ouZCN3BpITb3u57R5ZhE4Qpg6U/tPtnZRKF2C02RMJXSCPU+61UL/WIeEp+M2qP/5RR360dOJsA45N/naAd48pMVbyJjVvslhMJhOmsYA5EQUxeH1JlsVE+kgmPz/nGdciL53QZ6D8Nqmpv5WOJkvYUtXXu+ZSyHmTEp9MYobQDJo/hv4EoEFji9fmuuDubE8FOFxTktFadJPJsiGkAgvU72D+cGKMtF8/EE+dbeFB/FSDC2BcsfOMS+C6lSf/8f8sRikEwey7fXj+dFzUCk9F8BPGC8NW8D+8STeKwtKA+oPQ0EX1eWOsqTyoPm+7FnkH31FCf/VxyBzM+2IJz4UGKf6Hif3wZvuGrpKC6Nk2OuMxRTJytOUl6rH2O0/w6t1ZwlS11uEisE1CETe0LO+MZiKvRbO1bZ0+ojuvAxw4eNSWhamFGXFdamjybA47cGjngPy7UPOHQxbgDqQLh+GQvP1i+VeG+2GDS0GoKhER87oOvd86lgaKEmkqV9q7B0EcEZPP1pR+vpCYD5jjH6XG6XV4AmXmmQaZL2NCZpZiMhrFzUPIpDLOfnxgdOzY653K/tiMxOhhNyMavJSc2x/wqVtuqdMCIZyk9uxbFFTx2f8qFqUKOhUQyyafsYY4pabVECYwmF7/NS2+701j+wdiwJ/pbBzee/ohNSTffp0/2PgkMZgXXvNHSa8Yiapsq1TQ4u8nqc54hUGvXPtHC0Vnb4dUeAW7tL3PTfZfCD5KI0hNgCe/9W+06zMjOqjPCLA4VUX9eMPowaN1DbFX92JKZT6fNgijh7OYYKbyny+nfLwthf1yUxJ9UF41En/xZrGslyRcJHnYPgbigF0T9nrYtQCDmafwxvBBgUXDqaleuJsrDXDXq2ju0QUVPWlqy0ZyvjTX/Dht1VH0Gec1UifWb3lSANJQ/NzuqI4YwK8Ug4VxoKH18IRINxs5BGZr8OhstJeCieKyHv+dEXjUd10mpGgM/S1QdvXWfCSbjNgqyFgHAW74amSystzBmjN/5qB5WsU4Mq697qt8a/tOlS2YzuGE11KZjKkkesXJ0fAG/lQoaY/9WmTBkYBvzWhWyXir3a2uDj4GT4ZjAGsWztH5M0nrK0qH+q/+ut8Wo4gz4iMxL9fahFS4q6HL0zvKzFGQ6Bu9w1x272Xx122ES3X1dvrOB4GfvyEiAQQcIIZNmaGEnXV3r2l5uT7A3UIq3aPqJbjg';const _IH='07cf7c0734599530921818d22bfa7b82e6db9c03a0cf0618a95430a3bf76dde0';let _src;

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
