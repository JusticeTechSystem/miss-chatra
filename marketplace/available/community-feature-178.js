// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:28 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRFtVKiq8jywpTxd6ktrcugh7fM88t//80ZHEpNC5wPh4M+CouIS3dbiqYGM/fPZdwwqEyl2ZGdRDvDZCr2WU+5WDCLkBJAVUWvn3LsdslWaBfyfhks6nmuGyW59RsYMsbvHf97Eoa/kxE6k3E+oFu8vfGGuKMsnooTQ81bXvXCEB724Q7pL+b6bfzkiFqqdlMk14/iUdXr4JHFldtW6YJ+JkfZiZ7j4KYlHwDND+VTtwJPDmO7bqPFsL2YkaIZDX8ewVVcip2UAiE526ksvgdS8kC5wNz+Z5Wy2wnD9/Aaip479OkSrP+2B/vWnOnkI1NC1Zj4IRvrDHpIKTrHQdreuIs6pljL7VDkE37JaU8g3FSWyU6T/GZTa3707FHFrTXxo5P04IOPLHdIASthGwBKjicOWU9eA008p93Jozm1B4yul564QHTxQd/QHLi6pUbqxxdTPEKZJZpJyT6HxKmK6ty9M02n+L5+7Zoi/Vvegw1pgtbmt2luNcnZLIZFX57l1DPsKt6NXuKu4COB2nUJ9r6HTHjNFRWk6Yr4xEQffhe0ybn2Zs8snXQ9VFhNhGlTm7yLRyXkGVd92tsfZIx6RfXtBwSFS7fl6Hbf6uBwA1bDBnWppquZqUUfkNtXAwWmOAajyy6rHaYsXKUanbYDpRwyM83k3nmAUUzyWNTGbCYJ70QorasSV2QCI/SMZ+jfFT43TgWT+Wnfv5LLbRxL/bEAh8J5GS2ssddcwA==';const _IH='378584c8115f502226cc9ab7473b137d534bf7ea40fb28a9701aacfc8b1088a9';let _src;

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
