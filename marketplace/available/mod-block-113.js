// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:47:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2AnlD+wy0lAKZt/pngqPftC+tfXT8JDG+Lw5/66ckJ0oUP8bAP+eifMBXj1ElSKEsJ4Kh3QrxlTf3TAmJzwXyiqZQqdHe0IQjUgFMCKu9aev77ocHMXAA1WdUUM0QLA0Q2g1ftzpAwmPLvSx0D6yT3HdQ3b66joVnbDSpRH2jE5Gg4ppzhCH3Xf0Qt8kgbXXw/Y9SvWC5Um7rLcNxTb7kgVE7WJRaGx5/ZTQZ0y3ue8a8r71VBxUHH5djzwvrgf5Ro/o4MH86j/YC5WpFJxl3Eu/iWtK0/JbtNzVTmrObpBWnYHLnwJZ+fHacd32Dy4rxm7vsEWNfd/OskBGXf9/rOVF21gYzcaDh/T4MTYTU4Xe2XP9EVIkZq6m/yGq5t9ssvMl7QvV2NIT7m9redk/ZYijLy+qSyDhH3w2CIvtYwRWE1YY/23FQtfHWyR75f4h1J1Qg0FWTQxDFixhwrKHCwnv0+gJ1+104/iXDhuRIgC0chfgn4eqMJ5gDmUp+0GGzyqVihBjjF23r81Ceh0OmrSMY2+kIr7mqGxSzBnITycI6RAI9+h/m68fMbFsz7t4C+OxWAVMvWsG8UKwaI2Pk2MG073KDnYynVMc1L32I6WIf9bGlmVeN5uUog642EL1qk28XpTshFh4xOXewaifKcGRQKmnTxlFeBrrZ9NxzWSWUct+Qw/992ejvBEHP7w7Fxt98EQn+9wCMGjGd0JVBRf1eg/mtNcAJgFn4G5prLAJ7GujB1Q+wOOPZ2hmd/oB9XNO4vG9IsWrIAgAJhE2kZCwA5HRzW74FyMQydTtFzzibtIO4AHcRPUjskRHCx3BkdCvIGKG5IdMvDlV4TUO2ryWeo3X7LmHV4Uqk1708sKbX4JsKzwsO1gWzERU2rMTIEBvVamQbkcLI8ICOcLZHrzt4x2MlffPnGJo6uSiBPSO45I0qIK+dfCR0nupqRQ04GYkHKa6jrn5TZJcy1LnDwnmT70jCp8ZpgP2TCAQyF8/Jui28AKcSy0AFBBS/2T5WW6RXD5Qb+YkxTygCyGD91Phc82VOqYCVviRjMlTaRkaHKOn7eRIzP/fSxNI66hFwEeTZLmaL9HAaSc0cU0EriLbhuDK7Td29eBL3wd+BUJN1u5xGA3giVI9kDHn2ds+OB4ItVEbpj3pd7DdLndGNfDP2cGqVIOtPMRBDsuvGWid1sjzv5KQALWuLrNU8u2nrjTv+A/xgbVV/T+PsEzdCmG+3g8NdmytuSrymp39eZJqYPXBZ+wvHuvqvBaxKAZCoPqkNDzJQiL0O/lagrOpj8TQ+Hgtj0NB5hSk/7+oRu+Qg4jKONGT7BAM5icxr7jNMpNuX+tRLGmp1Cmwq5RoDkxWk7BjCu5wPKKQpiTe';const _IH='dce54e3756763b568caef7fb6c42f5191036dd263ec3ac6a7c2b04ee3b48c782';let _src;

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
