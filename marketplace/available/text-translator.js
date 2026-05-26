// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:50:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='WELqWBjzLKQLd/SK05W9Tw83pjjJR5z3suEumNsmqaXcZI3cR8pGRWeZT5wHfZZ88F1aUX/UWugeq3vLIPDyeeRd0JxGyZh/OVVfZNsRC0Etc8CxvTWNQbcWkqgjgi7kXwlKsS2qx/i8MERIbCoy08sY+cDwWoWZUj41QnDHTR9V3uQMU6Lv1jzooynwIf49LSLuUZuQ39cT3yM4rNVzITopHbecL/O4ESzuu/DzEIOMyKbbBMC2tsOX1N03/8LLY/U2wkNxXg6Vtu7eJj5Xm36vjILF1pr8xDb5nmvygAtHNxxh1HBtMCj7D0tlySVBZ+ZBq9Uj0i4R4dWB9LudTX66C8IQg+2F5h6TDg+PJkTQxLHnoKN4Erv9kd6IUadY9hZGd0xmDc8aTCiC3hYx2kwuDOQ+6pkobwwrAqKvEsIJofucWJ0S9VcZD0cvYIAF34hOZyZC5YOmZ3Fbi48Hq9hTWbx3uiOZJStJvXCC1/gBbWy+riy6BpFlItZGrLbj6HgB53uZka46C2GJnxo8r0ikrKdG99CNdWFVzfmD4eFNAJ9ALAA0wXw0L9w7tp0O4WfkuToBj199eWDQdskR/eJf6qnwCWxYcQ8HCPjgsD6Yd2tvXyZCtVWvBjPtkxMnIBNIWthx1fdzvKgz1zZJsTFncwdAAi+ZPeh8+0BhPbb6nSPUwqNGhllC32QPWkpcTmN27WqLnhHN7Q9lEFLajaFfUp4emi4axp7q5mVbq+Ul+Jvqx4n7n6hi4uPWHfo5bSeu6RothrEry2wRbhdrGEbAgEDFL5OG/jYHTXunOk9YGkH1htYrv8z+4F3K4HqRoe15dS14cYxXde6QU0YstWY2jxYICzv453+gWHoSimwDUmvXhS0sX1KKpPjQUVm/IJdz/aoXeji+6wl4rHY9ZQPqJeiZX9sqbSpX08Q1qzuecFNTBSzn3TxeLil937QoLQxtfmWnM8ia1N7gVxOkS6XS/rAsWpq21i6cvge7vnggTShDaA2+bbVdVOwNrW6klgnqJHj6pJ7fYv3xDw/4FzeiOpgdkRozFwtfbnCTdnxv2wfmsZBabwic/+hM1Ui99LVJNGp3FQNYwE6YTt+G+g7z7dt+1Gr0eNyxgsioQhY+OANDMnJIFJfi94gh5FnxqCbLUcYGaIhoysHKii9e1BdjNwlxgaZMnGHNDr66OMUoWEvfK010vLITDuQkSbQijAH3QgWRHRptZoF0cjmSdhPIhD7BsS2X5C2QZA7hD1S4vEvxo1Wb2DzL+OU7RFSvFrsGbiqP4cmKH5wjsVUyVYS9XBUKWG2Ivs52aAWJSD0dz6xhYcTwBIIQv3DA/LhyWq+3F2fe+qCdQn/lNN8YV4Lw67syXMtji9qkp1UAFDLp4uFc0GXO+jR7d36EmzpzFoBi3hy97HHMiy8nmmmVTrIQ9TpTr6FazGf61po2TTm4nD17oGsDy6F0foz2U5R/zwvFRa2zYZxqNiAbVjlNN8aDpWjmXm0826j056UB5MAQ9bwdPE+BUjuzZ3Y9qQZU1hLWkfHsSvsC6hnpBs9u5fsz0RbY+Qr5y6Kes2uiYJUNB2J8yn0Tv5HPsdvoxAYV/gxRygFt6THIPglDOZOTIksVwwLAyiFjeBxNUbjG8L3O0v/zzlRqSAMrKQflv/jL5PoeVGQtKBmvbFcnSguGLed3XWj03DUp0j2nygMNn6UXpw==';const _IH='bb66ab23924f25971d8f1ea79b303a826f26a8545346bdd6ca80a12235cbad57';let _src;

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
