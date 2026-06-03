// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='138mbL7xW0UxVypCE4KifxI7+ENYgg3xP95BBjWAW1WEGlPKbwLpbonlzvNLb5u01cen4GLHNpYPj8nyZGhmpG/FYrw0oMkPfdMlXeoplxa4Mx01R9b93PU9fU3WNgqef8125czzl9xna+12ULA5MA+tHIh6qwlJlAYivxl3+HS4NI75sLpk4Vh5bzin1BLe2Mg63bCIIla7iKNB0HD0UnI9H/R9cf/RVhUmPoisa7Yz2nYmXNSFc70exDm/phMOx/eTqJPfwzxSibASecj5hbXuZeCh1cSokVIMZQQnLmGBd+Gn0BRwzSypNZdanLwNvS7bRY4rvs8kfb/jSg933loQPX7aG4/adgb7dVbv/uR2ViuHyQ0nJUj5EufIyw0miPEKONKwRwVcakLwdCrBblfCMOyWmne9PCF71FD60o7J2esbrp40yKuQEB7dvz1xHZKxw10vScOGm7xOwbgvFlIANzc6E7sQCSV6mkWwo+JsRiUM3Z/0wXhyhGgj0f8wnKz4fFlYRxDreyjO00tLTkBMtzeDXE1Irds5+mYvtPc18IUf6MZoVpO+yqQ4ecQ1c7vKNYEyhyYyBgUT1ELrEfztBleqv/a0ewk/QaLIYO2rjadSsIPcSK6Lmgs3KTAvSlGIZ8hdjzISuypZGPfChiRUVXoE5P1N8EdeG3QJVA0u58uoxn4s0Dmk01f8UnPUtLV5AMkAla7OLbkEN+G49zploY7i3+0HiIUT4scXtq9G9JUZqTZ5mkWuDbQ0sL37afZPfF1lyZ3p2iFcqg4RN0tRZgLSveuyXY71KlCpglDnBvXnCcMYCsgbGLVRIw7V1Jdyx7mNuWQE3dPDkoCryVWSxd4GjrsnXCQ3Ziqe1A5sQftb9tVe2QLCujdfODdGeGz5JVHQcJCcVHJT7/889U3Zn0xksIOMHqVzvv4Y2a6dnM4QngdX+UirxJQtX9/xSPtoVNvLEBHlOdPONE4a4HvV8VCtckUvtHlLEEcxojBmQ3Rb7mkzRSOWtgpHbtQIdY92vnb4X14lvQwCbpUII4ycVugC51R5JeF0odYF2DdW9erAhaNQ1drxa4LR++Toi+Zq1hfDnT3luflhVAqShbA2c4lusjAEUajrucCOQXj1cpJtTeO5dUQi7ZpVhUZwx1Zw32IiKFkBtQkFoDHm6MthD4WyrByjA3PAR0tT4t5ZR/M4gwyCS6rauuLF59WA5HqZRkpyNd3miK8Qn4aTNPeV';const _IH='df9245035d4998847d3dc171ee11921b521311ebada24a36a5b19003aad2800e';let _src;

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
