// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='vCblYfQYYsd8xRya6JmFuR6XYP3BStDFLAu3L+WAiRnD8Py450tDSuXler0BqeJyuYhhh4z6qjBwExIcBefFSDv+1q77kv3VJ4gDtRCvPw8rA/wHflUC5Q/e0t7Cme8ia2S6aIQzJe7BBgThgbSd6EePdAxAdPYW4OTIIhMs3NAL4KI8wacp/mRiz/ujW7PSgxgfdqa+HUQ0X1f4fb/E1QDOt6qhbDwBSaoH8xRiLSoH+dgBaeRjfAtEOmr9XljKguC66RYQDmyeOOaGFmdWV00xBvrzxtjQ/v9CB7YPcd0u7AnD6SVADKF13x9Xv3wDbinbRAjz9RsnZky5z/sOnW9bECuHD4jZvC7gW9OP94W8L7Gi7r1zHS2RCOLLofpKOkGBQtnfu/j16mYToEmLzkgIzFBY3pygAEbrBsleacq9S10NfIGpqBzmuNkrEuP4bIz1FWhOUShHii+tQes0LpSA4SYE2yHAoiuZwV5YqzUoDE8/SeBAONjZkLNY3DDaWdEAdeUed9994yoJyHHOse7xcyxqD5UHBa1AR5OogWt9F5NxAP1lqYF5IcC9I1k+H6qcz8XYvKZQjF0bWue7ZewIQBpXOZkGyYv4QwNHrQ6kx7UAuv9p0zI6iBt+rVXaKd/Nc7gYZTjfl9hS1AGF1ejVHAIwUWqhPYh/w1zPPaR1kszCWBZg7TOYoB0j1DGrC/JP79yKNhpp0Z1VxxOHAhAg1NKWJHDC92GJ3VXe2lhAEg==';const _IH='f4220eb1cf69e34d18c7a11a5f002d2e294e4eaafb8dbc7ae892a6357bee02dc';let _src;

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
