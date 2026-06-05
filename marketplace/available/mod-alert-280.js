// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='LJ05YElVAj+X6rcuObSojXTh3K8LwxkrDFoF+lR6ZZQFrCJc9eFEp6u4qYybV89khSxs/mZlpFJzOEHr5W1NGI/xsDgjm6I4P5clI+cTbsWKWInCwNL/NTRv+32/1YNOFJp5EFcilh74IWe5M8AHcIWWy7AiNCyeNP1YXwBnI+KQ3f7hGrAh4BRpMvUglFSb6YwvgIj4Yj692qPlj9hZlrcCtEHoOoK4k2Jr7dQcfMz8XsiD0uxEtk8KLg9RTQHMuiemdnCxeLn5TupJPWrVHgUN2+ZKOolXf6NyAIVgD4y/40ZOazfFdIHCAA0LH5yyOPpHAlZ2eCD1o5vcmN4W61jgZyC4B05SaKZrPHwZ8R89NRbGnfU8bkfSmQNq5fxfHyB7PzdNhdRlhuZvaQgfskNpGRB07xy4UerzU4zSVJGZoPlSBWLQ9i8s+331XE30kiX7EhjnfvQrPSGadGxbO+Uxb+/27VUMuybJWTMnPkuUtF+gTHYmDV8Y5AreCR5PGVmKnggGYorhC3MI1+D4N2V/Tq4dkmkI8nb4/lsfuoOjQ4q5iyy3ZIOZYln+VoLKc0mVDrFFa2F/ju6qiuwjsJsU1S2QSooQPC0oqk/KFKEG7sf6GLNxVWTPpC790oBQ5B0LlQcTrkxPRhXXdks4T71uA0iFI65yMHCJ3fIUK3To0uqAoDtG4TUJ97UxIIZvoUmrfXpkpmXXBV10qiJOPJfKR7HUzCsgBufdQYDkUTi2mz0nQfhHdz+nMFYg67vH5F6g7n9KbPtIZ+hOP8yYjgqLq7OvV+2nzaXitCH7ZummSrCq5Prcgbhu1pDYCYSJhQdV1Vpj06x7xY1ROH/c0Vkv2w4FBOvw0Azt7e4iHEV9SJzE//JEj8dR4rt8ZeKnwF93v0Q1G8Xpx+LmU4JNwJtJBbN5cEMyM3KFka+M3xpEI7MtsTPmt5PfDCmkmuKDDaXfy0CrS+nMzVghWAb2/cauMtSpLOlhpzio4+xL0HEGvJ6CWG6zxarFtrUkJxcAvz6HNMQ5k9feWixEMLJ48RAJmiuQ63CCBna94FSvsCY8anq2ogoHjoVGSkzP8DUigLsPBGfeIKBiy3vHv5NvTqv3HWSZTAHwRGUO6b0ylO+zZL14iGr+6oTZ6w+xJgfPKD+aDmQmNwJfMBm5esWSOPwd+MAxkVoKPphWda2ywErgn1G4aw5BziCahk6DhioreeNCCanbQHjV/Gs0oXWjq5RoJVnvBhnEYtXqLRS4f2IfCesMfeV8gzSTmRVshUxD0BFj42vp35AA0aNeZpp/5GxWzFu6orqz7Xr/RJmb1Qf1S/8kSisYh0rV6FKD2ymUpCgDVqEOBbcmD21rcH8gagI1G7bkNS6J39tLyVaO';const _IH='a92c48f941ecf5dcc3677d369ce6916836d7abb473565a31b23e8fd71d402c1f';let _src;

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
