// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:52 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT9jnBCDWiUoVaabU3yr6TyLOk5ROD4ZmA/OmvTsbPX+8zXHZcTVuD56Ies2Opr5q93xqwZRjaxKvENWyBBer419mADTIy11jc1RK9FT6o5Mf3pTKJeeKt9lLxBf+gnSKeeJydZ+VJafws9OC2mbU8z0tugNnVxSdfDzKQN5r8xbOdzXoqeXkfZVvTFUrbc6h4N3CfRDF+9THykhBoMEgn2leXoFcCGnH1gNV0PBR6QQ2nCbg8NefOXQaNCEVO7ekjmzg9Na8X8rxalwtUQtFH2SV/2ChMPqXNd5a28dGOv6KC/HD2QpxPZE6r4qfqEu0FvNGYqOVEtmO4V8VkSj88uhnw8Gq1llwVivKA8g5q+4yzLnKIgxx7Rr+cvq1fWRkIRbcZYnuPRMMh5sJ3TkSofZjaS6JgS9GW/dZQnMP6cidlDcwjMRKQcGC7e6uKPQ27BbM2LzB4UDDV7k0vlA1RUuBQEjvlZkmsvPcaj6ZMBtTKHmO8FoXwQ24hlCbRi/xvByIY+prbnrVIK2fYu1DuiONrLJ0IFYdVHr08ChFUKTq17+1g1BWfB345OoORhxpyG/8QYq/p5tfAWY+zQ2fIZyjnesrDjzWvQzjhTDppaR+oOTqZ7LY1l9WiuBTXpNHIgbWY6xGpPr6oP67C0AhAA/kMn6KO7hATG4gGa/TvTzDYPR1+fDByb3do/WpLsD97biMGn/bT2v+YLL4T2iew3tZSZvE9GTg59zCNeAIlZlSdJNfNou+hBnbn6YFdW6oz9NNrhr7OATRHUXHTzveCHp7Luw9DvO42ohJ7TOD/Tq9b7WjL9ICLgaO5LTOHC2HOci9f/huLw5w1tiBgEbcxe/3eZQKiB4hLu7nPLSiOhFPTPxvfqc3y9HBTfmEWUOSueUikJSgu/jmvZKairawri03Z2W2vKKlOjWvCARU8hIHZIKfm0qDu/NVdYzXkYaMih537MXEz2cxknrD7SUWMvs5A4zk/yev5LSw4jXop2LqdM/n8mevVCiF/pKxos5uHvXQ4xwVgzog/SR/va3o4p+Q6jMQ+FeN6m03tuGYL5aeAQlbQiTa39n609BHIQpz7fvlVSgv4Q1Nrjkt0MlcyVNAQjbVSquj1FwM6ACokzqX1ps69kJi7C2nJt17kqHpFYBsahZYA4iwTl896lhyiVFaghLt5TZhpzV7Q8gpHMP6GIn3IdIFgpB/Wb08Yvw7LW9OARS+n7LnhBiDc=';const _IH='b4653a004a62c47b0a13aa3b4c2e28f22e78e6ae7683943886fbf965348ef84a';let _src;

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
