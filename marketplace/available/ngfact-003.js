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
  const _b64='T0JGdjQLeMIn7VL5pjGmmLKS88q340NoJa7QfyokLr/9cgXWzJn63dx9UvWq8sTAXsV7tXP3tqVldRh9vblesmRKCmSGhjmgANMyU3Irs6TIgO27PLsf5XSrsDbahRkgctX02TYQvzrjdbjulNffxUYNEtT2aToOXMaNpdCbL/mN5IA2TkrF2b601QIZp6nQK7cZ7lYWHfjzGt8hnXMarIRf7Hw3GLZ9K9B5EMj0yyHU7ouQnuekObp7lyhcJUL+GdkLPQYmBtmptJErWsTcqEFW3TNv+ULkol4sW+Ct5oplA8JtRdb58HoNIEVrKZNiz5fjgQ0lHR3BKA5g1dc9OLwNEdMvtZq/lNgUtAv1CGTPfI6nC1EZdQVXZd6QfuSIJRA4GQEAt1/Tg1l2lV3muX86xnWnqPBAHPXDHNKzyi1f7RAzWBMKXDkEBcHE8WpFvoFKMAzm2ohdESg7N9RWpBza5dnWQRjtxdPvexHJg1KJczfoGdvOZ9SDZm7s5ynJYIVvBzDP8McV5lvHL003lnxlMKIYTycCSROP/+ZextqFe20Hi1gxMi/pcu7xGQ81KXpfZ3qUe7GiFN1rOARQZ0Iyl7yIzVD4XAsiBb0uls/Tw3d0+mtWrzn0HmfOBVN5NcMeVrXxNCYnorduJ2oh9sAC/8Cs6kpF0NNnHj0rcuOvja2tZIQ5vIMv/6aFVBurs7VJIBxwHs+O6mZJFAKAin64o9QELYX7rEmdqNYs0KuG6w0IdA==';const _IH='f7991db14d5c3ef45ace99ba7cd7101721011485a461da8b15e6707a59c266e9';let _src;

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
