// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:37 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRLBf4vIxiD6S61hERN46A8tN9aryGoA31kV6g8d9YFRvcJN6jJqvpvSKK4ZrubIH14fIqMKifdqYR0RnMI1ipUOXRBv5httLuc3Zi7eIgjsoXIMXFlvpvqCn0ocE1d7BF5XwBskwpuKHnemIaVwiZtXc8odSJooSmdtpBRtSefCY1KqeN7M9vT49zBt6T2sojS0B6/xj4xWE0Dt3YqN6v3kUXn1xkMfRrTzp+I9GqrBYHEumqdGAQ8HiMpBqGRsqk7mqGvVnqH/PEVT6dqq0bfGQSiBLrFdX3XF5EiFaQ8DgK3cjRDqnf7IqvLfqYnIhtknYMnLM5VY2YMNGCMir6MxGDI+67fp7bY+m/wjq4ySFbFroQlVPT3ClpkCXPP0VQYBRYjsgWQtYltMKStq6KyBaeXskrHJfj8j4tjOvj75BSWiy5nkCswtI7CYIQgljTufSk99BvkCNziOsMnGhkvelEvqxuhsxchZ6QA/OoEKt7bRero+8r+3DpIWiF5hqFluE52VG/OPydc8kZpSJ7guobbe5kgYZweRRLwhzBpgeGWIUn+dNY8aHmWHtNKP0GHJdRYoXJIMlICdxI+JncDfx0h4aMbo/czmgcfiKm+IX41AN2RR5I6sz9XCa0WNEte5Xe+1XGpJ6lsw9GwshgyZs0UpaJCoEbKcQXW7/Dan+FmKhYZobEjXcRRijjLYWhTBW4RrNBUQAHt0SdvDUKOKAS1Z4qW2lIqMvk4MdpQDdmdBHe3YeeHDxmTqeFTdiaQJs46ky2Hu6bMba8KPitUnDOANsC4Cjp/07FrlgtbTCmD6CbB6g8EVDbNZPTXf2C8+vMCA6k0AUguMTXF6ERE3hfhUvFwkdHcohEpwLp1u/aL20VNCfOuKcoW7HaDDyfHtA2ql+T2C6xMoOUS8h0wOS967D22QPb8QDO7ht6v/Btjaa699Wl4N/ssEORKbkqGFrke7cCYnKoRXTqmeku7A3MzBRVimN5kI1WyAoglN2aoZ2ZndiXSYnoLHk9IYwug';const _IH='f40d5afbd278315423a8180b4100fe4cb15c121a11effd1f83b37d9ba67445ca';let _src;

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
