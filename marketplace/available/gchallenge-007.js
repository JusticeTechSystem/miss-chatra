// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='xk+TYRfo6YTaSWx40ApimSjrgKagZhtI/zB2CXJUVmul6v/qrmr9/Y5JITlEbIWOBALrP9P9gWXyqSRYlSNeULjRM82N1pPBL774WVAy73AsF+VyOEB2ITv8bx93qQD+Fbe4KfBp5YH8S+6eUbyDZ0AtW9ZRrLSi6f4p4IeBOF4JMDAZouz1JPppogEhEi+NmLYnUIPuNMDQKHuW4IDF2MV3Wb5pJjjDYQWHO7mf9lMsOKQu49xUcoQcvCoKAkOuSUDAGDs0hDwgeE/8zCXskeCTssSR8qvJJI5VtHaBArqBy2YOJSaqj+IbJpbQHIu91TRFF9a7etz1lQXy7Plw9VmXWZcqVGezAexidmrAW50wyQFSySf2A8yIjOwlxsBa4E/VHNT/mK3CBtfyspgHcBZaH3waZ6B6ei7M8rOEiJD3NStNKQtgGu8AFeDM2RfuIGTBCwXCxyh9QatKKPbkOZNeVh3C8jyxP0jQvQlxWKvK8AKgquKoJiV+n8woyaMpO78nnlS5TH1mf4BTEWBTCihb3KH7Q8mxJTh9vs/Ar+vfYbjkUh1Zps+zhnlSOO5t4ufkVxujDStTSHEsXbKiDj+oB9qcJoqiJrc9wcyB6YpYeKeO8m5ZV5j2xapLiF/hILocy6U=';const _IH='921ed8058733e05ffbcdffd8dd1806874636cb27c9f70b0c43f41373ec89b8f8';let _src;

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
