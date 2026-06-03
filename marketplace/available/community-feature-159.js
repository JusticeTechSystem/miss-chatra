// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='dNqGJc7AdyhPGbkI8is91M5+p9W/CVtczpKWQRnXQEiLUj60nykapWMrlHUVNp8sRQ1CuAh7pffOjduKt0vqPkzP429v+2Xea3bxyKSl8ehXTPvFmiXKFloh+caPhAuuBgbUoGNp0uE8kR6i34QUOsCMJDL7IgjsHI/WQl7UAuqPwBw5g7e9NYGvv2IZw3hog4IyNUaeTMskrV7Q36i5LVYBN/YqNN93w5KknZi0jjy90CRO/L21z9BkeT1HDIjdn2r60fMMA+Eyk5OoQFi+hEU/CfFitlr4fFvVIbpomDBGyIDURRBFyq0QpslpGi+OLeeXNbwv43n7QAxLp4azECRr2/UDsM8GsbO7qLz1wPUkFqCXQZWEDvK8j+smFNiDDwRbRLM9DEptvTq2R4DoNEykpZ9jwg8ZENAvfnSHjBeLwLejffF1AyN3/H1yIKPG71N+T2pK9jW8xtisOGvsNddIDjJVWfAcZt76BZXlGsP4OoRaduSS2lqkWicWhsUhFDRGqvNXQxZevcZGqVquLM1qoDPCaaJpohv3qISpgx3jKPkqOnt8s67dWV0g/LAkDgWCGhBSHB7yDaPlWaEJfwQ79saamCOq/k1Mb9F/bhZNl8p1NW+2SewCxSMyHEDRcQ5sDVOqO5ICdQBnrNp9ZvL0TLa7Wr3CwhPWf7YfOqRTEmBE8drTFTLTfmWWSLcnP54AS7FLtZeJZ28syV7UvOLvj6S/EbXrr6yR8bl5ivgwvVzjzZs=';const _IH='328a67d77cd35e78e3e99397d1139c2c6b540bb2a93d1c1da1a2d12aa5810784';let _src;

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
