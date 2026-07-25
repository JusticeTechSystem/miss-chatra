// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:17 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSPK/a9DjbSAmZilGukFIG/1RTEJagZ+T+/ZEUNYvwJl7MK8ZMjcuA2EUaAtaFNCLPcBunYkDEMd08nMcu76+QoAo7mCli32EymeeMF7eQzHwLu9KndmsyvdVD35jV0PQo9e0I/6Onu6woeiuGGtRzlW8K23T5nkCOqWLglIq8oTTWrV8OiYqh6o7We5zRZYAw8CaDsHkfBdJrUEcphTFVowD5rZmedRwwrEKKEEABYPfN+hRsdlQZWUB+HbOcEJsbceYLWyAXq4nqDy+02JT5nJx4s/7ET1/jTXwRreuM3lA/QjrhagR4Ae93ZAGhq9imOiHOATqqOsNpNrn719eqdx0oGY5hYZjCr4Cs+6h5WGVgWUagCpP2R/i5RigxxJUHH8DFjtmgpomB0SF6JR1rKc1ABQVKU4gDnSxYjRdXj59sBiIICQwp2hqVdNVTFkJKf9uS4NgLVVbifhGGa8HnVFapLk0PPsz6yDFniS3SYzW/lm/MChDEKGhqCYywWjzjuSt8ogHZ5ZHTTkJaHGsg57xg4RB3cg4bUs4HXK3EivboT3UXA7LXu7Q1D8p9zZTY8dhEnq17ZqcfCrjovkZfi0KZ5NejtL8nptLXjGFloY1a84Sc/43OZvX7EXvBE4CwjZRZ2rFTZS0kt0KVF+PJOFDWmPQoMKTCYZkhyLzLF6pH4hbgz1CsWoKJVUDaah/EZs2Kb4cFV11bwXSl2m0pNUIbTeoY+KBpi1PZTZiBr9zVIJyhjIF/Q26d1xHMIZ8Q7Yp3J6kt5SA/q0eJDf+ykvvWSgFSZmW7jybB9k/oPaKDC/9IQwVqUVlXgEZLVmiSW78x2hZD/TFszXS25swZfeHtMvhbk9tbLb1v+1cY2xzU6TGxKS7msCDfQ5S0PsMqle1Z2S6IuD7KTrgbZ9pXjZaLTvl0hYe2lypSIW4+vPH0SuOMMfcpom1eqZ7jV9UglM0Bwe5MNRd4GsZs4F8QFP0ZGYhWslWiIBD6dkTYoUSj/ygw/+sli6jja/h0hFoBdKiKmWoaQVQqzjwnHaEPNLB6pM9jcTUl7UWqiH2XkciAHON5fG6dCuIl9uspgYtF2l0XwJea02uRCL1JKCXTBeq/YvlHkz7TyIEUUevCrhywya3+eSQQC+KcBQnbPtc1JC8ai+qhR8Cl+G3D5ZPPWsleTxHuCfBz79FxIWpTpl9oMhFQY8Sp1/Y/x0PG0luoqEJuwrGN5agWi4f0TB7G/Z9PgTOqjQalxEu2XrqxyknrilJxswobxjXee5tFVNHan2xXUC9R9+OnCS5MeUUjnTwlQVpwY1DPcI48zj+68DJEdt88O760vHkNQtUGUwtWLowQpOC662spMf2+0eMKVi91+d9XaC+HLNMTI4EbRkBy2BW/4NQOzLYeeXzX7ziTAn5qqz+ON';const _IH='2deb311ab17077be759f16b9fd6f04f1a7114c77b7ad9e042019e430d5fce53c';let _src;

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
