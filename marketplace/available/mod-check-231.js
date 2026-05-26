// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='XyJ6F2RKLdRmRlizjWFtJ7CcYTq+zUrU3Ho9nj+n/VWNBMGDXssb4NvcqjhIL2nHnnNjJLSKaDxqrs+dTlqo+8XxFFp8J41uNmmP02XMKg9HhSY3W75IILBd+Z1S0oatdK8aoIoNDJM0fJjcZwI2Fe83Udz4VQMmB7GkJm1mmIZPVKcXNQcSz+h385NSY9aynEfDDBI8A8sKHzb77n6dIVX3zuQUCMwQB23eplUodI0/+oJXFj6VH5G9tq+0uJ/clqju5sHCooGnpyOAN8b1UGRnjXPpRi1gYQjPvoAA9Wwdjr425UDRMpRcHN5VQP55pC0uWzY9v6RNg6uBAQZTy1U2/N98+75OfX2qg8vG9WRUuhaIVuH2M9V9DA7lhEnkpkrNMYdr4WFCPVukPuSKaptUie0dNPIccGMQkWPPQQOBPXunb32v/sWEyghBWKE2L7CzoiF7/0am3mOYvUBhMXPD96Zv40+3FnA3MmRhR4oB0XRf0xsqKZdqFS8AVgXjH4lY89IoiCIdg5ym4XI/UtLexG8a+Hl2TKkZYjDguiVdmXyB+Lk98lWrUXney8qGHu2yYyLTjz+tIIpnK3gPfsQtBR5jD0ygRTUkKRSrwGCHyO1c/siAO84jv+xDl8Tex1CES1luHKrOn9dSPDjtO9WyxPU+gscbx1rZ1+0ITdlIwP+ztHBrQ89frkjR4Opv0DTQrebRQInwuXGvECeIIBAzen5zXaSQPAt5bTK3V7lSptkYI7zRnkXeiN7r2z0I++OzUcym++PV8XtJKR4npJH/zygfMlVGSrnGhgrrpw4NwmZPMlwdpu3w9g23OTBCoNUglpdrrvyJqXDEmiyemGZcuuaODggSHVeQn/ryKOFXH5l2XBi4cn4j7ZC8EIbKfzuh86FUxZoSFkLTtdyfaBGw+Vs2g4qqul9nH9Nglw5LwRxZ0QAyCfMWnkznN30YmNcoEgTsdEBPj48Fyd6TYf3u/MOfxUD1DmLiIOVEQ19YD/yNkGfXxzd8+uiHrLM9i01WxDwxwGqRGU0IQ9LtnEAg08ew7xlBhHFCjlyPmdqTABOd+AhP9hdMZ51hPd9RS9hUPYPyJhUZQmk9ZrszvqZVBm/QEUOG4BSU7rn8VQgl+2ZZcFJ2eWgcoYM6dbB6y/mdvWkF1OUUxubG7I/LGHAf7uzlep+c/Pj1MUEy5UxkK5qOtnQLQA8y7fgk20XLR+J/0KJIfF/Q+JiTe7rGzbjhpcRRXQoATH4w826IXC2deH76LYwO56+oLk0wfsV93sQ16BCamkwcFFY0Z1eRBxo4TaLM4oDD0uV38rtYOjYG+WxB/MyYmPF7Xiy0uOrqk69TGuIo0QQgjd6JSkOrCYuF3un9dqwjZZP+p7cK';const _IH='3a531d5593b1ab9d84891e569f8c2de529b4f99e60a869682501d4bb30249a2f';let _src;

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
