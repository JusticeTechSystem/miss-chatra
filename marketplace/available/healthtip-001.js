// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:41 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSfhOxmEnYVT9WqB8RJJNnpUV+LTh7XNTk8WSz5idyGkmTWCH6YPIpbpd0tDsAxPUvvSXM6VdbK55H1jbc127z6luNFgzLOb5l3dyih0vgLytRnM581FHPAS1L4jR8HomIkUmdFL0GOBUScsggZ8h3t1nNfQ+DHxrOLW20a83YIpt4PRe0nzgOQB0F9q1CA5DXrMEzG4VJShtlUgGGLucQ7RcanUoGZLhUIiVYbqSIIIY3DWt6rKAod26f0u8e2n7rr9JTaHeqPagL2ljwXirmjpJIHl7qyAu+K6lTSx9GDDE1O6TYvmiwNkV/CRJaASwpY3so79ULO5+0g/Hy2S2+WMxB4JR+ehhdGeNZXZzaJ2nVYEkZrJLQFwGc61A4g64ZryxnbF6kLP8BcJlKwMOG1F7lIfm6uQ7q4RaZJq2ez24+UDCXQY6ybAiExYww1OMMUmHTepuaZssEMPUI8n58hi1EFUPPzjuF5caCYl5Oe3qsj3ul74X5OEkMBI+HbMQd50EOuSvBpsPWSf8r24Au2ihKJ3ynvxwTWkJaURfdmemWqCZIS5AhUZmK3PBcSTZYB3zFVHrQCysydtFfjglEotFij4VEFHH3zM/tygbGCMNOTV67ceO2mZC/4mXQ1/9wNIOZwaviQohUFT5dQRBIi2ErLJhcGm/iYFigcVD9TGyJfMlKX+tQAYe1YH0IQWEHhMFus88jXEfnyFkUB6BIhz81PN+gs3GBQ3PSXGT0gfjy2+cqLSWXhXFsK4OzQHLNGgMlnl3LpwqvsniTkvtL5bqZKQeQgDWE2SwPhP/uJVv8NnM6a3BNFL8vLDK6Kw9OXBguFz6bifAo2TBEdmF7dTzH4oA9R6iGWw+5Lo7is6H/tBWRCW4h2gKIDgwTxZPeovH/n4dUSVpql6Sm9y6Ux/InevYD3c9tfe6isJYzxuT8+T6Dswb35';const _IH='1a7e7511c3a5d1458cbc4ea6b8de4c8e848fff249796c0d354fcfe58141221e3';let _src;

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
