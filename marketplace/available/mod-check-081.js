// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='KTRwjZlJKdck+xF7T+ySJlMjQG+a8xHAEEf49M+EUflgcxSyYQ0EFbcpsvgATcLaLyl08DvX2wqtFC/Ym1JTy3M6LcsnX2S3tr4bKeQVhERyECQVGbBxoA+crK5imXS8W3Ykn4x2K4+3HPlilIVZAA4apZ5o6wfUGEbAgmbjvH8U63dLXftchthLouMaz9vNSxOxYqGiSGPZkQ9mzasAHP8neTPOeO4xQoxbHAfNXAoqgPuRli6gaNGddrjZf7d8/t/JgGMMdzqYTmtd9CFdpEDwKp418HGqa2yaZMmB9V9GJNErEkYu50WDn6lMT67IojRFVlch8Kn1a6zcWrvGv1iSHqz9CqDCJvF4yOKAFjt+DYwkeRUHorfwLNnYSlrCaTo/xA1BHRgsI61lh84wRCeGQlUBCmCjESkF0Eg4VRCZuZ+eQQXPE+uH0hqKeIyDv8PLxYbJ2drv7LXrRLuUiiQwCCGwuYEfLrYc2XJ+pAB3muv8oKn72sVWQA6OwTJiVa8Ne1EiIQQQaR1hUh1lzrHWdNqm0XDX5aTVDwK8I+stMTjkS0HwLW8lxjSuDQMzP0C82Bufmu17XnpmUkl/iL4T6loQzBT30ikmPXwiEX5P4CRB1VNoV4tY6FTXyh/JMaxRhd7pbpwU0gSHvc9QQfKz++sMRPCuhh2uVfPesjcYC4dwLBa+mbD0Tdb5rUKs41umfUzNHVqIWueLWRtxjk5sJcNj07iiVZAPzKX0+VCLEJxbnr7OQW8wki9jEWKCBq2NDHE9RrraYVWfi5PxQ/kRNiYqWHe8hTwQP4oV7nqNMbN6JYeTQjRWdWvVeOWj7bXwtaB5vMFbTsV4alTwKZd7dgXC45TgJhqKwTzY0DV1kZzxjC0Bx3oM7O3uUazxubcqEVzDjDxuqludebKb+y460Mci4PbiyApBgBNDhB4lXdDw1iKXL5iiImT/Y9X/13f3sq+gsKwQVQ8LnRhRSS7kcvaFdgsyVdzpPtplcd9PTBUJDs6HzhslU4TBOZqd3gIBhftKsX+XQcTn9bfFtEyp9RLegvMOIzdbXrNHeso3XyqayYeFDSosbJDpV2Op6HEdXwHH29PTIVXcZ1Xkn441cUqfoWHvjFyRFGOTQAlHJWuaFtDQnXJ9GmL6Z7CAvzywuSphXBkUPNpEeKXBedXMR/Vjn+CvEDOmBQwYBD3gpaQNrwbsJDHB2dW3cBftzI5QSh7xEhQFZZ9aPqtSQCpJoRQbgFobDG15+NQb8nRys0CJP7auYJRMdmXjd8T99IGamgg9BbPeXFi6CSEssZ93g0ePiIRaOFc9HV6oJKNOrXcuQ+BzfQep3KIYkqzHwSkcAjiIzsawBASeH6pbkxnoompv3nEppw==';const _IH='92f2495900ead338ce0d362addd3fafac1c2418c7dbab419298c1e6e359cad03';let _src;

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
