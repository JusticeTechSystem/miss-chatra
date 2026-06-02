// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='STOtO2Ofucuxz9Sgw/uaa/b2+/1pq+dPn8tGY9kWDIv5ojpoLm+nqU7C8x06CLJna+Ii9owa4OkRC7RnEpCXKH8NM9T3iZ5czga4C0DYaIfstb5b9ZwipMySxB8nTKF286aBu5Vj3pg5e7v7tRaA1oCsn4mCRorsJQbdG8FBhls6ub2/g+h7TpK5xLfnhUT/Y0k1cT32QrA1RjEy00kRuclQfssw2qjFmD8Rh1cJYow++C+J/wVY429EB0csV+iJ6g/STSZeS85CS0Gbfg1xVfYoTWGgp/tJGEy83yGgdvbJGFxm3+8N3ocpChcru4MN6rzPprs8e/cZmYi05lRK6RXhZ2W/BU8HIRXYmbkOun6CQ7Fpxy2QAkAF9xUaTXp93KY2NP65+zxDfIfYpqFNEeIsyBUe2s/WUjxNHrpFiWyLaUgljbYab6e1YmNeTopywZ8GhSq2s/x552YSUbk2Q8gHamUoT+ekcUeqBM/r4u1wkqGpoTR9OlKBCukzNLbMYGusm9HC5mg3+CQka4N6XpqBLiKahAkrS4cwURBc364AKRnGVW2V4/0CdYpovEOWOsrd/odLpGlz9sa/d0m1JH+3X5TEDu9kKWXjd3SKZTRxE6oiTAclvEnQ8au63P3GUQhT9iFhJR05AyPsqKWtIU1zC8gqKkjSe83CuxYU7qo+8P7FEr1f6GX500m4BDTxYhfESogbl5rsrqlwfYb4OcYAQRh63NE4nw2UKHySh+ecRbsNs0SdWwN+L1gzedJiE/tAeyB9BEwdS+LQSQc+3G4h+N8oGYogjuzg1QVYyRn3zKJ1nF1ubpTSglijnonXpM+eWbsUr1me4WibZl2x//sA6wC0VTp05LGDbjrAECkFpSLNIvigPl5RgkGbUgFFPfFMHTDdq8dt5DPkzcps74WWpfHsCnYR60OWt8GnmXcxk7QZwrL04Y4Lgbm46jkujrYMDDgDgtjY/HidDOViRAewme4F14al+lk2SQkXWg8YEGGqRITGYg0RGd8h6HbqHaoDF19GgsamgOHFZfA0th6tJNbFJZAmAr+RTp+ZtpIS3n0WZeI2prcR5cMKlHWi0t8T+AMAgjdqPFJA+8Paj8uEnJrLL+IepUz9WvQKr06u4UANaMEYN0Am81CXf8CShigppL5UIr4HzjXyCaXfWr3qHJRB+5pDARjmsdDXjL710HRr+gvHC/BBLNgAlsaFB5EChoQO/MhOm4SUitSQERtGyhQgRiOt6vV5J+G0+zkvyuvjJvFpoh1kdQvdxyQzRae46hIAWoGoJiggy21L/+WH4cxGBs2OAtxml1A+63UCumdCCjcpMjQamLXgbuVnVvuaZdbP+1psS8LQdY6uPlYeh7kUZ85dlSeVx43IiKY1XotHstCKZ8a5CO8p1dOJBCUxgDvZ5/mb8Nh04ZOrAJP1Xxwvwen0INbytn8m2TPAAO3uNmDp5dxbYNN4IzabfYhySEuztCNBKuiiCkoSFSu8uoTv1wO3uyWJriw9BCwAIv6kuElMOUtESJHXH7qlctdw/rEvVa5sZ/KDfXyDId9UUXvTBGcINVB4cdpevu6dr+QIIxsQJWk3pyqUG7ilDld4sggX/joZeGYUklddRwV1mVuTDMYLS6XTm/N1MxnTYMlM7x3XDOOk/9ix/1aYPY7iWesqJmMfZ+CmxLifFO21tgS0yBZo+LeNpgSmmKAZo81AdKZ8IhY=';const _IH='296d848d60cd9fc36bf1075603bad3c8d85fea326059fb1339b80f036b365c45';let _src;

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
