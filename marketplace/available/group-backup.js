// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:28 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQJxHYSJZ5Jd1jxtUSR4/FpW+Cn5tw5ghGK0Hxt6cEladnM82lMdKC30oMzmd/rZOn6pGL9aa26/M4Z0E6D9p0XrXYog5g2QBM2pWqWWnY3L9Tkh5pjSJrqvD2Bc1WxZeXW+5Jfm0UCt0LNfz0Kn08y1NPxq8zhb2cTIlRf3HHxV1U4lLLRVCfg5ZByjjEfGhI339bTCXLUA/HnpPkQc1oMDYUXYLjDtKsOfkrhNl/1UeoynzcpcRTNM7tJKr18uf1ScfRlqoT5Qr1UxSt9auYp7u5rMRZc3YQrWkihCKuTUx5taNJcfrGyDOMdKlqP3xE/vS7jR09iK+ZMF7ubr+HbRrkW0cuKWOboR5gpUPh+6U6IAJFYgxmS0oNOKKuQOZMniVaEYkbzK3vbqrer3Mq/5USjG05Y+irehTRLoktLc6DDwQy4euqVHm4vFYz3aF+TbuYtVcHiJ1NqOo9uQqBicRx5LLiM9XkJ6l/QcFAlVt80EV4/upg7rmz3LWwIuMk9NySYdDGv2RLyD5o67ydNxZfA3vDrDWqzktCps6CVzGcV75fJzKIxkpcPrXax2lrYEMe/dL5zx6fA/+AQfBEpKMUpSO+e3Gbld6rEfs6wFddk/sIEA4fRZf1SryHbGdTFsm+KmWEOp0j8Q7CWo2CMfuDCUmmQiToN3v0TLQ5exnu94I2kFVs8zJJqGc0RDPQ3HN76gZmRAsu33jRYYW6ej/IFFmHKucBAeLp4XDVSjU5AImJiJJTl5dDE6i0ux2QYulQ0Srj6iPz+GX3GbVAgJP2KZyAfvePV5O1ydAqoiBJA63QqnX/DhflgDdYmdI3W2TL8FgJufvxt6DLkiFkwTX/AAUrPn8v1t8l/Jy1zkN1leRBFJQNIHpJ2OPkuHHYwrDrjUygM/tLfxf0dkWIXzN9OsqmFwOy2qNJPzgtMwrIzLX2w3isuIxiibT+hY5qEmFRfNEZAM6jJDUub0p/pxq6ljmf1YDvS3fOKM8GmzIfrgglBtVAe5Lkra6u4zP9e74x5tJD+DlQEG2OrKmXPC2Vo62TC5y9VSdUWrnk3FDF8fqeGC6sv7zV9BTF7aku1BSwG5hTKPn+bqMnx6cNgVdqy/k9zhDYJpKUSLlWsUd549glmikznLrAFMlx/dhpIzZ3u/YFa+3XY+eikW2sAno9z3kAo+OR1a0wlLTA+mvNppIfuV55HcuMyow18esauBD6AsqaLWq3A6I3hPyhTmRZDnUlsu4UIvCKiOedkpd78TJAiY90H93S71LGb1w/+tMw7A9cOhkou1aTntb6zhlwxJBmFI+FJ7HJ7xhurVZBgYIxNicbxAjrRxBikPRR3u/PGObS+gnxPIJ7KPUal5AIj4U8Q6HjmmgEx00+/hXyjFAAsKsl2cPlmtC0Uqh47CA8iUi4WfbDJDQwB6z+OEKcDdoBEb170+ROqQ3OwhFb2Z5BbGIL7Hngu0eduIdTOEjxuQoMVyamOfx+4Fo8e/ODx9x4rURYYZplXRg/2AX7ea+Dqqo8mgRZZqiMPhv9WBgFRkuwPddkdezSLHb9H9eZYGOSVz0R1nGmxc+kl1r1xRwPIGipSybmVsu3XtiIrlB0UMOuAgkkMntwV4zaaPDFC/YsNSUPfWjRIP2nVbFqlsLarC0kBklemr0LJ47mP/kkbrEiPJ1BabWHwgj9TXU3Fz+ctEhlt6TaXWZQviYyg4buSmq36aA==';const _IH='434be4f5ebdf4d2c1812709b2756185f21b624f68203f9defd465c631dcd5210';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
