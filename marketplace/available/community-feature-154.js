// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:27:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7N+K6XizkTwTGulAU+rQ7wPPy6h5JbK0EW/b4+g+3Z5s4FUxRJ31BHw0r3uZy6w7YmA0jufjHg6GMf0LtJkSEueRxWdvwBR36p1y6uehplro3vQO0MpAZKsekVTdI2EIHXxxRIDQBfdsW08G+xTgc/cCU5d6Ov5e9T5GIe/bm3mpLVGI+PRcj+7aSZQTFwex4Mv9SH20PC4CsihW7Mesd6yb6ZfH3GWQA0QBSBQ9OTydqtezgdMiCz+bTmg7/JEgQlZAnhYS3YtovnMYdHNpJGEDqIm0d3FHK43iKc7jUdHIYkqfYocwdWYY8aPhLWjPj7EX6Q0YWnVXXoLHwq00QNKSa0j7J9aiX7xOgbn3isEmkisvGefJULPZfeaYnFVy1QYmvDKlPGp3u5L7IcrKnA515h+vC4KslAXqeChT7AQVfF0m3K3hMlVvrsvyj3DyDpCAKfqIqcrWaArAqFktTieUQHBzLy8ddWTrlpum/gIMy5nJ4DOtisdMbQX861vo6hhsKs/nRo+LZ87MBnEha1JWeeMt3xORREeMNtwr5TG/wefZ8yV5OnYrZTKTVbktPsUMNlJqfB7OduiNe8WLiaUJht184aaIoHjhz8jrgzC/fnX13IxLhN0baPSUk9dQwn+nliV0X8S59Q0R7149KVg52ShKEDUeWeR1Ydw7iHCYXYLeyLg61k35Wx7qHDpvGS/GuOPHe6wHnvriPxl5YaUvG9GA1pOPi1wxXzyWf/wLCUEo00A=';const _IH='479939488bb52328a7dc9d30b18dee9474c6125517d2ffa91e3044f23bfe935c';let _src;

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
