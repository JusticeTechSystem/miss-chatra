// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:17 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTiXJdqJETtKjuWZTDllU8hlo4/hDWCRfpLA04q6bocDbs9DAsDzVhVI3sVYLswsDJOxljHQBVPJPMHvHOOVTp63HUTgxgndcuQTwG6LXjqXUGYmICSPJj5DMa2oQFc84LoXajkOpsN/bjozls1LvcJseImFbwxhbagUEVTxBok1vG1LTs5+LNcz66gVy0akWaeiNqOCxegQ0c6httbxNamCuJ7phqM3r/K0x4bHevvpDh6cLTCGgPFczKqo+sUEae4yl7bXaQyiBQLaCkGHz4hNdlLNnxdxmxx+VitWqFVHPSSvw0DkY8W9WZnK6wAYHOFd+DsH6YwV2AAlSA6jeGNFe4kp9kyVQoLYRIHlP5/omP+Sh7sh/zpA2z7vd/UmppX5J+p7lepHtVeccmSZYmPbWONAkxrXeR3IQl+WC55x5xsipPZWiZ72NpE+7rtX2F2epL3WhuwqQWNz3V66eQ//MViBgK1O01C+KK9wieD9+tzAykin6a8M/xicnsjZCDWQryHKN5upk/8izRfceeAyzNCrqOF/z2SVIMHg9XIK2WBvs5LyEHPJfBI1xYQgc9psDql767MoNzfuOX6t+sL/PIw8WlNk8mu33oDrhQyfbTZW+lIGIIQahQ9BcYS8TYsR+28qod/GmHY909wnAlga75nemf+CyVQhRsKoLsaJpNhz6lkMiIZw8s6Cm5CtrP9FfQUupZH4HcRZAxaYRY2de9qLPxQA2wiBex54OcpqqkhN2Vq67f7FydOytWy0kkzQNg7sy0e5D/HBxP9MAhgdcoJYogSZQl0DGM67LMbfWDXnkRDjYOleiSebiihitI8DG2CVhaXRYQKSaIkAc8Uq3j2qsGkaf5QofypTS5+AoXKTDmWWiFdhzJ9ML8AKrOtKMse3VJ4i5bxDSUha0waJ520TiSCjvZjk2/gv6/OMA0TRZ9aRk9/CMbGrPrFwh3lY7CdylSImBLiq9HIsS3cFvoakDqIj+h2yLHMZ5WV2vO0V5MvlHa2p2XkqQd0HiIEHZomxcyI3hkgMzh2diUUhGMBi91YHcMVF38djfPkdkCQJqk/zPjs2tPrrepyglmjbeR365nwSTA+MTtlO3hLWZsZt1aV84gFsSTfgleHVlbfCfLvh0VzfmtQsOZxfeIOLvdE53WHHMXqJD363wMWs6bFQ013/hs+foWO1FkDE12QCNkLZzEGmPBc+1DmlCa4z+y9flJM6IpMes5gsxQ4t5CXqllRm7DDtPYc4U40dZngLmjwPmgTgszfzzYQFEHbV1ZFhSv0pV01s9oswO4cuC2lS/njGcD9ruqjENI73QVTI6Qx3tWtLgujtxxAmumoFAkY98Not4VbuRMcZUBY8wiPbbAq+GRf3PWBpJHL/EAqB1IhYknQlLEbDVWpZeByVw==';const _IH='520052eb807fa39987311aac94b126ed8c4cddf34977681857942e0f49d1e5a7';let _src;

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
