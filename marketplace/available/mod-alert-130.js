// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:30 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTqoEHz4PBSr4TwsCsklTxKc0h9m+pDPC3N0/Chi0KQpGm3wZ6/3RD2k0zPcaP4mJOFSCmJKNMGxIPLWbCDIvGiC4GKckN8546gcrO38ZNZakVr+V0pcJZXZLEW+OunJxUY+K0znoijoKyZ0caZ6NFGYRdNU7oY9wLicP+Tx9bq+bEUNGU3K8oQFP4Lei9qo2pZT5/1ONdXE3GocNTcyEqJUO95OJ/vNMv6zIhP+tzHolDh5a4Yh2txFKZKW4PJq0uRA5jnKGoMI2wegT/GSkcMGQBRRpkVoMTnOrY6YffGU+WStdnLzTwEMN04NuUsCmgDPexnfeagsmFNYcaiE4i7v1hH0CxFlCW+3SrkuwxcaWxa+8Ix/Ht6sau1GrcYtARh8VExMbJExwKJuXxToDikAyc3KQZHLqGapY5fz9j0K0ULcTbKPtC92q8nYZyykBSJseM/XhLb5LWax4hQFMnuQyEDErpOhfD3bYhH/lcEn0LkFAsxRCVI2neOytoozxAANL5C3p/+qcKO+b5ihHkp+K1R7bHNjFForc2079kKClfV44nvVuYQ6CEiNtoP2aBdOpGbXKWd9nPdZYRLZZ6d1xMAwEmOW4Gb5ULlioS7PmOyO4gJCkbg7qr7bxBZsUudQub2U2nSbD4RB3aZ9++yI+thFSQAnxahVvEjBF9M1Ca7iXL3UlzaodWWZ4bKpoFew25eGYR16ea+O7d/LjP4V4lCNcN7qKeQLUVYDi/Say3TITKdifQOtQLvjuhxph7oZoStaHerXXmDIYNra5XmR7+v5Gy06MsHxnsZpevyCGVZuYgmzEw2/zYKRE8ydPm3J2XWlAHB4Oqbr5B86DPgro6dvrjryM1+Ufd4brQjsvkCthcaI+i4SO131tto1zCWUm2iWr5xSY5euYzh6peFneMNERxXzjizQ7+TAEaTNAMHzbiB9VUPfy2wx7lDCAYfGx1wMaNGnQtopNnVd5aNh9DNZKM8Dtm89GxHSQvbD6a+bGMcfOK0vjBBDzokjpyfquLLPOccdH4PzVAy9cGwnX7sZ263ZKo6wMEaWkuLEQyAdG/K1N0waccz+/8wzUcTo0yAELMgjkECT2SKmQZV+gMcg9Y54Hg41NPd2f+AqjQ4B+Vqe+NjHG1F4f7V4JTZVYfC+xltvMToMboAFQ/J4/Mw2jf4ncA/PPOsVGph3szeE1F+jjxomNhxQV+Fn72gU5ze9vZBiO3jkLd/sCgbTngslRlr32xgOSkvvOuNbbfMgg37lsKeMQQh6D5Rw6UdX5lnSUIAP5txd+QNZ8XqwIvbGGXI/QOSqaxn5WlHVbTcxo9ywquBQbkX3EoI7ShjMkx0IHPRI5ppoNI8wo3/Hu7I7iYMI1s/BlM=';const _IH='7a60f5ee5379b1f80952efd53b46b0c077dd3c51993bf1fff2d6f3e87b9af246';let _src;

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
