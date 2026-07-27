// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:41 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQwvoaD2zs159FiXndMj+2Te91+VRckAvc4xrzXOOc6Bz0jN+pCQ63IDh6ZtGbjWGHiEV5zCrI54EZHu8Fe4uB5HgUBhw78uYK2k1iT8UcZw2HdJlOMfEnZ+MNmFh00ZOacCWLIMzMlm3EXweMqwWKF655xP8mkDgQk9IMkb1S8Rnkf1jqxtDPmz2DSwaTvgBeuzde1P3zgqBACfQI9xLTlXXa158plhCwIdh4vlP4gnlE+bUI64woNEjfBvvM0mpq4EytjLSV49BWzhQaNumDtEzsLZciM1MvLoJPIvlCgJsf9QqkgbqZuJluW9o47vfpzBq2I0lh6n6RBwttf3HFZ3BWCXqjlvBCBD0ra7cTp83wOsEEQ7+2f4fkxPjhRtfdr4vRuhHG9pKGJ+XhR9JL8yPNbG47uTqwe8VQOb476cwCS1M3tR3vCNKpcpAZ2xqlZibiFx5pqzVJmSbPIo/4C4rq3koV/S2yC9VpbPktVCoNfg8fVY4DiQricZUyv6RiX+dMr6RLLZqmYW7QVCwGso9yCQPmGlfE32FTIVAk2cAF+h3fhM9tg0O0gUjqOFeuBLZUpwVSxES5/T/n8yhUh1b3+2gVROk+qW8kverdjIe7VvdhFX6f6H56q7pbxpbW/r1Y6n2nTIHsPm+5VNWCJymE1mBkp1aF2JlA0nOs/HrTHQqU6Ss0G/ot1p21aEzoCcpKq3mKxnIUpy78G/TfmEY2en0aiHnVnUcI8fX0SG0o/r89qNq6FFoPeJdoo4mrhyLW6I3WB400wnyVeyAuZTERQOB/esCfKR4nOdn49ANoLsS6NW5kTvYRsl9bDKZ2y35eTqGKOPMqSDQN+ogQHhkSfKZmwlI9gILYkeBUxuZAcat/CxAWDlOz9LaMfBi0a9ZHdww0VVDa/hDPM+QdMpFWTseiG4L/KlpqrjIUFP9jU0Im98h4b2pvScqRVvv1JTNtvtQkvsnjK0oRAOMHroT9p9GrgoZabKcaF6sXqfyq6tFsvMy7xQdlnMPbTULxU1KRWk5uFueHGpZp+eYY47yyotwIc1ofbTUJv6yOUS0Wi4FDh4CMWhX79kl1/GoIDZZoqyNNhUGuaz1ldzPEYQfOlctC00rria0MJlXTu/+XShgVenUWem/LFFlBa+FZF949AtYMLJY+cobKzH8EX+nooXvHktgcZMZKSmrafYCPpI+ncOLsPVtEAZZp6Moxpw6M+oKoRFQ==';const _IH='e1a8b1319b56877a1329fdcc307f093c598cdea789725e8dee7a8896282460bf';let _src;

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
