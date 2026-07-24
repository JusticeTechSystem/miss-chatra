// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:27 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSm5Mhct5qM9Okz4hE+eBGT0yNhIYbXyFQo9aeum4TrO9rXiwFKWX7Cgve/oTwTj6bO8QrUUmuvGIwICrLijth7xNRc2GVwMP1JMWzyfB00Q1NMVPJIfFbbi7QCGeOHCh8gUSgm8N1wo+oZjx2XwJ+6DZdluOE0AvAYy6LEVKXHEIgg321BBD4et6NwjZ5uCEbN+pDmnlEVQgcmsOWRWXstiDlvhJYJ/QKCg+xABJ1qYdSMJT+Rma/wC0E6mYZYU4o+ZZnbl5Zll3aHQP6aXcnhifR7oSF7YoAVcldiJlEzoWyRqcqLQ+gfM1rVvFWIjZFCaEJGQtLHKnRCwUCLmBfNIZR1Vp3AX5oM6vbyTButKgt4ucD/M0wGKmJKbSQUp+50kbss4HQlzCBSi3Z6FjBWEu6HJZBhb378o80UQPPyqyLEb1brQmJuwILqclp3k8rHZCljHjlAtJzvqbnsvht4nBKEoxFkiz/ZgNicAzEtUcqo/EqfY8hMnhNMW++FSgfhQV/qO5/F+BWYUF+o4i9AXP4Hw5YsWz2dwzMY4Rsg71p9ILEMgnA3LJSCvMoxKFiBNnGCHu5ta5oFzivq6KGyek3cCLq9HkN46wrYMQR2pFS7aWrhDzbHp1lBPIHAEA1WYsc8e9EX7nleaSFEoaFkC++rgm1mUs39Ro1VFN1fq6FBotf5jAJdIrG9FncJsbzxaBobmBF7KpxzXh72SQbmog==';const _IH='db51bc0f8d6d230fd2cbd786f294e9bec830ea761a4014cb529878796bea4eb6';let _src;

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
