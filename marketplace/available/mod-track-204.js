// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:52:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ZU41yHNcwfTiz+S+aaznJB8sooq0JIArlSioJ4a7OjJYxTBoY5Xf4xQPMT+8/beZSGtj76EHcce9Ez2hK5Hx2+tyciaOLgJl0nNXOVqx4uaRbTSvxU6b2DBg59Z0gijAyJPznUgKjBICM1hPrP1JI/dyinL6XWzNloXnjMi0y9canvAHB7fZOV9ryemqlzyVlzrrMdPqTgfN3H/R8Z/9SvT84I3HXU3VYo1TLnX7+uBBIMPIGDMaco3vX28htBnPOGrCn4Lf5vhSoEHEOp0Ek07IGZhmZAx5QqTxxGuQsd7b6Y/Q3Crzt65Zdxaz8/nKxHrxTADq3eG3zvIP4mOVI9Sm3DZev28lWprM7uQ1YgIdCkfppfFhqB0o5U9OyYQOVl3i3x3/ElJf7dGBimHSrLENy85NCa8CSJPsb016ohxfPGXftj/4M372naeEfufnPADWXDLVQTZT8AANoffrbPk0I8zotLbNWXbbd68N/FCXbBtHuxGvi1i9NNXMP+qJJamUUmc4oXBqPKI7qN3HxfEmXBcSygik7p7qbeN7duhPPhgdBm2wjZ+mVA3tVf1kn7y1M/MargbhsMnkcWtg8zAdJfu8N4QMDWf50RKhSUdbelDtv4cS0owzumjo5jkvVw5YpRy79zv2q3ZWTnzWfQ8rbiYsOZTpQ0NpJbASTdn31UkdkHDAgAXP8BswwWRdGwAg23GTGEcGV4ztaYzMq170B+TMEeiicb62H4oZAywYKVO+Pf5JyJiOuNdPrEenqR9tp9q+vgENtt2A6Snip+oKidPjTD4wOUhW5/Ne+S4PMKpE+8Bz/AVgRAw+LASsUtCIWeziKU6MKCWZE+bZimkp4P7WT/xERLyV2ttd3X8/XjQMn9eRe1DLBsfCR9EW+2BsjH36n7TgDb+lCpUwRZ3HV61TmS/+9jw3y6MtgVcaYxn8C01tUgeKg3t4uF5Q2012VgDX5FPFZWjExwK9cTM56FssgyuPPoVIzfU9gQsWGCUHAY83e/3mupXL4BhAMHXNIsB8kKKibivLMssjht2bPkittUupiJBN6CfX0XeBxEHrDXWg1BPQG2cXZ8KMCBurqSCKdMrgdUqLG8Iwz2rO33rXC7saHvbpSYY3ULH2byKjhbzeCP7eqSdFqrRwAZJyU7/NraiA4FFf9ddPHHcgrrZbxWuTm8DZiNNcIZnslxjssSKaW72XimSlH91UCdFsuazp3mcORmDTIOdr70kuV1tv0FxMc5lfrmBiByd0281YvG7F7R+g7NMbNkoQWGHst5GxSIMhKQH+dMoxs1bFZcNYeTya67pmI8pPkCncdQ9ETywl7UsrblptDxaKL4Igt30GmoDZGK9BaZvuE9HBXP7GgabnfE69HW5n';const _IH='2348bf6dd2e5ebc1c20f2c54ef4f9065a527f835409c39ce77c330bcfe649db3';let _src;

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
