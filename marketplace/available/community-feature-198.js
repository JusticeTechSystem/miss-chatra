// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:10 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ0Bz3aJs/JJ386glh8P546tcMA3dKT9bXXW0K4zGsq5HjuVR2Jv8FFd+P5V88hSuMd63oft5kqi6uwQJ4L0DzNfOGQvijj3DNvi+ZRvqXK0ldX1W+209BVFaumPxet6z7E3L0tsSZvVrLoqqqY8WJKhTeOVJXXwkasLegaD+Zy+MloBx3ARsr3LvyFb5mLf+co05L2IivRQyeJDiGPUJA7oFJ6Nsmt+9IYBcmFBc3cOXFi457BF1RAPx6HQleBXi5j7nA/fyYV3tAhZGJO/bDiQtcjhL2GtD4YdldLiZ85rXYA66Pp39+NwIsnGj6AIzGMjriBQb/EGoaie14Hx7lvb6Uf8xdVTcZDJhCA5Q5EcSE9TDlkVqAqZzZ/iDJR3y4l1u2rwQPAGRVJDXulOYtI6TjFXSeu5eDllIjKkkx3Rk6lXO/y9Rj8UgSO/YlZIgS3ACKUZ4RKeOV+/5XYifSlnYHeKf6sAyPKOSw1TMFo+MGVwhZJXu2M0WgykdOBnN6GiJHiGUTQBYPMkYskpu5KK+AzfhGEbOt+Wb5g0tJh3KO73DIbjZa8UY6MmH0blxdqh66jXoCsSdpCVMGPzzuGFlDvM1Lgo/UTQ8TVM0tfYV/Stc/PvskbaLeAx63IRNqk1kOXXetOe8TMXtHcvWOXLLTeL1vRyxkolDI2OAbmpcrvHLvRK4YZslvZITNx2s8iku5sjB8ZpVL2bGY+Y9Owque6ERnL/gluQCTC4w==';const _IH='57492c916ceaf6e8b49903ec72394f48be7b44e084399a6be4a5da4e9a3c9605';let _src;

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
