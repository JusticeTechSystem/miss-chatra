// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='S0R8GGo6QVnK/x2Hdeoj0fGxPvr2b5Ebuf0M+RV1cDe8lt7p9rXRiMaRwbrEZnnFKMj4CmeqNzmUBYYQcs3ALnjb2uLSEZkch5PRRT+WgwFdOlPQ7pE6cdYlugq4h6QQ2ULmATz0zGn6vj7zqmtgNd9BzKalUvb/tD/g2AxBxyMvDCADPX2zYmny/zz16WLS5yMCen3BQIiqGfIQvr5Vv6vvgxX27dKd/HRQLQMTONsCNwjnZKGcMGM02II94zznmbNHTPSxJtTPbOjA/MNMy2hBGjXZ9JcDwHerm4zRVG/EPsOBjzoPKgIKGP16oDF2pgqKzN1LrPzPO9w3Z11nUe71DVZj+TvrHg+q0MIbXRmbgSJn3BIWYjxL9zdvhfpwfHw0VQUUS1HdSv/mY0G+YB8HgF38aYnWT4hs2SWZUyqj3Rf41gckFNK0riloSM4qbKH3C4J5TNRrARgQlFG/srcOwYRrd7vMLd05SALQFoXa3AYsKUXoZsKsznSbtB4f/LDnZ/MWQyLYtnhx2zs5SKOoL7+tql8nOx7g5czep9EEreup5gHB1GCR+ezkPigsEc98COIXCAZx4zkIHCzvkVSVdPTVRXn6fdB7nFzIjsb6yL6RnojYQ8hCIOSryCSnvqYqOyllNvo57DVpFiZTEzGgBQFFtj1oxCYjPsKPmV/ZRrFMx61kXOcjRA3UC6A3yUGBxfBLxnEJIEDm3IJMQLK2zw+Bm830L07On8gfLG/e5zfDMSONPmc5ZT7wxh4xGC09uusAfmGtFG0FwEh+l4NEUPaUIFl4g6q6TCk2vXyjRBjHRL5dfM784i8aLGdnbYhAmO024DF/AP8JloZDt94xvrwn/why145/SCulysSWSI8NO64NenFcAwDOF7PBm7k2tPONx1ovhBoBpHSgsbNQ7AY1kaetJLu3lwSHmrnIMHvKeo2ybsTpRNLmd/kVymIcwxZVqvecS6+LGvWdWGmBZMdnnZkPwEVmjsR7QOFwGNA/2eZuHu6DK0brIAsHTdfIW5VE2hBFlJyncj5agSEwXvyp0l4+obb88t1jwmEuPESUYN2BAolASLTr0MD3Pc5bg8AQw45Bae2yxtdT4JZDhf+CS5MHPsO9VcMdCTXZw9Va6QwDy1gtHAvKwhZcIeAhIQajRK8GwYj9peIMc6Pz4Yml4PfQftasV1zI+WPAAdqUtfPhYqnqIM3jW7Ech9RNJgkCE8OlL0L03zOm3vZ2ag/LlV0BkbRuuVyzeNp0ClEx7fplezN46nnAqKK/cIASYYk1es1PYhSKlkU7OGiQqX9cyNuB27iMBb5d6eB4KTMoqTFOYWIZVRBGh5GaIEjdjJioXstiY3qejqMCxoPiBVvJJsTKeNUuMrkRZpXTTqoEw4I8JQ==';const _IH='52ab3f104802342491551ae65ffd8fb8e2e3cb09575a4615ef4a1337079f51de';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
