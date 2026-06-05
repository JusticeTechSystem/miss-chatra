// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='fX/naiUBrmnnfMbBb0juQTbylWBmvIXJdSR5YhJvMicAEiin9+CIGdU2BqYNwe87e026BwTW+iLdK0NUOWPT0oLVQoRWC9QxnQXznXWHW2GJvVt1rOJa1LvG2F2CwhIzUtHt26+c8VxNm/iHqfCa9/v/uFecU41LeWIAnVfstJK+lB75I/q5rESV/XFicIcL5ujeZtcIOLimgq+/8jecIcRKxYhEdX8KpoGQzC6JUqiWOTkvaSc5WF8w8xAO/j4ZgemGcyfmnGoHeTkxE/3ZrbvIGoKFZnakZ81IbgQ+DVQlA51Xk+x006tMUX7juO7scl8kCs3tsPWktBZ8Psnc5HFps/GQ9kwRdH/TF74BMjqYxhewHvF5xU9vNAV8nyG2BMZINp7UZ2lrUFHucmAI1/+BkR6rJIMmUwyw/ugu4PAOhaQQUinKMGxxcNDNgwRxzcZYnm/sqwLpCihg0sDWRagPxpF64wNILosmg/1pmK6CKKeu4G6qXLQOuL96yQn+4tD6Qk7MBgK6PelBl0nVdS47GT6PGEjbDbVkQNV7MsuCaKZWaha+6oYLGhpKH1uD/LeHYYZpFDu4+g+B8U5+i1XTYRN3stOXNmHTI9/ycvJ9FZkDpeoIB3cplg6kw9OA6r2xfs0roeX4FhyWCMjjUDlU7LAxz6baQ7XxIW/tbpDwqUOqnuMYhOtaPRjF2M3UqqTQUmrDHisc8M5N90GxTgzjv9OePjQi4DCHdnNyrJOwWpwkZf13sjQEU0i/EQFMAIbrGWb9Vog1uVRbrWlhltIzeC0ITnr37COE4v2uF7IdNg2ISoU2qtIAZZp2FoW/pCXgTBmlpIBkyCL6qCoAEB0Eudy9n0LWaMbu5xYNbw++J7VjT7RBWhvY7rFpvpvKouqjzesLoQj1G7u9xKrayd/ET392uFGb1FNDruKbkLMwY2nyaZbmMRs62+u4CmYCY8+JXBVlXMZNQLx15zYzOw/It9UZapQHHmhapicbkK1P933Y1KHHk/O3N+ZVm2oORWnOTO8JEpum9jN/i2H2eos09Cx6esHGO2W1I8piecFY0iLfTdNeHBvK+SfrZxvNSBnKX2t/QqtsYHfzGB6lEGVpKR0P7EFFwmMwv5Of7vQzHc8iLCtVXWUFcTi6kHJL9jhdyox0YDlyT31WjlthlqQtPJyj3FxgJwibKy27LTMuJVDuQgslQN7fPebPaHYrpPyouNosAUFtej/5jWQdDBCx2N5qnxDKS2kGrUk2/1KZs5eUG5G4pvzWCZUhD6mVMfXpcMJ3UKKFB5a5hezDVjmedUrrsOuP4jun2FIAmSTz/Q9fj1oMvbsrAJMuajqo6kiTuHIJkP0pamlynkpa7uYLj99pC5+6IfgWTYOc';const _IH='0862825302f24c22de7dd7461c0cd76d8ed3ba5713810c9b6a8f3477e3b2e1bb';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
