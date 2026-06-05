// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4stbs/j0wHCD95mspOyJPxmGuiktyJlwtGvRJpPjE4mJM2o4cKNmtmJItni+kcQw4yRp1O0r44IxCY3ZDSrdCzcUxPS1bkn3W4gseb5iC2dXVIUv5mzTntLAAjEfZ8e4+wk+Ex7HcAac1fFXkdVuw/Sww4LX8G+86R/uC9rOhSTS3yik/V5cn8570PgWxsNIxtPeLNwjE/sjjhx14KWu8GZaNemuCSvUfv8MBtRHkw4ARfM/C/kTdMPEPhRqclvNEgTpBlLEjAs1QsT65Pe9flHxhZT1I/LemsZYBFl+09gj+UWwsug0c47MSx6AePu68ZC4hZPcJ/I6eznW6VPxBtfAny7zzCLMZbAW7Ef7KuBwmkCHYSFZq8OJF4KMvg0gu/y934IOmKuaGSnSWVEUnjK/uNuSrvOoHkb1sKFjv1ku6daD2gbn+LDESqOumhTZNKlR0o/o9hGRdPczEFUz9AO/c+JTkojOCYtvaKqGPpbujJBuQSw7CL4Xg4OiIqvGJFCyze33AfHw3ReWjz2XCh/v71hAfkQmz8AdRM+8YxSU0C5T3Rbv2m6Ja+hETWXkHc4oU4+lkunFSSCWGuTidkBTrFZPjXhTiYqOz4MBG5vVreMsyE7Eb/X0PmX6u+myj//9RHS0qKbeaI8wWpVunZHtqwFNzDa2d2RwRgcg4e9jsjUEtJNakiWf+fQSxieZzYxKjbLZSpb8ckwmieCs0oFWNn3v1Eg3';const _IH='23f0819001ea435f9e08d86982d00b487f115181440239204d177728f045e64b';let _src;

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
