// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='F2p29LI9xYYo8UmC3bhVnEZ65ltgyoSr6GOJXYr3GQYSGNeSoNqMSY8LpdAL1JYjV0zzSDaXR6eCzJ44EmSP4VRx8NF8cqsa55vweEzxfmr2aAJDdshpBasq8yxoYgheNGQdnj2XKjs7dwEWJ5bEoaeRE9vxzW+j0/qnc/r9fVAB1NWIM+WAeW+pj+qzITd6+urWLHerjXOxBQhpS8MlPJvkFSgx+4oD9A/chzthz7COah9yn6+5i8ZD5hIDYpBHECQNv27QzjtB+bxHlbZTDz4lwiy3QgrMYUaoQMnmjqP7/w+x0iAeIuXOAWrfefDBbwSW2iDJ+3sxwp42s1MnlC/6KHQ1qWNaNBnLGBT4nO0NBenXne4Y2wDzmQN0arem+VKt+6IMrrazofdBxFn6X6yNTeik+cNlLKJJ/JzVF/rrGZu/+QnhERbQqfiLJiSuEtGwOTAu9UyaaFx4Xwny509SsiHL6i1tZu/KX81M4le1ijQzANBxi8HCMCrnXbdfMS3ooHOL2/WWwRQ6M+V/2ve/G4xXFayxPZzNdvXzYED0Sab1fWKpl6u/gBQ6/krVvLiWVDhaEiBXAPzSEpIKh2rsi5ahW+XzoPjTNIU5FgiqJcm5jrshalgKjouUaoVD3TH+7u4nf08I6dgjEIH527NbXzJhDqaLTb2TNz4dsNwJ/DJPH/oTr+EoeK4gObkZoWhOA+Y/DTUklNkyqqpHJ8la3XrQLOkt9fB1e08+6S6cptPt4v1HpNjbXAqa+o4+k3c37MZNJy0Ifo8V+oLj8ZGKnS3LsRWRet9ElImQJB6tKzK24Rc9euRPRV1oKT8lMVEFN1DBEOwyHTooXMGLxkjITIlVke5uNOtjJ3cuMzOmT+/P491WXpAIQpQrxGQDH3xvAGjEK0d1aFEGryGP2yn3rWhpc9CXmbjOsSUbOtNzUmW8IyoQtM8pIYJkfFU5kBbcmZvDAa20gfAi0YK9R/nUYvCMlSiCgLxIpGwcAI+uh0+074FiKftDl9C96vwLDmN3EQrJzTlIs1a2kGhydgBvF6PnvoMywBxxlIQVwEHrlSMJP40fJmyOPjffq6m6Nest4/g1oUsExKvQwzwA4Ly7MY37dZ2VbDua++VL+RcWViU+he2fgbIehHSn5soBSB+qYS9AXC3BfGoFypt5Un4drQYq6IaUDA0Xi281AiLYRZU0A15b6pKSP/o0rCLSI7D1';const _IH='82ab27ac600a76d20f4b1fa795fb40ceb002676e7642b2edd08845623b308101';let _src;

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
