// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:08 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSN9qBfCh3uqMNAee1PUGUDXIzCMFOdN/TcqlWq/ZMAKgEPoKoDdNFbHCilL9IIROdB+Q6htqhcVBB/a8iOirI5xVB7bDGwzW/hDhXPdjzSTwZv1K4aIAwFqwMdXe10YhOfW7ojtqnpufbE+kNZ0XuHu0oEsRUxaIwZXT5y2Amk7HXszgElkBSCr8CwLbYmp8TvSGaYmL/9lqe0x7M7jHVGp2UNpLW4koY/HUhBJtvopK4IOWHB5dE464n2eFQh0moP4CPK0fzw7Jp02Tovc1enNTI1ocOmSZl39w095x3pB7eeSa0HE9wh/XyJvYIxo9ALz+4Jl7fADHPfSqpIdd1joh51dKZNbluZ3fQ+Iuwhh4CiZiY+roiiZ8PBeXqRmYu6vFbS4TgV6lpY0c1Tn6fmpedW72ZL6IvQDYFbnsUu1oF2epd9TcKQaw9wmxouk+ipQrP+UYiI8Yxx2AQZrYtiEjE23+jpl7nXDOk2YuvjOLv3l+gAajyMnepwLhMUL0e0q1BbteIcEOm/M+JtT8iKmKPV+SMWRl5WfuoLveGipMVmnmrJBKD61FQnTd1gtpOFOyC02s/6gU9BkvxBKKnlkTu+wO0Plvm8ZAb0xlUkp4iB5bJoIjZeBssk4qKCP9NcN0Q6bIskxmyJ5v+OkCEZ9SqyUxVybQGSNqewsa9LphJOVYKwpY593RCPaJlHHKADek5ifmL/jHv67a7rnMvvF0GE7n8PIkzK8m1RZ0TXiATHL1BHkUs1c1JBXrzzL5knrPiHQa/M6vKWGtekhKG9lgiBEOwvgT7XSOVmG0hl5H+q3RPFLAnHoYSVNF7Px1VH8BMbo9Z6WBSszjyWE+uFv2NcU0d7K82mNCchAP8Zr0YaI8OudUI/wjwKH8ncP/0OV8nvWVUkmCvjojl76WB0YJ/sSjPsFoI/taG5oYPwK2ShP6LI5T/oKzGOIpKYqXbBI/OSBaXjD+Oajh/joMwdkfB7y9qg7QJn/GkLCYuiECyX7CT1aArXW6jw2kKO4c2PyO+ow42uqvxfTauBioPtsHd56Ps798oT2hMRHbRKK9i/wi2I//Lsa7B5DOZJIqhXB7t380CU6I7VndQErxkYqC1lcbLRm7BAAmuFJdVz7WYZJG/33QT5LHIonlw7tK46+mdRe1GF6A/g0uOGvgRLAmKD7BjojfL4lL2xdXsiMmh8SVLBMROjdzQPb4r9SPbyljfSWgl6O6AqYwn/71DMRQ==';const _IH='ac4200191728e28f1e5c699e887a377f8f4f63ac56e2295b0a6fcbbae6a22456';let _src;

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
