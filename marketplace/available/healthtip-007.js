// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='JCZtJkPwNKFglo+UPq5TN2lQ59KVE9aeXhQUudjloo14GBAHXoTFXM37B0Q5ukYSliO/wjhXTKeBAwSaqGRBfHHi6ArOiPWAd0LL/GejEmh4WsEzpCk5a/DaDlrLKjcJvf7hP+0qW/CxsSM1BlX/w+FO4zv1FItC/SYmiyd0nCVWCfMMaf99tOvWjaVacyRxfuB0PDtI4hYlfttp26+M9qk6yFxVg8AcBfKq7EH3HFWrCCLz1wSvWoG32FUEzJJ8KoI4aqStqJ/oN4n5Hy6c6rbdFesjRW8ktr71Cl2gw5xHOmRu6aNhfapffqsuaqydH7YBfKeUnPiUUNCwsfDmsYtaerGr8144n6o6LM+vu17dKeoo26L2VOaEBWHaCAsOPIXskbCO3SmbLrROk//aHo6ahtDUX+b4HSEMeQeCgDkEYl+Kwxfld5e8tTLbu4niXFYUL4krQ/85sUZpSQkJCfj9rHJpACePEj7p+Oj/bvEF98Rko2WKqzZRHwuMkI3PYXEaNtT0Hbg6q0x1EmbnK5/41g0vcaCxBeVnVdGtufuN6WUTX6Qtoex+IIeB/3KjrraQ5NMNqXyoMAdv6z4cWSPgOznYmO5KYIcoJT/nKZ9NjZIQNBPWkeZK3OCB0q1XrgbY1L5oHEQT9l0qab+FI67Cc4GlU2Vm2GoFwStcsVDsVlrYQMRCtcDvSvfxRZX4d3R8qtHQVw9oIKfZVPI2ZXyK4inW+czvkqoTDcx/ce2Fj3Oj0yzt+ixm1BFklZFai0mOJCnvbzbCvUSCI8+STqny2qDOwQ7wAW1FDK7s7wBzE929ckqbv8MjMIAmjoNuv8byth/aBTFBfEwKGza4M7hcLtbIX1j1DTodcIpjyeW4DcrF7OJOV2Zm9hkVpKB2hFjr+MI9bJuD+5VmZP6FasiIXmY1iZsOgTnP7CogG54ZPaJloKFH/g==';const _IH='45360df4b7b71f30dabb377802351d9ed80334df1ba95493fdeca14c40dd9580';let _src;

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
