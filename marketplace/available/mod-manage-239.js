// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='5yzJCpGbx1xVVqIWMV2rKOi7ZywQ3kH1dw6g9Kj7gFbsyr017nMRHd+babVXJ6VEtSbZmt8qrt1+UsvTrbblhQGzuWqbc05Ghb1n3rDoem+Zoe8oBZWDBSFr6ixykmBdbaiGyxuHN7N4Dz734AYOqGgsaP+u9j59jOGbqAbe0Um+KPbLleJLY1gOTdE8tQo57RPvMsO+pDPASiAoZ+PB//+rMhCysXMi72ZRSo6XzWi5n/JU+H44/P+BLRfoHritP8cAz+NbvhgzdCTcfwhDSeTjFNrt+/HeReMzXZU32FHB03Bn07xTn6GiKvuXZjn42xTMKBPx5muWwmuVwcboouy490W3qReJyz+uHG0jaKKzSdbmKADlBPcs5vOzYX/ZhZFgVkb8vA0FgTlFOshz9+A3VEAXDvI2Z7kZ+etOyoVXRRfcySsQhexytdHwIzOlftGlrAYZdkj8kaABzP++MY2XX5EaB5yhPLawtco5t8Ky0qvtyfIHXUBK9q4m7FRtO+Gn5e8UJwh1AYUQfqC5BhKxVKkdgdrDp1Xzy66vHJKmAg6jk/N+0BXYPDbpOypVbI9z+jx4vV0Xzv8d/yqpZ4PBHJxbPBRtPPxCMW7EHG8fJO1IJXQ2KXzmq9+Ld8OgtbB2oPn6aLfz6jMPqnfGIwjnGmejpQUaPrY+tMR3OUIrUFWOdRuFh86/j044nfdK9r+/g8gZkERo/bfLIKHMgYSpOEHHqrhYtyKubGIHwZKcTM8EApl3xysAZpgZw/MQyf/YvmFn732fx1Or7KWMosdmWHnhvlfpWofEFyqbJ4DvlQgGuSipx/2TaCE4rz45Yq09Mx0rraLRXw4W3wBrb0BdohCb3jJ+VFHWAnhgh9c0EsJtDQtg4LYxQjbMiOrLn/K2C/AoH3PDZw5dd68ob236DL/Mr5id6/o9FW0x7sZk1YVksxBDSvk3D2bhNFC1fFvm7+KjfO96dZQSvpsW7NvrnwNc4ENU5dce6UdKD5fZTON+Q4cjR6kBKfly7+l1QlHzKVCqTvAht/rSt1ySIaVwn4sZcqRA5oCunc58dCIHsKwOoryaiGij4+5E7K6NfGZoqRw6mEB5eIrsC8vmrMma+hXNqtto0wZXDQaTDAh2eOZfAi2HFgDggP89+iKonFy1EnLuz6X7lFaOw5tT0H2Gp1kT00npCb2m1lRl7Y1EIlrphHvw5JiwvqRqg1WAp01BFQbuHUIfZKMKHUb1k2nAbUEtFjgAddUzC7Rw1Riiuno71wZ16Vkr2Md67qiMB2dYSatXpUVyppHMlYiG+u9Skw2oecM+EVjc+xFss6CRWCPemJrrBpEOAc8fR7vlhRBEu9165msysvqeIgPcU96cspUoXg1v3oVjn01zpE4Plqc9tu7/QQ==';const _IH='b91c496abf6d667586ac85637a6113b94d3a6e90ca000200b2824ab8d24eafec';let _src;

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
