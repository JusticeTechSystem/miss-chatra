// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:36 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSH69oBFhWDU4mOODjggr/sE+ovNMJOE8furBdi7YqGd2XLGY0JC168TYpTrXSh+M2sHvSGEQFp9yLbJ72InvI1999CL/Di+xYqo6UAQIJk9Kgiyz7MFuYmDW9NmaDD8g7U/uUgK2L3MBD9eivJtCTiGk1hwb0BIaclVqfA5h1CzOmYc5YwLsRLTKzMOQgYptfJrAalns75EvcvWn3Qq8R0EZ3iZjIUmiDG6sxUkNL9kaYZaKORWVNuf7MI+cm4lw9fcmopMyg1Az8Newjj6R5NjitHsSBTVtEsGCLmidG4/mwLuJ2BQiak41k4Z88iXHqneufagf0ByJnQQ2JidDGJEadPrW9bsQMt3nKBi/khXUzAslKuyYvdv5c+UcvZWpCKvjXAg0e/fyIqTiEUQyNw2VWp/UMuJ/p7MED+gBCalpqYJAdAPzZCU3fY6cHYVhGaUCAqm2knE7dMIxT6QNV17L0x5vbIvDbUAVSIxo+e7LrARPV4tZ6aU+ixIq1dJBsfzCMFdZ7ZsN7mlP/4kFaMfKm+YuxaqdIfvTwSo6leo0uwrMbTvoIhcs3td3xquP7w5sfIRtHB/cpZX9sRaABcHBSdZtOeeimJvHi4vCtetiQnQvHtZWlPF0aO7AlUksgGB/qoE4dCW/eQjzlUk50VPsErHr7slsuBtc7EKM4P2mZji4/xi8apVmzheAgPACGV';const _IH='afd46a8e1266d6077995b5d7b195875de762e0cb96545a0dface0011f56a33e4';let _src;

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
