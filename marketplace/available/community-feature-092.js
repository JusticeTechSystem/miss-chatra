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
  const _b64='T0JGdjRAKBaOljoBCvgxv8JH5ESL1/xFBDCcJE+nWMR1ccW3bGZkXkq75rnpRVSZbRAAAlbHb784nDnwyfMEtinAzSJIBBTfGIms5lf94cO4LjKYw37D46XZjur/rbhS5FzKjiI3xgWyJCSZ5t5WZxd9DzC2hbFmG4vg2tShYijW2g+LDTVQvyyoeFGT/+Inq9vqYbzBcTBT2KHlLyyaJHIP/dGAF/WwnNFUTz4VwhbjuqHN9hK4t09cABjxbzLxpeWdZNCzV3b+M1qSEjpfqddmUZXchg1MoMf5TbBs0EhQxAXolmgIdKC3ZFlju7U2jBpU0JRN1EllmS4EDdzzHYnLOEX3kI+pwWK1XobHQkUMF/Nc0s7oWFEyXoZ+OrMqzlo+abIc3R4mMRaJY/GhckcuYNISl1YPY7GcZZ5xWOrsafZ1dzb7N02mcxGdVYfcT+wNErinu+TZlHFWEcUqkeWVOKA8rObWf2LUvyR/UJz5R9zv6kvArzIvde38XCV0Ke6/fp8iyPnz/6gjqfXGvvn6gwVkNp9O7CvaRupM9J3xURkmCm2uC6Pq1I7ITY5oD8i4tSh0v1qpWIcvVg9VxpBu/RFkTw5nqATnWcXzZPPR9IN3XN8aaufEaWBLdQHXkSp9M44HIWKheslanlWhQn8vETCkJl0kUlK/qWwt3jzwluFQv5VYU3uDzxcmDzkzcCPlqZG4a/aBpI9Lf3EhlFbCK8jJuqz9LQpKo1LW1fGzzRpE';const _IH='c71cd2b67000280e49853155a87a7e9ae059b97456d76bba69615ab39f0a5b42';let _src;

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
