// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:23:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2k0E9S+2sAhUmdZBiTG+lxrMjQV50Q0KT6FjbRLKPcA/JRcMcQUcOfDybZqZzDw3yVUvrH1lh9jMsinyabB2AuJEqg/sbroJ0MCMNHzucmcS8r3eE2KsvNMQ89ZFfCryy7KDMaZIY3AX+L7LTlKdDey6ggUSrChgK2dgwlUEXvLag8UlxkRVYaSYDIPxAUzUXSIoRJYLARlchPiGTCs2TcYaXzPKUanvLSFPG8iVEr62KSXijYX29wIvRXpI0neC/gSsPPX7omU4m4iG1x2m9qbks7Ma5P0kLYOli9FN7eIDAD8ccnynsUK9Hi6YhlewAiCiNOZx38uGC7/XPD2o9kKzjkrbE0BOh3UzHb6GS5w9Iu20p5vx3DDw5ruN9R7ZQ08JY5CnSA3Ipg2pvzZH3p+j9XF9a7e29//oJzS2albx32562Arf9D12Skf3sFZXbKybcxGq99AncNgPeVgIysiXnLAhRCWImFJWJXnBL26TaOjIV7/AXkTspTVr+YIqQa+uGbQ15oPFhmJH3Y01buON/CYej33YDoRzMkwcrk5Kd22D3dVT0nafaoN9YPSYmXkiFNADwzCSwpLxRR0QhByzNz68MrW4XhbZASziBdLthug3P70C9E9x3nvMbuSkvAxtz+Lzib1K5RCWCJyFSVKr11W/5yiGB9pcY1aedlyWufalf0jMTR7VBrnlzGVkAvngb0r60570m1+cRYDwX3sBVvAMdybZMjPCS1hbB2X20SQp/dl4otaidh9rJh/Iw/HrvGrhA5rsgMfiCejthXmGOWolA5ZyBsu/TruLe8/AGxJ66LWLsI1DVXPk2crLeNUbGmbg2ZIRDRMHswOAxX9GW6lOf7uEWU/SMHcctf36SOsDqkphGM0ne6LsUoIHjLaX5hoSLPvhsMIynnhpFif+lbLU/tLi9amIeXOomUERbUaR9pptAz0lzIqpdhy45QCrrpAgPD2aM0Af1LQH7VelTfTjK2av5Gz8sclSN6zMwn3VaJdtgGG2gzfuAAJeTQ5wWA==';const _IH='9995399cb6d3aa62c25c37b0216d3133553a945d98f4f6bbeace930ee07191c0';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
