// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='dF6AIp4IXjg0rQz2AQGaiJ2BGsNP8dg+T7Dp0iDOgqzr9QzsTRzTFRuA18a1/lgNcXdmFuWMX1fOqPdO3ARFtbmFa1kALkAnkRSGXdoPTE+nUy3G/W01JFLMPWJSig2RgjhzFtkKf9sydJ/lRnmBeIJXgoV3e1/9nAP2ik1hRN6w0d3jcyjevbivAmIoOw2zYn+aCI0rkfcwxcKy4SkqIXKWtUeP+pN2sowV0Mb46OA9+man/uwpbDLtgMWbYc0xG+GW5Ua4Qodk78V28NIqJIsAqZZijce1ymyHqRj0OAF3501alCHrke6/bq0XTARdYUxmH2yVS87k/d5wV1nDUYrPoCYUZdiL3/3DzWD1n02bg91/8ZdlXt2pqE57UJ3X8ckjV6Tdt9X7VnPus06NFDTraUyRNudDwv0GSBQOqnHuYZemL+zwWP/y/S1cE8drT12Y74Kw3X+2JLbgSdCaqGX0qklkzIX4T3LKMNUpebztsW6QF0B3HGS3yBnlwbALtdKzW3BpRUK8DTST07Fggjv8plZrkydjL9bCAKaI6ZeuJDYM2/3ftD/fftJynfgsAL170FhXNWtc3WQEuxDKyNsind4Fz5iHELgDssPZDYLJseNcoJttg/b/tSEhZheIM/OQYeR6ypWyYjFsKAAU/i9qbnlYOhk8k8iNe5yvH1211aFfn2T2s5IMqMzlIPSHI8mrztfIh+ZnLuK+Jwa7CqO74xRGDIcBVByKX5onF0pbED8j4Oiyb0HB0uLim4sa6l652Qa5vk/hyiv+hmyCfLbsxqLD4Xfrr6W48B2mC4caP9QyF3luEZCriAg/Xf790C31dMhZMI/tQvL4dQ/IL5XfaRzQh/CCfVTC9JUY0JYXhE2862dTs8DfnhFjCbE6VWdXnL+E5vhwkC7BVBFH57wf95mqPdQCrC/BgsI5rwF197a0qV+2E8xTAsjCEAeoXw52R4ETiX8aR7vj3IL+1VcgAQ4buKMjS/G5DExcPE+lnFHT24Q+4BwY';const _IH='e5bfe1a8a25c1c3111bdeab35f16906ec7efe2e8d0a88b0701082a282984e782';let _src;

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
