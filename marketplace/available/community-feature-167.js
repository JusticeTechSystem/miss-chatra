// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4NG/uSm8AEUBXK/95jhfVuelGcSwAxFcHVxSlgRZ3FwUawq7Rtdc3o6Nb3opT1xvEU7VOezCDyAtg1Ugbv5/tMRt1boj94RfokklvZlBcoDtLx2TUn8W1vD2D/9u76+piT7NsnqE99nw1pqb5z5UY3mHfIxQETIqWClNd/aGjgH6zyTGLJnItl4dqiSJV191oxHeZ5V2hu0EZlT51d+FDFf93mJSZgiI8vcQWeYem/o+XBtd2oMih6SUGkNfy9Ytpim4UdjhsfrKpMpsojvbGNERg2XnBXKzf+lwvpZe4ylac+6ZQnDEoQHVj4VF8GXZb8yn748T7RwtjhATiMeCfj3f7hjT34TvbcJQ3OlnBKWO6eyJ/Q2XhS08qSBli6Y9SNiEmfBxjZhQHRA9hcfJR38dHHutcRErsKdkkCAXGMuNROcblQu53in7H4Z7Pwk0UXw316OVO/ds5WLxQFiwRUUF51fj2MRm7MOcQxfrQhMGA6QWJu45exRS5IoOWRMjSotRcuPRFmGysjQxOf89VrAlHGxXjMyD/tKqeZbOU2CYUOi7yW4AnlR/EyVLJ8Y6am0cDyEdmhONrOKdaadK/6wj2mGSzvT6yvKm2azSWYgFJSm4fVrrmYAOfp+VcfFqNn29eM9uc5IT1BsszMP3UZnuO/r+VH6IdEK/K8lJJwsbML0j2SBs2w+f06C64ojvwP80vuOkPqKEjLUgDz0L12xtzSZmoROSaSlWgnbmgbtNEic=';const _IH='59db042b702c4c03b354e949fbf11db13e4568f722690302e64145332ddf57aa';let _src;

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
