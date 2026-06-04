// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='pJBU5Q3XUQGms8R46u5ERV6mqSvri+7VaU7F+vljEmrq1Cos3rXnYFHEY+aziWxHsI+bgbJh1swe626dL/YCE1mZ+XeGATtHAqHld50x6mpDIGQ/eYiG0TfuyaxDgiobo5hTpI8gvGIHnBrw24HQUNyMRgKNnPERyqOGqc4K0VybX3WQeaDLIW+/W3BcQZrBvgbCTgCCNNqQDko9MbVM1+hmzH1zO8MzVXWqKtVlLaOzRt260ae4HZ+XVSCRb6YzKC510uirGvrgrM8zqTZqsapsTu7DXN8+rdQlezdV7oFGzbc3jYLjOOeqd5+4YT7sYOXZVNJh5LjjE52oBEFtn3/mtAEJ2j7aRNP5KLAkQvBjZRR1njdw0bO9T42NdQeyq+q4gDeQ2BaztYk17uU8wgeeMywwvmKv2vzE8chrz+/lFGWxtQAJqx//OzGL0r48LdPC0u+iSmv5+4W1oDfaXISmYRIfZWht5++C2a0LZEGpg5PKeP2skkn7U9/mrr9owZvbA2j/nl9Q+4zUGiEwiB8zMvIJ0xN8VQnXcHLdn9Ff+HwbyLupaC+TMg9Wm6uA9lqXVQIbzkNx1g+O4qag8LIytzfsakAAm8BLQgP4Gb3F1UT/FRfga964B2qhERGsBKiyDBrNZGMMe1kF7JLYQcrF6HnFPOqsL3IBVp2oNKUGLA8fl8FKkrJWJot/EkkT6Nq+P0nmAVBuX3qtI3ERRxk3MErvKoK5iL5zcT1x0rWT+VCN7GI=';const _IH='96ba7b4ec591fdae4de00bf64acb8d343c8848389eee800d2d46a3e1513de153';let _src;

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
