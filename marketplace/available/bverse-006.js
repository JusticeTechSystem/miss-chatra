// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/szLfbBz6qYV5/mA09NTKGBUafNf42KJyTwM+Vnq/QSOfwFQgwuse91wjJe6yM19C748Z0EcCHcyxwdgfAcFRL6Y0np4GNwA2y1mBKG/RhWUoHYaCwptxNpMI+kLzS2YQSCxiZ/6Hi/VpIvAy9GMF081oaBVDJ+LsnUy5/MDKJWVZKBD1NziznY8/es9MLkUekLmlaODr++NGd3PrGrIclQZFc3LFXxabkLkTTBlIsDzV/cEZcQSdEVh8gYl5EvKgGUBEh1+ekKzF1gwPb3+c6AhlSQvTKck3Kkp6/3SRDlyn1nyOLoA5Pzpk31u20sK7mqUyXflhFMMEiZMT4DSUUeMOR83koKIPHAYWHqcWSSy/fxC6CBdPoCQhSxGUB4vrM5zTMqRgSmWQNg7bMGe6rhfH3feaZVZ9nTMo5IMW/ELOjeE2rc5+TeRN2uaHKA28vH7DsqDyLPKkkjS53ETMW5fY1BniNOIZ21cj4+IxQxc9cvzfsHQpjMyUif8dXKP3oWvYBvwZOhZD/z6N8P23scpzKRyqLxC6YiZl1AuaRZmYLQ7fGDNK4O6TIm5fQM8Q0sh4fQcQMWV/DcCPV7b9AVc7Zwwdjx1tDoyeC3MO4Jhc94QrtJL+qnZsv+5EIil9zthurCtlvRnVu63X6FWjyrEnDLCLCfikbnVPFD+HAFKh1jkjIwg2Q==';const _IH='3e37702f442babf3f86dfd5ff26caea8544aa3d44a944e939e42b5488b98abf8';let _src;

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
