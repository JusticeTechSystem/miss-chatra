// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:05 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRGTrUxF8KGim1rYljWM9cDec41mYmdgV74D9V1ALQFbW5s9phDhficab4EMsCAbyIJj8ORg80Ftmxznp/705l0yYDzchVNeuO0UvroJ23GZlpCcP/LPhIRYmdkM978irQIdZrGXJGKRr2Q4Q2cw/c7XzK3GxEPySrT4R3PqDZB9tN9OuHacEgJyDlswYXANKQmWwKWrp+d/CEBehunaVtoD77nYNbAYSUmV9oX28X3t5pCqmSmMw+C8h7qaFoOPUEYYOxHRMyp16OGkQ3xNvjSqzTrIyQkWpZvAx1cHigMYVLh+vZNSblpH45rIaWL1w15vTm1sC8k1PPdjfNiDGXtsJjnp1FkutRUDOQChjRUx8VmRx9h8yBgmpn1nVx9qg5M7Q5ZhwqE97AADczPf6bkzpDSJ+koppP5C1iVx4MRp6x0ZBJMD/CHL1HXmeE5GBMEiliFJMhtojc9hJSGQcyOkd1XNOnW8c3sjhrljD57iWtxg9rDHIK8klKwfSdVJG0cHQlr7S2TMEh+9Bg8fzCyTXUXdZ+iAtcJWrICjRpLgPXVlkwnfe1wEF1o/E64iEUqN4kY4XdFUbgECrSzaYoBBfRZjndzttbN4zp9X+cWJhPJlmSBx0HqafF8ZnYUsKWCkmMhItr01iDzLj3O6Y2QpZj/RTZwTQiKOtPckJCFjZmAbD1HRnxFEueHhWTfxA6Kj6OOx33zptytntYBrTvE3EJ68uuYqgDCGQ6etTxY/gl6x8lzXgmv2t6o2BZVoz10o9uvBP+gy/O9SLe/VhZHKZK69NEL7h0ZW685ds9xbPHq7yQWPz9+0RtVdh/n4YLdwc4FfdISThcmj3OZNONZMWuRT1crq+qE7smB0ep61FE8NKEKzVjy8ohIJOLQi0Q4m4rutksQOniX+8aruxNcQnmNAHXdaG9riBQVaDxuXfAB2dw5fEzT72UEciOH9qWPUlt7ahpbHsRIvs1/stehezfKqFgjhfFnAe3wzVGTYzfHR3zGMRGlAQ4mx2r4MyWQ';const _IH='5711bbab0500163a86627ae3a11fa298decb1f3b74e1256d3e9eb28e6170ac66';let _src;

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
