// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='f8w4er/gcnAXwSWjY5F14Uc3elZajfdDIdNpcq2FZkI+4v+W06TzZEsq8ODDmaTpvBeWBwNq4k45vQ5LmkT9N/ELzj1lpVZkn15k8dTBrknMSBjMjcGxlkyRLgElJuXwCi/bq54OJ8I6Sqczml1+TklaX+bjdcCciqO6oyk7cfM/ooxtJharIiKofRGO48qtFtaPseDLF8dvqTyNsQt+YL0JTV5vX1UhWRNBBJLk2UQWz9QMsOPTuDi2qf16jnJHiTN+MnKgHPdvbbD1y6kcC5MuJZS/SKJrlJHDorTelnXqCBpjuwOTRE1/Vd2/PZbDG3cWMm5TnChFVO7o8YM5uXYlGU855PlxPI79Lg7O1CyXxzYB5958WMzeAxDmOY+zI9cdonH3MGu6CKqF157dVMopqHCkU/k2T+2xW58QshGIuUzmF3NEaDVC/jzn/fhCQwY9HbhuFDlSLwDn0cRpSUaBPTIMX3MtRYej/7nJq5KjeJT7xTrfPt+/ZkcjhscNmSvbLdsQU2oN7RL0HBJcPjzz4nSzSOeJ/gbvjaKj5zfXIgSccnwLmw5TusU+vTHxN3kfmbEVRgZb7vdjVnTwIfbsdblvMfChLq5NOyWUEaeLu9J1RFT5zLrZkTElhZ+4mUhWsCK9KNoAgY2KRhLuWBlIISHe0Yy7FR7n5IJKpjUe9+Qp2f6qsMe8oPbOwf6L4jV2SwwD0ZsvFVxat9+KiR8IIgsBuIZJOkcgqjNiLyNjWALHVzK55XKyouaeb2jOf16rCCzFm1BLYVqCNqPKgcWQ6c4zw/iy+5PTfvs8xOFTYdaeIOmdueTCw3hrCC8tgSLn4GpSkLaSLqSw63vgCeGEyxN+9B15CfsHJRB5tadAGAQGVG/Ia3GSKtJNfxl/5NyL2bRMe8D4zhUTCz7wiDFsCwyhQLBrEJVRUcKAkGLq90Mc6fGGwpyMDnOS53/q5nDUJxKSlZTw4/zfZQm5hMqmXsdw6svCi/8245fC9ieDz4Vn1OBsi0SlzC9xeVIIWqraUxekkUATqbVjbQ+b38W/h4GdOSSKzlp2a1emB7u6I7Nbopz5M4MjtTkn83TL1qM1ahWjveiFimctRU4Zsd2coy25B2/lftBsjyvf2/SciU7H1WkAUz2dqujaLNo4zih4mX8bS4vgrZ901g9nprNL//mde6qbtEmbE4N1TUiz5jkxqAH1tYlN8sLtL679BnpWxYdtF2C5FHOjG4iVK7XhgGSMfT2ruCAHqN7TLibiOe+LdRLxrn25HIHJp6OvXqK52XPu+bwdzKfwPTki8wOY9qDpdFlZ6btQl2+LtIcOAIP7+6KoJLWbgQdmWyewG5EX6sQWmNHzwcWtHbnfeGFPZx4ZslQFYpJ3gMChGkRlWejmp/kN6m88DD8x+Y6MO+G4nAMHg+1Nw93ok0aWW5ysYWh6d2EDe+5iN1eujXiLDgzQXrYggBBrplHc7SsnB8Pg6iuI1dh4/vNUCWcD7/9cX/EfIvLRz7QVSe690gptP49+V5Tq';const _IH='d83ee9c82580cc318cf8b998732a7fa6eee1f6cb556bf8e1c6f1779c8a309576';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
