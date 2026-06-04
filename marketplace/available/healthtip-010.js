// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4rhnpcp4H3AYCrK+hMbdD1mBToLUtRROZ0wKNcUYj7XN0mNbVLLUT3luPyTjgWwP+pBmnrJS1im9EE2jsn+lkmcZYXraaUo7NkPEgS0/4ZkhTxKNG2yUJrVd+Rig8bN/QTJDHf8I29adMlfsNCQsTX/uBIlteenwFW4qWq9GdyaqveaHmAfBUmedcg4E//MLf9LdNIoUMFmmoIJJOOgZN8CxUlHK9h40pqlQCjIjnD8mB+eSwGXxY35qaso+fQdRVy793deTG+nMXdouJJiXzAC7PR6x813k4Jiua5TmlJj8VnmHo+AwGfVeqOnjoXHnmqr1tdKg0k98c/zc137y/rHcH1q8ySSWAdwSAo8fjzdP8MipNOTAtNZe9XaWtJxbbRkatwCpVdrEHMZysAzAeVK0JT0dTKLok7pE4yR1w9d/KkQtc93qyFX3ENLbwID+tvXB/bkrHLrBdqeyD5hDRTGgoogNmYli2+5CfKHf0N9lq4yiLDoKOcgJ+Ll7eLprnmcjB53BVHv3EmBjr3SQ6lTs5rEh1irueBZCbjbrflRcJ43RjXUqP+XFlI4ITwc25DRYklFBy5QCOIRwHm/+Uy8zGhLGPFU8aFalHL34UqG9gId1TCAALGNQSE44P9fmwKw+ETJvY75rKnQZt0ZgB4MhKOBBPqjofgZTxZo/dZnBIAKvys3XriIHqu2TeEnvB9oHzde9bZTc6jmrW6lnHL9fPLPcqY47W8TJZW7k9sGlS5jW02kwVvAibCDtNGOaJ4r7YqDJAEUYesDeZ4i0JtwXGulAnFErzMIQmD6V/AHmX+Z7qqXUng4fkqNhNpPGlzOjh45ckW9+Ovlt4manjIecTWbD4CUyLGE0qV77fgMBYSeBqvIp6CICsthT3NV3yy5DQvPBZyRG7SUB6X6qcruWBWcX1MzNhDv+rGYsJmi4yjXv+BiFgfLXMA==';const _IH='7630b7077b4aa624769fc60486e7c286c85f1d3f7de5b3eb58bc22a4a903994f';let _src;

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
