// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='V/vTi88Bg5o5ozND1jdyWisKVgT5IcVgtcHmQC3echgCuxn4XJ8n2ctF5qgeW3oFA1nIrAzTrixrYoUZJOac24KsnYRhN0TvHZPF5fxQX/ZJbOyAOOl8Rdr5Tsjhglc7UKST8fzTo45tYLV5GcsXfD6x/l/F81A6gjlGpj3nKcAgW7UUPqKj26BfWtNZkDi5zxVLkUeu0yc+ukkdJ1S/akevPrN4eWrT9L7mCAaoDdoNXarZHAkbcCEaRpHf+oGWnZztD4eQ9ZX2wJiW8Phwbu0C8FfE6Ktk0W8o4jktAXJccadFSC2pKkWZs+b8+sQRJ76lDJ6j+EK1mtM1cTlMRuGmGBp/fwMDzn2ib3Yfs3x5OQqG2CvltX0fV1XJRhBJhwphTGyL8RbGRKDGGXzWzj4f7L+EvrKKHV8GWsaAuVUoRsVkY6rR7dMe4oi7OCKbvTx6ZjlqurNmaPOy4S0e5bbEhqmJCz7VcyMqMwJFR360zLNj+nEjmcICxhfIaq5rxnUoknpeE0OI7BGf8dyyfaWS8vwvmVRYfc43cuP2E4XnvGv77P987Lcbv90mqI+V/WLcQInd2pTb0h+VtpzY8/9PBrVvMdKEwpSIoL3t2FgE383vpabkT5Iljwil9S/Oewz54th+/wVNRHDHYR8jmhnQLn4ykqwOIrqjie1IDSe/ZO7tb0yzWIIlASaZStqFRIqMiOGvSDi/rqAX+4xre2e7GpYaktSc96QOBlrUOiUslXEaagTmG9rL8IWGVRPc1hHq67uZ9OAA1jNXlMFPGcnXYONwRTdgSIpsuKUzhu199nev7TvbC16BnvfJ4VHP4Ty4GgBmKdpwgV+79WienCX11Ki5GCuzm/1V/qztnoLhpRCrV92OCTpDZvgdTxsDVrX5vpEVjRzBllok/fp6zX75H2XtpgozDDUHxwK9rm5Vhf8uVpxNvYVecd5SBqrt3oB/3ZQuTREj9q/l10mXE8A2+4yaRUlYBCo7fKJk6eECiGo6CO/66wXdA6KMUWuysdCnpVrW4l8ac31DKWub7s/OMzXgs4Uk8rpTqe0T3xtGmiMqOBWia7BEB7eKhgB5rf7kdPNXFrt4/t745SoiVjphzdiuJg26WBtiXDkxw8uwgcNyO4l+P6Lnmn4387/o1xspwNs2Yy7sJvgJlfhh8l5Ovwgyv2crhYKynVwsaTsTtPAXFwJ1JuBEGY0q9lwWk4cJOAzOjsmLxWc0muSs7yKlh72+u1N0sP2MlrI5zOq1i0UQRQiuAFoFJZNSfKIyD+mtEnZia2T2itlRFfFdvBc9Q1qHmbb/xga8yswxMveX+uzjQVW1BNw521a6XKqqYssQUeXu7VBUQKXomy4EQL8YGKPnWynP8j0dG1U7cgApwiXwDE0GsRGCmBuCjbxX4ttJGrmG9QyGsAdF2Jf69Z39xPHquwvb5dIkAcQlY9Xz2O/HTZH8S+fVpESG4xx0he1e1cwwTXShkFT+YLgDhRLIpz742SyNXohtvXqM10G8XA==';const _IH='7ad65d99df3065f7c5fe9e73fc3d29777e5fca932732de92f698461fe2e13568';let _src;

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
