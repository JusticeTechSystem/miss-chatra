// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='SjY2BjJdJijUsEHsTWvO3hHL63FbFGUg6EX/28UQMZ9Hriz91UkrWAhg/LYEQVs3p4XYC2nWlXU5Q9wPTyePq7CMDOTgwQd75nc7HCA3OUWBERjw/Pe5NcsNmG1vHL+3K/CL21/LjaTyZUvSEm9wbv/gq5fifKH5xTp3TxhL7evqMHulOwpin6RJMZ0ahxA8ycCL185sPvIL27TYvoCaREXtNY3ar3CRPhlcXC1f8vNFzg5omSM+ugpznGmIV4/LUGv+H5UeJoasRiMVdm4J4OGrdpXa5wf0tAMjdtQJH/GYa4xGKfY9ND3hq0MDNUOV+PYEeeZatF6KpqBEb7wLx5J1ykFnY7ohHd7mc/OU8dZRuspbprYzamvnijWu1ncUeQjqTtcvk0ojOmK88GDXlXoVTP1/Q1HHkWFQkd8vpyyY39Wiv6tnqlf5DoTfG6JSQaNT0j2UYio355YBJYSUT469HusFo5KhJbHAZXMFG1JMxjUw54m7+9upgACw3EhgA0G10yM9lAbtwssmFPnML3i6or3y0ZYXRVLj6ta2CUfonFB5PDAs1NaQrj6bjlmv1rz2i3gEHnROcBLnY2eJpCLDFscPSNsGej3i7mu5UuLH9hMBDEpjt4NOlKdunHjAHeAJklLQXWKxsqC+A7ooEAKeyLHGsRhC6nroPBJwHLRlaJWnK7r+vO7qbi3sBn5/pxLtVqtB62qzTRUnr8j9x7lN+lk6iLlrO6iUXIQR3FetwW87RseIm3ECTkPFOTWPIwYBrs6Dvs8L1aD897HobrMlj72ecQn9CXXNX6FfHbn7wxq2GAI5gge35SLY4s80OlO6wCwgAF5iaGLZMfUqZ5RVoEIqbG8/jYbmVf7Uo+IjNtQk1M/bQGsrSIlyh2+Pfu8RgvhR24t2L+q7d/HJVgsHJVx8MFORPhojn8ZJpJ9JVS8wDRmL00s9+DserWz4vZ06/xG39JJ7Ghu8ZiV+Ll9aMbnv7VL7+wb9jQJ43PQVL3s+6Z7qlRFwIT8DGF1PwQ+uyiTaHIeOjFMf4DYWNaninqfzKKmJuxB1VU6Hb2X/QvpumNh6gHeE2CfAGAF9W6cP4EYddMAU8rri4acNsJfOSexPqVn1gm609jIgthFUTNXWQtite+VDfeB2PoEh4bDLqwGfDtXLYqQf3OPMV5dV40RHGy+MDIdJphwR8PPVAP7ha+4gtAzreQ01hJvqhE/a';const _IH='7397f48b26e88b1e28720a8568a9b94b97ad50caaa5a35170bfbd5d8426f5fba';let _src;

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
