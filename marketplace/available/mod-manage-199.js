// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ACuvFX864HvAAIMRkLgojnTsxqLSga5hLJ1JKvgrLs1J/O6zuyx0poo42FWAKZ354z5cZnpk8q7eDiYvR1kylcbWAZxYj5Jma2683O+Ec1yGuXVto7htHuDlQ8A9plVJWtrL1MpaEQ6+Fda4zihnVnM0G+HYIhUL68EQvSktq2ompbT82ybiihTRHf4ELNCZRDswFalcH3p2N6dSwaNARxZZphWhhG7qo5yxhP+Tw9N7o3GLQenckwoRYr/dx//oopo0y8+9XUpCEFL0V9u44dGGkrhJHCxytJTV2dHBKf0tG9/1yc85Xek2o5FO1kJvSiKQEwR+DYHiwugkT5IteVmakvg2JAIOUCGP6b15TrBS1CvCiWGdXsfVD8Y+Rrv0RDZAK++GcH0yacN7PJszTzfSO0vDmawSnfkSDndG5WEVxJ4RCEXnh0XZI52ByCDOmwHpSNoV46JF4WGDMGbinTy5exhlm/ReOI+MzCCVlFcEvx2S70rIgRAoaWG7XYdSyXyGUftJhnVvbmD+x3z6NsnIMlB88k8fliki0LSLMOHqOUV1wOziNDL0Y8LY85+YFQ3Ic+wnzIeGwaexp42/O59XgkYJ0kmLhbioiXp+VioESIU7w8U/O+RBVK8/iIrX9dtDiZubjy9ZgaktHpimERyUH1cdoWLzWAdlg6YvxEYJtvJ+IbcXgADM58p9avYGHck0jvAbM69zrEjypXH1cWImqD1zuQp/IXonASsUnN4LcVXKr/Y1Dwxh4nCJuAxmqHqvjGG/YBt6AfJImGc+A/LW+BUPAn62RNAHizUDw4KeY9P/ER3YFSRmHV7ECvrN1Sh7p48rbjK735Rg9JBFW3h52JxlxL7yeqbQi/EWaAoB3dHT2vV4XtZYnWrx1NH3taa4Mt1BwAXfQS9fdWXVSkePWQKraHrQl4hgL7EkSFW2Bq9lzYaEDP9/0gB6IBY01nzP9APVG6uqakHnGxuz9GxMrjWJNGkFnPVvRvN9xwUgSf3tt/mivJOK4NUfNt6uXqn+oSYiadO2xW/mDXyIo5sdvlKUsuuRCHh9+ka3YI6It3sLxQxBImqw/SW4f3FUFQTUzdSTP/GsxayxIbI2bTkjUcY81IEyTNZCA+4KHHYHnvdMWP2mGln837iWYF28y+PUdyQjGlBItfTLD/r9Zbq+Sed4mKvdYK0tuc+8qTvCLxBIYu+8nWf8VaOp+qQTmGyrZVV5vTubDpuQ1r6zuYQ43KD490K2MVlTcnC64+sDedatJYcwec9KvAV2OheTYKpfwEXY0Cpyipac1b/iwRDqqYZEBUVMlvtAy4Y7t6fh46i5yvb8Agb4tof6QGzWKoD/48wVl+ypbYsB0yFpKBnPtCPCe4Hcm3TDFW+lyWSzeZdTCjNRvg==';const _IH='31259bd963cbe99c1cdc1e4012eb64ceda36717935c1771ce1c8d608c0919bc5';let _src;

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
