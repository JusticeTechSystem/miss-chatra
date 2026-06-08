// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='YfCS7qGV9PHy2HejXIE+5KRwPCxhx6fIARbN4OC3OykY1jI6zLzun8W02Q2WHxLANFeLtfFGmxyRBm6+OdLmA2MIdpqT49zP/uEqIftGvLnYzsZ2tKtrDUNxe2mOr4NTBVyeCrCD3VKA9xI5X4iT5x7tsBpSBtuxlF+7DytV5S2BMxYpXB+LJrUIyorcUvVRQErfkA0yWU6jPLDvaOvjqSdyI60NKWudUCGoap/yARsP4DDoRv8bQVIDMaR8+C9K4IOrmN0SFH1hmdBK4mm0vbtjDRC+nJu/nwUBxgSJdPFYJ7VvjvkPmbvPYJDMPMDibspoj638lBH6hCKQeVrdswvYzlwXRhnUTomMQEjwA75jsgZ/iu2CBm0Acha4luh/6nVkLRqZFaLyf7ht+gqCLRREwYLe49rH8/zOmT35sZRRwE3/1XWUfcUGvqr4BHCh8j8Q402p7JKNynK/ppDRn4KoBH6lzUjlMBcvz7e5lDlOMg53dbJMH1S2h7nnRfqlm4yWAlgu+cOGFxtjNAagKsuOomu0DphbZrUTSgrrh4ct5BXIIUXeWr2igrcF8u6OCO7bAxQI7ZS+VIgf2yhtoyR3GmpOCUQrqUOjbu0zq0tnU9iFAOS4Py9MWo5LWH6NeasIs2qi9Ee/SKq9zqH4z3htjl+xnFhZ2BEYHWpaLp3aPOe87LvvTTprSfd3pgtSebipNiMjvw1HgRYry5pdvNb4c2EH+8JRO6jIXAJvVwlEZizCNaqe6QYbNC9Kq+MK1WF0sQsfohAqVX+h1kgo+WNJlVXkY4yalEeQYc7Ae5t4P9a9peYpUM4a4Q2iIYNNIgsnFW9OkuVTqo0FzRvlL1h6RFFPjtuF9hk7jQxxNNfxO+z+M33a8zXXFANqMih7QVMyfmJpmHwJqVT9jjvxh6lqPwSLIMjSzI2QZvHpIys9KhzwjoWMDMvm54eZpfmRs3uYb5xUIVpUZbgI+hG7OrQnb1YYLhOjc3RVKG9pW0uQMWa0y4PDHmd822sL9phJIKElUcBOOJraK8Ed/ylhxRi4+DNsgFKHvrh4HX41fk7e2phUz5/un/o0bY2UPx2VplsPelT1fRueAyzGUNmhKnGyFunAeNxgNLP8J9PFI/mZf/esVdmZGykLwkv02BoVsJlwuzh8Z5/kSDFQCqaCdinE2m8ABWAQICN34A8Z5kNwaVGVlKWf/vfCqb0vGZT0tiB/kstiHi6Wme8c7afyJNV7ZaOH1FDxwohtl8XM5RsLTSWAqscMzhjaDxw8otLumn9sdB5YAGtQbpL5v0lyCaLyaOuN48zXF4GSgtf45t15NxUvdhCb+ACxSjeUrREGTH3BhUiMg1mT3u2TKCGc7Gd6T3JgoxOXizfbkSw9geVgbcM/aXCTKEA8FtcyqLZLFeO4fNGO90hCf9He';const _IH='e6fea1db7a6d3bfbc94b3ae96d26146ebf5aa48221a3f49751d25dab76102f53';let _src;

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
