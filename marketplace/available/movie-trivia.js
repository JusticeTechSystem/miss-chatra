// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='q0f6NP0+8VBQcxgUnaA/l27uzjhi8I07fVj1jLJI0HhFzjPS2Rgcdj2njpvLxeA6iBqqoNLGLjndlYBA4BgPFUUQK1kv2DHr9qRWZAKRNWALqm/ueDKrtJQbAh3HKGXN1wirzLOGoZZmu/0O8Kjtkf2rXFcPXrPbo+oO4iDijXuf1o0J44q0q8LdKM+jmQXb2fG5tspXM5ZICWrE/vyI1i+WFNaMoNp98H0sDi3CeYRjFRmxXcgqPXfqRABHNPPY4TB0AK8yzNJSzyxFFi2QCEkK56FloZ7U8OXwMiUAxKfv17Eqm0J2jturjCWXYGCRtppYyx5YDx6s91TIGI6Zkq/S9mXaYyimdAhC5L4wIn+73Y+rM57PF1p5Hv1vu0ENY2+jy2G2E8rZuUSZ/HSI4mKL9jrUh7LWx1fgXAfPNWDY4/v+2SxavHvVbmkyLzh/7owbR0JXDSFQBaHl3jbWZw15qKNnqvt+ZK57H7n9WLpYvT6FTuJcbv67qam6kSP8NP5nYVATOlRmTjWJK+dqFYug5BrFwJLeFlhTHU1KZy8D9uCVbzGQOx8P9MG1Q9NpcwQoOvMg216352H/3TfFcSx4QK/P7bjrrYOor4Gm/E6xKrpg/em7IRdM/xWKG0jWmtmyE1tC9wjvuvcQSTnljVJC/mEVEzO4lFUA8c2KquFkNddENVPP6IVYeONV+KFqNafnJAr0coxggtR5C4qpcd8TRa9NRJYTg5KzlrrJN2xLR3HEdV0PYFaDqjnWt6nFABq7k7i4MGdZtVL8YyvAOjyau/vMsu6ri4vyuM/JSI7uJixiaIRNKfJljXi1/ONp0g2KzK35odVgWuU1y0IHFbANY4asuga/AlfhcadJoTtIbk3n4skMxNL6nwx9eTfq3Q3PZG3fkNqTBHyeFWz8mIVxkU8KE1X5jP4RfRlvlXaXbCwl4Noi4NyfxdADwDU/sREKBsoRhHvmPxW/qjFouMUy8k9ry7iBvF3ckpCVi2AL5Mg6jg+2y78J0jWCo1krIonUhRaLSAUPiw91YRjM9SOkDAlPPngEq0W2RD1gecBWtMkLvPtrEmUelQtap5g1zMGJXZZSmfzDHIi3JK2g/mgqVL2tTIo+9jYuJ1k28KZzdsjaBw0iQRCFSdCB1AO8hjWdcMMoBP+na0FVAeZUg0A7dfj3XX94WTeRdebCTXk6gZkQJqpOAiX9Zcx/dv/mNfbmSgqez3OoGonEJnMCs7+2l4EEGPng5iaoaf+9/j+rrea3WoFbDlejHde2eampStIGn3jPYjcm+SafcpHLiaQDTCZ0unYs80U3hcOGj0lm1MT+ixE8B6LtKMFJegxlT5IDZO87w8q6Pyv0Mu/HPtNsEhIURmpcl3x9asVpSocFQD05pUd8s7q0ziqwZZLn0vdwxzF+aVXwbtZOB/4gXMfa4cc/77YjFjrIkTENR10e2Lu1yUL7fKDRmySb4bH5XDlYs0FjxnS4w9ffewiKN9gRB33EtgruCN8hLIaFPeVkqFaY1MJ6';const _IH='d740392dc413851aa41cec2470337d13c944992a8c2074f430623432dda8b061';let _src;

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
