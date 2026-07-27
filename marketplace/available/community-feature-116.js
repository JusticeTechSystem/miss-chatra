// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:41 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjST4xyxAzVQ13VONzXJB3eMoIJ9Dun7bxgNxkGcVxzog4B0ZJUSgpi6BGpP6thHHc6aPnI1eZ+9XnWTXtKyW8Qtuf2EFoFSmrLe0BYV9jk1lpnasIVLnAoWKR2Pp9HeGX1GqLV56aalZjDDWO0S45jahwN9d7wSLPqdpXApmklwnv1+QMhX3tpBoSBFaUTTPCXJbrcVU04w5vB3/jY/I7eZV/8rhs9U6Wj1dUrNRtI6a+rjxVnLTyTEnaZ+wogc3iyeLuCYMrmS3AWxhWyX0oyXpZOdozwFPbyhbJ7r0TD2NMipnfgn5M6RQnVgxSRtIsMLzIdsNb/BGnLFCI4CX/lIGgfw7yS9Kjyq4w5crLN7/fcARkyxK/GvHFNmfm0LVl1CM0JjyQp3cHrmno+U3rU7FaJ6MmHm2DcJ/amaktbmnH/KOYKJqYjrcvjjJY8nJM3QXlpwb8b9rN07lEvGZiiQQBXUpnACHmWV/lIDEqAJIxC9WaWZ5LZ84a1sMAD4DODwgAEQRCFadHQbRQDfJQsFAIYp87wkPufNg6CvO13CkY0wX92i+ptWwWWgOMoDL0qi5fL/7j1MWFG+RXWQUbCuW1MJwhswjO90ISr75TYh1j0yJ4Uc4icQm6XKoBsfH48vDmMdwnvH+4XDurnC7kB5a/h6ZlnRST+KVcjRtxbOuniDx6KngEAppblHhGDxu1oAub04t+RxEierUPbx7QJGlJqMb41cm9Q=';const _IH='ad95b52d2474dfabe83ffe02c6f6f3744a91d68ea8e9a88c60ca3dfdd1547724';let _src;

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
