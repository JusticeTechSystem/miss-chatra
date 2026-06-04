// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='AsEARbR0Yf38R7JqtrWpbARu/GJQhPp1rQUru7Ry3bCoubF6XF2lH5QsWfZMeo/i6xrQw8qjSLp5EDwFwVdBQ2sj/Yq36e7pTRZpTPyMP8XRB7GNDiUzS45lcbL0OjkpiJUqjsl/ga0zjZlRdHztm2ljPxsyE7M0XKtiLyFW4dt4RoGZsl74hB5cl2CwpwiINSGHPfEgu/u+fUiuIBzxjYIZP49bzqoija1Kj5lsVR+7YfUeln017jLBXkSBgP31l74v3rd5Cc9W7vZat6n2FUcDhevNcAqtxCxn3F5BSSsJN8UKXAYkviZqzVJNXNztSfFxadcUpYxq0TizASEonOH1qnwftwFouBRzpz82c3hy3IzPGjVS4xdwgcu94Szj84tRI32U+tOrsDVt147W9YEikRuNTTZrScGEhFN8rL/Vi9tdmdL8rzKFkT849K0TZOKsDjcJ/CV5MjURzoG9GRhCAYSGZGJvrOdSLFM6RB3f/0rZM3k1dC3lBy9AXdTk7m3YkZsagvzzN3Xo70eSYhTQmkrlhNkSArAP5nO18wpSkKPI9Mc3tUULYOipWefx/YBUym56xLAL9qLO/3gfQeWjcCDcbc+2Kq+GeHF4dsCV2lCHS3QAKBX1v6caQCF2bkMTKIiD4CrA6sEIyTRXDF0bs93kYlXpwhut3jebnfJ4d3TtzRNDtigGe8xtcav84vu+tkgYrskLelhv0vn497zmDFUagPoUcNRPl021oIpvLMGB4iDLCRf1Ors3rt1hpgyMdesXXkiCQUbCOD4Upz5IGstctlSkVs0zhRI/z5NBD8mfXq923RWiVTxhHGZDRUjD68I7bHxG3tAgcGhHOPWMW+aa+stcGccCloWdDkCiU/G6guH1gV4P/9ISEQiMZPIkNQ5fFvztmkgtnkyw9JBg1h0oJwXU6QKvad/3g2hHfgMv969RzjZhxWKzY9JIdkrho+1O7NcpygnfLqfFQvkQ8x+DWxq091qyCauZ/sK4h2OvDoono9vhQX5OotaUh24VaOztliK3mEuRH51RM6wAD3z1TQHKdUVL2R7bljY++LVz7n3XPtjjTeU2DJkoTROK2ORkcl8PZlZLS+b/2vCwhyZJOfPD/noaPuMLf1K9zvGlZIkkMyRuZmVpy1+uu2ddPfyOeVDgP0Z65pSf9qPAtFzK3Mi4SDdWMak9PTtqxJuHjjQOrl+06c5b3YBmpWv+5LIPx3bYiJp3tPU1Ug/P1RhvDcEoT81oo9kVD3r8O9sMC0sEA2lrERV5EgCFwu8XcBTvkq8nSjWv1xLLDtrw3YxmN91EvI3UyKul5wcTaAVHjHVmlD7cvMsxrzsiKRAQonrb/3Wej74TL4KfXwlprHfIWCJLlRrFLdb7JgI6L3Tc59L/Pu0EB1VLnsxZzjLbe3wc9J4mgrZ/kyFQB/sRHIKko8OOZslgwpFXOi/JkOoB+SVtqNjJDt87xcLrIlcA8nk3syUxC1fEU0KfRrJBasBVKcTrcYJP4bDG0o7FGQDQWaYiLeijxsJphxXL5MyFSbwKulypNDRtsS/kT+Z7ooJrfki/qhO+IdcDWruWHk73UZfEfrrDru1XHxT647kKT5MhxuxZXJnxMo2qMRmcQ1qLodiZZskiHBfmq7tOnXnEPBWAMAyBf90x/KVT31Ijf1Mi0OBgHHYNOYzBCkWHkmqeWSrxubzSNFO1m31wUegj76aNVFQR';const _IH='89c860212e46f54e6e5559693c19f3a0e561a76b93e96c00f686ca93f95ca4e9';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
