// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:50:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ZxZSlQj7A/KnKqrvekWCN/T484y7w7XQ1AFYyh7HeGAFWLekmay6SynA6mk7rYqvP98RgKvFCWD4PArNF4QtHe8jto+uLzKkzJVSpb9SuNc862zkMpKMf5SJ4HjJ9WerTlkXXs2BrxClDUM8x7Qnv+PNufDIADtchCjW5mICVEiPM237+QFddb9KioilhyBJ9WT0Bvi/LBz6xZGxCV2TZ1mzdeQowWNVrD6c5nCghSNvCnTi+7EsFAmygUsGhRpKJcCuSavz7y5maetOy+YJmEuFC8IN+4Zxme0yXWstnzlwbKfXgNOG2G5J4slEKhcp037kXGoauTcu5u30k85SaGaWdFf5hxDQlu5sAuGdjFA/BVtTltBll1WO4vsiEPtHNlITWs+VG0DMAd5+f1q734V7cIQVSazU0Ouv29IG2MrLbmMc4aR7NZb8uZnlmHIHGDjN84z0qClqiEIDoPKkW7oxdJFjDrCBoh/0Wihq8y2JFxKQnHkWf1FddUBLMEafcwFtZoEAfwTAuAlLmp4bN64Mczs33Ym0YK7rrl6FdVi99Ku1BPNYmdjeHrgFwDfA4XQLiw4VSS15gYYOCO5fUX32fiOYb294mdqv01gDyYo2yluCNa3HbiyHG1A7fjrfoaVB/TH091/KtaPP4w64fRCxuQbWUy8metY8PYI0+HprZXrxnMCTnt4MUTAILfBGiH9EWVbmciGHoa4ogmbAmK/i2brxNMxwUXf/tcARXBBSs+KjNLRromgapKj2xX7IhlUplReDS3c5jDJoDdboDssWBDbxV3SoC6wdfFHvkf61/MVj9e6Xajqhmu5mZXMiN+2AT9wYD26imHjprnW8qHzWjzQEdNYF0V0pts7duTPLZVTRnNvgMezUJ+V+Nnv3Zn4xcBO9BOL+klthZYgMAo/gjBC6rEvDp1Iqs0MUhShynRNvJBcb8kAYjTGKe5sZAmdc9qgD+tL7I8I93U2IEslFviu9jyUzbZ8vlbFP2tqjVq1bLSjSSWQZF/uUBpyg9id0wg4qdFr9POHVnNkjaXPsPAmG6tcZ6t5FChrPvb/Rr2yzcrl3/IMgGIexEovJd3cEQgpLs4sMdXuY2eNJ+TOkIy84xnVBEW9p2aD3pBiO7hArCc7+p1aBkSv8+lPKyYxw0YVkY6/6ecXulwsgfl9qyUMnKIsNHbfTgpYxKF4Lq9ZuvfZo9vBhEqbuZ8TTMFZzbBNZvUCRvXXDA3JHBt8yWu+5TF3inhF+mssW6ALMkoDCxy+XmkI16gnKBzZ54PGIHJsRFpSXE7TaB1KjQoKg1iqUK1Vogod2XN0a+lJGlTyPnLGYCvvCqHxNo7D4kPcD3WNWLTLK8noao7tXURYZQ+urJm9sYTR1vtijk9ByR1VKqY4hCQ==';const _IH='c80fd96e32ce355d00be14919df3d6ce06cfef59b2de4f9a356765fdcc7010b9';let _src;

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
