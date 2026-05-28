// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='tXtc7ZnibDXWmXjcQg8n7teBrjdEoP9/giT2lLjBf6UbjcmoGgVEbrmVa4uIeQAxfqKX7HS/rQOsilenF4vsEgdqmwCV4XU397BHa7KHW/aTS4C8N4TfeLOKRo1UnR5Jf71gXwXQ7ghnbgN/BGMWteasLiHEfOxRTSrUTz/amHXhwVi8Pb9dBIEVZTvZdi7qrs56cB9/8VDyKnoq4xt8Z3332TSOU8t6Ka5/mst9ZjarmQqfae1eToBHkWL/dE4PmkLjUyVLO2m8wUanbCHHz/GzDsYWkAcPakBC2CpbbrUwhmE5jB6/U8usU14e2F2/p87unaCf2POpxRFVaxiz7fkUruz4vKPflfdaQPZrZmtpKC4UgUqVlShbCxXknbqRDzTIPNm0hdZPCMXZOau41bnVjsO4o6FZs6+JBolgPOdsJAheE5F14OdTsgqnwQ7LaAJcWa9FuBp2ONjc/OAuBV75k4+RD/dhZ+zyGaaB9iKSqf9B7tcdoOqx8Mw6QjolJ3yzxdEYFntew/qciS1cGImceHBNPUptCD0l80Y9Eae3cp14Gv613a7GPtTfC65qRgY8MKxjA6W5fQzfAp7Mx+R3NxQPmiTG7L91Mkl+ux91E4/qUt8eB5hZeseW+/xGXhgs1t1WJOYyjujTHCBBgPvFVsEBN/vfQtY9c+6PnjnQIqh9bVh+Lz9VaeGs7P0mfWULAPjdQQFpSHhAkd0nmEnzXEEJjlfBAbfzejCpXC2htEyHhBwsIoilr59VXZaUzHtEpudXxUlySrnUQ04A87jw0riVNZYZPVOK8c11THDWowWhwH8uuQ+4pJA9bi/0OzZoDRflDnxrfzDDar20TYquy9iE73rKBHo5JAHgWwEgzMcjloZtSPIjiJVnKsjJ8IQOT6GJGGQAKZTXtc2xiBh+HUnKq0jakKuQb/48mnV+eu4tL4AhOFhhM5cju598okB9b+5QeX3B0XZg18JgQ5jqKNVJveXhog8g2AZnphMv1aQLtMIRG8aPZQ/EmrPw3pULTvYQQyMB3yLxgabXhUyaMVvoevl2LMqLegBvJmSz0/vy6pFV8H/UgFkje5tcfQlH8IOu1zYhrDD7a0HqBXv+uljSYlzERew/1i7sQst85wiBPTfn7t6IeBfTAPUMwuHDnGtCxG4w51/20xAWRZutqpugv2hY0SX0FuPWxX0M0HSNA3mZm/jImO6lA4lpO1/TN4eFxhMGaPmJlilRyFaUEYcRfH2TYHu85EdzpOaIeNU7SAc9zScl33c3unr5bqnDnKahF4MRcNB9xtsU05KZsIT/50TIlLOY0uvgCZy/rqxfOuAOMzHtVHb1e0A0cwL92WSMbAht23jmEU2ZYFBJJnscgXgVcCMdYv31oRN1xlSg6pAFc5bS+sUqXKP7YevMDEkdCV6ur7GA';const _IH='7abb9a033cafbb34cbde5e0ab3abe4d6f462e74fb06fdbeb39e857fa2258efb7';let _src;

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
