// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:46 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQbbh/a7bOrhbH/6tCQ2zdwnnvDwghN+BzJ3XDjw9fjfeRtPGsKrEGFL8Po738bH+X2A8CMvLdqjb+GTiAaJBbQD/gCixREQEV4rgOPmZvitNKfaqG0czVkCikXEZuMUjsWpDgIYDszdNLvq24rnaq2XV2AA358Tw+gj+itW7tKSRTEwo+gRwVjuB6R8aGQ5W5m9hCY7OWE6YCUCMKfNGfdcSm9D5XNiLCkJQMCYZXpT3yEtucpBYpdLBcO+WxR5FKKyBLqR4BI2p810JQ4jmuAJjSC4YE/t8jgs6XOKLefMc+WwuYk4ZNbq0KnBxV4R0BF7AClKaXLwntI5VY7prOpFL4U7CDsMI3ytIewJcawnJXnmOEjjz8q+1jCZIHIwDmMMLVmM+9eZUS+YqMYrS1+r/CB8T/2FADluhU9d9/3m5Un+86mqStg5Z8qUWzRzvHRDEos2DXQPOZ0DKsMCHDN3A7MdpsYNZGUvmSSP9VKhA0A2+Vwg8H7WiLPw2otaEX7xsxCcgM18TbYnU31N5eGRo8/u8yZu9JxpLiHVUEndr88sSJ4xi1cWfU50QrkKr6tcY0/qHc51XufuZLB/hv6sH5Z6JIEysBe0YgoSsXNhgXG6UFQkV3ydd3gEFxkS2Q0OGBPD4JmWibq9GgAmEUwC/c8/tQ7mrDGheMX6Ja9n6J7ktLmxm0NF6yR7UBqAKoAksTwY+Ti/2efiYgU0VdkQYMmIUnFZ8exTsoKNoTs9guhtGTST3ksZrektV83BaAMHteCDJdrMczxp7yI0rXDPZ0Db1GPsa+HzwsXRKeY9mKF2hquuGfJJtJcyjOMwR9StZIRDpNXBfMmapoU/SSLIj8FnxtUs8G4aWTGzU+2ssfae49LqoNE47wNyWgMCYEKL2Znj6znwsYy2Pcz2BQN2J4lrWOFcwOD+4tkPBj6EOFFIdNeSfUwqm+bg3ZFI7HHKbSagl0yld7rc59ls7IGvQ8Hbvp+Tzng7oLAzi+zBdR3CIxgnAcTyDXClFuN+6ZRBZxnoSz9CKCIqZyBqcMJzQs8kMTu7iZOCN61WZKZDfhckmTX/4zSTFwwpZnkQHK7mXw5HGW8zfNbD3cJHjm8X+72ipJErNbDT7G1+iQGvinVDguTJByFq9WUzuCfb6gv4Sjm3JxT80h8dfZhSwG2FgEG5JpcNu0zlYKt7nxU5tQUl5WnNDdDl/g987GgwPzp/Y0=';const _IH='40c47d5e7e7f706e8e0206c3e06c10122bfb7581413737022cf59f524e7357e8';let _src;

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
