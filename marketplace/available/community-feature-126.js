// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='8ut2Ij4x8JKUhwbSpj47nVr72TAReF8+L24G3Rvp919rHieTDLRCrTnrJX5FlMeamNYdGwhSrPG3JK1FnCxklDoxH9B8VmkAWUzlOvSTK50nLNcH91Y0+X5adnvE1stQ0QJvkWwA3HBK/p2yMvbA9Vhl236A5rFq9Vxh4mj2cyngUMRjAQhuizhSuCeSeuRqR2WAzn2gln7Ra32j44gJHPH4xFJDqOpVV4oyCXnApFoJt8+tNs1jwZi/gNMf1A4tFj6TLGPzBgD1NbgCT8lkPEduDK+PfXQhySEqlSj/sjKY+zhBRsPRjKT0h7RQ/aVEuakd2To7Jje8Zi/awywvrD0ksszvZAodjuzwsM1RvGfLUBfi6Csgs+SFUdwt+ZmnvjZXcdQfp7ELLaR2dg5kAqJpsjv+91rrSP1zNtBHWRObFQ3elBf+0Ok1Oltg4h3MovcDm8nLgCC5w15mg/q7drdzynD3UeQl7McGn8eaaPm85wNCNZqcfNT1KHUKtHQDk/b5n95XvTRbRqS1gJYQHo3hTNw3lfqmxB0iX1d+Z4xHD5R/tDgRzHtbfoD1JqApprDf61RPJK99jpN3RBk9Kx4SwCrTrUDI9yA82n7UKRIplPGAoVIaThM6RW4PHlwMzjOx70Pl0YWio3aNPCh7vHpK/iyMauVuzGk7c4wsK8ZjT3Ju2jjy8U3KEi/mHaET9NW19X2R7+FXRS7mu02B537NVxtFFzrj';const _IH='ecafee7a5f5d2b7eed037437e33bed23a1a8d041be375ed1cdb2565a3deffef6';let _src;

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
