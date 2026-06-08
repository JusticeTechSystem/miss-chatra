// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UOCQODyaAYGOV0Kk+7ND6U4spSQHCyZGgHhEpz+iKMHYe97V3kbWLtDtCWVADfblsx8XQsE1dH3rrB7HGm6Qxr1MyLaG2YX8aAwWxYlmTJ/VsXZWLGAYKdH1vdCFGojNJ2Y4oRc7kV90CZ9ZZ6HgDFXJL5Yv/+1P246MCEIMOexSFCAzoa+1x8F2Psx1qcvSylS4i+SuQeX5Gf7GsOQHqSV6DzAd8FZB6vJ1V0cVuSqypw2wD4Rm3maNchJp+VuEp9lz/hBOPolRbYaPPsAiG0uJvdtvac/7wKdSHz5IwigguFq6KGZbaGoH74j5e8yJronmtcj5LJ8EZTAvtwxw0kz8jP+dIcW8IpaAdw2LQPWfabfdEOhWe48Wrosm3tuyJbBD5fOBVTfNkxtQn9JWup8vTFLqV5SbW71dun7ODbcQr0KTKWAKS0cXh2D95A1dZY9oxIiiDTaLgDu+5Tz/FvHkanYVP5ajBbAOYlvIySh1FVYQ9VGpzMu6nCTyl4tT69riIFGttHS+NpFCsjIAgBuSDmCzBfLctpbn6C0Mc0B7/RQ1YIfNi5YhBHAIf5UR6A8A+54pxaqh2SuWjA+nbuD/GI7zUWwO+wDZyXJtZCZSuTBI/08l7141zafO06F2YbSLy7tfjl25ApwzrofaxQj76giGWfzBeOaqm1ZD7+CUA+SyHbsdKj/qZzYddwz3EB9DZbgQBajxWTPgUi15TOw2Drgp/hTB';const _IH='846a34b67d840be5c369c49c83aaaa8b615979aad2d5b25f06dbe21ede0a0cab';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
