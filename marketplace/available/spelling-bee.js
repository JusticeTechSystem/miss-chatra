// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1iaNx5j/bCvse37PZlnWLcQoBS2WgOOEfiKRs2ycahXFLazYLpJjEHX0/synLrcogK5imvCtMIZG4fAfF7lzhcK5+32I5Yzgbmstwf1EAWybNCkOQqGO5ESm3pPbF49cCia9ndGmqh77LdO/5jyp8ionF3TVc0Qwebo1McCvHUMTJAK21FzR/AInfc7jKnKzn27A8EiKnV4y9MqM/4jOd02/AE3SnifMsBo82BN3N8ra+1Qsk6WRbPZFcmT3JT/dp22RRcL9byLpGpOJGvMhWkRe+o7H1rkQ8GRG6gRIK3nMlI25xTIH1eOa2vc3HM3f/GuKLW1o5NTz8nOj/iaj42ni3siqkedjxtp51BmXlbZ2vnruJ0sjXc+mUdUkYnodfSdW4m2SKRvepDgtzuUdT09StIuJ+0+uI45wEKS87gBScbulwVijwYgkeXdHisr66MwSfGvbqq01J6VQyI4bNktcDjWkYrFEKDE9NCQ22N3lRdM230GZGYxbn2B4TnhF0XndAMS/PZhdkBlNxechj7Y8J6lHbirvSZDRZUL6ZRT5oLaAijt3rnJLPowEOpXQ9fpTw+AnPtadN7m1h/YI5oZhqxQ9cfEFprJ2pkNwM33EfZal6WwS4iE9XPDiW/VPQ1nI+0MNHoMONCvq9PFXJ66Tpr/vOptJeQzLkCz0YoVJvqh/rH/7uu1RD9WaBOzMmgF6CsJy0vzZFvBfmYXFBYn1rAAjrNIGApQQ7aQXOU1o3OpYMZEnCixktttbm7g5jE7jSLAgGk413Ntpqr+H/i0ymAHrQ7v3CKMjdw8AxF7NUQ9t+93sy8HP+buad3sHR7VO3XOMLIz3PLYSwpBCKA/33G6mW1QMwdvHkyilE9drvB8axHmCSM1B6UZMVv4PSx2L1gg9z+gJOawvCFTaUnGjR+kRS1aMXJUDhx2kgO4etV1+Bq7YFvXLgjbGdJ+dBzw8CdmOC33fWi3TXXeA2UFdhurUMxaY2Xd8raK/AW56/IvmILK+myme+9dzEY/3WykugaC9sS1OjJDwSzCu1txoumzsjUR1VxlRGlg7CrbHb9qUEgqWHdilvKeneqbmoFGFMXkEyRLzjuUkIu4R+f4f3Qzi3+VEODqksLenYsZIdxFztHPCKQ2Pc60x/Y2uVe76IopFmuvRLvV6IPIDvtCF6Ehh+OZLFq5WFkzwvy/iTRgVfOtg1BCINAO4oRYrTlejc1Mc39tKUnAbfwri71U97+DUO2GzQ53tSWDYuEF7nYuD3FLofZtAetCEcT+eMVIlzyagB31CMtsD6synqq0+pKfWnNSXVPhB4ZZIqxBAMfxf8+nZfxUI790ljzGx6wAg88oSSXyC5TigX74K1gcQsJ7guj4GSdgByJV7+jH5OILzgjm+5cj9csXh7LWjZziOMf1C4aGY1gzYOxjWj1t3ci2hdxFMDlVhG1FDjgiw8LLFv6a/QBrFlMyX4fQVhYHvs4x1BdKRj9Pn/O7gwnmkkj3nylg3uKJbTSASzxeEfZD4CLwR2LmQ0UHA5viFeRowBXXf3FBRpilC9IE9r6mTkRPnSXHZXaPopDZliEbskB6ETKltvz2q7n62H1c7LDKBiQyuLFQYOT5F3XOlgJooFcpdEA46DaFy6o+XwTriVByocXak604WROuMtVhPJXH+rXMVVnEuhbjy/k3hC+jYfHDQwfeUXlCwArRJj3D4OVEw/e8iDgqZ1nzx4G2qqzavm8+M65BxKaTR8e+fcphmfg9bhRNMA85AjSZQDNGBehRLUB+0eVx3wGIcKSmwG8YEaUkuXMuATARGDeo+ZpL7bmUvno/6MGzkHxc=';const _IH='6b8c48a1a4d654ce22471fc8b6fab75740d29592da536817277d867f2269b131';let _src;

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
