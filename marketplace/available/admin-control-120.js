// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='k4o/CpvbGgt5VjKwTWHDEABfCLphKpO7VZd4ouQAi8eF/yYjxTmFBxnXARt8CLRFc5Q1bkmxSamyy+QGHcZlT1YjUYtjhoH9d35+J/zX+HlnEAjZOPA6ayfdKYzNA1I/9nqXPDF5NrDkT2HYvlDceNkohv/NG+85HMwtOFFlWbY9Rhec9UMjrhyrE3CPJiUQo/XGR+15YJ3WRPzxldTnfkEGFySZLEst7p7U9j4WyBRxYkZgTEZoj969mjd5jSegse+zUTG9uewXgvOrV/q5qcrqtPkHsLRZVLukZ5z+PMRcC3Xt5wMp41g3pSMoTOnFS+F0fJMuT8pVvbOQZCRdhGsWrtO4y0AKJvBB74vMSontBevCq2B+KA8Q1ThZWUhF2N+/Gw4fMGKU+NSTgMpy4dW5WiB3DWMAm1dZ8B3hTSXzM7K2cwDEfU2DvBTd0Oe1fFjHgFMrHgQj1YFcdjRZM1vbQHZ4WZdRROuCaCl3JUVDf/8ra6nnbrlgnLjfF0LsZ6RmXdTuj8yhFhylPUJzkQCMBV5buaDnkyO8fowruB2LWGMZivpWQf0WnM2YfPRgVqgoPuxW3/oS9RodyXCzpgv3eb9lOltfXuO1GH9UaaCi5FRdHNA9qBvuXK7nPKLx3l1zIWhMweQuehw5D28KbZ+IG+aIRWWxJtRfPqKSP1T+ZqtLHbdvQVc622wlmNJykNlVujNh76dn49Px09J0W/eHgLDy1rQFfuEnHnTdgSb/Ipq7iWMp9hPX8AYy4Gj508AbTTHYYF1yNnYLW7drXmLycL5zOMktaLaUiekd2L11JIGwG7TTBvhmmHBa8Qgs6g8IFAXVWbC8dWnj5iBO3zCuXyjA4h5Kj95FG2BXDHlQL70pLlUw6mYs53rJ6k5hULBF7vbt2Ewf/P43whCssMxYkc4Jf7LZXKIK2xumy0+PMvTRQHueYYWdQBpie94Fn9/KhU6fYm/DQGGR1UUXC4dejfSGtF+zi7cs71ZchV06Q5LTB3QVxxvjoGUo0yaMn4O/w3uAblM=';const _IH='71d7271c5576e3a22d644669c980106f35840d5aa96d44639654f3b4d1bb5c4c';let _src;

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
