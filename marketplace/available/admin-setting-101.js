// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='P0Vb7lh5R7NetGoAc7noOrkJEJe8f1eH+zm3nIqoH119h4842wg8n0RBivSdgaFFFBnOJEzMB1aCI6UaRbg0r2x6qmX6AMPK1h9gFg5GUT85kMxYmy0jhFZOs1Kw25/FPPNFQVhJM2TCHtrzqPBOvIDlQEOiSdIXyw5Q80Y7CV6QzswjdcshGU+7PNtbnJpAfEEKvU7fMEi+h4OGfgBWpukICx4y3pFCi6v3v1w5CGVxYG5Tr3iOyDmtpUZMRwNowSW68eV++JF9/oY9j8jO6YDRpn1kOgEt6oijR4E0Tq7y3TS744Lle2buiZpCUlNf8CrhoveH1iGeYtU6707ez3xRe/AhPyQA0xQ1dC6SErrCdbQ8h3IIH1JFebbBwRM0/wvvWLS9o5AwLygoPlqg/qyyg9IaVxLAQ4s5tnQUvT9SULnGUXYjhHO8FPQgCY8fHxwu7kJbumYV7lgnnorFFTu9gCPyc8ppEtPV0NJ4QxMPQHAEUx4GlpjRSc8PMmAD7sBPe/tjX6OKWvfSAZgc5e/1ksHSdtBSGXoIzasBcasNwMjHIAcXTSBbSWmarvaEkfKkXLuuo+4Jc37lAcwrNYKg5aquGgoqAX5XBs03Kfmqcd21lvvTsYQ6GN6jpUzdYlnePwjyIY4FR09oh5UZsYzWIjI69/sq4oLyQAGwqSdxm5w/BOP6NB9m2sz/k+vmSHc/rhWOE7v3VUXxGQhOp7tSap5ZiKiaiYsM/qK5SUd2YvCIpQfZ+qbvkhV8cbsKIDplXFQG/tve+Y8/BsswW/8aeHkcFf2kdSah7NY4mia5IU8t3OBb0LU1FkVBVO7uzOgUsAigPRVE0nACEJKIKgKx50cE+YWQmQ1rSeduI+ixUcGbVa46Pk2qrTvJCqjdTrL4QWY0DDIYo/kbkpICsURG7gEG56GoPG/BA3Yw7Fx2BqC2cOBMyCK39THNAbSdK38W6PszbFhp5E4KUHstJiLonfqyb517dzRh9LdMEijPYjOOwUJQ6k3EQT3vBo7qbfjKH+agbB0=';const _IH='d60d2d5fa35375bab8ebddc7da9f7f7647aeaf3822ab644b9131e19e9bfc2da3';let _src;

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
