// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:14 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTqRGdRvSQH2ZBDRxpPOOESQpGSFm0+13pMD8lFGYMGe8U6npOt835sDPkeXE4tuSJlPmR14Z5wFeEZd4YQsbUoA2TJ3RJKfwtk9ncAwXeJ7U7/WDBLUGm/VsL/sv88kBKzRCkFlTgynUiwmqctI0hginczKt3Q3FsS0j2satFXKNxMl9ZIcrPr/pVaV7rtrp/EcUTA8u239/+xpz1J7z8Gfa5dWoHm3l+IFedZtc0dCdryvcqNDmtr8IoN59/pDEMuTHVT8gZ+dyeQYDfVAorGLfukmTXdPIC48LTs1QkpPWFIMuzBNuSktlm1CFRn0RxEKViqBAqd0HFaRT9WHmLC9oBBMg0I7UewFCWFr8VVP9Ss7NZ6LYNrUSpBil6YQnmghvmaBMuhhR3rjTL1LgWkpCr1V2EU8t+0QpNBofcCGoKc60u+AVUkzwOXuqJZyPUoBF94Clp57bnHkykz1qKe2/1hBE2uDA9w8kgNnLD3Wc5amnSpjykJ0exqktwVDwX5Nv7Tko7+kBNFiRgqPAtx0GeWskY+ywV+SVyjSdAs6DeP9vRYBMLEh61AiXVPQ0zazfqQXF7EYUXQ3i+YTqY6ZhIo1b3cOjEx9n1jdUINfzmRSMw90eqQXnrOIofVyDRJbsC34JBqDKq5YMOAfPF1L8ArB84ybm2gkFQqoHl3dSL6ieCZhHlQqiXwtPKvG0gGlCelo10xFziqqVSAAlJefeu9j35A6dOJFu2NUvfAHgFS9t31BIqA0I3b+8hXQbVCCoEmv0KbOu5Rjh/o8osDSfQVJeFOm+wnrm3cHP6di6B7YkK+qU803JKyb7gxcgh+qA+VC8GC0vyPr+Wz+CANfNrCvWlKIoGqaJzST37PZc4mGNRy0VpHVH4SNmenjzB1sXVlOUhAzuVSn6hUDeoVL1+RPan7CF+0cyW3b+NRlxwLxzs3nyFU8lEChZ+omVnZk3OntPYPiy3toQ4LREmOlzbMvDtnMh1S9a4pna5+mVZ1LNm2Q8EFx6V9kITxOFhuWKU2UYGGh0Qrxobl+dUszu6htXJrVrwUbDTPiTBGAxkbt4U40CwLjQBxBvFxyeAoEpxjbLy0ZPGtISbHo8RXLc2ITWHm7fnksZWT/cPVyb2wTHPgAsUzlY2OhyIqOMva4OQ5HAOoB2wbp2VHWMMcL+KM5DEs8r4I4XIXBuzYecNigrw9eQMt9GlRM4CX4xXUcbY=';const _IH='4b75581a55e2c8d2886041323a7dbc9d797c268cf1213c8ccbc555c6795c67be';let _src;

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
