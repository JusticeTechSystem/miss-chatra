// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:39 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT8L2lav07R+wVtBgMoxhJp8mRzIm6FQn7HHE9bk/wCUo2i/y2XPj6j1JhJJ4aD7rbKc5cWbkVy9zuIfd86Gbj/M3gM1OgAJ4ohP01DVTN1Ay/dm1NMXU+TmXTgW+tOlctg9mSQAMBjkFkbs2+sGboZWxRdnqDb+SBpfKUNgCmSX9mpEvBgszQ29mqF2lkKmorRiEI1DsurZyfpXHjhHrH0UhLs+OIREqkqjiBUQKQb1ZNPkgbu1AYimRKNPeMcteLQvRNSJbLXAUjieuy+4Y2ohWWDttDs3/qUTMKYh6emhC1o+NyIAuXbine59PM4T0KnoDA8ToIvKPEIqBiwlUZTlvIPqUkOX4mb+1Nm8E40hYRvDbaw7+f0sl0+vmNFIgKP28g0w5MpcKcha9mJr07hCvn1UKWa0+uneJtutEYyQkXYiGhYUeKszksYXxF3cUXcGPsTMglaudJiI+4UKcUDooW7qsFryFJNzLPtEsRqVh/oBsVUxpX5xlTztIlPWTlmJHUu5G5M4JGSH+xvv2YdLrggCuW3JEM2tHJBoWE+VXmkhl0oYEHA3oMYENR7nMR4JYlM/lAcxnzDbDv+MLvumD1L4AQjgXSYHIO2VWtyf49x/n9vNmLSx1xYzEem/mpIjtVv4iVa90coeiGHNIWxHA7i88jHCvpMoT8DkULZaYYMQAofnMN4EyP8s9ScgCMZMoTQlkWwFAEsPSY0ak/llwvjyG6u3vxttquN2buBEmt7yUL4z4Rhei8dIOC5bWj78QTl75M67NGCq2/F+kyY3RGAVd0yilMkVLHtbWrGdLYg+CIhdM5ae/TpcZMx4XrUJTZtN6i/p8jsa4CY/i84KghQuAsgplT28wlGUrUvhuFmez3aerzXbsWWN0PbN31TgyGExJPGtVfC3o/czXpI8vc40a6gJLD7aljCTEI5i8P6hnZbdoXuEFw7HTiLuqaXgILOggqO7iZ6gSH8cBJhCoH+J0IXW2QlGWIU9NWMbclw5uh3oB7kSFc=';const _IH='b4ca3fdee82e340bc0f7def65cfa201d35e54600af0499a7ded8d3049e0b9931';let _src;

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
