// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:29:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='tchkVXELKusoWMuiI6Awhn9rHNPS21rbGJfw3Wa5RonPpURDY0bQr9wHZAyRrupSSJgcAvnS9pi1dmrhscLluJ8x3CTi8B0unpJhQ3arSXH+/as8aa1RBZjZLGSxXUkxT4Ss3UqjHrygSJgKRScbvdcfDP53paaJbACZJw42I/A87NeK1x5/MEDlFntKPwnnv8jjRiPhv1oIBofuvgeQvK3RYUAYOzPvg8zwj1H3g+rb/Bfzp5PqaEckjRa4s6uw3nlaxrkhB5TDFSpsKcVMBXrbSM9ryp7/xeBB4otX+Jo1zx0NhiURHAEq+xybBe8cK1zwoq9gwq7T56aml45weyLhEJ40+UbZO8PBtcxa0P1Sn3e4JhV20jxoU6e8VnJx590wY8VMn9vjcLbbZ+fjLyiv4bggl+iV0kRMmQnjO80/0kuRv61xX2BSfMqLcPjlwTq71Iqtk8VAUKaXRyUk2fQbxqOcfcrrr1VumVm4Qtlbkc3y3kc8TV/Yrwms1xySDPmVixDa2SOBhum1CMtb55XYKHIqbK9mjkmX8fpqDp1whacIQhXJ1+ot9Q8Qz2QejWQ64AoIb68G00TeAtv//nVBvlQu8Z1iLc9kJp04gtEMxxWgU0bmmfOjhEGdwoFz4TgrJ4c/V7XhC+aWFv5xHsZbDigR/bJZ0nqz2YIHxjZPaCkNbaCIPBCsE/AtWwnlv2UNByWq+OTCYs10sKDHRXp9C+u4qnjbKvTv+nVudD5Sux4iZEc5ImvAu5HABk4M5AFX/uUusNOIR453xfQfQUnAt7dpelt/zZoJgAuWrMccnLvoTbtIv/M3ZuchNwRO6LQV5w86SFkwO9GUoNZEwFRy96jOvObHylNW3cTlIaTom1pgkgKg5FxJQ9pn461aSuD8t5lj1SkhfZde4J5D0bP3LoUdSuaWxyQc5rdSmQqN0wEPEKWVNHEFSNHbb7au7vf8nKertiqF8TR5vjLv1f26G7zOzt+mk8iP6tqsWOUBXr7lX9UPKHiCptNrRUSIm0JRZb5XQSqQFO1IvpcaAA2s1SsnTRAVJhhvjiJ7c83ktSyFebPMHoYoe6iTAlNS7OLPFZ3m3vFfPLREgRmbA0fI2Wj2rqdndEjZMd2uLaqkr476jm4VaRulGL9xbMFblEJFeNzdZ1VXOhNIOlU/rEuMq6k6RsZlCLERmzhLbJ5NTbBNIjfmLHZEM0TQhJZI6hmonXrNzgy7hr/AOeJE8uB0OUvB9iAb/A9J6zn3/CpCD1rOZO4fF3nQjS9o2MnfjCqD4+2AVXKjWVoqIsPxty2FDayzAsOoZnMUCfCWCXitxqwKt8iNOBN7P6GtFNS2kASnknQs35eUxnV3YcAvPwUGF/jJJ/UX2sVWVwZPigkS1hEZ32hLwWBpfGL27cFfq/YdR9W1nnTDs9F27lyO/EjHjSYTJoTuLmzNW20laQ0rgrfgkAF6DXg3zan32xlyWRHpZnJ0XZoEJH5q9iXAkTJTU/Rjj5jY5IDRdfVFwbObwpOpgmCaHZGMwfja65OLMoDo0YxN4tDi9RNePSawCTju9TrxfR3nV85/ox9pgw8n+uYCTZ9I5xbeZuP7JP8XNJTsjp2Eu0Vho7PWch9qQvdEpN90WZv3l8guzegJ2qNxmiPNx7EW6VxjS8nDGHTYdKLkAuXeQEBsKCmFctydg4PuCEQuvyfQNkjPTrpMBXMG4gDopTo88WoB';const _IH='29281d3a2997d668c37893079f000d3d887cb55bb4b39345db99a03ddf90e174';let _src;

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
