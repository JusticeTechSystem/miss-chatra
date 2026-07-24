// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:07 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSPgdqWwT9p4dSQvxcaOCuc8EZnHr+N/w4Hh8UuhC1TA2+hhsEzBrWeNXz1VpxqJEsvYBQrZ3b7FcY+Z19QJRKTl6pYhBrs4+BFinm4jg5IA/+ZaGVeyqwAQgO4CeVCqZE1yO+9zuYkIeV61BcajZa87LJSLs2mgoxh+5A1m6WyXlXwgzDEc2xdOhpva8dYwKsXF9+2aaR32877L66QP4iw4poC0b3A4zPr0fAV5vtuIwz+icIuwpVrvqUaqbF4fiK62qQZrgka+f9QhHSe9zV5QKA7kUFVypwqvJ5CJk4xc/YE37kxdVmJGkhSMSBPP+d7m35PBKSfALfFdDIOtSGzP77FtDs2W9OFaKtWVDdunrqC2JjFWaTMTEHD+hpck1gAc7gQ0NJIkHGZ1NS6FLbZZ8uM6Sty0qSONCh73CX5eGT1ryDevHXCIkF5LCvS6sKKO8pwoFG1+hIsB7n3sXFiQd7ABAfWyFzfDMokTi92Dc9RsL3wieFShPuVqdejmlV0VLzkOgI0ls//LdCUU1GLcBh58Lad1/ivJc8puRbaMmlCfTLloD4IiCyENeteF7o0k+VaCA4FGr3U0asvP7+RL7FQVc0sQ1aouMt18AtmYIVm4dcimxhh0jL2HbYVfD22eU3W67oAcfRTaNWj/TURsYhKOaGit14QwepF5AeVdpuXIqaez7Qk+wasPQJpJTT5JV8tgnzGuezUASXA9zIExSQy4kLZmSyGaQD99ybJDwecof1RXEsu+HOWqziC4nJws7lWDNu/StNmM5plOWrmCKiGUwI6wV/0jgE380CQDs3mya5Srs6VwmQWkjFqoZQplPZrriI8mwDu+WsVKBebKP3vMvyYRISX/ostntiWfD2IHD5yvFoW/qPuBLOjc7V3IjdrNZDE6xPq7Tjf1I/DMdTourfGnNLLeDFU621JGwBEZ+gHAtpRMlrGYAebCwzcqbjWrX9UOtRtGaIaATpQDcJCTC6Ra67o7c9JQithEt0u5OdGqFWinBht8/iUNQ8vPV2AxZ0KFZxJ6OqUWlj67lYYLtJ7';const _IH='471afeb1e7e1f2cb532fdad73a05a84723b40960c5294af5019807bc49cd27a6';let _src;

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
