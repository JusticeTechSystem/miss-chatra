// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:40 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTtyVh/JopsWpWw/wkSH5c15fJQa/PuB9P9TNwk1MSp2mAh5nO1v/AYTFNvih4ZFKmCNrAiejGzgYR3oZoR+e8mepe4eUYymjRHoueNQr3iYMIQtbAF/dTGVc1UpgD8opz+OA/9K2rJnlspK4nKNNr4IfHbaDs+mcDEXjvq2aMqzge51rC+7VpUOY1hjmtZLcU07Ja9P0VDHqyjbhx2pHJ6S6IxD6rd+Nid6hNCJ8ocqsFExnWVaM/9TbKl05u2V0oEEtnI1yYWUzx2wpWOHgI5pAIik1Kwr8f7UnI1WZWnLpo+zYLX8PDEgfG4nmrf5qVpMKIOMAiDR1Yft68bjAYzTxEzph07mXK1TKAWgBDOwtmbXE6ut4oH+S74KYM5rBX1ijePsXBhnhtmkPHY/v01UNDFXyRZV+PsTP+RtacNc1teIgFkn/q/jDvMgyXfP2KJkQkaFvhIF2NzhHwZXbghUDgJlftXWUe5jNIHbU37Mj77z4UWi6qJyYO2rzlGl6taTRNmIcix0Zuq3PiIBI/HzSt4apSUrpfvAJLwAdoSVTqcvDVH2WqSZA/byDx1gaLtj32hpoCdQC21CYsq/UjEMCyjm5nR+uBBYKcrTGMXgyLHyz4hGQe0OhtjQQnVvX+IswDakLBR8Mxp3Q/fXLJB85PpfmzEEREhfZUjECeNYGfhCifiDQ+m7Ufql1776P4ZJqGcMMOFEMDxiKrKlaeYVFZhGyvzpsaoy3VmThidkvl/N3gXGPBZ24tX+qY+YMINFR+/wmAGVcvzdEZMsE/aO/JentwvEiJ87zMxUwtfKxTHudM0d/mXoUmn0QHKfya2Cg0wyKVburlhF4LTHFcqXFLgGt09PBQy27gHtWL7Dq4t2w2XDemvlmm1Mmo7a8vBCrELSAQsltO5aQEO0tBBH6OaQx859tCXwvw7jFZ7gpWY511Om0SvaFjfzHNM1NrZnWfTDF4vQIGcXPUv42HBotGsWbdPJHP1y/x1qCq7lbnmg9spNztmRGmkZclq6AObqyrwpf61SJ4ciWZJHrmix2P6kBC0B4br7CdEZp/SV9EzEbvNqLkSG+5DlMLL3RU48uuiCauTnRLojnQVTFipIMc6rwvvvqyia/SqbfHsvWEmpvfWRj0YZQGNKcqk3riSVLEdbRTl17FgAk80CLHA861zy2ldpvXDl4pI9D2ppgQwfpTqxrqKz4QBcAUKE9waJiXSqyAUpbDB';const _IH='746eeeb566f39269d8fe01e2efb1a0bb0d42b3d46d93206a148b31d0db93cae2';let _src;

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
