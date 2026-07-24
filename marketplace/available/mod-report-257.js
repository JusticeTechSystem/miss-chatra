// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:38 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSCrB0AfFpiEv5bF8uj1RH3Hh6qHduqv+OxAuNtvu21PK8jKMLlFdhkmzzOqrz7BePuauSQakFi1Tf63s6VfKItpAy1xNejhgVwt1u8HA/EVIw2UbbG5UG3nLgPuCIoNMyKAtmZoldmAkwXKR+UBuzKRZfh8wsYr8wcwNmouSfotem7ZV2mB51ja31k2/34GuTxZDAan3MRna7i5aCMO9vpzmU4X5n5QTo4Oa27li362MSk9ATTnkOOvGgNemgtXw0uuRa5J+x8UJOR9Z6t3DtJzck9HN6ferO9bFbcsZzmlM1rHM5ziuaec57zPxprHWODNl6qt46xFA5J6xZKnvwJ0soUxHFa7pAsR6g0Thfcv8cIZozJGfrxblV07GClCkuTdCYPSAODnvx/kzncFJ2cOHvAJJ29t3PAiAeIUZeMudHNz45Yqq+ez0pKRVqoVLG9bFnjVnYVfX2dKVdp7af8bHirrf/S3upajNRfeLi6mj1qzjRb5uTIqkOMItulSeDYludv88EB8f7PVLrWJ3Y5LTwMuemYVzYPfy67i7Dy8bMwcbDCJcDEq/QUfzrsSS/9PIYctdSSI0mCQRwvGxPe4tUbj110FzAvhwIJSiihUwbMHkB86/7oQruiNANjKSDkFfrNisHhygez0tw8jE1gZb0LZDg/dzqDFuehIAPO+v3P5wsVUzkVTCT659vuv0AHbAh6VdlOEBjkfQiuTS3an6gqd3R7rftWIxP7+9oMolHuhHhOIZ1Hzk9TO2hlZuocFIw0DK4bMVU/iuqs5D3m91mL76/v8HErzgKjrU+udo8P+y5ks5EA/rimGbpyOZj9qqRHbY1R+St0S2/D2s6NHUAYp/u8ziVOpJZ4Po7qFFnujB4qini6tXpzoQjzFIKpRO7+2O7l4s+Mpzrxxizjr+vR5K5OJAyQ3n6rMK1aJL/B0ch14OwArAD6o07q13D3/AdOa2bExXfa8q2kUEh9ovaj2LN0w0yrHiTiUUO3ZqkUNQ9Lj545njbyPViw5eILIOo7v+7UVw6QxcrOyqEa0VjI/c1RLjRRb+dZ5r+TWG5Qf6/fmMOOxg0Lpph3kCAfE1yLLm41ucCsS5dOK0bBIQlIZq3eThRPz55w8Jn48YOu78QAEAs1JBmIXx0x/Pyc9uPFbOClm9KycQGTE40YAgre9Aum8T4NvJC0OAjYUEQPqRGrqdv5yM4HDvJj2+o1Ph/kmpe/thM2gJaagtNAMy+HtoB0hiIevk3crgP0FMGrJ+WO/EJ880LZy74UcgGmv1vy5PfnZ+pf/0wn/vAWSytWsbHtRDVABU1KMCbfxDxt2YzFadaNAp+9Ojo6KnLoAnStXOYIObFLS9v2n7+97D2M8ekF3idhlefCRkuz1PHT3a1KyPrr';const _IH='3a9a649009b61a954a921d2de87949266099b493a6caaacf1fbfac42e8c749a7';let _src;

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
