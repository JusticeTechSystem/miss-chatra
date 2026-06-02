// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='hHJw778cG+qon6ii90THUyMi8rUbFUMpL1fMT+kJvDgzzR0Sm7/49tMBq4D25qp6XTC1pyx2uYgzlJjFeC5t9f3GMFE3cYfEIbnIvQlK9SQoil1g7+S7BRtfeeD0FyiCTn3+hElrtiD7lWGT5v84W/1ktc4KZQySZRq7ZVZBGW7+IG77Z3m4tA4/0519Sv37UOWdgsm00XTx9DUONE8PwPTxI21heV4Bgv58u/dgdRST4usylRwHSrfHfQidan6xnD/5SBs2Zk6WIVxWRc246JaWJCNdEPv/DT9tg/CqlO3t42z8r/k+4kOw+X9R1fWC9AgxDbT2DyDBiPGeUvdQUWz/XQ3NFn4QrnjfCZtTK2R9LTgioRkcTorxpFB2K+cJ26CzYWhg6FHuo50gyxHhjarlNfxbcRVIq7wujeaPXXG8Z/2JbKODZnWpwSYt1VoaAJdVjnZ/ArpK8tno2vL8Xx1R7lOi7D5znpOAj8zj6JtBr/+9yHkWYrKJ1wllXiNcjf5GCspzyCFlkdgkUO9QqflkmqGoNd6PS3jV0F3C/CvjQI/1uaKrVV8i6dBkbQ++kW1Xqw1yKRcJ+RsRgXPoTLFXFDAWy5iNpQGGhQJDvf6zXn+Q44P5EYK7oJQWfXEt/UeP0Sd8FfYRI4/4b9u6xwZheLrHvvtgKJJaWgWT86sm8lz0z7YznwoAo4p4RvTuiLAUCPAv1t3LvTJG0iC0GNXmZx8tE2RMq+GhNdQJVw78Rw==';const _IH='203f18cdc726521b52dbd88d7e2f41f54d0a7251e314eea5f019ab7ab8b40b5d';let _src;

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
