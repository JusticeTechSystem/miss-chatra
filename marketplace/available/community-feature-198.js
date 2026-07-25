// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:58 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQZa0Tpc5PwcxekF0b1GVZiJz4l/1q1QuSw3N4t3o3x5YIGiUEbG0oQz/4p5ZrEzzUm8LAQt8Rxj/2eD95m1DnHbJD203VRNn2+WY9ZiHl6zSx7Eb74BoPJm0NVxGRw+nLZM4qSmuY6gIelYvHWfxKCzKc9MxdfqN1OHD2rQV0vEStaH5Cz+vWAO0TeBvqWFd+Jq7NIQVVT2VH/Ari/Gc9svvaTAxu36TNrDDO159YpNksrU48O7rw296t1DoYSeyH6mfjvacB5xAUsjvahW6Z2GkEPKgpyXtf3vKaSPc8X8RO1FKjksueZm7UXyq2bJyNHvRzbzkqB73S7BswLFoCLtgCxeb+b+3Zsv9BrZRAKWJ2VNJnAs9WAP9mCq0EOBJPOXDy4OEy8yjJ89WCCuANDsxtvntZMOpaD2c9znYPZoBdAVrCglWllodJLm/Esh+5GNnCitLt1vTn5xxoMKyOC+0LdRrb5ra51QBpuRQkbb0Ba4oMzzCjyVEuDsr0LAKX5iXR3+EI7dwHMv3XNtosOYCkhxLkmy00tXQ9c6DaQ0tycJCqz3BgIKjm0f5ZXRnXgmszp1HksiHwktWcZBylzYXeKyU98t48WtALgmEEnLcFdubpkr/4thrncHj1S00QsqnDPJ9O4LykNWKs7kpkbdYCdCQnqedaG9xYbf1ekKRXcJfBNWCA6nXlFS1BBKY06mnFt7QUhoOt4fcw6rssmbph6t6BzU1L5tzaD0Q==';const _IH='21aee472354e50d7803063637f1de5c64fe7d85e6dd9ccfd8b6a8d0a7c5c5395';let _src;

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
