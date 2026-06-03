// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='aPm6QCbSjcAzeLaBXfPmqEjsExLgnZyomLwgev6dSZl9JbKjx8sGtS4LUcsOLdgLEUHebhYKegOGdLLUXXjoQ1Be+CIpfz198Dxs2eBAG2DCIYRE3b5m1NrYfgRIDTeT+/kTnJNzdKGfUCaafRElg/QrhbMW1LU+YKFOmHvkbswFLuG5su86qgXVlRTU5qsAQMiiu8eFLeX1M0WoXdnIaDDnG5eLj7PpGoJeppKQVUVTXpH+6fISpNaw2XopUZ+8Avux2SQg9KCtYokHE1mW2eXFicC0li4Wk2j9H8ETlfuYGR9n/dUKjYMrkNQgJKhaswTOPwJUKtPZZTZRxzbbzQ1fX/LSfuz9HpTlQyFaNzE4IrgghQm9R1svHuHIz15jwfzdp0FmyzJcr00z7XmYWQDMu4wlen3sqglrzoafPJ5GO/RhRgmWrXKfWz743gDlZK+2g7rPg4w1NcWvXtMYPITioAq8yHLGU/m4L4/q1K3+swdw+DK8bW7C1rcFDKb+B9oYMjpfTmCAjAep19E+9cLG1svqlU7XoYNUVIQvNciNFHY0+MRVaWcPsAQLcl5VzaAtp6lLb9XbQdpvuzqPEq9efOaq6rb8s9aLCzPb8HJJ1rjJMCUx6pFW9xZdc/GU3L/xY3nOjVGqPc7+WrQCFkT+7VDhjNyLgRwdCSFr68x+DIPcJvMLjn1M2L+C69sb/9y3mBhmaTkGhf3Kz+WOjxlbck5U/J1+Y6oxja43zaT1MVZmCt605ffEyLVIEC7VTDSd9s0Pxi2CJpRw93kWXoszmi8BbXlz3yAa1f1Tn81wYCLZmTpWPloMraaz4p8EA72jhgL4rXD6Nz7+xWltAjWOsANkHUv9m+AbAEwUez23D21azC0mAGR5JgFFUa+lMySWlG+mCFgzmpVDVLqSuvoH8LSPfvWDAB4sXPYjfVRxaaanPj92NRVL2X5DFX7T4HPaxbo06X0B0+4jsxQ+UjvNCYsLOO6xB1BpNzrvVihIY0L20/mPp5mZXpYEebbRfFLVF2OjDB8=';const _IH='a497eba22a67e52bcbdfb2cfea9687c52ee13a835816f2eb4001ba637c5cf0dc';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
