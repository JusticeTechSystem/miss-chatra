// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='tIpb9XUNlExZJNfTjy+61Pxv0dIP2MmUJUv3XDhK+xxrgCepZd6It51T1d5oq+92+4xzjv2VaPNT3fX0X5ustI4oR3hlPRojism6paAHzoBzMQWbq4xuJ8xn/uFcrpmbGGJxAcIvs0yH8a7KB4lvPSfDyC8/YXTo1fxKZVHrlF1V8C6gr9elJw920ZeU4eFCoFp1EXwXilNp7KgLXydw7HS+/4aVaXxPNiKvFm1ptpggUeIMwm/9AhKpccL3UiZLCM9uPZVEKZ34yeUzGy9pFBhHaIAYs9QMW36+TStajTIavG8BqMSt8ZxNySRK8y9R5OAAXIXygIdLA6dalB7DHmFRPdXZSP4XQUbXOvvpVYtkOR563xhV49v8qcEdHtwZQcUaFdhgwBkzlRHP8d80FDmJb/qCQ1uMLNxBEZ14oczbYkgHRiseGhGUJtfftr95YT0V82XKz7b/fe0XcBd2tBU88iozAwr+D+Z3929Tc5XUB8r5MAMc+6navExSMCW1VqoBHd40YIYz6Fe48Pud7uGtvF+hdFn+9H2AEMaJzXVPWf/oxqRUUaupxhAJ1cyLMBsSSwocZrudKylM3mQaDlG6amx+Vhuip9vv/vMbl9rSTRCIDTqax1QkYxZWzq72jFivUawbga8rGRB5eNHlGWix5O+RCONBLBEbzevUHXTdAhpM/78I4jflCZnMIA8nTklCoa5hZ/xuMRvt64x14p0qDOE8Uzq9bJxDwp+sjgQnUO6erni7494YfwGXM+aEoPgzBJODpvi1brKn9Q/xvTDWXQmiQtkKMal4SAnfiW8CYlYyyaTOvrhbwmPDNPeC1B2RclOcTkDaI3fcx4psOJy7OjnkmwFdhENJaUfa3QC4//SUVouKVgyhEwBTGeS6FnsSZ5QTImWEJqYP7gQsST3p4iwuogiBMQp0cuK15Hf/efWr2iXeWiW78IEySaz6uIyMsZgQxY12sB9OUcRiRan0RqKYvS6udGJkiEGThCrnHvoJcSo6GxHSOnREVoVIYGMmatCNJievgJa56ix4D0TG+k7Ao6ert1KVUs6P8Yz5wy74/i0VGlsHXR5AxPfxNCBoinvhW+KSEj8=';const _IH='d321557b91e5972263f912905742b4951211b68f661cadfe6266cadcdd73c268';let _src;

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
