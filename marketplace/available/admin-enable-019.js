// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:33 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTjwqnrt865XSrhFqdXZoP1kz4JFeIwWb+URC29DKED3/R4pLUbFfYkmVhO46P6g2vI5lppiceo9mJ0nSsICPBODI2u6oqXIgddTe/N5b4Z3XylMvejd9v83/XSvM/D4CxE4zX248oQXw01nnbQefBTK6WU+lUZl6A7VNugYultyJVLeT29CNvTCOwrE3oo/y4P+TkcGcZP/qf3zzLgTYvFojfVzgLhPf4mWEgihWavLbkldm3qyP9ctIxpHQ7Scc0gSpZL8YizKD5PkMqIVArAe6Wfv/DW2eDgGxIYsBxqwV8BN8rPl4KlZ+HKQmgJws/H4VdWBN6ozhnxiAhZ7LIzA2tYtmcXIkSQavMOt52OYfMsV2RrkEVvA2ViqiNIhzvs5cdRRUZxNv1VRDFjkE+GF7Gnz0/I2SmufFyEhdr5d+b/5umnDudlyZroZT0ETvludqFusx8ATB50/yOe22qTZGQnE1CM0ykEX5aSLfqdO+3QdKxsFHv4pXMe0wRUHla7PdSrNo+9Hr0Dlsgnnd2rrWh2yC97PuLv4J2O16trnwPvi8ir6xGDVwLtIuTji+wCncom41T1/WjHOQ9ToupnKlVTHXl3l32+BwhdCf1A154FNVekW4ehd+d1k3ykGfJ20+qFag009pDCu/bGq6I24ehhwKnUqXXO8zPMpsn8ae6wXux/K3zppkNtmgXGORXCwArLvYUrsbizUAnsojPdqL0aNzuDQPydxgrnUypRDzRIaBjk5uS8K7IpmyNdChjEZBn/Y4xJJH62M06Ot73ekJRFGbn+yF6Gs6LKJ3PY8/mWcVTvCLtU7xAEU+rrqnGFqdi3Al+0NkXkn4VVP1gxQZE8qjF0rYTDsyMkSQ6ovfzhovGznAodPysgmVd8Qmjuq++N6Aix0HOVL2dR/RXq1uJ89gDmO3rwM8Nh9EMy3RSUW7GjxO4oZd++dOzCKiwsWJ53MkyWGe+I1HGGk6XT43eFb66XZftriThncv1841nlbTHAkpWhT0r1';const _IH='96592f846e57abd01848ff3d9594e6fae3deeed3d6454126f500affc16579f9e';let _src;

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
