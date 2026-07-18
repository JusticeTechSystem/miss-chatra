// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:09 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQwTn8mytLssOR7Scnvh3OoVF1pdt0v0DH6Aqv7oWNFphy8x9xNoggP88ZlSzoWyI5aYVQqcIlTWcST+dWh87cWMDqAQl2kY3mFDQnH4xOXyMGfqWQB+fdaldjwX3EDnNer1C+A4+5+ZWuiR7JOHguamCZKv1mOWI2rIcNHkxLTlkLTwo8ju5xAW8THLi/wBqFW17RTrsrniM5+9wY8wX62VeIdc4aOYAgrjEi3Iq7Xlq6OOYA7Tf7KrANcTU91afKsS7kEgKWr9tJzrx1/5tNWKFYwE3d7G5+w1v+sv9ev2uQLVPHMh7Km96b+6JgpO54ZfUZ7/fnyrFKkmxdCjKMxNAnTjX09erdUzasNLOJ/MSwvxV90IKxtaWlToZ/e0v3ird4RPbuAI7Iuqlwq089ZIN6yqBvDLmObtLQRk1daWolgSqveMzWhoXuNQni5uJfEAvOhUky6D4tTvMMkAFj3YCsRYRUzOINSrs/hmh/iuTRM2UOqP4W5e06zJQAZp2n9i5zJL9y60xDzmtA66wTjzZImSdFBeyQFlrb4kSIuSOXbP7aBEg84VzCg9xw8kqYU8bw2XN39bTg0jPp8l0XeQJsmut9ZzU6zcqC5ETYiATFBBAhgEkePRLmY0UPl89ESJzcgazjX3OEku79kFnSp4AnYhIaOSWUtI+kHqMetkw5jkHEz7PascZ0SS2lFvq1JZLK+QR/NmUuhEgcSS1KITHGzoCvWpmWEyv5cJtubQp+K1AHO5G3yPZ1clhKt7JFneDIdMaHsy6jk14NKCvQnEQpLxvfsW0P2akluRLTG486P6N9spxt6yslSg00j0OEhRYT3eUn1JHN5mRFPueDY16j5Y1kowLNDe2L3KmKmNsGruvsNtLZf/ORpMqBe+BiRIWiDMmvJaLNlnK/67Fqt+Ql4J4LdJCfQNuwfjdBxsX9AsRbM3VDZxcZeBalO199nR4dcpAYofCLbWjPABVBFF95HrAAiQ+1u7Zm6vlMIISX4gLIt6wrrGYRm4aUN3FZbEwMfjHIMaW82tSfgwYKfjjXfpp6/uqLhLdOEYAxIaAnjuv+8nPcePSE0HhXr0xxOsX+JO/d6rgl36WCocHxyIK2v0DdHie3PS6dFCmAMiOdu0IBQpUy/b9EZDWuJ1/1krDuQmft3UV9IA65Q0ag3jgqwnRcaTqHKiJjVLd5/6gWjlawtB7g3+M0XLSONE8b2FGEasao7HidVbyf6Mfk=';const _IH='e048c38c62739b88455dc36133bb280c11fe4822c08d61ea8d61c533a314c46b';let _src;

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
