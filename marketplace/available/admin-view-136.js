// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9BBBmUVnG9X2bE1QsdTdK0hCdItL0Ze6qwhBZrLq+WSyP3JEdL16S0OaKb8NRXCFscXSNJnHdEfbUFSZkLbDmWAvG1W+8WGRpvvIzveJsjutLVnThIZxBsXg0RCHkG1ClSSxbchUTV2LbJ6A6mwBtJYZ+Wpl6i7NGVFFYP609kDMHdonuA5V66GTAeyDXbwa9A/UpvrO8l0mPrXWARYyfy8jpzn/4UcvLH7MWS4iRexzcOYYD050+RBp7lc/bvldniFx6KTq0M/6CA0aVqWJYBBMQN/bv2ViCTYdzuf0N6ww0ENsbEGce/kj1UsHaaOWWq8SPtBwQMkjQm4h+M/BJhD93rINBk7hpPnPaIa0jGRsEkhEOqVcEzIgofbe7b85RamrPQAfSyfaNTagLoh1bR4lFjS1yAWKWzgyfJZ2fRC4Riudi9euOTY/tK9I8X/AvR34/Z3HlKlL0NGUAuOvFqhEXf0hQI3+8AkStgJsqohrCIlfVHixY5haPGIq2V+iZ9U3jsr8mq8m34QhUMmYjNCPk9HEk769opUSK/Zx/L4GOJTDGK0/GMWM/I9Tppw+H6Wwg8AnIdxiymOQzcrLElwG7F+UPux0DtbU3n+K9RnKxH0zwpKQmy0FFbuzDcAKsvr5kv3okMwlry/nxfxnwpd0pPL6ZRQiw+bKbc6bYqDv3ZAu/nthwTNn7rSWbvp26+2ksXTiGK1TEptZNyYjZjRHoDnrBTYGqo+y9zm8gIAy+L2J6Cp8pjXaS1QW5KISbeibRbycwuFrHqlDGnH3nr1eMNMTFlczYu5jESZrMR9SvhrQdsuBNFDMIUayvvewVEwt6uvWZXaB4lp2FEnaSDO8+PGnfO8aLU3SOX0sewM3+Lxcd8aynoZdI/s4CbHwRWgRXYvqfK1lqvxjyG856oz2J3goMLutQu67leRy4tMt6D8flv1fCM0YCXxj5zFiLxWFSdDKX7O/41xsNAhZb3gaDdrcX49ycwDhDo7A3fhZyP4=';const _IH='88c91ad5dd93d41600aebabed31b43c142bfa0a5b6e4199f0ebcac3fb4df5317';let _src;

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
