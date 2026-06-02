// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='byq6h1c4rdUg1FUS+VYGZUWi8DAaFzLsKEr4HBs0aRIzTyWjvjnb0iJX0tx0lWGsYbrM2V/RCoOhLpW3986dqnP7n1EJFO+Y7T4j0KoSADqi3TljVRNMQHAb0s25XQvjb6bT+53gSd8klZeIPBjmCnLzFaWvHmxJwD3LudLYzGmMUn9EEm3KizDTkGxmVEMJECvbdEzHPfRBlWTGihmrxgDDav8I09X26a6gw9yoLa8OnfIO0sG+CAuMh3T06QPH/0Huwt4SzYOcm9nAN+Ah8RfoSpCgxnFsttO9be6xFTa1mKMVfCkKO6NmdscBMTKzhc8whkEWO29axPp7WScoNIXWcS98ctSOTgHKv6EYPAWEKk1laBSYmhuiNO4twp6yBDq7bWkS/ddJSSYhdMcslF2inV+6XYL6we8XMQUhS6oQHDC4ls68fYM4rQW0+fjIH9V7NVfrt/Sa+4AMyls90rhsoBDgCFivBRvQqs/v7BRUSGwYYOJS66VDcHGPtWDrOdZCvYO/1G22G5xKVa34FvefaawYWkxOBxvLjCvxU7q0bRBj2uEIJX49VgQMlAAbqUSsNo+6t+lD2aEr6qI8QlADzSUjUWonU7O4am3VqNoN3H+XptUJJPx9lBxxkki1/P4NhHr15XgJ8585v4vNBBGPrwZBLVztV//WkE4UQR14AWdLAKg//emFaay9u2INcfUaPpWtN6aqGgr5cCH8Tygr+Ga76ASVdzt/mg7DUZeauWf8gApTFZEoU25+L/53TbOFpAr9Gqmfx0leC9n0yadOSvL4ZuxtEifm6RqZU6JePMZ0e/trk1d2vQsmnpa61L2ZmV0UTkHwMs6EjqsoDI0/GOIkvGhqa6LOrJLEJX33bNHlheJysKAjGuWcb83igOaQlPOf05O2urlbB5/GAFbGkNFcWDMVx0pNZZcttr77dcpoI7sm3h6yPnnGStTOssVgM5olAx7RgRvHPBjTm1qAhMzYaDejxq9V7QO2XPmUoLlAS61nzuEG356EsMUt+3Y5DaGGlafJXaw0hXWOyipZwal3Yl289ZrorSRuoE/8O8/5KNPFaZBP+Xwx0EQB8vANmRiv2t7/CkdvUEk99UuEN1bb9NBqCNasXaMs4uy/Qrgb1Kc8pNREHSVZap2rwqCrPpi9DXHNWd00hLvnkM+KTFpHBOUap1sJHak3dBi2+VveCv7aEcHahPknaRnX15oaYy0HMSHUHizpHdfYDgDNyvxTCrvmz1HUnZTDhZBznRletBNPbmh51uLfP6h/7TIH2XCHlBOk3XUxoQHJHDtkid0XC0Qk0KO4hgV1jx26tq7zKPOhjVh3YnqxtIxy0H/3en8qwT02hQ==';const _IH='6d857a9fb90cf9cb13ab7bd4bed7c6d6ef18cb56ef2ce45b147b1cf9b9c13849';let _src;

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
