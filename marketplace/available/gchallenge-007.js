// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='JJ6HP+Dop8DQz9ljoKjjJ44SSc06m7QwPSVVNj4anxQ9hhmkN7jCM9/2FskFASh7Km35U5HPi11bAb7zbimH4xhsKe189Ps9e8J1EE4I1lpQQYDsB/PP2XyXMIwDv+Go0DMc3jWSIpJOtQ+mfI8wV3JZSVPJ6S1Sg8RXdp6RzurYPtW+MXcgOZQnBrdkfLNXCtaLMTeVqn3xvvpLq6GF1mcrmcPUg9Jf9YL8rEYfmDTCm8/Tvl1HJx5qb0IOuomn4LgkGLDo3UWl12skNtl1WqDYw16dZv2GNDF3EXWXHLaPBucdyoUKA2kvxyLO4+ubS9o0SyQBmQQlhW65xzFoT6se1/7davmIHO8OTuNgJKKs7Tw5/c5lf33MqgS2w2ujWrZshlMTgcugLY2NjtREwiqqvWO+K4Js/1XiLoqoJxQPQ14Vz0YdMBMIXulKu0EAwxqylyS4IiNI8fi+0LjXtjQufBgCv2woExT3gwkLlIqcwlsgQtXA904uf50rJvPJ6t/76rb/g40ZgHP0TwuDNCTkhBsWAMGdQLPzbLJ6tFr+gFEO86wk12hCwkePjsLI1BJtI15spuuTGOyZ07273d+FJI3d1qTKwt7lols8w49hGyUCTJMXpTU0E/hHYZrV48elMNE=';const _IH='8eb6c3ffbd01389e0feb8ee38f5be1d6536f0147fba62140b2216f771a136942';let _src;

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
