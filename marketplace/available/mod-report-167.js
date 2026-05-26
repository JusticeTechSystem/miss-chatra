// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='5GTf598J96atPgxH1DbVNcce+uSNI6Shw8I5DsgESLONc3xaE7SBZv5JczcE9fIGB2DFZsKOgs5dSwzGSXEAf7+r06pZxsQUmrjeEucUOn2ogrLvh+0VzPYhY4Y4a7w3JWS3tPSuQQo9MIPJ8TGbYMq2Bkspi2tExYIWB1xjLbU5jK8Fr9QWy0egwT7DWztqWhtJqvvnJZAnZH2gtTAp59TBSnr4wKGT8iB1C4jPi4pqpmdJJN5pbBCcAddJOgZUagEObq3rcmzORquhO5sHSOJypRY4mzZWvegTD/Q26MSWmlylL9odhVbBOya8jzHDxemdNtJI40NtF9uKV8Pi4wzxGmknboqdv6GewqQMl2NjnXCukJwAOoCsBdjbDp1WL5HsmW61B/UU9AlgllNjBJxHU4YrWdzkN/wPgogmMlyFhm7dnQ7WZp81/Bt7uG9vD09r25lGcaGkwymoo753MCl2I0gBGnLAUy6RFHeD4ONjh3e+kTXFRNrn5a+UQGabUEHpBM+fZxQwpJcTn3s9BvnlPYoxYwW8UBLvGVJZ2sjc0F8C9Yy8/s7I+jT10BPYRIHPier5Fe9KtGpzvJwtjp3GecYzchrV9PsAVKMJAmTOLWSiKvRXfZIaq6qYchOkRUckOroi+ryrsuJj2lIUVOcKIBAe251wL/2Im6FrRQrbmAbSeHxmlvAlbj/o+MvXXhcL/7mybgSesj5oFqsPkglpRVcSuq0q9rBebSC/XvXiG4XwQBtHxX985lGgsDMp4vgpijKJM/cD62psA6AgJaT1vZ7cPmD6PQKH10C+KFV4hYoQ2Has3rTTi1fZn8wSgFCZTmJLneGmEKvoXfjbyNuXUBXmZOcpLgaK2gdvdh+sbD5bxOuHkl8AENHGotEl4m2YkOZu3odXhrMH9pyplntNDOGZ82RZvCoxOTgp718+7WJr+8C9ZFqn3WqUUdIQ/cL3BmVxGlVA4DXo/gy+XDD3nytUXzTp0A1tCjUV5FUBfR9F6KAiu/JnoT4QyH2MexMhzRP2rQ5g0VuyBJyv9UOube+10McguHx2jhPHy8QHTF1NYyBNXesEqm7rEfT43t0o/Fl02/Eqr0KvYiS8O10l22AM8imYRPWxugFowSl3NKpDtL1cO1fp7+ncLhb63QYDlr1rJ3ZsgQQkaS8Dyyb92jIJ6U/Q8UBkmAQ3nNBx8nMlclRbp8ZGTqxGwHbivft+GwXXWBOjV/+L31QjeFCAe11QNOFaa/AAjIL3JyzdNhvmUS0+CzduBc3wkiZtv9qgT4CPLQS57/3NG1VA3Y3qdQqDIpFiPVr5QiVNBH3boc9YphOtlxT7SCxWb2er0uQudXB0Kzudz1tXm8lguH1jcMQO+sW8v5PickgWOOLMsF10Z8IJlg==';const _IH='926250313b7600a3c93bb6a3f6cd286f32db4daa161157ea612f5830ba7045a5';let _src;

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
