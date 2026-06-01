// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:06 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQxchXnVBVii5jiJVgD9zBT3ADlrwe7Sebx34PYNNekujeMaDIrTZHQKsA2/42B6majhaSJ/PU/DN5uAvdg+T6byVkSEFzhxy/z5afiNrzhKbMt8ccp1mEc8q+kWc4RDJJFZb2DLyAtnNNy1a/gyOn/exESME2Kugi47EnjheuI4QrOcX3vcg3fiA7kezQw+7e865trHIV3937WLSgFaGyt4jgo/riAUaHXUq9q5ajSMaJQ9wst/UP0ToOeiPoAM0EUU3va49/JPwcYjs9+91VeWTYGJQEDrSub3AKbUgWwh7ApUtCcnm2LfkvJOOPRL8JtiAL9xOtT3rAD84Jg7aibpqQHlJvtNp2XIrBXwA+fVrQBTFw+KVFMVpeKFdFkweUhm8DpBUBOz/pmsXZSMmaND8ZDIzTm12VOz2eF+VqqshmBy/JwQ219gfrnfCO4xCQ8she2QSYaYvWQ5eBy/qMdPCokVgcgwiQ+1ldbi9S3A7p64A8qdDCwTQEDcORvaERl08kZt+WCGhPy2YwwoGF6WctRpChP7kWhkGgAjU7QhGfpYj37XWo0TAZEGii+8IhxwTdENyOXFu2o5ZduDCexsKj8/Ky796j62YpwUKrCrgC4oUCnJkxp00sl8xYDD3BHzt+qFBsDvefRY6dxpBZl1713b4ehse+7OGJTibiuKrWuEFjou2MV/BvGT1iDaXFnK5mjTdPswEps8u3INMNSbfuX5IOXEi+xCxKxM6NyB0hYNS/K5CFL9L8+oGG6oY+T2ceQt+0tG3qt5KCAhluvpKTk2EgdR9iY6NCqnEcbHnDR+S8g41WqI7oakfL9DlSQEs6ZPE6mJlgwUdi8pbn/CsFhuOTmjDOJ/AoZffg3F1WgLM2uPbxEi+BEtt4JH3ryCNFHhrOdN2MiHmsRQHbjoDcuItwjGI1+DiZbGciIsqLOZuPJBNZKaAE+bYfKqcNAgOsVoiCFFDvvHF5QvFhWurTsIff++rzjpSDsXFeF85o2tKw59WNY9Ztlolq+6Deyiinairhq4TYlxDa98xI0RtMmIU7bIfpS8EygsrCbN4nlX9sSoUwJXfF6cbUioFxgzAMC25/ZjLBzulIJJCF/UPXpmfBTpVSMLbonwbFpQG3XX7ohoGzbIecaLT2RQGhJGq5aRPTisKvfeLtvM/Xw4GzIIINuRxgfz5hYQct8JGQIq0NBneyDHU1bH6b79qG514sE9P+Ao=';const _IH='ac583870eefd3644533b4f75b6fa82b3c146b15549149cebf33d49b75cc22da7';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
