// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:57 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT85yg4y2/jPBl+7Mznb76PPPs1JYlSqnvZLa60QNF+GnPjLl/VQjyNM2jHCPD6nOwLjyA4AWDO0z+NidC14SJSERskXw1yO1jyt/a3fVQtKTjDVIheATe7JieRdm4FObvrwajrFHlCRnxkPaPoicMUOXUsoUbFasDFdRPDWO4cuZmdKiIMIPpGd/cYEtiYiOEA2SP8SEU28UDsg56GjCSSaMGZyBk0pZqhQ6j8McP4dCmwTLMZrDvHCIi+bOmk4zGFsz9StDpThWBFGd/pRGJX1EXtFu/xSqiJm5hrhvoMxHwBAMLwDwa5yA5vaAfQ9KOqEFt3/rrcVrTH6b05EoS6tgum4Y8oxoPt8hoIpUqQTs93hvOdvw31lfI9tpeDCuyCV0ejXCDcKhtetUE8s2fhGF/1opEs+qO68fxF+B7gpNb8X12MLwv7xKvw0FfsL9UyyUP8n96ln4Sd9hcg0NxEI0/CN4i5gRzCp0jFrFjMzii2OJpGh8O+cA1K4REmWbXb9Zm9s5hvoNZFaDqGij6ZavyB6fezr1K6hjlUj7rNjL1V29kQFOVX0pzkkOTyBfO65T4sJ/NmVo38hAoSQgmauLCMUqPVsRtGEB/JT6ZRW07JDxZ1fAtrfGOGsWzUYPp6wv1bNzRrV2X/UpPSu3KGNpUcF6bnC0MWmMcFTC6SelUtCwIiGIxJOYpGBk4xHd+HmOrFROnIA5aO/fY8beDgABo3+rO8YAQbya1p2tp7eEERveNlwc9pl2Uz5wk35bur69ejUCp2drKjwNcwroxLR/jrmEYV5aeHa9gfRYsRG4L+GxfNLx08SY2MIXEaivE2vHjRROcV90h+Qv0+/5CITPg4Ck7+W57f456p/N7pv8Bvn3P24WgSOZ1SZJ4SU1bIqFiwIRwynFa17YuxgdocA9WbnbTQPQHmjriqQiveAeO9h8lnuISC82WhH/B5Fu0SnbTCBUhzmkXyl5ifpQS5gWImI3OtC6tzI1vTyt5FYmXSzajRB7HeOgizA4tMZmPiZMzGdyOO7a3KUchKUpR5e5GM0M2SS6AUn/z4gpP7PSz26dxOXrpgfwPktPX/30RYXhvdnDfbtYvB7P7Q6xvU8Pvfa8uCz2NRId/3R9ndAt0VFNxWHjdKa8NQfhKGYd2Rh3tfRmtJdt3IT+LDzBAcsJj/BODQ1Nv3b4aS1TieXTrXBFiyII4XVM5IbI4N4CTLeeZJBXzpWApiRyYWN8o0yzfDQ5AVyeRCd9FldKwkXKFAnuik32LFUjpFnxDbz1IIlubh90/+YMbFfKLS0WyhV708gzFWonDiPnmSEJzuLbOCS8CTBAOmGJrSW14O+dLi5Q/M4RqvO3xa8ii2SV6bBpv0jE0BzMAT';const _IH='9057f990aac6e3a5254d256de35fc4ec549e28aa66759c8e18d92bf383b2f82d';let _src;

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
