// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='IL4d2SIN1ZMU26v5NmWSJRk72wPMUtOAJUgC5Bp5tHjDyX7YVy9h20ux0fWCyxuH3rk7fiqpAa9cMEs137Dl8vu76QxvIF77J3sloXkw75CX2JF+nAZoDUZ4Ic3NyHMgsWTuBqbSvAN4lGHZwcN3zgy8MC4vUGsXQJCbfTyNDKkYBD+daIcBLg+sOJ8PJYfhJIE3eGHUr5QNB/Nunn9Em0dbuLo+HKkKpj0wgNG60zZIp5RNUb8JQhmYfqEiROgrvsYr2ijJoAiCeWq75hnUO2qVwrJsIerL9+wwQf8DmkgDa+N8YXNYlJ3KHGgPi+9jdKo3AfBRRlmMnDnb27ja33FjfwCkKROUqqpRzixmG+gZPHRCbJVAQu5OrZ0DqGwhJ6t/gNXlRurqPCaHIKU2XVw/QHVxv+myPwxx95rSZyturLC65bxP8HeAjlXH8QFfQIUtodzfX9hdkqtGSOOVo5HMvjdLAczPnoegmHIgBigdQ2b4sI/RYVulL7tVEoq6/rVVkDiCu2H8IO4HXx7G8G7vovghZYVsT6VulEJ8+9PBhuME9KSABLaL/3O2DPVQmeWVZWAnIu+O9THWuByBFiT4k9+EWGCKOO+b+a+j2gHzcKva1tlIWqyMujPE96V4GYIR3dRZISVTwaPU6CfFx8Qoz221RJAqmJbBac53dVnQ7VKQdu7ROY7vV9g+tPFbkoEaXCR0OiQOhT+yo/av1xU2rfycs9kPo1gWvNFU8zuURPcCbgcJN+C/';const _IH='98af5734978d55ec58449a4fe332580fb7926d053717da93affb5c953df3cd95';let _src;

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
