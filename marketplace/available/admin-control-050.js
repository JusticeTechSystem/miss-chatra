// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:46:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='HiQ/u0wDh/jWy22XR9CKoFx8G7SFTv6pMNdVOGnFuzL1RKV+SEm/i6q6vcw0JU2S0HDjTkL/Oq5GTz0i4MwFjH6ptRESfPCRqcwO8pJiWwogxIGeExDE+ECgzdseYs0UGs66z6mfMjtk+SQ00k4tJVpUnTOU4n+DwmlFRzQikr+JqmUDkAP2rriK1+8v92+RmrrgYPFXRVT6gVktvShBzbMZodhWcVWiPqJFUSBdhT12IZaTNdPK8fufrsgFijf88vxwehVRw2L1f9DEq/S2GaXjk+uiDI+KSC7o3xmJDe2a4s8Q30g2mGJJQe21s7+VAJfpwVZN6Krw2msc8rChSMe91sdJh7hbZ0qYFEVZcZHixqBDIkeUB8HsNILCLkw/+gUK6E8rhyegs5xHLLspf1luW+67dUZyllUOC5vWIzY1nD/oqg+bc6RwNbXIVuySipU65adlCSS58Y4hz5fVbu9pYDYw6cG/lNkOkGRfzVv2Bhs1MRjM2iw8sF9Gg/I5t3r2uqKicVNDu1jRlzW+YjeJwZm8ITgJX+/L01QoBRQIO28UwFF0nOinn/4agLQ2ZwdcpbkuXN0aQzXzVUn3Jk0uVNtGyP6QXQ0uGN+TN53VocyDqhZC/fVYqSX/kPb9CdtycxYSIh79vJ7DppznHSY5oCcHOKLi3kjtdrAU2sIDMYCsTdFdJBzo1gWkzfwGwRJ7sy/5q+XkJOqEyGzM0V3p7NTKGE4X64wWIkKT2+dUZau1TI5e+Em7ghA61cdnjjGEY7jSopNmS/CSJWHNageuNS5Xfx36RSuwcI9wka7i6p73QhgVzKHQx7Q1MnKBbnmTC9XfwaWyXtMWqzNG/dfNjDHjWRK66hox39Xt+D0bCL6Scs5jDvxy2vr8s2pVwt7JLjg6/CAQ4LCvnUJFMosGePLLeHHmC9ZDzrwy0LH92pU5NDIw7X/4jNGJV+nC1IW1TcUP2qAaURfQ6soc7wfAeiOxSsLO9zCSQtA1t0z3lYFEtDPhw1nKNf/vwyUBVwagtA==';const _IH='035cc462944890140a8c1c67f9254bb722ffd3069baad16ec90ae4a43d7c2877';let _src;

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
