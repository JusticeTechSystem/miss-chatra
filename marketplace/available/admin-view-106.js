// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:42 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjScd0O7Xpg/ly9Xk0AbAqbIf/qvhgsa1zpegsNVG8EhKdf4cxIID3hrahKMFYIu/UvWjjrTwRKkbUtf1jznZYHugr8x5Jl95jjEWUapuSdX2RwDiB4L1/1aaCeIm9lkJC9RXseG+t8/is09rxh4NRbiUFhK1IaHPgFPyEoTScTaqJMRdVg1Eo6rs7Xvb8oXwAxXxbNsOEngDbGmAc2RiNCMjf1PjmDKN9YavQjW3OUjOkO6251jDIyoFyCSFx8grWf+YExPdkOyax3j8ojpJZ0q0sjhcsd2GF2tJ8kot8qLicOipCalpXF5FnZlLSjFPqd3r4cO6CN5bIJT2mMb9jZwCo21mlcoKCepObAt/SES6f2n+TnH2BU6fkNMycyw8wDoRgT6BgAHcULCuwib2rB/3CdiXIYk9rOJoNPEP4quKLe/SgPCdXLbt6K2Gda/wsT3rXkjGuyTA7XBt+lAPwATAyD4AsWJTGxl303W4zQJOu46TQZuVDO/VsdljLpUkStHXJpHHZ3Q/6yKgHAxnEYVzXFPPyRPJClGnel8icEXiof5j6JT5OPe9JU8AvgLcT2I+TmH8ihnvGmtf742cAx/JolqN3ggxelRjJ6R0Ojowou3gik9pnFqWIUCWPYO+EhqxmvcDGCxSk/IFO/Yw0ah9A16zf0yhZHU+b/4f5JvCcnbqAThJOhULlL7P7cqqsy8jY0MEq0lKIYyfybR/U7d7u2LJsCcmcDYDdaLCv5qAMjJeJQIGlASmN6SMUohxrBuDsyPe3mokvWWFlYksMo/MZ4UNhhcI7c5jZZOzyS2F+BDy2V/Ujrfqok945XNCzUiZYPZQBJyTedeB4w/rgVMGlH0JgDxRXzod7pV7+7gnexGRe+JJK5Mmctbng63S4jzIooJKP8XwuvTvm14FNLGHN13aesj1ArqbmMLSmS0imjsvaj7QNNX6kEK5XNlATYddce0UqicM8cqQpNcL8ckmJ2KCiem4A+2jh3qcEdm0kCT/g==';const _IH='6b99fb40202fea0f6333bea81cb07423d603246443eb1055341ace27bd6d6c48';let _src;

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
