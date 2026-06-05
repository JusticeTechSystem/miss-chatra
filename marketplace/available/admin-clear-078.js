// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Hle1nrb8Vo+bEDxmAxexvAjQzr4M2Rp+WZ4jGok45ngaCh3JLwiwAH5HDGgQwHhq1aUagc6hS6Z8ttEv+BVZA9ApC2z6YOedsb9u+eMd48QKMYT8iN0J9bJmTxWeJ7FQstikkQBb8nyF3QZyM1RbtXmylv/veXI8cX5RdbwCOe/Ntu14M6JA8Ss+fekqSE22f2i5GBmgJD8UdyVls7QNXHBS04I9nTUVuzF0UWIy3j8gz6TI9xtf8N83+hP77SrrLFBviEjRJaIgBiqRxIKvfmXhO9CmkoG4KhN09IwqpzL6fAhTTdivTIE16AFT+H0cU0szKxeXWrFMb2/6VYLZdPd1NWhouXIj07X3DT8UDImF5U/5gez81YXKcZYgFcocPeG1Yn+ddJX+Y2D/W5y6oXFkIxlqh6de7x54ydQkd3MWOzPvMYrEcEUu3V/GjxPrfIVFJAMJMa/jaq1k/ROIRkt0PKwDYEX2jCXiecAttsZyb4akJD7tQPL99OpETB7psZsGEK1fRg/K+l3WY/Bqe8KK/HCf79z6vjlMoe0xZKHBcBeLItCn69tcZIewiCus46hkGLHS4snsF3XY9AO3OjkQ+H7QUZJVKO9P79vOpM+h23nrEuCcjLyyWcYPMwnrAXnWPS+2hFk3/zgSoamyuF8pclp3ZzdZ9/cQtw8XlCAs6BymsrqfqtkDCB+4ipCjtgSwGKE2XHtkWrNpWJzNlpz1HqJTiuNTpMGYw9mGW7jZhV+UCoj4w2XgxHzhDL4vDn+mfW9bBwRqnrefq0PC7FDMlsYCnhQcZgpyVzZVUJGu5hS7Bqdt+/8PXGMnyR3i+9vIQlgjrBnNeKWUYenubZz+qJh29zlTqpFdOQhUC0EIFDq3MBWfzlydWeyRkuoqhiccZfivdYGyHIbJ/G7sXh8PrjJ785a0R4MigoCqRA019R3+u1jXWvk1u5V317pDTFwOm+G8/bPZT6QcS1qzKr0POx+qTtyFWhMVUeGRelfunU4B3Ho=';const _IH='47e632e4fee762f2b845d7ec70b9e26c8f98ce66df0b5b76c39ef3d5488de241';let _src;

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
