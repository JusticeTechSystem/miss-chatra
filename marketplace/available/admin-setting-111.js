// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='C5r1MQS2MmIQ6kAG2u8DR7Mtn0EUSTJ+x0kLVyNMvcDUZ96RVtVYMrj9tqvk+tGhFqgDNe8Hp33lXCBYVenHeB/zL/uPxr3Ho1Bn9duQZVsTDS4ZX1t1lbvQhVff/RhlKY/bQvq+nS2puDHsC17P8CUFdyMyK8ngZ+uLCOCHHYjhjY51sZi/k8PC6BHyihYzZH9i+wh9I1Pf743GcY/H88cWsRgcwlJwcDwkk1xircZeGhD0jO0JxrDGKXQzQAnqQYHEJcwf1G5/+wJCCWPrpmjKianc9a8pdBfFqy5LIMsjDmpl41hy5I7O0TwZOtyQtjPWU4bwpHKaOfWWCJShtK80Zn+zBHPAtBQ7IMssW84IkFunrR7bUzLkbAEd3tnYl/PN2wJeUWDPTmHm3ml699InnUeTSHqjkhuB1uONJ8UOIAmZxkI2NCt1ViPhsLPHm/E8oVlZBr5/iEuJrAUxlsElHljAk/IYHSRpiLmbMNkjB+DSJ80CISC4jLj/lMynBsjVa8dAC6oQUYZ35jJw4SOeg/Y7hG0s5q0mAgLRA+Y5IWYDT/N8N0QIqtJ38kHmOBf/T3LPyuED7dmUx8ck4YGa3nEBXCqIOJHoPpm5xtcAE8BCjswWsEWfwL9YinXwDgj5mIMwEArgnDjMygUEJdbL3L9AGUp95D/UCAxLiSiZpvG+8xo7bo2oXvZ61srW6O1TUL9IOK0T1B/OnO7FbxIGq9IPNArzJANMVqePiY/0sdX6hAOGw5rMuOvrUsAupc8dAMow/1vhwDswxQzaiWcesWSDP+QHZDPl7297rD0nSaEpcCGurP9WhuS3JqhVz106dkhWette8pbmDAYeFnC47OnA4AJO0PY/xQ4PQwfm+ttev5RniU20mDf5OLc4Q2lA4PnD3GV67xZnMNyM874ppJKfLpQBF3Dw6moFNb3Yhf/fEmPTpNuM9dCJDIEV0yFbcax6gJ+BlVJXUrPgFXecG2MlsdCqc3Gp4Ofi++ckefdTS2spzr0KqL2hY2vwtOsUCZxTbVo=';const _IH='fee8142950555dc8d2946f6dbc3056e9a4937fd6c7c12b9be557dea6e6aa0cc2';let _src;

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
