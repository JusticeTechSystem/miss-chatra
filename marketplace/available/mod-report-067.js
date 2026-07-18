// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:05 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRvZ9k1KHJiQZDjMoDw6BHV9cJnZozlqfKBi0/w+qXyw8Ne+w14/X/8cjYxHh9q287rqR2IDTNVqIzYc5t1kkQMk14QrbRTvqQ7Yph/fgD9v13jQN1Nxg7jn5MOQeCCtf4JCHFeCVwHruzaZz1dtP4j+BEphUQO7JCQsFby2Gjv6aW8AFGzsFM7OV9Sq1q8WJVi7tSnjOCH9X5+WKlgwADp8e/Cyl7XDZXZQXF6I4yZgxl/HZy8jlGkUYaGjEFhBBeqWbgmMpYAYK9+K34VJ80lo5q9IRyuo1zhcVC95WJOb88usPAKZz9rHnO8o9yl82bZaLx/zgWJvfNG9CJG8oAG0M2X6BbHm2XvPv0eD2StBJ8J996Lmje07NonIDhH0Ziksfn0oi/gIwNmkbW1Rq+j8yLHFj2oKlYA6Oyq1CBFkoFoanU8amxclyWaznrqw12jGHSa6IUjixRnhFBNA/eZwgNoQIrsIM3NY9/3Axhh35JTehvwbhd/5lP8DnYa7MYZqkMaHRcrVFGYIgBuDIL4MqdbpPb6TGGztUCjAYRnQGlbVV7AvGwtDHCzkkV82GFscBP4NIAoG8CLQKO3WniTr8MYlgxRuP2wnJex5hJbXS6137QAood8HvwUAmTrQlF+dOlYMnD/lUpVkAlZ0LubEzwJ0eaBsWQox7gcShNhbFp7fXUPzkmNxmph3e3FH8He23kWGlz59iUWu2GKiyjERb21jn89Kfz0R51C9bozj33CQfom68oi1flnGWDqTgFrEgQlUwP+5n+RajmDs1+b2LzOpAphpcoog0ZGMyQ560SM8jsLP/P1NCniHoQcKclEG45lp/EYI4sMYoY1ARcBex4KkVf7RAIvzXmwTrG7UHp8rLZJuVDNweNdpZT6q3NMm0qOVNBUP2l3q7TtzXHK+4U8QcC56Rx3O6c4+uWEvdZJ2iG31WrKaGcyL0pKNT3CUy87eoDeO0/4BEPAuaA7JzW2xcFuEOlKk7OcH6A1hIfrHqGOP9Q3Bv/RGi0JcWcrvxrSpYk52Cq+PymztO0qD9rdii9JWa/8RDX3txpIM0mpN0GNaFDcL+XfUb2HraviEq33g4Q+DUaYE/LKRDxVW0XjOTdJPRpnda6NfNZPZ9hqS8zN9QkiOejG4vagPDr3tQKA+v2nJx0naZDq+5LhqGuisi0FD6fHYXglHm0Hq1UMsAlr1OrM6KkiBpWt3Ya9MaaSUv2EE+Bw3xbJ7fBnD46PGzNsbSMI49VMClg6R4vTd99xgYFyuhJpabAHLX69UNeMKmQXc41GccZ1naPDfbRpfaeR5yoQ1seiK59206OVae1OA6acS89LbrrwYD6I+/3YYjeLIfg33fMSbqGHuPrw456sXBN5pxhT7aecWb6BSg==';const _IH='cbe06344880a4524eb002da3cf3c6a8175c98f4d295eb5600f7e847429d35c97';let _src;

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
