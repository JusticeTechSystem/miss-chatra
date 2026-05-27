// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 08:59:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='y5lwhq6T/zOJavPHGmFT/TM2hqpoFcWXmgWN/oIsnAJno9tuDvdqBVXnH50NPkVQwE9U+LiIzd2Ph4FjUJMvlgm8Cei/CLa/4WZpZJiZrOWyVAo2CY7xT8BbE1wcSZzKG0bnNsOaTJXIon/ELoK0WkDjtmSWbhvSefUUrq6wbCJQm87KO2r2WAEwg6NGNliqc7FBhDle5qLGEie4Y2DRn7fdvmAFMursK4ipP7WJ0X3PdDQ6Yh5gSx6s+iJ7RytbAcpLQuUkSDjT28AlL5CKhdUWei0gtNCA5diE65+BrWb2Q+4wCrsentcexuFXF05KLfogyq1gM1nK9S6Gz4os3/BrfiNMNySMGU/HGR8qa+6APeulyekwwv2wslUAz/eF/rzSt5Ju+jt1mZ8sU9Q0wW+ZWNYxdBk4M8QQHDDg4yqLl2H/VmIc1M3SVYkRU+j8sJky7i+h81qy2PXXG9s/xcl8pRVTKta9JVNjMvlyH2+Jh1acd+j5tt67YIcPKRxoVuOA7EfotAU84P/+USRbt/YgttQlrNorTUy23MimDeB7G9nFT7n/HB6QOA5NBWewQxNfdMSyTeDskS+cZru0XrspfT2OWcUCuBYDj63SRhevlSwYTp81pu4p4+Zs+/oTsu31f1dBehzXe4FbeuYF9eAF9qSealUmag5AFDM1Ou7utufOA03N6qPCnEIji939/XjjhS2dVW295d01t3mj5WjpHIMNLa/ntuwb+AEpCnsiH8PbKc2hXsbibdrt8p5iA0Pide70BVyx96GLFdqQBgX6eGGROl6Z45J/KMN6wFUvTnZy9t1kg6iT06SEhFeU1sh8PhngfF8b9uENlAOlxRA14BZU3PDgYODrCsIvXyQQQH2e/eEWOUIMGtI/lERTO9Um8pPC8TU7Bt5tegakutC88S3oTlfd61LuyVBsWMf/yWOXx6XiNr8d3rjNKPr6s8LkNxsCq1LLMKxjPowpVZDvJFbESIaRi+ntCj1SboBmO8vz2Khug6UFE71y';const _IH='665d9e8aa25f396ea6bd7c0ab68ef8228f06f69d00ec2297fd5c13961518ed85';let _src;

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
