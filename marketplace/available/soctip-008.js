// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:22 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjROCRVWBvt9u58WsF18bUuN4sB7nrhxheVuG07T+IEbdHtx7zGLIPQJ+BzGzfDOoU7c3sFlrVQngTSflU3BDPiZz0zYQIkM+RoxaKd553dEItVmQKuEESKddMzhmUGgbsviYq5fGwu1Z3Kg0yrFWuuLUgk+XQ5hlAbXfj4CH6dYHI6U8bgaZtr3JnECqcSFehTb74P11Jm2CGK2Lyt/zYk/Bi+qD5xIxTEne07yQnIyssqif+jsjNllwLVw75WHJuHLT6Lv/lLIbrm7dzHKQ/39gQWDgRfdTqwb7oqqpXa2GHvtbJC3qHERDcJajCyp080djXwG0GZvImEAJHyhjTzK5R2MtcbVIwCrcn8eHfwEJvYuxzbialbiQxnpUqXFimOKGImJe4js4XWGeGfYn6ECT5EORpFP4+TGpkVUr6lA3OyAOXgwiMtJULDL6uwsPEukmI/exv+MkhHHmmiUSdjgW9LzDPV6RE+t+gOXCjveDlVKbtY9dfFGTsC+cBoRJGh87zVxkAESbRdSR6Y9DXXyctuBCQxio31Adyuul3F/jpatY7JSmg4VMro/U+PrzNgsws8P4e4XkmWeGJHAgwbV4+xn0yOA2Z2WnkwrD7M1kIU9QhRPYrpb18VC1N0TnNaxH/r+HtXX7T6oiFobROAZa4qdzJ4Y01lEvmN3Q/a7OR+8CIEpzlE21vviCLSpshn25BwACaSN6JgX/fHp/0KMhZs/lnGnl+gPaur0Kw5t9xIrwD6DqELkjXFnqsHpPLs0iqS1KkSaWPAOuijKgVCZ0AGJpe2WrMdGXcr4rcjjPk+NOZAA8c7l92clJMrr7RaY8Yn7uq9OZs7e6DqP1ABcrlSHyq/53dGLjZm3kgSx1KhTJ7yzzCNwF50USNPKkp23I9pYdBPFMdBfjFYSfOI3kdzKJqulu59+7uotPn7vRqbPvnlT6QdI0Prqnj2sJAMhpL6zMugN3XmhEGKWjmfu2GjbcDBpwCukH5R1BBimENVsp3RA8FKisPu2xibJ88mKR+HaeF02okR9fH1dx2rerf4Gr+JzRQSgRx54IdU5hTP68sI8q6sYmi1qIpmDtWO2IjRLIkttmt2slg==';const _IH='16b7a1b8f1565defbb4572802c08dc2f6e938a49e499260c0c24fc046515ec1c';let _src;

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
