// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Z0kD14bekRJMW9JC1QI7k49cZeaqJ8W8oMzLq7VXjb/3PF2vD2Cf9mBJb7GaHeR4+XRjp/tom8Gqh/44nqZbEn/Eu0WvF3JKItz3nMfGgn8YaJ8cw/RC44QN9xgsSeRTAEEpHgXiRbsl4UKO4sHgBigOeaX4F5FrWER+E6dgiMw7492+Ujx+GDxCtHJKTU2apmzbgWv5BP/M3aT6hiVyA8s47ukEzwXxh6rTIRbyqeFb6yDOILeWYfv17X+gJpUxsK2mUsRPcCMyeAjERp5eiiysXJyzyOJJ5UE6YJ1AInxUsRob3iVS0I0hL1waaFgevkXh5hE1f2EFm5SD61tfBp3y4GAoCW+XpjIznmPSrKDFoUQHMxuWXjPCTXaHlOMPIHR2lr+spnsshda6OETI3sj1npTGXCGvdUL9y9UoliDqF0HajCKatU4IikQvK0IS3J85WvsNcDIKJHo/1tAYu9gCeyW2CyhAPpGnim6M+72JjSDkKLjspuxwfEvO3KNqpD54o4V+arc85DNJ8SJwRw3o+AX5AFcv2KPaNzaLrnsaxofbgaktKZ4prXqbGQREc5jHoSv+j/BJQSNbN0V8o3OYlgr2Dm5ins26wLDQyEVS1UDRSoNmlQToR2wSicy3RUG/qlwwmjTw8bHge5URVCO5HKGS5nSYUYKjYfLbr0ig28D4i5HyX77uhg2rDcTKEPPYCfjA0Dtj9XZRA24j/AanJeQjlS31+XowPgTkUdbHcEOS3YF2wSu2e20KoqitShsPWTfOXlyQV+muMsB7kVzk32l7g8ir1Sc4dveECHxN6KpGcpZ9RiwCJR56hLjFkCIuWVAQFwTnc6jvjrc2692Bkg4NT2hIfCoefaCH5zgoIr1p+uf/vd2YcMSpGIPnXiMZC1BABTR8lZNarFBJBTQfuRy9m1H8T9xnfKFsNZIaB82dDdBxcum7izjKiA6QVKfubIjwaUCcQNSncnXrT41OupLbWBCjWg2xbHdcXNsiHW4PtByUUj8QLS/Qdh5gftONHJa8gfr7foaGY/hIPxxmkupNkcD8Kqf1xxdOWIpWGG9JfozBbjFCOjSV5MuQ3eos/qfpZCE30uSom6pE8Hh94eYyVN4GwvLCnvGAgILyk20Xq1f6yATmg43jgWc6+FKFEs/2UsZJnLbl7KOnJnZIfd1ePLB7XXeeMQpS446+QZF4BwIuWcmbqlo4kEuaogddtMYHsKSgWdDFPuzantEkze/qLjV2DbWznX8hFl+V9z3fKep2ZHzKuH1kOujobDDlqn9kUxGY1Y1XBRJ3eaAwmprn4uTIrcCtdG0rpbXuf3MEDGWGeCvzA7r02D1jxaavFj9XIDAZ+T77/gokyY2HWnCCem8U1Q==';const _IH='8dcc4ff7d57b8a4b01bf3a2e922780a59e372349dd731fbc7f744a420f466e17';let _src;

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
