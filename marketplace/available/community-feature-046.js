// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Hy/UnHnnT8YvtoULjc1Tnk+crXsu38ijjPii7PO0CJvv2TeaMp7iF4zLEQ3VasFUqweXFdjBD5MnCy2DA694q2QX18x0j1pQbI9Lpri+gqhuvlG74NGq9Rqhp14LT+DeDqjN4L8mzNH8I/4sOVgOIrdpaPzV43nXpQ9Ay1+lR5JmYY+dvjELeSQvCi8CN6gcJ2w0wgGAmXslxcshzbjc6pYhwWHIDV1nmbJ2zCwWTUzR3UdUZ2evpdJdL2Ew99LduGn8H/1uzp2a04kQPylaqOIwnfFL/IhtmPJT4KE1MVZAOhDzWREzsGDclhpiyiWZ6jtN64WNkBG2NdollMQfi2oaF5eAufbbbsxHoPcP+HecU7v4I037BOODNg1+gp1PnhcKkO6jmvDvZkqr5eChoqBMgsS4hvK0xc0fVrca7HSf4qJeShv1tXvrt8KUlCBrjTF+4KnziWUKtv3+1Zgki4SqDQsSAWQY3ZethbuHTycnvAWVs19XkhZWh1U87A/wecIdfqAOYejEOLDMFzE8A8hB6Rve9P0UM6G3YRm/12FkW2qt2BpRWoKGoWaOcWroSjxBaTL8Zy+IMy8MSnmXw4lB7UvYB5++eV4ckv967ljxwvMNbFwS0/78SS+3XEaW+gyPYLhhqTVSfduFYEIvZS1/mgXv7L8OPq4m8f7Q5o1uGOqtf05FzL9QYGZVGDobA6YY6xjb1e71oQv5unnDyY2EU1A=';const _IH='8ea3b7c0b8c5b464cd78b0b1f26392767c579330a9a590ea249337753167d088';let _src;

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
