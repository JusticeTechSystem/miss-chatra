// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4axzcHtPQIsPYbcmPrZ/iiDZ4XqxI3hLNVkgEPetwi6W5X6KgXrs2JJmAYI7KwPNEt9C2iMs4AE5Nzh42kKeEsDKi824W3NdzN5CR3Nzd9/FddF6WFrN+t3oUnUg7eagaMVZNxH8BF6cV3u4SbnYCrTCjDiMI0frqMn7FXw8K4oN6u7tS4IscskBm211JaPztBM0Mb4DfH/zf99Jg6VR+7Z7jfqjqpUlBPvGdXEtpg6XMqUQGkFN0u5N8owxbhmDEqsa8zRllI0IwH9uW7uZ6m/VucfL0vJnQL+8eITUxzQD6NNnjHcO6Neskjv6SIasqLYiEqu7wHx1kmVPWuajcJ88uP02Wr7snsC3IuA72+EIIwakaQ41k1x5lmCQu6xy2eMO+LB36VbQF2vdJSseiWnbn6JyV70U23OwPrOZJO9XrezUPpHJwvx3wjnxj+MJOgxLWzuJ9DnZPlm+4n+Wg752JnvHCX51rIJG9YJmjx6yx/W4hchqlabJc4XO93W3CX7hDYHTIWS1QFPyx2aEKSFA5Xdm5Db/3E199l4l6+wmUg4s8sCYHLd6BwxVpZnRSg/woAccQMo53tVRAdrY/G14I0i8BpB2go/yWESUIJ0aC0V8QDaPGiS5LjBTdb63X3ViKgyVyARhx8c8lLJTDO0kF0voZ6yiMLx+dGpsXNxw4xo5icuTeiJZJ53HEJ6CCnoybsLSUr0XWAJUz5/fnEFKaDlA1nFWPVhxuqvsROYPSUNIWmUIP3O8ulBLpPxeR8As4WmH/qUDj21Zr3pD2Q4dX6jAzDvA3rTRpQ94y+s+hViteSzrFc5ZJJr09GbkDLNLtkQvb50dXxjsIGsHRvhxRcoNwA303C5TFxP0jECmn9vaIVby8ShXSZMuGvKIzELv49mkWR2eOz1O0X+r4gLop9wn7HZsCfi9dLTNd0E1zbTEMJk5/vN06KvfnFKkb2EoKlg/YW+7MtU4WnLbTz6qyWJ/DZOMoVmN80oS5UwB0FRjOzQ57ln9fLu2lrc4WpY4rD7J50+JAyzccxNyGZ743vmpdUN6haV59xPVuUedCMhviAlCf1a3BjLXyG4GvC7fmht46SaYA8Mel/kBPl8RCV3YKFNm/gJ71WE8letpWZds04D4EVb7dFfg4+MgD7HiHMaytdGbJsniTkFG7Uv3TL0VXghx5DPmR6thwcVnvaEhAs53Qyw0eLWh5Wo8rY/x3mEvGaf4zZ7EageY7csxbw2aR2fz6zz084Jd20nHg0VaIFfLlXfr/5Fn2sFY5HxNSEtoEhFsammH+FWNue2ZIZUFtMZL9msUdG6bPqA/XCH5QmRSkAmuLIFLqbpEZcRchVPVd9VdAJmgclKS9Axh9LcBNJgugIljMp1EXzeu9TYpv6QqbQ==';const _IH='66af5aea9749000e32a03baa1da9f7880d1aef682ad295764833fa6041d6041a';let _src;

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
