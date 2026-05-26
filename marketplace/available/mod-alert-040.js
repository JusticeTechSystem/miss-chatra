// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:47:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4ImHc9ltSkJaMmp+CLtUaGS/AC4dV5ks0zyp75mEMr7gVsdXe+K+TdZvZbgswmAMYFBYcgcP30Z4rc+CynTNUZys4X/oxVF0OoZvCk7wGEp7yxwhv01RvmqOd308JEa1J4ij1J4rv+zWN59x9d99psIz22HTjA9jYtizF9CJE/dKF7YxPMN1E+aMDF8DR+XusQH8Xw/MCIHjXLDx5bHzfBuDT6YIs0rHhnMZ/GDqS3XRb1l4laUhYMIMPJaIVijwNIsxTU1FUgfuvMh6klXOH9ozWZRpSacmbcqRNpdl8K9JrPmFHCfGXJfDJ5I5sWXTc1A5OFFrN7rqu6s8uvYv9/hqtP+32YtW8QGdkD5/evTblaLef8oFbCeZu8V6SbV8m48/UAiBQfj5Uvk2iKIX96saULJ6/7hJxH+87A2QCKLNbtUgq++m6IP0/I4022EzVBfdeK2txYSv2CPNIWSaUdcc8XhMWN16DgQ2uxQhxJpeRiZdaL4cQpRLJLXfh980sl6hGtOtrtl5NNuT/hLnqjOekETuA2pdcMGrkQ+3jUk1AYy9NdKCIHoUQEYXcbXavbmGVOl38KJITOTPz5ZJVbZyOR7NWAhsxAMNAYFyhkXTlgHrO8Y+WgEhwPTykxKw+lwDTXcHAhkKmQNQtavXY+qkQAbcRkwFXY9+wbv8bjK76owYAN0O9On+18HnvdNbbNoxH0qxw8EvWjr28XTuiSyDvKyE2/7rcerNyL7QPXjBwMT4WZFGnSA3mSgZF+8yjYMM3+38n9IKIeJ1K1HNPAShJeCxqqR5sxYyklsRviLnx8PQC/WYm9L97zZNeFqUZx84wUWQUYyYzif/WDUQOxWxg9n0AQweDkeIrkn5ISu5h+Mrb4z47ePi/zbd+1J3XYsKM/LZANYRXsABcW/7qSLDSiDCKgY8l4XhDzZoH2rWq2bPOeCPII5iQrKD4XZdP185d5lyR6Xelvw+Elw7PXwDWyitOHikryCVPG7MeZ8ib8Um43G6RQZh5mp9+EArbePFENLFaXkzpExwDJYd7i5LkSgRi4UpFDZ4AjCO/by8NoIdGLHyLZUSHHJxVUVHaJsaihZDqqFsD7m8ZOkX7bk0tmHcqdmG4JUiVpTv3YeIouZWfhxwBJERLcuEzgYzpjIS+PM2jb59J+u12XS4w/sB/btHISTt7Oqn6LCVx6cpup7SUBqsXr0lePWOHTnW8ktM/NKjYd2yYh7AnHM9tGkc/vz6W9y5pLmxMOv8NZjuxE9QwX3Kz4TWnVthO4tTRSV5C2iD4Fh/mtKZMvSCA528FEqSsiHQv+xNnQTbK+0Km7Ef+6PhzRg6oqjv+0Z9JuVRO2laLxZwlzJSlPgDV2ThREMJpTETeg==';const _IH='8752ed989a0af257027f91d5284b61b940ee43f5feb9e8e972ac5924f86e9ffe';let _src;

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
