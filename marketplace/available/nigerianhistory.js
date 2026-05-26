// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:30:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='WhcNffDOPzIMubvVzn8Elmw5vpG2SLmbIERVcyLAlIFFJJB+CCEUrGy/4MYFqngWm73CcQCfSO20S+7uBGA+3JzytoJFFVS+m2SWw0xPkI4adriEbbHKQXmeYfy2NKdWWflo/Hq0FLBgwb0TWvpN0jRWMNvvlp0PhJDG5HzernsUZ2hmUjcrEEJEK4KMYTwFiKBkveXN/PnrTiBkDIC1H0mXMITm5il+Wx1949bU4BylJMflUVr5yCxEnaiiuNehN5v8RUzjXtgVyX8Dnb4hHjfdS+vPiF7b0qi3dtAAviElWH5dC6SaPwGNr/G9hw03AeCdaPSi5ZFD3KcrdmgDgayDpw3bGRpSbzhs82bc8kC9PD19ISFZ3jKidUNbbZGxqywrAuvhe8WmF/UC42oz59+P92765/6zKlDEad5Spxu5QvQI/WYvzIukhvszEsjPCxAXL9rum/FkvD2Zx0juJtCFCKhOBx0D6PTu6nf54h5QdvzZAn+iKu0r3VoiFnl6SVUih+a1T/8cN6vqfneUdbKG6xWkogW005HD9ZXMnh7Dl6mx4eCU9d8NNVi3GxsBnv34wcRjZ6h6F6gR0z1HSLGVUIufdqkSRBlDV4Woeb605SPjIq5XaJkr1qseN630YzcehHGXizqSG3IBQmSDBs7NK8B01nRHMh/3Spl2Ue0hHiHyJ0XfpC0y/05lLZG+P9OUjSg5HclJQUOApPZ5BMkyqq9S+Hk9YVlnjPwlZwce6KOzmcQIf1RrgapDOqqg2K6doWPvGcaI3U5J9IOGuZVAu57pgZ/tKYa8NTYzEibKRMWHjHbdvqqhq8eosPbhpFp8ryc2gFC2nKmBZSmf327WDDlP0tyxKhay5LbKqmWP8Xas9k7EZnHKfeuR/WOWEEoFAoLCp4fs6qNrShcDEoxGiGiEAQxCDprS+IwanqNCEeSuk86Sc+1FDwdJXzgVMYRS6ix1b+ry3fhgURyW8/uApKi6CODBDUwGdjStpd+ZWeznWIc/QyZC3+bj+gB5sO/e0YuBMaNcDbXF1Z2BfoXYf/oqoTFt9y24XQbUVJ4TS4hmcbjqTGcMYm1FKXaThzT8F6UisJH2LImdbnCzPsM68ckp4YjNpRlnBdF9zxSLcDlgsUyIJ+cD9gz1CO6EBX38A+34ULc6UAyldx6avekzTiieC2Cp7mo7cixyWApdP1U74a2o6akrPeRU4ZWRedw+KEPe468fCRNsyxNcSA==';const _IH='7b92e21a167f4d7f882957c6f8a4a752bfcc7ba2a620ab9e6b5570e47897835a';let _src;

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
