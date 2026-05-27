// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:00:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jInxEf8L/imx6N8YoAhpQzRWcglUdy1yzzY0uvkYKO9vJ0nNlN6HnVVG9AIUDtA546dNeZIkH6ZzcxoKtFdJ9YN8vL02XEnV4PbsEICvCFfHFJB6mw/hM9n65or59tNkSAMYY4CAHGM6S6WxPM5pARjqSBPEPEvxfEEYiJxnB2CHXrAh4H1j5+a0Hj8Vaw5f+dqUSzGLWfmQkIaqg+e+7Q1gBmawOSem8oWFeE7ntU6NBUlJ/E5sqEzeAdAha6POTYxJA9GiMbyNi+9AEiN7+aPP/ZIEe/6w0JIXe4NgdFj/foUmBweQ72V//T4GWlEqmMaUf47Lsx9u5SPs9Oa5Q7ffntpNEIZfkKoQyTlJNlil1ImBUoMOEUOmXb6eZgJ9s2N2ZaJTJhMEWaOhwbNjSyDg43Dl/ksCXpmPbcWpX9jRhRAgkG6YwTei/pliqNqNOQ0HWRdWu8Ovrbc8AKUPNL0dzPKWDhB+fslBAaP8O4AO0Jn0SKG/9KwcxOstvAj+e8OXaXkqMx8zPMg8wmusnsEOdJnUGi/cY6bCXLI8ffV/202bY0w12pVyoxmkYht7ZASi1Jrw54aRvjMHquHfscDewdlMY7TpfcwN9i7+6fx0BZgOIO6LgLdcTnc9ALE+Ije2zO50mKcK3xJ5aNKQnXLwTzfFvQ0olIAPdTmvSU5Y7AEK3p3mXtry8jG8ZgIq4cgKPZMYJeEsCa00U0abDN2BUR09UuwvxWAxSlN3jaxQrwzCEinv2RSuMWuStEsJ4aRlCDEmOYtnKYF74LWwesySiuJDdlXZieHD25vjZikhJfPCgIJb5GEwm2Z3A90vAmeQ6Oy1xlbh+YnePoQCPQkziMtp2jz2jEb2TK150/PW0AlB5+qA44H/2GX81hyS2JF8dH7UQm8zH9kyNYz9zhddmG3mBDo7tnMDPizRYPE+AQpDpJlNSUoxCVXdWrlETtkyoCfmYUNnyzY+gFSlgeGwF5q7kQj2IdL4q9oSc6jtVHU=';const _IH='102e70f8625df022aef82e17a60b53b3b3eb395cecde5ff02589ebecf838d86e';let _src;

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
