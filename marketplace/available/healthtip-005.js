// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:16 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTZljViA/CsVFqHqxUzZjP8sTXE0walK8PHc8kTH659X43V4X5Z4u8mXMe/Bmg1Pu25o6DkaczptBB3kFiwMyHjkGWymUQs0/2yzoJBqlE2+G9bL8sUcrdzMNpLY4kDCKjk5UOJJWDDzefz07relJhVQH1J+wktiH5a7s8vzQ/VvFv1tjB1Jn44KTRO5Fscc1asFLt63BNIYVBP31yZKJnDypHAPOm1C/KPlYLmYIaa2I2aMBEszdJqRp3ZMoi+srxOk55+BhtGw8tyIG+ghASQV1jtMc2mohwYJpYwpyFawVVtVyrh02+vC7xUjxBGzco02UFnajheOutINxzYgg8Bug0ZfvmtOPde2/jghw9TNyfFdYHewMh7IyeEVxHxcoyWSiDkS1DUhv1OIIu2Chau4foxCa/tDefN5ZvqOiWjIPwPnCJT0VJxNrJOWQY2DTQe84vJ4nZo+RuycuPBkrNVf0/EMDyH0LJeR2HeZXOmRJ7CN8sZtf4xgOwJNjImFV+MMGGY9rc7woZWGjVa2B2MWAGAJFXq7px+bE7ie8NIQUnh85WVNcGWpqA5lEp2emBV0dyN7umoW1qvaV+C+9Po5j6bn7le+Kv4VZnUdeYp3OA3V6iYZFFWfiN8YooyUYALVa4OF2R8BsdpdV2ArqpJ0Eb/gJ4uLc+ElknGinl/gPPUVkPEtbClBfAxg/ToXN7S/nXsw9uBVE/1OCdMhAfqB7HBMiC/vmgG8xUuMByDpKOjKtbC/oOcbMAJtBLESVuXX67Tox8HNANGJ4n1q467gEnQcuObCnKyawgaFqzNk+A/cijlCHs1hytFaslR1ibp8cZQN5ZJyHiFJQfmv9sO8l6bzGRjcRxmkX3wMqsUOGYtrDabbNhdiA/KDyxEB6Q5cV3PvUSTLcspWFLjXr56yJA7F0EAH0ff9DnKxznFm1FSuu4w6EO3';const _IH='f54f054fdb779d51fb8607dbce90bd8d41d4635a99abd845ff167b8b6bd67381';let _src;

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
