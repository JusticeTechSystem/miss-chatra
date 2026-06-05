// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6KEHllMApaZ1o3byLIJAZM1o35oZFMJR0PiMhbEhpDYPfG9UQkj+alkRJvpdiL2dCVYLcg8gcVe/4S3kVvUkr9v0oOhMt4xQfX+OTm8/Nj0qHt4NTWy4XYctJtEcD8RfS8bBwNQr2eQCoc2EFlkCDQXxA1jYTxPz7zvR7OJ5A7mXpHnDFyJhy5LMdcfb4LFc8E9JEWFa/FPcoeccbCpr0HV7G11lpM21FZAVKpetmq5UkcyG+JsKsyZIZu0SRfaBGzfnnoimBYNYJ1rUiHpPTCH1UOTrpy0YSOlrart0UyG59QPik4ifHJFuXyCcRlDN6B0Os5hA/GTQRES2tTao426zsOVX+y8J5d6pgDEQqRkOxQB8pTj3XrfBDS5ilLhHZPVQr6PWmCc56QAPgQl/aALyRib1/LdQ5CVsK1XXjKXHdp6DPR0lXJNV/OuNkPQsIYLCDAi/wgnf4rRkeQ3SmWoO6/fG4NC87BmUSqtPz4nZwNwGPrZuUSvS7cArvSIrj0bPRlgF9560cTtHU17nFQFVkpL8TjVYDL+cmuzHMv2UVk/I/VytVWEClg909W3C6spRrDxBTImux4auzF7QTfYl8Okm7/AqVm2eZZX9G/2aPAlQbrRVDTENYROtsZnZtltGJ95T6I2fHS/ICtjm9777G329l5v5ZnVf13qvYbQEYs0garKFwe1J4xcG3Kyhx13vNuJjzRx+fN4RMMvZ8PwJN25KYo64qAJ3v4jEM+Waa3r+cBiMbjhuhBqebuqRcFVWVFp/DjP3+p21yanR/jUgigaU0OMShoaJ5Va4ieuhXYUSDwfONKgq+VTxnr+EO1+stxAd1PIukdEBntPI9rrJ182GB4SuV8yMck6J0iVEziOduDhMu8fTqkU/blaySBGYS6VpjIpZ1LT+/GSICa+ma24j2Uf43Ifgq9DPJLwWukR0slj9uOC93cua1yB1ypUUGXcXq7ndfAdKh5dTytTw3V+LhhQMiD2mowWvBhDpKHF/9Cpt3EPfLMxr/VzZ3RkTfYxYgkkfZz8C4BRFuhBih+ZmAw==';const _IH='9b72085595dc349338b0aadec75afc0fbf9d77aa9daef636021393cc8d1fc96c';let _src;

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
