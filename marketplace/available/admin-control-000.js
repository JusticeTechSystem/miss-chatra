// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:41 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTPmGQQABKHxjxAXbspMVX9HI9oDjcbYhFh3pRqE4D3whpNNzEwhR4D0LU4RT55Bwwe7Vw64+A9n3LYhEsxApBhc4aEXPNDHXQEZNSXEUo/6b1KN0UNkTFF6BCbNc+2cYvMONuJpu1VO9yPn4OQDRmZ4kHlFgaAn/NmjiPTODRUUMIRz+vm17/d4ucNdgSVcXVjA5jRhZfkrALZDFhz2R7QJ6wHjgP6fy5nt96IAuYTo2Qxrs+UotamogGHJ5Za/vNj86VKbz0/b7ySVfP02WiQs6XK+QJOYWqxQuB8Puw3/OiplXNRLN8bGzEvx2eg2sNT8UVCvHgrihH86s51akGaJYOKeQIMpr4AqYTGsNTwZT8bthgkeWsSi2IBpiRmoGi0cCQQYn+vG2z4xlquWwwg0NZUCu1DC6X7j3cziWYaH7xDVxtBB8g2doCbVQ0DI+LFmPqdsD0F3DZImM7NfQLcNyY+cEA0mMMqrWVERrAaJKKM57Xr0HhzDkaGsdN37kl/+bs4o/lzRnao4xc8rYzxllMBm6S5qbX3lDyFWPPIMw3NiCOWyH6JXYQzMlFgqofWcNmkRXVVw1RAqar1cE6mXuau7X7FR+WIPC+/W3DSvKgXHOMAEqs5UinBHoSFSpiLXdrV1Y86JQHVdmlkSMjVoEHh3FCHuM3lLTZh116LMkddMxXZASSKgpdDoh7ZsTfxMK77nX04S3wD7fM0qka2gJhQz40Gqwx+Lqex9ySwvg+nxyMDPpoE/HfAh0xjjUosIOafdvlgZ/+c43Wv49sdClAaO8ek+SZkdciZ82EzW4sdAhcjCRfgtTg5xRiv9K8xl0oeAKOPVNRotc8b155Ccz2yr6qILkKdjIKOIPB0KQVpobp572VFDKrliyURFaXvX58avdqxC/DDCNorgmysh7kgAjDSBvBREKLrFZ/3gGbITiWJLtMPN9BuKgttfFq65d9LGwuLUJqL+yXI6CTnxW9Sh9Zx5WCZ4JejnkxYaA/JKxDuxT8VL79YzYNN9OU=';const _IH='c857c0067e2196b2b6b1416053f87127e085c00308cee4a91bd9b28ed1f4603a';let _src;

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
