// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:30 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRaUZcFdRvexqAjOjwprvJq7WiD90HzCRvIJwPAIIwOGKWNIopwM10LDKYTR+BX1KWb+LjoYQJD3u+jdpjPfYZLapx5bsF4F8xGne59URK8sFE4gHZLvE+OBWf5gwxwOfkKhKDTZIx7W8o5NJ60u/5ngvcX8Fr0iV/n4E4ftzC5Xj2BVSkokC41qBCTghHzfFKCcfQv5PCm6fp21JRxY5IjuC97OtybY6jGE1PJ2BtsDpMSzfR8vYeJkJCsUmUOwdlYPIqcqA05veo+ZTNo8A1yMfS2aUsdfW9x1l7XdgTXP3ZNa1UW4olCun0jW6nx7ZF0E5x3o/TB8VPKF9gtmgg4i7EbSPocp0V+/5BiY5ArEOQjLtjTPMkEo2e6UEwmnJm0495/7XS+LRJqkA25J9Yzi516Pav9coWLA66Opc0sg8LqsqPGrStJRPoqcZBPaWPIgxOkCSkmsu8cnAIlf8D82f87KdVxJJRLEiAd7dq9TOyW6kzpqec4LknByn7HX+6toPytvO+Sx+SAYF/lQBAb2LLonJobO7xPrUS6h0k17YIctpBm2IBePkU6FERHlE5cIOZb4MYLeRTbHEeHjBzV8mmJWutsjDYcFI84+kJm051k9OplRAd9TN79MYtTYhHkg1M8d4+hZJ7xjv1oDG8wkx/1KL3VysXrWoJq7Vi4blAg7yFIYK+HwUbOqXuHYV2JJ2G9/Y/uD860C9CQxr1IE6wN1hXaQYPLL/5dCQaeS5cQ2p3wb59BrWi8OKuLfaOIHNZ4OXiXw10lPH/AOVT03gQ+LWvo6rVwo/KWY3iZGTsbhoapJ6XQJA5k6sJdXb9Ar1mu+PPSEA9R7JjG1PvvO+XatLFkk369pdwtKzMFuRS6HE/2LxShLsvKUD3uXrbua+tHHqKzoQJOT7Zlk2oiXNARnJcyQFs2itjOgGENZmCFL0ASkO6rCs2XupOkDEUBpgTgK6khQ9lmsSQBVPr7wJtZ4YE3IFqyHOnuCo1b9HEIOpPlCwb1KFKrDthd+I96RFuWnyryPt1pHKNmPqNXmQ27vLIQsdgp+nJjGu/lc9yMHPK7Ax79Z9HPHcQdvaigtK0730AEQnZtUxDcJqwegfNL28pWq6Pzq29sikVjSujv2FABHVqIQ8wQdTs61SIopg1tQGHSX3dLO7ssuCbCqzijaZzQ5/YxbmZkkkBI8qJWiqw7u8PDZh+aBUVjlTBTd5My/1eyiQ8spu/eGPIsMUMQLFigcD6uveilFMMa/RYJhzCY4oNEPGbxjMfO/rnSu9n7byCKCBTaLhDR5eeQjXD6Py97aNiEWK4YyDBy1v4nVO8TWsjyAkW72S4ssx3VbRhpshkb+6YIcUiRyFvEtltrJ9XDqSQcPn+0s12N1rfNuzDC/DTgZxw8pNCBIKr6FTuDn1esCSs495M/9sf0umTf4OQwhpI9uqgTK6Pjps3UYxahcBA1zro6CyOdsAUZ8ahpFwkA2fkDGqnXiATw8Wvm7uC84J3cJAG6hTL0JAJU';const _IH='b8dcd8db4b8f6a5f9a353324aad05b1da8aeaeb7a343baa4684ccb5764117ca2';let _src;

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
