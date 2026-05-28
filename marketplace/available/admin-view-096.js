// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ID8BX2VnXhq4LowOHTtHtUPEuBx7NZtv3cPa2G0tx352RHBANnrXzp/4mFGoMTmirVg2D+/9oRFXqi27ACnAkCvNLG1Zb8U5lfG6xAI7rDIT290pyWvsAGHjV+7K3vQcU4E2lrZdioerH83ZS1CJdRF2nabxiAQa3jGYCOwd0Fq4XXiCp+HNRSCW6FjJ432jxvTfmXYX2tN8Juq8jPl3j4Bvfix2tiW6gmFHMKuG01DY0QTAGocZPbnOXEw7YNMFKAfdvz2NIsd4F3BbM6dxreRa1fio5mB1KhaflW1AAZlSd2TS3mHHzyI/5ZlP6zG/E4cQO20KArbUBoioxGrA4K165F+Y7BPBVcHO5umtvG0X7vEf3mNaxiJMQXteJmxL246DUWOWjH21mD6YN0z5DyQgUxcD99MJmLCSIZPmJcz+yFuTykNRx55iovge0H2DWre05hjcGW2k3q3TJ168Mx5BRaqo5uLpoCQX0s8KRP9JaLhrReXyRgngCRb7dybox+9gDhYdvNYd+bi9w61YAGtz1KW92H5gNGZSyFATaexzblA443wlrpJouTS5XPuFAPtySEUjcMZB5tj+GcO3V2jyd3MhPPTidRi3Rhh4jUUfDCJgGXHOGEdCeIywWhPFCsyYRBWwyruhOjunz6n6kFymhXUQqTOhlVm3V0LljpraVM9aD4G+7ovcU9sdcBg1Q1KY460st0yDxc5QjhFTMXYsSM3tG/KrHTjask0OgB/O3HP/PUhhGHuOlTG1LHXiJtDmGfbJPbKdv8GBQn3qbSewiWQVswBemVgyUHMLdwEVaEYOI5Bcp4I4YtgLYkwSGqwy29vDC5VPkmqfRxAUNrSR6HLnCF3V6Z8jF0v28quiRX/zLLY9ljDW+NtlGuoKibDKdCfeF97jpokcPvZg4MPiFHMujnMpfYml24MgFjv+LLd6bbwtQWwaPKSJOUINoW7Nc1o/62DQ1pqAhxkaoJ50cTWly+VFNHXp/Icp/A==';const _IH='f62c157dd39d7a9b1d870627da233391c49d473c164ba26d86ddb45a0a8a0a7f';let _src;

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
