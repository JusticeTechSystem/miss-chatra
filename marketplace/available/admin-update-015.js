// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='GWy+9Sez2fRwlLSCB3RANMV+X1H8BmCzeOXpgWsw8CHtcRSgX9cvdzHsoZ3aYZNYHk2yE5pMwD7ilLZobcBkWyYkLwtR3z50z3kCLzK7W93gn/o7wGCEQJjjtIVL3UrMuYFQpuTGf2U6ek5IoVXXj5gPcyVS7WxNIc+OW1chHkdb/EdIgV7ytIvYJoX4EVrrdjMdx8gQjZnm65QgY3EVRJDq/s7TqvjV8fTgQx07hJMCuj/SSj8XjjZ//t+Kfe8HFbtzh3QE357Lz7Nr+KyekEQEKIExKMOPjL2TcbNd/tIzBILcgCSaNe3dZVijkBQSUo+blP7n7FrLB+Kg6sUzm8msNpLlFqhpLamZe6G5zHI6dcfbUJtsfFoREuMUP/TQ+sE+HY8w9syMl0WYVZwfxsvQ0uwv7TCevxE7o4qPqzAyyQ6gqc1QHXdKODd2LiOgadsrlVajq7X9OSrrxVFjeVFNBGRY4ZYx0t8bTKqgAP7QtoolUJbLehBZlYsjyFQb3r5+98QVGa7PY6fuGj+asqCPuf3APjrxgqgTh2anURw7sWKHL/m2vbn1CyUvkU+vViozsXP23VlC67nSGPK5iDOVoJd9haPiPr4vlEwcIqso0M0y3n5+mePrNUADCHpUmMf28yhlL9wcWrgQhSaAtV6dGe0LFZbyFk6KwcKuQ1k73aZP5TKSx92IqcOltBHh/wyK/ctYPacxWQ3VO06g8E4jSYgcztf4t/jSOrvjTxOIL86KkvZNILVLdPdEsuLzRBj1S09TKQiTz5S+tGCwafv45DZtoesv3BjnOGZ60g7TaEEwWjnoeqiyhS9s3ZrW8w/aFfF9uideo0m8yhhMBKxax6mSeLfWYJI9pg9iL3QhtT5OFzoNWVdYwW3H58XgjEg/NFyt/+DXlW4kmLXerEfhnYhWgk8WidV/oSl48dIQWZh+ffIMkPxMG3PliKekR+LOHD1nx1VPM0JWOtMt6vSW9SO3oaI1gNT+wQFsBNNJA7FGvsDUj84BGW+6';const _IH='bd314f8f5eee9f986b09601ef96995b2f04bbe319c4d8ce369c130bcb54b40f8';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
