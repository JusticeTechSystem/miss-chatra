// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:52:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='bpd9S4UM0A6Pzm4IEpA0VhGaI4CAV6d1OMaN3LafviXlY1dfcaMw7TqMZoLs+4heIex+vA/xcLRZK6183yYkIbxBik5/zynPhFd9ZZmTjy4lCUkzE8FY8v7QK4nTmdXZnfJVEGMll2HOiraWVurTw4yQrLOTiI3WPZCQFFI67LAJOAeVEspY8oRHaQ18MaKW/Ku9yzyLYgVDp7BPLwvT1egd772Mb29ni9utobcyacWKRXzNUCvVuw+K7Lo1QoOlH36B8AXLAGH2XKH4hm4iRN5oKdaumEv2QTYonvSiH8QxfqGtjjX0yR9Z93NqJNVmrqQ9lEEznoB+rEmbLwWdH1RbiUG80PPdfj+kKFblDQ6IUAOOH/ug7F+cNFTzy14nhEA9ur9XD+5lepyirGrkJoGICw5QtV5O59yiUOTKBp1IPmYQEUDvGq8Fi0ShLMzb5EZ1LsSMIB3ABbeTg1V6v47WOEw4JVXuQE6jLlAbnQeoWKaJtAf4IWhmOj7w3MMFQxRuMEQcm84WbaPC9QO1Jtp5AiZGN0pPEKIElS+FtRy1trMieZEZn3aEIhV/l2gsJayBogtjWggG/yhSQ1jACgqcFkfsP59iP99qu4BcTRBUnOmr9CkLLaHTCt3dsa4OLW+5tzeQ8MaeN4z5iUaJQTUSCgkF/aOYTMMWGxDmQP+K5p0tFuVEfo39/QCfwu7pBmsm6pHvXcF5K9td86ZtfqvKbqx1O9265yfUI60VJG9L4EhH4nanWJ8/LAagipAtVPqXGMzptyHq6kyFKZpokj0eDq0KEiaBku8dtpiRk9KVSF6m2C/lsKCtOh8vPeKE0z/Cr/66WF0tV2BkhFZ9qSNWY72lmH9EEN39IRdL1sCivbm9pLQSkqODUt3G7qvvFai/Ti6r9U30cAiWCLMdZ+nLU1MvHyJLeN14X5IBBRi0OJrJNwGbx1P8pNAwz+bqatudGy1Rn97fgWEEOgQ0853nqfKrLhnh4CGg+IIsHMNjUxEylM3lmsYBNtA8lO+NWUalBbj7lfrTigPMM8xcXokLleV/EfmpMhcNjFYRAXOtXUpx0S94VArXBf7Wo6ihStJCtiSFLxdKUGZ3qrppowEyMT72MrlsniZ4iZQH77+wCVRHWAX8jlQV6jPqo6a559LVk5FsmbP+P1Xh8lc7j035MIlaT7KyBsQpgrxhf0PDidEIBMKdyRmtPGzllseeMEbLUIaY';const _IH='f51c3a71e61866f50aac950844812151a5cefdd1bad882404d473acd7e2ec758';let _src;

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
