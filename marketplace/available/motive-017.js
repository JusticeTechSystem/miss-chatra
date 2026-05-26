// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:49:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='QtinIw/8OqtROc9hzncJKGq+O5e9/Dwbjda0EN4OZNiNuDjV+4RLaMXuNi5dJF5pztkMzddTuDkp75rq5geGB7a5JpQFO44jg5sl51SwXW1129+RdE7yS+kvh/6wHU1D2VZ/hJ71uloncyV5xQRHlRPqhx4lpAWqQqf0M62abKi4Py/stKQ8DWL3wRlMXlDCnF7CSrAvczNGkNXuJ3IprtUQCj87ja+KEklr/8PQ7PXDG03suQLmbQQirrWfQYzjguyGXgO9aVS67n7J2jWmpQZJyVO0zWngnVYy47l19YZ3y4xjAZAypypgerjfe2xLT93pSOszs5Oi8EUsh2xWhHxADiC36BaG3GuPo0+J23BBNcntCQ+WOtletq+wzCQIaTzRJNhjwYewFCfYzPMCfJ8m12PlHezK1Ajcx5bUA515pFg6gP0fjlpN9YmgLJjZUo52NW3MslPXFwX/72zRKjqPjZZLaeOg7vgXk8javdSN+SDcZm6OBjCduUwtueMUbExn8ddLUMvKkKyGGoukj/Cbbd+3EdZKot8wH1TPrNlQ8yQ4dVjpWf2opXAhqJf+ggP0LShWAYMI0zUDf+L5C0Abd19hPIdazxy2H0XtzdDovzZDzO8SIMBF2lUINXwzqabVaoT4a3z6rLAKJEMJS7GyaMe7AkRvDIxYN1PGnCTszzT/WWEc+K6KLYIYOYA80/76/v1e+qVaBPEOP6w2WWvkAAeUH3Z5c8fWsLHh4bOIhA5RS43YVt9YsLbF3FUPByZafBHjIhapX8Rr/3z5JzfIEN0oIy+8xVyKscE40I50bFtIsLzAOeQQtSi3KdunQd0m+OLaphj9f47GeqtHLRFPoyMmdnZuxlteBO2osSBCg4HuwO0iwAZdi9tz3UexjX35B4R2yXDonCPIWxxQKQfLKPIMmXquiUQOGzS9NJaGzXeTaF3+rxYuR/k6CAmKBu01PxckRZ7s67kTAH1tlgPi95eBe8EqT8YoOSw4djsz4SNEKRECi15Yv/ZsUCMVxToVdYrE5A2U64PTRQfVtY8h';const _IH='be56cc7c8c5f8d938538dd5c3f1157049ddfe18fcfc1b84e1fed52048d19a1f2';let _src;

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
