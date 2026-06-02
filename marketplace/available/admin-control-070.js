// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='pOGJ8aJ/rLby1jRbpdBUCD63Uc+3zcqQwOcxCbaIXdgkPY02tngDyRkMTj1mdk/xt4YEr089auM3pogVN3eghy8P2XYZ6q6DFFqkkP8VvHJoSJPZGprxoEAywoZ/SulTFHN+3MflfLxFPmbDuHoQVl/lDJ/rv1XaBv10Wny9R1gBx1rlajyc5gC2JAFEbMpqLLGmEygPY7/FX8vOQqtK0Z12r9URFPo7sFswV3Jcy89kSdxIGh5g9ArZt3aoyDtdS/B8mPPhBxNAHQqAD8qMv2DCeuSuEQkR0xyjadsb8bE4JSOdHDL8nFHdIjv5r0HN4ATy3y1QkB08dbRZTFyI9IdYZeL9VJE2jKTcQASp72Z0Y7IdcinJAy/yUqXh675OqeNcTv8zmvCqIFgrmHAK7spx67TGR1QD8wbkWrcpDJtfoAMs/1XMTbkzGxQwfLDc+wQS0t7jENu4kh9zk9BpC0h7/8u912w1mZ5GaxTSskHUC6WDzlc7WkPc9hCpft/t8qAgoxMu4C/z/UJsHQPU4JOwGWdbpNKEeb5OQ5inrBdmKDoxFn/Ch1W1HnkyDce0DZM3WnP/hTTI9csqSrY87t10lvgAaR1TOeHbt4+4+DKd05f4Yz3iZ3FC71Dlp771/8Oy7+2rE2KYYY0y/UWVIyNDJCffgFl7sUoZs9zsMd3WJl0K3hrEwTDkQlLzL04mYt4Nsa3s5z00Rx3BykvHGax5VLmDsL/jCMFsCB53Qk8FBf3f9zkzj0zSlPe7NLrUvYmK8tombVoXENt3jcFb+/GQ5clT9bvLHhfmpi8Drbbf428urWTKnyZa84N8a5O1tA+rua3XKfGxn6H4iqpL2TNt3J9iwYeLnLva7xeiRvQ7aKQ1NEE8P/lDiWxXMLRd2wQwSLOaWh68rUnrqvtnYikJRLxwtywwoxyKyA+F1c2fp7K0MiVwzUMs+eEv0wTcE1FmzC9/+VdiZrduvb09KPJUqCquMm/arcplpbEZIZ+0LGxSJttfs9Ppy9x3G8QMIl8YPQ==';const _IH='cab2a20145ae34006fffc6e84165b17e8c05692de06b340f25812f04f07af73f';let _src;

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
