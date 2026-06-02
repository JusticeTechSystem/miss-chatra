// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/5fIj38UMAbIOm9BxENlWa9iufsR3+QPoEqEdN+lCupWdOIgHaARJPOD79j7rvay8NmvNdfYNfTzG5x0z6TZQoLQxHISkzqvo3EmDS2yVlfocVK1fMI/T/uUSmtWcrhbPTwxg07chOa5Uhu/qRIis3QEeSVYUqRzLizbwAKPKW4uTTw5szlTlhgno2uP0tswWWs+c02tfRXkuDo4QHvQ0b7wftQAkiyFn+Qvl+0EZgf/Z+/UGfWf8hNxQ8nOrWjuV8Y6nPmh+9U2CQsw42HyGvPGgmfPZYktqfAzSAbl/2PLokeWbH6s/gROs3/mSR1ydUCxUMFafcsGcpH+d+W+e+UbkHPnnQxO7l5Ht/yVE23Swr1dhByMbk2j8zX9s+ucjUtuvc7XhsQRaH0J4z6rx6rFCFQ+VyDoT3M7CA5YhG1jl9rZG7YnByn/Q+/kCrVYr4gFQKZQSdwqG5jKvw/Ql7SE5CI8GQB2iN50XlbnvrRt31zglvqaKtCkVL3f8uItJ8iZKNjmplyQk+VJNFD3uKxu5FCw0H0N7M9xrSQN+RdZAHqTRnJCizbjoCDXwzi0UMqZMhAycqHVDqIRRJ7JKlI/s/Qlhq7L+PivufvuOTFLkKOQII33tgN86vEgy8VAYaNzLRf5T5rYnCAWM487KJteOGH30w6kWf2oDrZgnGrJiq3bdTmPqIeLhRwM8Qx8yUF3q3qWVcAcu1WJrQ0wm7g/gzF6ATsFpwpV27DsLJ4n1930IV57fRKIMC/PHmtzov9YJ8/Jc+GsDOaWUgj8MeUH/AU3e6TrUlYLC1tMjkJCUCXTB5GLLu5Pkzv/Amv8cY5I/YcbE886LV9EyvN5FPadsR3UhiB+Xzqj2Bk7tAWbjmhVmhV2LLT3QTs0D0axvh/+gUE1aEcCefekB14SaBwmrR4MC0s4Vu2GQTq0nJoV7eYjMWz+5HOVl6cXU3U2tZzK8H2xlpisrWypfPM9qwxF3ZuPgmr/dvTNjSiwllFc8Q+hqGfR2g1/8Dj8M68q9QD0FAVAHxFkRfZeMxcOvRoEqsJY19jUg8+PRqSfYiD0TUMHtn3ZimlT72v7t6yvLkBksTJkzO9BDIvn3+KHE/gJgr3R/En3b82ReHDui6P5OQgmREPrNIiul0fyI8dKCS52Lv9ul6VzMtKjZhBZKUmSh1Uh+VjoDYWSB2HcClW1EyvPOcgGLhgxZ+TFTdSqzdJ827cQO1Y=';const _IH='ef87510dfca6eecac638190850ba4601181c42f31f108fef82469068351849da';let _src;

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
