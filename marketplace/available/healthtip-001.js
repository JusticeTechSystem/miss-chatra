// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:30 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQca1kY0MT8EShkZpKCXcE9f65sFybw2V/fDwUcIMQwT1AX0dKwwMAyeFLl/TQXar3TPy1+C9rD6/fn1Oc1ZXGyuj5z6eNzgel2rhkAiTU0QdBmycUYZ4wvgpN9xwVsTJ7fCKAXlt3jEIq+8SHeuMe9e/6s9ELGmlWbgpPwpAWXbrVo6j+ss0R3808kdrBVHnCDifV9DUaSXSS9mq0L9c5AveCN7ZAmRuPazehy//O9ARcR6WHqqCZZEg47xKjNyDpFSiampU71IUM1XIsOM4Q10BlPiFQnH+l5VAHVqncQiyekddPtIVzM3AwF7LE0J8zCBbRloeiNelPIqu+kI6D/99N1HTTdgl8f8EycrM+6xn0Zprw5cxCjo0SWFFXgGaSH3m6bNj2clr6G714LfrRHNcsSTn/YOeSDBbkDnU/D/lzPFBvLmfYU0745IllARlMFsofxzR/zGnkrVk1u+DTbecdojbSFLPpw+7+iJKgAo1fTBN95pJNY0lEIgdFvz4rx3b8FcoOLEYnV7SxUSXI2JBZGk2MSJRz2NGns2PsRzoMCrPKTvQYV3ViMSIO9SHN5GVnZyNpazNZnSLMGUlCMLp/OAv4hrQ0Uq9TgYsC4k8TIWSmnSpvWE/zJHQ3Mp2UFeFixtMHBIg+wNLrewsEYNHRCGHv2WhDWwgV/GTtKFXNMB6kelRWO+6KlleEVPubmxEIxOAeSYeBdv/1+5LayB0ucw1ottqOcsO/hCQVpjInz7Cj0wVL8eKTHDhG8sKYdXcP6AWxRrkCiZ/04kCcTqR9I8tkt5MeS2YILj/E9OFY/D8FUiB9MBr2ra2K9trxsJCj1hSOQ7iYEpBdGWw3dQErGW21eMpLcvbe85WDXrcUU5EVjd+iCTHRY5Ld30oE2vcdhuwOAXq/BBvhEU1eJYVtoi5bVUZVSsRzKzZfE5qnlwa0Uppur';const _IH='425a4353d1deaf7960b41ed4ee6487000b2914f77d9b4e0c94e1f2f41f4d487f';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
