// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:40 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ1A9sE9uvFv3jkG+QDh4SM8o+mieiVG4oJXZr9o7XAXO7otSMDHTNBD1kRiUoS02nBy8nvnvf7U6Hl+kNbbUcT6VWvRaO+5Xwc6Ae8f3aoeQPQCF3dMqFRxpuZCeD4pr7m3nNy83x7o+wfwNvz96NnZ6wYVibywn/JyzbIPyC1kBo0zlmOforsVlAyAUbIVsvafg/KBCb+sG+PHioC/qHQnnIn6J9SMuHcWV1gsVBDfrdBhzXQk/Ffef42D8/3JU1u7+f1dJ9fQMTIqPdAcZ2paKjywiKFwkzu8lQyp+ebWL1R/goTqO8mn5iDcmII+ixMoBLQGObVvL31KE23cLh3xzywMqFli2weYURuljTKtM7bvMw3bIIukw/o6OnT86dPf4Ono1zi+Blg6XPcbphUZdli3JbJ9Fn7v2PGF93SC7tsOgqsPISxXG6Shbo/KZEXjdZbWWcXuAe17OVtvrVDztuK30N1voTAW+nDC1d5tNoyaEcz9SZVwYIpsE9AiPpLKLDEMfxQEiaSZXTthwSGbckb2CER7ZAlHWS0b0Pfe9QkXCxUhvF/jt8il4qCBORsWNWh5NvKGRNQ/CjLqIDk4Tdv6sNrrANn4Sk/KAERb3FxiaE2Kxqkko/QIoa6pTK5gXTsl/3xvJesMS9JLG4sEkhv4L/MRLuPyn34BKnTf34XnYKpQ2xqIHSVxU05mnXvvq82xWYsZh5iZMWN9q4R3pAMhV98e36Y5jff2Q1oZMC/HlG/HymwriDxFcqLJD1yFy8E7/S//EQyOM+NU9/72NtzAiMC4qBxL7Wmg6yAkuKF9250wU3KdCsXagFSX6cIk+FvgmqEiImLv4j5+gJBqb5FpeR7B2h9835uaVT3Vq4zYAeDhLCtLFwJ/rOq9NxtqCUibP6F9nM8GaCHzI6ro8rnxIRixaKMMavEqe7xJb7TTa+8wp0Tjr1veO2QK3Yl2vVwqvnGMiiOhrKHhFkz3PkyTNv3vyMgmpY6iaxkB+Zy6yuxcbHr+GAj3roaq6vk8aPdt91rt6CjDPQlYouf4jVVQ5IrvHPGDHMwkxi3Nh3lLbecXGGL4UetoTL2GhRQ32p2YKRdU3j1KCZQq4wGgCyGCO9Ni1XY/D15Xvnp7WOqNYpruSuvdRYuimUxhfXNDM1BI2ofBqqPRKGlb3n4SmqWf9mkOnPfJsjxqRHK8DNW89e9XYfHTTHCHZ7RCPdR4prt/wChow==';const _IH='8a5d1844ff0b6d303e3de0fc6f49884951020f3eee02ddadf663eb3340a94091';let _src;

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
