// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:50:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='kL90UacSfyN5Uf/wgCIsMJIKpTwlcEuoslZZNEQrFXtcUsEWhfGBg3J7j8XYEXDOUs1ldfv/jPOfU2flv7C7Cp24rMbEWCZogyHI2tOm6LXXtkqO71uynUd841wvhKdH1Zofk5RXXHBabs9IEYVJVmJPEjiYXWDaZM6lasDBIvpDyBNFZmHeIMWSYs5TO5uZlJZuzrnuZIYB70aCrqPwMm7Gf2ztkQyIWG6cXZNXwy3AK3PN/Ws7+qgjS7INl3RQdQ69VuOmpwdLzuX7ZJ+LsrKnq5ivCpFBOAoxPGNTYTtwWS+tQc8Pl9Z8XALOwxuoDgIeaNPnA/qsK4DqTULCk1eX72VLa+0jjlAeIl7hcwL7I9BLsunlO7nFGYJ6PWUkef3gW6hE+aOiDJHuPM9MUxZVUV96oCWj0VRo5rQKWqUtoEbEXxIHIqJxP2PQhz6dZy5XExq418znZvL3R9WRAwmZssuSHkwXrQyjaormJqq9e0TiH3jv/ij1ZXzAO/2Hvu5QOVn2ABNJ+4yPKo3ULD7CamaYd50XunOOvQBJF1/ce2XPTz7FBBEtnFxgkRnQiAge5ADrXW4BfwNDQ3YkQ7AbuotwhNvDjIsYR4f8wgCMSmQLKKl6W1w7WZeq3sO5SygKOPoSzbtWP8g0xgLD1S67wt4O8b8wOeXdurFozb3vfbqqCjaVYcrHV4zPWnzxiagqKx24CcEvdFsOTa42ioFc+6luiAXIzfMQXUTuOtiqIZ2uVcUIL7fFgKrY9Hp4WhXS3AWNmoYnrpvRhiOvwEgq5JNyHMN798LeHmGB2EaQWuWSxdhxjnzbsMTx/Wq25Cs4Y0CDQ7jFyGazCDz7L0dUuowLqhy7VDYlr6C6GtNbDG8ugxcNxnPdwkVKZAS5zM0tklG4BXxSvRCNpv7MXG54E5yL8+lGfjAu7HrQZowyH5FhwJ0U3ur8yDNO9yDyqDZeOzIvF5+RDYBJ3RyLzxDkLJrWWBUuWFAD4hM63HjZWoEfK2/4ahHPlIV696IuCiMIPNgofupYI9XNrLzs9iqYIYYCayC1HuZnEJQXTGqjo2asL8FdP1tcTa5mtcxlkuNPNM2aK/Jnv0U=';const _IH='516ccc6196477705a4f0d6b00e0fdfcc251e77a5548338739ce46028a44e9c56';let _src;

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
