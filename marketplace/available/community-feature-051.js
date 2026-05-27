// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ULZrIoz6njJq3iGI6WpiNPnM2rOSb+b/wfViBOdstVU8FxqpTgpxV+Ml7/G7wfKAUeP6MsmPJv47XGTd0lPEDtoSOaPeRixT6JgqyOmmFnQ3xDcN6U7S05Qv5gCqy9R0ev/Q5HsQzduqy/l+GzRWsG0s3URKQHLujQ1lVAKjC0zHaHBeGkCRxFnDtma8Ku6UKHZh0QlCpdyMW3ge7v/G26WY1R8bn0F+Yq3pWrLIMbfQqs0xLZQyuhspbyfZBpu06CgB+QeHnaIuIG58m08Wn9/LDJx1ETCp+eLC3ln9KI+a4sphRDZgtFNZBCbcW07N5YSvvgfYMat/lTeWqw/8A0v3vT/wjnoPjclrzmYimiuYTfWGxo3QsYIK8mD7BavympHykf6bDecXHDWQaOfMrc5/I8cn+I6G77HzcpvXe9GzE8qv5yJqy11fWfxFI1FsYLOaeRltRcQ/jQQRxd3RJU5H5rXVnBP3ndXuV0sC3Gemg2N5VgxZUORMItdwjckf4+IZimz9Iro8RLjtf3ceaqEHKI6OMX9/Zmsg4SPQxuDiUhchDQEzmTJVY0giomMLQcmpFxaOgGCKY+UYd61XPGctEOPjzQEHdefou9bedwNnyXerUyiXB22ypOf0vOcnlItBdXG8OxY2b7YdtNlDok6IE/Q7wNKq84vXvebTmBGv9E8Mlgzb7RztJMu+lqRlWSj7aRgk5vjGp8NSYwW0wbtY9RE=';const _IH='067877ceda2cf253fdffcb0a5fb4f35f72025cc1fd7e9d9f370cee1af75f8c3d';let _src;

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
