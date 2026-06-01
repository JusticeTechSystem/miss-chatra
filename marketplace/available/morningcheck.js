// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:13 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ6uL67XOr8qNnGxC/BLBrPkwIwZ+CX/gcpS4V/njnkY6Ii/XpTb1B+WMy7L6cSwCIOX6sN2TYdgXUPUOmDXok8Ksfo5qQ3oPP/EfHw/51T6BNIedsgR3AzedMsO9qypxqLdDvxpx2V/MFaypeTtJTBLQqLPsXqSR5HlOiZMf1F0PAlFqbhx5KCpZlvKvmBLw6drXMgpppQU/WCrzwoxW9geX0E6YzXLe2Riz8fwjO3JSvc5ejfO8dUP441fksT4f9qyqYQVPvnRFiYZ6FfzFDAZOj5YcbPaHdL5PUMZuMbsoi2CNLReWaCeDOxVkcWBSHoEJMKvRKY3H7ZDaG/CZPa2W7C90kUk3jCTzWl5yEi/vGaij3DFMZVJ/GxePPTkQ/PsHXdSC+5lgwmeLeCclXjuGP+prTkFKUlNETqEsSQpRqZbTRgz66qOvQeErcYRwOsI5ew9be0G/aYK+rxLu3zI/0qZMDl/taimI4hR7OTG4882tP7vFSBwvKWckCYRyCjOgLkQl2sukY8Aidlu6hlZWZk/1kIYUATZ5nXhrOYBDyBH6kHGOz9eeLFdBaK4+ci9uG4npQzS/IT4jbMmj0W2GREuqwqXIS1H05KHKKMrZ9rOCsUCq48tZ7B6iFpHh8yYkBa+DHk7GLJKdJ7F2cwHNybBCJ7TkUgVeIswVzv4PLNWPL5OWBGsyAgzbUGraKZ5U9O8WcrsaPSyIL69JXMRGlSQSDYQmiOl7uflga+D/rBdU7qUj++lTRz9KiGAq5QdEyjyuvjcpCykX+8hIBnOrBkyOhAAJHQjuwGt/l4G2gXgdP8gq+pwmg2jG/HjJIF7CzdcZzfvrRiAvLvjp5YOAm63EnagZzk5umn08eHcUSX1jIAT5634PDVfe3I8PXia/BGAuDxwBU4oswJl5/02QcdsuCmBwqSFZ4p4cAefUzO6uwlN4Po82sNocHsnYMhgd/HrI2S2ZJKTomwBeWDIaqJylazr9CQOP+n/omubzqwlhIyD+PYfFlCi17Qcoq2QA9Nr3Z5xCzwV+wabeq0za7GBcxIPNMdXzQ6tuG7J331V7fBZ4tSIklYLq5/4UhKhCbSN68DSN64tyqb5XJpFFllYkEOOFdd3f3asbiwx7b8sLnAr1OmBan6hj/GWKv9ozdlUXOqT3B7xnDe3Dc/u/OsBDR0nPFDPThBd+ri++HaELCVJ0NnUyWkz7yShVdgUpxHF3sYV4fg==';const _IH='b846740d6a20745ab9c5c9e4260be835c2a2a8d5d22506cf7b5325dd37d824da';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
