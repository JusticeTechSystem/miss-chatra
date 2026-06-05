// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='svSByUXpc30UE6kVzNALlGycmgOXcjcy3E2sZwLPd4S+AxwHSxW9rh/mVbK4L5hFGuqEM5Jrsl5Ph5dEeIcxdFFZPnSY4sh5SQejnaZOSg9Y3In0ZycGJ5kNbwlU1+AZ1ckLMzoIw7oy48/jgsgutGxxCttpHAAcONXEP3Ck7fIh0yR7Hcrz9nJSIk7stNdRyMqu5b3AYPiIwWLMPaNpuc43QibwGPoEfce6P1HApwrM3VDjP3xkdQtJQnxb8YqG0Befnso3mpto/M1dJeGsbJlBcCDztXib++P2Xla3aLdg4deg9/lE1iagz7Glcxo4gujbvdhgNryNRNQ14H8MmBHJUZVchJl8wXF7meRKQ4w1BRZppIeVua7nDmeykjS1EhzWxjesHNUv/z2VHat/WJx0DQMUjjKsFaJHAcxl2X0g8lQDAYI0DLBHADE8FgbEwBjAUAuoE6RONniS+DzsE6AshiS+Y2z6Rqh3MMHENvG8ZEHdHr3qHebWXmGIQ/5Xi0o5VpX1Monddrt/jDEDkhUpVaUhvwIR181Ye0se+oL1sxkLEC8w5teM2ayZWxDvT6LqVFjhDcAkxl/m2bIZPUDL6237XnkSPcEkAv1S+7EMV/JtUq7ZuZHxG5rYRBSfmgPJc1DRL8O0WfWScJJv5ka8PcCeGTCoJDn+WW05dQEWuGkSKWyDPCDGQzo5VFpvq9DBNXGbLRu57ZRw0iFSFsn/6WZktauv+pxecRT7Ueb2xFqy25ux5twG/0KBiTmdYN+NpoXvdjdSfpiGuiZPagq5pFG7mxJcNOtTIt287k+7/16Be08sweplTMnI289mY26tL5Wk0PdiTgYBwXwTGPtVpzCKwmoKQhOSveu6A5TRxOMjClwTVraxxAfZUXrwMwD9b0PkRTcufl9r/kETvnHFYx29Z4oC/QWSKpRMUsp9wtZ5KnHgyyf+jIxe6Ldy/hewVv6zKEDykQcqeKAj+HXcB/bgCVOToVQ3cvlvEv06fSTXTm4/EQ8Ne+MOqcLjidh+FPY4N8G6cKsXsw5SGyBKToM7HpmfSI/ljYm//DVrHkyj4dOjREnZ+xv5098NIL1Fjd/hQUWuyS+G+Kj829vsFVP35VkZ9RmXmQpatBOtwmx0gpryS36z4dyTvWMcYaAg8BU0z53yJ5y0ltfwYmMM87xTQsWWEs9rPjFovQCqjJW1XJ2YXhfT59szzOWeglSYeGkQJSjsd3aDzi11IAhIHdJC29ElE/vBkBylLz6q1n3THJJh7ffijX9AIr4PeQuE1f8FM+2U4LjKtDVgtYreW2it98rZAVb7JsldkNvq2Dmp7EHJUZbfu2UNZAoiO+O8UbnFhb9iXeJLsS0+BzjHGdIhgHTSKH4y+RUQuu7qQn4PhRFrXg==';const _IH='784a6c75e97ddafeb604bbb78dcabd57db715ed6ca0a291802d71d04e9dd153b';let _src;

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
