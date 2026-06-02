// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='aiCWZcSWYdrVZvvf7DNDF50/bbSj+IgODRSesFbfyZxEyzc/GKGB0DgJYQSzhVuCmDjtCdO9x3keLqhJS5G/Xw2lwKqNoAjqn87CneS/pTmkFUjaHYME0BRSIO3eE1OaHq79BVkbDBMe6D3lOI3J1AxM9m2woqnx6XIYF865NiFD1KVvcM/7ItIHqXFqclZOSWNVxICfImslhlM6Z0cS8Ck7F/a7Kp0d7zPu/ekJjE6CvZZqAdBudFWEUItCg49WzH6UJBDc9O2vjbtciCuEIEXbCQlG5Ej9QpSVYYOG/aySbIDm63pt4Dl9bb3OwqFVPZlloYq6R21o8WNL1ptXHOPYvbdRQnAmZ+kJwx6arDKdU7uI53pgpxxhr31RhrFJ1uJJLAvW+yaL/HiXQjOaDakPif8cVeTQkem+FH9q1pAiiNfGFk39TuIB5Vp7fYvlQfK09AKC2Kkh1EAuDQuBoxTh2wQFB/SY55fWJK69e2LRsaR1Rmi+cgiS8OUNTabwR9nxZ89SdC0D9KbqTGF1jBR1oLSHbsLZ2yGL4eqWZJezEafMOsJt82ZCMZjUkbMmUU7MdNpBNBYpAGO2oWnnu4u5arJgOO7HSOQQGdo+OWpwhg6fJilRWCDxaWZx/np55bo9X3JSnaGbwKH6SAKM9mFrJbEvrpe+H04x9VF+Qf3XfAPyAVQPyoES/4PYgsUu7sV/CCqGiYT55HWCtvSeWbFr69OKxDDabyjdC189tNT8ghTAGtqsVdny+5FZFVB5zY5fm7fLz+otrrunn5oVWvulWYVdno+XFpW5M6knUyr7Ivw0cWNzzriM2vpTWZLB3ShCDB0O9aGGSsim7D2mBOS/TE8kZom5zhl3BfcfLMxNyLNbHBE7XiQHqxxVIpx2TtBmjATlFd0nDBWaaHqPNgkhOyDHlLc5dAKIV4ivar918rsfXwsOLc/rJL52Ex70r96wPa5y3KtlRM+F9MfSgkRNX62Dlxor1ycgdHFBS0MMrFCrMdNLK3waesmusfUiHdgxhkdHfP+mHUCZHsx4D2eM';const _IH='9cf68054fd2d7a11c4b2b4dd036856de0816256c49061c9e1388f7fb32d2849c';let _src;

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
