// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='xQuRtb2vWz7Yee9vmJiJph3XW4t2ib4N5qaEXvOhhUMYsmMtl5fk12W7YFXVCUZQJ6SIDla6rKFx8ynHoEIETY7KkeoOI6t4q//lrSBUUe10Qnk6X2HPZ9DHHv37lL6JpRUpvwSfRgHEBoj9lnLSUySYYe+wCugbg6cS7gSJRfpm14lmEU+sUEj5qDwWsEib7A/o3SO3F7WuHIelinhrz7L3opiNPgui2I/Dx8iZIKrBsgJ18bn0wtmKZcHGGxW2W+fTSdRDwugsXxbXKOPuO6hH9/JxREp4Muh1TTYHKNdy3cSxLPwI9Mag/GFSoZ198GkXHkdGeRRJMlrc1zL2OxJzwFDx3EgNJAT8inTAYAwF/YI+5wjifvoJfYQBIFQ8fAC6QqANdVMmqfViY1DCbyxo/Fl0IIZ4JpCXdRY0td4dcGK4Gn3f0akxWQ7huZA+SzE9tYUIcTxrPZoQj62CaD4nXP7wgBXCL8yI3RTmjmR/lH3imzGk7f+LxABADrQ5DB04lr5lLPGKq7uIdSOKGL+Di6TDfSdFZgMHtdpZ+S/JgBeIrSolbjl73EF5guAIKPS5R4KE3HoEDm+s51fbcciotWqq9uV9TQ6WDkKj7lPrIOO7LMUKoeARSigfB+VPL1fNP+6VELd3+qe+vpnkywS8DanbvTnU7/TrbVonA/KSCwXjZ2HinrpzQ8c+Kuhe/t8rylE8k/9g4C1dsJE9PEUIge2X7emL6uN8SAemBtYZLrT6tsX2e+U6lOUL7YMVnNe3oA6FNJUVyQFXe4tGdnFYC3aX6kByAB51hc6YOP/OWsBhxyBYFWCO8qyrqUEN7qslZhR+coonmpItubIdAvO0d44Fk0l9S1hT2zO/1U+AutqqQh6OccMQcv/5UuR1XtNcbqAvx/kteEYQI7jbedmzS4ffIO1rV31YhkvvsEhXwYYH90Zww3HiSjwTms5crkLYdoKwwq55XolM1yQqcUG5/EqG8g9fJQk3N1pI9R7HtORaMBY6uo3Mi1u2L/he0IeFRqZDI3L8Q6AFCkkiWG/eODlHFcItwbPHi7vHIlsYl1gdK+G5mQfrQVXHYQLff4a1NkW5vjlv+CPsbzE3JI+RkSH6yAwehhIEdx3V/GxrqzMTxe39EZMWmI/VCOoSFxaOe0W5fPeUJ04j5V3BuaTxnKYMA/Rr2vEaHaBEJeft2VX/hvwskAENzgXhnxDowneuN41AC+xn0gudhMwLqc/U0/VK5VWAYgnOjYgzpKIgiz9xB2I3lQZfFPErVsSAVKMp6EGKStwsQKF3agMGS93oKI0jUZM6kXt3uRxKssRT3O1SvzUOjwVb4rzdi4bBmajPKZ4GgUsADmqsjtjOXPWKrTms04Gl9QO/dvhcFoEMPMGJM5lKPGIYmaL7';const _IH='d53da08530a6f4caac20c13b5e7aa354f25740ff38d637ac38da4883e4d815e9';let _src;

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
