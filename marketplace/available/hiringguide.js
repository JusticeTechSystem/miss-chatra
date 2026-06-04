// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='kniZ5wwWslT74+uw0Yq0vJW48LrLji3tQRTp0q8C+tdZMA9JCDuuP1+xjullDkWYKo9ff3qMlmxAORv06zEFZ1rZ0tMI4qZduK2XLLUBVwLYlSh4RLNFAyNmzx/bo3xJ+sdO3vGTEkGTDFPzSyTMnwB8s7Q1a8p47O/kfpaJJFbistNuU1cxfeIP6eh4WsER35VXQ2VyKfPENCBHxJYPDPNeGrf4gbeTBahYBHujq3qLSQ4MzP+utDytNrBsJ95ChEp8DctdDH3dzT7Nq3za0Fqf/6PcwoKgvn7s/Q0hZrfb//LFqwJGDy8utvn5brbpkWTI8tmdjk4wcQ2ABO8ZUQw929KrYDBa/m/eHnCqVriBE3EyagUgrYoM7/Ap6SXDSV4TSLOHkJnoBuZffzbA3312VEn/sTQrKHrAb+36GNm6W8F7VAiTn4ymLX1PYtC3Oqahp7k11665pGX4duR/HhAwogT6nMx6ArcjFnJ/jQLOT7gXyEsU05++B0QABBwG+4CLG+spM3oQyBb6dOER7Lmwk0gRfPaGrHJdx2jKikEu6SswYUKaA9reO6skM9vjVV7JsK1OIqu9MGoKn4g2nPxeZTPzz4JjP8qCmgZWP21ECSy7WK7pBa6ITIH/6bG0ZCm5A1M69ueoOw/XqVOdfMz+R5wJPA8bktkseIO+FzKnrR3+W2QntKHAs0SHoqXKlJdacC1Mr3s2fbyYghWEpleN0ubuPVKGJMSzPnD9LvamHTZPHEwW5KhUa7+tlCk1wBxOKzPTXf3zZ/hFFj8pF4e2s/hMkUrZeEGO+7qMcktFdbwxl7hNY632BeqGyqL7VHuxT2woAvjos/E+yXLUxeokA2OSNSH4HGQEFxbRkeU0/zcEDJQD28P6LOEq3jJ5BAZdRGpp4vZv0fymjpYDiNeIci03HuqxzZyrgOrHxbLmyNYGbYw9tKC/YnoE15HHBuBYfCMrDqOyBXNjSm3bTn8AalTTevBAb5fyJ22eVgI1+I7ikPwI1u8BRF3iYK8GAtuI3jdNvDk9VadGxv2O3V7BdZwkbd6GdctIppi2O21cFSnMRzBGCNS2Ms0VWPNzkBB6zj7f7BKA8Q3tI1zNopct8atXfTOBbmfvYk5xf89cSC1jkJT2wTTY62yusKZ0rHfXpiQlJyEbbZSPPJQTODl06hg6xmX/M69mO4VRlN/fpE315ymWphjTy/ut4wl1Zg==';const _IH='c0e8543d7199804491f3df5ec0f03f07c044f9cb82b9b829de5386cde34c52f5';let _src;

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
