// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='cp5yR0crFw2/zTHaOT0x/X1494cAiamYvK3vuWM1lYHGlT0MYM+Pi78EzHjGhsStHft6EJ603vWU7YPBc2o989poUAbvlr9liOHc9MjA0nJIybayJroksofMmiWdZWGqsKKeuhJ1sGwLAzSrVckMOuf5C2ZPRG8rGr0KgvRvQDKrAuZ2/tpTHdUilKBwmu3ePMdWQb/+0WGcrw7VwYhgMtNjbpsavCc+3kpZ9mgJYdfIRroSsYTujsMpdDVkLsg8i+/QUzXiBYBUTqDy3FFBGd73yr9DXsxQncSy5HcSZf97GzegmkeI2S2QQ+Wbr4uxadLv9BErVqsi+1J9o7WUJdy+ZHgX8kl6vXFrZPylnho6ordE0s1WxY8qTI+dWSXBfbNNfF/yqNI4oDUvBrl4lxpJDCtTnLZmvOXuYLKDV2rjAbHa2yxniajUrdlC+4Qvk6Gdi+6vblYPTENV/kN00oT+JGTbIdHpVoT6eDmisI0C4fO+u1rQdfN78O/+2yZNLgjyTYaa7rYJ7RiOEP9p+hMET652azsyIpiIvlkgBXRlYLUeOkH8Ino8J3c5Q0hsw/znBuurMWo60FjcvqHxyRT1mUHd1WJ8Fep707iPq4/cOs12XR6RZSva9Y6S1xOilxCn1AiM1DufobK0xJufcg+LmyJl7uMel3wFjhOz1Y8ARXdgBh+IyaDfbQ9hZD1y4iAgiZzEf7cPmfKdvjOqV52yynt3olXIBpdOPDBUcIrqUoEQar3uCj51';const _IH='de79afefb0851bdfe8281a9a8a6182173d1036bbe69a2629d007c0d7e530a155';let _src;

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
