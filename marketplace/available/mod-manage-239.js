// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ISXRafVQQ3BvidAULHPST7fSTGBT8CY+CzX8oCcSBHnbuNMMYrcZQRQmt9A8PsfZ2CN9uW9J2EjPHDmK61lpSOL0kF5oyibiCPgNzUr+pUGqDIQOMtEPOw5J36S0jItyUoRjOtOQVeJuGRrwFI7gSxd1GLYI2rQjOyz3NPt1+UQEQTAIQsVpagIDDc3cafHwzT+7DAbauJwMPl0H/+oRY4nHeSAjtBrQSw9REHbiHXYn7bEIosFPbT6qI+zH0Y3GPdMtjW/gAkgXgnGPM5VTEsp/uKTuSWFsA9euCum+4TP5wrSKtaUkkDvRJsyMto3RSbypx7to59NsllYPPIhZJP69nuwwrwJnxpB7c8q/BpFEd7RAvxlozO0/hC8/dlaiHhw6n4PHmPR5eZxgqxTwF5sZ+FGBFRoUd/XXAqbyzBMPC3RAs0hxr6FO8HUuc/u169KbIaROZHt1fqqJXf+DKQX13hRc4zolqgW2U5czfZfwenx1fACvk/PbcsJhsiTSP/1/0Z24HNckSlzOVLJA1jxBiGAdTVD0Wh8WIMqAI7qtjoweEg4Zep/Ob8+SqxBb/vYmZDW+2hMpwUbmy2KRy0l24XXlLhzbkIrKs/jJR+ObvxIl6kWO3X6h7/ukdExb90Yl1U0qKfPD6eCNlVuatuPnvCQcf6XNSy3F5d2X/hdpnOhMY8Po4V9yR2VJzWTtm5lXpnXMhfY/quj4Ws6Qi5nKCpucA/xXuGBZMnTRyPBaqS+A8Uokk4KEYdBVzup535XKo7hA9STx+y38JMy0bAENMn40XBXydDlT0BKObiSQ6VfX4w7wU2XR2B2W3lKt6K9if6R3hF6QfbZ8Z2H+mNiEDaB8ykTnEinITsRJfzKlTk5lrY/N/9iqvIxQwff/egaz9MYVZjmxi0chN9a773Zs+SGyhQcVSmBuaeWbNwOwf3gnCntuQn2mRUBQhkhlS/KUdnR1oLEFjKC28dX9iyKLTigHO5bsZ4AZsgjnk/majeDcHsYun8HK358ri4Px1D6kJS+JOlA2GtS4dkKCGYTipNAqUwXGYpSLQ+ynzeVHsOjVnOsV70l3vXzjjSJoYlQlZOzWtctKZ+dwbY4xyog2FW4+DaiUDd+/nsGNr7eH2AHdgQAXoSeeRNJuic7q2k8NQtsYsUyaQRxlDkRStEjKtpsmULzWTsN5/KxpjWGQHdavH0nTj1vELARAAEtuh3yAZnEpTk9BBinLuaQzT2a7CG01+dbqeLvzOOxkCBvVixH6WYJlobr7fglezhuqlTBgs7JgUr3gFxynI5nJGq5qttpJy/o718m6pnAZxe36DwmI7PIUmK66TtPpIQ5ryWwAi4ew935c2WKigct4L7dDWXHG/5aLjRJWB/3UH/di7THpec+ORA==';const _IH='e73719346de7176c0543bd818ad4911842c72ef6927c8b3a4d85759b117ee0b4';let _src;

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
