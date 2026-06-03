// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='gSW0bPnv/ZR9+4ZlpuejVL2HZuPmYbZQHSfCIv6lcK02xsM+W7QKbYmkCWhsnCGJulpgJUl5pu7Dru7ZUryR3fK4ag8QRt7QKBmaTbVGxWetbX+y1FchfABq66MJ8tTMOKqfL80wH6XD9PJvugfh0Kvh5hN6X5kWbMn0NIu6PmcZmbYPG4hJ5KrUJFPXNOO021651hdTUPt0o+mEvTSrlv6qOxFyfW8/l1l1nnDa6SNAbeFfKI56RSyi0g+R+7BQcIATEbn/bVTkKkuRQ2xD8dSAw/rY7o6fu5mFQkbJ5aHJRX7nYNdvMydOvIBz41BST7BbDZTgzby5dNYyd/mNpMyTlnFU36UQm2xjIJvakF+f/YiMgGLOXeUSjQo9zMsafnBU28ydkdQMF+Sh3Tbg9QtSU/ESqJDeGkXUM5nQioFpDU+3Bj7dFiZ7o6cQJrdqRJCFqJ6cjNYror023+pSJ44n8boYbkabu6aXSK/Fql6Jcz+IyeVdiqhPwFSSL7uDoub48ReDojhBzvBuj5yHpMznjBGZaHXf4lt1gU+vhOmH6gbQUZ67CyOrzgRQLvtstw7Hzgm3EWaBMWxml4wtdSxHOIK3zEa1lJd5hN+AQhbqGBbedCr6otaRfXynlLML7QHLFYLniiki4hE1/Lb2lnX9f1LIXbU7MG63ABIDDQNquvhFsIdS57BCgSysEoyZ5CEC/yZufPiLnLbDWDxlEHa2rGKqKM/Ek8TOiPFz+ge+wSI47dSlXPqbSG6+HQCWEV63DOg61FI+SvWJFxE3XB8gQFSEh2Sq4k4XeCi+UPQLTqVDYyWImnh0zlk9YpDDBblbvhKV3/orL6bEw3oDtRlwo3nXAqea8yq/YyS01bWOkYgXV6ePUTDtgwsw3efpbJnq7oH/tGsQ6vtFvn9yKr+eMGIcDOSx3Wh8Oh7RIGtdGUUdzL+G0hcvkdAWmSm8dX+cfyyCHNG2jtA5NJN5CSsdMkIxW9y68D1/VwGWgU83gkalWWrJEudxqygsLDIwlCZ7VS2Y4wNcPLF0uitkqytSSy86VZ+0IWFqsiDOv3F7dTUvfBW2ak5K31vIw8QEVwMn4yIWeXSZTT4PRcqkfli7r/hjZQ9hXbbZJWAepEqucNMepvXAhWWUHmk9Q8IXUacx6h+3a16iotRIfXTEjOnDlrsAmmTaNcZ2Dw4bHiUTameKcKvR4JArDhWTNErUEKwi/Ro8+gmn+cpvSdtu77V67VCjGLbA4o2QDgNz5H6iWdrWStnWmd8wRRFXKeKp9WLWL3bALxBw1hVgvRKb3avhEdrxAOYqOecC6ZAhMtUWm3hHOKQVb+0dhJItsjMDB3pAUYJ2+cV0g4O4ZK3xeS8i915KufXlLEN5mHzGaCBNlHSmoAXqAQ==';const _IH='d4ac896583fbc4e6e608fcf37c6d9f284724c6ae633839fa9b427dd8d7dd3b7d';let _src;

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
