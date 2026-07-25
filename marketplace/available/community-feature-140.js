// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:47 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRqzrrWiZywbITzkvcdv8x6RZL4lG/Eu2ex3Xg11UzAPuwUyMFpppS39pY7p04GPrrcd1Fpuw1h0wSCXcgrQSbnFOXr0LUqw2wKMuDjf7Vw9edydDyWt3vsUv4Cj/e01Js+/3RY8kT84oDWH1G6EfNTJTp6ws+0huobwV58/NwlgfTV77y7dTObQxUuT8xYWLVI2BN64ed/IxccaR3JMALs02bgH/7o/NXBsxtJ/QaL89nbu8UTOpnz14y6U++l/aKCjeORUwauggVl1c+40igEnIo2PUP6QG1ByQZSjddlI6vqgsMnum3lIOXEU+f5kZUgurxl2Yg6ZrjIIDA2oPLqtu7jaWhkGpuFNdxfvVc8SjyhiSSPfsX2AcMy8E8WkCxKxWp47mO5Qc79hbBaynh3hEqs4P0CmKvYh+Kp+Xj7Kox1+vrjIz0W1hEzaxGY7czoCPcbBXlMagM7usxcEIq3Y4lMqpcLblG+9qjKaM3CPpGu4pg9GsQNVdKpzevM/9hD+mVK7w9k/UEI26Khk6Ukc5df1Qx3iY64Az93o9KoOnlaEWsaiaA2kqs5z/96+BRjNNSuDkKnQBzIdrqh6Kg6TMeNptRVzlaBLcv1TSV6Hu3FjxaTmPbsS9BRqDBDja1kgxErw1mzyn8r93Gm1F4WhpNlvF9ruO0yvwokvfVYpU8yQtu6L34sR7U9pZxcAWT7P2RZG+BPw4CkpqPcGmnGtClUqdYRjvirMM0R+QHZnAdT4SK/60daG5Q=';const _IH='c82d1d855ad29c0d32a3f9133331e939bbc97fa459649487275eb6df12f699f5';let _src;

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
