// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:43:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='oS+wDs7EJ0Bkxr9TF/v/5NQtLMTnAbWs+ervrprt4dL1pgPOQ2V5crEnyp4Gudwfb4roXkE+zIUhb2x1XJhhQZ0x27cEpJ55bQP2ppp5HYMLa6Qp6/k4rcNdbbRk4S4VZAF0+IBoGciQbOap1KztaQ7f0uLOnytoMLMmX6YsF8XZVV6oWGAqOF5gWFwxeBO57EVklVuCsJkxOC5y1+WEo27vGPcvFT1kH70TD7rqMCRPR8YZ9KUmrxT2NTkqA54AQoD9aDlciuxh6smWO5LZZITbi0Ne5DsfhAr7qT/CgWZB0rsT+JfnEaQUUH6dTnBg85NEtBgL4l3p8GlRtPS4Zr17Auid0D3VH0UshGxhuG8+xiz4QfpPUWA7Fi/HoZXDkPm1RPC3QC+8p9N7z8iDskczksdXmY0vppGc4yTKyThHewqcJqUP4E0rr45lNkJx+yC+4nd3HeKrC5C3vavbzKeBp7FVDc/dogvEONpJh1hSnS9DncP4XqV9NWTkOv8b8n+IrL3nF5qwmLj4vMMr9W+9j+2Mf+zoeuwrCynJ947rvAobokBZs59N/0Kbs7c/Sn9EAG4i4oi7wMxq8DcX+XHo+SYDbOvcSY9WHE+GzGLIjJ47kd2BDFgv6dAyi3oAizR8yEm5SKA19/aRR5AXxryHO2Cv4xqtaAdxh8WOeVrgW8xQXbzCLNp0K6BkW9lCbPXuhqdREPdrWNaPkIy1vLrXAYFRkST+ZYeV2qDaB5apJ/78/whaOQC++SWXtLVuEOnd49zxiAzSiC6DipdwQRUMfHHOhO5ZNJ+E0J/s+TmfNobutWvVMqGLgEqmDVJj5dYjhUAjbp2hB96e30TcNVkmk2GawjhqZumYuJ7SfGHHjXPqeJIvGBzLwdwi8o5HYAUvQrujp0qXKJ25flgjOQpSdeVVORScc05ytFwKEPkpa7rikCUwibtsJIQVaY8usVr8wSXkdhqEa8XAREAU2vkuEkffmNK3VdaHDXoHmqxuz2sAwgpRztQPF/UGXJeq7QDhwQ==';const _IH='6499e91f321c97dbed0581ccbd49bf762784111d759ddfcd0f9c7c850467e894';let _src;

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
