// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:17 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ7QwochhhzOVOGf7tGXGzw+DW8K4M+DhCAibXOd4mDTu/0Meoc3Aw6O2wFSBSDtnTZbuPO7dyQeFJ2xUyBCgqnMH0PUhF1m6ZPreBNEFQtVUm5zVfMNTdc9cHuL/8Wu4gW1I9oHrNo8DZ3zG4CI5cmHsu8PMbipKV0RohZ6z/omChVPy1brVGV9s2TKSGXlHFj6ucOiYLnuBzNycC/4QCdMcZ6xCo2tBSfL2dnteCEkaIx3IMMdds80C0cnK/jZM8cpzPliuc6bcQK0OACx3bAKdQcNgxoQACH6nrzUxjnDxA00ghyXX9t68BaZkunYFzTVCE0c0PfcYMwp4zAjgp8J0SZrmabwXDGDAgwCESEh9l/Ftj55a+rsO1b5gTphiqVFwCDQbZgcV4urwDZH7KCbDoalOxBOhptSxQKEJWl21YTkecyrwB1YbbizfLOiUA5uE4KHQLudlNDfepT6kGQkKB8nNUXEBOl6fSDB3bfWYvGnPNx55X67uOe1thdq89TH52miXvzpjS9VWWRw7vjGP2OAVYBZV5zZlmzQclbdFZUmpKRVJouA13SY4GxRjx1JzcmaQsRW7RVUKwC7ukGMjxzhd7t8ZHYalOqsGcgeopEJk+cScGAquHHXMkEUb67JMZsGQCGI19ESsMT4IWI/J7lmVVMG65Sph1/fa1+kKRceCfG34rkpzIFjoqsnA+AoGJfba68Koa3In6YHPjqtHrxwkg0VOrGNPg7XBzkbC0VWdasJXWQ8DVDKof0k+0Ub/HepTnwMZFg0DU8IZKWz23KYB50P8GqpeoOoUYOfq1LTh6FxQ3u2/sCgk4YxyOZdOMzIbMmVUF87KKbWL5Fc5cG4/GZ3t4f/JmvA+Odx3RLOxijVPeVISEbxhL+nS6wVql8B1R/ykavXH2nMx7L4mldJTT9iNKItlvglKmRaRjTrvvD+shCqjIBY94hsPnXc7B4eG4+g+VHmA+WtujOdJHPgAw3FmgI59bveE8Smi5kQYPQg/CCMjc=';const _IH='4f2ec3eb3382f1abf2c67689b4afb7e566cf68ae3f9d459613cc93c9559bad7e';let _src;

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
