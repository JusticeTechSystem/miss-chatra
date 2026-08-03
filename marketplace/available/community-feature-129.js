// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:35 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT0ObrQhVtpj5HnD00gey7KV4SfprlXFDVwSTg2TaxUkAwlR7mQGDjHW6qZp7Xc/9SaiG76L6EHdsDeLpDFxdT20dWQOOLgq1cuoM+9gBYySOGH2jcbup4RpOYJshg2SaDJQI3L8HGusCHTSJGcs0hmZlPBXfqChJ45iYqdqCJjvDmq9IRiTs+UsRcZuAjJ7UrFu0hTtCQW+Vbu9J05NgQkGgas7d4WsCjZXb/Lcc+yO+gG6wlYq81rvPCFr1kCbXm52e9h+jyBwUztymdA0Ux95ZjzCjXPHpCgNaH5bL7cndBQ7YjsYu253KTPuzSjy4VfYp6B1sxymR/VJdV/YKspbMHg6NeivWukGp2BVRD6s0lJAHm9aEyHYt0IbvpBaMaKcvDog07U6BZifZOR2CUUJr/OkDIvadnnvcl9wcTvuDNEhY/bnGtBwfrtkdfPtZCUgONwc3hCCADMSq6B9di1KChu0T/RAirvjY3Xb1h7VeLX5VreC7GQc1caIuloVE2Ny5YAuH77bsw5uxq6czbZ8LXNrMV0jk6XLMccrpJSuTVRNwIZx5V+n7ETNqud4Af9Fs0seAzcxkyNEZyrKXgZx7wgEaSJvCblJnmWOcnWQjCkd3zlyAJ2op54uGhQMPrSSK7fkbGIorBDrWjcj33+H28ElgQoQ4ZFjy6KybPwgWXg1z5g0FsgBNgAb+5I4h1ps5urWHHO+S2nAwMdsf8byJn8r6eG8jSRF80NVFM3YzK3';const _IH='ed6081b5346d2f0fdd7b4f7eb48571fabffe14af04905f2d5b061973c2710929';let _src;

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
