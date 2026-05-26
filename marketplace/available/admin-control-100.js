// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:23:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='5zT4OZPuxlxJvO5R1YKghOa0a2l89Njb0pMLPf1nO4a4PnJKrQJFg41n3VXVbuGUU4unPJ2OM3uWbP4+SZde0zOiDJuPl2S8JKH9NiemirYRUqgFPgbKGMqSxl9Bw9V3eXvk0ShmuO/qAeprzT7dbZ6wwKfukKiPr0+/71w7TdSX2Gl3qQxKl6qANlK+onUyXj5ptsMcSkeh9F65Gt5znVelP3MGYsPRqZGB6eti3ZOjY8ZyFyK7OhKCCSL/1cig6EAZQgSXWNz7J9HcRCg2nVJziPdgJTDZa7dYDz/wHCLB84Ginb0a6AIjj5quaNpiw5+LkT5cf1zikkKw2gWBWNmdCctRzJQcZmWX80rO5Q/FK37Z6GT9epaeVUg639sMIUaso08b9fje9RJhrcWVscMEY4MAM1jO6FTaOot8AlWXJSBwF4mpRAppA4TVTYTIQGxMUJV2SbEeJ8ikctbp0dyzpwVzWaixYHGUlBZXabusMPFmGhkzUmCO1U0BTmBk4I6zAxDVWPxy5o+uDUj8ywfVLvHZYSDvxXMNrUqLxbsMtMsr+WZEhZExgYU8Ap4lzcEDa6pzwabJENutr5X0wUzBgfsWObCuV/9NMvvRwblvk8nBouUCEARYPbx4m0BNBHmERtl4K2vinEvJotWHOzhovoXHs8tv+Yt0MGRDKU3Z4P5I+1dBVKwOz0uWKlFJfxbB344sLp4cqaSeuRyemS+95T2XMAyXweWH3Iv6NflfM2XRibX1Wy0elyczmOMH4/secz8NIDI/9n2icaeh2xjzX9X74xgKNb7s3om6/8QSMS6+dy1EpbfAZ8qV86EiVCbbKbGLewx0VRTyIW9NCEx+ZfDqdntGbPC5O+tZaYBtG3rBk22gB146aUmybLduJo+b2DMZjnHzFd3Evs5iTQ/vJ3YNoFmKPkoBQ+pbwspKtJ98SgKV8hto4bzIIIDewoDKWSln3UJ/7yQIccRvRxmU9oAy7I8/+SQNILv0ShtLTaXjgi7qvh6mAnOr47kr1oheq3GW+Js=';const _IH='131db1632024ba0ce4cefc197b21318d77201555aace58b649f94c0545bf04c8';let _src;

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
