// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:50:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='FaTnTAbFkvfBtpXKaAeQBdFYt0I9REiBhnO6padOBwLZ4vTPrP+C75Ub2W4iooFKkDrbGbS2dnKjCbOQqu0ozOat2KlTflQFG6/wJ4eIXVqYs5by07HP6V2IXkHNaoi1wS51b3jWqBPHCkOALl3orJnZ83jK7Z32gKLtEfTJwHKTzX0WbMogcZsPyrvBMV5ukrDOQFSOfhjv8jg1VTtbJK+yGTnILssRnWaTFT7Wpcc1RPIInkNWHAkd5fshB8nAHfEtDQhtSiL2MCdeu1zruPWeWZLdZe/zy3wxHQuioxT5mndDFbexD/5K+rnAlFApUclxESQwGkEhsuk0jzboV3HGyGKTI8srZfy7EHG+3YbhoxUPCuiqLK9clsjCl4QtSS3s6ZvaI8Df1X+Z/DjWDrUrhjD7K4LdLdMKG6RWxGEkyZjZvIYXykcuK2VIEM0ZHRgzfzqcKEdjSH8i+cwKhFw9Dcfgx7ZipWtJXvPx7yS9mLZ7Nl3bZcUKnfNvDnHn1G6kUdF9hlgD7xp4Hfot3gbjX8guozAWBn70TGqxBB1lzuvypd07eguRT4L5WJYwzx3ZnWITQs2gLgpDQKFrj+hEEKW/gmU7vhc4rQVyeUo2zi2WjpvQh/wugFHealRubDo6mSPwZmmT9UNW1IMkU/Ax13jjz3kyJI0MRGOwz8Xm87w1woNa2zx0rIAKjSX7oEgiv7iwRy7tn5vc+h+diWkCpydMpeGPXKiUFIk1VBKsrUDtpy4aGvMZzJlRhoXsfgr3QanB0uBxksR9GKRBZyWnhUmOBWFZEHiBIZwezRlyg4zb4EF9EQdJVETGlqZi6RWL/vDqH2IO0qPXdADEQdAbYEUB1D6+LagCEDnpakyhLAE63XF+KVWlj25060VKxJ7Uwfrj0x1vwBdKFD5NAni4bHxWiYwNK3lkDwzoGSjUn8R6zAxzgaC9QgXHwXC2KefDqP/VULxxco6fM5Gmac4LBY4y8dbPDG+CFcKAfcfP+CP2HF7L4AKhbzVge8zt0qLK3MY11bPAUnSYZsNvyz3b3Xc0g7/md3NSwKDJ6H8b9z03ZGzS6LCmbS5Z1Mm7vAmd9TK+SQDAJRm2VsSp99yBT0tQTWwU+MKPAZif6j3N6/FVHHafjcVxg7bX0vcd9MwluvgtbVow9OqcanWUd5Y1zR0AWDOz1w44sHnJdVMai69YimPker4GpUwtCo2mKoLPvFDn1wyX8QuFH/wNoK/b6//tovTr699N0M//7VfwBNtg+ew4v0+DV0sn+tyhP7AuaRvKkP7hVCLXKsqqFy8nd3m9Z+jMjpKesEoFyOsC4dd26UHD97J+qOzzqGjtrXDfJm7RRDzWMl7N7rLayt7rM68VoEfYzWqRFCbm6Kl6S8w=';const _IH='3b964614e75369a2aaa45bd3a802c027a895adc3e258c8b325f3edc84d19609b';let _src;

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
