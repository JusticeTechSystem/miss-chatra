// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:47 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRc6R2ETufeVH7JE1glcaXR/8Rn0HxOcUM3+QQZ4o+6WdPJc/9q0c5P9ffzLDZ4PfKUlr/2OK8ttBGtih3/h3zQDRmsxKbqCUXTJj/LztmU92XkuZVb1l4S+kjQBZWyFtnMDP7SxDMxIFmmsaaO8zO+Qe6gqI0lBfFiFVhDcA06RuCJf6/5XOGizB43WDAGJ8uHdmYsbg1lvNPgTUIppqPMRM22fNOP8ICG/s1t8+cNIFg2ufjCWCvgkyhMJlloobKf0oK9T/4OuXws6alRB0H4e8qT+8ERGa4QgxDzNWgc9y1qsHR3kNizWCNgHXFUHF+znvrfH4SN9gp10ElGQmk55irQnXqymN3DvvChM5NezoXdYZ/vJzs704BBmrG6rx/tGTEjj0Dve/kV7FidbCzu23IzD0HWdQV+tkOlopCIXm0g2+ahkEbUupvB8tWds9CVSSEkPLV4TXTRO10Wkna2ZzxvUmvKgGnC8JLmg91ez83tGIW7Rx5fF/ujEL+WI4wKn8hiCPzmB4xstyeiBvhyoz+RKc/nNGdtu7PhXKyBQkVUKTsMBtoGwSfShpjmvnF34oriDa3bSbbG01AdrN999XHYyGy4KGVIkLJ23qCQHhtn08cahB23w+1W+Nv8Ra6H4Ty0V5eqW2tCMCJxTrNxi62D9w5IdQ33XdXMuYMojMgA9Ry+suCxM6uGGzR3LMpqR5vSFbR/GgSlb21LFlS0pTP9uY6CxzDWCo6lyho60Bi0DWW3pJcEVMrPHc+SerWWNQXMU8bhNKPk06BhWhkDk352/bJtToO6Vppifj9RKDEhoOCAmRWyiofJqhR8OnkiAtRHwglYm5ACph/u6jGmA398z77R2yKb3TmpCqHLTld3D54LfWG/+w/51u3IqNOXLeBMkRuBABuwnQvJgYTSOol7J9oJe0fMZMr2mSyHcMSvUHpRbLKNT+LMqAMGceEnXZ354JdwANeibOdNyoquMhLk/8PKR4Yok6a1rCu3qEz+erEeUIFqs2cuS3/+0TpAfxfmFYAjjdgxVsu/ClY+WMHPmDBW5hNiRQPpltO13TYPX1tes7QkqjMA0a86tzMqfv2VLydoiKQGwMx4H1wsnp1AD4zG7rtWkPnzke/R+qeQenktX2V6gJpQrIjr++vwJUi5n4B+Pazy2IG/0nyrODwiZ9HENQmnm9CMnZ3F4Eq/1ClqwW8foCJhc0tclMy8ZHbu4tqXEmNeqJAMjS7KFfxsdYLuohV/uFVbTuASErpJdeOf6d12gox/pvJ7WeiZg+//Cm4wO6dqD0/0jsdJq0jYiaYGT/c8IRcijUoyx6qquDXoKgrb3maBl7UZATQLGrVTG9pMCV9kSNj1Kk1lX+BRHCddRPiWMA3zBpKoc4u6FFglCbxfnUwr+4e9uBQ+HXSG/5szCu7U4f9clbAxXhOMnVWw5Jcq8Gm2xcMwy+/Lzuztc3+38dwS5f7h2t+fQsv1PPyoPd9lNBHhvkn7li7maoL7BmNtwM26gO5jdY3viZKzZRnT7J1dj5NbItIYjJk+igZZhecmRn+75zSGW4s+qyLgZaEAvTlLnetXxfFyqG9g2SNBhaxUcaFsG6EM8XdY4qT6lFSHMZ3nfcP0czp8X2Fm75oJ67hwWtzWmua9R36E7LKblCtI55OAh3ePJ53pvDT2dLtvc8vMnKVpAYFb3Xl3SaM+NcjGMYZW10tz0aE61SO4X3v0zsdiW+syY7TLaXWtfHEFsVq5HR/oPJ3mndjJW4jhZQV5YTesv9oZF1M3OtUTlt24ZKZ6llqeedKYsLwSdfOyRWpZiZev+OqpxzgjruxMEx3gnvcjtFoAbbiR+2v58/YkALpU+Y9uWoufZxGZ4QWXn++7yiS0wQJo4moFrBY5iAKI8o9Dj/+nEfJ4eeKb3OqjEW65K8hOXcvTZbQ=';const _IH='032efa13a4cbd995ceb9749166294330732d65fe19bddff816e497bdfa585424';let _src;

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
