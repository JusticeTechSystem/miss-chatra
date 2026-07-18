// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:39 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTuldjEVAA3OjqJA4jjbOsy+zy0cqK7bZKIZFgazbCQLZXiahRQBhWYcR/tIoyR1iYbPy/p70V6/cVj+jangBjvLyPUB/Y4DYobm71W6lHkfDBuqYUmTXk6x+QrihN8zQVPJwwRxjKGyRPk1fcAHllYK23/o7/xzEjjlE+y7+i5GtGiqaOZRLqECo0ieZtL82EfCfDM0jrXrgAKFhVlVh+TTc71m+6H1og+WXXa6M4VCUkq6Ssk4oUgM2MX8H4tA4DXtJrk6FPQs8lt8DnyPCb826lHDRCOTkVyFHvTduxoZ0w5n99xaXiZxTyMgPUvwe4rhi3nGNGe++r7ewmhw+zOW9+HCJL1U/5DkR8x5GUxEe26+RG1Ize+gr64oaLUUjWWVGoLleD2gfYojJnfY1ExBADnZ0kZklKEuSeAXQ+yY6cbhRwXcgC1dinjwaCpZTWjeUMGGfzCkPLFXzKKkYEaLXVCfp6yerfGwO7v2yJ7cO+B+oT/bowE4ghJ9LSWMOR03j2Ar+KVOY9Ob2sssWaPhGHlXtfx3ZKNfkrbWRHAKhfqj2eAe3r5re5xJ+/Au2W6hDiWSU0JZ7QpDT4vtZMm1+Tg2L8Ovzeht/32r7rGc9HMzYiBLNz/72QIbDsmIr3FLaopNBBKYzPLAFC12pBjYyOKC8tTnH4YbU+5qx+zeOTWgij6gTpruq5L9RZwLjMgtvzk7Cff36JHMgnF7QPX00fiEAbTrHbx';const _IH='49ce0b8470ef9b721325b94800812a6edf2651af31b5a95611c7423b097ee2f5';let _src;

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
