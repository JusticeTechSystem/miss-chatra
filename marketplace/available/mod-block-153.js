// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9GyoaNSvhkvIrYXi6kOXDQ2gop7bQdPz6jklsTL7Kkgt1X4qc6j6tPyE1bNZqo9iQs5qRTqkuTi123T6SpSxkJyUd6AE5OfvUDoDnADpKW52VGtoQQ1Zid+uKaB0KA+7EFDmcLLnpDLqHU0s9AzEWUYzecY2KOTONQ1f44LkmIq+hXgvHqqNmABLDWO4qOC+PcuTUYB3LUyPa/hqBiGIjGfFwdjM3PYjLjbmygK6oeMpojJlc6ohYRCLtn7A/YJkEU1ahMGWvaTTvAzApkEZC1tvugrJ/jI7MfYAvSLJtgdu8co59p9wuV0/7nFTGd6+wUmofVRGPfXqnJXWSPRt06/AFEKCpQHAL+Hlx4CsbpdrM7pzDvbww7X/8cEq28T+O2uO54Ya2NNmywFSZeZgU3wYEb4qqFJZkE28wUG6dqTZhxegwSi3xxOeKwbuVsvOAhf+A+YtLjyOYRQU7F2Zz0K2uavHaRMkd+1wBg9bFZoXsJbGVUllABAAnz7JfZqJMw1LEf62wv2LzcRdZYGkq/M5jr6rl7+QMZacTPCijGu2HoWUxa2g1KPUx5ZdBTMuAAWZm4QFfGdDMgZowv2jlkTHoJIXf/NFQu2i7FJlTTWHGyZQr9nIjJutIKDGVJ03WGVHwR3g4SacWZBpfUt4F1qwoOi4GvTJJwIdmsct+ISIl6wxn3THxva3/ICT5Oo9cIGqbtIK6K4jXo7U/vWWnVycsRxBYOveYdEF9r0HKunvI3FuERcEqFKuz2zprGOKxZDlUepQrgt0cngj7oivpSSnRkRj5cNqDpCAU0CrJ3WQ0+nvfvIIVf/Q2GU73/fWkGMUlGrF7Ddrq0v/ghNBKvPOKgdRZ9Pxysg2GS6R/LweDx9mjvnfx2YMjK+UOoHbXsOrE4iQkAyaEDQF1l0E57cfkUA7PY48oMHJutJr9cml2PFNEhvx+4cfL0UFmPjgriUiQP4GkPpU2pQRks/ZwjtVuvfBZXFe8qSqSpB2KsOoIOojAqDXyXKNlzdU4lf809qK5lElXLM0iTEmADF271VrMurVfAr8tCLX3Hc9gFuFSebaLgwa1uIuR94slVvEtN3d3k7jK0vwupdNkvJtPjET8Eg36CLouPqnk0Jbg8SveixvthJa5SzCwJknn+XLQ9pZkKKTqToyRNqdjCRLWXz7sDXPsOYirYAJ6IMd2OfEJtA3POZJ4Piw2+4ElKlXCU6pMNrl38yBNDRVYq58+AmKp6UV9HkTwCZ/W54F/EFsqxG2/ZXiKpxoiJRj58CIM8orPUWCOjdLOwukRzWHsRLR7Reafwj06icgp3sneTciL/OtIA9BL8KdDx/6Z/6fTWLp6YX2a9cmHDv7cV22a7hZUydnvIqGPmIZ4/oR';const _IH='d7ce8b54b2e406389dac8e0a91ac60134ac1e800b7782a47d3d51f5f4935e9fa';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
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
