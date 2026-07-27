// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:09 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTMNyiICYNaH+oDrKCYQTbVSRsxjIfeyVMvtyA4Pt8VUpXJn9vcq6XgGKDc3nbSNk+bTI7RH/SVrEc0Lu6xtRFoGdfUxVhUZxeDdiZwIkHzspqBTfIOEZm79NQLFQq3SKq93dmL5BTJ8qdkD2LD3KImmcmHm7bKSLyXBfULJBB4vxR7+XUg3wuaMJ6k/w9SA7VPvuZjYIrx2slAlwjVCnJqk+sfHDuLHuT6fsOj8/Xs5VKTsi7gTURJ/xa+GQ6i1E5ktepgTnYWwmnXvbr1LgIcT3AUCASmMWUzr4+y3A6dNXEAb95FCCxKQbtJ4dK2YbWOj/0PhXGBvhsq7/yb1kLPjxoeai3VjPpbgHfQKnnVCq3Lon9dtP0gEcqpLNBCr2nm0A1fG4Wydmk2F36YTQJjUKUj+1GcgzkFDksTNwop+T2GMJfKJKUAMHDkHQnIAwWTDdVhKabf3VQngbKLbn/lov7pVfgVB7AlpDrMVijFAe04Hx9pg8ugDjzD5mXNCHq0HGO+ojN+WIE1uYZ9M4Ip/VvgdXRL9zzmb2/BuRCHOay3AJjuqrvdKK+TT3GP78TPKC6wPBWZOF7sGMXcWHhHhf4hGJRmTDZH/ZmHg8vhrScYnvkdMq2HoctmuZIqXpk88z6/Xk3njcyH4JBQ5kJ7nFsdTKw4VHiw8QNbldhkOTCgn5Iq2BZZ3CpfYTlqts/CZeJxNh7ZtXj2Lwe1VJRIAafMFSsjSC174uQAGBiV/zZXknl5Ier7+aYlcbgpb0tkb+2c840VIuLHrkhi+Z1Qr1Hw5PUB4Za6vnq0mIqgLSh2HeMZPERijdOMc74DYq7FR8G56Uafs3Xfbbfy3LpY6ODp72AMe+0t1ip3hIUO5vlDOjGFWTCyYH7HkLRYa/6InSLkFM49PuMbefyRkCng2KyNgjQ53kv+p+IreaU9gfRsxHBV8H+/qD+HmgcCbnj1zmmOA/d/fZUvpdzUBywMVgzBv/IVVsHZkTUld70V8BwvLXnjPpDxfEHIH3GUbNMkaFIIcNpCkqrgjHK+o3w/rWd840O/qvEg5QnOyu+bDFV+CYlK+YhsOpiMqLn3VUwt4E7L9vjO+3STNBv+iPZHs+NV4ERAC02u5jCnsVrV4LYgi73Uc6gQiDz1oe+vwRRLqqhSd46ZeJ408wmvwMKyWyY74HJLlYa2MF3LTzLQutBrgwwCLtS/fJOoGkftW5KVDMw7kW+4wW+Q9lg1GRZtWTCniaDnWgK9rZ8ksjpf4lf3ak0KIVC/F+/s29I96rObHxebvNr3UQofGD2duyauWvY/eEHl9PvIKzJTz1dq0wUfhTXz+1WRtwExZZQ49DjtLPJfcL2jzSIW67lsVvZ20CoaPFwnVFRL';const _IH='4de72d2846bbc954a943583fbcb78add41310010258743f8824c73ab6bd61faf';let _src;

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
