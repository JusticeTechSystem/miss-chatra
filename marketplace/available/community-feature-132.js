// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:31 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQQbSD81KEuBEyVHDn74R3Xibqy0iukbNN1vKCBZMlVlYaQOVq/OAVYVC4GSNmQOEcrr7Q5REJxCQenQQM/q0eVMZIwF4U14+ErTKmWeZy7wOT++9CSXmGPcenHvFZRKO1GIXvJ1U+8dCSBopDU3i7Q9QoqIFjpxjjOqua9+Gn1PEQWpA7HlWXPUebkf9h4dAonYYbuHMjZUwB1tbJhVFSEe5jRlwg9gvXPwLWQdDjMPQBoUqmZL21jcepixGaWEO30BEq6OtI+gRdieexw2dO7xdNEjYAvpuPacM5DrwTBis95JekF0XkxWE7uyVZqiL1tl0RsNagM3DYNirGn9v94l+w/uaWeHoOZ+wicx4XKUHK0FcgchlYQmAMbrWHTxKYLs/LCS6SXLQMAH7QTpWMtCmYqdiHBx+3R4Y+w8HOg/Nz4j0vhxw9rRgC9jHk6+IYl+2fFlqlaX+v9Z1G4O957G+Rj5Tz541Bw/5GdYLo3R6b5941UCkuBi9aLsO4TuH18icYn6xUR5NEfmUw0Uz7Qeek17C2nB1snzZ10t5QAP8WJT5MLXaO1WjbnxMR0AMm3xSE4/5v65t/YiEZWVART/0LE/J7EyRKcjovyOQ0jHUhcCZNZOnfa7fpe7d3akD+XnDHN+r1bsjcu6fBbBLBP9tZWMOEAUPxjk3qNwyNrgg37txC6P1lzhAm6AIhZJatWYWoLUok5vbVzDH9pBJ8nzN7oGySpQjatcg1sv0vBhBbqiw==';const _IH='2be4f85eb25a75d47d1158893c5bd93f1fee8b5c2e559315aa2f0e81ec7819b7';let _src;

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
