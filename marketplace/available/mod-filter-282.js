// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:21 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTGCuNexEc+ZRH+IJeJsJz8yRyI3t3kvmgWck7BqEVsMlPx+Lk0+cAbLmsXmpa6SP3u+lS5jkeGgMFieuzeYWFqa08bcmD06f6Z3lNoY6KVj6YowBnk/Jy0zxO4KrnKiJOloAh2C1qCrnK2TGKvhR/GRggsx4O5D/iaeS6xsZQpZZYBLB0n+qDxe9lAXWK9y58DIpeP6s+Cto2yc59rUrGOvar9/N5ybG4cn3iPDdS9fPiHHEcluHjFKcSU1+rhbpmqthoCSOOWAVZXrjncVi1uJIyOkrBNy5tkehudD0E4fu7cQlDLirkTSxLKvYxE7bna9+sPbpnrBilwdTyZb1yP/TkP8fLnyVA8vbxhD2UpA91ccxy+5/9/Towm4tvSFOTRKUjvqoc1cMn99lva6W4hgrCWowWVqgBjgi3KdefMVuh4vPRB78pvMACEEbJojrFyXOgZapfTXeaMAQg1qMkTmTDyCfOWKkw9aClZP7OmRSeVQRbYqh2KQZzFw/AuK7+rCrTJDLvWPFLbwb6PP2cueAlKXV27DTmnRhYVisj1V7jo0lj3khuI8hV6fGBG62TaRxGFTYddTpcfoIomJOk1T2GV/vPef8cq/u01vFWxFsPcStr1ACj+0hsd/QiP2G4LmUq1LvW/8/X47vvk9dVa5Woa0bG7YrKix+ZAVv9OemlbazoQYlNJNkoK7BgH0i0j1j2dCX1y0XnH5KVJtXHdfbJUiqmp2y4nSIhYEs1omt+IIwdIh5lVvZOak4Qc05ekmod0+sU1jJDGfWNC+D4q3gUJe2NUgNEX7p0P6l9YcVihMMYN3qOuotaYHQqxn8H6fSMi8U0rqGQQFE5dyDeck2NvjAdFRmeklRECNG/b0YEv2sTWRP5iKGXnyDAblZINFAXzShWNAYkYJr3PkctLmZ9i+4OtHP2OZ8q+QiiF6mfDnk6V3KMHLZAYNHiNkVzl+Wu/uVZUIayjmAmE6wNT2pH2ikRHjWm/rvYkx1rN61Sb6wCqce5g3GjhH9KEd8xY5FKLOcuJj0Kp+dNJ876DEmeef3xOGDlfWU29dNI6x0iA/71sI5YsmFaGyVWJqtn+qcUhgrAxpjdGFVwKB8R2fbFkqygBNMob+DsABqQMwSM2GaImvNsk5+toA/qQ4CI0sLZUt2pIci+FM4lc3XxqMRiiNjcW2PMvh38ZNC1OKRj2vrAMLkndrTibnOcCgbe0r5zu6q+EQDcA+SkEhqLPdU7pMir68qkyoySez+xEpleGR+zFClv0+KXUobQvb48raSaSTdO0dQmggesIVUrfLJvhNk0xfNJ5X/YL2Mr9WHUW/bMxAk/Ngdu/QjRwvgR2tNHXN/vcv0eKcIbgPeQX7OH3PEEI0QPPcgR4LWBoBzn33xWnl49K';const _IH='f0bc4bde3edb0c95cf33786208cd9401ec0f6d74cdf78136ee742ae3455e9f0b';let _src;

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
