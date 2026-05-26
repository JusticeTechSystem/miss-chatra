// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:47:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+VmLKkmVTQ+TxS2qm2vafP0Hal2DGLrpFgxQtxhM+VEPwaKYg8UIfXiL2KmFnbPWUvMFYKs3PwpXZ8bGi9n6toU8Ped3sKrh603B8b4fZIuDr48BPpg2AruedQH4gGscfqQ8/FeBjhr2VE3iW2cjOjCBP9Hs6gEn5MiII5YLW9InnQ+zpx9hAOZt5cjgBi4kuOSK8OIUdY6IscpkdxIzJWs8q459tkVM0zWnf2o3K6q/R1WaipXU0kTuA1L/JxSKE9NhgZ27b/grZrcPkXntR3cfDmfj2gEJvDTmdl3WkY5rhirFycz35k7E214b5oyZb9BlF21c9VXGXpp7oY53ohHIdHmholMfJH5Ot99xQ5h7ZwyK8VNvoa4kqrJWG1vp7RbT7hLG/BtVft+xZB9Yj/Du0HD428Z6FXozxRuXhQzMMQGGWPsddInj/uyFdAkI7NjB2ZcnIHePEXaJj/SrEGWuoDP7MxfRWRrENMoOjDTA/qnj175oLtFkL53Ie1TPqwcXNfNVNxGbZiV4eG4xG/qolG5Olx4vWJxcUXUey1bDzByGkKg+6vpPlEchjomfU83OjBrOu7Q4etZDpN8MiQKbH/iNQ4F9Kc8edB2l9I1gU2IsmcMjRsS0hi16FdtnFG1wpvAZxTm0j/uR48isNjHI1TMYVmPBDpGP91gOrfv1cQZ6UfI9PTlM+duWG6qkCC2RPFT//lFEtxePKKethGLOdrQpI445W8nOtTa4JV8xWZQOPJDi6vlADhUH28FYP9KF45Qes8+s325zpZFa6/b3X0/NdvvzsD4LDHgkX7RSWU7x3ZKpEuVRmttQBPAsrFvPLOjB3wTiiU4SsjH93RF3qgnvw4/hbtSwUP+dBijEkZyRjwrbZl1Cx1UEiWkfNjeB6FSt+RY3Wlx9YYh54ZsTyWCPmZ9lyJ4twMghBuN0Qr91j6UIC0LDsnV6ga/fsEyADnMQF5T9Zs0fCb1l+/drSk02gyiFJArYtSi9Ihc/inl8cd0ghVwnvKp5W2U7ZcB7S1U8oHHg+F5Awe6aHo4ONFTA0GVVk3Z/2U6mxSpxNK7AYhYVs8eLIS+f4CanlwmG2Cov3nuYg7oEA8QcVMwG3gIoZcc0NqKr9eN0LH60na8P8diFUGAlJmfyxYHBc1t45y8nbqyMFQE3xek2sOR1BigT9oZSeYn6ebo/2ggx+TisSH/eDtxirVEwSDc+S7jH4HNwQRMx8n/O7y5do2ExOJ5rE9Nh/s67LSA4OX34Gvez1dLpVN+tjjik7YY4V4EB7J8e+Nuq9zfgoWKuLEkfea7Mcud0e3PT9GG7o1m0Yf+F3rv3Hr9VKhHtWFg+Iugwj5DiLpvuM5Kxz09ephVrwtQ=';const _IH='d6d782b67fc4b537df98d56e9086ca9d268595d47b4a210234af24cdccd06b6e';let _src;

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
