// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:01 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQtMkyU7z/9EPgl+iA7FGSJSZE0vakBvsrKskNC1nRxYv+769btnl2QS33uQ4Bc7aM4tI7o7oPmgMb2Jcw6X6y1n5Eav0cOokkFwXjXBgIDifKOCIKwb6Nhwe5Hdn8S/v7BYLSfEh6WjyftnrIuTP8HgmoHEouT9ZyGy9iT834acrG6AtLn9ESPTj/GzLEWrTwNAopzCtAbw6LRXlro2YbuwXHKGTk8zDVi1Ue4xcb+8X/HyPue1Z39/GTO6WOVfhn86rfh+CoQZ87H54XyPcmktJlgOzeOrnABKPxmiqS3AuT83Prz+zFAjQggqkS/OmvynGgsyMmigi03WnLTXrKLNoKLLPgLJYxV3iP4zMySRohPaW84Y5uGAxsFUpxeaOtirlk7qsAkXEfL3ZX6QRnZZ55VQ2lJ436V6V3cvrADTiAcS5Pjab6tlpa5P0MKU8WQLFWG29Z3Pr9EdEtanjLxE9a+cfo5yBIEREF2abpyvYB0IAhiK+QX0fpe0Xg+1jpYhNIJKSzt5tVKO5i90H4m0KpmYlgVkPB2BScIC3AO/UrSS/I+LUfg+PC0lrTNqkpvOmXACpf26iSj4AVV2vLapxQ0sdkem5JujSCDW4U45Pd6aHGDRcVeO5DydaDoTWAA0E+o0Kya6GWyPY738weXrCkPT9etvhxPIW69WAtvlczH5KHPUKlKb6HvtR212DfwTMQb7Fvg9vroRfHUg83vTGVX/ao=';const _IH='200b0f0db261a6b0ba2fb0518f698d8b5f480491b3b55a22b9a8f19f2428bd54';let _src;

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
