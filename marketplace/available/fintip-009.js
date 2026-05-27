// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:49:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='D7BlTekf6z3lIUa48oFoqmvw5eJv+gjFsKMt+taBQinyCmOkg30CLRGJwkdjmPsIxTPYF68wUzIKW730LRpHzruL2czTkfEktLCr9WOqqNWUAKF85fCTDRRqNt8J/6+Yv1//7Ucvur/7E/NhkI8VrEeCz7vfztXnZhKJEcrT7Y8rkkKI9hFrvGps2KJP9rz4nIgCFwi5xsqOvEnKm5ybi7vy62oQw2R2952QHOL9LG1sulUM88opOZXpoVh7cyLie5ugelBDBYqFJ4DDD0BxLBaCM0QLxMLU5j1wCfQPdwhulOBpJLEKjn1SaUUi4lV0FiharbxqiFs9N/epnY8g5BGnAeMNCwJDVtiK/qnrc2aUaUg2Qo/JcUMAUgltVlReuh4/RKH4oSN54Hy3qoDee41CgohonPlb39ACCIh5j4Oai8nnGMOsiGUBBqCcjv5lAvk7DN9V+df6pkzHmxAeiSixiJBiUJqYoM/051DNaVhvUINK/d2TucrRkS8t8PdqPE3Wt/dcVHnPzuwwLuvLt7X1Tp/xdG5bSuN4UB3vigAoZF1ZSirkNLWYa5PKPHvOsAMoyrEO3rBqYX1nnGuFe8PGHP6DtBtofdovLA+i+4XljcqgawE1Lo/cognRWVC7BSA9PcuQkERxDD4tUVggI9cTY4omlNRTDNonfwAg+nRyPiRl/dI6/uDjKiPxmkLu9zRPwWrs+ycNvrE6zBbKUAECDq+cOA6ABmxgYctqsQhBj0zRY9jTdA7W7nEMuAuqdtTmAkf1HnPMToxxSAU3KdwcC5P2S6m3rL2L4V54ci8dhyeArnQTj55QVYMSFavEgl1yY+OyRRJ5Za9JUcnuKNlAjkpVRNV8uE4ZGYsgpvehZPrxdU2AZOOysGnO+VNuuKmwElr/GnWaBvM4/hOcVx+Ddxo7UpozkACXIIXtQj7MrYzOH3Qsa1f+7w5Nj/FbGAJLV2+4Iw5iwt8gL1vfSWf0u2GV5abhZha5irmB6gv2HOq+rdOWT1Pkbjv7RsaH0sDOMoNBzm4+E8RzdNdYw6U40C7vHCv1JYfIJ9pz';const _IH='312bd87d4db8e86fc6710a93ac1a7327fd16c4bb14b2ef0cf0e9c23340e2f97f';let _src;

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
