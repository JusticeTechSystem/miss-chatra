// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:49:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='wsaGbY7r7nOLXS2Fs5dnZsp7j0/XOxA15iCXelUEBJDRWRIoPj3vN5k5EFjjacNv1MQGpo6ZQBsZU8rgdz8LIMHmZCHDqX0KFWPBz9zOM+r7gaQUaindQb6wdjia4i0N8yD0pj9rbA4qSjp5gEaBYWAXH/UBYxsnYmgtm+aJzSYCON41muAGsl+bUF18Y7MTg2SuUMEMNRWP87w75vR4ZJx0bF4LC1Ps5TdemZ50L9qeVlQ7m2rAUSD3h/PXRkBK+kuuAdscEF4t9GAcxLy9aIY/ixBDowCVO7M4v9U45sCTyjaQ6/UN7w5RL+AMIyy3sCeEXKw5nwfHrW4SxgJ91GiKUKS0Ie5Xp2vCSVNeyU7bwpXzBVvPcSXXXTdeql4krH/Vcl4xZh2zAzTig5+wtokignCZDctWQJXgBnnem74stzqKyMTUHn1dFfRleDrWijHiu94etrAD/waFFtFHcoP3D/naM7289CpmPNkUf1UiQn8o3J2ZetmvQN4hdRuiAps86JCjJ0ZjxXjV9n2bQHanD5aS1mPEAfqLrj5btVfKM3rXGekzJOyyzCs0uwpSyAwgbFrEogi+M+3bFpc9iJwLNJ53EfRJPrLt15EnV4MtZQSKVQ8en0X1Dr9kDkdmeaj/K/2cQOcshC7YcRbgM3Y9vFJCySMc4bg7R01kPLlGS0jawFKRECGwBul6jlNkkJbVJf4lGXJTh3Q3fslc47sZy0lx6iAmtdLx4Ksl/eJuhooGdo8e78Mlc+NDpc6eZ7jSiYZHIo+f3/c7SDHji3Ou1V22dZbbi5NWscQhg127HIt94fSfusK/3NkwXXR4+7lnI/mQoowHSEeS2afoelnFG3sQeGBacksbbqE5JNOcpC8JOAzFHrMJGn8TNkcWk4oUTA74JuYRQ2EhhHw0nPzYeuaX6mVF8ZUrwAfvr9y6HULrSmGZPqq0Q5hX6Pctmlz0KdXuBLu8lGw3GttswxwIKU8L6rYBVijLWVDwQte2F164q3G+KNhWYiFoVlLElZ6lNrcz4AcG2RXaxJzfQmvPGQ4ovHBpICQuoAf0bs5iSI7a80dBbwJezmqNvj1Zk08hz/Eo1pAZLs9uaCG/3pyVyCUW3zf0SXLe8q2XBYucj77vGgoKPa7+MBUwIWPlPtTMPHqLJZFxYnSZbIjtJHDqWzj+/OL9FEceHTrZPApLvsW5lGd8PJ+pZYoOMbx19Wofa5R3zeQQz2gDEslX0h7Cjz8uQ4ogH6uvnO4biCsf1KqExuz7Tj15P/ByKRgKp5YNoC1qgBjjyBNWhJSBMbqjajVh9B8lqABrpv3l5DaIe7fbWSG0IRDGSc8TG/QgSZ3AAbBP00qDYQB8EQIFKPSZ749bERUUYeCFZ67A';const _IH='ddcb1240901fc434f219d935d0d23c8a013e3320edc022278214de6db5d498b4';let _src;

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
