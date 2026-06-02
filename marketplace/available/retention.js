// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='GJLlIoZc8AxS/8TN8WWeMkNvV51qNb49LpU30mbGyKumV7KRiEsk2RVfi0iltnP4EeX4JKnetuZV9TO459vyXBKaAj9kBUF/tieAPK0urr4ZxcWqp20DsiZssk0uhTE48ds1euk627jkcdp0MERoPSDaFDBe73qHbuqqaWvPV/BUQdj3KEeRIPFyu8iVMbTWdOTRPLqqVwLx+w3ovqEM0GejysW41ejTyB6r6gf16V/mtzLWuD66opc+hR7jMIZl9zLf/0J/vuTXzOn4qmDEGsEOtN3r9eLz3sz62u4RFZGYgFeShAMFThU8z9EmXPUsTodgBqSj0e+4wvVJJnG16KkqsyjmyCIr8slJREn9H8SMosoqyuZzAn219/I3+lgPPobqefxb2DjQTHYviAcnXW6I5ZbfGhpDtq8XSV1DsT+0iXIWx/YJ/iInxv7quJSumJNDfUHJEnEYQCeO3nDp3YkcbRucWDmWw+ldAWlx2xPBI1fQHbSkeF/Pbp6HO+CSJvXQrXeIJyMaPqgtqwBaRZK87VqaETg89ETrx4PPYbMUuqHpRPuWk/6tcBH1TYK2UgmPXEKSqd/moebI5iDQOIynPWsbvaUOKWOrFtCgJj+5OzOtmBDfH9Oph7qJT6phZLnx8iDojdrKGny1uZyDGoPZ7xYb5IgZ/NbQOZlQHIZ0/BbuhZOIZVdMu5WXcUUeWHqFzy3mKoUvi0ZO22V2xsefkxcS1NkJS7kNnbajsqIBeg2A6yQZUkXYBaMmAresiUvfCmwQ/xYTtkwVn7koRn0plXB/+yedLW4U0eL3tPU48LrRDvldH7OTRkhDlbZl/9TaHwgA8+OOMbhSv76sY7PwIB984IRmThZG2QX7nfI6naOWtrXsIf9IMZ50I5O2i+/2InjlY9L4zqQH/RQ46X1GG/eT3P3WK3QUoD8GY9qhnfUQkNRryXISIgKBy5j3Mn1JJtuDFh35ILRfdPyDWqXQcK+dHUB9nPnA0USb8wRfWxaiIRPfgdZdbDQmCkg92iWOMtI/3rcT1wwH2tCxphzMC1aoSAylkFrzizoJrhd2pkiClS2q8Qcsw+l+rlXo0Oi4uUHtcvvmlpB3mBJz96HkIfVN+i4FB0j4a/5Byv2vWV9qCsSwh3LAd69DLXfE8OoHemWGV8UsqjVOWso3JLghqP76JVAaNoDWfG/3gwMpxKLfdS5kFdyzs/9Z2YVKOIvG0Wd1+3qAMw==';const _IH='3346d3a93152b043eea92a4969781d0eff95abed81b8573cf83b0310a3ebb6c0';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
