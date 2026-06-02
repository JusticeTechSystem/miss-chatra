// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Rrm5fXonauvBYqsi0agiGVMgpkr0m47y0AMxlOqanmKVNwgUXVUyxez/bOhCb/vgp/CpjXCDVcQjBpMLem8A+E2+nqAkhIQZ6KDttuLletrpTeV29NyaQnyStmdt/4TbM36rP0Rq7bSHCGxzsa3N+WCk4fD8yHOtgryhGHod7rB66f/4hXkTXvMOrdH/cCrgxgXasosToXD0a03bd7x4GMB9n5VIzfNRTAsvpEyqRcQSPIYnahvHLR5+/qkb0pcLEJifEqEMWsfBH9i7jzpgWDuVLehs/uV/7hgYGfE731GoA3aGZSPDWIkcXGzqrSuc21qBZxvW1TbXE4su+7rVWWOM4c3ZnUdvbv5bfET9I70xkRte2NtzUovnZDd1uHmRiDtdPgZPGOZgqjS32DJVZYw1PoDH/TuVJkNwp17EwAfsajYmCkBU0OQpvZ3W9VHIUlQrg8o7A5gvq66fAlGK16j9WVZv//p9syhlrslHnh4+zNbSrP1/xO9tJMyMSwtCnLMmzQENeXD3pL5qDCBEXpFSn9flfcj6UVrF2Ovdxsze+f3nxgGLm0pfRal3PsZEX+g4DI8vxu6k3VEJDOtNYBu7u4iJM/5LOd6ssyKyMZOaWxyVqmN0hVeU3ylc5Ts76EdFmhtlAa0mTGKCznOKHBgbUn32ij/oEYTEA9dAZWwxQ6+JVkecxZ+do6SGFE21Ux4A3eTmVOeiDZI4j8svH4o5/K2iS5jnl9W1SEAC6blDe++bpItZP2txYyprFwOCpNbK1Px7ApQA4JnTRuSNDSGJeKGdYWtc3IP9/jMygA2veClYFgNCLOR6+ErYyDKXJ/ngRtHGUa9cFifNbgosQxcDTXvWtt9uW71MtGGL7tPGwjergRUs53k3MPr1g6pDDkH/oxXeqyV32MV43sx1YIGaHTAVW/5m448F2+Ck62vCHKjNrBns42Sup9yjRxr7uGj0L7x6IygkmAxNHqrvNTUTQvx9SXimPMce6m5DGasWv02iBT0jIYL07+Ve1zJxPR1qJKyBtUB71gAO+OOh2gbntD7ooMtGE1zYyI8yLToqvUOv2kzpEjQCE2bm0qe+N3DYsCitod1X5kkAPBwGXs5Z35DasqSgHHSki8dLt65tHmQdcwbFbF2Ty/2hOk0JxW/WwSo0JAiLCCN8+6dPowJimeFbNkBWc6Xk09kQEF9i0QMQrEboiPzZpn/SKKcV4DOwy6z/tDOROLWqGwfp41fO2TskB+fNZs7XOyEQ1rNWGGWR+RHCJS1yeLulfaRjkVxAhUI3zGBwsqHAv1s+eEEYF8VIcZsanIb9pUCrzxEqdIyOxt2MUgBy14+MuFMjio3LIIYo/o+R+wmx6mGMwm5x2YvbOUmh9jgReMMH1t/CbiOBzZs8NQ==';const _IH='7b4e710160998a0ad2fe1d3255bf4e082b9ef87a430bfc6ef17ae65b9360be85';let _src;

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
