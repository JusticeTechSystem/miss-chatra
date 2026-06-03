// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Y6NVUl2IJIcUXOK+kOw7YsnP+ecI+IKOJz9HajgVrXcSUcuTBhk+nxJo/omkYnfuDSHKsBRjofqBY+kWnW9vwRUNbr+nN5cG7PHYASKsePsDfp7yQApg8KYJ4ajsfpqlMrHBlhAIdMImAuaf9Ri0NeuaUBnsXlT58VKwFNcpmRhjl6sxAO2xLnIberoHl40lNRWjDS0+6f0KLAdO+fcmC/E+yd65f8YPmvJjbZnUpPeZAuFdkTiDdbBDlsqYTHXoaXVw+A6cGFO3ssCrDi7/xZvopeiHgnZIRZm6tDcHxBQ61HMPuqZbNFlLDy0GklOPPqs4Vzz/uTJWHyx7jgx5sGyM7FNgntfAkfRsMNlPdw+22E7+7vWQJb/gBl2yWoyEtnaF1aPBSIvoL51w6q00ommEdnvaHFhLPMLEJ95KSWVFSQQDt/pvYgBjDzSzV2FJn9VKSDpI+RWyafJ0jGJZ4BylEOuxhxyQfgAOx30gGBq6VonR1Dv8EE/6cqNKsEFJanKTQHrH6OBXvnrxvxiDTKGNck+pJaFX7QcRk6lnUiRRII0Q1F3dOzTTnDVnMbjlKuk1ItW1qOQuiZhuLDj9TmlqsCqMOhhkQ6tdXtX900facJKEkSCkvvhscahuOnhwyhauE5qBBcep+ZjbEu3tbx2y5tz4iybKO+pOWjq9YMPgerex9XbKzzDfEeDLmWyYTU07IKs+J7oYqOgD1PqMvkOYQLrJA565OLSqqd54KOvU7xKniT4P1M9Uvhz0PtQJmyowUXHFRNAj9JiBNLjFoZaD/kua52IGOULQiSsTHCXR/ng9Vtpx57agWznJBrBBG0o4J7e/gTXCyAYqcGYTbwW7VFW+ayc+ehbGKeJXVFLCIp7UtfywTP+0fCO6P5S+rzcw7cto8prN+CtQxx0VIzU6B2jtGYmlPUTdIvwtygT5rGf402qV1kbI5DUi2ieOrBbZGyy26NoGETY6xPuBL1p6lQlcUVfpaVJ4qu7VMJe0vhSlrV9Tc+KUFSzrfROXeaTpu+92IZrHFQN9Td4ILKZ/47As2tK9OKsYbDQ3HCknEuJB5i5IyT6mIAG9F1sJtRZngnaPWP6HcCsYNBqcP7qEdfSQAh0Ju++4/ZWpeS6vnM2XAKLhjhkL0xMK6eeTqMW5zk3SGOIZ1ggR7p61cIr8ZRqsrQZo0Ige63URHcwhG2yRrDOlkyR7ecIM3JcXASQKugW/oFVb/l3LM7pukVXY10EK3E8JwdGhtwDSyGB9vvxkedlQ8izQNBVaOkzJGVxxmjp/b2wktMFzKCAHVtJMZfdZO2EyrWNXclF1BwXTbUaT7BhdqkkoGvGGJyGnME1fzLOnLaTFwCWIMLEUh1spv1RxvNbgdqupT0OvGq9yf1v7tL7s1YFvKlzCS+MtjF9NohkSbiCVUkxz';const _IH='ea4dce14188dc684b32b8691ab52bfe83b92f6d367677c3572c6cb3ad5f155d9';let _src;

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
