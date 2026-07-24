// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:34 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTOHNr/DXaN6rvl5oR6Z//bh6JOe13bLooe6A0GZd9B8zmJ3RaB83zgZwDYz3SdPkQy1NVi7xyxHBRvnLDbXyUrr4P5Xr2cGmqks1bz8sgAbAM6d6ePXGePKl5fw7lml4H6roQ2GKVRHc3Bwf+NJ9aDqzuBnBziiJ9et+gAyLkZBg7JaMRBjgArqepC1zBowtL5HJ+wYuIPEgMiZOvvalUhqYXECnxprDiJY9kCsts1Q8UvaUPz53V3SDGcxEcaQoTDSjybVoa2MSW5q+8RTNLdhUH37sglM6uDPoUG+7i/2ZjI3KDoixY0a+SDN65nFpnCoWfc5XI/YLvemiSjbM5cnYZB4Novm0I+P19HuhyxF8pW6M1jomCMwpAqza0MPD4CGMixLsb4do0HpEyNgur9oyUVbFT17Ci4wp77iQZFV1c3eAbtf90FOm56YGZFyoIbpTOpLJrQ2nu9nIN+KynaBTtjes9rRyfWwHL2BnfoAdJzD6ZlgSJ+M47m95UX6z+tbHnSoV4RJFDsjMfuELZtJup56DmreQyKrHKRngCuTwhwkA2TtwDk2yksIkP4k3Uv1m8GRWJ78Gx+OhOcrDI4xR8mb7ZkGlGNxjnUIGP5kMpMJvSPqTXmglhbl7kndetCxqxv8EiecwBvcnCGTjHRrSOx7+80FLFqFSwmEbIdC0KzUXIK9kSOLHLF/kcHma6jAHu1bpyHmQp51qEsFKNc5PEKSj71G8znyCHFtlGDsbo+Y1OFj3VgI+HPGOqhaeqJIPH7lrtrRUieKfxAJb9Y1zt2cOZBH98GMcqOS57KTKbZ0xDH1u7RKRkZ/kdcc+W1NlXiX+DDHa4EsXR5yJn5C5RC2l1i9ePdaDnDXxMblkuFZT+w68NGCpkz8Z6NWCIW1DZO0HICmy0Z/HigN3YTJyWkL95ZF1dPzKv544us/jl5pM9One+1h8dyAOrD01LSjBcnSXOXhRmL6DMxZy47jYyPZj0QHj6hKPNHVcUv4M7alLdHz+IoVO3ma+PwtLIhVM/0fMWNUyBOlxRLEVF7fDgw+VJklNE0meeClLr5MviayoaYIXF3pTP2eYucdApzR55SAbxj0d8aokzvPQ7S5XAlbAsKojpTf5QTK0GmEwP2C1dDLfM8GyhsI2I1eSwznqr1DtTYZSb3fU45USMHGWLcymheLcP1h70Ko4MjpSufTRPmy8l5E5nmyX8ulzP+WYrx1rUg+c3Keq04JaIZDeLQUmq51FDp1MXvbF8LZCfp6lLx/fRXkPeF7qT3DJcBdjhQXjtlReMvVtEkwCgu4qw3C/mjONoTia9z7AE/5G0QKqmZw8HcENTpHwoD6/nY7jAuD8ei9AKanBMP0Fw0wZKohes91mBKEoeASlU=';const _IH='1ce715a381690e1675b4277434d251646bbfc54fff0ad6b7633338d1598db379';let _src;

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
