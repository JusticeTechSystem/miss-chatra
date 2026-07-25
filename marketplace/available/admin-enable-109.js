// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:50 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQQ7PmNh+N0pS2OLbKqWrxFQ0LaEJKfrsEMNozY4doaXfcMh6Z/cYNRqREdXXxTBWHI/V1a+q81iQ0xoqB9Nn526XkJVw2HFh3+B9vjq37F76BnXJTFnAZV5E2uyPr5IZkPwLRTEwZ5luVdkM+nSEvAL2F7M5GatRp0ZrkRkrn/Y5/tK1boezxAA0afpjUyiIIASJPpLtt1rTtnPR+kMyZmM1WJP/juZNOuB+S/kyLBkiVht3vb0ajX5Ct4Czjgd+6mfHXCPO+gcrNokaqbG7/EkeuFSHZRePMm27hwjAGva0iWekAQ3g0SSx6zUwKnro9DeKlmK5g6XIF7xttpxHCrHtMETqW/fDQQdWlHOkULX6ZVqZgPEsilBp0sT4Q0oe4osggurZDQGm/2QD6fj4Y6zUm4w7imbz7BtuiBq1mmzlMiPBp5W9VAibls7Z5HZssLFu2JLaY+DfhgPqmKXHb3T52opFj9XNxlSAdtLoQVctuvmW539YCzFegQ+Ta1tfMWtgM9BbQ7XWBo8bVNj6BUjKzDsPwKtoznmZlq0ZkzK1hFiLNVV33+VlYYG3cOFth04ndrXvW/Rmupk4WzPZtrzP/apzIDHl1QbKT3eoT1tDWuxpDBRzvX6k0IvEjtCZwRLxV6NEuKe2lPWeiH7WDKKVTp8KxljOkvaJ/gZdGeBILLpzdaKypi0Sl3wRaHzzjgDFcZWeMu7+B5O3D0EsqJ/w+Kpf/NVB2y3ChDYv4ulV5eVRWxr2zfrKMXQfG4TTo0rkAI9vPJ3nAGmxLB34D4K7hmOqv6x8zqbQg6iUYCmqPYg7BNlI+5xC+ozhWiAQKi46YcXn9VxRj6vSc53Y8xKsHY9W+Yvf51taohO3viR4KHvTyDWIvouM5maF+AxLG+aiM5AFGlboG7u4at+Qf3foT6XxyCNamggJfEX9nOlQnA8N1dlg30WZrcqpdmsw3ehxa5mXr2WgDrUIm6D0gtj0vdCXbGVrBKhXNH66reeOXTSWXW/1NFuJpDo/ZxKoJI';const _IH='ab7e78d1f69a57a62ad7a3b44bbeb0c649691c4b249951eb42bb1ab458b38d11';let _src;

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
