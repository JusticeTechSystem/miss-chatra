// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7J3hr6jeY5zrOKy2CRM1uPUxJAX+Vs7yo1yWbvi/59gdPxgkzgLlccXweSomN79LpDBpOhaTriBXPVGqyBJ9mY2iDRzte1gEivOc3jS2Oh7Cw0tsxa7vMqX2H8IkellW2aU3IRFycjnjcC5+xJbug1FesUTOTdT/v8eFPiR4G2yZBMX3pFWncSrAtIHNoYX/Z5o8766pvoyKdY4ndzy56UjTYxTcPiEw3nN3Qnh4ycVcT84tfjeobrOf9xvy/TN9UXgRfPAJOMXROfztqh6fj6FoO7YFanpO4jBpBkrQzCrfvZu6PdmmS/m2w73UV/sVWbTls4vzCYeBCSyWCggVpboQuzW29oEdrhvmsQyfzU9ogowKqGLKe2DLaqwG7B1DWu62CsQwe2bfpLgAobtqVAqFU33m14Bms5qPv4mTyG3hd6SNJXQfC5O9I9tfmCon+E4uE7uncdHQgz527NsMsgjR9Kr5D3K14ap9IC8eesi+lAw7JkhPyFSf2qH8iUU3yhEhG5YU/cPvnHDDky9ZYaVJCxwYRn+gSi7QY6iqLE8owrcmJ+xsK+XfGFoK9sAb6eBpJ/albtAptoxAS/XApm/aYp8vQlz2sgwh4hDzv6U3DdXWHa3n4u29UcHzBypmx9weVPxlqkuaSwCFIakVU5B6P2egB/7fwtFlXMIJxkg4zsq+eO5vAgIg7SB/99Q6qJ8F7+I1AYJJvRvxFqFHNNsZGz63EF/n7HQAhD8fJw==';const _IH='8f59ee7148275c13ed3cce8626553859fdfe61b4f830067ae312a11393030087';let _src;

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
