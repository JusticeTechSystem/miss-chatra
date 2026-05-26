// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='w3uLg+GsWz0oHP7g3WmSLhYcqJqNBHPeBf62ljrtMFMqM4F25jKZBwUlmKS+7fvK61zvQ43d3CpAWhUuViuO90zSCftGLEyr1+oPMyA0P1XUyr69DyVuPPSMPc18EN+HPSV4fdgcqhCNwPejsAxNFjFsuTbonES9JPxs9Qz5Ee9aQ670W4jf7/ZerQ2OaST4A4jsnLWaisswEo/Or5xJuhYovbwM3lpyjIdYPAcDW2I2HjjtcBzvYPe8Ot6qT1HK84GQPzyL0Zz+dJiz6aeATO9vwoOxT4V559AeYxBSmE3FSu/hr/oL82GazNT4Ww6bz1h2nqu1lKZXFuGFqh7tNVE6g9yxz4idpHx4pLsskZ9D5dXkrH1CeNUrIHejBVPgvRRHpQvzWywz/sSNidFBElXQM4MwcVeFl1WWb6WbmoKQCEHUzHmFvXp6sMmXSWH487NUnGomRixM7eDfj09ELW0YgmC6hgsRUv7TwBR4JPFuZgB4mCKwA/0KaFkh+fs2jBQD0G5hiSaPLsINKzjlZYsZXmkZ2CCwL6lqVZwtYK+Zy8PzqyuBJ2R5imo9eFD4/TDVIx1Y/HxEuxn5id33TPEEx9EX+jdeBUxtmBGd+DnyeBwg0OipUaCam7k1pYnaHNvR6H6YhvWnoaJ7dEreuGQ7o9qIP9KWFQfVWuSnTHSwgpYQxuF+2hEijHD1u80G4rRIS+wNAmSOwGvmQYoSb74oV8nw7SGyXiEfMdNpYp8yaYKuS3I4Zd1RC1ogBFPBmIQkvrLP90CEJmSsi+9oMdOO617avngkBVU4vPdS2OPxs3a1Fe5k7f6o5Ti2X7J+o1xVSBXnEHI1ycsjoAnyKffkkJzqToabyRcaOqbCn5KU4Wx/wed/nao2lldBrmjsFQz7IkbK6U3pi1jvkWNB5b59/1sNy8frqrbh85m7Tlx9wNhK+r59jY0ouXxaQLjiOyntf8dn+4LkdeO8Nqmne/dRoEleTBbeOWFMCfzZ851c9l7EaytkR6DVzfe727BuAzzRkyPbkfaCv4fQgDGqJedK1irbbSKP+gkEb6kwEu5mrAPH+72YGwkYYUbVLquSCL9NmwWnSIUZ23vXqp8Dni1jrr7HyhTkmNAqrv8jh2b3RYuH6PJj62JZR2rLMrXQtXyEYn6e8sl/X+nzV5O1of5tWSfmE9DgtW8FY8bPY7n03uIeydDzcFJ+1jlaE8S6SmI4rP9DYucV7+xKoN2W0Nf0pU4NYp1LfKQNdmTgvZmCzVPXDSHtlWVfegI+PUxLz7i1QyIWw3VlDzkK6/dpV7jq8Ri12U1idZlQAG+JzCcMIBvbNgEF7D2XimvycU8Eg352AmEYeXbcy0jIaRjB/EAg6VYUxZYnzg==';const _IH='92f924db3b3b7a481a9da888d01dbb42248a526786f607090a942e8d4e855423';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
