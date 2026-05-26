// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:26:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='8B67MIKHY+Bc2Fa33j6XtKbBiWfMRMLTRT6ZToFkyR2k9oHbjw5MOLAlIzUnGkyXQR9egb+9ly/3iJ0vdTayAJTXN3Qpe/ahmU/tIFcR1L8tRCGlyBRhE91wzOcVWX/6OvL2vk7Lzh43k4ovOOHVciWL6pPDIrry6enwxzIVjNKrTBJE++P7zgCmhMAr9SfPdntxNnCKspN7ixXsTAJtIooRZInynot2Zf5n2rI+pE97ACkIPD9nGcK6tBIGvFhJc2s1XSHE54q4VqXubaZ1y0BUNzdl+ljugz4frRvswSB5z5WeoTBk7ZWQmj+4OSHC8Sl4OAS+qSGB4JjIzZJPl6z65FLfXXKMXScxJ0KbjQ8nX8z8gKcjOKsiImmGePx/Q6VJ54vrPIyQY98MDeX7Ng6JDXs9OJI6Y8oC62FihbNlji8JUY/vdX1joBGKK6g5rb+QnTlXKeYRXod7K6ybTZoxTSK8s9XcogtkgihGVswdUFMzd5oPk+1NIVG0wMJNhADONHZl8SmXiWdzYP5j79PEtUFJBXE9nXzs/XEgn3YfY3JWy4v00iSn6yFNzcuv8e8nWBIguCXu4ZNSyxBYVsMvha2ieEuWH2aYNwhCCi9yONLdkNWihPTclj5mcgpGN+iCTWrKgnxvzxql19MaRBxXEhc6/8tujRbiPGg2yfgwhgfLNK6OLJ/i+TeyqJcXupWo35ye5MU40fQJifpIElSLxR6Td9fXtI4Fe47xtLr0Ph/8t5Yq0cuza0f0nfAKGua0L2gqWPTQMjXAeTevN36CvgAH8eEeIsRVnTJkC7X4Yf/PG34/dXhojNBNmNmS7Jn/jArQj3RrYc+3S70+PzNpOeh78XuuT8v1oTmIJHWftBv+0edb24nhOsl9SlBcyxIUvGTkes6nOXqWwA0hSILsjahjCZWyiBhvnwo6SbMDbTvAdnoOQEQcpSFpD6wZs/yCOA8kFeKNpEBzSRi6vm9PitD78CFXoqrJ1YzTN/J8gTMEd0pgP0JtZLB0dMx4pCqx8KC1NXiLgFQqfRyFwXoRfEYrjyqZOuMlZiWBlDIMaZLpTAVET7ueMM8P4Uiu5Rdwzx6W1IUsnK5WdpAoZqnBTDAEjhgJGVHOKZvPN0TKedtrmJl/Y4zM/dW8dBQf3ns3Qcy/PewcJUHZlY9k2h2CMtd/RkW0Imo/y5995P6KzYB2R4LKjdhOWH1k1vGGlWEqmRaDtZTVRaLRxZHjFb+wJy8sZCAyQ5+FEbfDd8gHql6Up79i/qAgCafBlHCsJfnGaEoCYHdsMzcFPNB6NuhXmkgapcsMKETSpr3+DS3262BiTbcZfT54dKFbL4iOm6Tfv4YvLJJtyoQXdL3AGhINiYnqUuJujI/CKkp24hZ1/q5sxOcVz2R47UKqGTts8enL4MOngdIOboAmIgGDiux/gtYWqcXm+8mfVce6U5jfEHfZznWcERzqY5hW15QqoBTuji/eVetj6yrdXrhdTEE0Hlw0JRhJCG+acVVs58vkTgz+N1b6zu8pSVIRhiz8W9EDuHzAfh6MUcop6m0Hm0iDXTUV5nx3XCrnnBEfRfK+Ai0Vpu+vPx37UL8uW9vkLDhbwbLdAqQg/Yi35NlUW4uvbezuIZf1kbtxpVQ3VC51uU45ee6MAP4okoVk9jUxcEKGQKBnpLVtzqefwddA4IAPK+8BRu2m6is8d0wnHKrSunJgRsnn7EL175j/XZql4futNnqkJdRuFnHPqnIJ86BRjF6kA+Jrg9+MvlLgJAik2wggIFuhIrfrK+cBcNtAw1CWBstUHtf5YFKM8XNcH9kLrLd0UZ/bVqATQCvz1SuQzG7ZULuy';const _IH='4a2c94e41c4ddf2db98ee01fe848b6d9fbce78a31bbde4c37020b51feceaf989';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
