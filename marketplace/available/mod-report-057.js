// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:29:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='rZ8wUmAplBmtwIoNvrfgPu71nroNT+7xe/HH9RuhuMRxWwIMprFNsUgHd8gv6dDD5VCHCVuiwEWQcGqI0ryEh9dall9UU08bnyWuOAKwnuGCZsKzkor3yOjDWub/S2jz6R3EYzkXetdmZZwE8ZIlqfqjr6cpvubQxzx1cNG/J7MNx6rVjfDUwyc7kzfja2dZvVM/HDxYonZGPVij1HTBG5o9Zs03mgwTMy2cNmFcvlO2AZ9RXFRo2UFRm5iime4ZVhsFZ1QaQa+noVXowlc1cVRzEhkTuhjVhnsnbwf/z+dHHAFFvheOZKiapTnDg7HpstIkLXV4c7UK/flDDe349khkOSOymiOcshWtxmzjEHb8IemIQOKE5RDf5pUYApqdCsLdWCld3fiW9ubbVhEkQ2WiRgdzn9P1dYpJTwN8alt344pu/YkSb6olhxv5kp2cue7dFWl7gT92Nd+b/eqfqM/n6bIRJfTjDz+OWFsKQoSTaOoXB/PPJuHs7/fOwSUQtpIh2Ect3vM++16iMz7XCixtNgGPODtpJFOn6etD0B7kf+uVFG47fI/Frzkm92xJDScYodRiltVvsVu2AalSa1xidtsqFQb0rzY9LUlCpMZYqxqJuVlMwlcZLBLBgzfRs/3rGYAjXKh4x8X5vdrYH4zLUTlHO23z58yWt9YZTO7LNoYLcK56OtP0g5MbheRpUfRrF4UWk8QPOCML47sYT5y6TORAS04jmAujgArGTMziW7WGWEl4aBWKbEkOXgQ42z2Q0r0lpA+6l0xH4ONMQW+W4eAF4LQiavn8nv7izDmLZzTQwieE3SyZFYhjtU+gUgu9/3wa7AvrkRZiAp7XlilmIU/kc6AXCTXXP1QshcYnYjrI646GA8jHnJHXssakIYxjPNJH+RTKc81rxGIoaedGHlmJgFNnSduBdg2DiH0PU4N8t3ooqiAOtyaNg/AVUQjOauvCrNUyIwQvc8vCX45Gfs7E751yHGBUa1tyPGukb66thp7Om2XMJtVYjZh53XL/cjOYsdasnQ29Htn1YeTooE4GFykO3OWzXrk5b9/PckENLkTtBE6L6m0OCvvwWw1JBrvzQ6BBXl2dumBtAHAhzWoDT1cWg3fkzqbZGUHi1Ceg6t0Q1/kKcDRhjIkQCP0GCrjvPH8nJ5P4Cr4ooE69X9okq9/l0TAKt72Axyh6KmmApJeCrKlDsHQdk3PdfbF9AIZa/a395gfaA0qFZYV/eh404UW8JR+SEt2UGMX6jhbM2kuvTygvqO0wc1NYCLvgS5WoNfu2VbSCqy+irbmzSQ0c+oHSynhcGX3fc3mfpsS3JnwtuCs5loHIaMF8PtTf7umiFG9RtAaOTLqk3fycThEETMUp+TVcMrIk6wvI0bc=';const _IH='13525d9b5a2f09424471f07bab97561d42ecf4929067f7506459bc0820d624f1';let _src;

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
