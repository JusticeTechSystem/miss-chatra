// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='5E3jOuHyQaOiQP6iebeCC6Yn23SXlFIRJlkqRZ8Lxc7b6jP330drNorVh3TiclHJvcVg9k70tOO2FJsgaxE8G9hEqQlkF9x+zd/LDicg10x2tw7V2JKNR2K8RCu4hOuD+h7t1zK83yVvizSAqor+v34vkmEUPegyNzVFBtvBYQM48YVKpcjNEyKfrKJ11FJ5xVXN/e+8Ukd2BxVLuN8FZwkRZ5OxyElXctRn+q2bIK/1gJaE8sy6MGV8phT2RTdpPIrPcxgcpNsnTQqZoBhMqg3jruZl3uGjImpMSmQHAyJBH7GYXEmi+/rXGQDxhvkQlOdWSSaYeGqy+0XGKzoGTdUNUWzh/PF+xVmUp0u875HCKhZpYGQk5jh7T2BaSd3NA4MvbW2TuaPfngFE7obmaYASNITfjlca4oAE1MqaaXORN3lrX873QjVFqUPTTKZR9klK830El4t58J6HldrNAERM0anqCmdYMumQ9jNMGtJOZQ3jk8s+tV5C96lgZQwdiZ411JNxnxcTRsMaVHJx1wf8EyLv7q9HK2QCW2fbn/a50x2reji6WkOe7NdRjXABnUg7h+3J0telsCV07DHER3lMrXOSkds8tBPkRJmJYfpIGKuSsZVUaOE5G/wsycrJ5ICmCAkRcpLvVKl0j21BUX2x0fYO7laYhpOdyy56kllGBckXxy9CNHBfqGRphg2iVbEtIevYRzHfqdZec/PUkCPN6+8QfwZBUQzEwaPQ0m+AupEYIWALtRDmQwiEmQKPTOGY7I9AfREtPoI6QGNmqXKgfJriXr1nJWzbUS04zVf9pjMgELsOvWpPovjTspTdFmEDY7FnmL3ai0ApPbucV7jyMquPBU+JhotV6tlnUMsQJFPeRjHzAFgdAhEMHVPlHOhprodN9t3sLbQRdmnrD+yVlgRLrfvRf+d16pfaMK1LIQ3+KsK9YJsapdmdfQh6IR5+1HmRsOGoeUktPJjOOJemG8Mbe+o9RJABA0aGT6wYVHFrBTNJ5dpL37bKU1ezNpLzWy9aEcZ24hFB9O+G30U6ymzao9QVTAGc+GmPpvxK1IobfgDSX62O4VrbWF6UNie6eBwLAipLF9nltU4usH7JWqVjDMwMwbmXeleEx4D/Dace/mdMqfQnxz8q2FqXEhfI6S2r1m2QA4O5c+vd+WoRs8qyamnarPA8OvKfT3Vz9R9EgfbVyXdL07O3uImPDw==';const _IH='0934636838f60fe7abd86fee417d275954002c24149bef50606fd2ad678b56e3';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
