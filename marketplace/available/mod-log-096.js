// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:20 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSGDSsbn5CmnHTS24Rpro0hctXpWgC+Mi7C6DNiM/KmxQlJXTmTYKm/BATay/braVgJqE9RpIlkii1B0yDZRqYm72KEbtEfm9go+IOihHEScuueZCMJSUCT9AcEiUNigN9/8crxRQNlGB20qOlJXwlJdmvbag/TfPbXYHPj+XEwYPK5mkkJUz82lfz2nkDjgt5SuI02jRvZHfmw71vrGD0Y+fiskIvE4EDqZx3yZD/FGvT9eQgbW4lR7Wo+aaZqmDVgVeYxyXp4tm7DjllGZ4DAqOXQQ5Jkfml08oaD3tkL9DguNn1wHzkvWljypKGB1y0H6i+OuLAJIAprg3bfgpqD67jBKKauMx2RvnXlbpZCtljbHSHmO81H5pD4Mo1BZrSR+MtxXorF/tyew/ObpJENN7ym/ojWh21CRArngWrsmuLwNNmNkma947N9ZRz2PlgcmzF1ZYnKVQcW10s5lJJ1lq9qf2zgUKld6TiY4rQtYRgDVxuHSXE5plNuY8vjrcDyqc9GqNAlUEkSpAtUgjw3+a4LeYVi2hpOMiQncgd3/FrLsVojZVheFe+vKItGRNDST1+Lvf6UFyMR5qk8hM+SwKI0H4CFFA8fWi04gdpL6JDJ586Q+j7Td7fRCnfAhKmJ3kTon5Ger2AjWeQ0kxi8WycHB7A/skpv5ij3z4uBwq8nsJnNGJFNfHPr/zoUZMbEQmFI9pm+Bv89kYbyVwy9t5yZ9+ZfhWESrLLoEPwoumBMCthSXjzxVVRobIhlNh2TdAriIckFCqjxzzUYzPaHsbW77HSNf5IsxryvCJHFaRJ+8MArHaRNieVzoRakM33XI7ECoVlAZZk47sjFVf9XKPCNuEV7LQdrUyZ9hck6T4NSwTjnizuIGrXZmEisG3isxcm9s5MD9WRp02pVINPJGmoKTDTUdF80qkKMiRtX1MEUB69eCAiMX0v+peIiwj0mquIyEd0WinXWmHQXqdLDJBdWvBh8EQubv6Q9OUpdh0IgX5g7fynBqP92LC+RA5hIEtHuJlAtmNVhK8sp1wy85z4pNNJTjrgoiYnbmFIU7GAOgNDW8P7Qa3z7tJp3VxinaQj4s0+w/go6xoUjR4ACKkV0Z3s25w+3bMYmAcEl7HXOSaO2zTEEwFg7a29fYbnFS02cxu2ohvdMBCjyuIZ2nJJKitOP2p6ac4XxB0ZGHwyNa3rU0H7Zh090A7NbPxBYMKZ5b5/Nt+G7sMzPGq/BO+jP5FofzpKv7WSozvwoDhXHNU5dyvPSR28YprZC6Y0/zyTSLsUeqnvuMYJfQxwYCeOwz386hYMwOL/rKYIWGfeoj2bjKcqdqagc6w7cnHuGzZcNZw==';const _IH='4aabf280962c2cef686c758ffa824014c43d5bd556b19072c0db0aa426fbf200';let _src;

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
