// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:03 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRlUIbpFUy2g/+tS5fEYFYOf3tIqi/kP5HrAv8XJSjBmfQ32KVvU+zi4P6tn0paLHxUnq5QSjHyXCWXmJG+uGMMNovfn0OVrwx0E6V1zhJu/beAOOlLRu7kfrUyLHFBjEbCkJmWtYMVcp+ML+NOJ7nSeS6bqKf9Sg2UHVR7I666xRk+yriCu9nDDWUgheAr9YHrnbKp/ztw4+9KqPmE9gc3RjlTGOu9brxMRJaMdoDAMjHsENjP7ZoYfEKZQpddqqstuwBpipBzxytwooWMrf9MzeCUUJ70y/9OuwPxnlNlUE0syNKKYFdbjikV9/EZytLuh1ONg1LvvOIiMm1MoB1JYScllDolZxV29QLsjBg7TTme4dwVB5j8Y2dyKdBDll6DNYoYbU6hooVYY/Q9O5WQV7G9R45kH+E87lF0awvymJiBIP2qfBDnQ6eGSaFD19a7Ymhci8Dzd8CNwkD3jm5QoeJV5q4HFoaEJDCF1aSMYqngZ0+JuJr2OJ+O81YgLlSC076zlFP8zsNQOnqBCMcfJYaPYJNYllmyBgQS3Iwx8lS+8+NZblO2wsP+p/NuJPVXBwELjRC7FWX4IonvxLWe4euKadizS/c3t7183OJ6ObL7nohHdCnTA04OlLsRx2PhHdB0rrmorPNh/BFEXrJQa+Oje/3dAW1HCMtjMXe3ussEmB7Qgh7dSlOd6rbCv3owAaQR8btW6b5pbfspBHJwBQ==';const _IH='147ec0085453ae4821fa90ddcddd5a51cc82d3d6a26edc83d3f573f3232fbf30';let _src;

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
