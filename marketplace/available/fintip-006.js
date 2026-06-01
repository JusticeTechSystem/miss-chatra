// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:59 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ53F32cOt1CR6cFNqSvpPRIGTQu8+8hMepuSPCxqX3CRx1Snc10QFAopQsDbXskUckMeB5Nou23zkbE7viIMuxUXmcKrVg8dVqpRG6lfP+McFrgAmWy0+CTFcp2tC4fk7f4lggc9VFzWFiivTqpx80KhZKOM7lpAotltzWcfq76dBPv9iFzdwzb/4TtANydWTWoPsazc9r99X+XucDHIO+MWc3mPXLEqn5ySMG+0BVAz9Vx+rCoYLhLRlNMQROJBse05sYQK3J4TZeAdMEAboZddvJA9x+zH7Kt8hGnurlX5AGeV4mI9NSXebdpab9CEaWmyF42l64pUZJ5aDAQFpHn3aGnkGWhAez6uesjCEiW1RUboKwp5lDCps/NxwyYTa/L8uB36IgfhMK65FfhyDRrNzzeyp+szVRnYXZndE9PiTHN582D6RTblohAfrRzLaIvW6xnMUiqomufK7+UFt+an4KIlzPz8a4ejt+jKndbAJKoE8dHF9VcQ7+JWY5zc6UvnJla3u3A67zI/f/4O2JdmYp6xPCGeRQ6O5pH0Mgvtxp/w2UO43vxEQGgs/VKBXA8M+mOgaXuRhcPXb+rdgpO9843Dd03//O+fqhfhdeBKyeB+zjpa/4LfS74XyWPgc5nkojhKTg9ZBxgXwdulTQTdzHMxwAC1g/rSHYz8e/qbiLfqELcLDCLzu8VdBiLOkjG8Bbl9Pwa1rwdVtHrUgEG8TNIORlnKIx5YpbfukOhsni8XL6Rz8f/1v7O0z9e28B8TG65yLNLwWDV9xAE9rCNuZYvdrCLszi1aC/mKT3Rl01cdWI6kln8Tyh2n+27QNVkfSnqbEc1VPdysipTeUJ38C4PKdinZw3xcATXSyfPE3d4xPdDJbjI8qECGpg0ZanuiH1X/MAMRIRcKBkkxC68EqRCqW4SDa/M494lYo0E1EKv9wEgvHuzQekJVo5Y9uoyix9bItiDBeYOs1PiFldzKyKqlkMdT7Mcj2HbKr8Dz3vCn7pzTHwSq98bie8B6tMkHWVHHIK/q2h8scx3npkvTqXzfp0cra+5imszliw==';const _IH='439c712df8e770dbba71d43aeab77411970339499e21d6b9adbd115b0d906a46';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
