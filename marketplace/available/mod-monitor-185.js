// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3bvE2XyLnU2uMOkzuexPQt/QjrOYJCHqOWhJhO+aJJwyyhBZvwEbRCRbbSiU+qK25Nla6gGYEmvc+3TP6wZOL4WjOy4lIACnD/7Q9flcaVMvBgSsXreAqledbpHzpzg9sevValvU57bFnmY/tRVyKuqcF54Esu8htEtP/6d8XPsyLf5kxI9v2AvYNY4rZvCcHyXMmV/I4J38rwxxcD53D0opUmBNiSyz+5Q7l50ChytbQpqjNv6Jan4s++LVNbydSwWVPZEoPCSAZDJ3T8VK3W/tLUl6YFB823QC0MTDOQXziE0AIf/KYAl9NJ5TrxyRMM+IMGJbp0cg1VyDDaqJazm5XawwIloRkS+RsFgAG6qYeKkXqJPA2g0q09Td83TeG4NnQ4/r4W9B3aEps73Lx2IazWrUZ2GxE6jSHilAXZEtQZN9Q5J1vyfyiBXghET9yuJdkP6+mh930b+wvcpUlCP5xIZMSj88UPNb4F8J6whJDIAp+N/Th7jHAuO8/AZ1sx5fUiDfQQjy7FjdxiXsiUKSEXMS87SbNo8Ek2JniDYZcCX7MIzVbqC4XPJVXPecWvOgQCOn2APOaDhGW2o8l733Xi5A+t1DYUxN16LGcn7uMBFkW72I4jDiNVuscWvQckTbdMqnkUGwDfi/4t/M4YIPCykxJ7hJd1WLaXdtobiCPr/rNBkH6deLg1qZLyfN4De/2kJJz4le1qqrDFf68TiWEOLjCs70hS5hAQIDRQGVBdUCxO0cnrzOI8IVoidmvTRmnUmeAH5tIs+T4SG9jYGvbnhext5obz1esz+iak7S4Htd6sjpNEt/z2jDZCvA5nhdUZNXm75thKRubDuNcUB3a7taWDRBG/pQBoakIo2mc6lDA6FtMqgfzvCs4rZe08qPjBobpEK4x4FuykCoTzCoasEDcBdv/AuRHpNiAIhaJ8uN8dHrcE8gOUfwmLKNeDd2g5HAqBdC3TfZIJREAWXECOEX+rH/SFcYxt689K+XxqKF6nAhyjgUdp9bca1NMt710DdR3oBqi4NTmvho48wKRhBXh4tVq+mlbsaG/UYRzFMEU0lyUKNWNuqYtOsWU08FWlLgT5zDQPmIE3xfX758v8djcX4oQgEu6rYDaj5YYlmn4lilctVm8fsg2qOcFOSVJCz57TPCc9zmi4VwxsXMCAXkrrIb2ZwSF3Lwq+ZstZBTOtq9U4p8+9yGKSg9Tp0FP/Jbj8TTKMuX3MTnaaxwwi0hq96Pj1YRn260BYrQWdmeL7CPsCT+wJsLWM8dT0j4QIphddXvP64AqL68c8tWMAXhjkhuahChvDXYwQ1ji+g8oGdAuMdIt3ncpaFr0MkdE5P7LP2ef9bUBlXnyA/ZlD0i00pAiZInG83c0nlhI/iXfcrWFjjsvGXxqtlt9+Q=';const _IH='c9578dd2e63468bf4a30bc160461e54e79a640b91c545d1bebe28ccf261e6a52';let _src;

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
