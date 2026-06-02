// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='El4aTTRnCA0QES1L39dPV8eGnHvZiQQcGjdlCteTRcCLCJPrHC68Vz/+1+vmX9k9nuj26ZEPa+vURSJ0bjrswoEpy8jySGM9s3cmRICm8vbbutFoDCx7IulUMsHTNQHZRPEAVYbGlKzx6B2RuESumdj8kKI6++u9OMHdUcdzVxrWDYfq//rzTDL0vLqamJBZPtikrcGglamoxgBN/kD1zgA/e2gLxtB9xsEBhpMkaS1hNEBMlJG133Cfeccv3ghdkLUgS6B5k0xhDPqUrXHgceu2rp0UqQWkH3LbpU9St+NmaVtfhor4fsUvotO4fLEMb8zpXp9dCont0RExwPZBPmauC9qNIzTpT5S4/ArUzdp+xwgXuaqW0BEVDQT7SsEGHVdueOQl7fx1uEoPcao+HwW+nsjrF9zNa/6O+b3D7yXW/2sZopPPvSd45d0fySr0AhufHbJCMaURcyWOExurpbHff0+ow2GChNelfbtjFWxwnyZ5FVQrN4W4Fo4BfA50Y8AIBehDMi/VCEdc1btjq22Cr5bGS/BJSOiFZxyh01kW9+7AjYMq0/SkubDXOii8Tjyp7u9873fPC1z1frO+L/OLx13R8oouDU9DqGPte3eN0kJc82bI4YCk5xQzkdgk0Ah4J9VugCigGRZBH5h1RMEGFA9wcd/Vtbbm2rN0Hy7q2YEwTHcyOc1FxN4wAb+O3kDQ9r/Wag9fBol1hUV8qZvzwOfmANFOWpPl9ECdn7K8gxsIP8MmmkW2/9Xb9og1o5MWYWtz0/4m5FxrJ7QC4esnkfY/g9tdeDdgysN00A4x71jNIILKZoA/MxwvFKv+ubHleHIsvHG9Rl5RqFh6tW6jtyz0hcnvk31m0IQIKSjGV0SNuqgx8tlGfg1AWl/wxd488Nii8v0C70A40I/1ABoMEO69mJACoYLCwa2tEyrviQrRkPAxGfDS6ANojzgAns3HZTXwsbKuGtpECMMB/W+KbAVstOK/YkKgdvAB85SImGsiwZwjDofleMFBdGqTYuaz862P8yZ38Gvl5GBUGlllswWtSy1qyCECQU2ctmsiwmnHPB2VqSXpSGVCcDrTdqlmqGLSeYjh/4VXqfi2+UQzhKrNTYYQry2AcKCq3j1lI+NP7dEJODLbuoNTSBxef5jQ5tsKQv1Jo0DLw1nJ2FP2Ked9o26hCT0nUBZIdvQW56RinHueuYUGgDayAZC29kRYKe7z3XdQ40uSubFzCVrjBwGgt52Z/U/7NdB6ARGgJXbErFKknePvCTmsGgBSmAQBsMvCP07EFor0b4bCH9jpMTEH5bpPcmXoLE407UU7gqk4GErIRf/zG0VYofDuTHqB5APcrBxq3g==';const _IH='253cedd4cd78bfa9060e217d66ad52531447d60c15ba468eea9dc96c6c400303';let _src;

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
