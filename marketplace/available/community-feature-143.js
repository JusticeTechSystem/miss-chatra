// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='LFJF0HvxJbftJFCUYpgAQ4aqGulbpaLVO4E1MVYOVo+vOTSroqePlTGvHO9Q7b8SFLL2KGxIKtS4YaQL5sDz4EkUHTX94hVbKR7KD1i8gnU7P/u7tb0NnFGazCNlhGG/M1VaUFkkhg/EEkc/BL/ktFe6He1njx9x71/K/dSh/B88+Vmi1dWQGHLHYQlSEqAA2CIrC+VcaUY84WG+IjmX9DegnxiCppl5JRDRnYhUcr9ms+xlEe3rnJIGr0vSihr6F7cxFSWXnO2/LSzwj65K/RpaflbSHAwSq7Y7+CUFYRju7qZMytRFisbO+S36B0dmjR+6UtWdMYF1Hd5hkrX6QUSVGOB/LUspnOuQODU8QXJSSEQo47Js+X72Xq6XvctvSBU8cmKBuVrOt2vx2pHf+ofTS42uZ//60L5WN2R0tIDHWYosGw/HlXOFVFcXdtDXq6l3hyHC1lQSTc/Nky+yiU9xgZyJh5TD4/Ci0exuGeVHPB8P9kuwZ01SRshm4MX5u/9h+pmxfbk+fSvTx9C6R3mbzF8D7P6eiIIZ0LfKbYyxiL6OitvrwgkVCCl5pRUexx7WOpfg/YsCQV7U55Azd3sqDKa3EXwxBZvL8/hSfFEP8ScEu4Q+IEKpI48zt8Q0y5l0KO3/oD1tiZ0DMPDduqeg2Tp/BAFJ3mis+dTi2+oWusXA2AbUrgzoLMNUStKjVC1J7U1iKO1Evx4ykLFO75xogIPyfxmSIZ5Jzrc=';const _IH='ebe84300c089d6f9000cb213768c300cf0913c1fb896991ea76edd7a8e582611';let _src;

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
