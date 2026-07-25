// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:44 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT3InLZW/sVqUG3h/nkbQHJekFsiH4LSaesNGcWPk/s9ncs5/eN9EHF3IdC3eat5zL/7ENbLgTU3sd4EvECTvupl47rmK0vfWulp8f1wszrUYj8/kTyDqboqnVIOdPvoO2F0dfXgddOa8T2bbrXbKuZzk7Oxl/2vw28BGZx0rB5m5EI3u3WdcYMYPuBmGprDSDJJrLtZV1Cbp8AanPMQTrwN9gdQy+2Z+DjTdRVj2nUfvNVhPl6hzyNuNMNoOM0wMl4m2vDlPyTcInSYBr/PcJe2EwiTzirizrcqpYpLPNr5Y9DFtOxk0+VQ7/rhtCEdpXdRHM28e7zZEGhc7aYSwf7WCDsRK17ceEjM4V2HVZvpQG1U7GFAkg3dKzXW/n/UxFSRVMd2IL7qKW2X95OaBSG7W7/vH0pCzU7E0OKMyvM+2LVZ0njevfK2Q4nWRIhbRJ+wjSMFJ9wSi4zSKAgSFc7N3dfNuYbKg4Rc5+M01QWtPVCMWu4hrnhHC3zovYcxn5WTw6tNpH1qnYuplvWXjvZT5qnEPEsZSWjy8bRPpOn+6+9D2KODzSgbHzGyw9Qb4wUEj8tLLeKdq6yyWsna4jNmQoedVouPOe5NfH4l5LwubAL5R6030SjGecUHWOC7epqqs8xFj9J8Ip20eAhp69DTypzlr6bb5PfTIwV4Vgw4/6h8wUHIhngOGknxPwMMC1owgH/N0QD2IWoVnpcTmXKrVuPZcMNLfGVEETrxVrThmWzplqoq1JzGJFKIBs6JK3/0C9fgC90r6Vu6hrRFH9/G5iC8td6NF1avdYDKfa2Cl9MEmaifkx2TnlMgAhVOaEp3DVS1hnZQdb1oIXNyInIkNnDOhWBhGzOOIRQmOmfF+kTlH0fmRn6WMttqc3kMpbNt83hsPGhpacTOlMyi7emjlSQ6GBrbsbDi+iIqbpZcGydIf01NySng+PuV535TAOqiZMGqh9D2cJpWWn/m/8L68ZXEeUWDqb8CeZx3ZZhnUDMRez/wQLrT/SAfO3dnZjuRV8cV0dcAIcniAZiGNGsfQTOAn6xfOiCg2L3PEO4Inx6l3ZiDUWWyv+yQyG+fQ303YOeS3hgOw20tXpf4VzpTYAeUKmBGVLHcd+eK3R89nMbn//gZjG6FCSgq0XDCeXYciNroxshO+0wFZwgAv6V6qqvGF19ulgttjCHjAPP2Tfllc1Z09XVr/ga6zy/xlmbl2vLJcgWGU/p5Tkg6EEdKx2tYX1Kouwxl1TWM1ot2wqhPmlkjXp9jW/5KYYNaENd+fIwZws5rlBqcl3TPX6b+rEFz2ZMbZS6tdMKrVxJRXBAlpQPK1h0p5aTNJXV/02fNkHE+rBaHyUJu6ToJjtdexQ0j8Fo0TfRtrgFFDU=';const _IH='75e706d63f61625200bbe586369f982e910a999c925911cd730849adf9bca731';let _src;

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
