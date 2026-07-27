// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:28 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQCZe4dt5RL8kkPrdzTjV/6IIy4YJb9dnbPJ3iSulozjQGcxr/Cjs7OmGcwALX1qE5+yl+T28MfY6jXpPr+zp6fdXQ2Y9KdGB34+Jgk5cbAdYVRimDaPC1qeWg4PuKLRpM6ZpmG9r5pidZUTsPYMbcV8rmZEh8qWcek6sB6FIAYOvTOJRDzIKDeFFBAqzNOrN7n1T2v8X5Kbc4j6Qr+dD8F3q0gC5sQP8mNRwjhmWNoknHdrMQmPbh1XcatftvRnOv1EiDskip3BHevA9qRTC0r/HkjmSoFGT9Ud6iqobySnWKlLDlG1FimHoJ30zyjexgXqe3iYW07R3I11IYNCgbuMZHg09gixyT53hMbsxZuugJkQWCPFMhcyISAUhCd47IM7nhj8C/mSESOf5jULrPNGwsKioLnPl7K/mpWPSy9NbP5pnQZwhzxX3fiLarLgeh70wuDGDkInptd+JRNQjw9Z+TFxyQpcCiD4dTn3o9YPcIZTs2kl4BfaOSeoH3lhU1J+i1ON2VMzxY6+y9RLUOEaZDc6p5WdOO9Px72NBlDCoec4XsEnr0VrBeEle82a7sH/wxkyBz8aY/NBiR2rrPnhebGB7OMBma3jF6fTJe3HpOum19jRhJetSCo/pNRbuf1DTkbN/HVusOr65VaXu5M1F5GZwRGiPrG17AnOFX3VxUKaI5stp1dUoQKIbjm2Gf2hPkAuKhYvEzg1VMg5NhFj1NgsorNduWFQKsvdmXBVnPnJm4G/h2NMeWKSEqYm5gthUpwMz86i9ZRpcoqSzGsFbBRrws5epxtZqrH4K91lOyG63C7O7I6nQppYKAUP+OJim0pwF3TlvF8NeCeHaJvoYVB3pxktoI66iQaXxKxchtivUdHrwh+Giquhx8ekbxjHPu1y5p28wPcCYtJITRr7JplJP2LwS++3EEi0MCjumcWL2dgr2kxkA65QdYwwRcz7FIVA2TgJs+qgcGMwtTskYAeu9SDIWOJU8nHlc8VNEHXilM/pcdetEXlKl/fwK54IodGXcLIg34W+m+eTYTkcLC1IGtNqkIuVzM3XuTSqCB8pE9RARE2UQSE3wu4eiNWVtBmbvGxytHBtFYk91XpXbptLB2+xY6ctYSaufHOqre5vc6RyIz8BwJS2U3O8ne0KOMqLrCIgvgFxxV2rioX8a6wd5I9rMUNb0NfP74tlFEV6FF9YLP7VcE74eV9hjDNiQZJKfEPmicJmjLAF3I5dcnbNsIKXcMYdAzXWUuyz6qDTE5+fqoydv8PaW4TlY4pgtHPRbda08Vgah3wrFl+YePuslQItlw6o8JhOVVk858qWcMmf0qOAGBT5nPIbEFwi1R1c5GdFEr9SIU4bWMO5gGqcLtkDO/M';const _IH='d8998c5aa899be06e46a8e14160388041385f89865ee8bb61c45be7560212b5e';let _src;

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
