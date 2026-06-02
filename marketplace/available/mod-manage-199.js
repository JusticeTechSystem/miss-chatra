// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='wHvKV3cLdhnka2JvaTID2y6YZGjr0wKk+giweaO7Mys4d7nxpl6lsSVMkquLPfLaCVstVYHeATF6bysM2kEXOAtpsULQ4eq98MPFysAvnqtd0L4BnkTTPzvclJBVMK3eec7a5PQOPAfWULBCi/BBPG3bWGsriNRGElIVtyuHC9tFBeGKMeV9V17X6NI7afpM4EpCaxhXyPxDVbnR9YemQC9WyQf50Y8HAIGAcprQC2rbIxEIbLrIM+R/s/5+pKmQw6pNY1hR1gzD7U+K0MoZmDnObHLE8LFU2GsbWi7oIrQK06Ke5MU+g3si4aHBztUmcPXeY63b8LenEWWC+EbGx+vyLJxrGJotZdkBMLl5YHDlIf4Glx1UiDdvskkLXbbLauMGaiNnejdDlseoi3ggKCnfsSnjetHLGzV50JwXM09eklXAsBIQ4TMXAqrwrENYUDbZGHqiQ/LdAvr+u2pbzRBH2pjqj1o7cG62r8FObC5R7rUi0CDzcCsHEKEpxlr6eGc+5cHPsoPfea2wThixtTY3/utOeqwM7BI/6RKFcm7g8UIcusAOVSr/ZNVSi4LkZe5mDQ5WCjB9XQMGyVlNKwF+w8Mh/mD5dluKy6Wji8CEMHMrd2DjE/FYDXc1cXfLeN8ej59PUZSdyMS3mE9Rj4mUYajPWYFH3iMOR+hr/RFr4mxQk10dZOZO4Fcp4aSPxAmyu+P29JZHjVfqMEVMXNBQpLYD/p2M1BVf4COVJZBVtmw+kak03thGvTMWZX6+P57uQAjgoX5ZS2WY3WHBjem4U67tHe6VAkDANJskQFqB41ZUSA3RpNQDtFi8AoBRneNqahKFYj5YG/rdwsWiArsIJKvpo3EYf1FIMSrmLhfvKxYlaZRyljQoGy/5TTn9ujQAPxmq5fF7Lmf8BNp1AS5HU+vyODX0YUoapDc+ZESZLS4XM3D0lf5PfwySd0Zq30doVgAjXxXoKoQ+ETkHtRmpWbxR8lU4Yzp3tht0xGdZaH0LBtXIINO6xG+aN+HgzJcNh6/ODU4RCQAlUf/l65Z1R2wr1IzIUv+EV43AU6Jr8Pq+dntRPjWSv4jyAP74BNFtYMJphLw2RU0Ae1Gk/CHRqaL+VCN8c6sHzqp+NTq91gVGj/cYvGSrTw0W7furPKh0VYEmiFtiW7JbFQDdGZR7uFT1Mkp2+RolA6ImAihQVrvyoErSl7nZBleK4Xv5oVXG6KE7uzLMs076ThGV1oUfKCBtaBNwUqYQHBRDXP01Gi6TVCCI1PSHhRud985clhO3JPob3hbWLTfKdbJff2PyMedz45MdfS5dbMLvLXFWtsYKkjyGikjdQynu/fuhW7sEFBCPjHzCfdbDDqPcuxLxf4Mb7Ev8BQkRi9cG1r6YCFfM0SQ2RQ==';const _IH='6a9a1e008dc8c084a85ef45ae859e886cf3a34221eb0008d75d0b00e9b54a3fd';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
