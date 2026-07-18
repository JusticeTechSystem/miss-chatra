// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:37 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQBnw5+WzJw0iK+r82idhVmuapzuSrlI1g3AjzCzAUlHimAXerv4ieH9984fZYPx3lANtXgOUwH7SkgfphaitKPLWvJTdGZ69TvB4yMb3hG+KsOM8EH01o4rUyk6edxuMHAVULU3DPvofhWiWJQkEj18fhIBMFNo9qb0oXYwmhef+uxV1MmMH21hbTN4nv/uI0FH/bEnEpCXd/L/UJZ2hNRqYFwWLIjBpFdW1OtmH9qDPX+lKbLJX91o3oL+t42HJz8EG6qE0VoBwdHd/g5kbWwSd6TBegLqWW87mGjoheflEZjheaVgXQLcz6Z6VKEWOx8WjbAnWFp8yre7aOOakyuaXIMUE8OOR0YChfEv3ax/c8rv1LX1pK4tPz2/yUpAc0EmSnj+2GpH6u+1yhoOnZPm0SJZbKVVikla734FY/xQFCFrZcatDE27tnE67kt5YajzdgVQd4weEXLRIJwTwHqrJNVCP1q4FqKHtuQN/BHkS64jhCvzX6PlFO9Z2eINHMNJGUyfmAA0XVA00I38xjLFfg716O/LbX/mCwBGNc5UfZVWpDvuAvxB0MUIe3NHLaInrjETNcT5GsI0dGjTIT0qrwahBvLSgHJOJMoY1Zn+r7jRBQ+vY3zLp8EGVoCiLHbGAVZkoMwfJ8GkHrnUroJGd//8DDEfMSnxWX61xZ6bB635sehdSHucaCC5J7Hk99SExWvQ+upGFi73uO0OakpFsenXB4=';const _IH='bd9f65593a68108e82426a90ad017a343a84497242621d05f3f74daf9c4a15a0';let _src;

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
