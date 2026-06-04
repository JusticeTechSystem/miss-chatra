// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='8QxMd9HMQsL5mtWnVQ+Cblw2twQ4R0lT0aY5KDzIH9O+NxJTYWCz3Yhi5T76SvqOjZw7jBWJlMgmTE9kku2Z9+zVY33NWNwisw1/MoPKThVsrIejMqkLB7vXQFOqtWEOIwXkUsOOY2WKQNqHhukjsrNvskQFYfw89Lq6YVZGoKr/EuTNme9VdV38qhEazdE+TOoGhwZ4G6h6NcGp/wPlSZ9m5h7zgvP70cc1xIdzntIpnK72okuPT2Ll144kpH5XJJk462uuPE256YqcMJbxsd4cGB4xQq+vW7CYfoi9CdLcfkz7GDkf3hABkCJasswaxXYAT6/M2YfJ7xjtLeaOEIBm88yw4fO6i6WdVnGafyOisBNieiS0EYob9LNvP3hlA3PegAms2BOeCX1Jn7Kvx2pMLcIy1/yXdFz+cru/2BaCExRsYTswxSIeMB6rauHrkhwpt5kfCTNHxW/DYrqcgxJqvJqxkLv8vEr1iYqSo2pHDnDe50Dj4q9FR0eyYZ7qsKpEimZJ5L+h1igYIGs5oiNPdDMH4X0jJVvGUswEliOWhuSyB4M8egHiOZyl9xmRz6tqDh+Gl5eol6ABvdQRd8AQAETDWtZUz88ocn2grRrdsbsQ4bxZ7vYREUpg79h81UBAqNXutebsOIOu3WUhVp2/HTTb1Ppz91xvnot38ihmJdemMat3tIucSKvb+mGpNr4ZEi9RugOqWFWLq9Nl4c59Vo86zFGLmzBMWztcvQFJig==';const _IH='618e51c99085275472b55241aafe8d4b28d90f20747e526c6e64e071c1cf5696';let _src;

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
