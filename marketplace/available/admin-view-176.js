// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='J8JbOmmll/XODsqa8xMN/QvCRg6jNC4Djwc8X70dYOoxc2iLf57E59BZCLs5fh4GdUDY2rjveMuFKkYbz+1khF2Gi6waSi2ZxRFsOTsckZYhw2JOaXUPZAXYtr+b93CDdgLjNcyPVQahXon8A8AQJthAeB/1L7R7wMt56gZs7rp9Li9qVzdwMvmYFNVlAbX8UH8xJLhohsnsaJ4V+ozMmmZ8yKUncWw59zXlMT2ydT5lVagtIzQ/5WZJ7tGit7m5dpl8ypenfACZQaxC4BqRIDjvC1Bcg1QFpylxxbRXwON1ofSiOROttY1nDiA37/PIlRe1xBJwmXrAL0U2sgKuMoeBTWzwEQIEvrFkh+xT8o95M0VIj4MHwzijdIfMlQ0CJY+XYG9MR6XSISv66iaSPQo//W6M4yUyJ9lV1O0FJiaEEBcCetoyrvrOTV1AjnXfE3vEPTrtWk9KrF8ni+06I4FJrsB3hWaMw7FCUSc8Hl8kRdlVw2zCDZCeP11srcoT6olLigtqZkR4c3KoA9LY/7s5i7kKpzWjbc1QRQgJbJkGQ8735xofBRnva3sZ8e2QmlO/MtFZfDVgokFg1sQFD5m3Ui/hdAKYySzMPVIl19g42zF9ZoAqjTG7mXpCCXLSSGyTC04Pkn9QCBIKA/bqvVckXLMupsXYeD0mJ1AZfnBPvnFvmXZQE7Ej866ivwCJpKhufVdnWM+D96E1gmQWxRuZmq/cSmT8wclRHiAXib+01NqAhmrGlY+1CCavdOomtPTEAvHPiQ6rM4P1uyYCSanJGy0is0E5QewUOxFlAi8UHmrSMbrotZ5hwjS4RUp/Y7zdVVxFZVQTxhbkwooEgEgyuuVLkE0Fn6nS+SqtOWoWUFyqcVjXCudKPLPb4A2M7zfKRS/Ycpyz5uQu2wn0dyVtlY+IuR8slTXVR1K3b+HvMyfp1yRsiwOMNncDreHEefERfz6l49KySZth3vTlVORjfEiWWr3SEykBaR1+RwNm5S4=';const _IH='00e5a1e2c3481068b649ec8df6eb33b42de66f220f2305c930975dd73b97d76a';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
