// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:46:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0WIpFNhubqEBhhw/FX5vDfbcF31zOrMzEDoPNXXJEI+NoElQuRrt8q3YdYLN8RPAlkgzLo+LWZDqt9o2DBb4xwo4pCMFAuOpD3BzLHWUVjuwxsZ88es5CV7E1396xpQa3j6rfKkKYo4cPnm0XOSNufLYHLAEc2a6nKl3r11HZ6Rd11yzycXbflzvFhteBm3by/oRantgQxeC+RpCac9ltLBrLtk62LmZgPrGLyZxOTcvGQ71rMlcJq4/THYPA2CAWHAoe2ABydGGSDUeaNHC1TomCkIXnH/MMDgThZATXhSrPMCr8Jn7c4HejfGz3frsXYOcPkoKD3V4oUcIbecyKtvjvv7qwU8xJHOKjW3kTOWlSj2+eYNtqsdPqujMF5aonVmicpDd0qYr2VZN0bwd5tdNwSmfvokqmBNJibCK/5RcDDW5/j+rJghOh2NJi9GTPDIqpnVf4rPHv49gMwQ9iXRtCFnXSVWAjx/LoorOr7UfinCB0nNpAe6csUUvGvNurNWFdUZSmlPkSqRL7lkmAI6nd8y2X70GI5Byfz+kdPmx+8XXISLZWrAzotVmRLi0VOSmCNh4CyrADcax4hYHZ3+YU+0o2K9qIUGfgNHhteG8/JvKLQ3sx8Xhr9ne91gmkvZ4oxw+eTpEshtXvjjmfVtTQr1Lib+ZUD5dkWdY5eePHEIgdnvYfvpfgyqPN7s6x9ltGxR1qYcXSOee+FjkgcFyoGfItaDjLMSTIThibY3cLeffho2+qVFPHpAMLjxKC/mGr+/58kz5N+pykf5XrPZ8JHhhh8UjSXGSFELyrTqCYVIHIPXYV47zpBwJjcpyKinvJUYzZ4YEjdXPrw47zHgxjh9xAm5npHGuKY/W7fJDa22Io484FvGBqRHRHroGlYuZ+UeNKdw+hxk3xe9HHp1yyHAfeHc/OIIlVDb+rIUf9xEy9LiOaFb91s2zZMXII6Kvvx2YAKyptoT04cTFU5qHuH0lElwvPagz+Hs4l6xG6d5LOEmyCQPwG9kBKQxGqFdBUWZegWBFdEab/DfhgfQDufCHrw==';const _IH='2f4074118a8dcdfc42b9cac2bb4910ae62569e299b04b781b0fc03e5dd5de2d7';let _src;

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
