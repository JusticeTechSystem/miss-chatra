// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:28 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT3YPFpfb+l3DrnTrS5fCF+6wVPvf9PHvzQNxtKXZCnkHjygOkAzkDt5dOJcUEmG/GQ9OuMBq+Tvs3BJaX8wEo+DDb+x9HA5VCAvEd/UJE59zAJwt7ZltRFIOFttHZ8Lu08eVQKzFlgMOXIcML/r5JelAK0IUcwg1SL9eedsZg4fuGYWWY3ZWdXqi7pioJzLI0L1IDpUz9L3O1WbR1ZAs7Xe+ZJNonFZImxRQqF1Z4Z/VGf//Ptxv/xv+O2iwwUsMDRBb2YwPnTU24JE831nmWM/zUUDWF4+0MjcGDJ0Q3ZTubujw3RDW4miOM5GYZ6lkNukwr7eVoJ4mjBLi1UF/fhxtOAKbI8evAcLqroN2ey7PBaPldETzqjHod6UQN8572NVkjkH+azGfda7x+6zOcyangBQoxZ9zmPeCudhQPkJM4VnhNZG79/G2Dk/PIGxUuwLWtM4QBap52Y0R+CrwIB7yvobzY3IP949YxV0/xCn/nuzNak2GPf4+VwU/8TLgz5/zaXolr9AoQ+m43UfyXVgFssKs1UXU0i8IA1mptU/Y39jVQ6eUnC7Eq4PhXdsmuISzr+auRBStzp0qkirM5jpr9FJAfIFL97YyNmB4v1DF6huDOK+Nrm3U1ppR0G+5WGiCyCfVXUjIF1DvTgTIomJ1aS3fG5ekMK+X03t7aiY7YOAloXECMMuYzO5qEOiEi8CUiPwQhwoCNbDJDaNlyvOP/5jV65QNUtB4NF03S5XUKUz7058s9tJ7xYiqmqi6bBu6iZlwfVCCw4BVuL5EzpRrwO8DFimgN+U/uO6iy/RRM8GpO3c2r6+R8wtIgLR2eh+SRP+VRzGfc5tXJGgzroacOzSXmYdsjhDXqt+a/Ym8RIxk8H9elqjtiZdygRBi/HDKvujhs0mKaaVfYKu46Qxm1WtBDm+4uwbsKCnbKopqNxYG5MUhkxCE0LUk23wRNdHLjCboOHfi5fF588XAjx+pwcT8KCt0Y=';const _IH='61a595fbdb50f204242e0930e9343b707ed15373ed75bf9703c7438fcc25f5b2';let _src;

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
