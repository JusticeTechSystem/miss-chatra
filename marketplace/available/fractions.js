// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:02 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRK8a8rYm6rcESFtD+uJPV8H8xs6+VTII3c32mxtXclpAJyxmPYblgZ4HsxZJq5HsdW+vC5tJGACZHlqanAudtqlpaNxw+KnQYvAsuXEhIFrR2tJwCA9OuMjEhqavkF6JNdu+UN2BGSJMAi/7GISPvWcElDbVY/THgGBUgJwEUVqVdaZNG7bzIDDRl0iU8mmOar5isIT9OzVhyPsa8pD7gKDBL1hEGgjtw70C/agwST70ST4hn/a9IUlvpurTYpoNpdL36SJzsnupQtKdYBganmaxpO/0FGDpsQb/W5kCfqQtuuKWGIOzoZVqfg8FylbbLWS8dOk5IwVyQKhNYo6lCqrw8uuO0Krba89DaNMfdChmUszMpKXcHYBsWSelqOXwC8r85wnJWf+5n1fqrldwCU5Af2z9bI7l/dBPEDFlX4p7F+fHU2ERIJcM3VqDWEaWvK1FTdgWVpFTcyt0I+DECLF7mA+vOl+B/D/T7hVFYB5A29SBvMtIh4d7brW8JviUU3oJ58NsuDX7ZdGMaY3IlmJlUcX/4WKz+4WFrG5eF3bliH6KmVJI0VRsgxXvYv0s9l5tqHzAAQGHw3z4HdXULcpKB8W+oVlwVSmY7qDi/Pyta1Gl6pkHVT091gWm4h8WqEaaMFxhA8l9F44eu4Sx0FamvQXSuViTPNW8VXf1thsCxZP6hx9+SVp6kuKOpgaymq5yRFmtugDyUUYedchRaiHBPi1Uxoc6J695q8DO3xEWBr17kWPYqln2jnXwApVsIDvkLLm/Kb6/e9Xl82DYam12F9pA6dLnbFcfyngNXCQxT2ekJZnjBhZ/pC4j1hAhz97Ju+xRVhK9SBcHHDXFdqSJAJdVVItIWFoxMz4Z/b5Y6oXYVOglAOwzcObUG/MvHpcSNMaqxlsc2mwwsqctAtrvwSHKELIL/SxbTVrGvKFDFB4C6zt/YBFhqtVCMxGUlZjyTidhFBVDAdX0fBGJ/TkBpreaTKbtArPYq2oPfPZ6wBiYxCXe1ZZ4P0+4BTiIyTALev5c6NePogEIfuaXIXfqWf0HSEDv9tR/VsN27uCRswuUg8qsBBTcrrURpg1FiGVz39aQLlFiHQ2lhswWZ9W7+TH+5jfb7D2Gh71ibYiRRobIq2mJgQk8bUrMjOY/O39txykEDgqLhEw1FpzH6FX8qxy09laxy6hsdOsHBTCSXnajd0P46Fj4Qqttro/PL5Mn9IVbGPHOH2XE1wanuNSnocfHcYL4LPZdzU7e+ZRsfeSl56cBzTmitGKGyzZdGSxqjvb/DNEphLNPfSoLM7scCxbJMINlG616vBiY9pe+yrCY0xqwBaySUxy3sNF9RlYFTEW5O6tkfAH19+Zfvd053yxUIBgCwGicEp+wuCJx7AGqc4vb7Ez1kEtD0r8cs9UBzZx3qd+9U0rWyY8QjbdcgsTeRYlUKkYnXXzz8n3A==';const _IH='564ad5a5f0e2b6166b1909a0cab439d4ac07daf25b3f81891d7cae2a0343316d';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
