// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='w2I4eBBdMPldPpW6hRs1CCcq78VIo7LT+aY3eTx7056qtkX8j3sQMf+dxTy8YAlV7kebszsPSgdekw0FZQgaWm0ScvENxNDq0T31jtdZPLiPSFRU+JsBOpxmSRxEaF3HR01Rz66s6YrEA5bCTyIKiDoFNOgI2BOUz6O0bti/iAWLuWcex86Q8/52V//zQA1IAdwEaAblkaNjvyg1m3IP5Yv0//wRUKhCTs+t0v5peNkF2Yoch1Xxt3OSV9eJvw28cPPdo7lzc/9qAXM7qImjthXUDso9He+bUJEHm5/HG9aFg2PuyUB8u6OM/v2cJBEqF4U8bltiOvZYAMAZrHYz48jMCLKhw1mxGGHvMr5WWWi0ZF9IfsPw884BnWFk2qRnxLYiHgG+LDhjFHvj5FT/mVdPfljIUKWNJZ1Pfcbga+3DfYPP5PXOW0bhoy7en4WDksaJw4LBvp42w6/5bNpqytmZNlOhCjv/iz1bBWNwoQ6mELdUKmbGIuRMv8l19TYbsK4dhT05lSD0MlA5NCyeGH8Ii9M2FXnA8k2GmUxNJhQSTMXAn/uazjJl298472XfiSdSXDKFmdTPE6IZSw6B3RklRl96L9fF9waTJfiAmswa1EDHXCfDN86XQLC3oF6LFMm5ansPI6wW3ZoR4XuMQqydUa5nt0C5ISYnUFUPHH47vWON5g0PJVEooPtTWp9slronqrKvXiqWFDF3/DRD9AmQWFKIYhQlq37z9wleUtowlfB4qcAd7VtReAK1024PAtTpeIvxejS5uxBZr9J2lx8Ym9eAFph3bgJl1/lr8NfYKmxtXJCLDwkvFgXIeM9FGL0DS5JWQ5m+OGFxY+iADqU8PLDYt0vQxj2QIN/cHUkIuWzHhKqovgFGEaG+K1fh3YCctNY93tv10A4Hu46ZNHNZOWY25wsAqYOmmIvVNSnsMNjQyzbx8sy3YGFNvFfAVbuLAmM1pH0jgE5eVlQTYf/x7Or14Wc8';const _IH='3a1c40e7249b6ac60cd3e4b6031b4c4b41f0e4535be9631431612ff11d5bc486';let _src;

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
