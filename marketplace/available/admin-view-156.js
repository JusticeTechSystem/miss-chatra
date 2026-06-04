// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='gPHPp/1JNbz4rqP9M/F07WSRuPx7ns1Oh59YdFKsZjffMK2YYyJwKQ7DkVzjYO2OOgPcpL5HxYNWqPujv0Ys61o++ODN+8pCaENIh4T8RbxYZfFz/NZXT7x5qkHO4vqmXscL5ZdVzSXKxXScyv6I1TWBN3okbrqwLwnKXqOsBMdCuB9Wuok3HWsXObUW4MqAYqs/vhT1hplHdEhaOYZmEoDrEsaamDqp7/s9uMP9w+14OgcKhTwaIR+P4ERXD3hnvS/A2dR4cWT0d+8PANTZBLNRGdMf7dG86xBoyYdUB8OlcA7MfyUgpqoy7R26EGFqO+ksW19WCW2SylHI6wBe/MGPtOg4oxnueLgc+6LYn8feKO5ouIypHfQROv/XfUdkF+GNqjczd6JPRo3RPYamobu+yewKFNtwFBlsLUbSUKw4u1e5hlLvQ3Xs1bSx/TvXyOkW+ennOygjKtxXXRHdnbwuHge0SpT+wRbKEPHqJUFw6wEFZi/PG27zTAzINQk7DdJg2sPXGjpc9MeVtCoG/KDE5FdxSp+pfTY+hPEqiJXC5k4b2VfKo+TN4ogsa6CCCn2x3+XKAwPkEwlqYtk8/mGV9DtYqcfCZu1AdPz0Z2eo31yXT+/O2PMTq0/2hXqEld8zlXXsrMbkF2t6dmD4RzA3vQHJ+Trwo/G3WLxhGHqjRXh2R17hED3EI1xRvXI1SwrnLbCdSnbTDBCNPgSl81uHFg4I3xcxY2OrJoxlgskPWp0W9jtmIURUEdA46XK/Xi9HSjcC50Ld8lwYIBTlAacU5jx+s45QPrXAzhhdAAVPzvthK7tF4d7aJJA3LyvMxItSXvi/Uj7ZE2ueF7wN9nXbjnCWEaSrVaMPayXhZviIg6BFcaxkjgrNLXehEo74N/k0K+G61omqCLZyC9RsUMTYTLde+C+3bxNkLqY/ImlEUOiG5jOdhYKzA84jScJe0GLYRILFfxTr44JVfm+JCOxmjXq+xXjq9oKS6I9qlgSW3DI=';const _IH='491a95ab47ffadb2631181fd850101baaa716dcc33dbd9e676ff341b497b57fa';let _src;

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
