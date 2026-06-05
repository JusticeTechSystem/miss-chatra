// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jlKPuw9IMr8QVLZTmayR3GqS40WlbiitqDoOFDkffv15iQVAszqaoMqKgcwkjW3RCb+kzkYUmnYYmICNDgbIf+IBLLFiIDrcoyiN9IQQdlwvVLLrUiu8rWG8cNNapsBWXoOGSViHoa9YrZnL8lohATqqM1da51P9FRJd1mpNscVAY72fv+KZ2J9C0xi2EiplRi8hGE00NWVYF0BQGzuknKaTUx/XkvXKMuP/AgzluLCh7n2zaR007+IdHYwrKSSlz5eWaqapjJ/CJ8itFChYoGf0+1qFoSy3d67U6PCkV+CVBCZuf4yUbas5NisaQVMbgWS5nLb/3ylNsdnhkGcMsHVYNmQvHaQfohJL19UeYR47iLidds1X/qMLTEaiMJfZyUos1pXrYfGn2U7p5az6TAWSENEJE4MqQjrNtD1shKp+cXMDhYbIMcGIFb4fpOkydOeuky77GwwS25pKew4mrGN3xvWVF1zXnqX9N6YKOgyp9er7nWKfaZjmZbgTt641DAsLN1cuqAtQmMwaSeFLGR1N19U30yZHeK6H6rTcUfZ4gRaG1SMg4dddjjpDTd/iF7R5/50spyYemOy4APRPZfS8/1V/q7DihQSRuwA+OA66OlQQMR41Jl962qqoK6AdgLcEaNYzIfreGp20mea373lKWqkI1i3sVfQaD2ETucR23TLzJSITmzLrgJ3dhDN35rm7RTOTpf90eIZcuMP1Hu5W7OnDOw2kugh7Nq4FdLcuzRah7G7DcuvCtI0TeQ6hEFnhcC7XbtnDH6NeMk8J/d/vXubBgDTODIeH5nlz6dH0l9h9mIX9TNmiVA/FQ6nmVE+N00+1KJjbLAvUCR7uedsj2hOiZnttlb3LfB06jJcDCMtRjQz0d90ipKbwdC1DgESCgHsm75xhPKPgNgANuV+q7n5L42WVSv8qmaEIejzjhILCxs9pYNXatsR3uhhYpvugUoKmPndOWPTJ+weUIaEkk14aUl2r2E2firDg6jbpM4/a3+tvhSKK0I/PExfTCYUCmGMMRZ+FVjgPQgJ7G+t9D3VbSVt5aDhFfd8P2uAf48xkHKNPjOYnNKuHEMB8XsMBKn+c1xzgfZKC1ip/PLcyXsqyYQgc4OUkCqG5+UmnPLTL5DEW1hj1ASfeQtQ9+FtdHZIi5S/TuRtqiDqt38CMTNQBBh117AMKAV1FNC9GXCZc7YwqdwWLFfxPoxS6uorRrUbrjrhUG11UBkzM4NKyLtW4+CBoXA9wYM4/DLRzzOZZZIUjZwFa6xcrgsvU+B5R5+MDv5oMfS7g0zo5eAe47RxjUsbBA1Rv1mA5p+9cAGPnsMMMW6Wwm5HSw6BEhTMw+b4ANUZkmZIWNSyFWCGdtnap3lrdX9L6zsO+';const _IH='5169fe21dd67dbc969a804bc7d443806364b2dd51877b0d46e5662989629a779';let _src;

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
