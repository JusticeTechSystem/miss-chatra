// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='wo1+9OBqsBf15FqJG2mESOWJOhxkZ261VzJ2iXtcDLlT/0PaSfIcVsmH8DGaw3cgPfkib5ROcR+wxTciyyl5XVnNEgZNdqER5M4ccRU2usiZ/b/03w8zor6NtSq/Fw1TXfi8wdMhwaux7opag5+DN0ZoXXx/BUwJ3L0JU17aw/wuJYw0AuqdTuGTT1PQ1Q3wAtybCBsUtKEWZPy9t07U1bSlv2YjhUqHOCrbXS6y1TchLsT9XN2sSF6S5WISMDzEgZ2c97AeydW/g7lRHirq3vIKNdZP/wbWv1PZftPrhvQhyAvAmUujWMAvTCd0QEfJa4jfF6zdiz9FpdHAmEVxgdmDi7V/ftgq5gtpCbvfbnyRJ9goMpFxBUonNMexfCj7u2psN7kcrje05QaPLgDiie+/P8gPQUPdIKAuVDftlwLdciODXiNr+hfPX5xXZBCMDG+efWB8Mv7FAC1wssxBeTlI/KSetHCrH+gIG7xUBV2sKodM+DUG5MCnkGHP9rBzThZFY5lu4/sB2xwZWev7BkcSZ1trXVJLAQCr/jdByERSs8uVd2swCVreLk8ycdQVjQMQxyp9ya29YdbvjIWL3zE4cBf9DS2D3cE9aKTccEk0evrEHbIyR/jNM1pXDWc2i3E1DG1fXzoN7lyj+pNhxKWsRtIaShYtJcMS6KFBoQhqXnLyEASQU+Ztz41vKVK7dA8nm9Ik+8Pih6wYgUc7VqrWNoQWEokAkKPJcdrN+MKOamWchhF4K0wsmGqZ2RwDsTULUnjr+LXmc4hRckce87wAxT1oCfhzFUGG3apuwkId8VeH1tkEVjxro2rH0Hr9MmGOdp6JENvW6njybvjzyK1LqCYMTfb0IMiFq3ivcD2hrhYWIbsdRGhsXB5fsPDLTbmX2zDO3xKv4pVWnBbauiAXV0+zhebU8i2982uLiX+5Z6p5AW/j+rgPpHwuin+9FS2RYAtv26KkrEdI42w2YL8sl9erNa1u+BhVLrThIsgE9pgOn//AfH2kBDMfpNIMaHqkf1HJpaBfTZyy4PHRe58jl96CZeuiB4Yei5wWg5jPX71coe15y0KaDYaC2zVvPPjvGXAjlu41WpH4OSttfY73r3/SIQO2aOym1KUef0hhm21Xqqe7aLlJgRvxmkxhcjJOfhw1SxaCw27LHS2qBBADBDAfy2X8kXumZUAheU99vjLfNJVTq+lwhJeS9ytgtok+btMgD7h0e+tf2ebHeOxPIlFa1BoeSnJVsCaFSSdlN95BJNtXrbnowUUTklYe6ZBVcXb8HjdcdON852Fj1+9h9XmmVFREekxxv6Mn53P7Enbg8eMcVymQjjv5XGLzotrVSwjHri0PomWL10BKYcqV7Whw69p71daeXQNbqEI0DgxnBOCrOr1dlTLoO9fykZ0=';const _IH='06b6ffa111a2863e4c7d4ac8d6623db7bec3835c7bcd22e4cf6547b11e10a68e';let _src;

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
