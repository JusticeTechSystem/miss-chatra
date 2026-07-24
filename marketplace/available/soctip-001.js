// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:29 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQqpLj9QpEQ9wa+gBdQFpBADUVBJ9aHYElSESCFKfhewtYN+fzgtdZPLmXQlRpwHRINgunVt1V3NP8AaqTtCNTWlWRURXck7VQSGiaeMevEsZOgB43n6xbgiiLtj++aJETabzZDw2MYuO1BUAt2wORClwaeu/hUgwyDNgyMMB2phQ/9NZSmfpm2LrCp5fbAUfpMJEGKck2fbzCkviMwUPFLO9ilRXTg9Lz0CP+4HXme/WQyFi+BRdko9bgkvrbZLMliFNx04Czj85wrvTxyk0fjJ5Wssl94bYmS0gRUchlu6j7UiGaOCas1MbCxIXnJHBDms6/GTA4uXEn7WvFUBCcjqD9oLQY2UsonN7qeuR6/nrkGvE0dD0SdXP2AB8ZAMnkfx83BkM9m0oC65rtmmdBDwe2XcHy9HfJJUtuOIgHv4rbad0RaYRF1RoiRiNmVayUR0bfRXiNt9jfCOUBdbuTDSZUYaIT5pChbUGwlcu71qtDVYFK981AX41aH7mKFQolvQUb7wlbCOKg2CN/sCyfIt7IVOX3bDzUz0RA6Ogk47joY9tlldXxguLe4F7A7KCK0GEkfHduAgE7kUvbDuGhLKLco9JSBgLP/W4R6a4P6hxzY14t6ovk1ToaWqbjR/eDkAMG18fZztzUikQzV90mkCRbD7rqwnzE2/8MTu0BlyoxuwmlzZcI/HOW/LZ2FeueW3xyLB3eqJRW/vqB/uUfojWpdsy447ykX5D0xR6ehVlrSji+NEnQqsPHnMcXYMiFn5VDMPeStT/isVf3UCRqYy0Dr/QhnVYCBXLx1PL936IFbzyxf5ZpaVYkPfCaBdFzOmfaFTRuRiZqmRUYGRopcJAqDmL+H6b/T88nJ8HtGuReS0Y0Fgt1H2V3UrwxoyYBHA5FW92suGvxS40gTc9nb9dqEPhVf7nVzmKfgDmlGedZJm1UIGHLOs0Mjj6uVW5ktGGMKqvDY9P8dMIDruqwvrYMsZv/65YaVH5r7dII1TUgQicnVA4zfFCywaN8bByrl9NUoOZZW+QZsDcaGPDQ2fKCQNrFGXMXdR17DY3S0Luw/xawYXOMDG6BAZUbThAxEXt2xEvsoAwEZAA==';const _IH='ecaf8101e204263b2dd3ac44582b68f30160272c041eabdefe2562ff6aa22e98';let _src;

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
