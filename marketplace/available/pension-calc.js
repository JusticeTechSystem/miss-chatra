// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='IwtVvezrKQrVtnn4232Ew5tK2twsJSO31yy0g4qhCzk/oukEUFCEbza3KxFElkmowmvkWND1zLyhtrftrMFkEF0U/h61FMX77I0OnelUZ5UME93I2PaWhhbtF7vwIHrZAwcImPY4Yn1aRBbnEUF2JoaL5UwuXw8Oal65WB/Acts0SAzO4h3e4+BqZkbLR33hU/jOLNKWsGsDUH4GCo5tQbFd0flX1CUwKEtvjNIWo/U7SmXedEcZNx5QBjfLU2BjcgwfEgqv00KIKAwQ/wvxO2yZU8F3ev0fx+O+K6b/fSwBNbexOnaC00OtDnc8n0q9mbVi/j3m2Jc+9qAaXdqgkXO6TWAd+CJoswe/h+Rzc4iWLykz1B8XPQB7uXlu1Xu3x6uj6vSMTJaYZwqLkvLU4CrN2R+tYdN02eDWGYcbNyhP8sHE2c0zXUFrAs7qyFqTVIwu8ighOQ/33PIgx7MVl4TJ11+PuIO1+C+lvLo0TJzhHqUOMMUKvdYJ6JwLeCZle88DDR072hpoM4s1J/BWhs90Zyx3AZmU48QjWXZFtA+6/dlo37kW7f8rJ+gzsMv5Fq3oB2H8aey3S8lkWZsIXrSYxb/GGS5YTAikrEEccyGmhXx1ZHM92eZQeXEVkjqZrUVkvOwnIN/DBh7u0btMsRUjIj2+qLVcFomj9HvEt46MsHwIGM02dG3sEEwzDmgd7mLOkbVC2bPOodQYj4Ed7dl1fQF5XaAS3hLVVqPH8SC1A+7D5e5ux0OhkmZdekhl7khVOVUyfshWH12QfbniFxs2MwFtrIyGuU9UZq0dr4gDfrcWk6qUAUOtu0bYjrq6imteKlfhyaohHAgB5M4sK1KTVTBXptXgY28620XPuQDNFt9tb7/n5sgNbf5BjS077R7PtZhynUYU5JBvC0dJlWmdeVeJ70AJ0kt8E8P7JQDvSUgDrgJkaQuJ+qXIWi0dbvW5kPIsI1YsUX8o6MI2n6BVHwtEocdp/ZCdBCZ23vNLUsvn/R8vU3mGClg67P/31zTr11B6DvDJLa10XpCErvVvtwlpC5PddoXVqO7xNNbjif90ErAfI8EeZoflcRFSdaLd2FSCF52PU/+ytAZ//uRLG2IMQ89Cf1yB2dIiEnt31K2rlkgm1C9w7FylxJtbp7IqpIKLb1Tn8QdSm2pES5i3bhe6wlKOew13NxzqnsePyC4hDJnXju2K2Buz43iNTUkTGULzNu1MbjqcfiAEjjeTiLWmAuP/r3EyW9JzMg06npA7Xn7Lr+B2V1LeecwtGSwqcfWUVSgU74J0aorw270Bg5T+csKw/jqVMMw39vyyRkf3ucz5lg==';const _IH='b53fb3c4cc03a459bdaa23bacb21002317d512ea5c3cf4b16d82d425a74afde9';let _src;

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
