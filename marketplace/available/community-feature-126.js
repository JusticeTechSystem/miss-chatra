// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:28 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSpS8ZfTmkxBEOx8NN0CLNbY69y8qpGBsCkHs1//d4qQ9YOK27VdzqdJcOeVnFYf+T4VTW/LManSeStZE0rDLkXjKtiUOaGocct3PlfdpWZXHI6Fx2gU1TU3ZrVjdsMyrsg0FDh5jUESmObAtCqHdSsUwT+SFJaHc9TeiBfPMvqS+7V4Qcm1Wos9w9JSsK+ge0uxnzQqeq/F1H8r97rdCRbOEEr6uYaqq8VhSQeqCxCxTLFrevubCSVyDDmKoB/PpM4kG0Y2o/0vTUm2vqMWPdZJiptmAW4rHHyq2FHr0u/RKXWsrWZwmeqo5dvkKNP0JUzwbKGi88yP7Fi0lmx2dPVbSeZMvaPjtic7Wa0D6ME29Ez3oObbVSLNBpEzCVikLWO05NUDhXtbHEabMHMDv2r2gyWJSrowilB2aH7tomnhQfPhibd93ZRgPbgyewtYHbeNJdneGdJLjSBE/EIHKzTCABJ4NDd4JCRRf/ceytaonLFMhaH+f5lLvuf1rcKxdst/o3htB+M9tNgCGNM+CQPDRq/vGs4pZfcuRcaduCevxDuXllPnrf7D3KAEUwUzfndpVMvMcPACThsWfNhpvk/kzhHk+zbi73keRbnDUEyKNtXYY5pQMRCRvPlshxdj8HjWHFDojANokGnafpdIpCTHovlFscFcS5hZcirjT5d/ggDk7Ygcik5g0HL/F5T83shtuuiwEHEEfAH4i4BI/C49ho57WhO3nU=';const _IH='14f93b489026a46a31fd193a1ec13eecdb93381837fc77885903f4606205e9d7';let _src;

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
