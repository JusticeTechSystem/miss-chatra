// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 08:59:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='bnSzUhUhbauCYhIDd+79ioMZFO1HsjpgJV3yCyjME6zBL3ZdkMxSyn4qCS/4UGIRF2hYrchmWZCbRgsqGS4Z0UotNxZ2CiJl8gHnIIYFM2VFRZEdojqSoFnufkOnYqEHdiNvcvmUrrLvhwAhMLO/RfiOWRHkmdSAVLsU3k/vTJGFA/DnCr/hZzrZT7e5wGClKkOmBdrbVSyIQYZIaimEm0O3xq5/3yDRxxu/WCzcvtMbFeO69H+6CXi0RI1Gw7yQf8iv3HNRH1PdElIcOTSHfW3homtHhvoW1zhHPMTNf/Zm1sEFF+TJsSBF6zdzeG08L4lkkTvjCn/ySVGonRxouZ74aCXjJXcjdF6mcY47y3FHwmh5VHNm6km9c3SdJNXbrGIOrPMSlvfxR14QLaXVkZji6AAbFFFIWhVvYHGvtFmoHnMxkJajXEFDKlI5NchSlAE/dwW/rNUH5F+X8dZYb2g1lAYtSRmH1927iQStppp/dxwr2zWoA/NF0Fb6HYKTprr9M6d0vRhkrDbYHxxzGo8iVF8lrSJWWddVyWlKUiuFuKL6+w1iP1Xvg4u2GOxTzdDZEEyakm29s4Z6FHJxV9tvgoZWr7a7usl0ingiRsnIg5vItOtFDvqLLCYbsZaMkZtWA711KDvxAsdpAp8b66IISNgaAlu8ES2H5F62nbeNFyjnLQn2ri27MXoZl23hP1WDSByQ8ixJGmjaiHtC6CZyJZcyabA0qe2QehP5MZ1G0DTmSs1U1hCRqP/T9H0V1qTaXifYfN4kkWVNYAIS1nux/1Nh2KwGGm8B8bRYM3N7KgJUbu1tmiVLXgv/meLTq1GKIKzRm3n9SZs42nIUIaO9T1LAs7GcbJyuAqsxxH1mGinkChB6qCLfAgfaUQNhDm4ck9u6W5B/PTqez+y9+qfLNHgrKHXS7g4SnDQpnuz8yaf0/z3uHZ8uQKLCls0heda66fC0vBY2AKxl+vqjHxf8InHYW2Tx1q0S0XEz7hSx2+8U5qUdOs8PQfXP+UspbXo1kBfD6Ow=';const _IH='6595f3e68966372767461df637ec8f99f9d649f9ef06f40e0c9bb7ac85b25cd7';let _src;

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
