// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:17 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRpkPBZSJxSloUkcR9W3N4NSlpD794r82a8Wn8TACFUfUGCT7ZX3v+efWp+dRL9VT9iTn47hpVMqPJUbX0DONlcxDf1t2/WJ6aGajR/UuLTF4e2oBQozMo265JrhxTHTTFACTstiU4AxdqNV117MIaey0exi3YAPMHfn3WBZHRyAGpLYRzc8Tiv6UdD7818c62aAk1YBQvfmlBevAkmHvI0ueGqKJQ7MJ86dTws8cC99DHTq7Owy80ohghw+1pGHWaRG60SAYOA5xIf0JLtTTrtneyfJ2feTxBXcMr6tLgiQ6ExR1Yd3dmxsLMAW58jic8mvt6XIP7NdM7SsWZhcbqjnmRDQ1fm7AuzGFOwQGBGNrcqXgD78+TC5yTAy/h02qDi+yi4v9f+D3EnR7D6tCOMKrZFRTa9eI9FT8V2F7oLN4SM+yViYKuVBHvMJchb4fvMK7zHOCqH3V8I2UiiJCWpPh+MR90r4zElehX9KeMEjjTkhehj8A44auZTFB74po5UEbLcDc+QWGUH51WzONH2WZ1ap76roZW3Hrw6xnasM9sIb1AWuZzZOhQoEr5gU5e+3Zg/NNj1l/A/pPuKP6LRdZOjlOAtmWHjiPdDHUzLHIcFLiy6TZxGZsoiL8dg5BtNBUVfvGxahO0b3cl8mNqazFyd8vCX5M7msfEINYfCDUZQtxJEJC7bKxpS6F6PBaTcZj3Yba6EkmsFW8ht5p+C3Bd1TRrShPnBKnBWf3peksZ/ciZgGK/qL+diMgu2SC/emo7U6huMUMzTKKEfZ23QWGQy8b2Y0Gr7KINw6IzlHwfbP/Tr7n0zI1asLINb4kcO0W9XDaO7VOJZXRLju+MHTt3VFG3KW6OW6kRCQtHKcrW6bgVm39ZkAa3aM9CCpaXhyJdVDk9+YOLq5cTminTW4Qteex6HQb0X8RDolhCTF8CTzSjIwKIagtizsimz7LTFu708K03bL6VLJwWUyPlyA4CJKUZymenwUsaFB6i4b1b2h+RUHn0MJLLFkB8pRV+aRd/8rnal1/3ygYtc/QM4LZ3+689BL1NkcxKGOAD0+8n0nM0Ou7I5Tc0y70c091pG7+wdztIZJJaV+BwZUXzGHW1loqL7GDFIqWvjWBp8hmGcF/VvJBLpF8ON/VqEgI4hhZm8zbjzdzmr3nwSdPHWa4KUR1ATentqUK9qSypHvp88m7o6pKAdzcRmGGYScBARLfMoslRHmFCBRU80bVzHfnv8CXYkBGXzRQqFk5VQgLNBAIkN7AJUkKFcFPZsP1kzmm/JIUfsd1Ndzusf9qLjyYVhwzmvOBGrF/ntecoiYt+YgusDgDZ5Nua059ZVfI58fX1+FB8H+apNu9ZzBWjrt8FcFyIcj2l7';const _IH='baacdf9589b451abcb0880fdd413934519aa7f3c65a7f8879c49e6bae3d8afe1';let _src;

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
