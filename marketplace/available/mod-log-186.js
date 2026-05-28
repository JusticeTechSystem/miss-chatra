// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='glVSoR6oPpbVagpazcsSlAYv+1POsN6VoZTKn3n0Z7Oh9vfjtykbvMlyGSyeaQ93AEBNT2+iQkoUVb5DKlWrQW7WonUADihPCd0IxG+E94yUPhAQ+evrAmp6zw9p//wqCLV+P2mGjaqnB4CiJMednzMIKYR8kwSFH13meuKhojpgqhnjP3mNtxYLrp0FUdtMn2hwIa8NgXeyowJfB2p03GdzP+oRqYw+TIrSUs1lSRsncrCRLX5+WOieUw51Ph1x1JzQvO57jyvfIPVAyt5aZwLGi7hntNo5fpuEZBO4I8nNqrqeO6u/bf+24uX2Ixyq3/JKqWW8bM3dulA5jEU1kGSX1Kejp8zoCVlaBpGgkRrPWmRBai3C7p+I1MR4MuBfdJfg6H+BIYys6/Fs7UeBNCiwAsUCnoHMP6M/dEN5E2YG+GZnNERO1+IM/2RJ8ewqec3ZHkv+5uWtFvnrt82v3yZM8e7F25RJiznagDKZyKotgiKDnfb5slacaKv1C66sfpoZgkwnhWvv0X/Bgls6Ixn754BK7y5OJPCAsftx7kh4nKcZELeOPMFpPq2r2z/Lhb9WspLRebnSnxxM/l3Bsr1yohVrXycYHvspl2vUkrxu3QI5yco5NBkzMGSUGmtYFYvJ/vPbH9jb8ubAa0nND4bYjWqn/WgoGWJDkLCWCEUamu1vGE1+0j2sb8hVkh5WOoZW9UF7zhpjOTMB+U7jzAgFCKI9HUneBgLvf6rcSREh45Yq0QDrMC4/l7LHX6zEwrawYK9/LHE/Kc9Yu36uHvmf9Xoz2j3cXxgVoljzci3uPL9uQ+/86Dg2NdzCeMjbUOa5x9bqH77yoVudmmgPOBxYACzy+e8SUB93BAZ4PxXxIMDmIIDXsDUqYRX2FoYF7iS1DAW7XLDcv5D9nVYifiNggJTibxIBt8ATYvom3/6t8xgVLkyRJALhzEG+OWqy+2UhZOx8JYGY3qFBlsAchk6Y4BK1KMeLXZZSa5pFN2pM1/MKRLHpQwnGzS4YlWwga46sGSrOsQgRkCfV8FpAqxHCBF3eAjaNXpgq+MFqmyiw6BTyS5wJOmkrj50cYbuVlyYd9wao2bjS//AvIpijgaCQaHBr5mz260Jc633zn8dRTuLwNmBPf+X858ixMUv+jhkO5RXNvtYR3/az4LhmRcsp4T6XYSGX8DFYAoTjkjziN+9uu5OusEm8veVWVi/KAfeobCQOJvGYqWcSwqbE/tyF11Um4TOvzh+5f83gWQF5iWvd51h55D++OMEUkT2El6iLWAjuKXlYudstRHO3GRU3XpOUAVT7H/Eti64k1HrVfah1tGFwj/PNhPphylVKM758SNEkyRdSEw==';const _IH='6bb5b213e2854d658717aa4ce145106bdef07a09d2f023ac402009a4181af6ac';let _src;

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
