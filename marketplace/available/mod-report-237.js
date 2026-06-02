// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='dgSyeX0m58nYp85ISQU5kmtBAzhZcBj5JCIZW2ytwe7zlk2e52ObrZ5sjeTF2jlLxgbL3PJxP5ogB9+UYAwza6Rck94M59WlUQDPS5NVglomXG1RnqdkfLqtSE3oqryLgERzoRTf0JvzKI+BgtB+d8dn9vaM90ahQVYUp2xxoJ5hyiMGumPhaZZRN3uXp7C7VeogMdtMXdH9aJo21lEde0RJCxcnP+8ytf9Co3FDVMpDTmT79E088b7lZKgFfZ2lCX4habJ25Tli3aR7u9D38W+rNCj6zn5ci468ObZyrx+0n+w3T69dKINs9eF3DiEq3i9EoSXfg4R+KgPCCFAJuQwdw0qqBl8GdG01AaEiHn2LSWlLh/DDbAnZYyml53z7wIawX/VYyUkFl6PZhjfRPA27lobZjz+TpcjGrfbpy0oCBqOAByupLkW05Fn7Fw2uAyQItYY/APO27B17dbXscBozQSUtfL9B87+etPVE0SU6GYZOoP7jVMWn3REMpqlnb5xdm7B+OAVv7NoVgGzt/IBnLXmRasbBy5Minrhh5mas3zop7qrmft+8Bk4sfHIKtI+SR6AH6QV1hT6IzULCWRsmKKoqa0og+Z56WBNy4XWLjU9dJxDqsdgvvExxvDsdHCd+IULWyWTBHmAZNVx2Dgmsa2un10ECXO4XqdIlSUYvIYZiYujotLc646ONhhbMJTJ1BjBAUjsVSFQAct9B6tu1ZVeDaj40Kuo5kNAS3dmjof8q2z9CrK0z2+TtegQVs5yFRT2OCb8RpOGc9h1HQsYd389LmwKHhTUhNWlzN7aAsz/WoIw+JkcY2Cjh+eogJhL7FqxCSKDx2YBDOr3ZxAjYwYrBk74r756RxnGlZ1KGSGBas1ZhsZUG6sd8r9E0RJIKcL5Mkap1NTL/rpYhSvfx7DRTvbxqnaqCr7cwpH3xw85dQe5rZgQh4ufFvEo6mTuw9Ihf8IHac0scXpwCsQ5sg/hW8/VNAmO97ycGCfWhToznyNF26MUExqsPPwFK8JaXPO2AeTSuT8BUXXhDtFiTx5g64zRcIOj70vObuBzLjpuYmwJiDlKXETwCFzCawiVFCu4WdJF/9qzHhXMXHh/Mmtnvvxt/35SN1eEXd1JacpViCf0huDjupORWF2N5w1axWQgzbkYbpb0r9RWmxJDRTkZsTePOTIRocJ9PynQN5gpQy9tuYKfVonSYhMWTssA1T/V+D7+YPEeM41LXlOsUP+ZGGpO/2NHMi3NE2XSufanbjYeD9QJ5Dcr4tEi4nXaOtkIPWn/m8lcDHvrSFqCPypwPprA34qanJI8U9sIc2MEEtUoGVAqQnVgundmuy84r9j6uJ16E/hvW0nSb11wmqarq7vQ77fCZHCDjq458Gp4JGgWL0A==';const _IH='d593d4362a8df70a63df25a1f9b56addd70d63add68ab19c39fc92cd7dd1c321';let _src;

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
