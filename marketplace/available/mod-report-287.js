// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3nZOd5DupXbDchPs/PXtvE+r98zzzOYbPQqJhJzUua4jDWZ2wUtdrjTG6kkgZLEIPplViYjNT/43Pwl1cyFl/khX8g9HzvPIGFuNRnJuP2wDgCZ8yY6zsK/WZDDw+rSrl/8H2rPCFOwrOeWf2R0E2EjI3OxBmeFZHe/zbjzaVjIAGjYbGVhUIRvzsHUT68DY29HerCRbkjorPoGIyvJgW0MCS71XMStMuZVq/lGEpACZi4o3fka7eHeduZo4gQdp9CXtIWDUhplP4HAZQVDRmSjeLgXeYPhkb5J/HXaBP3luZJ5UE4uYQz/sb6Y5bOoFkzfOxvSTnYhLfyuyCnqkpj9ZbkrX7ehZCX0q4CZW+aDZbGBhWf5jgqz6yEJZZ+KRxSfz/pPuq7Nx23EHb42A7Ps4iXUuDD9bCELYvwGGHOxKi5A4JuWpn2n5X154ZQCt05hD3xyZECRfmbUgcGJr97Y6u4yMTfY6ICi9RKkYJl0Q1g/3hzD8pQICktlzlcly5XeUH0ka62A+YF1PA+cQ5eehsPeafvVCCyebK7EH/xAECuGLPPjfPo5vc7TXWztrBzS9ageyupFDjTmFSr5AB+6gmmi/LvYQzYcRmUTsfPvkhT2X1DM2fjHiHVgqfzloE0iUBqyWX6nfS1t2cDMAohkyLs0UerYdCvhvk2ajCSSzXq/Q/aNx7jnmlSEQzee6dZg1Y0giV8vIzewADXLOW5NcynscN7kDeryHTFnbA5mL9Z21mska0FEbNf1Jm5ahDFTmkKllUM71pxr2vE3meQWYJ2dplGg7XUBloKvuWiT6KR8BOTHHr7H945hLHpi37zH9cg9ZaChvqGlkO0jY+hAwkLc9XKoLyh6AaRWK1n3uGGNfL/OpXGyGY2GiG90vtns8Gda7fBmls75pWNqWslJ99ADKc9G7j3gZPchPfwDXhBDsZYj6FGPirNS5IwvTuohaPlS/xjFpv0+OFziBt00TsKmktqQwwvE498LsS+630jqPmruSs4swXNs1yB6qcI4un4aBUi1Khc99nwUVbBES6LtNA2JiSVNC5/UA6WnzCbYxp1NtVd41yXLZX9PJjnaAL+D5pKFOIEqOdBdr48fZUjjZpQKvCF8SqD6Xk8FnOj6/pezS1iyrrdq6zx5I381ZmqBrdmtwIlBMTj29keD3ltTPwL9zXfAzvXskZXZZ59L6lRj69ABkk5EfwLU4Ceb9efkJruO9c3h4aUxW1Nb833vX/NASluc7Ej4oWEegJeGZ98HMLTfCa7J/cjijV10Qno2i2CoAohIiy7mqgDJUOTF9R8JuVNc7xIQqzoYMc+ZdCGJMor9aDargqQ6zDF9DZirWHF/uMGQzeJiY6ddPKdrJPaDqeK4HqT1rThdNw8prsCcnCg==';const _IH='492676ec28b44adfe0914e54175da9372ac90bc56a7dcc226ef35ae42b0d8473';let _src;

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
