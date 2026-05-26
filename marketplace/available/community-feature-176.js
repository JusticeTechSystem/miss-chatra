// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='DWkAQsU5WA1USXGqdP9aloGlyVjER76NrW9UEhLbnd5oGn1bKyCSWJsOctMAvSGkzU456JxfJXVCo4iJO9N+cokop3ioC/pY3iPY83AzjWOD4OmiJt4b0wde4zLnnusuheQ2g3O4FLx7FaEOMabQPORe9MX96Ml4vz0RmoLC4GQX+vFg8TNzxdzOcB6ttAeyPA/HGqdpItLm+uu6uKTJnXr+CnPbrQ6gjSFg4BVqdrVmyvt0h8zUwMjax3yn0KTvcjObdhizXCMTTnfdO4fIM16hYptsjUcJDaQUzaGo9sKH3q1bIXwleF1bvlD5ejU0uI2j8a9uBpoUCFLGhuuWFRZbjR9PX9gugYex36DCymrjqdwW/WTsXwMdkecg2qsi4bDVey3nTOhP+k8VAGep/eps+1YTop3VOTkIpdlGrihMfiadi4d5vj4lGNqjDAKs/Q+OyWotG68hjJZUG7Bffb0tDSVZmSBrX5hM55u7x5uli8s9tGLBcBbU0IPTesGimQT2CeQZyJmLggNdWQFKkbzhbOlukdZCF53bDDFhUA7M3iiSUpoFfUTruForjvAjTc7kkkvxoP9xhPj9LLlFFGzESPdMZE87Hf7y03o7y55AR0KAY/a9KCTUneIbHZZj1wqrtRaIvm7dhJ67JBFhwR9h14AMwVKUbglglDrFBmUg5CJGY+DqGzYBiJpT5EwmlSlpEt6FZEq85DLBtMO1bEUAqbvoRRE0';const _IH='a0b96bca1886fa324a7e1f64e170f63232ab5552345808fd57950594596e0ed2';let _src;

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
