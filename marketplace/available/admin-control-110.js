// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 08:59:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7jBdQiQjujKg5rVsunTBJobnj+1RsCJYrfJ2Mhcje80awe3VYp1JEUPQhLmoMyfoKb6VhRrY9q+ZbG5QCmjfmGZzC+haRCVigitiPHF03ExLtelgzMGbEZQlkhkBTc25MprqZQXumLbRUhHlVq7h64gj2QSqoAOlEdqhDe+eASLNixWNo0hi5mvFndJvxERc92r3FbnguTK86eJJr/CiC8sHDRqL+SYeVkKFT3xqU9vvsvxZv9yMDReo21Bx1WZbnPQKphyXLabSvB8txHuxWfK1Bb0TjDLjyYK8DjBXOlM74YKAmxUzC6heACGQRFO74KkUtcwJObanyYpazAj5cg1TpSlLnjp5C7ofIeY3GRZ4Bqh0NvqpLJXhuIOSZS1cK6E3nz+E5d3X8jm4jBtfuNWNVWD1TuCSwoRSgggXegTraT+pJZOR6BuqZrXwjQlv/dPhqNfYXOEgnmXHjmzHnXNh7W1BIUftWpcIrC/F03SZFdLuqQ/eS6kku5f6aQkFY9F62uFNa7MfmdKGqgPCblbVMm1PDclKaWtyVtNRkGxr8BBMSa2xFa/pzbR183f4UnVMsIHOs0TxMaQ/WhEyi/OakpkvuI62JIVPlq3kuw6TNfNOc6ZLoIAEzQgrFBGbqQaIvf43irCSK623wQjQTsbVi+J6ct+aFYXd42RpMIHnDBp9ew/PQkJR6n0N2BKrMtoJdb3crf6JG3/KQhy3Nz6B50gjN+yEzhA4u4WdzWc4wilX4/03nk9N5CouWzvghiWgJVNG9gHaeaWGLsA+GDCj2T0XrzelJEJPxRb7rC0qE6lG14GJd1jC/PeDk/GeKOfZ5WqPfINoH1u5VDDay6Dx6JIy6HIzqXebTGLvcfap4hOd99bR7xAl/ekp2HhPDc7Q1n+yIhyLhIu45oGC6IUaSfPXc0el74eQ5ccZyD3CYNQnUnrmuDFumHE89w25krMZjN9Fj6qLmllgmTl+mnEgwA0nKKEmGVq5PdZSc00y50nos5/PhX8e84YfauxalXdsRcrGONA=';const _IH='ec15d589268486d29b4b0c53456ec2aebee4514487d6608cd22db167e77d86e0';let _src;

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
