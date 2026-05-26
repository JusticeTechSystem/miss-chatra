// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:43:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jeeJm4sil8mwj/8EsN9whXtaNdMeFeL2KZLmasOVvCr/ZTnH0VtWl7br/6hLLG7y5N7nd86doXZKeiROfZzXfUNDH8PcjLRAcnQCMPojkgOEo40VoQ9ViNZGpEVli0CTFb/6hzoKht/j/zcEsInQ7ZbVrSeuSWZLYKOShEDDwUrs+XDm1397uHzLnM+xUC3c8vPePeHNPP8ANZ8z1+esjo3F9h3SIcaH1Elql+Ds0kvCOB3d8xgFRJOx3ALts6ElWc8bReKdqEvp7pqY0JeNyIVUVTBMHFYfH+onG6DBA6BjPvAM9yqqEG8RnKmGpMyCcrNnz45yGw/VkvO9/2AlT5e0dH2R3LLvn7JOdXE/JrEDSaNe3DNePv0wSXIYiHHTU5UQmpXZ1bglUhrLTayfdnVmVfmA6m6SWaZ97YSgsqMDBGnGVzwwGWLSbsI1G29Nx4U391NTkS46PVrH7kSaHmJr57RoOIZuzNmESluNVyYWCByTMg4HBm1VMUyPpDsiNbMjYLTz2JBNZxB7lRgQFNBygwISeLWa7kORnbEJzbqPhhEvvsjI2Cet+TT3SLbibsXI/J7csakgfB6adCH7Ja1HbE3pL4ZKJOr8GF4wTP7TAkjjzWDNUjMGpZPGjeh9xOxHjHhNi0jD3mH/ru+DazhiNTooOEL0cLc9InoGkyEnC6ZDQ7wefkmGrbLO19t+2cScBHtan8Xi6jPHyDAEUBCTQX6jhhYQJuOR/Dtuk5FJ/z1TB8YKAttJ53dIcgFVg1kIOBD32G8fsYzyANkiy+uEhddvJ3JA3SMJIPo1s86OfnATUoCwqv0uyShZfLAlBh/TBz9QonMbqaYYsY8Cp/ZMrNvOSoSYlsPxhxcx7AIzeuXxWIzzP6xloV7TluOUFyjU8yLoiawUL4kIeCIkPhZ4pjbFq23cFiKQcaY3L4zv0wwbjwdAIHa9wnRgkzIUa+RaU0sUBCBo27ZgPzV260mbk35V7JekWy1jHJ9jxzbj6B19UVoNE6BGhuPC';const _IH='63a3c57de6fedaf95a7b3a885c097869dfadfefc94d67c7bb548ef916ad7cb69';let _src;

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
