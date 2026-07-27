// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:14 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSZtq/IGSto5xJe79JtbZAMDa+u4C3umrUy8rUr0XA1imwjGx1YUPXKFLFLUNUxtFgaTETBCWe7nrJJAQ05e4XG/0xCIRFHyW7F1eE5UI3EE/etpM2PWALwmqkv4ZdCqvflzYVJv4plmIPcgvQUTW75cdEpZrXqhmhulZcvyiqizWIKgVgPrJbuIqMo3Xc8X9QqjA6QqUXpmUYdY7oOSTCinTNR1xNss60/1CPvjTihuHF1OEqHr2LV5e4xogy0QccETL1lLc3bOBKtmV6H5MorY+UJ9HqJCFL9MoiNgEVkoLBgeer6ZNB4jQMyp/VASSZorcQzrpfJCvePiLcO6/+vrSfO5SZaL1uUODeLkQs9Ahl8bZqQL3MuFqrpQDtzjEqA8hm8dVTOERXE+KyHxcdBXxnHsavRZM+c8AEshzQUZA0FzA2STkLgOXFxsL1IIZiTTNwy7NXx6jY+59UkxO4pzHuTM4jVW4bk60S3HcgiD4/f3UG8HZFuaizF4h9ZdpeSXpzjPmKy3QynA8Kmdb+gQMjtyZRICBeO21zy/eAedXtyWK0IvHkkxy3K/cvHhtkVLzi/omKWuXTJ9ivaWE6AoACkuhJbScNvpe32eKsoteGJABr70VzakcNZy4AdhRbO8MZ68jKrL0XDT5PaPbf++lIsS5xfqArc7A0tlH3zxeLchUDhWTT98AV0fx2jPqBZgVuWXVsBylAuDiUFTYheK8MOG3RDfIwFxVrXCq1m2XcsgIf+qRfhlt/CFDppVLEQJo8bEiOpbBwbiqEkg678kF4Tla4qvXgINPPYyq3Uherxrk+TJxehnkzbRzwR+97cRZSJGhBSD7MLYIe7/kCpSzQjVaiYc10zvH0bOYYkoKXOmg/sRw4+10PDZrYwf2AaHuYW8x0U25LwovKypTbfixfgMox0S6AXAiKwv7ypLhnyhmt0fUOqNIyjx5ejLpNcgLzW8ZXHqMTULrUVhxtARsUu/ynJ+0Ld1a0zwJPGnYcjAW7LqFva4owFMz7MjXAchknHkj3sRlcD8SWMFpU0+NRu/7EhQMQBaHBxoUVbGoPe2WdBESGS0dmfBbAtQEJBGYpipBrqT2a3MaQwVnzOrb8jeHp7oCoxg8F7v5T5mbpg7Yx+QNTDFEfwIKmfNQs8I3ANkQEybpC7hL+Fiz+Xi/o+Yk0Wao3TqFk30cRCeMXOZvtR1k+gxfSKnqLLUsD77LFQhRhaQesFCPFByvP/tmxKrbhoLzvQ6yiuLT8QGlxwU5n9omJ1E8nwFHrazWTnIvrCDnqACWR0601acXZ6egvifn3IUAE2eakBDQ++B59q73s/lGwLB5tO49wrl3SZUlDnKr8zAqacvyo5aCxbdeAnqVJN8GX0DmHz7DM=';const _IH='8527bc86c5e220db42ece8bbbdad57ab1d5eb096e5f207993de15dad413f6025';let _src;

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
