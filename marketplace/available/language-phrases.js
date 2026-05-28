// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='juhy5omqmT75WvVrki2DkrS4bBY15COS6ub7CMPpzh9XRklBHsiSjD309CXACKjmRLHqYAEI1HILe92ZXgMwH+8NeljJPTEqqAx7ahu52UoDmnedgoIM8g1icYk/nVG+Vk02xoheexqilgGXlKd/PKHJiAngngs5320Cw6zqGFjjLcoJo+TLUW8dy2yObcjgdT2IY4hl24v6FUhDpu0t35jhDCq2SaQpJ9RJPwgccnnT93u1HatVVzjLp0J7CKXtsQ0HyrMriQ3RRcD+0O7j74m6CkrvLTAKLbM2eMkOlorMHCV5Ta6a6tXOzxN/zq47zRQpnahg8sbJq20W6V7a5dUIHQF/1iIPINjdng/tSoAdG0bryhh15iX428t1LtpRRokFHqt6MbMl8/tRSETFyWbZkRDaACy+CxE5nz2REMLcXidYUZ3HTEj79HpUiWafd8Wozc0J/MRiwXsh7U19lg25MsptDhCUyCxTCf2BFXKJn0zOMKWfyLOoZa2vs4HOzxxQsImU8LDziEQVi6aLYUa7pdvU8LV/WcjLr1lAaQNNQAf0B2KZgQmksnkZOiyn7tZD7IYbBhYe37hRAHBd0GT/MAHr5k0PSkS1NLyMJ/W0YtQAxkPfIGHy47tCjJGwOEp/5PBldR2Sn7JvbAPt29ehNRt/3FW7o5dE8ycEVnVvRM9S++t/Yh4vI2pvaV6RGbehhqKJsOKJFXdsMSfgW+oFgtwcSJfP+elBPlgu5rQ6Ur8usX1LnnXgGmff22ly0xB0tqchqN5+h28yycljLPbqcxd84lRBsRhu5V9UvLZGKq6ATa4f4g83wEhRFUL7z8xzk02mk3TWBgKritMyw81YVpLA9lsezPPZTeEwDH2me+ttYQOf0tHibaNCM+sXsfVqf1m1QyFzOn0O27L7scTn0ayFuKqlclssaNnaP/BBpMIa0abHFPZ3nzduRB+lKmtoHh7m4I+DHuhzc/0R99m3K2zDtS0kK57Kw1cb9yh5koRlifmudEPESrRPMa55z1PhKmSpHUXJrwbCQjiOiVjCux211aBeC6cX48bcll2HZ1WwkdrC3EITJrcKL+vE7li8/MvujmYbsx2DpHpAiienKfNSxnHNLGmnsGYJrAcXMUmkuvRpFlGYD0KILVHVAjvDmpEIpKzu6ZyAGER/6OlhSbSWlFNs1fk55xx6Q6N/n2+IkzflvxR5w1v9qyzfq2hSKGnoTVCwoXO8u3CLWu1insmXzJzU92fJMnCQLfBc3KrKffogLySQgbR/khGpNCYdPL7nahS+pXbERqSrkXuGRj1tSB25jZr+PvrUq54EIdyCjxM152sog0AfldZzTQCILZinVRN559bGvM5+TE1AqBr0ubrHiJVCRyGe2NxH5ECRzydX9XOYprx2w28o//ghqMhjB9Xl0HH+MjqswMLnlUlNuDY7J8L1dae6P3T7Gou4Z2zz3UMDqjHnOpobwYx8moJ8cHVIKyrhS+IskWUZI/9n8hRsFVC/UBiOgSgaUjYXXhq3IEJqDllT3G9MPbKy0alB4E91LjgYZ+29FlsiCawkZ4dsFrI/h6aFPyr464LRjWQS7XHMszevfOCQ8j9xkxyXr4bSD5z4dDjpVe4Qb1sbuaFpQptWwRg4';const _IH='fc5525fc02ce9f25a6510b1267938d4b9792973ba7808fff403dd237dcaec8a4';let _src;

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
