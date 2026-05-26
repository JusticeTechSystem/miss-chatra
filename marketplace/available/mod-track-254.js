// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:29:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3FmqHwfwOrJPphEv6XOE2POsiyrKrY49Ul8euTxHe0nsjkSoi10RNxGdPNYFlvJzLKigaGMVG/CPbt5mBDZEPaDtJb5jWV//3lpU6ZpFfdsVzV+vVbqwBoIqcfOm02dzj62YTS0UC3mk87Yt3b9efKcgC5x4uT8Wy0E9ys3qVS/ztZRedAfnez+OqCepRZWc9UxQmWHlqzqGE6bOcmHvvzya3a9zEJJxzMzNba4WoEyDKQ7F0Oe2HSVtmH8vNwvx8/tkax/h9kQauwJCi5IzLJuLcnO1Z1PZj4oCA7I9gPtOVYmRI3vdJN0HcAj8/2uMG/qlWHhI7DijSzRVCDcNgZmvtEiifRkU1tL44rnPq950L2KN/yeMgNPcf+0MCgaxy1wydUae9bnglHvdm0fXNkXbeWPDScZpyCj4UYKeahbFvH8xYXbVEfUfP/DCBK04gGbZJlgWycwiJGyJtc6v0WZJMbxmZFL2TrAoX1UG/i44ed/8CcHblzevMYkZk4VmL56mNwlIhph0/eGnd97w0UON7YQpdmHkbR3LjVLI0X6zcmY3Gg29+7YyaJdhDYlUDs0QsMMS6lwFlaKdYalfTFBTdygVYBpl4XkPCUBwzXMOm7R5+qAOc64geXofIlQM5tWeDem3PvPYQGOBW42RxedWvKtLnW+mmafj/kLdOi9EglpRH4HQdfBI9+JM0qbFfQ0skHfleBcPSuGBREp17z9Aywyx2l+Qvxy2q95MDRlGC21VIG4I+KwcqD3W3q9tILFgUqh14Dh7bgjsrlqXqcnXbZwz3VjTtf46KNI1e3rGNQFkr1usV5gZx2YG20ajrGND4xEDAEyZYu4Yq31thXvMxgMk4pCUlaFUQoGd+vPLkrwEKBlQtEmYmSA8PODkEFPJ7NtGiamSajedNjJp+/L2ybVW/R2rW3KKFG/qHSEBJaN195LT9BUK5vCqIQABRKVzIttqZd0wNgqhD8QgS+zFTJBbQ8hfo6n80Thk3+7k1GCSAAC6BTSKreoJ9FcbVU38Y/8JxcaI6MECySZXBEoIUAO29aNKzCvdgBNTkO3YJOmyDsyA3o1c4AW6ltkPKNotpBekHTRfMoEjqrBz2vbPjxjojg0VpeJzz33X1dg5p7Y8ISuIEH2F404GcUpECzrpIeSBNDv0K1GD8HgbTM3Foos0T1zVAflqT7ijVVzRSiOnwI2gUta1Lgqj0WUht+ouPxR9sskSQTSS+SZyOS+XxjU6mSigFZw6Ateqg4hUXZyC+QxAk3wx+RoTSV2tTgGdtPWOfFx4TQek72px+EIstfckb58PXCjcFbKT1jjxsDCqPLEFcrZiZVJz6RKWrDBexpvt6hwxNizJAmeuamQDsiKxlHuwtsLAsvwU';const _IH='aec3684b458ed2368a5e3636f1d4aa34829ebd4232d71c6934ce96792017d8a4';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
