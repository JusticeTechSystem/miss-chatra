// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='yD3+QdHLWQkLcBmwCJ/uMCSay6UENwO9xEU1rRV/NIAiLSeCOadcK/7P+MJdJWm6CNW7FFaS8OfkZyfJRrQML4qcSIft44SCY9bQPe6UIMQsaQT2/Q6k6KIornQ2B9nKRYGL4zbfjnJ/yxjUhplYkryghaYGxm+O0PqpNSeMmchjZBB5WzhIoagr75xWega99QLxvitHnPzk8j88BlUqvCKoAvENhxq7BUH9hWa7VuwirdSiIgmS1HBKDAdVZpovrP+lQ+4sWLH+TkVcNsQhi95iSJRgEojg8Pl6bG6c5ZhNa1DnnNKD4meKs/RdO8bbDx8kPJI08CUrDhgZnkRjJEKAuQWxF+f9ubkJI9PvKeqsHCA3JitStZzKJphZM6030RUGUu1XWQccaVygw5I3U3+G8tYup8tnbhbkgOLaex+2doQAA+K+Vsa7cAHxZqk9RuI2qSa+VVdEyINrFVBA11anzRuu9z90jjgAbgg/V6rCyUngCkqpzPAKuqjnYqN/PkwLLhF5o9WbdQVolPsAgJ3KUBAo6H7DsZDg0EXtOQt/WaguV6APWLeji+uvfxpmwhvZW46SDN0axlsIT4lO2Rr3uQwkYSbnE3KCO9i0Ohm1yZFFQK3bKzcnbEltWRHiHsRu76/4hSIblQUvNUIq/gm3QYeNFpGagziQO4pFtb21FCEBqlW97t1Dk2PYFljX75Q45+MFQRDBJYUA0rQsqhPpyM4=';const _IH='118f00cc7b7fa60886b158c1c9c077fe0680422bd788ec38a539072fc2d2b027';let _src;

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
