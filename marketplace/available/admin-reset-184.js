// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:44 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSYOlgmLNcyE+iZFHBMzkkOLiuY9nd0U7TuEjFrZl3r6kTIXEr9wGG8Z3aLErlU/wpfKaeAHKfuserYFBT0NRcXemhbpggEYH39FFjqn90Okjk0w8aTXJq8ROTu7NeXMV4g/NvI4LQ/0ITQctP2i7GDtu2USunVvzWyCJ5EgIiL8n7hRmps9Ac5RSX96PEWjoJPEY6QQv3RSpy2SDB+2kksUViAXz94vfdzDfO6Socng8zSgG6zMHE7sSqEOkYILGAZNgLKuc5J3DmJjWpjVeup0b1eW5LbX6Ox3jv1j+bGOSLOcXIl6AJ/ixsF5HGwW9IXZZ+TyliKM5cPcYZcy0MC6ao3ZDIiTyZZWNERRBdDQ9aMOet75KpM3ogE2AqtHG1L3035JF04ThBRlm4+H4YSXWeQp64HElc3H56kV6RbgdO8eVj2oi7eymKjhoftvavvB28lBr3ik/0UTcVnor+/Rmgdims7JBjj6T8U0bXQ/poUVnD4ykRSqPNihBm059aEs4yzXzVIJv/m8+7N6u2OnOJwRlaOCJGDoOyzen3XuRhmMFAhGZNgoMw7kujiP9F3vNcXdwUMzFCaBQMenQeludr1tF7sN+E51i2d/pZLxbXRSzGbuCm9LlBoKat67IE7E4ccNcsYJva/7ZIrutXKGmM6/4Vbr8XlSVG6zaidIUQVKHmfur+oaclVOxDJxKH6Ya8da9nrlSVIyyGxMQWxayAb63tWxMcJMNZpz19rDWEjaQtdwaZeypqAN6fvprxQ+DhlkbaYOcfPuaiQhxA8hxe9llMQleYI9FcmPQ4O4k/Vj64Hxi0R5Lt9um2m8yD73+dpkqR3mxFMdYOkonXHwHypC2RS55pg4whpLNFJkFyHCRm+NBPgbyQ8akCS2rIpJy+TCZKDQdWUQtQe/8B0bqEcYkq+kv+NezqrzwyIuTlMmYagq5LlUskwN3+5Tab3SRnoaEHl4xGyxigNfeges0RD7rQAATWYpPQPTtog3ifWp5dFtTG3Cs4=';const _IH='647bed223271dcade3730acd9198a60026207158c0c949ef3373438f7763ef63';let _src;

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
