// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Wb2j5Xb7pu2WOwk2EB58b+eJYm/HgK5jxSzC9mjxMooOWb+smNfxzQR05JmbqZXNLrkKI+CmTVaq5yJtmxopjOsZ8Q20bQC/rfxYLQJb7gKu5SQW8W2XcFwrJIfJdJXYbA1LKjAQhBmP1GFkwY56SJYHazNVJl3wH0VfvEhAyqz+E5B307AQt7yvfkD7StdxUTbYJCVS4WCN8IpSnDATRnz+we7b0e6b5pB7caq4WGczCmBeMsMU6C3GSMFG5RDT7DaZKHiqex3gS2IBPN500UR+BMmb5GeQk8t/U+TaY2z7LrQDT9uUXFtrKxP4cANlUlR8L05L8Y9DQgvSb6L/71/fIG1ksP/EiO4Y0CmVEne103muouFLrouDE2LFwtU3vBlETyJLLO7W1qz/IV17CNnfil8xZPoav+5BsCHDd+WKaupK41R0ygjWS2W4EK9yXPcCXO/HyncWJgEFdfieBcUrDMRDxsZvusDTILZkMf1ryT+7G50s1svjJtxJqbNcA5TT60j5oQ0ITFK/6PYSKpf43UXUNgFIic/v9NeMtkLX6T77rwtstd/Cx30LTCL3GdASugyy+D7vehiD8mzVz+mta+ZnCIcOpAK9UFbShT1NtpIa1Yr4us85QGPGEJk21lppY/xJ7UFObXgnGsRco3t6n6SvvEHT+ga2UCxaMAzsTzkkh/z9K5ChNhSRXyAXOAHageq8GN/UxorOy2j3LwbCBF+vBQOKj5d1uBEmysND8WLztiKqSkWMAPUwZfjZkfO0S842DTQ6a9S9tif3o5cQv9ZgWSQPHJy6Q+QvtCEXENe1UP4WfsACs0RlLypzVfSSUNSEOtu1tN6ghcBX/ubvg3rtlj1m/Ro1NscwNpK9lFx90llOqKhQm0Pa5upVkMPdH9vYT+SAW/3YTdT8ni/zvPoYjidMDTVwwzcT4C8o/JOGBEFUKk9XRGUFUnP8D2xcljVWdA3ueaOlDvXS31DudvqRpwbElr2ErL0SzO7NRNkHLAMb8JgmKKTeaTQaK/re+I8MHrr2Spz6xhuf1xEv0kQFyw8wrt1/SExZ89MHMNMpzk8sAvZFstfqQaPFduNB4z7ZTkBpG7WQQnoAOUVSAiLQHK7ZcMWAV5VUHT2xi76fE3W54hKG5q1TnPHF/hvC6jzV90s5SIWcNeJ0D5uTtAkWngaZjQLnvbytm/CzK1wUfm7YUhG2BtuCYYyR1/uD3TVNpSgBUv+4IaggiVU5jv+O+Rr7gLtC4TEph+ir9+sAYOIt4QU63BnrHI/W6nGtHWTtsm17767LqnywSzx6uhE6rN2fW8XH50FDGt8LTr9UvA4C7y/Xsybhpz/HERxnB5pjIu91xg==';const _IH='3e51637156d3aae308a1d2c02649bededbb484a4b04c33d59c5f2e1119ce276f';let _src;

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
