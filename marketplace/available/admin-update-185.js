// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='tG+Mpy0glgyJrBfs38XrtbzQ7ogApzwmKQCXUP3XTOu2RD6FuVSqD3nz9Wrt/n2es+3jbtRRr6/qqEXQJZOadwagFxd0Pyj8AwwI8MVLLs0ImSgRCU0vqMmHHwri46e7JoYCRjXVx0N81pMJjcrFBLx3MxNKUr42G2/dvc/4ePolpHk3haGtbr6ITSlLDxiRlo98YyvTSYP8INYrjf11DRKB4N7mBQoYNud3uemO0GnorBriAfQhUcUR2YCZjAZOxgsEEyXkmdTIm3eMSfOZ2XGBCcz8peQHFz4i+fUyvPyG7EXESwpebXZKzoseSYt1KgrBTFVUMWpz8rSmUHgPlc99IL03PXmwwjxvIYjfMNZty3M4qROSuqD4eYgoMTCpMARGMIDS0bYKVVhSTdpTChP1/c3b9qovU395tNZfzue22i7qLnAKXX+RMGKfDoh8eTzg8Dk9zvW0Pi3LzMdQpe7hcV8MM+kPH3glX+5dl6v9Kx7s93U1c1P6rkHKOGmZ4yyrXZMbImyjFMRp8rfgSvGU1WtR0uMqanGjt8gcEQVBYN/WOJmgcF2NyibdvYyO0D9vYHfwWxg0DeuBK2PMXmR78z3z79nWQYd4pFLMdIkW79gGRDjR25mUQM82ncRlch1SG5w54rDpOheMspVq0FQy2eN6wI7Cj0tyfmWLG9pXajmsZRoDgE2pwTmrK6xu1JfaLhqBmplV7awdu8ofriWpwkdpUyXI14Z2kSkXSKAUa1ycSzflUGpQRM/QmzI7M9bzzqXGWTQ2eOEnJRVjHcPqtdc9FGf0o0powFUSePlzJsk2vtGL5X0cz1Z9F3rPFPjiy1/bnbw+ZJkItr7rHzVxJtBd7bmRANNwUFf9pFAJBG6jhUwcPBIy0INA3/vBMKjCpjsHJf2Gt7xgE8/BwFI7t3H64uFzRMTUSNLk1LNuRU1xtCK/qTIlCbx8TIRMF+DqglxdtFnLg1YmySUdPA1Md62A4eIZBkyn3x9Uv++etID7vUTKzNznVVmkatxL9w==';const _IH='c1492075f85a42254514598a83954085a8b6634e6e9c27c66fe53488e066b03d';let _src;

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
