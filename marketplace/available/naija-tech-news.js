// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:16 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ+osJFlhLYnFS63Fqjr27OveG57OPcuqdDDef+LWEYWvLrtx5Nv1Po1wKsEWKeeyKxNK9JNPpIg3HZ5J9PHe6EqPHnojwxw3NS64gV9bcinCS7Cj02pPIjn1pgq13udRcyU8FDlG7tC0zMZC7LqitiXkq7RCsypRmYrq5uwUW3v0v/NDsyzpWloLzw24PIE1FjQOx0XOrX+jGQxCsjhPP5LgNwy7LxP51fJKs5x75g7/vS9OGfE5gqVwP+UCraTjsJ7HNeFBAnCvwtAAQ2RlixSAGC/DCT250nWXcWX3zJGCSAusoFGsQ4j02IolPMWDabxvE09t7bD/cFDU1MqrlxNQqGx9ibawpCD1/AFYxZxp5z+01bkDECZ73XgkUSFg2IBDfSWmbVvjuoXHkhS6EjEkg8ssw2bMmHRUtkOmawd2Ps2W0Ig1w55kiU6SYZdVZkiCrmTUrb4HQ+VuRH0kFN3hZHdT7S2h/RxNShpoZAp4OT9gnDbo6cTktx5aqq6F5Ec9W8UOIUYBd6ssLgN5dvIDNmVa2gEDA4rpcmYROWi1NtmDFiz1fr3O1fOMv0ViojMAoFLfzpyijbQx+ki6LK9DXYFXv5fsI1A16BOwoXQJ4p0212X9Czyi5OY+S1wJZQaGuz3vF+NANRCyS4UJdyhCeVQUlHZnFmwnTk5yBTSxqYbQckjBa3xWri1o1EIwyHX91alWwUr5CU7J9bveEKSRINY/tjRV2aF99kt65T9PeSBBo+eKRezqKgHGvkYkcMrYSbdn1NzpD1yvGUHbUAGiL9SeQ4piSYTolR/gfrwg3vFnRjtnrSqD6zXwAEvslIcTAHFKS3grt3qUHkefxkozkCYbQa99HINo//E4l0axRHeE0FwQ+kMhWdH3S40//vKNFyUV4+FUG1/j5Kopnb3tpY5c9QEHb0qpaqpuHfmKZeKZ2OwGphbFCBnqzWmbrDxbAo4Kcy2lzA8xv+8VkVvFbHUbpDN07zCWTupM71KuqD71lA58SLK4xLUVG09iiKLkEPvPoKCuaai7zBkAn6sKeCMaaxunsLSj617f/ogpJCaT7KytGiNTDmvv2xnf1xgbijfgLC2IONb/X/FuJP+DbyQHm8qXeVTVvMJwVK9iY1PkbjNFOnUHz+uy+InhLoTtAiV4BeylkfMpnIk4OjszbTtNkDYV/nsrZVeexe8AkD5Zw6xSw3ZRICx2SmOMiXPmXQe3dZjA';const _IH='0a578b872fb91d8567405a532234dd1be6d831c325288c62816d187f3c247a50';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
