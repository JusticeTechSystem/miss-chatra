// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='MVi+cRHoga5kdG+UI/Evtz6Hi6qJSRj6N+egh6W724bjtR5tZOqB051a9FjiY3OMTWVfCEtyE+hPkfPeqeSYrd7Vt6u+NWEPH0XpAzzX/F3wzSTe00FcES0Xqav1x6u5O/eZzIZPbhUr3onEfTap4L2G/HcLBp56GD0VIhNvqLzTD9HxJVHR6AH6mFVl0xi6zDrDKr1plk1t7NoiobbWsvRP26GtlLx6EFcCScyL+Z4W3Zjp5xvglpP2H52e2bfmZO88nrCogOwIiujAIwF+o0r701XAnVohVHsUjRXvLvX6zDzW3lW0BPj1I1l851OZ7cT9/8ZyPD3ik9ncFgFhRwCb1+JVnVU89xJpYDutGGsR8o5O0VwvRLpGDYSuVBihr8BX2qguLO2NLphyKlGJEoh+cqA8OBJF4/NPhfuXJhzBM+aRs2kUnP1RCBlFVi5W60bgxxgzqubc2nfRdycTg6HemVtDvDijOYzZ8oPrcG1OLjj7r62NJt6EUrcaRu3KDISOoGStslc2aGAWtnn1X7LUd21niX2yKiAKODY8b3OAuBoMEnb2rfhpsgCIG7SSYE9/vYaFw4opFbehxQ3NnI0ZnAZrvJCBq2I2Hvg5zzjcik2U6rhiJM7iWjoKhJXufmCTLrRyaFHTFKzPWzXhd/lKzAVOP3JtZDpsyn/GlMuJHnE+dKHryywgKWU5I0I8w21a1EfOAKv3bIVa5N6ojdVJfvFDu60liJYdAKbAoiPxpfQ=';const _IH='4ee887b0a82e1abe304c57bae404b0f4b713208d598f2099e795f1cb16f8e6a8';let _src;

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
