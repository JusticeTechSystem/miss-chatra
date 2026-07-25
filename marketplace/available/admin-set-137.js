// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:14 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTiqx9+t9EmwwfJCp8AP9z2ZnuUqS/z3i8BpHOpxQ7iGQ5P0kGXycECQ1JXd5pQz0flq0dIT5hgCy6l+lJrs76jcW7SRnBZNKPk3/bkVdUFDw2J0q5wssvzVtCCHatHdm3uUUD/h4/yX/rQQJuMGiTL/CaOEsUu8SIxkwmdOf1rWnCtxEYw5c0pICvXMd7ZL4Cxw2OHEO4LqQvf12zjxByqtWGjoPg5JkMZreY7dI/FTZ5tDw9nrKcdXHmraIyP+gYi0U6qLZcFfpkFRpG9cMxkEe6eFU3cwZkDCDvwaXH8c3yw9oOAn7g3ql9CCMvRRf3j6ZrCfQmgW1vZbJ1JfsPK0mprcA0qLXIZwdFFYWTbLSCERBtYJkvnzb1qz+qPXzrLdUw8+fIR6rcbCk2Au4+ctzA8SH71C6vYzsFwgEF7bLuskatjgSlAGzkW9I14xn4vLOtehfrAEHYLglcPXZpgZtS8N3WhMZ7r4MixFm+lsbRAA45I980TZx2RUC2cDFBtDSEwvUHsiUjPWDN03F1wVIDZrBX2IxnE136p6zCGngwaagHv2hYZ5OLgpHVqXtCSEt+TrKP3bSHuHueeA44LJ/pRfseT/E9coZEpFGjRy3pMKVrqOEnV1+HtGQD+MkmjUC4wgg/zD66XZhvvuQs5qd3dAUreVAFZuisBylMU2t+0VCXTyCDpWEH/mFJoKks4bEpg6sO9ovozxhsSjUIyRkZCex7+vjCs1FI88s8eFUHyox5yjxwfa9ixiw/814guQuTxrcmmItkPCauhmgDZMPnlwUyEbyw4Q4wqUXC/TN3gnZSTV7EOk6FwLnsIPRL6XVzNgjTuvBD/qX1gwXoGttWY9ZhzeFc1925cpaGh6Kbcx4Wv4WQ0ff1yeehnbzzJbB7gmpV1qk+BcCys89qt4S0DJUABBwBpWBFcg5/Y8lM9jpRhbax+Z/MDP+LjA9kjRUiogBFvYhi2VzbkFO/O6u8jvybig/7sG4Hy';const _IH='39bc3b20a31d0387706c8dc126185c438fc05fa198e3de45fcdc468342713cf6';let _src;

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
