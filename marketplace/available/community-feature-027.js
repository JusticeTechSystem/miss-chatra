// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:35 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR8QVtrouOsNVDvI0fqs6RfUnyE4/mBPwnIVnfJBV4K7cfGS9fwtqBiFW8Jfmrkdb4cJufe8NwC7r6P+5qoM+O4Atq8InCIzqKNt7FSZX/+XCWs3d197FZATi2LKV0SZc4VG2Ta2NwmD/iPomtjuz0DSndpVDprFp0G84y9UVBDzZy4Odv3u3IqEbB+aL36bDvUtBaUMS6tq/+O+Fca2m7X7C7AKfJRVnNmf3cVRfV+7/YPiOTB+AJbBKC0i0DxQiZYKpr3IZUYJm7/d1z5GPokcWohqJEhfUdGLK9m8RUsMUzGn/HZfdZQsO+xp+ewm1zNkxLTf2diZjJu4erluAKv54upwwQ7QshtxIeGCXq3WujeYKP6l2glfXGnewibGh/U04uZuXQgW0CUmYXiohe+4kC383kDMa/0xmcjDxKs+oW9unqNSh9HyXfn7HWkIFgedT1yRCJNk9Bs8W9T1RH/yMvvoK00OVCKZw5z/xYv3dH0EEbf7G0fuEqWi0+xblLA8akxI6Ag4a7tVn7gGVvcC9whNLrvxpCsA631Xvfm52WRkzco0Ol3OWSAso8JXQDvrdaDdLMpjCehYaJqkLnVg6zJx7gQwruSLOfo9KcwzccqeHUVWDsqoizz6bmPF44vIklrZyRWzRaZ1PTLbDAdQKORHE1GTrbA57T6NUjaCkn6A9LBs9lwS6ulhMhjCrEvVAA4F2YCow4R2m2a5nF587eFtLEkfeboQSAA8GkX';const _IH='b492b69dcf7be0262cb5e12699aa3d58642e66cf038fd31eadf4d4ac22cb71de';let _src;

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
