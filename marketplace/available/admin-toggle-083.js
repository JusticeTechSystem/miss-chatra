// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:46:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0eFZzMmfwqmqfPDJlEgpTQszV/D9ArKgyEWwax9blT3vQWidLCUfnXQUoZw06e3D+ACG0PLeJ/okE3K6LCKqgvJi4jBVpqHNq4Mp4ze9vX7G2NFSlLvSvbAFRfa7LkpY9X9wNclC4RH+BZOp47p5Ti2nJ+vSfI1QW/0zR2gepYroLwFUUOK56GrlQ4bIp5U2XM7cY0ieBjZDHtdtT2PkWRV1dLhMjvQRRUdGFDy/I14xAYqHTiEdPjax62mBDxtoxc95sna7kVK+PCOH1x1hbrJ6aODQ9lD/nJyQdNgMcXmklGAD3+P+vX5j3pFTH4pw3KSkRa3qvDl0JChVHcFcwo3y8InxEftWzEcf7i2dMGAcHQTCBZ81HghF/fMW1jwsgEZUEbPRlUj0BWG+2hCIN5FcrXFjvsVBZjCfAxKKLlev68fBYzFqy51Z+UMmWOJF6K3ney9EO6DQpnT9YEFw1gnfbjJaPzZxSRgvIjPcXXvDczni8S8bPyAIUuU4SpD+yU8PmnHE9v6spxjV2YYdEQU6qAyUIj10QiYpZV/VrvmF310+y1V3tFjXUT9wYzvm9Ebz8ramIo5YkaylL5esPed4oC60+JC6OCIM/cC9cDipns5aS4LWKjUtOnl4wlTLG9Elgu2kupKJdAoYFhc6d4IJVtQL429vq8LRpkW7ultiwj8fUcsQbEeILAy6C59zNsxl+gNZjg0AgGfov8mHK+37jELEDoLgedx9mfUCggGuxT6RBTV4nXegyLmCTJIgLfubP+4XP3AfeLxTrYv8yVrembP7VpT08ZfvdjgP5FOcEAGmacu2pmezB43Al5Fvfd6bg8sDviMutR37O9VGHKY3Bi23ovJk6tJBtiQdSucPeGQP7Iob9Zth2pz4Vd1J6MTrvu/BCGWvwSHGI9IqoTRsopbk/zjutjTBDSYuBJWL1gAoRVpIpMMZjKxVP/W95vNC/oQCCOkMdVfY7UqmGJfn2LAEXDnf6gXAiX1CUPz9QviUT3G0fIrFpFnA';const _IH='bd047e5b8e9bf98ed7dcfde993786d8ec61a6aff329423da70a822f8e9b88c90';let _src;

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
