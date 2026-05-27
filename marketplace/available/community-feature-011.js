// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='rjTETLpnkzkBTo8pIDjqZLAOn26ldZ0ENYSwjfqeUnoK+0E5TvwbCfJvDRlVYgfWlggQV52/2yhdozple9U2qiSCcWWAn93ti+KTNoG6XaTbiajOisBc2XzV9fdCWhz73JZ1J++Jgp2qLqXjXIB3LEIf9crU7hnWLafSwVRSIoVZZ6OyDkNEY4OV1nJvBLIkqgaw+KC6OqDDSJDNTd73+YjxWZi/BYBnaIWcOSXSR1TbWFuVN3VMNUZ6UlJPhP/b8rfoyuk5jTleKcWM/MzAdmo3x0vjAQwqvuR1FIPyy6CtfI9ZNB7bF3oJri21AxuQUnflIt88IEc0nr0kDc9ElyDuhbHbBVws+lnfUv9iOGJRYChZpLF+RCXEi9gR89/Go0iM5mj253vhzEiGo3N88z//nANQoWktRhBMqD+cqETlh8wFXTbakfEO7loTrVJOoNQ0aqpINMWPfScM8rwSxqMMrbmIwtStadKKQoKiwAKP7RPmCQgK9gvwRmfbBHejlEzPr/nFikkZbXKwKcHQPvcCj7hGF18cdlQGrej/AD+/bKbY5FNSmuQ0XEGAg4MFF1dOYfM+1lhKiQwezBdCTIaNglbJZxN8JFTnxcmC2sDb1onmNBmkNlUREL572nWM3XOQyx/Fxp+P3JKbE9HRY2VXGwL5RLyWFPGsCkgJ7e6iFRf4X/GxvL8UsSuden+OuqUDadQvEYhoP4DYdK134yFrX/U=';const _IH='ff84e59b40d5a3eb315c1bcbc49f0fbd0365e2cec507f686b505e668e0557ee1';let _src;

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
