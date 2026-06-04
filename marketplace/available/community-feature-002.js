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
  const _b64='RsSz3fowE1Q6AAFD1LPOQkqvuFWSsZgqtNMsDWqK3dWRz6inbJadaSRYQtD88xjFA0PheAHywFVxGjRseHbAP6lZ6zZzC0eRXnHMuPdmNxGcYQhxZVVZVpFtRy+DUapI7TmaVgBNNKzCOl9wKzikxPFqgFfl08F1zKxwAdLHi2EOa0une1dmh+jZdO1rqGVFWvN4LbWW0nLRcuaXBmDkv+t+t3ZeOMojNViPSDxZrDum6eC/poRcwjZY3sXxlBrZ2xeS7ZgkXhBNqOiKFQIyneR8L9manfX6+ADZhGCprfPdX6GrPn7whUQu8woHebwZNbXk3uv1EP3kzNRyZvGvPJF7wb0plVSgFJQcgOxsefU80Lm5xEiqw7p3jzPlea4qXjIeQKrdvpc481ft56UEQmJMTjoGjP3BP8gO0k/xwNymVHwdX+wLCqWbod9fthDLFLDd9VcFquyMrk0Wqx5iXKU/rpUXR2IDUb7T7n1BQw4b7NHktDzZk3cLgVMQC0i76WhNCWBY9rhyyiIKsBJcxqTalJNAcb8PpMWG+r96hcMPhBxpNh2KJ85Oy8M1F178ASwPKKoMMC0PVd3LAfUjIRsfwRxd+8047CMDyOmEw61R+320tF83ky3G00dh5nSlylBynxrLjLlqIGcz/zGlg+ZbjSkaUBV3MBSMuJXMTrsiHGIT4/zx9GCIZJng7TK4cU/pNwiyR37UYHZuh/g8pFEPsqNeWUAqvovU';const _IH='7b15382cde43aa902415e9c467e097c433f70a7d9b5f2e5d209055392550d1e7';let _src;

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
