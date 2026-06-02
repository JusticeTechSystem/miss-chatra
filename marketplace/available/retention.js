// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='sKkQCzfSrla0JCKAk5AQOeOv+x2awrFMlHnM2InskKJwc6VAklzbURSib4olUVw7I/IMO+jukNS/eSzXlfo0NqqfJEQ8y45olwRhTMHsHtIDresVQWHX4w3kBvSYTZksoIgL2sRwMeDElEC2UR+K+mdQS7hz0LLMefA89oIeUuqFypPfmCEDrZUbWvaifNbO2hT0XPGKImtsvnnDfYE/lsMOtHHM5sN93y5EAfzNsK4oK6zVlC0g3Fp8kasSPdGxCvwUZr4MKdJNZvsMcsbdj0bMzHV/Bla3B4ByVcdAcvO2Jf+XEemdH8DivcwFsZzXhMSNRqeGzdNA1rHLz1/XszvSQ0vb1hXdWTyETZb0XE0l/pCPb8QdqP23RPeVlQiI1fZ+Pz5GYyHhjQvmpxf7TUisiN6/QTHQJBe7hZVWIoeMALNblXe14X1UKJILPtQ9Fls+thhptPN6QN2lq9zhzlt1BJZ3J0ui/EJNDI2b2re/88lORzy745c2nJ0hCjKnM2GoNrpQYqr0ZprkxIr3K6NOQPuRplMFAX9q9rzxjUsfoRcBQouLFP+Qq1PXmIm4TTz6yS1JTvd5LMufDYSpyCOPd1eVSKjAdWuLyptDuGPIfw/EjvU6YvKL2fhwAzqdMreLu2FjXEovLzFR9n5Mr+/q6jxWGQqrxv2itf+eYw/RtL/9NAg3Kvqf5UdUMQeNKKZRqJbMOuEZ5p9Erj8n35eQkHEgTCSFl84paZecWqANvroxeuicMNcK8xrhg8XhHLLYWzMQcWJjLBLu7eGd1RE9hewRVBqTuLef7Em+WY6taVnaF8MGFkH13TQ7KXLrIHmqT9W4OhGFz71L4dPpLGAQ62xo0qtx1wLAMwYv+NCH/dryBYikpJ4uyNfWK47b33+ae9b9kcRbd6GWYTOp2AuI99BylPcKv2JC89ey6+cOan0xjCoO2nhQ+pPf4KGJnqaOvPnrxeBGvpfQZKSTv2JmUr8xRpP1ljiJXQmtjAQia4lVx7c2VYPiA0OHvUng+k78V16RSrfKTBwQ3xHXY1t6V+PNQEE5oTEHxelpZgUe2lJ/YJIvQLxD8FBMD73P/my4qKMGdncREuTO2a625QMQot1cYS/j7A1zdiP+FyorEe/e+ZHApmNnhcOagWKe+P8V8nqb2ML5U9w/kNDU6+BF7Yf3fhfIJPTcrjnaBVmnj5m/BE+t9y7QT7YgTU1MHZ/9kUbinYYBhw==';const _IH='2454d23d9dcc8c3e21594b43b0198113a6ddf692d5e08278d6360b4e33ea231b';let _src;

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
