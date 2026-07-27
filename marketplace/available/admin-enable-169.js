// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:39 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSKa4BA1VxLuJyXsi6TuazC67Np4CdsQyd1wj0uPX6CJ0WXjsV+CnnQi+EPHMh1oDTdf3dqiujEUKrYHC0peXUZ7PYYOIBCasurqaCoaPTuFkUtOpFryzPJrxBt6Iwn15OKy/iOJctCXaEP1O8NVtrytJBMacitY7OcMXQ1m/p8WBjuV/aZ8pb5nAhy2bVcdUR8JQSgKZ7Ep88UVw9LNoQrdT06Z8VOjY4Ho77yA0X54NtxizCGJ3M36Va+89ovqdNyhnUIA3DuZ+laCIV/9ed4KDjmec/e3y/Mdruw42j5ZKJyNz4VunB1DR34EteVBE+ZxbU4P8t4oQ7TufY4C9H4Tt4L+fpXv0oQ3JVfZH21eB3lA5IWYUQbGjbLydRivRN97GJ7dilCozW+6xPJfJuGutCOWC8a0jd9Us18HfUUmyd61ZmWIrs9xBYr+7fBzPeg+Ag6U3GcmzYPUfmsZQs54sSj+dhe5oZ0aFDdnozJcAU7/XDzGMJksLVg9hRQUg/QIynzueC3O7ZbeUx1J0UfVQiuM3QKVfONzPoz04SxiO//D9A9XsDNw8hTmLKS4K8b9KkBYOPDDi42o34ue1ImGqYeqKPVaJ5GJG+qB0q9BhE6DuzrJwTzKTy1/tdEbhlWK7j1h9rrQAF7sE+8IVFxsiztHyPLv++GrlT5wvfURTZM/6K0wR+O1g92jBItG77vpA3owGpp6s1EN6Fr7yx/XvHg1gHd9O1XqbKv7tNJy5qlQbnTqhwQkIEgFuBQa9Ju8whBmVhpIUu+CsATSJ9pmLokiSxa/zzhchIbkvuIkK2IVLdZgqtguJxwhvlQ/Z0Tgj99nhrxOoLIYyRhYZ7A2bVaHYy5D0cYwuJ8wdRMlBu8MBSSGdiuLd0lVQjV+JSZRkarf/JkG/wCpZUgOqr+BQiZWaPrm/cW6ne2QlCAe7eqHFLEAzPBqQvq6krC87ZN3frGc50nVGUZmsA14RpnDGBPswebsWnruYoFgesADkTibgQspkOeqI/KuUHjQ6X0';const _IH='45aace809020a4543e5d635ec1bb04a86f3b51610e52bfb55aea1c22ca8e9951';let _src;

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
