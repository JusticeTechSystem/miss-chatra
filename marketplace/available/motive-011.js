// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:27 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSeyGOkD+U3W2lVL9GSbTQYPku8OkxTK3xAvGe5DHZoMtxfZcGq/TG3yuUUcbdVdTT/A1Hy/YcZOS0BxC7sj4pXh1miMWQko3sUwGEJpZaZxHFKYdUg9UYNKJq+F/bXPg788ypAqgxq00gXAzgkzEbOVK2AnRINMqEv7dbvw9CVB+huDn6+e4JkmC5cenUV40wE+eacKR0K/6Wrahr4hwqk/Kj78wstZrjKgspK6AxJXekBoTL6XwPp0AHE1BWijILxbQYjC05TmyUoKKX+y+unz5oRk9mkhVbcuZXbtr2ywNNElY9VfcLNeLM2acUPD8XG1JXM7MbXfNmq0CI2+DVgw24C/oAvsQzuSPtekDxwCR+JrwOKGq4j124UrNN5K0zKxBLOazG7VTE42WvDcTVfXMzXV2dWqJ4NGqYINpa8axJo2XZeGqqdjWYfEGl3I7xHi+jht4PcYn/yaVCJWQZbCJn+NgCqb0kolGNXsNRpK/nQetPiahWEw7HU91xCdRL4H7uz3MYYimumdO3gzfflfOFX7vhEBcctySM2u4e0lO/1W2i4rclQ0I4bh5Ap1Scfxp5pvzIW9MJaQqMq9FNvu7c4/6fSzA7N/Az1FoGWmRuyXqRvwln1q0ZfCChpiZe9m/jArnT86LkqjJX+WzsFyTj3PPDVNR4qpL6JPxFpD+UFKoPc2IoRGIg0sNnpbU6PUE49E4bRsthKOHc+I75mRsUju8pcD9pIFiwgjzLFKNUwK/Pwp3p/auC1kOEj+SVWZh8p4FgVluC/nJ9FJribNhpP3WboUGvdXsaq9KlGch2v+R9WONgSxwZgHAmqxpsF2Mvp56ljXhHzKjkWD+DBSEiN7PNbv+aksZf+jVXhHRrOtEQjS37S2jILWOaUb5QHhRlnIpVkQbctxs9y3oZiNb2Akg4QbO7GLuXSFanNBX2zF6H9vfdI4WkD8/SwGfyzkjyxAWDkbaHvuWm28YGc/IYSX//lCmU1zDpI/S6vsnZFIU28IbIUuzKtVIL9nvrBSldAYgI2RwmHVtv22htt';const _IH='3b8e7d9d34a1e6a7f83efa28351ee5225f8bdae90cf63c4bd3afa2f55711aa7b';let _src;

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
