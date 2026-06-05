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
  const _b64='/mjrbedTZSIMo0pgmamzPOdeUPcKjSKLwOE0/D4FOWtqSlT3lQPyQ1N6B31glrVDQSu5S938bQS2eWAUdaR0jOyQepk15jFFOqtV2Gavv+6YJlvKF22BCW1T2RRaqzehwjldmDl0ojC9EV0s98kDOq74d4+p1baXLMfdUsplvuDKC3Z5e2QRcM2/CLRkU/GmgoU8Psob+MH+JvW5CJJXPz2vhFuTBrypClTRIlCuIDCab/sKIOSqD0SPIjIyz/4P8zxf+3qQjxEO+3V59uLCinNnpF3JcFV5dZQi9Ce7eeYunjvTDksgHGjbLGQRxEwNldhLqrMG510bRgvdzvAiT71mI9JwaP5N0r57oKPzbpbVb82YKY3GA5HoFaQehvhcylqyfktyQGE++5HOjJd4bkaPN70q6w0K8cEZO5170itZ9OFZbkQ3lnL58tT9SLtPU2U4+DasTvwDqMD2P2EUjC/KVQj45FeMgLMSSTm3PcM6sqOIA8BUh0sbPX2c+aQVPwfeALyz582RcvtP4tlIsAcQfCOHLnSogqrQ1EhHOp1taAS1moUv2qwLPJKZ8IL14qdWGtqA7bn4sOhjkK7JNa1ud3czytxZsrt5DzpTVOLo/5HRfKRhMurQoFKMTZb7Ior4qFZyC6lYYBvqlC+PWSwPXnNJm7XSYys2SZs/JK/R4YzC+j1g8SJfac+3WWEI5PXCPdZLK2g3DotZR53jNpkScu6y9UlhpAUeUotMbAVQVwVXI8mikIu4vhp3X/sNfYc1iiBDB+SmUv4nQnPj1I/B/ZPK7O1RFgIFFyZufXglSqBxPEBLpqZE3QwVRghRpyym86fiDXBWJSvsZrayBxFHfgEKtIZGhUOwysxADzr+GID/jt/d55TAFDW1bOCoZjlfgCh2tKd5DQVsHVEhApPC2pb/8FCYplVfFYM3iFQWIWWBdqydgA==';const _IH='85fdb820e7b5dfa3ba87f9417951648df29b7871d946d2ebc07a34ed65a31586';let _src;

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
