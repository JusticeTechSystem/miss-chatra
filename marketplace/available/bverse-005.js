// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:24:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='176v/D+rUZ2K6NoqvY6QKhsorLHH3FLpowNIesrFddpKsfxNZR10/WmszuOCNhdo85Rh0Yw4omBtutwUeFDll8yzFc5GrN7bd3eKnBTyjIhDQq6IHz6GPXSKNoddvMwbASPasciukhCzQ3wpmL1cruwMHR3hUmSNChHcFP8QQ4lhxUKuIpoQ/emRG/KeyAUf05Ueg5zPO8E/bEsnV/w5Lg+mB9XRKO8EmX54ui3gav/PIwEoper0OqDlt2q80MckICtfAFdK3chiKd9jYX5fd26Sd3ZTNvi4xlgdCUZPDP1SuQAXa0EoIusdgIAoY7Wjd3vUNs0933KxPzpj6faJ8WQMso9hVLlyQuk5s2UUOsSAX1htYX90G5+4HSEn8rBF5oQEYWxTL942sOMwSrmZopMMVUA0y0KuTLIBfMT8jdDVNaqjlH4EcewGEWLlOq3YmtasNKo2MNuCqyE5Jqz9lVXpcW/DzwrolihCFbUc4sObuaygqvL2bFs8e1s8wsF2sVczsoD1CMZSFMY8OZJKXvY/nV3aY0CivcS/Vxnn0/P/NHThjQQ5asXvWXMgti3xiwGEhURI6ZaixwlyIm7/u9GDp7+IKhYE8vqZhzK3/IvV38ai1DV3uXweNE6CHJR22qwFyb3yFAYvKGpTe770HWW0fLPuovNnkawC/fTw9Oh0j/T345eJ/elEIqZc4G/2';const _IH='b41afd4349bc423830bea359f521ec6fef45e7615dd1244ac14a2042ae9df44d';let _src;

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
