// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='dZs4Ff+11cWgPzUi6A6pUsNAu6kZXzw+eQvGPwIOKWfzGyDhyOcl0Cd3w+HhVdmOSkMcMKZnbUAiTAD+2/oncWgGou3JxWZbxAxr369pMtbyFJR2zzame8hRNPGURyZlyMyNwTmrXaVKj8QVyAuG2u548FawL38yrIWNdPgA+zRJIrObyLaTg3/fd63gow2waMHHMLC/kAd7akt02fFCUGCNG4zlIfswMJYTXyOOAqjZjr9j/earEJVO2aagHQPEOPokI95gktucXIr3UfdU9P26i2DGM36p7KvuPeeY8v1hjhMGz9DqCmM9iVew+AXZRIdUpkTUnvhpvV6SGsP1LlxFVX+93MV8AxNu2BBLRhUqT8KzWQFzWvoWZGMMnGDjlxmbkLHwFyWojR2CRYld24itlXo0y/+ZjSkOB87IyeEjM3yX++srPLwEoDhJ2nx7aNwiob8R6zadkoTncla0ITltChvgDj5su+/pkHk03T7A+eFLGcvZ3Hobz09DE6t9NMAxVoSl32oIJtp3gIdroul6aiutu292iEo0/qdULeXNmLLDlRJNyPqid5pZolSe9WOUOWZr/mGOzhyEb4iLGk9Aa+AAFs4VpvqEoZZe/By4ifu+cALL7gLFNfWpQj1GDxdcQoG3FrzN/jj7TQMVXACqjQvHTTdW2On7SedLOQR1MWMUbDcAu/IQosN1hZCLw3tgdhWf3oK2X6IYfRUuUlrm0laZ0jp7DdvsSmLK91aep4DUipsF5VotP7VguzvljpNLZmFbtT99nwnDoZ3hJ/l1tCRorAFmOnCNi81UzPWHLTZqU5yOZ9tu5ei21yXOrw47GQD+tzn8mxgbhjWpDr0o6P2fxlk3FhOCnRyo4lhlvSm1RFEMlRfC9tn2MoEB6C/cYiAceOb6oXsXb3SXj4pe+UPaOy11YsVFLMthfgUI4O/k2qGhlDsjeBE9dAr/PUMv58W+cViois3ccn/J9BBNNLOsUwMyJGSK3Gjzxg8MKhvkr2cbl3xmpfA4Nvu9N0zlCo2SiDveEaubNN3esBiV40QHxmNMXAiCXbPfemHSaaa3XcJ1zsOWWGIVMFhDKQfEqOnCblkKqWyAM4dA6WHEhFYNYPfmIw+Awb3h+2jI0azWSaElmHq8mnNC+IZDOpZJBc+QJk5YTKN4D2BzyXVtn1vQ54mwqkzVAig/L6SGSdWhKmm6P3G98A7+kcmbFf8j+iv4en0jzxfrBicz9PDttcQFxtWOisFSCGAB4n8mqCclGCcV/ik4N36gSdMdQ1BpOVEYzgoYMAvEIbaLNExC6fZhIt3RIApbGFi9Nna0v03kzAhnRj2xYdPTcrfIJb/28rxyqG+ci9XPIiaqruGXXF19A5uj5Slf9Bknqolc5znH1RTeGg==';const _IH='86f8eecd2a09fa136a74efe4c23425127e40c66dafa1dcb32e4e52a85bacfb0c';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
