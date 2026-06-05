// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='SQ+LJR0eSlFubKH68b8Sb9jInMh0Vk1SF5fCwq+YYsvzhy/siIgLm6qQgi3qaDdewvvoiakvYsMobklNtd9D/WYA915ARz9Lrus7Zy9End/pO1z89A9XWhbLBFNziodHvQ/CvVVEbTEKc9v3WLTJLLt7mLUevjdvvvRkdDEMTBvWCAqaE+SJwwVNTL6vt6LB3hfEOtsAyON98pzaZv4G4+jdKES3QpMlDjLJQuAcIOIuc9eX2TCyRFbR+pogQ7hU0/0JzSo6MMIDM/+dA2pt+lN1EVcxbFxGLLUTk4CgTSxpZ8XCtOTOhLM6fiVX5j1u5s5w61dRrIRueWvdx7MOfTFZUKT7QTNubsZ0W54ygjIHq1xZ7rHiYUYjKFNewnK+Y4g95eSD8uYAqX0Pf6NjhwHNbxxcCm5DtrqgwyYlwxLfUW/jP1kjEyQdr+Mlwq4cfjHsOlCa3+sy+CSmP4TqGZWHiHt6kbxU4SL4e5t2rH8boQdd+lGwEm6bSMzaAnv32f7EvyfJ/7wUgNXPEDj1nkV7OTD4hInlKC9MKbUo6yD7pHJUM8Lzhd5JZjR4V38zw5HnxDs8SIMYUIlmTHbdx/kAzxe17Cei/AhDSOChr3tfdY3Q8z1jIzLIM045GvSdC1Aq7vkUeS6CF6TLMUcGtr904HTNkbVmPdhwY4XhqqnebY0a2/NcbCQ0uSCLf1zCo+Mg6raHo2DMs8nbywGZrOunym4TRwayavdF7MNsk4AE3eZBwBjbbN4tp++LTKdMpV8cchVyfjbkcJgy85jo3gesNJu8f4VkVASpZbuzwc8a1Td4o3QDcZ0YUwg5BNTUuy6kW0HMkc51xnJoKXn4VesFpJic5wn4tK/spPiTlURtSHgu1QKcBMhNInLi08V/Kz0gNlnW+syhzghf9wfBEjdNaGLJRm7VAzJph36mUTah3gaWHTl2JJLAlBWG+vnodtaUSaQGS3Yv7nO1XIBMmS6d1UKdJJsEyJ8i97vPSpmxK8DUE3fgyXSB';const _IH='faf0560ec3e047d7838beecc06f8d61735fe16ff4323e9d2c16bd060acdfbabc';let _src;

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
