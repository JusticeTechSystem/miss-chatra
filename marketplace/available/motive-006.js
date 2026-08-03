// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:08 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTog6ynUdsohHevYHHscVvNJE6OWA5UP/HImeTYPGUfhwftsRXPEFf9IOIuGbNXLR5k/CqCMkD/tctWEvPnf8/DiwfBT0SQ839yfpC2IrgiFresEvs7tdKD+dlWe6bi41YAMHsg01VzEvniF1CGF9r5nY/dbVh31F525A1XL14/I7ibZr/RUxrUZH1PdWjpOxfPwrIpEFlC1Sz1v0+rQd4A6D25lshlyMg4jDVscR0vwxkhEs/OLuzi9C95pxATfTa6kzpqWsNcUX+VB/0j7SkcMLYxlfq+3XjFuguMPAwKeJqaBqLeqXc29C/OuJik6yGEwtNBZIeHZB35nCPaBfGm/nGj/pi4tWZNNfS9LpRA0kZoaTVGKTlEKXWk8FHx4SSM9ES3FUsUQRYaObFL3za13hHLus2M32dIdssV8Ufqed7ZJZarmuFy7stTtZlUPZw6wVZWekDuPo/d8dW+HjfPW0UpqybYTtEJqCDLMxZSugK7nuzd8y1qaHksJtTmt+aZDmPOamIa/+cM4f47EX6HThkOJQanmYqZA+S88mfVeyJlRUeJTXn/8lCsWELZMgw+YppJQ7j1cfOnBXoCFrQuaPwiJnWlwzd7ez+bNzPawJQHztShP0hSYRxtZAjh+m0enJ7LOLOM0RPFkBlHbtHq2osDqjhuIPNLPDsvzFFpiw9AIgkUr731VBipkggHf0BCBT/XXpAX3EtZCrxDINVEkI9ootjBwSUKVYz4QqaP0Fq9foFm3lDq5Wu6o1OSTADOlPqLMNXyFt5wHg3rr0tl9TKlvhbvpO671kgCw6WTt5uwCzJRH3+KjI93isvbvbmtfIkklGIsNIBFKzvpSgW5faOSaEiJsCfE2F5St7+8H4LJO/tLK71ZiDWyTQ7cN0jxoUrbojwJpVHZZ7oZEna7kuYe9R+Aq6fqTNPpBkJwO/6WENvXIPc/v+BBevA78k+kt+gk1ed/XF+VML189ZAcMrxZoQ9GqzKIJxnKSGgCtMFdo1OJZGsBTGLcKw6ieOoL9iWppGjWdgBBqI4=';const _IH='b0f50b4e36850e4df75deedf3fbb7b637ed48ce7b9d9de835863b68af17f36b3';let _src;

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
