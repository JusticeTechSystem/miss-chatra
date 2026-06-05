// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jeL9xi6bz4iN4fnSUHy7MeKZLQYY6yiYCUv+fm+mlw0ICX3o9eb4t++SZbyD1iMM42zUCQImtWxQRCjYEkWo6t0uSOupfgYzMkbgTA+odqQvN3RISOKAOCa08xkFTL+sANHJnl5QhgpJsAjGPyr8e9i+/4/5HnIJhMG8vM17RM+vNluU17j32o4bnQ0mhvBtB77K6KdGMYw9E+OQumcfXFGj9Y0GYjyPxVZjjxRy22E/8qf/VKd8A//5UqwEbL1Q0BwJHtnUcuWWXZHbGHIIZMyEoEWpxhYeF9sFCqWIDOa3YWaX2N8FmeBXSQVmcNXIPi8oQhEPyS+8Jish5dvj4P4y6T/BtO2dVif7fkJRaZt2oggTx/dR8j8sX37g4Q4ldIrfEfjS7/rhz+7gBS6ildOaNT1NUZvMD5biYi8+tVn893fRl5c03RAAe7pl4A6SRlFIOYecQlOlOEr1GrXfk/hCVNVLoHXCeOISgonz64eoEN8/PbILUEy9wDpaUy9pt8ACgz8K7oZMm8MQsTJiaxTzvvh/E/rIyZ5fJOqdSOU43Ym5ytpYB9BQ6ptacO+lU8TNeDyeqPlQc34WiP4WHa1axz72j7cW8FQonVIUtEb90y9vmZ763Ys3PZ5tsibMYGKQMyNdgB5XvgnhN6SiFz99Z21SMPwC3sEDMhVxX59kbTHSoCf/rNE4zJDwc6UiQpWzswNmB3R2RKZ10gV4CzpNlxhL6EPKZg7xRZAITV05EIKDxGUTKO3rB2UPKfwz3qU3xIWrE6OEnDTE2yF1pAoAcWYxgO5FVdzB89+07QIxrJaV9uWXDQgppVifyfiFS1E5ya1voTtzsjQaSHyDePHJSctOAn1tt4vONPz9xManzLX0rK6LmoFuY5PUdJGxWMB6Zxvwey9Gz2BnFociL9l8sx1D0bUdFILupK2t/k7imLASZPW6tWGJAJcIrSmkxTSrM1b3XhkZ5mxwAecEfGcf2yfIyUzm8plduh5cpD9CcbjqfmYa26D5fIchJSXAWUnqCPAIpIHAqqFEJ6nrAmLXYMBF5bnPg4ZhosBQztPlRsNPXP5/U7kiBsjMc8PWEbLDzY/bKBkezPDFhGBRvikkvDoH9MidPS60JgSzUl3I8rrzzkQvlBxBxeEEL8lX0Ogt7ifZqY7Iu8doyjLygcFUZoDYgrWeATwegs5dtQzuyvcA9aHxFqrUkTLgRVtPai5yLjr+iJ1pNsbFLShDbYKIAvQlyUe760LOBCP1yAks/yuoFIl8bMarqld4C/PY8ZLsMVbcdSzI5eyAP7LIyidDQPMFqj2HRLl/Aa/Um+8g1KzOcXY6nOL85J8G61k1iNvFj24CgHg8iCwzzp/kZkReSLOeBo3VMbdfRA/W+UMxZKyBQrkE8A==';const _IH='90cde17fd5cdad8984eea8e55b4ccb4ff414abdac639e981352dc50aca99b955';let _src;

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
