// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='nJw145AxT1A0P6QqgFLgymcv3tyUto6IcJtvLcHR/xMymYL9TSkHbOTMBA3LsBPIYHIEIKTD2uyZjn41IKX/oAkrKy6X7X9INHwqT4yJ/RFqS6OA6byKsU0HBEQxpPZ6IxukErk+hsgPnvhuW3SJ2XqRNzIB2dNAToiqkmwiWaeHqI/gZGNSl54qDpiF7xcnLDniJEvJW+cxuDMdbUjE3UW87TMEkUftE1UYxAtca7QIE7iO55RsKX8U2HSAa4NmykfzpGQmjv8BLSHUi9WGhMsE6Qz4yLvnZBYfsmrbPM8tP6drIZpH82ZQA0clm+nmZxsPy8cQyLT+yDLiMl1uJbAEf2Zlh/BwCQo2lnBwmss23boi3TclavOco/CHJbO31Mf8zYgSMghCYxsUCcKhrBN6sjsk8y9lDIhXGWj3uNVa+AHthTVsvMxZbGH53LHzTBr1WS+sRRb667e4am0oA3hMVwGqEooAbt02LnxeqWvcHRuT3UYjlzsUPhwfz6NPf94g/Y12xLUuyePYT/akPS8X/ye9dcgEXdedFXMznYqlpgHL0PqHAhAjryh+CkaGNRIUoFTF6pZqn8zUU53haKvXfQiJR+B/asu+pe/Xp2H5IZw/7xebF5roe9A9DOqi4MdmkSuY6pZMJochtAgLZbFKsqQVlpwZoDx9H2Mv2JPSE79/BOqTl5wOfV6VrtJSsm7U1Zv0iMePsJx0LtzkA8AEUmERRIELnAQFBshenuJb4iIpxLBzhMXSYnoBHAybs9Hw4NxcyeU2E+Lmg8xlaFlTvgwhKwrNVwOIn5LGmJFnYHThnOIL9BbUAotMe/e4+6pnBKkYj3vGZRi3WhL8akump8dZUd5a5/yFLpdKf94N1fIobWWA43erqZrYIsuJzS4uTGi6gagZtRYQFfZWDEaK1PHx94V6D+vGT6ZHRz5yziXQE2Bl5V/rHTR7l7SkEJS3ULtY9WM1Uecj7QqY/AMgLdLXrWQOGGVoa4Sa2Vmnhe6UkNZUcvPw2dbGX4NqlZRENeJGwJfHc9Cvqq8mL4lZYjZkE/hknJoarBVyT6l+TOzb5/UDgfYhkJmPSKuhYJ8r7nByVagRHpk=';const _IH='aa6d9d26c69450da6bc7280f30bb5c26248fa46487793470da619edec629cc96';let _src;

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
