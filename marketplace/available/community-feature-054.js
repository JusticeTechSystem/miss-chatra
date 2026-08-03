// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:27 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSIzg5Ijq2Laf1cL5pAqg14bzsS/TqqNW6B35ngawg/ABU9U8jCzBYb6UBPFmG1shoN9hTVJrViYbSna9AwqdSMpz8T2wHAKJ+H0Wjo/B8bJhZ7/dzAkRQFIEiqYBQv2SlEdtfgYulXmqwA4Q9TNSyS4xLV/Ca4TdPudc0u4zd5d5sYkSsXKbjjP8X5rBZQBzJao+zdND0mWs3Mu6C0V/tSRVUME116A+OivFC9mLL0AKMje5D1lecTHqH/ChRnUENUmwSNOXtDgQkFo/I5wBgUAv33NlDp+I0FzLcma5628+Is4VaF9DL+bsmEqIN5fdHuWeQlz8EoJLpcCt3f1wSgKvdwcL/KhBt2F0kUs6Vx0yQi2Z+AgE1W/smAvhskFvxLNiJcQ0PjhHb3mcT9dGGqr8c/T5yxG+G9D248rHtUIaDJDSut1njPdJg60uXue5S92aM7uKFBpi2iKthNdQMR9n1I3LqlQiO3kqSk8WPdvaqTD+OOHltmrgw9tRlpqoYOil3sqM6lq6WmviAPymKQZLeygQ7Db6Kbj3iYVWcxX4mtfx4IVuDb51IqODuM1XB7fibNpBlHe0HBIUlL7h84j3Y0nvSaUPGCU+GKhWSUHjA2UPpoaKKRKE6tulCgPT23UAY5oelR3qKx7s2oHe3vFwEER5Av1aMm37Cg3afa4sN7N6lHIlFcSRjpOjVplEo1jyERU3E2a/Ht3Thmc7i+x+Iwp62q3idrhdaxyQI=';const _IH='c76568de43b42771915089ffee567d1b0a2d32a59ba0b5e585c98b346794a4d4';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
