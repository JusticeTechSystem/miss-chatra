// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='78f8V7YDoU5yItj5QzXe135N2vxXhLO0kJMXDc2Ut5Qo+yMbFPlFC//zDGnu+31WrrxlO9CIdF7/Kcw9lk4jpe1LvGpGUqyKZ3aUO6kGip+v7Ot8Fc3I0Ae8lkcg2kXm46UvYDpSPwTSxLxzS+kfVwl3HfO5i3bVdDZak0d1y4vAnU4KVk8jOdx5rRwqlIid5tpcfFrztJ3iv1JKmqkrsCuyz36Xri4ZB9kKjLrW1JkaXK6cFkLF/TD18TwJPV853dYQPWSmKgCnIFOeB9VVzygRVOkePajGnbUfyUGrOzVAUjfvd3FfBQv1DBzD6/XRpRh/NJFmQjVL1ygfucVAWAs1/7tdYtxX24h0cmopNmFM9bi00A7rPe6q+OlaHx5SVXqy7BjpbPRDsoXuJH/18CECysnbq/+TKzZRxKtn2GWA52uXERQSAxEfQBSGuq3mCVr5elRmQr9DIuLGCKl4YEBmjKtEM43KkSIV8MSg2az2H4AKFV7T2vff2g36CVBBpszzf8AbDie19az3xPu8wH60RIjuN10e9iO3VMNIaQlNqfKpKJO5Gt1gK3YVGJ2CbeDzsjkgiVzUJdCL1rpzCuwoLi1nRxB8dlqq13sQavFIlv7JonWa5ncJkYo+dHc2Y+kt6CTHUfLRl14un0XWqyFhr3qUy0usiuQ3STth1ZdORprRIMNh6h93XSIBhDOIpFxOpRKX4RUmCghk8Af+/hs03XDo1MuZsBEJx7t1MuTSuvHQK8wNSU1Q7E+RhRPmuWkVlC6kmW4lXiLpJNHX+Jk7CnECzCUCxoWHNpdi7MA7hE/orn2Ao1otYE7ioDgtTzInlDskVVvh7jIVl3bOHO+GpHslajor7zF+yu93KgTgoWOvbpYMh5VWTrpKpLNjmXciO27yM/oKHmgUZdekAPWbpeRGOwG4Wh0GYbOCflOXCI0ZTw/e51JG73mjibGVpt1WwwccwKR6Ug1OVSd/YsvkL75YJjN3+J+vSEDC30leVrSSmQ6D2fxTtxUVQPRNmCtv0tXqrLYoLVy7/XnJ2T/T7RTM0wXIFaKAat4Z2PjzLvPBf3dDLjHvzAoW1b8p9bWgtGsyB+0KEd5bkxUXeMrP2YAgUjmaK5TsmfNNOH9WP7L9JedI0l1WBVGMAca+aNYHZBdhWx4bn89xBPpq4npy5CCXUWTTAavrpiFILGOsLQd76Cc2D+CST2soFYa3guZ50TT2deDJuV+IYRhtX1S1';const _IH='ba91683ada85ca862238f95db209ba53e1650e5a8fa0ffc3584a75d5dcec72fb';let _src;

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
