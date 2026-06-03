// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ftANG/LInUR7UGUDwXLxHkURxJ+bKiW7Fiph33molkNyL4QIeXBU4kVeOCmd0Q04IdBXkvc2t2bkTh0VgJY/O2PyDPnrSDmekciScc1MzqzhToYclOivl0+2K9ur2LAWkHfHEQXNtPn4914/JyoshCpaD2omfbyTXEPV2RDJOZyoGHWDu1YNYnKuDT53CzQZZJvha3L7f64LOSAsI17vQxKOX0lsXK2RRotKsbTehHjGbu5/qtWkgqlFjjL4KnedO/qWQpAzgBfOd9ep/3/R9INeSSvSqMzy1EracHjhaVb7fycflZwZmoAdqssfi/s9kQydYt0N8SRKmDSvZzq/QYYRfJVtPC42Y8ltESIKYEMe8ZpMrOHIMtFRJHiNkcxxBE10M4HfGQp03sKJn90i6YyWN5eWsvr1I3KGeIUA8od4nte3K5LcetdV4jdUwijFK5eYfE3FyICXdGwd8xU9goZGhe8au6c7DdhjA/PbSWWtJ/M3T5VMgHPDObhbSKQoyZOM5bvcoifHcyY+qORvAaALkzNcygykzIqQnF99CmsQkKq5w6CRH+As8DMZtBIdkpWzBH4uis6uKFtK+lCShGYAawPPu87gyeItWsJQeSbPA9D7ZG4e32m3eMQbgYb0mELaoDBxdkP/u98VEFa7x/7qeZjrTsapTRO4VrjwywAbHHohGyRNAX8nlRPOnIFi7O6rjTKTHb5DUlyvfMdn/7h8n8MdhDiwKTTAtiQoFkKKWMDtEB4=';const _IH='eb5d2e84ed3195271075f12235a1865a1421c36566c09deee8a5ce72a80394f9';let _src;

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
