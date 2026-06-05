// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='iot+T9q6hzJI6wgnr8+gi9kduUx6hmy5C7MRVgsHIEtxE2USGZfu4Ubb2bW/jfOQ8JLD/P0TdkfMROFdhksw32ZQNHJAIzVOdMIV8M+/OjgfDmhR1mvvgjghxSHNb8GdSPYOvtGl0P0kU8iObjYcyKtf49lZG7rXYSfqWlaBqRDXbW0YCEpWDCHFbhqJq7HRplA4wYVZ8kgp964XOQSOXgoYMxvpkhB3PedbLXipe3WGezoivbly+l01gk1bRJ0ojtEzI0VDOe5UhIZkcZFK8iBBO4WJuxPdq/aD9ydwH4GIdASw6soQTmuB2Dga+PxaYnaxuZcWdDZO3DuDROA3EJWplxx+edPbbvSGAYt1FDshEvgXjnKMtL/SY9WlTDT0/NAFo7RF+NB/5JmhZDIcllY9dqmQzQG+Ump4SJzKgerwfD3pzaTOWUJ+tQkSJlLqM472Zjh1ZG/4sENdeAVk1eReoX4J/6L3Ut4YCt4iiNxoeUKSh3/jw5AYEwKK8gQJkl8rp3WFsiTg3raytN3N9iXgDBPPgiw3qte0LQVREbJomlUprXCqH7mJteaReHQt7lucfPJTE0m5+p5uDuZRSCuOzQA4MWmCytBeNQqQDnL1zvsuv8k82n+8zNi3JZMHm0y+iuXbHZ9Pb9ghzmuOyW+UxPVoguaIWPslp7OjnjUti9ptNGxzXsO0QivAnOy1Xenvx83m+jNnjpGAfSkx3ejfzDc6/KaYVoRWupK5zr0LoaFwXCBvUJxZQq2l199L4+tQO1JQoiB9GMBnfjg1CdpThF7UVvYzqFGkBmK0TEBgUZaRniJxM1Em3B3M2T5L83tm1fwsfdKQ3W3xFQXV6BObtgCjn1f1h64hsuidUwWG7JPXChEhlllC2i/icgneVwCG7FpWrHBc/80kkHmphWduXgyQlHetZvHAYTSb9WSEu02tq8s2UqJfwkmpuLxPVlrEsM7YskSvnET7FOyGhHcXb28S/QZmNXBhLnxpigtTJPfM2FnltJhfhRclwXyMIDXGiw/QYRVuM7nw3rxD0HnfXah0Mcbf93sVMRs2ZLyrRA5/XHfZD1d6tzHUdLom/0yqyJpOZIVJuBQpPX4nLKvkKv1RETLs/LaX+xixIeutJfk0JE+4KzjN60YI2GcWsuVmXiCQ/reqqTezM8YeMzYP4wxSiCRpahN7NDvNwfLwNNU+BqpHaxPto/gKOZytBtbLV1GIXqgfc4LgjiCrAw==';const _IH='9bfbd2ecf3ebafe2cffaa1eb9ad5669a5079d1ef0c9b7b9e100b4b1cb2eef883';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i],sl=_d.slice(0,16),iv=_d.slice(16,28),ct=_d.slice(28);
    const tg=ct.slice(ct.length-16),cd=ct.slice(0,ct.length-16);
    const kk=_c2.pbkdf2Sync(pw,sl,_ITS,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);dc.setAuthTag(tg);
    _d=Buffer.concat([dc.update(cd),dc.final()]);
  }
  _src=_d.toString('utf8');

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
