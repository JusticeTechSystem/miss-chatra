// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:30:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ZCgcUnkv3rx7Tx8CzQbWIff1j65MDmIUPbzAO7dqVOOLZQ8xUKn/wcV8dBLTc7QyN5iLlH+74hCwK+xxo7+doZ6nQbdvHzS4ubYwSKsuDy/O4zSFduBoeoJVfjmyZZKhAkKIko04OtFh5cIXSNjEfWI8o+5wjXGe3/LxN+n9Hhj4aYyvk5twIrTTHiQKm/NP00YxFIkJKJKLh3VQW2PrCpAUbWjDPNi1FsV6pJQ1Tp4+nqQdy7evfVZ5F194L91HuyryXJFq6NzvNNhYxBTNG1a7iyAyxzWNuLklvg9NnK1I5X+2senSCargoTy9L6ZW8R+6IzihIZPXE+BXpUOE14+kyVt3mluV1E9U+i0vfdKBDNZ6qteSNvChRIEunnPlbJUzjx91XIimNEMhfZs/P2rhuCrBIm/ACE9uee0zTKvWCCUTukd4YLNOsAgykOPLp5uXvZh4GqBQquqqNNxjzt4JlPbngU+Vo5VoBISlvtufd0tEPksKP6f/rTXKOzEl5fyQ3nu7ukdM4sBwTzVC96wsJuWAtrVU7xn4MkSrjCMSiLyJKE6+dCimyb3mkaAvryfhKX0diZSvOTC011ETBKu6JR3uD7Uvn1P2KfR3b5bPNSat/sLrGG6poKALNdfzXvGoLN8zyl0U93O7CP1ffsSJC4vK3fVqPbEe/NA0hhZKJAcCzR92OEVXovxi+Y2eJFTQfg8OBd+rpE+JvQP1tnm5akkEMjnJClJBBBAZg78Eg0W3Sn8mwwAis+J0Z+R/3sb2AlE978TBM7Ow6yqY9tmJjPNAzViD28fr9SWR2yP7L9202BOwJAMOvDXpxX+21pkX+jRxeaOlE3fWdDULEXBzAXyjHESoFMidb8tvSSukyK7t2KrInxRUQyn8Udl/e0B+m2LHxLjNpAO8nI5Pv3FdyzCfTeAqaabZt7mP5bSRKeO+Ec+kAOHvPR4U3lJNNwobp1b2VPVQYbekYW8W6M5zmHYi57zm7I4w4DxNX4zDEu7+yTb9tE24bNk/kaBAYYqiTcGGip3dp/NAo4caodxNanGwkRFiN2Vih3IvHLDqPE5owuAh/BOOCoL9HM4bGIkmjCop2LtAHtdYnoF4xnKWULz8F2V0EN3F+nD0k5fyq8ixajzoa+6TESErcKYPT336drcW3jMw9WnLaIwraOIT3mUiaSEFIYSYGkQCGzwQh7s2VA78GH/4Q4yeIfrzB9Pl1E0NrznwNcWfw9fz8k8RnOZZ7+e/jsvEndRcWujsKNqaDn8hy3u9Bd+BxrGjNHIMDEXZIKHRv8LUGovVN8mamQE8cnVf8IcauqYRRdH+3Wk5bWcyMek0r344vO6QgHxyQZYws80EX/FKXvv1XLFFNsAjdHuUOvCdzXJqn24+SUz+hrc5TzLt1pmBWIZLNdUTAe5TCxjpPFmkK+Rdn38aKJnuGVjZvK+OxK8grJqk/UhD8ogNomK+cIgkMOySKFxXQnX5zRBA9OSSv8DnP4aIOz4ygu1d33P/8cRPPDIrwA0Q8D+S2Iosvbl9xEB78+BcHhZAbdWS/txg';const _IH='33817653e9d80aadd1be0f2309e7b23ceee4be8ef75b56eea42396204aae13b8';let _src;

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
