// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='I0ogLXVWm84yLOICvZrEyyXnyj+dM1A/WWKJD2+POmlEp0IhKLU2Xf+1B2FMYrhfLdXmpXY/oFEC3rbn37+HPyB7ZZ00Xlbmt5k47QB9lhEN33yOGL1zsG/HFqBzTxI0fxqxMcoL3SWNHlCGoDS5iTNBF9/NI20Ax5iN1y1eQFPa7DGNJReQbRB/jrZfhrwx2dBIQaRSO3Wl9AUJMgugFYg27JY0BBjTPhTkYwHvyviLr/u4sU9+y+UY6gPGklk4x8zIx4SkouHN22YtoeIXXjG2A4WfHcwPDxEYnjcGipn8IroOzaf5TDHTp8VjNhlXaK1VL3o0SDodNTd7/DkgreCtj816iuHhP0XU5SAsuGXThqNljXttKiTaatD0evRQ/0aBQQ88gEU2i8LHdoIbh/jUGZACTm+umdUqQnqjcuTFbgYZfT0ypI7CkKxbXfIQAt+f6DtgtyEAGi8eMdPJysn2u3MV88/ZqcnDvRYruk7Xvh3QUUxJY/rlSBSPGCsdfaW1u8t0osJgE/tiSTduJR1OH1vi+f+Wz4A3uaMkJ7q+LMOd49xlDzMhjNMpO8i9aCWZA+IfCvlglzooHkpX0/HWQLM0pzOgJKSkuTbaN2LCRa70/LheHbE6CmBAFWjfmjGkXUJzYZiGDE+Cok6e5sDJBZnleARUcbJMUcI+iAsks0V4dCfhrg/nhlC6hE0mkGYQ+FY+USXVDYE5qe4LaDgl+Qa80tezL9hfVuwA4raRKea6TQpT78AUAqSskOKq/q4p/X+ALog9Om3+S+DQNw4cQBrtdILRIqgAc1p9GS6PrGlUEg3rVbqAOotXhMT7TK8FhKW0iPceeke8K/IqLUIkdnN1sOIl/H8iwydQDYTkZLaAbDjgKXr++Y56D36EFYMaSNMhPVgDTkU69prr+NBt81eYaTWIKAW8gsX/B16YF+Tt8cQ9iEwVTYDDGzmwz6t3MLdbag9e+RdZA4a6c3wX3ft7Dyq/NvJ3uK53W4Wp1ksD9fqG9RdeTXwqi+FuSwC1u1Xpf+ibKhMYUakC+1DS95Q3NjoZ8P6oml0FeZ1bEb2h7XSV6JNT0S156eiKPk7yYZ6iLq7496IylvdBtUyIxyd+/857meqGcictWF7N+s9Or6bDwOLq7jDuVD7/t4biBu6eHo+qvKt1jN1Cqy9SpZ0Czlcc7Kx5oCVXqjPmtfO4I9laSZEY2Jgxzz7NsbwFeGoJ0zPvvIw5/JEWhcm757Y/z5l1t0pk/DQ3QSPni7NBsOrjcmvqOZzB3GyFL+KHVNkwxpaF9/GvtqizNMYk4qnSsuPVBns5TNXqbvDiChlb309k/stxf6kwBsTshZyIq98CQzNZNn89Uqv/yyGe5uctUjN1/ppB1O9aRkc+ABGjJxtEsfgGFu1k';const _IH='f4ccb0cf763a23ae6b09208944bbd5978a7a615db7b4ace51365c887b5128e63';let _src;

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
