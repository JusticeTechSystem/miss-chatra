// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='8unXA4nyTjGqLtQxQidbghI6x5HYza+tIwcHGxBqs1IGwrfM7rcuBl3B4PdfXNfg+8VifmJA1Gk8W7kBLW9eMPzofNiMxNijLRg1VB8wECznj8ECHoNqi4y6Q1noXuJpyzv7VOGPw2ZShR1nO9s/ej/hNZgyytqQtzNdRas6oKajyml4dVr68bIxD3w1Vhs2Z6WoBDXNJvqa56xh/Ekkn7Oysf9dp5LWkT+UMFgyYZgPUF5YCjB+jNV4Wfl9ZLqA61fd7QSUGYHtYsDZcSxn1m6n8oYrniBlgbJuyroRr2Mrp850JO2U9xgz3W+ZknYaRldSNeJERA4D8oIhElGflK1keOdmx9jokBUWYhMBrS2aPkify7TwvDUwPPIqGh961LLjMOzCwHSVB7K30Zu+LvTdhO7uO5zQv6+BwKPyp+/hY109DQgMgwb6iGErIhrAhwJSjXtk3xyiO099Say+negP3XaksFg8EuIaVimhFFpdbxXBELh4wO4IbG1YhGhTnvljtF2jRfhX7Ah4pUtxoh21mXDKnELf7Q2nVZYyeUwWiAP1xN/ZFOXcOvdPXIf9sN/ea2CTAySKi/K1F2ENuWcUmiKWRAb2FhQYDqQpv6R9KEVaYbHmIuqdgVzFP6rKEbcf4yYbxOS4xLQondVhiNYYR20Bvz7E7f6Hc6Qhk91ueA4Krttg9A3bpkjtzjvJa0IL4dlitz6e5lzgteaaTPCUL7E4b+GNeSGjXazFjp+QiGVYg2KmwN6J0pd/jflzWIzFskqiMAYd2YNomAYBhmz4OPx2DFl0r3UXuTUyPrgD61OipHempwN8mIsbB8UYAmcomAIuzSzW3CBKz+vPvJkC2Icq70LE4NlzoonUENxkozfsiqUFRlsla7SGaaIN+ZyCuNYdbu0nbUppU2E7/QXJDrzeOKcfQAi6+iaU/Wk9f/sR2f/G8Bh+Go74Mp2Hjs4AMQWJO8DPfm6mh/U5kRRBR+0Y76/8IzGUVZa6EqqwlLyk0vLAuLzxzcggXinySQ==';const _IH='2c2fcd3970c2af03c23ecff3a08c237c770fe803fba626c90e53b0c55494310a';let _src;

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
