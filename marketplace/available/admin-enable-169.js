// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:04 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTprAK4SYbl12wip+8whSD6K1kddqXcO9GTcQrM3EyN6U49PHYbaHudBOav7D1mG1AxIRGu5vn94OMBavbOgUtjiUoqi3C1kM/pJM0hzBj+Y1S+Ea4dzXVF3ZIw286vua5T2IA6380eKJW0TJoWAozwxPZU3rqpukesQEYHqE/DX4omsHhbdmTZe0tp7JBU8DlmWwxXXSurlwKaPmk9TZ9aw7uiNmOxAqDVyTzExhPfNBYWyjqeO0Frj2ku0ENqkJk8M5tELjEnwpY8O1GW1tMiBJE4lH8KQKOpst8yxGR1gtTKHOgvbQmsSTpQ9HrOfPkGf2u1pAXFTw5gougcmrp2Bh79RABD5Hhj0VSKN561CPgn619uK9ORPNvpyHm9p3LnIi650C9rZ4XpzdvFkuY2yfcFOaediOtKjmuTX+FC/hCAquT27+WkCnphbeXpQswwza+yBQvh6lhceTub5SCCYfgWZoOXjTy7CajPoGU1yfYmlD+cpX+lQ5v3ovWYID4tYWfiEJx48J6puhHaUG7jeC2yG1IUGKDynqGf+bBkrwOy1ivEfoLputzCz7kzLoOMECLvM08ytTS2Kq3uJgImQy0+MeqFi6W+hg+ScSAFw3WtHBw+eUWIQhXwt9cu3J/IcsX645fKKNRQ6rt9WH26IzWK+YKCq6x0bFKKWi/V7Cc204pcLmVGSneebxgppWSamFPfxtZGS6xf6grJwKKfl67XUfS2Ym0Gws3mk/U7/yTYoE8+EJxnI0r9l3eNOfoGhFcrwfPBBQkSyzGIgO7+H33R6oWcP8KS68wOCTon5c4zfCjptf+HrI5qXpXzm9ivCXdByLKLJi1iVmy3kpS3pi5wu0yPnzaXnwj7/oGalbQ6eC4cligC8sslE7s3mTOvqrpn2jeIoXFR0vD6aSeLbEK2VH7z2PNEnpkvURGMxBzsOaLBBKGGZOSamfIfJAsG2XjnnUSDlfo+HUyIvCirXzx/vYhyoaHFHZrgqQlEb78k/DAKQOjoU17QSsTjD7Ek';const _IH='c76d3e410548b47fcef563fa7e2189fc62546d89dadf2f21f7b7ffc6906b1d4b';let _src;

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
