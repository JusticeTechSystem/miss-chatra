// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:38 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQK2yFboiYcJfcFC/chjLOZYeoe8pmte+PQ59giODj13Y3MBlKI82E43aAdZ83Fg+uDDWLoFPRF+T56mFg/qUCiz5KMBUPauHI+hw8jgLrvlUhXX0rPZCT2SA2LOVXN26dMPb0q3HubMfIIucmgSRa8ss0zzvSIb8R79D75z/kskKt2Kbkj8DWx0qxcZm5QNdYDmvDqYXDKTakeJUZZ2ELESPXCLjZ0Oh+3710fLiPny04aJ4GL5kYzKvZ+P3p90ieGCx+hikzHmmFuD7uzsvsgKrrJTZlPe/pVyCS6KbuD6kG/n++0DL6MTyHfmZxXLmgefY56KKzna8cGGL3Rhgbm+tiKZwu/V8RuZETItdPmfCRFs38vNjwhLhWJWB/ZzVsc52MvIqigLPjutB0XqJFpIS37AtujpVKm6wntbnjYgLO9TPBWYdw4TkrILqyubfPQm8gUV48/5d9h7bmY7x3/VyxkwlcOdwrcRwAzZs0IUJMwXn4SsbYcbnUilhcfJNZXLJDx8sNZngaI9LEzkwm/sPgpPT6lu98pxMXkxrUo1cCGPWXfjmHzTk0b30mIOJi9WIiswTm51OrTmhiatDzKIh/ChxSSnj9kLzGxkKh6mHh8wZdfXyA3A+BlxV46oFKCbooC3Moa3YEhmZtAK6/gwkpZkPUAYsDyK5Pgci+xmYkB74XKaXogjCsGkbalsz5JLkRHdIV9bHnGW3CYWEkH9Ul7U/KaEPrfudo/3q3kGJfq06w1JkeH6yTHCmZjHsjtaXZxMUuYxFeuUfX4gRdK5n/XUjfbb26Oo1rhwwLJ+5Zb2ncnU6oP+t/RFzd9X3Co8RnUvAhonJlCZQiWUCrWg6ZBLcZV1V/NoBvieoEbDog1Xl1PF2b1EtD76moWIDdGHBCcFsByvVFhe9keq4baeGR8cMFMQ4zdGWfbtDjKWtdPTzkCoXxLG4hoj711XzhIfa81v7biiz9o4A0wO4NTwtbKrNucXK9RMGgQTCFnMi26V+zaf5XzyjzK3pWkczPdvHOqm2GPH9hFJyjX2raSzb0IP45NdihfJ5kZmR7eAkgQP6jxx4nqVRBSo4ZnpZT1rQ5/O8Q+dii5v7F6cW+L8PmVt9JUedFm8qabikNyG2m22NMIiJGmQBDc';const _IH='2dffb7a600191a5130ab5b05b0c912c3c601a53d0ce301de1b146491e28f5aaf';let _src;

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
