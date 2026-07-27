// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:13 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTZ/PtptUqcz5jOJr8c6OX3Wht/lWliigvRqCIOmsUFrUJHUmjeQwLXltD94wKNF1ktP8ic0YbaY15I7LM5x4IQn+NOlic1rMXHU0gbVr/ADQHubirxtLYllwy06XfALiZfeRcL3XMGUJCYFAbwmdEwEv24AljzRV4AAb11zHjC47F2cp0P6gnvUKQD0hyMnAD0Z4idClLAPVzADSFJ+VW/GfriJo2Gy7PeavMYomU2qPcD6M+HZ6jCyf5VWjpwTbGaxUbij+vBK7nCVGkYjnEhACojkFBXJ9s8LxYjVw8kGXOjm4UhOtSEumHh39uE7zNcK15/wb0vmIQ7DczYfL+sYINA+FllEZAXHkQVsUjoAXs73r4KOB6UtnWCDcVBTl8wLL72YyUEy1jWT+b/oH+2DDH41oTmwp0eXlB0kNjufMNmH0hKFkDwYNMoAfoRKTAI0hizA/iLPU2vCzkpbcApU73u+4/k4lgqezj1yqowHLzK5ut1ZjhRE5jDFavcKLoH6QWexsszYcw8hSqFYTk1VHJS0b/H31yzODheDH/voy0KylvQ3wtKz0R9jsMeJzrTNIc8jN0I7CKeM3EzFKXVeoeKwGixFb4v5LU0rKHqbfAA4TvelIXtpcYdA3MG+HD7sAeLZ9Nbd6fH0Ia8h3xrbQsrw6ae9q0TR+A3fiytxEuduT8qmzfw8Tq4lQhcgI2eOrg7dFDptBgqQKHF059RzZFlGvHq2zyt5f1nAPm0syuiOUlcrTZrHrv1Fode3AJRQJZ/hX+OxbmCkaqa3GZuu/02oVFAuia5g1EuUtVpNMbqSPodBOVZPvnXuMHQbaEM7IqtKbDHCiVrAvXsEp1LNJDhiObfkawqA7xegq5ltewpNJhMw+/RpXcYiG7vl9EqaS3GiWF1K2mDm87mB/1nHK3Gq6/tiw6MKcnCcPq5hDe6oGn48Aa1KiOR2o59kRtZ/NgKFMqCmZ9dY+4d9YIRQcW2Kw8yCpvUherAaIFqAa1ig2Rsa2gpKcCaI8+b8kVALPR4JRecIbXZUh0kO3EiAqLQzUUTrnZxKhTGqLQjOI+kjzc/sfZ8CxlIX3/gEJTx+IR2ASLtcYm1HfLg0Wp/BPoUGJ6LFA4xunBUC53rnC8UWNVpiFn58p5JJLNQ4XuXiKnontnJCWYQUFzot/KClnPaWJ4xK3KZ3BvQNneES/LembeU3eVjNxATWR/7M2MwnFV+zDWA4tDO5sY93YYa0sZavZdm28QW5lHfJdyzlyUwV5nHY3O1QaOcNXJWHzJZz0y9+kcohIWsco+pHGxSsVKLqrTXHj4SMRtsafYoVLyh5br3gCtr8uWOuVPOpfrJ7bWpTz6VLriAEbORSgKWj5F6tceotobBN/lJQqQ=';const _IH='87a7224edfed13860112a5e61714d25ef93aec242f3073690f537bdd82d77ff5';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
