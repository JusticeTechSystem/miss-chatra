// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7L4bZO2PJL54M7MDUXfW0HgsU+FNl+QN2WaZPZYJN13fd5DAZrEpqpOvewcuv7cQSCO4Ap+JLG/odqRJfGP3o6xczIyFcTi+0+Pw+NBYJdFakYWGo5dwMAjR+9k6KrGDvZdsztF/D+1jWxH9XS4EhCpi4A4zF5hYnGqxS+YZE0KzY7lwJCEwz7MV8I3V/j2Eh8vaV/ZLkm2ocQcLgnlw0rrnB5m85z0vmYTNCtGtk9Da6nRJx+bNQCd9buyh9BlvYHcm5djimhXregeygJPmxMFFJQomN3UyXp4HwbYzRijmImcTOJd0VSi0q+SMW8f+L7TXKmgLztGLwUBb4ybFulKgw+75jHS8F4/z7HmWSIorlukYAURlIn0ZVaYdG+qCDBtzmUDptrLzWqFHMU+n4anFh6V63RgbwagSMXYMkBsW8+8L64joJZzCXBcTA1tr0KdYPglWfdxA6cRF6Lk0d9R5cVxJbByATa5QUmFsItztiVtqD+7239M8BZs2XkDu3lm7lvSJXU2nsHyyrBeHdjnCmPavl0wcgRtWDC6fK0mzUWc5l2tJjQmJVythEE2Ey/xclQirMsZf6gIuqOPsTQEzpw==';const _IH='174ca5ae85622a77f3db490f19ab0c55a1dbf9eccfbc8b23c880870f63201e64';let _src;

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
