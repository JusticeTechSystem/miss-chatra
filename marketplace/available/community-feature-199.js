// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:23 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT03+TjIZCXyJYXZqlHGCCwpIpOw6nL/D2KPhq/oUxpZ8tZCnHkG2hQxWxwGvP5mm0uwMSBIAiKzkzzamV3hWZLLtvL2eY/oSYBKIJFJKRwM2U6K8rieK5cV/9Ocek8KpCINVmp8eIlcCS4+kAFOUkPIdjwx5jxQ3qWkg1ScdZs6x6n1mUp3d6/7YG9aE3kmwyY0nQFFEFtWFdAc52Hb6MwO1+pjn5Pqz2eQA6nCWLYRxSUsd7mkqxvVYltGz+30ZlMVY2K9YjHdbQpcBFRmsKjAxjKj85GiHG7HTQeYkLNtbXF0pBlFl+r48vYLkbC05FK9BjIbZlOPWbpP6Du7oCyzVnKQH0/AbbUFWnEzMisl1FsdMoRylDw6APIRLrTPWkIRnIDRfLB7Qm01LfnZYQvq96C9hXZqXmVEJ0o2uGGwaUlQpurjv04gB7X3JPQVW2DWUfhgLq2TlanjhGd/YFnUbMwdYRPC6UnWwQWWOTOInRHdZNaNAI8fbRePu+H3bkuVzQ7Zm1hyJSqP3J5gs4HIQwVcmAAoZXeEm9LrE402n0TLzYgw0fVTguKmdPEe3nPGuVUYw0EmX/shD+gsBIm89h3reD8BJVnbts6bjWoF8DDPIl09ehj2zPmcY/0ExkAPFf2v04t3iSuaSyhxL+aXshr/2RkKkoOG1lP+H4s8DoHbJY07MmElxWEFSXqbG7xxYeC6c+AHjHSv3X3LGS09CpPXJsakDJrLlvIHSwKYniK';const _IH='4a56308d9c2c9c01eba00e8d794c483a18aa24758d2136b97bfabcf3df3db12e';let _src;

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
