// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6EEKQTaYC/p17e+AAqTsfFz42kk+IU8A1Mmj3kU1Q6oND1fevkpz721zCRp+zYBJRG3eTG2bmwG4HX7+vC+8jYvnWfr6vU8WgRKEHLv2GE/pVL07ydbCUBNhEg7xqCK4iaj1MNYM5Ix5gGhSXSeWJ606Q4Ht+CA17PkPxotTytCzJH5ZnAesVUkjFzPoDJS2vJohZzHf1yd8PmdqzlHPxqV7hXh+edPuqklAzpp6j3B6merhgqd2OUVakPYQgwAW/E9aBLhHuDm9nN/ZpkeJRUkfseaN7YEVUUajAoVp8ECyTB74tLolo+lbZ6444skCYlKwQRxY82FeGHfADvNI9XMW+WZkh10+NJ8zEcTV8d1DuNtD3J90NmGGDUEGOHypgREfIaOsMs0l2Ha1bUuVPHyZ+n3jJEkMo60qMJeAw5ukgdR+wZL5dl/IXl64UWVsYZRZFfQtS01uMKT+ASgZcIE37bYXEw5f3tHzA87bwED8XwSX648ecC6xnkv69KnFGoYu/8tkQFqW1sorapRaXDXnRgU9RRehEUOactw4PScz187mtfQPIUeYQoCDHYnRGLoMNnpZEJ1zL4y7+VTw2K/TTJI0azFD9AqwPVxOq3BDiQnQruh9QF31zYNTYHUyHT5XoGmh9w5R1q3xY0G5PwJQHXHr69/c+eU/lx0cXV0uGYWmhNCZPA4lPwMGQSnw737WBWw0HylbwZ+Sc3zOrHjl5Mpd7EThxFp3BHn3G4RoivrfK1sYtjQdWFPqZ9uTwxjOXYjn63ZOsZYCqbDG9L7XX3am3YJZsM9SdXcD014rbRVZi1lhGM2pv4a/LdncKJ6EuNIGLz3N6RdeYNerE9I+0z7nyXzGf8aCHzHm4ERkfTwrkiBv03Z6N7YlS+XbOV9ukjG2j1NcAcv0qEJ4DxEsFq7bIOah7CbJxlfBrXHNzQWG3x6ysiFy4IL/f6Jtue/NPj4a9bXOe4ThTlM4G5LBujlughUsD8FLgLH5L/EMDtHz5F1bwz90Q8k/';const _IH='168991398fb037e8ebc56145d140b190fe0195297917ad5f8e361d9a17ecb339';let _src;

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
