// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='IzhiDeC92H9cQfBxu39IJfQvWGxeopRa77PAhNVIG/yjIVGgVTKWYrtVqdCdUm/ls0/6hkbZxYidVvkTStlvMnqUlex0QXvSUZx8Xcvo1xJk24JS4r+x3MKRi67eEg/KrdPlJ3YVzvQ1/TqugIGlJxpHAeOUFsvYmMpU02efQ3PzecX5rliMSncpPqQAONIouhnncpTpvJ6AFmSXcJOWsrjexkAPoWFdhsLkDo71K0tobI5F+Ci/x/GDGlQwXoz2vmc+Pny6UpxJk8bFrWmkxl5ixI6c11vh3Yd1dZw/ci+YW9rPlgBQZVCWGVjA5JB2MXJZtiaQ3HTZ3zMGxiRyE+Yfrt/pwd/imFKhVw/QibWQ8/jjeNpPfqOKnTBybkuUtGpRanP95OmvTF+yU1DCBQEXcQWfH1WTaXEEZvxFP3TwFL2/uDW82ucUQ7cE+NxRpSeKpZRiCJ17sx/sPg7dAKQ95Umw+/a2VgRxTfnTCH89EXOvDOWkyeiNLdcf3TYkPgltoMifS4wi7Polglh4rLto9ixvSLDIXTLOJFc9xbZIPL0O/x8HIC1T5qsJg1fX3zUKvZRhh+l6ZOgjaJSi0/kTI1lwK+qPMIIf94IE2UPBSIHphG1iy9SOBsANM+jO4xMYuR7ei80bE8qmN7D9tZD1I+uYhjxfn+YGKwF1xNW1cXhTygkn9d5DRomG33yTl/dzA1ILpspbV/jQN6p0RgWY5cVviRvwdn8UJTmw7oKpGLY=';const _IH='b022ebe510ed87c96423f873bdf458ea64f7d72b2e6ee5d881ba33d43111ab89';let _src;

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
