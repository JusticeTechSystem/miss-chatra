// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:51 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTn11uDDPQXf7MTA89I5ypHMerA31q0zbr/qVjgqNgoMGczXr90iIdCx/UFT4BynbwP8rN+5zrkzK9+Z6RYt63KydVxUQLzHNZJWSg97R1HY3Ig0stoaTfs6dNAUhlNyZqJ2ESuuDnJEVPVo4RYJkXT1uF9ObD8oqelhuTsyTYyGiYQT+TATds39t8nSp5CV6STC7PUq61HSSdgu982X21tpMr2ZnpCyYAWHfxjEYTM9X9307PWvEapFuHsdFuMttDisFeepTIYqqzhcsdjfikqpdaHfEKbkMPVi3SgpQ6xVJFfRIXMGw4XBwLFRCIYYck6QdchqaGZpU9RtOr2CfPKAQT0Z7vN5TDPgo5yMILA2+5ecyE6psm3XrghLKMcp33YnEN87yAkM6Iw/WSi1Z442rFTjSa76RTTIwRpPhXc60acMpN/KD6U9EWju2nIsCeYtGlNTTkFPozl2fVYORDkTXdtWo8hKcQjEsiCoYi7YECRzKNXjFFQn35CFcQ5y011VPuQC0x2sZQ5/fFM3OyaUdyFoPKxDL+P+gQ3EvbqyLl7RPqqj2DApRBQ9QdQ9CiRpQQOIw2/rjOs+RliDJVkpm5L9ytphgr6p/eEKULdfSXfyvw3ncg1jPLQ3s24DlS+8fDsm3xR06WEDEZAQnTXaQUqKeiT6GLVxN9bzVnQNUF6QEOmkzAWVbuqaD71CeFKEls2dwEB8zQvJYrT/0TKmxaPUkSCgKYgsFqBVy/iVBt2v4sz6lxaMWQZ6VxaNkftO7HNddXqyrS5m4CMrAVdvXyWhTHikTKAX4cLSpTn0B/KL76c6KA0uIIRLsFZLDFBcSlhQPUbsx9GHnrGK2bCHotKDwnuNPQVyBoSc+4z8YvLI6zISpcZd3D5GOHdw0YvaZNBmUPo6AP9QYTvXPDZ67ScFtH5TgHUNxjDvEDc53/lz9gry50v351Tcg==';const _IH='e241f4022598fec6c70a78d8c0e30a740629028df737e6a145abf40104cc947f';let _src;

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
