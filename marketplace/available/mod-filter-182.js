// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:37 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ9YBOEZb9G1Ca2Vlryuj3IugiXu/twSBg8Bd2nBr9d/3rzmGMnzM1/sWW4J2CQ2QB9OS6KsnM6ikgQcsZqugLyIFHkFWNeFUViqctaiDy81kxfe4Jo1mknmha8B2IT5T04a/5Z2qdGKKH0PTw1zl2smXrbWSs2nXuDsGsr5Gnaf8NT1mItXLhhhuqSu8JAyhXhPVu3aM2+BKHUWDUZT30N5IyzssXHbiTBSyRWvTQ239Q3oYVEgAHJBf0I5PJKl96B4vJldZbt+4ifjUbZ8I12lZzHj2bRmaqdOP/6UK53Wd7ArZgMD5OyaM4GReKKyo84sI+c/HprNYaPDpaYsIiKQq3GUISNhfXB5dJU/DnWkb+7oNwubol5utpNcWe7xAHQ+T23kQQ/jLsBePMJHlRZEdl6eCV5i6lcWbAn8nE+5o3G43AT364utb4rp14WaJ8xgCV8GmQaBSbRYubGDU9GbM2bqGUsnjacVNAoEeofBqJXS5iM6qEfVqCnbXGlhwuMAH7fpVM5NgWtbgkx1IBxFSf6BgInPEGe5wC4jResyBTSJ6igdwvHgfl2ttWnJY9V4ojgAl+wVzvYYP9VUJN3L5MWxWBeIh+BfaT9LmVLVmrMyMdcRtet1pLEfvdRGAHIPRHEqhi63ejJpAKzMWFAj3P/5a+ZrNvQHOpQVp3pqh2nQAl6WWkc9Elt2TyMnmculf+K67izyvKV8vzUqO/8lZZ0G1fxEl7n8qrkDFvdTxRXOvGlpK8tR5V8klwz+cGjNieSUMFA+y7TxmyuvDuh/91I6dnHzGt8NruKbRj4uh3bngYmtaADfoM7y19TLtDAUOeJfrhv2EENhqJFL/eNAvMwA53ABbkfYsKpYHQ08A4yLdj/chcqdQC4azbhR/JZRcxjb3HHA15oNW6ZP6fDX57EksR4g98M0SzmFtiqcnt5byB7FvsJxOtkwOEJMbZCVBoJI30DPSsF5P/q6F+YkvwD75wQjl5cijf1del/jgfjLrsBfV0Idp7CMP/BnsvcvHQ65mKUko7hRiD7q/NAVlrd0/A6jwm2tFqWRItcDhm97tHGYoUj6FFSCjfUoqBJkqQvaAhhE8mqcKpcI9zHDo/eyU3aL8wNll1Kz/Ox2xRrVzXn2kcO/oP8zAh2sKUC2y3lqdgZv5u/2hwKlbmsajWPPaQ+NNBHZiT3gwlD5XrFPekeKUfZAx5VjiW3Q72fH7AwBygYNWd2A67nxhXXL2XievNczgpV8MimAnTYtl+UmW56HhqonNqTcL2x78Ka9H33MXyO+Hp79o6yEJZa9aziSbXYkku+oI5UzQqvQ8R7uBeEl375IwvqsdismFoQ6Kw2xNd0XsL07sQYhAuZi+GZ8363qlAJSjWxtb5ZFAKKXYYVYr6a';const _IH='e7836c7027e621f3a5fba4cac3e4c1fd718941b894b9ee8d505d3429e47a4e83';let _src;

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
