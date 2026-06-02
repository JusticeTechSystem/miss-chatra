// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='uMelktFqRu6wt0+LBoTNLrEjMniUQ+YYRY3no6Cfw7R7oXvFpbST0ZL6S2q3I0s7Sa4/qDj4NorGTvHM3jVQK6kb5RJWW3Llt48MoO6aw9oT2BseNMJZwWUeMMghyOxseo5VdMSwcS5CqPaOQixU9IxIMEDr2oLvxWLRGF/gguKr8Wh5Zq3yIwitazhoFCtQ0HsOBC5r7vGkhkmot9c5+AQeyXJxfSluPl0EoEXivcoMTqhy2xerUaL/ML8ldY5kSYslgdbrPTZXeI45Hfc+BX+rMlqTH5fxFvcw41IezHU+MsSMn24yFnVOD9E0WEVZks+v0gh76WkhDw1K+llax+RynFW4lejZccOdzwxi7BOgdYd9jBT6pIXE4SjLEOFFUDZl7pAdcUlL3wLUG6/XhuZUivTtMbfgphT+P982Q6PjCeCBYG36PuAzTqG3Kqs9ungeDi8fwnKSDUsdZPyDm5CcW60VR2lVK4R/N+CSsFpJTuGeRkP5EoVKDhaqqegEBpqhcxM2Vbly5+fg61uP7r9OdfqB9ajfQDbSgYyi82qw0BOEdPhSOl3rzz3dJwMXOfYb+JgE4hJ7BOQMA2NVXJbKvDpU84GuEulAUtFb08mpV4jhW4F132M6Mv5U0MXxc3QTZMhRmwJj+JFCAFLeDTeBPgrq/brgj6zWAy5A073hdQcGB/kAkV/yZ/KNienqZiZsYsVRazVvHO8XiMqvYa4DziAxMc8J';const _IH='2315032fd2bdb19bcac4efbca39ff69fc54e26c63aa673f2aa533d8a2d4c7309';let _src;

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
