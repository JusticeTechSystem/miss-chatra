// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:31 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSscsXWuWfSRcH3sXUV86cSRRq3wdp+hX3AMtWJwByTWDcz1RspXWJ4tMNO8hyy+TnF6PZZhF7BVzF8//RbrkZPWex9R3lcgeBj4xHwfXsyF2zNVbfzHLsvuMh6mJ8XRcLgm99LR8jw+whp7TZ9faCFJwQNXeevMMfbhvORtFsldx0Vn3cglRaReyRMn+QaFkiKGJPvFyXDeeGbIFqWj8eFn/8laHXGgMXf4AaTv3jQg250cr3aK6JSAGA4pGjhJXclaDhOntW+3CmsBi5QeXVhxnKEKV/lKZ9xpdp8xTtGSx5L/b6iYFaD0DsrBmlJfG6oenmTePHBN3FzVgozTiQhBAHqRMTt8aQ/jYwO7lbuPk1GWFnWqy5vHkCwT5Xt8QjZaxvkjrxvg9cUouD8N/+o3EAZR41FJit2vDLP1mzwzIPh7oGyYrYRpPE30/nJfheMC9+FKJbonx48MoHhl7y9/e7ti9FgxsO/7KMm15o/JbFJTJiFwNrzGpJv9Pr9s9/ogSkKbOZ+8AUhACzbDKR3kgZxypHdL7x/zCpYS9bsWPDYdK4F3cLIOh83tNL65DgFZ963loKn5srosEkamrySVQoPg3BUAcY17Qwe4Wwya1XtYcOeG90pcAk8LjZ7B7bxsqGSTuDvyJTzzB2WLM9N5mctBjqgIHyIhvwNoZjkWzsNrlzttwsBqxfKsfj1xHdThbVuPCiYsMHsbdrwjyNc6OvTEDbO2P2ShoDa6EfTsJFd8owvRzQXDhp9lVO4fReji8Lw35X+ZBoynEdabvmBAYTyWnlATmeKGkkau6WakJfgehtyoEGBlIWg2sBoLWOXLPjn3TdKCuLcIieHdRvqfjgySssWEC3k03GwVrY2E0ezR7p7Q/kwbg1116QE7H9D9+36rNxSZarnE6+o2VOXF1Q/EqMO5rK23bBsEBYcH6eA4iCsJTxCbLdElmrXcjmECvenXCs67voEYXkOJGBNOPlfroiI7ecglyVgOSHS8k/+vL+KZQftisQaqEsOzk7WM2cRQ7pItFM6EFaJEpsXAS9DvBrofpBad5mO93b8HFY1fGJ0Cor+ZcIqd8tuBoovWV5+rNnnRZl/bTaVh/XKGnkYjiGOYMOx2bYk4+p/rsWoyJxuKA8PT8Do3M/tp3utuUMhXMP9B435/T7T9KW7UZC6SiUB3NnxG1/GobgwuF+JCKyUkI5WFFlgyXxUajgr06H+Ywgw94l3tDj4mRcllgcyvvdNSII8FLp4Q9Cv83jFc5VPFYETEWyut/1vkngI+XjHDIVwVEmJbuGEBWu/K6LvqYaCXhydIrE6ML+wDJZlW/XgcvgAN9VubGwLno+//bV+I7ADGut3vJ9T8qrLbTcQUzjWAl6+y6w9MDzxUBoamUdHekbP';const _IH='7c51dd620c5f35a8fcf02875cf0fdf9186b97b6a6f2504d6319f34db3e6a0d4c';let _src;

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
