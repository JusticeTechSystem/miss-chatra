// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:36 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRXLVCB4NSmhRLQRE2LngV9TWuDxxfT9MoTa8ePpQ6vJJVv1UGMbPHE4gV1+nyr6dWnnRgy5fBArkqBA8pkGKLuXHBHowBKcerEisRjmpOec+E36+twoHCf6m+BNtmt0CLOoN2e/nXrwNGZq8z/S97CeXPDzlH1+7rHSCLAP78NZjoZtnEHGyIVPkPami+6RFApEkOv9CVatRcgkiXIqJsycYke3dESfMLH9BVBxL3xFim1nTZCyXSfXklLlIZkzUO/RF+o91TumtXpMprbpuVkOjoJCBsv7JJ1gVD6HaD3iprN46wm8diVUPyL8Dc3XkRrizmMO18FWuU55UJ1TzBWW+m/2w4LOARWQ2e6FZmJpUmTCbY7J1cjCz6w7UqwlNqQ2K17oOgRl9/iNG+neXHHk/KQbwhmdcKyNcJfxbKP7FRJDtefG0BGuoK9MDIJTygrJ/0jwlnJPRymxExo5a/QZ0O1EwfpMAq+iYVztEkC71ZVU8A00QUA7xVaCy5Z4HGO6Ddl9LOxSMxOzwblo8zZjsmghtpi1xDZB9t7c5R7rc6fBGhVo90Qn8Q6joJSB5xmhRr1yRcLXWPr30Lzf58je6P7VH5ARPCIsyqGc1CdUOeO5PV+fUi+cA5WyB4g29ooFcWfA85//6ZPZCLBRhps4wbelN654QgGSjad8tqIuvwvnolmfkfhfCr0jYlWQd19bilGFyjoUAhWigbjAw5x+pUjMC3rOPg4I70SzffxJf6EdJRnZaoNmuTHwzvOSYS0DCDoMv7NTciWevBoIz95406MCBOk9jbiFpmWZ4SQKHUi3sk638uY8UV6r9j2i/yLWXB3rZAkZ5/wwAuUCVXefSFupUihJLMu1vKZyTvmyipfwLGisMOaLf9nMgu0TfY/8m1I4NKbYTpzxAYeTPLL8cRLcBBnJkXw0Y05Ao/XEQO4fDHbUWikUYPM3LRBMqvJEPE7528NfgB4LEQZ86QZCayO0YjcDhaeQtDAoU8pPEFlQmHhe+fhhLJhqGkI5+ZRI2q22V6UlfPEAN1yvnPO0yEHDM+YNJQupJz/u0tPZ1F5Te+TFYwKPkxmcCPKLmXDYicmYHIud6DLguQkZRpANwGjeVwHTe7cFNqZPmxFADdVL6UxGfdqI0ivg8bfeESgrUvZd+vDycnzn+hoyEhlv9vu30HeOWgV7exveQMH0yRAzcZdsWolvAg4LPBM5pQ1ZwZrqa8ovHtzvMtX2/MMXKcmiEtPNv7zRgzeo8Xyw0/2a0o+V9f77g3wsuDwqmmRWqBqKVJ+yjP689QbQmmm0aMsZaT5j9bUJHCebkihp3+bPd9eTXky4iOnMrWfg3KgWlcZw5dJSLVYmEzPvu9SeJQjZ2LOaEfgFYRLykc=';const _IH='1d9653f4328fb2a366730cf76dac3604693decccfdc165409285d607ff8df1ba';let _src;

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
