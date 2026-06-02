// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='PqzwXyv2qAA5EN4SaHZestMqqeE9n/QdRKOBQAxe9wCCDz4CSJl8H2WPVezJLDnU/itahLF/MqORSM8EJ56gUJHxevk2SdfQjtS6BucaBBauuEbzvALZbCRtcU2AWY5IMsNm0fS+2dC4aYljRGVRkt5IW29uUYc98drvz8KAVyH/O7oO61LMBM2NeCk8AjgxlnhqJcI06KQwyzR9KRkPsWM7V0MPRiOwbCizTD1B4PluDL1G45gePizJeBWUhqQd3alzG3i0LvsmVFWpmkMiPKgPXLqKpGYzMeagYZc0/7/AabZwV6LulgrTS4kiGFXj2T17KUHlyxwOM29SvZZ0yMb80CHigxrE/Zt8+N7u2Jo8Jj2K/Ye2aZezu9HO1lQvROmeu/AGwVVoRooInAC+ffizEF9yWY7528JJZmGDxqUpFKFOMnrd19kPlbp4HZD2I/XtHyIqG/pb0X+NOA2NjZBUHBoGvbXLGcGX+ePOX9BpHoAi3zMoJYbTjoeSWU/9XAnLU6j6g/tAo2FjS0QAVXp2pgCGGPvr99uqVYTEzPvdovi/uNn3bxSQygpP42rygIoN6BLUrI6U7M4RzwE=';const _IH='f4ab09ab056718eefd0f35bb64be9a647af6a001c39cd9cee5c584450ac339b4';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
