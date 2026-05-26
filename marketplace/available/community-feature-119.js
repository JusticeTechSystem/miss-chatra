// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:25:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2NT1dVirmiQtRWLPpfqHIEQGIanuFvXRStErp4wlu1Mr3+2IO8e4ridB7Lqp/QayD7OXxEXVMzRghevlqh3KpuSUwbVythkHQr7Nv405iTI5+a5gMW0yIRNnvjibNRUCEdhtLNwAYz8yj4P8WZdYH8kDXdnLZOU9+1p2i8zNpP3YjjKMW3L6cAdN9tC3jGZYRiGuwlCz5wEvkIGgEOwLxnpHut1GQ3UQlYLpj2OxsVYIS1dHsKlxP16niWNq2VxlzVUaYdajWHJwK/7zaX/RPNX3oKGbbRHVsjg2N0AB6PtM1f/q3Bp3bcJFeoASdMWWw6jlKcNI7RrBKbW1AusDvNqlA1j4UymFcrK3CUGRfzKeoRpA5q4YhcJUMdzPZQXxnYqmV590LRuGd9DWKQeJmYYA3nDbxEGH/3bmJ1x2uMPOpzR7oKJTX+oiL5hxh3ltZhBNBRLU5Gs4hjtBY8ENO22pYgbVyhCamIS3qSwAFDsJVviF4EjwNHU0uGNhjciKBfdLRjP4WmEuyjl60luK1/epc4z5zetp0SX8U/xAL8cJaHX2HLflRtJM133PTbM2x1J2f/YsxVjeDsYLhF/Ie7P4j/dfJ/dw/t/zoL0SU/h9p4NKRYcILdhPeVbuBsI/h+K56Hcr9txZ+OrRwpUMplHAsQC+z1dKVFDgx+F0l71Xumjn90gTLWBwSiKQzK7qjpxSChMjw1b8Ng636dpwpPWXt7nSrmk/QxrBdWpiEc0sROg2Tm4=';const _IH='c23a6f7427c1a3a3c890a215d2e1d2d9d9b7c82c57730556cf88c70f56845d49';let _src;

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
