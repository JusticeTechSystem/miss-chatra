// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='FWPDmCsfWp9RMEwxEDgcpHJmxZP9kXqy7oeCtydTrHj8QdDl2vHsNdPdK6YrAmNBv/0H/HSZ6fbfZPKswAxhdVcOgnhDhDht7d56meoL/E2vys2w5ZJAmQAFqErfESnJoGXmqEg+JIbRXVOpNqZcHNoTy8BrwrjM/NJQDJHQ7h1l6O0ovFR4RYwQ/jW2XidVDTS32XpBVzS6N2EwH6uJK+jqZlCmGj4nG23Wlgvt/uhbzZIZ5nhmaBkoeQhGeKpcId8F1ipyCGfvhYfvxxaFQqD2JNsZL20Y+0z9bZbQ1qQOWLpToB2Y8CYj6UYLCLziWxS7ouDtItYEsZU4AIYMgBLSO9ay4Hmzz+qD/0AdsmJLs7oxY9qaviVrkCb6KmyZTQ6x2zvjLkH2vE02xqMBOyvNSa3hZujWt+IOPqfU3fBPu1B4J+ZPxNWQabDau4styMlwugZfxjKR5dbbMqf0eTGqA4lvJ2VZDVS2oFrnYbDMGwGOQtqkSAzxrVnSuwZpd9zUQE+1kX2U9HMIC06RSMdAyi6jyCDQL9KT993hLULTPpwYuLPkE0LlzDy5vaDUIbJKojK/wmptIOfHzHeXi06yDUkdDXKcPHOYLMN8t/0RtuzPJYKe4TRD4kR/PtXLRp0kcsnScfNHdo5iFlr4VmncU3MzxzHSjxaGYMZ57WIFRydxYdIiBGntkm7yLVsQUwqUFY2puDmSvte+TGu1hCCZSLwobZl0DGJ+mv+8qUg552uxMnCKX29ZleMvR0WOb4xLH+rwKfuvFWmAu0W0bizb6RFaUDJCySe8ZqBlFvReBYQe5Bb3b4ej2Ac2Aq7B+N2asbMihtX0XwmSqUc2l9868kwZlMFLxhNKCNfr8tyP+iSS8ZMf39OwftwcNyKSxm9gjVhxDZOBrfn1UlY3REj+G3e+svthVCMr6QMUDmS5UK+hoj07RHcOb+ZgbeM7+qq1On+ww2zLJUD1KRxcIwBzv31JFS2aJjzK8bIWkL9011ieZzaqm6FoA07Aca/5Lg3tjYf0v2ao0K7YoYl+ZGRkeiD/84Yv8ke3SvbnVathkkwTdRldyeedhFhbAgJPZU27ZxG0fugGTlVuggiSsw96XBUWhMBX2AD5PoUAyHEWXruJp6hiJYCA7vQZcgWgZ8YhN4dWf/Yh+qSXafg0y96UiA0wtGC8GqGDXkuyKXtDM8JQl0wzDKucNPU22M79nCZoIVnrhvKa8py8kyZhwQFT0xUyItVPQtUmlvsva53iP066uXNdWUQmNkw+JCQNNnBtzfZe+MZJhjxUE1InIUiSN+AHqWziJlK35muEzHgqiOqpS5pXVbHe3U3VH6JKEcu0r8zV9Y8U8WLiGFKBtnUrfzhlG7Y8n1FmVcZii7LoZ7RDLV3ldA==';const _IH='a0929bc86f5b01605d78a8abdae0193891365247b5d523d1a5a97654e3704678';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
