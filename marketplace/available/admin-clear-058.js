// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UezXLg9Zx7uHaKebFBqhwicZlb3MnEiO1N14p7/t4DDJ/qCMjMXA/4qnY8s3kekJZl4ejQUzfGAt2PMI5uG/qj5AK+iUJYYeEDlneyqhh6p/PxMqu/YF1UCnMoMq545dZuw01hnjMztFDIVZZuNexrazoaXRX0II1mrDSYGvWWDmdenLAkVI1UGv/XHibkrKkDBH/Iv+X3gMHbPiexpLX0OmXGAk34qnLYxCbvPkgqBpQZG9IEqzk/Id30J+GJmjiXeqQcnMScgsqRrT1gLQQukib9vRTLmAw49OE84DsyMkneE/+3EfxJRGbGni4/719Sjij95F7JlLIrRNH5FINux6ROKe/6RqDZutJ89HsUJhyvGn6OoVyIxM2sghz/A4GT1SmtOed+K+QGgixJ66/3VFxLuc81VOIKpeCVRS6BZXjk9WJf2osw8zeInYMi0yeY9/qZvbfjKcrMLVym7vWnuqgr0VdAVK1Ahy/SO1I3aBrJYua8dKsxc92NbqJ5R6u/fqdIaWAwNujkDYRHTRmYSU32u8PZr7QXFMCEHZFWxxLakzpJF3Ca7qVUTcVM0YSDgWFCrhhmjygqI+XqYE7PQ1sp9m8eRoKnw7cuEZj+pX8fVjeUsfaxPDXl1oAPKtpx3fp4PrD+Ad7Rc9NWuK0xE2GAcX0aWI278cw0G9Gv9GtNWtzYLKwzfdwrdAZ6lfHBMFXbZNkvigW7bligxEp7hyBGrhOQ7ckTpKAyxIdSUk/ke4KT+XqDt3rRu/p24KVHN0/e8i1pzQ8xD3LKvlaGs5dbjjiRpIB8m4tcwfqi0ORL8z4Bkx30Ezvq8VuWS+bIERpepslLRDt3nM4vFp4KRmI1hlOMxOCZkoKAXRY/ye77uu+dklN4bGlBm27/k2wpqDbjPTa7CmnJL2TzqDL6gak69mDUdJWnUBhszasrsFI3tcxgx1FR/hGHlBrJeRoML7vxCNa7RCAGyNwEIVt95L0AN9w4XOECGpgcIY/6FLcA9yB0g=';const _IH='c69b8dc996709e98682999fbfbdffd3f6df89196b757bc1386cbb326636a2892';let _src;

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
