// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='pxKWoILOtTJQZvIdSzaw7xcKgHH7B8yil06lmbk26R8c6IPw4uWhtALQfUptPSBl/WmW45TEpIjNDILGWyM2NKBqb2t+uMf39ctVPHOW/s8n3drJ1aatInUz1l8ehIuGoKWGhYFmy9y4uL4ePxxrtmcFUfLZ1E0CAboCXleun0faK/Id7ZldsLKiJ7nRnh1FRogvoGrVb3uA/mHg/9OkCqy1bSnE/+JOKNQZWysskqcgGn5Hm0dGuVGORRhJi/7K3E7JDWzfIp7CNeNIplTb0sb8LwHkSbhK0LAvu8nmoEiOEbf5PsVGpJ7a5X/WI8gmU/D84zwPhJftWjG3JEcCHmf8oc/+ZSqRwzWkL24kS1HZE2Y6K//jPdgqnHFcXpEwpu8u7VOG8JE+32OVYwD/Zq4TozMIdKz4atsXLu8QBk6z9l18s81KLMgtcPR9gt9ERAPHKW6T5Qe/l/4I6tNBtdoVyYukl3DcRst+BW2dMeMZhk6GGomWCvgflr38EjJMongfpCZC3aQPF1TfViZnQJ7wT7yNB98Y58hzj+cuPL9ZCMbGLE/R1CEmtJ5jkFsaXgtdJ5/UBepLy5mVBRf8lbSZx6t+in8npTGGlVlGpxnADONPVIi3fvw+TTNIe7fwUAy5zRG0Xz7Q3X3Qe8QVYREsUswF2blXhpFSWUkB0pcBxD8PMwQI9YhZ6OyPIvsQBbUNQVA3Kh9V5/SXfu+SzVk+5HlnJL1pXLuKiuHwSpBS0AIXIZ+RHysnXlvzL0VEsG4CvotHbGjtrTAORxSGF9gcXfgtSxhVnY50r4zplMT2gC2/WrHGwXjAVtKn2I+LQbnkYxaZfPqKOVtErWPBLZ/GuPzKBOc7wb1rdYfin+MwAafr5u0HMT2VSxmiOV/GyoHqec9l65i0KnWWmJdrN9CbKZZkbGFLqbqiY1At2KFy7uPGKaQCVYVRrzKFXnW8/09UhbpGO9lOvdfT/T3oBjNaa9kjm2PQmIcKDeUjS/EA60f+ugkBLzf57tjJQla4ihgjOK93aCytAVBiWmwagLMMaARo0qUXaS3m3dhzYyucjQGJhWCwXfnyCyJUNv0h6T73ud4JgJi02VXKEkOxxPjzBrtHzJSbua41VZSYnPV1+evsHGJ1xg5/q8hgsQ9Q4mkCratRg4g/2SPLvfK/lUkx+kJgZ4CPsylPyxvkQDUW3IE6+SU9sjLBO6LD5wtJDEASTzxwqq08pizAHGxctaC0qELa59XKh0KK+t/Jz2N5oMn+NBI3xxmllgnlQirVmOjYJhMZZ4vKkOQjsiUcms4qeRpS9S/IQD+ZKqKzxWvPIDkdUr/bABFNFwMTvW1VR+CL3MEk6UbhKTQA9uGq8KMVkSKxJGkTDQ==';const _IH='e320d1addb60110ccc5ae655700a3e0dd0e09b75842322fb0a9084b8e98cb240';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i],sl=_d.slice(0,16),iv=_d.slice(16,28),ct=_d.slice(28);
    const tg=ct.slice(ct.length-16),cd=ct.slice(0,ct.length-16);
    const kk=_c2.pbkdf2Sync(pw,sl,_ITS,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);dc.setAuthTag(tg);
    _d=Buffer.concat([dc.update(cd),dc.final()]);
  }
  _src=_d.toString('utf8');

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
