// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:47:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='GCgd0/XamP7fmTgVFJkaRFNEakdy3ZnAHIc+ALiqiuFJ5jNFLeKbif9mKVQ0V7bpgTvO8V8i9IuNAtsRMBb4/zp9JlirQL0IIcRmnPp/eTBcn8v6KnAw6DyDk131TKQQbKsJRQ/yGBmzJVwaqTseg5F9Pe2OQtDJ8XPD/MGagiXIWeeieB5OJvCKQIBYO4WNcJMnbxSqJ9hO3csVTEpjjLKe2L4TqugeipH/8OuUMcUlc9+LnKKQGzRxcfGpXZjKFnjbHhibKzgS5ayF9Z4E4lags5nu3t9TSXgZv913cVeB/c92fiTfkRIwBNHwwI+st8I3r8bOqd/1BJNq+IyyxtegXwszcPxDRgoa8mhT4XongHrsZgCqTMZq4+sW/+BwRgTxe5xrROfV5uxQPqK6Jg2e0NGGEYlL4AZGVI5Tl7Z5h+VAGDDkMKL5gh1MYzcOJDiXhs3NGfbm6qp5+lUHakR7b8C9/X+FHYJhGsasq7t2gO2MA+vt4FfUnpFwAPi0QkZ6SFLnPLwx9kTLusjgiO4DsaMHF3dVQz6GzBdQMxgM3vCAypGkiGDLFdzVr8Gqz+v/goLnpTmot1IZ8tZw9KbgrP9zu0u6SuDp2rwwIE0ASuZlVnuudZV7LP65Q+vFo683wIt3LPYT+YY8Izj/Xm7Ti/Wx47SQgtrmZBcDRrFuHnoxp69JRoOk4yafZ+Vb+rjjdn4cCPtvQ5S/xbvnPs6H3hD8PJHHvluSlcmMj63qr4bbSoHDicfx5t0gWanzAkDt47YvEm1kUtTSaW6yB6B/WXIzjLgCjTDhkzlIQ1xJCV4NUk8utAxlGJKfdnv69Mi5IBujTuM71CFsQ5k7ahYnZOZpSg9IPUAEj8gDO7NHvjKqjeCZ0H23Xa7xHH8eb5QermoTY/cq3mQZH0SQoZlbEu5tmKYutQPn8PkowehR5CzKgUnocg3xH7GA1rB+2SEa29y4Yn9ULQTFifA8uCNpWbQlQKqDotyd4IzCodKFoYEyE4cQx9aYy3oHrWMh8DKT6qU3mVBFdEbd3/ylIPGzoy6yW5U3O0xqhmK9mYFUyhIKsYPEbrg7t/XADLY5VmdEkgubBX5S9ZS3pNj6ME4h+wgi1PTNYLKFA9pGqY8YrxK+Q+2eVP5CUBGY21Dz5Wmgd0GITvcMXi6ax+uTpT3zPucpaiCMKpE63HjBf8fIRGZPYGmb0JbM2ASfLmi+AuGHIzo3LIGj38f1xbhbCOnPV4o9DICzVW86baDR5tT5IpdCdYBu4UFfwZTsrUyhTrvDNpVLUf4Ee7R7YOwOa+QBVYOfSPGlDBkP95xCHB2bTj5wuoq0x9FbDk7KQHYqstzVtwk/Y+kLuXFI6hsYx1jntbJNpdN+EA==';const _IH='a4aa7ff9b3543daaffc5f6cc86dd85714a06dda661dbe73976d2ec7fb1459c7b';let _src;

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
