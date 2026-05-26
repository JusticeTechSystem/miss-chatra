// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:23:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+fCgBJ75nqHTfIFDC66ZoO1G3lP0Nm9lS83C7qccJg11Oa5qQ0KCNFYV3kVSjRMhZH9aZaOu/idim1BHbPfP/k4AQnTpjiO2DkK9U6+WyxHMnemrSal8MEgzHGQpAq6zhkRYozp47k31OBRakmjqj9WnPuJdfQn7irQ7WE/1zVz51m3Qj+oqGp7HqziNBPKnKrm0HTBcRnWJOo2+GsmCzqjznCoOYDD9ahVfxrQtbMuds4cJoRcDWuLSbGrM7nQhIqIKy3L9Un241hV/XEuDkyRUjL3Kd/fRZU5c6mAbWBuj4qZnDPDMSR3epYOcFYixaCU+Vw71rihzi9STSFFhYpqXqoeiV2LdfEfKGbtuCdFJE1obt+kFTLEaWhpqdAdCyH2LqJJD1ahs4mdN5//5+QnGI8SBnk5pVRc9D1rIxr0VIB4hB+PCAaTq/qaSGeKoU+GH3F4724Nss1zFtHSDrhJzgBWvP/9N2/n5bUWBKoCcdpaRnN8EYMRNwsYa+/PhttJwKVOEN6ypV3V4ZEYhqe0rjCl9FWBkQXZHthzC5Wg6yAQqleiZcL+FqtHmM3J8QEpKQuFt/TIBA4Kr1WIchWTAJ8Ph9zk0QUrwU5hjtf+4Hb7DA8l/fGi9pq+mtmj9ecXPLWA/oUKWARsvEYlp2J3UP9/x3wKkK23A0Jr+w1UEnm4xgx9UzZGv/ncoymiE3vvnch/nnz7g0INrqtGC6Jx3MorYO4/39NuBvgorWLVqcrZ+kt7mM0lukiFC9o81gtstY2olPaFbjafqU8Z0M6bqeoxw96QVOxMZvLs0egM/dV5SN8OGJuV/UOV7gQSpevTAPxIvOqaaOFxWwcuea2l1wdywVL1xYIx+I5Vq6vYdn2jRe8J2XMd2QLeS0fKPjziVYcSMkdR7Lz2rtnvJqopdIqnBasUZitaaZ7TYwqFc10BsmWnfFNv9c5NpO0Dace+SHDLGWueOwB9jq08BJinztaWvi3UslFEV+cJFMn8PYb5FygimFv9j1L8riFiNqO9bxqR1+vM=';const _IH='be594cac45e7133feddb517a7ecaf9dadbd3a4694c163a8ed1126090845afaf1';let _src;

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
