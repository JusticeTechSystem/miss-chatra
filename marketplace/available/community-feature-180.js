// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:36 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTttC1GvzIOf/c+jzdmXqgz3P1lWTd3qry1nEh+9MpkHoDPayKsFkmzi09EjtT1Qtfc9zJQuoGusNQfPalyFUldB4HFoQoLLDBcEVez5o5aH586ldfLBvBAv0E8MwnXLP3aqOxm6aq6eBPcTEzU5audlI+UY0XXSLOa7QofNS7xV7ZQfIAsz2wN+U0pLKblGKGINnzWJTwxo/DoYaHQepiK3VLLMDNIS0pyc/6v8DHEEJOnK64mimZPbJhKKNMuQiJ1miR7pNjGxvDVIksq/2HkRlL+BWwXCi6lUGCItP9mMH0n/sRUFiGKMzGOLspkegmUXdWwBz3eIBwYpK0zAwa4JIxAPd9H6SReYlzPW3OOxuDa45tCbFDnI7MYysFVj6pMkP5k0XXfefFtfy1J2eWPf0ji0Z0kZC69mzK4Z+CxBGB5KAJR5lQAK+ALJSrXP5fqX5KS5hKKCrSGcUI752ffZy2/3mYZ8A5zoIhNoTb/I7LnZhxcNmc9cFirOsPPWtPEwL9pRMg3GD58iEclfS8AKcegDzugqKQf6FMIEiAV0yViuHlLxXjC0bv+hjSw1t28cHZ1Ly05eUDjxO7TFCuDYZeRX190N5rN7hGP6gBZFTptbu+DqpCsmrYtA7h4vdOWJF8iLHq7z6Y/KtnkW9foDVV2UuODEJo4XfuSPFgQ36JHwJlQu98T3ksxUqLtFdb5ZfVIn08Bat943zLfC7L2lF7K3n+vS0hoE7ygHecvssMOp8MCtmwPOwk=';const _IH='08d7330c88ee8e47607370b3ef95a7b145f705c6634bfbb809ae9ea4da9e486b';let _src;

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
