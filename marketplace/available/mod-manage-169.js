// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6xjoN51qsthfszrVylZibBM8ozpU4nzGCi/WFRFBm/skSLSJmYqQA2/SXwkykUDkIjn/9892FbEKm1/CghE3eXcVD8c4xIyfiUhD4pgdJK/zIXre4qshUGBLhViycx4Lna8to5Hofp3CqZMGpK1c9FUIbkqQX4JUERMMI1BXPDRPMNwBbCon11m9ppqxeSCyTSDIUVKxjemjLsTlRKDVPa59CA2vKNGpMJxGCxHktPw03LwQBeMe2ftom3Ss6WwxVQeV/zJHikZse51fq2I0mn4eRvAHMw7mvMtazIgyWURun5cKpbUWc8/MBL6YRr1UOs+CMUCScPH4kMQJvfo4aL46F2mlo/g/DS4AhTTtbnushy1x67XDD4x3oLp5HDWr96G/QhSmZxI4gaFm4I/reIJxODHtgHUn5ZwFrbdNX0Afy54Z8ACRC7GDaExHzZtzJXRj1/uLCwADSJeHBWw9zbMEAqgK1xmHjNhH7dec6Yyr0TpNfFJarzWLdkUjpTti51f0q66BKJ82Vk+vdv4SAqcMBCZeWF7XyJo+0ugEWd3EVWKDzgd7IAep+ekrjnf8ffzoEqgncVCPqnRKLiQLXeQd/6SY7Ai6+a0YvBZ/rnVJhe6aj2LdactDCqvFhORTczz0pMvri+gSVlBSUGEXdLMzm6rRe3Ftq7A1s8kKt8Dl7aaSkDVoBJEGaZhq4281uQASOS1oD2hmydvxm83EboqaVLgGBKRwlnXHjMPP4OMmuy6isSRWXoiWmKCVZbIZxMcdw1WqmKhejZgalXkCZ6QYD/2NQl2whsIHGAqCKb91Bb2FlNBrDX6h96Si1CorgzutWc8N7igANCxpJSONBa3IwHmA7hMoy92UlaY4D1c27TqOIREVCKeuWnZlNmymLPfzYqiSkXT3+a/9zixn1WF+eYcg3vObzs+1hMX6CJwuBLufMp0MNh7FapdSO4lXRo6jCP02lNif74fD8r+hOROiPGffHFqBQusS9Bx/Ov3yOHvfSPtvu0+FjitAfRL4xQ0iOdmRicbwwnCQi8Fxk03XDyDP3l2rFTKc88yZMgkXG0zKLg/shfhS/B7B1bE2pvJKW939rfrFA59p+HYzywCfRP+odMTO53mvtH6kekei0N7exdL2yIkrEk4lGJi/R1QfdNXqbNPP4EDLTa8gGFEy/NMbCJq9wBoVvdpDSO0+2CQ+r6SIkuplnsGPIVcLOI8+iho7IwS7hi6xl30g6GkHZAkuxgKUBE1AIPzQdeMJlYLwG73NzeLWZeIDMZr7crFT9pt6AhQg1IZS4TnjPzizPEH22gQ3d1f0/Jo1/pZEYnE979h3+g3xHhAPZv472Qzsn6RaQ/2aHLH2iFqHRkIvXmCVQEnwiAFeoakncJthQtBomZg06Q==';const _IH='169e78b57cf924b43e9a7b3f36fea1ef7d9039cf5fc4547a00cc11d10e4885da';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
