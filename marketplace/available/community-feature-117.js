// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='EZspy/jg2+S6t1d+X5FEmCLcW0C8/DmBK0uFrM7rTrk0sa51uPqJ5sROxM2+n8JSFMOtM8PyyyTBrolw+1vACTXJ1EDcYjnzbzQ+mlU2Moau5qR8UYgqOJZPwAIwCcuY79/GiZD/K4XX+3KvlZq1ke655iYC4LadmdtLLN6DtWakAvmYiGJkhDoTzrHDBlllr90EJOI20JpT/oPU7HxCWfI8OC0o/hyCtcNwaHgnGXXFmxba5nPAO4G8gw2BpATasr6HVU6ZnjOdF3zvGa3a7ldCHIj/+tpSVXcf9F1J6gQRjwrpHI5g4BjkdGrfxVVQbNQUxeYvte9gNoFV8aCUrwNhHzx1bqLunCZQxzcjDY4VWUXKefkoK6h9EgJsEmkYbuR0tCRJEUt+upZ6IMH7mkYeaupXz1+tYpuOhOBpRshONdSoXGR/I3fb6QKoRrU5ZzAM91vbaH47j9OOCrkvjRok2O55qRfEi/q5VjGgk8UzOUPViFazjpi5V6HyZvydXZpc3UdAEbukz7/UUnuQdqC/re3JXASmVOHTfIp/QNVCXrpIs7kraj2Rl6/wn2FUKT8oYw5HjJyIyW2N84SeW1tiOtLqwzfKj/8iDXrcXdPmwNwsb/6r6CKCgpIrg9SG/8sEvBR9Jij58Se3zA7OzMKqoxgcNkH610qHB7+p9NChIADqUd0Ni/m/sABRSxKq4UIurIt69jCGUEvDQr3eqr/yovyKoCs/N7bfwfaMe09xp6Q=';const _IH='dd83c78c710df95752eb0ff89f1f0a54271a9808006cbfb431c799b47d6f431c';let _src;

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
