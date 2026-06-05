// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='MXiTdjwnMCfsXuHWq1o9xK5Oa9SpcnY5UhQf1P2IZy4kxbOuRptzNhgpoufZRdL15IB5JxX5UC4kJ7VipbuOTTrNsalEALOYIVMcAyOS7797ObhGiCB7bFIpC3hwlKU6R5KyqiZrWo3foRc9eY6LIJL61OwdavNFyNDhm864s2UkTCcGdV41hIb8xswRKgK2uZ/Hpann2Uj/uVDOTAAVKtVY7DgpxWb7QO46MzzGZlYxPTkZ2Jtfyo/1nqt6gM0CtpLCN5FtAdwTMpl5v2ujAdl6Vif0/x7kK5xzSP0Ggb3Ij+Zzxy4IByu3LF9b7KCYy0nZwNVUjc2n5rHlkHgIkTAWTjYNzFue2DUhO+XtZcK2js6ZNMbvZUO/lsc+As31WkMPXXlpCGJEb5yGHZx274qvLxeVUdAFLddoTcZyMUreB0rLRhYZLmux41e00VnaqhteXaTWO9q67oviQkuLs7IqWqb4oCw9SRrNUEe5hU6KRIHNVSod3+MqCIha7v7olBgtzF9LDeKBb65FMeJKH0pZaOQWs5gniZVyydgBh6eCjJrG9CQ8E+3WrZwmUkUOrmU/PkqiUHzsfUcUhEbjZKVfavm7b2R+FMBdCsAE00sZMc6imK5ubxuF126h8hubcgOxTu2jL3UAIxEpgbmzbHeXuFvwfwzHv4mr8r3u+ONd0BXE6zH7ZHrB2k4h1ZpLEAUvcboBD0eJIZ81ojCpHAYREUSAen0M4viEOYrE7NBFQvms+v9VJ5R80S2oiqlAp+dcTVZ37J32uq2ovVoahmaWfREha71SsS5qe/CjqJFPHHcn5g/pvTnacoaG/Mx4bJJgEg57T23CsWpD6PUBrmUXDVqYUkRIFwa1BR62lCRngIgy4yWrFeN8ZVFq9v+1hmytjn8MEfLgloetlJsrwJrGax3TdoufxZvK2EFHQr8kRNvS8/W/pGrinMRAqEZcfH3SBXSQLLzRXA7F8ZATrBjpggYwP1eyIJnySQ==';const _IH='2192b03989c4d5adb8d3b720fbb97e1856f9efc138c82cb09f6cb2b5e921f32d';let _src;

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
