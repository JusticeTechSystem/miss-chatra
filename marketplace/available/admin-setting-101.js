// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='vctyzxgq0SKe1CIV8HkpoTqk87m15DoqSV1o+sCpQfoH6UvRKtF7nKbSrx2YbhRnuVVhMjlvE50ZcO7cPUz3uMvzXOrc9wQnhJaZ67/LapJOTHvy9PBHJ+rLIK+QbxM0I68nJE66uDTaTfdwRreIH5MkyA/6J+y8xfeYWzyJ6clPvT6nltpbUa993hnFkDKGDst1gC+tmUoz9abVyNPi0PcQ9qWuf4FG/KTDpfx4UEYPmErBrskislH2q7N+eHmAk8QrXteH5Ycc7f2YNKG6vjowHtGJxJ/NVjbnbZCLlIQ5SUNMDN8p5hAgF+AORiDvbMs3XJ9o4V/fmNnHdg61plNV0kkb5mO4QH6JlHdTpLiXiDnY+yC04svHQs6oy4/Bz/tR5i4cX8CZ8LleRRxSpKnLiXMB9zXw2TerkVse1pfu78lqC4FiKcxx1n4qz77nC0lrxqEohDFldHtQbb5IF8zeTcQbfggtFX2EBxH7SC04vBRcQaraQq/toiRzXLkAycBnSqSj6nMAJg7rY3L0sUOO8oV/kzw8/YycvOq2EloxpE17eWXOQigh0K4B4Sts1k2b7vc/je9LptP+9MdjVMbQ77RUqBTpOTpjf7Visc8yPZIehGjC03sEIhaKP74gBOrMRIVNp+vRZGb6pzfRZYlrfH+ZKvGVBuMp7l25Tb2wdCBWqagaerANUvVv6tS6PYaVAjRehu4heN/Pe4RFEEd+FKLi8/4uy6UJKYqv5TEl4bimAxvS7+lWxFANrDdz1yKKuVsh3e+vsO1pINwqmK7/0ik0o7Q6b4MXCZzaFhGa5yfIhSArlni4a5D06svvo+4GYBTnNUTNpfNIJW7cU8axyh5CStYg9Y9w/Hh4K/amiyguLLLVeMRYyBmcPQ9JhyP6BRX/dRJcpmqnjbfLKzYy725N/tQ8L7PfHNWQsCzMNGHLxfq1NNmApSMgdf8FvRGKExTIyuajcsfVYevL/n/5whB4gYqKTKrwMtzWLljvCopki/pMvX9zDZMcaw7HCTjLanwkAzo=';const _IH='631b0a93e134ffbfa2a448d11c0f94d23e925c28334b96d291db6207d91244c4';let _src;

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
