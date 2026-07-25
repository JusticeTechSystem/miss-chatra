// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:23 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ6b7axLDnS9+46nTjlTewBNpiEmr2o1tGf1ycjWfFR0T4znjQcYgtV6m+NxKT+f4toZCCBUYaJtmb3fuyToNeXcWKo1dEH5DQqcGXZCYdmUiW+qmQ0AXDN+opHEheG5JF8dVjrALcsM4IecOoUGGvA02JRdoWgh5vJuvAo62SX5i+9YzMqQmEQJFGg4lGHYpeFoj4PKiS7GwpzK7tgoftyZdZhlldfJnjqDbB8oG/kIrz+6adQ+RGCQBpdJDQeclwGyWZRYLmTl82dlspzO/VRBWbuVUPUPDDjkx3VC7KyNsvBtrOd31DxdploaFDcDOQe4va9kVPzzQwLTRx/LFwabygCty3YiuOzEELrN3brGsxUHp0Q+IVFSFJoVejkdYcg5sjWIx0PZiWlvGYllk/IDv6nWKcY9n56SZqRjwVqu72RyP5GrnZIaePvPywerG0OGZI8TNY5aNwgpx582jGRCtjKIDp1GqhAI2lX6yWlIglsuv9UTB5J5LmvOt66y+9459OEwY0hVMQJEiKEs6gLwGohKYovJZLqzx4vqlLAvEd0VxOFIJAnKQUFR+1Pv0jsRQghrYchPheg3IK6Qy/F0CkUrOTPB2xbL9oZRtrV0tpe5lbKAxm9fOsIZTSFV2VvOOGU7jYCO+n8yZNol3Od3lIFm3Qaaen0cug/yalVP7MuC2XmLUTohTeGxnyLL9uLp4hSwLYtzhRkBBpRXqivZ3Pziso1Zj7sy40qFhbDL/uwokOuNhGvKdR5wJ1WxrxD3tSXU+Ej70sBlyfONa0xED7fGnjayCgtCiCFnslhPOD3Rb6GFsThZ5YS4yVk2UfekzrdHrTDTx7lKTjRH55BKgsF//kj4ruxMJ3myQrcPWUhVSDpx5Zq4hBCJLyYjL1SrpV26xsyEgR8vJTF2ITM+pi5ChSMjBOmS2CUTeujbMlgCZkrub/ZNlHfeFbtrdNc5geCaT2jZYserNefRrvpTU5jB5eTaY7ArkDpScO5Ix7Y2mrQ7Y2MdrrdEBPRh4dv7DaqNA9XMnA0gyfY9CC0ABI+fbIhgMoxlyo9dXvXU3RxkBaatdbN30+Me0iP87cylLMm+MdKT+ORQqCxNWmPCv7BJCZ1DmJqQNi26YOpWbTmy+9LmysecjYId8qektAJwpiyeJhXTKMbpBkrrykfno6UZgWdE4o5jiE/baGvOYw=';const _IH='ffd136f5595ce042ae84ce47cf3aeb657d55f1e7568a4346838d295067f735ac';let _src;

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
