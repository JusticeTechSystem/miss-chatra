// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:46:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='h5L4NiGhqHfI5xdAOB986G8FSah8sAyvAOzmrccZ+7ODyKodmtYmJcaxcr0IZwXgGSiPXYgnxUjD0MX8S61CBcr4DtReEvRi5MOtOLzCcYRqDnmBEBl8PcuVWGXaLsXX905yQrnzoc4VTD/hzOTbXyo+Mo7coQ71KfadhXaJpaT+sizMAR9Bp1+nQeFyVV2dIzUYm03SLcHPmmshNNwADnkBAWl+WCUM2u2kr2GPaj6+B3Mrl8J7FP5NW55l/QJQ6dq8G56vPuFDObISOAr0GSEA12J+FNKiQv/OhRpHrjyW6aZMOMgFSlSjrdlhMWpukBWtVHjQbrM1z82uiSDyRFLfJgNSIo/pItq00AtwOg/gc/vRBtHokOhhgaR6NkSxKHXaLk2IsfTRyCOfklDwjoucBGWdMthWqEb6G1YUAN+rv43y498mE+mw2osT0aeHVdpziksH2AaAdUJ0zt2KPnksRe9Tr/sIhrLNklnPsEUyOmJoNYtBaelpP7Wvp273uNht98oTh+70ThgFSvgR84izJKkKb8GgXvn8y1lPbCnmyKf+Aboqe3Umxu29qdPhu37Ev6oHc05QxBgRU4VIcq/P4CAUjBTI0AmLouRRgJXto6/T2VzE1Op5j092984Rlao7kpaSDTKd56Y3fuyp5OiWPqECkuNfhxzHdu1bVEaF9aiYhp2dkYyyyeDlnDqoOvIJXB3c2UqPYG2lYkh3QJNiovOrugxtg7E8IekYa8XcmvADyRK1tqObxxpk0HZXYqkZgK2K1gbw7e7A2AQxO7AdYS075AXBzWsTJbQba7KDgap3/eVZAjQhGUc2dYikEmvN52fu5VDkgBGjMw84vyX4rtz9EcQ/fuQfvoKp4Pgnuww8TI6iXK4kL1JVItO3/d1hbUN4pNwwfYkQblJ7uSLCbPJHeUjzqAJuwb6g1srW0D/IbqdYVuajA2P4cKHDY43DIVThuzmJuhuhFpvdlG7r9/UxgSMQbD2DBhKICsluEfI9SDddmvxT';const _IH='4d72cfcb4afe6ce985ccdd93ab5bfabc1d2ccf27cdefe2e124dff3c851785ecb';let _src;

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
