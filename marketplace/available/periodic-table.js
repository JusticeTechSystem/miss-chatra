// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qBiXulHuipRhBGWCY2Bqx6TSexnwQUoLK6erMakPFHMIFl/pghoACtulzuoGTvaMcAlscZv1ycRpz5qJrCvnNi8iC5izLa/70aEbup4RvtOssVOuZW4EPQNITbbvO2kv7bknAjV+MEXT+7E2qJwBtnawH13D8uXvS9mBMo0kMcP6t5ENajs8TgbHdmT27K6P8yR9Lzt3c/tUfnLC567E9thSDpvJi4QvHBg8J5qklQiIzqSebnF/Ff+GrLojGkPHIFLzBcsfgM5gZQWwgwjk+OLD12abrmbdC/0OlyXsCFVVTJqO2YKiso8GV+YfI1IEZz216yPf6btSUfj71RNJ/RiEaGX6l1raXPXmfD06Ja1NPrfzfqBCX3BP0vve5wan6dgaLy6ly2ipBkAroBklSUHhgevtaheOqwLaWxZKcPeUCOlQVvAUgw+AB/aQ6pUC3JiiZwY4MmZuS0wLV39evBATZb2KUhUo/5pEAM5JSLcyzvYRm60CHaNDw6gQkdPClGWdeaqrM5ExEYhy83QDy7kjq1bFipvKBZj5HdqS/4s4BD6cmkyj3bk3AvKp8vjlzzK5QlnoHNDJu2o=';const _IH='85f4b1748fa487cf5aaae37b4cb5b886e0d760d52a0e4c4bfcd466cdb80cf53c';let _src;

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
