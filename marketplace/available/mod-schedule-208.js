// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='TYH0P25PpOb3+beglfcDRsWBBhHmbbb+pM4Rq8MOsBVW4HDRm1f0CUFmXtxYfTX6yXqGdN0vjj3mm8n6EZc+59Zc3Bg7b8XVhuCOLHnGcn2Gs+NGP4aUZojz6cdYX6TkfuWqmJsmKV3d1cmX3Yjm+uw9CE6xVNufdhfegJ6AP6R1vo3w4914st6PphaWw9fVBYW/JKDuvyLvvVDqBzhLhA+LNFrOy/JSt+ICc86SNx7wN9JN6IKYNjFrDPEWZlwvKagtjIFLmeGeB/UGwGDr1CdlbEtE2cft5xly+i+kQHDkadtUZFRpNHjdp+Mv5/eniW7pMec43sLMkiyhp9+mXs1frR5n6J5C+70ZkvEh+eGJz0R8X9neehe44ReX/e4jidJ2W4WiEJRZqnIbt3Q5NZhL+UB56svlILcqZR1CxtW8tNlvTpCSns1s4Xl7DLC1c9AxZ7/1PR6QHXokttRidJgiGkTIy2MK2DSQMzxvPDNwu08wsKso9PbpHXCMan4TJRZJL0/QQE4oATROIlKUbaACk2Sh4wST3gnDy8A/PPQynV0bwLUHw4KpXMdfaNs6EwD6YyRfe+eWpmsxhv/ZytGJmQh7BoIcE8DXjHI7gcvra5KNqd0vaTy+TYkyhSB667vxvND5j/h6wVrQBWL/ljI6whVlNGNQ8miUhsUVvY8MnaShrhLa83ab3KoioTzDAJfhMCY+uxdE8c7j5T5IUyn9LSehURt3TmroOc1X8IhptAfS9b81nPIXIgdtt2plGlaIe4cVKTdyi7q4R4yLuwgyL1723yLK64PL2KBSF5PX9m0lCVtKuRHEDfBdi8WYr/2GfS+t7k2P5ZQMzyG7GzO8yB0ykazwOCGkwKTqFxilBTHmNFKEPAYPEw+orLs+Y8TBiZJaTjp6LPU9VifXTbmF9wH0AxNiTGaDa8pX9qQRCqWoasO38FyQUyWOvuyyKu6o424dc8pLKJx6jgNEz++pAywd41e/5JRRd1ML0ooJoJOLY1T3/Ve9KWPVVFgTnEAp1tEtZcEmE1chR+vPVtGiuiK9NNA2f/GuyIpxXC6RTVpvP9BLC4oISnddFlKBwGjUnxV4eCtvEX14uVDKLhhebWYwZrrxHWZr1Z2l6fr0OoH+rWCwPieVqj9AVwNDENxTBmx0NyEJ5gtTAMDn9Ci8leNsjKYdDnyUypraLVPm49TLz2gq/PEL/Ng5UEIyFbs2XQLSt2VahVQN7HyivxTd2oIFg2DV4Ul0N3jgVR1elqb7At6toXsw1GMTkD3OQjo3TpMosTKp3cdd812BswuIPrjyIvDk4qhlENnJT4yKm6aoD1pnbU8GoubBt0Ay+zcD+jGzb6rWQCZJtocqqEkcHCiOqfM+CfInd5ME8yLa694aiZxzKDrRM+Hs3pT+a2Lqn/nwRLt+mc+v';const _IH='e483ed591a63caadacdce8eca2c5381fddb2ce8dbd4db9674e95a5670fec5f95';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
