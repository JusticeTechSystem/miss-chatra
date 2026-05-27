// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 08:59:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='PgQ5yRtE6T5eBpz5l+OnJ0/UH8CdR1nElYsg6NuEJhAntAffuIB68fFy4+83rU6OQVbje0mYrpuph+2CcKx+MPBFr5bqr6lEytK5IJl4V5Tfttla9Z5hyQChKdzuTAiDDihd7Y/ezSPOjfKixbRIqIh+kD52VrFO1p92724FF1miplIjDt4N8u/9ViQbNrsgExy7zOeVn7Q+76wE+v58irwXq0X7vBthr/RTnrtqhRYfiO8RzHcCA9Qd55J1/LtQRr/cwzZWWCCOjUHobzpkcLehTmqj3lySow98UOpQX1hxVN/TPmJOuNLwZ8nRixtVVQIy3xRRhch9Q188GC7vRx2RoZq0CocGqeqbaGzuQOe4YJLi49Rt4z6b/qiP2co8CKosqq3f7WQW+u+zmxGq3FUtb+83PJ4DVbpVxmcvKchnI8i7So34k2/FOWRsNnAmCh6Ps7ZVYk5HUTcbTKWYRl7PUJQQMb4xtFHdaij3eIFX8lL7ZGe0bmDdeb3Phr/Qa2uvHUmSmUrK6X5pmcZG2UfZvJtiO+ES++WW8FWA+sSntzWittp2hEdl1o+OQp28MwfALSslB84uAxTGyS5OG1vqzKn7WOFib5iaGuJqezPnwIOTTIp0fSGIHWJAQSBQpph63DhkZNVQZ7g5r4eUuEFFI+aI63hkAZbZ1PUbD8sR7prS5lmmH2n4tW7lzj1v3GNXxjyG6kulrDncfBQ0WuGdzQlOcrblGPmnNVvikjSZYzLiQGhXSEBVc40emH3LnOrmL1N9Ug9GPB7l32OnrLAg5sZUA0DQxLQDlRJpc11g2XyBJCWik+tJ36Z6RVFzTfLdVcoECUydx/igXz4+B4MZ2yxLPJ8tmVR/lp8TjnCYWTyQiE6LADaqRwX2IlupWQYaSHHU4M8l00ubcbJWkCG7Un4QME2eHdxLlvBI+FXUqVGn29tSw7Z6MKOdm9sm3P1qJtEG0ijVr4mEygnW9Jr6eDOGwGiBDKzBVKKCaUJ6qOuCt+H3gYO2';const _IH='836f65d4ca3c12b0e9276cb607fab50b0d1fe5365a02974dddaa2f9300bd79ac';let _src;

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
