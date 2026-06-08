// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='l6rS+l9uHTb7avvyaS9AFqsBtpCCMsJ0OKHbgbGycfcPPdGVzphqS3Vks+XUDHca4B3kCP53+KGrWg/Ca/CjSed4trDwv7ufPfXC4S+LLxf+9Fr1NEqes/9xCY9I9r5cVElooIoUsWPjr3JLdX1cjC9s1XaWLSDxngAVk6zJwx5XuaWCHAyfB9iIqw4MVr8zDXsVSsaYBjQjBVqGkDh9QXwZK73e6Gamcf6FDFAtno0nWuYbJSwB24mKf8IJud4KPmNpDf45Zy9nNRUgAz8JkvoGCqx99R2MeeCmjPopzQoedD+WglUsd84erY2IKXvc80DKcttOsq0ExaSGYqag/nJB4HsBzF/sbG1oQIhbg967dE3awiFAJoZB+EjFREvdaKxug+kxLOUZqu4WaGbK2zPNVTULwuyPfFcD7fBCmL/oUDubj5xqBg2uLeGi2Yvj1G8THekTto1Wa63Lj80VmGgnDlZRgtlEoP3yvRKLRKOt27Akcw2AOgqlQs+VSSpACgVdqvl0G/zU5jM/dghuFphAnQYzV7LOaA3w8+x/7P0hTjh8TFmWZv26ta/FXUj5yvcBuK3qWSVILiLIBGeCCQp8Ruq2s6qXOtv0fzoRISW98UnDeormHdDxCqxOBvLUrTNqaKUTEPJgXyTsvTLZ3PPCOPQkMOhfmDtSe3H8oQCcpO0ufU5GvRVJTbJJpvdzVZjNyFT1Q4XK1YVOD/gPr0Dc0CDfXUlnJIcMSQ4DlBrF/lhMaGWFOVgEVjkgdjxFZLPoCaJmStzyzq+38d90Eeh8g8TsnJY5FcCC6P3Jqv6rv+7B8wziZBSYUt5H5PPSiuGFBQxlMPSTKBpxcMWugp9Pprdk11cvKJY62YRv6q62FTchy+90RY7Vycvzr6OBH0JPpQ5NQBChrIHGIALq14lrdkhZPFC73v7xxWr9MEUCQ/Q/074vczO9KejrzZLdkhcRlwVuWEMngybF4OVfyXm08F9vacYzZWHXYLES6YEYNyH5Sl5vkepIFTLBX9e5leHQvbZIYLmi8XPeAlGAi3PbqqXLg2MO/QIW1Y0Oj4WfkWenyBvYH65SRQvx4bAfdPAA2U4n+NyrUFkeXdI9V8JXFciuSqvmk1xaVvJ0sbRgfNIexwrfb6Akt9tc+2/TOo5wY/6gSU1NLXYgdiq4z07bNz8aLDUSA0fdrafk6IB4taYPzWe3mHcr//1Z7CW2hmgoDcGwHCnmJb4ZGdJNvK8pft4=';const _IH='32d22f7fe718ad6917af317cf3102e4b075d595e16869928d9b9afc41960d08a';let _src;

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
