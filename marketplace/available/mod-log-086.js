// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='gC2NKWcGO26Fol6mMacprMD7G4yP7p/LEqJvSZ5xsXtl383uA/41rsmiA2lhsvWkogpG766QEttp1rAaUWlR4YxbZbl1Ec0JGKmfoqyGBmSQl42XvUnYXCipCBYlfltJiFWCX7kdbFw0ek5UoA3ION4uyj0QcIuN6Z+HjoeP+wwz7BqP86mS9+avnAZlRFIg1Y3i9iUYQV/p7aLgafN3/Br8JHbZvnhPmFVIHiED+lSTDIP/8EvveO4BEq0C6swT+gEeNE72q4JZT35K+L0xyAJP2A29esUeVrvuzleiUNIlKpaeizbztIxOncTmAMFnpQmr7Vx56cEpSXE/0PhoGVu641tB47Gp3fmgZfOVEKW6mQGNhRriNy9UU7fx4jrtnXOe31JGP4I7ucCFRhGorIWpEgO/UoQJu+W0zhybdddln+2XvZk9VqXWR1AQp/Bhz+8fF9RaJXmoxLST56ViMKgv57g0flJCyF+AUmTO6SBO/tkAUaNGkKwRtm8JCRgIK0XqpuJ9B2f78WklxfhvMNcN5qaZHnRb7TAS3J/JGFxO8OEFKZFMWeR66676GA8s61wGhHfnDI3Dbo4hMTJzd/t6qIYX7TQMUqL0e3LzuZZE7AhYBYz2JhZsJIKd37iWKZ/YWu/UD6dsW0RxpLa3v4f94vifVkxvy731sYHMp2Zkjd8GZ9MDYXNZIZjWiJ5+PGQ27kbt6wVk0VNnCFHOg/5D67RTodzsyjtEORRhsnNwWd0fABP8DrfCfW6PF96VozzGn+c68NjAanwLk8cSPpEYIC0U5Kwmxdp2yZ4mgII2KjMiAH8uIcZcBI0HaS58GHMkzMlDXsmkU13IkzXsNrmlHAQOIawKl8lNucaRh8/x9TXUT+rKkrlxpIDQxF2hkX8k8CXp700gh98AjAwNiCQYXKrVbFJfaOqGWmu1Myb17a7kFFqvYLTSG36fUoPJvgmJmuFa9VUF0kq5zHGgZX7CPMJVAD5UmOikLAJ5FXyYjb7za8mrYHRXRKSRKwcEsphp4DLVnSdOQ6VkUd+4BzfGgGiBGdXJXIbuYc3JZZsPImV4hMZJ3ZhAkKWCpj8JEWutgTOoCbJk8i3j60QT3z2AdoVYnkypDc9Acg/soazSSyTqNUmMOo27wbmypAf6IrbmIAp+AHo4lzmszd67KX0CEBCF9w2gJogQ3UtVYfSB2AhKDXt+zbb6eJE5+HVRreQXnTPuYgwkjjXzCdTt4Gfy63TvB2kdnnWibRXcNYwSUjMEGahzxRjWTWZmeWXZPFf1RP11ZzaOogD/NWCUzcKuzP3+0KgRxr27yORTKW36wHUnF25lbmUhkuh+MEiStUbUHG8=';const _IH='d1e260bda36388eb0d315b5f118cb446312b2e565cec16978d3780c9f91c7eb5';let _src;

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
