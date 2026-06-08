// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4JjY6NnMxJrGrIhK+Hm37XJGCxGYdsKGXeyHUoEdUC8eu6jXm57PWJlj8nN3RtPMLsJFpDvCB7FuBtfIziEO13c3PMy/tvrvtT3HW+Jc85rGdI3jxB03BUWv62VLQWNqOLC/aaCuy70LEhZi3Qjqu4FKDR8pRFLDvEIRYpgUMMaR8O/ep1rOasCg1sWQXgmxZoLjjNU0xLOFa4wAeXBlspQjgR2vAvZp9UwPLjpXxEZ2tQ1xxAjBshx1ba0ZVpuqWlburV14u0OJOkcrJ4GPQHbNzraS2d8Ja9TXUXaySWn66RU3LXGPwaJSJxRpcrhMX1UdWqgIJc/Foi3wIyomF/HVttcPZDFwWeseN3vPCfPHWjWiHkHgMbPK9yxTVHaBFL6pCtAFchEx2LUlfvPLl79o+pWWDvWfYFQN9J5Fqqq8hhcOEUYRXWO9TVW7Sfuwpl4h/Uen55zeDz+q2O5qfc66BWxII2A9KZ6XRypp1/0aXMdvp3JmUGIe12DbcdxmVhn/hF3Qlj9cKTBmPBATKMp7R8FBCvjYbA91bbU4Lf2Xv5jYre3GdNWGqlPI8ExEYNmVrHnBv0sb5c8moKpqkqTHouLVZBt/6zCe11P8fdajDR2Cy3nBzXIj8LH1rCEv88773rCeU04+++0OSxouU95mKlBprUpp4VOgHOxgM2Sm1WdH4gOZuH4wMyiqrWqvoPGVXgeETuo=';const _IH='1ee5d1286afde0a38239552b235a061cd2d2fa3b426e5e498640781022fda18b';let _src;

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
