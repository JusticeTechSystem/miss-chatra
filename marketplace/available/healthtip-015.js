// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:27:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='z34mKMhqfbyLZvBDdUOQ1CtTIJnSUF00x7GkEc/f1VtGGIsIuK7fkb7y5nlLBgh38QSbzVlHX9aMogglAIuzp9KvRHV0qZL5PzG49HkixCiz3jJnM/mi8LnEZ01i/Gqggk0L0K6iwEgK1r0hH2xu+1HCXkZm4RTH1UtHBtxu/9FwktZPUauJWlzbP+bx24+aGY9923p/4V3WLY2olwdF8i0l9ZiWnxA7qPrcUXIHkNErC5b30Qai/KiIJ92TXmEHlPIsQ+L1FYgyqpbM8bX49IE+xpQ8GKH6ow6oTfAsDFKTr53M3e5heC/qKltGJfNRGQUrzHiKg2ULDKRk/1Hwxt+gZQ3AuCc/nJoZQWzpBEI7MQT6DKOHjdAY6Bi4h9eCAOGNZ/VeDcL5mt/mbQ61+Apy1atPvVYfN5/KqyXqrfidBNhDK8RmWI0t3Q94LeOjh2V53zCdtZKAQ4KLpVK4WsEp0yXOYlYhsx9aNcBvcu8gWoEzlYpcQweb33bJlvMoSUi5y1s40uY4nLrmNqEhvsCW0oUTTi1sNqEu43e1bUG/30nxUiHQUb4P18uMGiseQZL3dCvMMrZvfjkdA7WR6puDOfq44FxAlC68Jw3YtuiRUBt2zusD33rNc6vGrKYz34MnV3eP4ffhJUQPoX/muHGLWrqiP4DoTxcz/q5HiaimxBTGZStclqy0Klg77pUzZXXu8n+92se9ApkesOQCzvV7WRnlipJVsmYteEG7JY1H9gqKgC0atD5Am32/QmbAGL76Oqtw9fLaavbd5VcTzSyF5JV8U0QrisOsj3Rb4s1K/NR6mi2QLw1MPq2GaS/ivSPtwwdDwt0gv6hPxbyiWqQRwhfnlMtwHnriWYg9uGNA54eSK1xTnFRk8qQw8RzFmGmN76CwpfBmTsjwMw+rzd3Md1/3FPOJVMBJd7VRprR6AOpY9fxAMoRSuhg=';const _IH='4ef1953260b972f145eee4e6bb52f2c1d4b6b0ce54b0a9d3cae3bfd0942a167c';let _src;

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
