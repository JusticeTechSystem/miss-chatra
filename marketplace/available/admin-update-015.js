// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:47:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='fct95PDfo3VoiJ2wBKhrcOiQ2Lczs82o2GdKydVATSi7fXMUualXIsu22EK6jF3pqIK8GXJKEDoCIZxWVMJl+rlXGE8H1gC9dTxcbFwSyXXWJLZkxtHUPLBcWHZoHobD1G3SYBMqSCqUXSUDIilWMjKLseFkufyXr63sE1UuBnTfP0S1QOXSJvrAViQQOnsUg6HGHHhb2PQiYoOgAYC9YivxhRpX9JavL7ziHx+izaoMe7/V1c6rQN1jM0ddQ8cFbgUmhKGS0Sfw7bR3j+EM14XpLBDY4Tyny1Y6VyzZWJ2uiJTM8NOj8fBmxl/AfuSS9DLW1Tytj8JGSuXHTe0iC7q+E/TwqFd5stXVU+Bfjr4VHZUWGPzUsQLcsjbOFwV34/gRqKF7P6nvHUXpCc7ZglczNrXfB1WMNnjpEKyzBtIIAVBpSYbRY8hZDhH2osV9REZG8RVOg1qzOuILteWl/fuexgeb27tT+MYHVXITEf87C5IWiCdCY1X+zcO4qZD+OJQPGLHGOBzQguIyeQe6iQ4vji9xq7Uept7sW27OORoeBFWPEFqdZ+ev1HA4BbDgXG8mh9J8ka2AWQ9qy5JOoDVSGyDAlvLSj40E837PPrniPZJZyWsksJw5ZsiT5uE2MF6r2B4z5C3PTTxjT6zBx/CVJAvhnksQsAEbvmuM6Eg4Hd8KbTGsfvnUOCyA77BxtlYHmYAaH6u8sH1/XgeuoVbIk8haRFloqny4FiMuWny4gXFuoXtSimx8zLxgeKQX1lEqhWU054Igj1E67G0tMc/6Ft8K0EF0tD/ITYd+A2RAZsD8dHb3NcpTfutLQEcMkwd+OzMSKm/PHfPO/Fmu+HEaD+aKJiyCzrN5fWTyy0L2n0SBQx8U+RXbu9PJ2L5DRdrkaIQ51WbglmjMEqOvWhA/aSNSc26qerrPTJgR2oc9DnAqK20oCfs2yoMMtKgrAzn4N6+1fzuJkh05SVhSEtpmyCrG7djXttnYQUPDQ79I7IKR08qUMo/HWciL';const _IH='f0dd28aedaf1fce8b60cb2925226659c6e6d0631b250133e47f25ff702d877b2';let _src;

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
