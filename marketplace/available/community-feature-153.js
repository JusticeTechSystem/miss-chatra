// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:44 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTHLomPVqBK6lnOoa3fbiffNrhePBOv8IWNhFm/QdOewV2Cl0zV932JI3CWz53Az+RsHCaYCYLud8ABTs6dVMezQyiOibfCBA3GoYFuqieAO0yFLOEtdOvLhi74ax5YH9ciJpfygcDAESGLqzD+8tInQoQH3ZJNrY8+5NUHm3mt/gHvbUeiYl5zXYTNnbPEcYUJzFGT0rn0a0o7EJUmC/8y8FrxLYYyL9+agMqXq42MyubajKmayCS2GzGlsIVtIyKl6VkW41RnGVM5aPhctIsjJcn7mwI4t2beaLkHHaT7LVllp4EA4zgU+HIGL6bZmk0D23r5i68Pd2fIo20+yykFqe+GGsOJV+iLztc1oHOMfg6wMFBYvkYqkZinFh1/Nura5s1U24RWrRNSVoVe6+xwiV8jeijnmx3s7SrxlL3pDA3yBibvfL2O8+OoPDA6NsmOjz/SHmZxzAJrd7zB5m/uStFbyGQwTRojsevfdkd9W8vWTBtzK+1ODpJzPrpMiWzVZUTcuhzVXC8UG+2uv0StRSKJaGh22WJtgj//fKfTSEUxC/BWeb3SyHwA1fAabb5FLsq0bc65pt4DmzUM1jw06zcp9uRoL0tv34PDAIySm26TW9o1Yi0I0nMELqU0Z5dE+4H+chNRB5aVywdOv+FJhe5IveR7L2CS/9eiH9E4jSuvAd0X3WhKLqgzdEx6cF4WL2/zE0fZAWG5oMi/yInOHoxhiaKbUbzECUDpdw==';const _IH='ba44df56d4e89199b4dca1b65c85848b0686f8fed8c95b9533c2ff3d5663caa3';let _src;

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
