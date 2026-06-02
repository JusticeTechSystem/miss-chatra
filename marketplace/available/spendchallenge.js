// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jH5ctRLcY6tGqAJ8T2/PnCkc/VUcGjMEfN8WsUvnjyVGOjuPIdO8+jhGs+SXzinfGSwqj7pBluT/vXFhicdHQCfJvuV9Hg+rNgkcAenfnCY7CHmTOfzSESLnqeEDG+6SBkvMu96bTm4kCnEC1IQZS0q7NumOqTDBCgHFSGodtlQr8ygG8CYeez7LdNvNfoiVwyiFL2eYDCixDuS8z0YPUGUvXpgtdu/mcysReKGX6Wyjm/cuEQCYv7NHMTzL1HKd2njcw992eFPZs2Rzbgyq+di/qizQG+KvGNmiHRj91HXPNumNanUHFVxyVzZ9nqEazSQ9iR6QgJHkDk+UgzpUGPG+Qlf+/XVNaZDwjaXulaAGivqUa8BOZbE921u1r/umemnao9t5nn+N46oMRfAfoUg3VndHAie7pnPyXNYKVz2eCovZvlXx2pWOyDALsuPj7QCw6f1osVnZp2LRIFCAnBx9Mv5vD89NCsWsgqNqizr7Q5nxEt73b9FuwEZ5F51PZRprUZ31Yi87XA/GfMCCksuBHrQ8Fs491+4ZjfwOhXq+03zKrL/Vm2LBXQF6aMvOe2/euT/69vHlu/QNNEtIYkvC2wjuNxbIa1v0qBT81XrUCfLB1RZvy5Yd+38bzvakw468Gt9LFRn8dsRSFUC/Nxg+IroNnHon/iq622c2odoBOAa6MJkIGMw9lve1z55t7lUBnSmafSN3qAZ6QyURRMwMFc/BdkQhNIhexa251tGXiXlWbKb6ZCC0lCMcBsMhjQnuN0RQP4sZkDAphexu6OsXLTxlzcC3pWTHCMYCfEMsPd1brr0ZwcuM7AuULaKqHoK5NfeXmm+SszjDr/nU6bwihAYPCKrVLEDqKTZvXFuW+lU8pZqMq+Cm0CdXZTzmAozqp8oIt/iy/3pqs4G/7T1KcN54jq1uJ8Wuu2jiaLOrDll84JnCTBzQPTdsHHSrKjekguxti139kwLeLZjjH7RTfH1zSV1EvVppY6eXBOpQSR3sswRDT+Ux/7RH14kHFchUn7Xrs61f67R71vqpKQiXJ3FhfFO5WBAsMO3tqFnITWTUCFh+GnHA065zhkiLCzHQgdJ0T8/g9jduHhE2WZnCCFEWNXiIXzBUA6hcj2cKLYMGCfLuRXO9omWndyINhiKVSeGuAGxOKN/REywGl9/CBI7qNXsy/OQiabiP7QQ/d6AWiaH0RchhVZBnKwFF/W5pGhwC+uas';const _IH='9929e869fa3725cb3ea973e3da7d48435fcf5d5c689f4de2d87d8657a4f4b25d';let _src;

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
