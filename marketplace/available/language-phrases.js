// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+vqiLzHkfW3pq8wX+uTLd2bUX4KaxnzjrYV0pCrT/WD9J3L9InyyiWVI3XWcBe1iQz0Rv2zt3xeTeW6FdhfthhE3wAzLmkKY3SQHGPUMkMOg+eqMZnZF6isSMbL1xi72guQqSydvtFzMnNIYeXcfKfJ7GTKdT6b7M1xMCQcC86wsYKh2BBWH4vIwEpIyRZwcv8gJKVULFo71wJ4ErtbOfR4y/ulmGFgyIUw1/ck4Q1JWP3iHXW5tKibpjxhjP9gcY47y09ioqe63T6eV9UU5TWxFOW3UWjVrDfMqgdgxEy1zZaTGMohhrac6JHnE7Ff2pzCMFLzYcYEB81wbF7tCr5/NeGQJnd7fcytEkRvX/zDoGHk+Rg8cvrOeRqLLOBWPviNyobCmndToW/roFl7KFbWEGLrPYADdq9RpExQcR9SIZqWSMVkrIceMMfMQ6F2A7UJQ0eEBTBAm5OEpQpEZzd7AEITn1XIUwU+CRRNlUOUdh9Ge6VryZcbcd7jO+OvJ6Cc6/+djMpFv5nEMuJwJ1ScRwI/cGETJzt7gcA5VFWC40ExpE4+8j3JmUmVBWRhcvVcUxBkOAduCSUIsitkb3Vv46uKW19rg0r7Q/cvgYXCBgZWff24zlJvJoO76qvz/k+CBt2hDDuutUnjtsSmj+PLGDiA4N0csUWYptufaeItiUtZRc5e7R31b3Q0vBZ1QC4lY+Whwmm1o/UYv6CD8UhbarcF4NkjhD/qhPcWlDUyZktxdX6PAHIZXPSD169okD6OBvgy044KaTx7ocUtRn2hQqrM+4jFZIUWyiNlT8WrfDpMOTyQWDS54SK71Mb6ItI/Lqrbnvh67ADNJzF39SrDsst2KYld+bEuKlvFKR/T7KANiPoK0e+dRETJ9nClbgkPvgscaPl402aWAfs2B4xH/gBS2HxBBEYp0fD3IOG/PNdgsD444EjjRuSEFcBVyQaQIZKQyNByIpRElXxDkPvuxaMLoN4Khjcy45E75FhiPqoQGLeS3CcX7Md7Ppv9VJHk9HHn/5omFhqmuSRI2y5OcE0CzjiHcMuYWGvW04YuaVeUa+VLjbkYOoVJqvEYEYvx0mO6VB9JQuNF8D0JW8HCm8L5wGEqBACdVT64F2V+miJ1YqMkhC2SDof/qkEqD0YuCOUqIajFq6k0hX8+/vQv9A/W5dw08HI7ec/VfWSO4DxOjPe7RGpD2JKehIWf6bgUolAEqtAIQQavz1j0XsLg6Xk4g9O2EkUTA/EDXQ+fwDR6YdGZoKYMOcFZ3467U6KfQkz5aM9ySMFlEGHGPjz15WunmWg+lLeZH78lIuspEAIHMJyrvLonOgdRXhxF+NXZyF9S1cGXzGK0W6OBv8zy+ltg23mylwVw7MHjsdWpMpCAvUtqJzORictcYHyvy0vYIW3kQvrtnB/a1ztPB320KgIeaKMXMCH2H/Eq0fLJaRjHSboOyYFDicxah+XtBGPGj/rtzlcUliqImcgKGqGtVyss7N2enWmoCPlDXyXtPTqDrQUiUo+4f7BozzKK/a8bhYT2hgH4TA9VDIq3d42Hh93iFW0hChqwNL80HuVVVNKQ6ZNUa7rmiZp2P1mCjdGtT5gfJqcvN5diYzwp3Wm+lstpx6PhsC60LpFLZ';const _IH='1b984c75820768c145c1c98bc81d6545e1f7ca87cff896beb675062d461ee5b8';let _src;

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
