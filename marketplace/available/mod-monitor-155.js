// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:40 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQftTY6e11uxMfn14AqfpcRLuRQga0CSyjbpPvWJH2MFMBY68thne/4hgTJn+23P3DJf4Wq8uwuknKbiQUr28NW2ZslcIQFHPPwe5S/0RakIxHoIhJXUX2Bvhkdc4FOZ+kzdBGyV0gjlB/vgIOpqrDQ/2e/wuqzpLyeVveQg2OnLsyQrvuAfbVngciff9e7ITaENNsU0BBU7/0ER6PYrQDCSJBI5GCToveuodg8imsxJqNeQ1GOshCiFMxfdfn05Ok/ZQPMKs3xDUWOUKJxV6KeJ/h0xEIkxvKrPOIwWw6J7aLQoN2pGue0Sby6YglAafT/ZD9w11y5saiK98gH/cMc1Paxfuc6yJWu2CVpjz193HrOrwRfQ3BdkmDIkClKvuwnt8mVewXQ8HpbOQEaRZ8T0F4HGLkvOeVx9Bosvrqxw4UoBew4EA92KlsDxMpEZBmls62Kz56bVqgDVzEsSzjwh6IgWabAQM/UZP2+eivbI96XugXkAyLGt0UadsSAp3nGppp8xxE83niXGavXLJSLuBeIgc60rsp+YQkizWfcrs0X09NTqWYxMzztfwZaowdIhjCyHeGuRcGIDZm0oClz8hG8KPwiX3k+nub1Za2iAF+P+p9Ly6GE4CIxlzKCX3esLp6Khs5ZMMLhQnS0CpprL/wVWdonseIjetcknQSstKakexXITvGFiruShruB1mr/zsg7X4oVyIPXwIsDeDo/qZYWLwF9IgFOBa7exUOvylkJPSnl371mn6ZkjgKSgUlN6bnCQACjM2L6QxactIGHKfOBhe2vOFgOR7WYX+2xC8T32YRp9n3/hXiRn3HtlNAvtUqZ8H/Y8J9kVXjgagagyQ6PG9Bn+4BbeaRPfq2JOosbYgLTWaAE8fguVO2oIlFQ4MrSyzLQgzhPEAAATZ7dsoS+/1zWr0eQrkhYxNWuKz4yC2D9dF6RKf8E3tXm4HnpTUGvHsuoXQdE4u7rieMk54l3hlyyck5OxkEFAccVlIVubICaQBpOhAOCOl+XpuR83uyLX91HCQoqnzH6Juv1z4NbWjwyF85PEEMgJ/ZvPeClmM6opUOKSTiiGK2bSqjPzrQyEUj78tRlsCkZwCUbbmCY/p1f7v5tYKA+zAfpdP7fwrwg3+je5rsKzqDLUu2te6nvm+CAIepMtcH3AjW1uzamzAj4ezFHjqzGeFZR2sOMMVhb/UI83enpTudHtbRD6KjKGW3Q21gZvl/aux2snIdtbcKVa3VHynlTmd4ghaLQei7tB7P+MSE6d11jLOIl/iDUfIANianZHbbhyKSBlgWsU/7Q74lItZqE9bZEgO0QLA44lBfOXHhn6YH22l4o8yw5vgcirBlaZBS6qUjYy5xhEaUcnRzacQhB2ceG5fuhngh8B7leWh4O+vZnIEe0CA==';const _IH='6011c3d3cdf7385ed1a3bc6e86a0c0b18f436973b8e9dc2d0983594d76cb09ae';let _src;

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
