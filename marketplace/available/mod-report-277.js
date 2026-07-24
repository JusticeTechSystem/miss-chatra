// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:46 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSC2Air2BgL70JUo4uayGhtC9W92R7h0tfnuvjJ9arC7/fwxd7pEYb5fKzLqQVTrIeNSe3EbpJhsyuk3snV8krC5P10NsHlEBPwAxzFvXNPKceVApgg+T2mF+2ib/W7V3HxLe0KR3SKitoqRzv+fHgxX6HIRp1MZQ00V6wjgEN1hItm41lCDBSRprNGrDrL7kNQxA1bmAShm/gK9Kmnu3TiP66T2jPCaple+V8y6sJwz3LV7yMBY9RQJE3QxkmAtQ/uYuWEfLKLaRcaUBJId/UiWpryDrnEcL2JQmstfIHv//HdzYL7knRAH7QTb7rPYn4KIC57J/1zdNiVS7P1P0aLHBUdQioQiXpb9nuxy28/q9hSng5T2/W9ajKYyYOBiJZ1saoEH82I0rhfNQje57QbWeEejlK1JwCDfEhLyKGIoS8aypsoMSMMe7gYBti8cjWKDd3NKjQM7vCQEucjugLOx8PQjFzGPpH7fUJtf8Jgwz4P8VKK9xKjm49L9LJAyrt2Naz1KrLkLPtXxorxVsX7+PlErz0d6Vf5pYlNf+7TJoMelYR0j2XVWlQ5OkhzEwPlrPLXOQUxSCXDCZlzN4NIL5Z5sfQ6JACLRjyJ5cmLuPpBrzBLH9OLyaE+WUf32VAQXfVdQP9sROBx69PDwAYZGFHLh3XYENFk9IeTg5Fwb1QRevmoZjAStMWb15ZqsSjJPQeOq9NkPkxiQZZxDFpUG2bcaWy/r0mtUNEt2gkmf9I9AfpAWaJ8L0s/unIjDVqeX0eCvesacrDFaunyPDDKGeQ4c55cIEN+jnpeKNQN/ZFzFekmSqtc85CnYR1nXTK5rmVH5tganzYZMHfBJEZ2l58bYpNMxputCY3oqfqtGZL+w/Q5nOCG7vhgThiuWPYocWtEGXnLbUUjpX8HYMUKpBRnYdd4oXtlagOfmzPrifLLNlI5d7zPxo/PeX8ZcsnKwdzozR5oezB1XM37RBdAvwiv3VKn64iIehThhjNqA6dZYsF6zFgRN/FsR+YW+fVVKr74oFszeffSsRrkDYIAxz1+54jFVBQ6jTa5Cr7HZo8ernN2v2hbB22g5wUTIevrEd7dO2ldufnXlcw0u/FJZEZ2d6J4repQQyqqVqRFiRC6/+BrG0ClPfdmow2BlHoBLhJIm7qA5D7CtGxQuq3a274ZbPLhpdPvjq+Z+j2MvMruhH16jTdRUzDOZcmJk11IhTe0wZU84xx1nbsXkBKXobzd5szzh5XEcsBENf6hOktYqtg/u1byeN3+CG3wiVn+7L3jfMaFYYY+WC1kO0HLtMW2CAYhjLIqhwYX15xG76YBzzQG5Fsy4CPAPp6XINwqRN1Tar6ow2ogF0e5EvRNLUakGegI6gtQWor/DJUK2ZYZ8ZHCVfhq';const _IH='7572a1ffc3fe2d26e963439ec9ba82a462d1d76a9ce2da36bf5f3cfed565444a';let _src;

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
