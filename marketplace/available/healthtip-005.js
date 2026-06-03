// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7NXlWr1ED7x/XEaYBeqC5HCUEg6Slyal4VIAgutWcsasVFwQPQ92XRZ3y1uTqKtK+8ZcaeRYmzHgS+/eY9CHziD/A/lwksC6NqekslKNpAcgMo2ZhXCliv6i0nEqJwBiuCOwPqiJddqEDJK7SX+ySVFzqxDzhyeeqxJpx438FCvmc7nSqMkNmHGJ22aVAhz3pGImipvx5Qsi7MZ0lDa94n2e4HmvE7pH7KQw/KClvni/0gzapLK9A0WJa8+2bdjt8Xuj+l5PVyjl6McsESEyzC8eRZrjnbOcX/CowJ+Wh7O6pRQGmqCJDvEw4eadaEug2Tfu2ypTrVgTFfsIMlJro7iajkCOpT1Gq2N3gUpNTF0KjtYFchxgTrbw/IqQcONmStE1Xq29YgqXzf/5VKbWjNDnKpeeImEOk0SpI2NweKKIHBEyKvkzUe3jNOFk7wnL44N+LBuquQGSNKoGS749KneyG/PuDMPjQHZ6vyadFku4bjg58EdvSeiK7AIfVztuajtvqfrLI6Zd/tYpnNgqomdFKRUorVJawE9YR3tsWBNhUi3PQK/e2J83yNopRjgeVv3InpSEkILgh9+kg/k0kqudBLR3cUweXN5MTDp7MgnboO6yl13kBXge8keMLVwloP7X6/XUFC+cBgDHlv5D1ODeINH4ciCEWMDAHSJjq9p8GvBoVG4K0/I4EBwA4tBEXxdDV9nxysEh9R0j/PMXcEb5Zy6gJASWwkh/BVBAtXGAvITCRQ9n2+7w9Sv5vJ45b8es6jAWz+n+ipHllb1PbBz4C6zWxy0CZAtR8ReL4sPoseA5t/fF/FqaaldRYa3WZE9/AVUfQ/hmRIHzbgmrtYC5WNN5OhwIj91xDN1jr5q77OnrJK41V5iowDxgpYMxRXTs+XL57YBhhuT8R1irXInbH24Dtsv0RAXnpzoLemq0oDypVKq5wg==';const _IH='8dd90c7319b75a2df910866175cdad375bfe53e813624e4e6c7f3fe4cb8fde8e';let _src;

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
