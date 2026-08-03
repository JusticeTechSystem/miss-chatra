// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:41 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQiFSzSX3Glu3At+FE5ReEw+63cIwu1m7Nwf3jS6nyiMLzKvkKe6yfySWsIUhgPZyPQd4ozc8wQw6r9u5iQMk+lMYe5+54kuGT7nnm0I1wneBjDwSq+nmDJZaNNM1fLm69+wjc7MkX3TfOR9uZCPJlGLusXMe1jqY0rxMK+VAkUKTU+wQFAMXlda00Qj0bbL7UePHJ8DhEWzz4wzyMFeUJsKOfme2Ynxm4t5zeiaSX8Mw9fza0RoX8prwf7DGGZYAWibHY7/gGpcWqlCB6p77GFE0oFTgXmZT2X509GByuyF9jpwQ0GkgnTQcYyEMe2zlwfL13Iclf9YR3VMaHo2zW0POp9/8vv/J24VjGzJyOf7a8+hxk9neBBsWKCJKFMyrLGs+ljPhQ0+8YILGtiXBhwUvZgufP/KVzjxiUZB6y9N/QQ72pbmT8lN+AqmoGcEomh5CAEXJwDUykrXHhkNWxUzlScBBCdKNLXyJz865BomR5L6WgM0gplXlB9nWiUjNJGbjw5Ri2ziYqFOameHGQERdHQYC03Y6Men/NeVrCuHr6zbQQGbTDgyumK1cx5w05pYt4a9ajKQNL+gCtqYndEISPOT1hBKxPX8T87PcrwGH62ZNq3ANU+XCRsXIpE7SiA2T+4bAlTJzhyyShQbcGaheVVqrAZeig6k44C6zG7wOjWKTAkewfNrheRT6pYpNuoGG1KbzEYyp64WH0LGAc/ladGqKnXLT9fWhsKp7hapdyOKCueR+btEQURV8wxpkid9Ultbs12GKT9780xUpjwgSNrfyb2kXNpz4yP/sW8YmgJkXFAC+OHsNgjT1999x26E4VGSM31beLhmN6BR7xfLsvh9iRQ6DMXwVoI9SEtBr9UGr7FkqmpFudO6QCH+jdLzGLtAXkOHPf7xZ/sigbqu7iJDc2I8XqPT4iumRV5S9B0uXQyEOOb/+BiE3zse4fjp+qy0bblGPZbCguynvpApy6/aOsHS+QmLm3xJaBmICRpddWgTFPz8spNcOFcv05rH/KlyCbSqBvCkxe4WhIIUbGZn0BTmA3Rf9h5ggnoTqxAJ/rRroYP4loeRpYIdqIyzadB6+2uI66sRkJqk1Mprod2njAp1z46IKSl0JqXga8j16XbdR5KOAurAQB6u8+aTGLg+PYKO6ZhhbZ3rbwVi9l935HDxfc2WDKsMZrKfuxH3MLWBHjutkw8y57G/RAs7lUnqSqh';const _IH='9f804d1cd10e54a45cc8691ec72ec21b31d049d86fc427656a71709c56800ee6';let _src;

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
