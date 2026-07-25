// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:59 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQUxMj+yglXnwz0oYylKH6SPDXvxlf8nmAE3WdgtLJ+nUJb3yrDmNoZAjW27XijcgmFTWY+Xe1GXY0jWL4yQshSrEN5ZNCzVIMal/+2CYymg4Tm6mpIESHLA9tqpYxcBY1ZKJuxk7l0xkZxIrjPGnPAwk4V24yTE6M2R+aQ3XUpjxoYCDzSTTGfy8RHxYaMa8sgNlX4tiOJQn8P5X9J1IPpeivE38LlJrwMaFdCBxJ0zUXmeDzD8HwWRmHJWZ7lcNKKWcbkSKgN5AUEln7UGAwxHNe0K9/iwHG8cyuCmY/l8eI9LHox/Of/4qMmRb05cb1R7cCXs+x3PirELSvWHIoAb+sH/GxafOh8QIbKdg98vMOf4HdhvLYZ+7n4q0xynI5iIWCrhFBYXODDBKzXg44Li6XFHOxVtoOVcmqII5Jy+WtWS1lUnAsTUljz6Yv5xcWjS11CyuRDFV04YdCJ08C2//xw+tDYG8CE4Kl+nKlXkpbfTF5sydmrFPx9UzsFihUtJk4DLREtbYYn49yjJzCxybjjbv4D+xiOFbuYLZq6Y3aKJzLUaiANOu/rJwpZAHLJ7gDtsho54WveirHJ1i9rl8amq9pJGg4kIEM/LU6DndE4pV16Ak5PmfCLSBbxb6djc6V1/dsJon8D+6h8fGzp/7vRWeDRLp2SvifIR2ySpdsQDzhRTM08IQ4sNBD2AEoRL70yw+Y7tcEDNoFgj0WVUhYZocPkVyfb+kgxDiZJykwkHQ+X83qNHHQpxYRRup6ANoqkzZkkMX7wEX4Tw1eG1gPSOw6mAyGI0ANKvOgfGgWaiQRq8d08uUnPz+/5e+7sTN0d+P8lAk/12y5ERFSkReYbywryqWrNa8YRV6tNF/PrMxXQSmUGCRDZMnEhhDmNQUBnic6AhkO5dc2YbIr6f6rBLyps39KJG4S6j+kwOTgsS7Pl5W35QpN987fzc/zvVZAWWkwS3obhe+SduTM23sZZEMS+9YSgsDODb59CyNECyoATeJnA3waZhiqQ8mWy8A2sVC+bTbY/+APjUGq6y9Rb54wNBhOIYL/VW776TNYN23HM4QKY/eLU3SCl2J4fu1RghggjalYKBdZUXFnhQNW8pLRTiYRI5t+ecJ0fySm0aGGHe6922tPqTROxtMnWNpLPFk/S1EXh/EUQBgUdnXx7CXDqnSejk1PI3D20TgmUfjrcd0BNyw+eA6NWB3dqs9FCvkVPbkERWoCdjax7TQ64f3iYI8Oy29+C6SxfsOqp/+LhyYqZRtj+OB+m2XrXmJxDIIlbRq7B2bGOjHliCxwZdXJTqV2OgZd8O74HNy3gY+9l59soWBkFMZqTbjml0EKH6/J48YT2';const _IH='4f7d2aca73802264871ed0fe8d9540f67b3672f3166e6a5fd6336b69ad016c19';let _src;

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
