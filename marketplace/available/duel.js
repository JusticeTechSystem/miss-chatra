// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:27 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRZFzGEDo66zhFfd/hSTOV9NpEl4fYlF7hclpVhop5lJkl7LBpUn/72yktKAljO4+zDrnuyNsj8tauqODhJrAchIAZQB/ccsPxHc9OMc8SIkCczkgtT9nRBnGCau9Aq50TU90BQRh45H3nikSebhTlnzf/l07Ghj1NhKsMcpTER56TrhMLUAS02dvPFKBf8TQ4wFa2rmgkiLsUWx6mNBh8O4XvLrF0a3TyMenricYL7MLXCMOkd9hCJdVWqYdMr3JCULv2nuc6OyAvw9DjBKBT2CNS0TudbrgWyPg/3lCl1enUfpV19qBkPU/8HSy4i//2N2xwGrGBeyUdsXRk1W1BzdlgBvEyPtpVScyCfrRDV3pRgNB4HYp2EVV6vwJQCUDA2BxJbsGRt8dqRv+qxcFIdW+t+KjmcMIBXfQUAvyWZgdAyyTG0vCUwBEf9g3dTTtEKKfCuRu92eVMF2GtIFoRaA1Xf52QC2D57bRo5Tv1TA085iLA6AC71y+FX5vBPJl3JftfKpCD/wJVngUJ7mOAF/DjITbotpWO3wsej7zMGau4ZKocb8iTZh/eoTvUE8CVH1ozP7NKoV9jWGzCGv8o0/pbujDjFy/OlINrPGqU3ObjbgU8GVNezAm08YuGHvmUmN9Y7pCCIlhtptye3Y5o7sDyQzMuptoznq3QnwIYR3jj9EAcQml1a8ZTCxxUVe4mlalORPCj0b7nDanzdJLn80GOHWX+WRnSzqPPBUjghC0kQOSoqpRfoPepN85bHkxyeG2KMKGws+TzE/z98IXXQsGYVDEO1MhEZORwWLjT8n6UQoA9/mZeFTNJHxNensUdZOLpk78VTIe0ySgXJhDXsh3fzZjuPczj90dV11uqmktEBdOA8yzx28wiqsHhj6aQLEiaPblBLFf/rAKHtQcTJl3M6Hct+GZ45Hsmjkouci6P1Et2LuFuRSRAoZorf53aGw7d6NPv+fdPP1RdhsAEEN/KMDE2WVhm6ymyZv2LYXZtw0NkTq85gJxX/4jytjnGuYSukHWXeZc3dmj63HQzoargiMBZDHD2nwUUzt5mw9pyAoj5NLMJ8/09hAi8WzHvzahL1W8++qjLTA7LjOUuU290+d3FDJaiFvWvcHLZ5BKDyH1wyvgdEOVH29cklsug5p5v6BbNUs6iBNAS/eQjq9o7+H83f9BpsmkqJfnIdXQEDAg==';const _IH='1262cf890e8c970c173f32ebd015a66bb0c4e072ada8b40ab2ccc6831e562460';let _src;

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
