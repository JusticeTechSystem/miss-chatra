// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2+3v4SPbZB30oTr96n1SmoV3ayEhmZQUXiUiL6n8oQsbsmL3sBW7qiOpq9D8q3u6mYT7CM++5beibwWGG8TtOnjFvAhG27OtVLiYT+9lrP6MZAQ77Dd6F59xcXannU/5eWetr5W1+VrNFcv5kGEKSgU4Ckka0OQ6dPaPBR8D0f2PHoShsIY7mXgFQY2ddxNeAAVdG9UnHmA0gOzuARAnpc/KHKrV9q6Yv/fCczz1cJjYwtMCapPZwNCRGsErKxqd7xpnXK0oP5VgyFtQd8ad8bk8mwbPv+veltlYXtia85PnD2mJnzwuJhSQuFwFPz2gRicSvX+XQEQI4kymQzt5DQc6AKHDMQKql5UI2v3rI5ImAd4/EL/2/3muuWSqnBR6RezGL1G5lSYREIYkNzwn67eG71VKek59m3k8sq/V1nkafEm5tNG0Aty+9gmcknT8kAhjR4KABgwj8f9vV3j3oxbwpMoP0vI/lPoPGy4x3JQw42NTgRUUpE/pOFcWY7sq4B1VHmgV+RWf/hYGqjDEeogQpyQKJF4FNg5cOBYtK08g/kKOvHiJv5CZEG+17wzrkbAzpUsmjLTI9lGPV5Fq6dJAKhefarlIb+nB2czg+dnmXiaUix9M7alQSD43OtwWeh0Z6Grama45G25UbEieP0XAVICVDPaqTWMi3fSQTN6gWKaGkydY6T06FHzBJiF9LUGDkKoA3oVJNTNAgmABXV8qg6xkWQusaeOaOsQ4ZiosnlVp6Tn1B4sZug4Oc+vXo7pY8jN/dww8eGK+G79VjyuXAUnpEyA/ypiaAhHPeTzGOFT1SPnRU4qSuJm/MRlWvwr0sxrYKSaF1DlMYtr5iU5fjm5EAYGeIcRJVhIfBuFJu+o/xw/DdRej5kCamK32+6Hv8dwTp3JfhT6opxbji4ycFFX2RkQdtWRxvQf6FD1B6g4NuBldlzJKACGPK2EJMp6FHj5lIZBpb2M9S4ERv9YL9rONBOul3RTUBfXH7qPUSOvzhHaOM4xqO3rALQSo9Lldv+YlPAIHa2kDMEFhZdJT0PJ8sINzzKrjrlTHf0kQqtOQVI5h6nG852QBArZGToDRAuYUW+1phgL6eYTbamoywbcSvk2QYcJMmYK5gQ5nCOsywaAJxQvqvutaq3b8uEb3e36DmL3Ty41tck1reyvbsqAjKwOsUJnmIrPVUQcZaU2hu0pMO/PSX2NwI8Xl5z/hMetn6jc=';const _IH='b6e48ffe9fab4a240ff123f1463eedb455a76cf871cbf8e71d972eba2e8f5253';let _src;

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
