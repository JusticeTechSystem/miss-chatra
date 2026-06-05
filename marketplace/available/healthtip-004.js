// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='o0XbfUQRGFl4Uy1Nl8Tyz3mlnA+8Ma8HT3KSEy0q813odNXJ2yTdqGoCfILg4i4GaVzeOYE+MPQP7M5MiH7fBKnouB2yI7LjDqcy7wvWl3ua4tVUSXQ6fuNHGV+WViWPWl2yGtBE/ASpgTVUtDdye0w/067ohRWPB5IE1MaWbiqyaIi53ataj6KjqwMy78QK2wSoXATzrOY8k4PG1YUtrYzLZfqcDSqwRIaJirSx/a6dovMoI5Itafuc6++SlKOW4+WsKGpT4DQbiGRGQo5X44BfOpwzXRB+KdkQG7k57wfUNHDI5VzeKIba/nE0tJavQ+45IRgxiA6xIQJHyiPg71TcFmp3avp7dgtoi6dI48OupRM5oOPsFgOLVLST6wHTuaX4B48FkgQAox/0G5HHJB9IGcpgEx9GcSfdtLoqsz3p1O32lFd0qfhKqBTbUM2fSmzRrJhprHhezIVilAQMcSGPssSY6F/Va6HFpEgk0wEz/fN7NJ8eKolsG70upFFcfcEGNOAop+2FSUESKgPczuVQ9rTzdPtySO+q1LqTjx7ov8+0rQGBnyCTL0wn/hLzO4fHTLtCUapmF3BVE7whOk1RRCv4rdTRMGzVRau2uCkIJu2tcZj5rBi1C/i+Wv2ZfmDF7QL2UjZCOKPPzN+xDD5hm9O3LofrHnBuMIFLm6DcAmCP9AMYcDZtdDxYhHZKvGte4OMxNCLjCnjM+iT8tfiLPweVCxfABlLqpCsypvvqxc8Dib8Le/G0iZwKzkcAB5hYii66XsTmzUqRo7t1PV7W82F9oI/+qKNvuYRWUFhgUigAGpVLXPgOSPvqP07FOkNhFVM1QWpxYfFdj4a930MMmV6SxGb49eVhoCYi3J1h36fhUmz4sTrao2pJwJru5qvOXRRHAXRi3MfpSbuzoMsORrruGD+aAZ30g14oCQfjYHbYYsFCSQ==';const _IH='267b6408d7f7c910808ea6231c332b8f18ef6899560e1fc87545de4388b06c44';let _src;

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
