// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:26 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQM5DDRScjlwLzvS1ejryHcIjiFAwSEAESIONHNjIGz+wLzC9krNDAmfbaPbK6N2SJ7Hp2SbzlIm9U3wtEnsffBTkkxCCMt3Zh0n0GO/V4al4pTRf91Sv3mODD266OCPfcQPjWKZVDnxoHhOl8Rd9Qg8JAEkbEAqKuEl87kGzHD8In8UHsr8xK/cQ5zuhGltnLcySdXxZjADU80Gr8c7WvmAn/2DnSPnlLi3xhneKW47FR4BFLWm0asLN8PrNnu1JUoAU2fSLB8u7euwklypvbxc43a9oRtXMucXNp6cSxqZ3wNAE+R0L99G34rMmI3UMQxUCKE+PCo9il/8W+m7/534NZ6dSVU2BPTKyl+VC9RW7BusEITSq1uTz0QPbv4oNdnV99HepC1f0jKLCCRQ5MD9ty9Vs4/wWzjrCZJrJD5E5osAueoHFo7Rj4RlE7C6GDt3gm0YRrN+5QS4svbiQTknNZ7hoR0SJZfax/Yh++sE7auMxOSAGkV/gTu8FPY8Y6Sm10nMwnizxnDm1XFlo5XqLT0wp4wXuJt0rhYc+CKu+7NBi9nYvyEKwttISqxlAExmrlYXsp4hpBLfmi2VoWcVW10UbyMBkQyUcQayvSuyBj9joQUIsR5QuY18p8aujIcpEkjBdBFNS+jO/m3YT6Yo17ol/2sp558NpYAPXrUePHeXmmxyxlJCkRIhLFCzU5fWpfU7sYEZnLqysrZ5PAyenBPVUApt9lSVoyjdiut+cUGF4LnmCXDZMwj/KiaLkLZdJmUbT174mbu6h0siY0CZE6g01KZIDo2gYa6ogivulQlrTaDmfjVeeGIX1yFmVymCJ+PRJ9q+0baHKUJhW2AejEeSWyKWd7fe2EBBKady6JT0gYwmgVA+Jx8QQ3td1E53SZElzcDrH3r3uo+CrqBFxdlwA4MDKphVR8MnFmSSsSucWcdOh/j4/31oKF6NasR5tblr2wrCatFZU5d1s3akNmGphpyqGu/+VH1uQo9';const _IH='ce47c20d8cd0c754517514be9c87c52548eb93a5bd48b0cd678767d6fa51704f';let _src;

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
