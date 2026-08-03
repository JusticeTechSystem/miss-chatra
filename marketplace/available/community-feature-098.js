// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:01 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTOqg79tK4y5OQydE4jMxn7UBz5+pG5s3nhLQmbvCiUJwV9ZlyC4yAN20zpEBcVPDeEL4F+fQAZv8iRd3zm8RksOMaPELu64ZgJyO9YplWoLJ+Tnlpmav0hJ9TxPvUO5+zW7puq9veMC9GQmCpJGvAGq1/O+ImdPU2qqWIZhSQ/r1nDVV4aF5i0dRMc6d88z7+t8owCdxsG7QiNgjNLSqgFxDicYX2rBo7xlyH/aFwa/aMdEQIm+vs9MDN1XzOhGbyfTRq6Zd4BtE2PGMug6a6ov0zDVsg8Jn8gDUslcYdSUiR6O/pg/sGr7ivX8hp8t3nkdK6PwNtqADD9Hf82EFASQc4IIyvP86esQYJrPmFkbqN5+f4WeEC57ZIMAXML8U7CvCvkKxJQtthBLNVcJx8hcsDjUwMKxacFFhqzMt7S2NcInjyZWptMQIQOlI7/c0czyy2/nPNTNtckXv6X5zevpHXzJWpn5JEo7HnukBEuorXolDVPwZDl8piPABcQlaYehXcerMHkrSZ9ywhnC4U71VZ4suQ1r4dvwLgXUTAvA+zt0+Cki5hx03e1DEMtZUoasecyagCsR9M7DzSPfNYM2fcSiWzHd/PUNTsYJMeV/Cb+vkHg0SHL2hYOeXLr+er9mpRWikzQIfx1XzFJF4wcw4djhBn2fq9hF0Co3LDucFmZYp8A2Lxo6ENXIuTVxjKAczdlKOGDjW2e9OEQzRpqcqfgXE8=';const _IH='ea383ec0bc0302c3bbe9eb0aba129a22ab5e2482d59035a8155fc70bd0d9f28c';let _src;

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
