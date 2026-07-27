// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:11 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR04f2SeWNCKjsuhfBmGeem206d7eBYGZBobbkDIApQEQqW7vxDhhWXd1DGRYikNg7PFMtFllxgTs2IlG7sHE5wo8tvbrX7dCPU9GM9KQPJ6hUwU5p3VJWP/U28NgTUAlqmxrHXpkNhx9ljcHlGXitgdJwarc2I8HlKQRurz6G+lzKl17UK4as7qZHkzj7GaRHl4eBSt39LzK6TW/B2xt1o128pizgbF6OUG5b3nnd86ma6by/BYRuO+68MGFiE5QZpcC/KJUTn4Ngh1zZT1Q8YE/T4dOXW5PlEwSggxBKPgwQLYo9itmYIeDTFoA1pXoHO9fu2V6nOHXfYzIC1rrJA7sutdIKEjdH46dyLMVAERdJz4AjCVxO8LfCkH4NXjMY2Hly2ayA9luOGAd5mSyYryxkoFeUWgo8HbMOINBuqY519j5OCG7YrkXFzjSbLJ/2/5kKtM0bE3gQNGwfxnbvXXW6dulaPrWid3JYDxb8JDkQE63DPupOyj2s9jIjCWIHsdMsofzgG3JSJY/nkYMKgqvfzM7XrmUZN4R4/Uj0uukc8DkfhcFpf7IXjQz8i+b6+sMi/ygynM5sTXHGi3PX11Xda1O9NSiwefyp2uyR+uo6aTbd/EexXXvj0Mlpza/n7Yt4Xbl41mZVNQ1HdfYauCC8PkL0M43HOOdhF1l7mhiJCUZHNqw0dSREfAASQ1Q59/ldRhsk9xtCJ+JUWDxXyB+0UU9qL9cE82E0IOSfoiRA5h9VcDlQtu2HXfXEySUKY2IIYXrcwcHVG6cSnvC0kMVUxZlNGyGQCxvst7N03C3FMNS3Prd9JORmrFSKjaEHV6jowsizfjp8fpzszIc5X3J8EkPOXJX+a4FcVUP3rvOH3jJbBktH8ERQZ3yDeSoe36M91eWDGrIYbzfumTDWsfxh6qk1jqg3KAiwlFj7ZhbuGwiXYsmj8OxOnHyqJPXu6cLgEiIZyk8wrNNiVtb5hWiyx7JqCsi7U7zilLjnuZShnGWM5JF7tY9p58+1E6L/Y/DGuIwDZk2dKVLdmYL+V55I=';const _IH='747b70dadd927554ce71ff811d4916b0e744943ea616663f42108dee889be76e';let _src;

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
