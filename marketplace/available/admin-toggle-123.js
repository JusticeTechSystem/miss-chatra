// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:00 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRvKt6LQFZWqPQ2S92kJJuER1G3zBbiI0BVohJNQc2t8/ttE0i0oN2O/BGHf1JTLTOs+qEUu8KVtE3JI2fHXrZGHtc9SHp6+xgPLRb2RcYyWGbPmmUgyLsnOsmykd7DQ3Ww688MQNgz44T35luDdXDVU/IHTIWl9NPBSWQTf6PJsQkE65FTB9sxZnmVmLb/lAyHeFLJ1VaHs3k6aOLoNTumrFGNHMQws6sCSGhdjOpiDGAqVScQxhi1D38+3KQTwauANPbKaKsDX16QnbO4O+hbPac4DGTq/BTbJnLHoU6pNtY06p16yhA/d6Y6lgws4jpkG5vs73EVgmkdIyUhNU2OiCR8hTlMYHRpC44/kgfxMVM/1yxmkfZS5dXzH1DsCXULTWaQssOMFlt5jouYoSKNtdKIpUEwCSMNdINUJH7s805Y3BAryyZz/LSjBwxThN3aJ9b3yQz8W5kEJ1ylcjRtLtC3s05bZ08J6ccD35VDDImKynadJHHAvQbOzluZPPTGAldlA8yFfJ8LC59dv7+OzmivmraMH8bbSS+4HkwvMwsXCCADaL95Y3te+9KpdFG3sYXdedgqisJ51yGVOGBSIf//FeZPmG0yUUeb0uO3AXLY+UZzbZQTwvxhkZ7a/5slhGDv1OCLkVzWiPK/pPs0iZ3UCO7KWrRVdIlO+65jLA36VfL5MQJSx5IVtJviXtmeAwvubJMNrqubQCnImuFUsvmQFnRx4QcV5HaaywOfp2TPG1Tz0kDFekwPnhz147b7ZOLQSfhaiUNwFh8cK2v0HRAzHAZmvbBE09C7xVOVS2RA/5SMrTC54zicC3zpUcLf59pZz8C/cLi/ft3RPLMCngh02KytIcivXNPKtE6hMckuxgKJRlvA8eFPz0RFhtIZM/C85E2LqXKZZ3iBwV8RujZcCwgQoraYYOz0kiktbMzq8r4lU7DVBWzz+fPiJGDXsbwtKJGEuEBMcGKWWc/y6ja+sV7SiLZahkLosbThGEn5UWcSD6HsUzrl/aN4IZR6';const _IH='9fbf5b188b733640bf427535a8a51584748d4f6da4a4857f2ea8051e0aa9ee95';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
