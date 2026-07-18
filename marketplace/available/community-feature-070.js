// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:41 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSwk9M2VhI391KkGhngVir3izeGfSV2KPRo7Xv3Swf2dIiQRoX757I0lyhmexuxHjqG9aoRlj2wb/qU+G+ZmpFfSwZ/eyEdYA7PclbiRn7ea20Pm8RnwG5iPTN7sqhz80HH0Dr5TNUExhliQug6maE1Gsbtr+28DEiGFfMh2aqux5mu5XI8p5j9IlgnXXLIyNOInd3VUvPNSHuNewdQA/9gDU2ot/7AaQrFhhS6/LRG+B+iT10ATii2hbxD45Wz7SuUnf//n0rVaXvaCO9Az7q85dG55Y5+hXRxpKIYtFLzu7o1nPOasaXUTxZVunTdW2WpmF2BW5q3NG3pe6vyQZ+rXLp87Lb5Ks2HADACVyo/p3+3NxzDvydugDy5M+MPcssfqDOs2UXqnCdDx4xRh5AdPuTDgn64l7wluQGF8xHx64IBKV+Tv9eQTAjoMbCRrMcd36m1i62eV7jWj9uC0/qe94fMWeWT2SfsErfJhZQMdD1gmLNxpOvJHFJ+/8PEMdrNqnubTapjvC3fMQk8dtk/rY3weS8xkBeywKoUcg1NqoMYrqfclX0OSIvHJW2LVfUfNFjoF5DBJL4B3rFLYTKeJeflck00xFHxTpTfpNljma+m73ZjfzXFl9IKSbavYekoB8sbAZjIrYP6Wn8zmDlCKvYjwy1E4LNwuxmUkQIizi+cXDxf1LCYqqDUvvq3UCbo5snG8nWlM9qoBz82s0GET/x9sdSDmx5vrwJ2U+jNXJbonWQ1xg==';const _IH='f7542cf1e63b6e8d061f06133a9d1a112e1f50afb1a7ea49d7b3255e177dde95';let _src;

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
