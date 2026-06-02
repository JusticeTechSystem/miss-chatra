// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='QlmlFEDvIDeMlC1jzmS3k0vQLBRywV+G/n5z9e/Ri0tVsR0qf5ULJqarGvfb978+9lSPOLw/xe3OC+M655X0QcHZS67FsstCES+l7e35I8sAE0UqvpfLXZsG7eh8TV0+pZ0LXbMKS52un1EQvXcx0XoGaenVtlaJqPaGxZhESRuME/cVdjhEi33wodnQSYDR8+ML4n3qBbeFH/644bytNOjC4fYmlpfIInkEKGUWvIUIVgHt9zzPl0eJGsWPLjtc2af3DRJJouZCBVolzbbyq+JGKXBGHTkHhZV7gql+MUhl26Y46KZveJ4V/feS2jS2CrGAM9NFn/Ap7zjJFvLU/P66hpTJcRK8WyXAHmvQJpXCspE+1KFJUegd6O+xqitFWcA2LY5B/N8QYSDwPCpj4S9X7KltqKmynITti8lSNW+iWO8aMB+V0YOOa1R7Z2ajO+f4uJF1pi+UABxNKnCKKWL6OG6a7tSxdfsFoQjb3LAHqwI3EJfsZBMmZMhKMRL2neF4jUuimhFb301JLMAlbtvChDeGx1iSunaysIAk4HT64SPN8Hzbu1xSP6Zyer+0EIA3ZTCFH/zr2rfWWL1Sehb3y/Y1Sj9Cm1poIrMG/LVPNW6CE99Hqj0jxnxWcMm3EwWOc0s3AdVZZXnlNU+zZaIJpYuv8bVTTJoczViNDzZf9G6Dx/BKysbLPVrFJhTwg8A5zfJLLJyCB8xePsSb8/FTOEtAIDXkddxhRDtjbMrqQfCdEIULAGIT';const _IH='a7d55c88b4b806ac09601fe2767984e2f027d3b124d04ddfdc22918cbf960367';let _src;

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
