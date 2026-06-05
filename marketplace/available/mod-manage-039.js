// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='5uky4I5Ei0JB1Kjn8VhRIEuxre5HgRGOp6CCTUEVoZUk2uckNAXY4o6aslAg5XtSqfQ/4TtHLWXRhQtsFiZZUh5hofvi8Jc2qqOi3zkBWcvhksVOv7EcO0VYWG9J/q5gm+lxeFXdVow8ADwyHj6N4soUTuBcvRy9Ozg8nLLQyYKEJ1PIh1o3hcjxdsoKJOU0Gwp+IyLnO9svAKWYqsMYynBBHVD8sLewePARnZLL/jo30rKCfoewfM2zEr2sP1nZ8n0olgI1sVSQHhNpBAPNetGKbVEjULcobxkc4/6k4Inoftf1OpHQ5psYUyIEe66Jm3W1b15ffgp9HASgmjYHPSU2nGmiGIALFFS1rFxe2p+hLFgadAX7Bz+XzBBGElORK9zZqL2NZ558J8BP06nv/NoDNLkaxp6E0efTWN/VG3HplBega54soQQeAwB8fYwjmcgxnhN/pU+oFxgsE0ZDFK3IcoTBpFpmGB6a/ZIRAtNqsqCpnlVS6uzft6B3Iu9VrCN/iKYS5VvVELWppBWlv3SXxNiWPJxskIwFbeyFGgev9Geq0ZgUONLBaSluSCLPnonYrb/Ijy7Qds6TDD8I3n25sJAP+C1BilInKGtiDN6M+CY6dKHYbnmur8iJPM5WPTjoy/+ocub5a3LGtmXBxdTW1x379E6pQ+Vlo3nhJiNKCg1tWcS3hagU/KfRIs6VKX1LvkiZYHvaUzYYKqlaGK4KFdqUjTQdiDOHApDI31GmGxW6HCCHlhZyaYKryLU9WgYJ6W788Neydx7FX4N+r5LHRZL+yz/Sko3JEteNDD/iGbXdD/2Y6iElrYxKgPg/v8Pa+TbI+akDq0/l7Nd2rtIkF/CTdW0e/9jMkHOd24AS7+/P8iRjef5PWgBvvYmJYPU53e5E1dMeG3sJXM5o+c2LpUSHlYEJqwRjhYyZPR+qyTQLiKRhzsTdhS4xvGL226iYH4mfnWZipMqARutSN2orDaYO062qM2kGbsVC5lIVXvnM83GIyAhproFYiJ1x86ndkyo5ZFWn+VsqL+eDhOhacZ2sJkhfRs+xFqBkyZipQwXmnH4ektQ62u78d1EMvOuYoAmez8UILnwUictH+Zs7AwM38hPOuEOXVOCbxKW5vjIFnEbaQCwBQCwaKKgpsOjeQjydEGKmGOALVek3AnKEvsfSHxa5MQY5ODphJzE+PtVYpwzzoYUeQ9IX+i89l3UhbQqt+uSKbR3j090gvhHLeZyoORFK7W8Plb+328G+5UYwMvAbo95Eq+d3eFIXIBxy/Pffp41kQZAHOOaMO3+R7zO6uFQ3J1KAidefdX54zYydQXcQscMa+K9LC5sP1iDue0jQ4e4iXhgAHA+U7xq/fL60/oZ5F1Nd+M0ebDqHlI0=';const _IH='7a655a1fb546023b55f5422d7b94eb82c7ecf750694721b86a86d61854efa911';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i],sl=_d.slice(0,16),iv=_d.slice(16,28),ct=_d.slice(28);
    const tg=ct.slice(ct.length-16),cd=ct.slice(0,ct.length-16);
    const kk=_c2.pbkdf2Sync(pw,sl,_ITS,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);dc.setAuthTag(tg);
    _d=Buffer.concat([dc.update(cd),dc.final()]);
  }
  _src=_d.toString('utf8');

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
