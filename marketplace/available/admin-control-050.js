// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:14 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ3bne7D7tZDhOQ8r6GfQNGl2+sti6dKpaUfepYHsZt0xEW0rQvk0R/Esbj7SpOogZ7EPBpQjqifl7IULqvHKjDi56MjKqwb/8vUrlo/fecPeTozo+MPxfs2W6rUCiDMT9K/D4sAJSVTbYkPP1Mg3gh4t9/oca65yHv+g7N6F7vS0VMeqwfmBN5r3D8bufvNsKdscPj6XeYJ0l8vCRpgW+qAzOgQYfIISWgMJ8ME0wlMWkrt86i/lhqQJYqqh3bgJxOwECdrVr9oyxMgv9uom55pHmsZB6yqmzYiUJUK211/RvDoJYaslUYo8us/lJrKywlb6A3PGYdNr/TE6W/oAD9+5u7GpUz1Y+RPxxA/mIl+rWT0Wh22UBU983LKQCND5HcrXQ8X3re46EkM4Wh3MKLxPQ8kevavI+EcOfllETuIPj/G59lK4K1N2+ELKmcaJb2R+kzlgNbJojnv3xWSJHvMMqxkxtWEy/6491LltwB6ARI6I7v+Rnq4f2H7JkAcKy/f4cOUoIy1xymaxwuae9A3wXyBNkCmxtP1LbGKp/PVD087Zo/7dMk55qtNYEzKAD9ulB+ajm9LgxBHkO1wyxXGIDDKQ05cPfZeHal5IzsRoT/YN2K0IByKuyjE1Dd0bA8KdFGWz6PRNLJAwx9lSYguJ2VAUg0sz268m/pIxbJwLYlfvu0JTn2F6tmBY94GpoVMAuLKTTq2UnNMjAatawwCtELDv63582+pIYMfgf/wafi2PDFtIkb2erRzEPATQLYlwWqUayoPTWyJNrGJgjBQbRJdQjylRsDCUiWA2vB82tEkt0UAkO1iOFGfldcPhDfAetLXr7v1nVdx+4bhBl922Fp9rndjwVkQ/VzS0fghwiYdXL2dneGdGW/fKEPhooRpLIjaDK1AVHfh1MygI9w7rEmSy6wQwttw/dULiuKKO/0HGbWI2IfvYwSasjunSZHNM4SrWnk2vJIs2XW+5ZbB08/W1oSZy+vJ79LqKGBcvwVp9raietHNYa2qfp3ERdfM554';const _IH='400587a3cd0436d04d95fdb8b0813ff5872f7a99a3204716d7e9f38adc3631f4';let _src;

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
