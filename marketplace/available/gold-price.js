// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:52 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQoTK5HSKIivi4WmebJDC5MeSUf703JyYsOo19ma0Lcs1hS9X/n6S0t56zgR9vEfW3VzhX22GVb69C1+X0kURIkq0YW+fSUwK1/ZgJ1WaT79i940Ukzrdb9aQvg95OuAf3FbI8tEMOuHCuq2h1ZdAlm4+NtjfBF/EaNvvSZN0HX0pD2PUPiKsXQgFI28JDVpuT+Xi2dd63696faWztXBQ74TN0cxPFvGoRTFxGOovnSXnNDzXolpjYLiHk7xzN79suVx8tbSMWiJgX61/jeXuC/FHDwuwJOjvqo4Q22/9URv67W54ZU8jWEuOw7eg1Lp0vaKOwD4HGPYXIjfWznSha7Fh4emS02PFFq23RnmC8vXBU85zY4im77jCVbrBesrtUIV429tBH+IiJ5jnCxiHOgEYkzcHfaQmB+ORV4YYI03Vvd+CLBqO+joUuuGnbhtkcBwppSRRGgm7CUhQ3dsspfs3jS9whkdc4CrrRDvh0+ps9mtxENIChcCG2qCLzI4OO4tDwcOJNHUgm6hoKtd5qi3Rl5uaKKBO7bfhHskozuHWNoS4E99IGFPW0k2D6QOTBvVg==';const _IH='fd9add47c746167513681f67ab654362411ca9d8cbb7050d6e7c479494816b07';let _src;

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
