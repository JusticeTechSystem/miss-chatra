// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:37 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRcbgziHrfrE+/aFJVri4tTtM76p6nBac0FVM6oF1J7phag8bYg7Xl6gqMGl43s3vXvZuIF6gHFgJS0FKweZnLgcvbIwA4TCniRlKR5QQSoiEC7dRu8t59mw96LWyfrhGfPDRw9iqXm1n1LNaVP5w4FdvPJfPpwHZldKNDorZ2e9QRm0SMP0pBN6oNC6PQdxa/38ZSsP44qZVnyukJrpsxe+iChFhNaacvf8mUAB30sXqZ6LlbVR8FRzkcssA/0gQQmJ0UbxgXqI94KDwPkYn6z7XJYVzPbTqZaS7zil5ytp7uU1ps/7+PbL3TBIanc8GJ0w6bH4IkLuQM6kJGIIZF1qs3v+Z1e2NP2EPuZcfAWNf1gA8G2eGARqO46+yqne+CNPmvLDqP4fxsXDMa/TJHBtq6/OrUg/ivxEe7WBjio4b0gzfAtipsz/vpnLBq9AYVmcoIpE3AyuBS73D95o4p75UsdmlSuhxdL9wKYbz3/WjMYV+E49KKVd4LlVKQxYDibWrSQg7TExK9GRLCWU4Cf94MHlGrtidi6mC3gnuIQi7RsxrxGFVIGcbNZwXJNmC8CVjToNClhljGMuc79t50U1AIKmZ3qCAbYtGX80lv92XGQSmVbjgSYcnieW/KlDw2M8ERMzcLPLMuQ9jWd5qZZV1IyGXlyn4aCgo2L3mGlvYgoUtVEPNeAybvmljJIZZvQvduUONgwCh9b+9+/gmwQbKh5bYpcSFQ=';const _IH='1e1713a724180f1d81d1246dc4d92788bd67984bb5f5c2f9c2d23b83333b16ba';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
