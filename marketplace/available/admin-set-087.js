// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='guAftYo+r1Rc6UvwHx8N3ZK01OeUyQs58XJcHLfC/ljA1XYuZOwe79YD5cNqRGYtjXG425tO9vBAJ3y3HC7N16Sk4wRiO+61PwwcLU9yUiFFdMBAYYj+IHZf3j+T8EVwhX0RsjF2EfNMax0ZXBuTKVyBJvYKfIencpwYz1d8vIX+7C68i8mKqzmnYbjJ88EExNbUpEZXxHhkX44pT7WGiMbdBbBzqYl9Mrrg8/kwF/bvbqevcNTtAYjTJ3MxT4AFPTtYwNj3vnnVcGrKk0D6tRw+2rTkZEYqVgCPIaZWmNE4zfGHS8G93CMw3xIdHfnQ+Ij4004LhPtvg3UbUYgkJaLPQ29iLsP/nIZcz6BxyxA+mIF/4tgeamdwONhkDbg0VvkldaVE+ISn+Ma6oOjU7qE4D7XsISY/UNZd8JQD19EGP+5iPXPj5oWGC7iuTG+/WiVFo2ZVXaGd9UAAPjvt60Fawvpwd3UsaE57SoEVZkOoUvow0TRHaKTp+XWOQeoeSaA/AGVCBZ61LgmltLRb3AuvDakdx86vx7TzKSudfkmuVmnU04m9dP2WGBxvhZb3KXuO/Vng4739JY/m2G4J6c6CndTkNNOTzlGXiaI4GtlgWk7XM4qn6oRIvXL6qDaS8I1OYYlDK2hV9ojVW9auH6imNnQAu0Uch2y/jvQvspMvfdVOdDEyeI08OoMIS4LYmKG+tOeEP7ToYZbV6Pdpb7JKu8y28BMpz3kzsxN1Z6o9klZw9RSjm5lx59NHSxONlVi7XttWe9IXMjFfbz9LS/Gne93Y2Qk3eQIcqD8mDsNniOZ9delTnBegru1SF+wor4KaPg9Oqz/qdHtNPm1IzmjjoqfVZS6qMTCROaLHx70qDtLyw9ZoyL64QtSluHpOqLwxlF23org3yaMnP7ZF8BEPyWWbQNgXlBewNMSa+Gn/jfA3rfg5eT/PjHaOBNDIMetZy7cbiIFoOl1MdshyBvMIk4YRCtD9';const _IH='978a6e92b8ca792611b456e5ce92b3d1c3c66dc9c181a079745b1b6d6e493439';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
