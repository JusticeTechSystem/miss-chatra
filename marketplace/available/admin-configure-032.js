// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='JQMcGiUY7V9LzM6qbOQrvObTxhjd7OHDtylbFXLNINAVt/w+Gi91NIJPAG1byzVjoOjdRmeMbuEBNvf6XdkYMKCPfpB/OoY0TL1Ez73WiHHx+41cO/dfvAYon8Qe2gbox0G7wHaSF616/cVHMlxeqzQb7pOzXrIx/tdsWEFE0B3+lXRqScjryzr/fPvHHiq3/cmiDVQ30IRdFt+rrnr3cPGYQbtbiFWtHGvBDA5GRRr/FReizc97ISksn3ZTlEweSXkgdyDcbOd36wD5WVBHdYs1XDwnvgHVFTTUdq87SxTlLcqPPw6jZ6ypvPrFCafWBHtGki3Tr5LKj+PFdmgIZo/SbTmhQVuEZsOB5ldGl0L2ZEJHsVpLzmJJMLUkC8RDP6dyk9pJIMHAMmILZDmCb4HA+u/oJqjKMI9HcujvMZYtq7aznF3lkcaEMox3vW85uFqrozGAlPtxWx/u5aSqVru2WFvoncKifrt30EMqWQl2SqTPsNvfQXSIHhVWYaU88EHYjSdr6UsDq9GhHcWwObszSWPFLEPBRI5/OCqREj/UPyqLKbKDu94eudpLI03z2Gzkf+zv4TymfemBAfTDYR1eEgGhjz586rMt7XmLeDGlEpt6FRCqA4MWAJ/z5Nd3AynHBf/PHpQHljuSMxP8N9M0dFpfJcLA7Z/FSQ4+G54RuGkn6dAwUtxYrOR2vxJt127uYBNUIu+s11t6CxUKK7iwmtUa+DvgR7FfE4RsQVa/4MYKyyWhcBPeRcCSqKrpubIMalRPhP5EjkDFBPMcW3+WUl3EsfaLT+6PfN132zyiej4rmCc9zw8hwLPmHpRX7tvw1on4nKayjLffD+AltEow4D3r7K8p2OutvpkZ18ipkxfDfzQUkaRf0Kwas6D2hICQj8NaSyHxjHshwo9yVUKUzjsVL5CN2k3EeklZN1YTmu8rCZIzZuyP8UMv1sGQAH+Hxed2HVnHXH2ii9dF0EzVUinaL4Ejtbpw4f7E7Ow18rumr0ty9rclsEj842DID1W9iCaPy4u1TB5YMXNg/sFJ';const _IH='a5f75b024cbf6f66c280be2122f270741d231d2b4c5a5c37d9ce04741adaee7c';let _src;

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
