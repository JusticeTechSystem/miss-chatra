// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:03:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='rxJbOeS8xJl+PQHgcyXokymp5+PGcGeViIK/3tJ7/xZ7asvjCRhLuSkPxVOIdX/fZufdpJwd5GisW/LQ2s+YcrmGqYxoxkYNOeMneLQnx5ScnCdsu6rJYtZQmPIAObQ2cx2pV/k5qCUUSOvUbEWlPzvYlxYI8mMozEAbzJOirKdOfwRrTGjkMjJVC34U9zcZRiIw7o/+9de6VOfdIC+LYGUHMX2yirxFLA+CTQ8FHAqUdcJqy2uAH7B4i8DBB5FmoNmZxYcdkmGxUm1nZp6+ywAgc4OwECOzLasqtKI1hp/lzkQeej2IgzxURLBY//PoGXRBoyJDB8q21FAJw8vJAgAosQVT1+oXCfWvWs4yhL/JykFvPVq3TMqDNedTqzYIy76Q8MkbtdjBKlVMx486NKBxTJ4AUgGTw5JjaRtB91YbqDPQxE/+H7JHan6TP8y8SQ7PEVOb1doKYynSZHMiqE2FoLkf3x8rLyWjOQvcFTP5WHGahF2qNX1zTLHiVI5n7TL6EWaSuq9WCgm5Tz6ZYPIA+RegDn7YmRxDEVDBIzIJgc931Tyict8v36UMFOEbhJCTHEEz6AZmjAZynNhRSy8WKVtGX9Vi54qWv3L5rffi+vANbkCINws5lBvauqDsQ7urJzfySnUsqspcjcFfUTYKwQAFfLDdeKQERnzzQelwzPIj5cpCjSBAVl4Qo9Fi857pgB58LPIkV+li50pcOnF5V4sYb24O+nYB/K6YDlAMkQPcP0UufmsjgdRxTOh5zaEBvI0L1SS+c2d7kF/juUCLCZnJTiT39rjJ50tKnZsI4NlUnHTY9egFTuy+Fku2AHN83qCf+yE40m/5Aoqbx7azkFkKESoItNjqf1OdLFUsQX5MZdY6HEU8DKJum8aWk7SaJAC07ZTV659dBYAYlLsbS+CJvJPyfmFEaxtmvaJlCBO/j1cFeA==';const _IH='4f9e58b980b97f191fdb757c3137682a97ac84e87ae76a1b2cc6c964c79518d0';let _src;

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
