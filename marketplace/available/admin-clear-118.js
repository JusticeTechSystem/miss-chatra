// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Tjy9lLLPhQcAWR/QUpX6KiDiyQGaWylkjyjz6yMloZ8zcdrik9tJJUiudtRElO6b3QdqDI7iIHI7PTMWil0Zk8iJiuo4X+bufYRBTYoGUaWHMjSrs5EX0Inc8cmQda0CTSDJv8IRW8BVhdL6jwhhVOikgpRoMxw4GghmxvbcDSomzJW5+cN/wrCjTnXiF7v2H2xaVVuWe928OSSYJLmn554GQnI6gLB2wP56mB0cLCE+DLrbyCSriJ2ogziKwlrIEnpXDY6Yx+a0JdBPiyyYpinMbSxXxQ4htamB9/dfdWtlfmuB3hFsCZLU08GYUHvIlkPV792yen53heFR/HVqGjCD0QDO4YBLlIVkMsJVmfq04MyRZDurrMqstfmCAJ5sp2rhfN0gRegXD81Wz9I6RIZ8RVySpzyiiwCpt7VQNdCNwgdU4/7RECC6CF2efwlmkl7bvOlbFre1yHh052whP2LcTrb+1+EZFGmfy6Yp7SZnMqZ0/0c62R/xkkl2q3e4ZjAwHXxldur/tIW5H+RV9ceZ3RXRUdOfnhhUfkD1TXU44QxXi1ej9PauznCnG1Z2Q/McoUDT09Wwk/zzda39KJROWx99V0sYzEx9D/7+juYoR+uWTTrRPOOnKOR5U+7h2rTbr5/DK0JZU29nIEZlE15wkb1makVR0HpOXpawr7aRmYeIaGCVw81qVGm5n68WO7/LyCYy2XhoWfpSM665N4mKnzTxE9dcIgKOv4oTD7zyxDtTlBKetmmFc+yRJM4ocIw784MBR9znDv6XEfiTdv5wCpmxlOrm+Mle5/xtGZzSfymj4r5YUOQRjyxfW1lcb/ledGWYWfLuPFVxDhKLVKLhxPPmCPSMvWJ3IzMlUgT5d+1r8BJszD/+k3LE4VT9rpG/G9GrofUWCQ4+JTZRs5+aLyGSIgEYZYgIUpB3tybQ7q19/XGvADhBWAPBeWgRFsSVlAZD9Ez5tSMuqUJZnO0NFoiHKPEiCyM0tloEPe0Q3daDCVPva/VM';const _IH='4ec90e133026025d0262ad718f701c4c7cd9add8b4f261ed6a39d8b35078245e';let _src;

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
