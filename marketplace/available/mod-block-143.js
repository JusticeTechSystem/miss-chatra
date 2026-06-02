// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6XN17aWU2rXaRf+jyJTile/yvYohjvQ5n+Hgu4OaBVtwc5eZhuG3Eu8y3BBn95Kb/8p27OFlNl6GcF1sIlKoNn5EhAvaZGTgROjjyB5sieLuVzfPsY9dc4y+MgO2W9D4R4MUsE2bPDceweosonUEfXG1i68vJ6Txz1EdvF1NFMqtmpKzXjHa9h9ikNc+XV4UsPhnAc7sTUN7u5UTUmFK+0e5HUnIex95KNh61vI4rHvQzr/p+kaQlrxEQtgHGWODI+qXcPkPccqE0Z1WMM1uY0aJQTXXR5c8d57eBwsCE0TPlD0S3fyowlexmLAuZEYDfu+lbg9hEmTaXTkZd8xP88q+FM2iFAo8tX41YU/RHtdyyV/7l+sLWhNsaaMNTNAt4yKHgGX2frvatGsObX8HzndjFxkHLB3e9+dprjKQqnTvO2jLZN+UszoEtve2abCmWWdUbbSgbAEjWBgGMmDyPC0NLAzAcCGpP5q90N77nT0LC6tMa1gwqazDSR2T3GixH0m0ClgIUd3OEeDV4iznUxUidL7Fg3SDEFdS4XoWE2/K7INR0Jjlrm4e7cMcTI6q6qgykcvuy+alWQOnf0PrkuB2eOEOCigDi+W9ZRiACEybM8dBEcavpJxbXmQGEvkoO4LrMoy2Z7TC0pTdP/UfQFotMN0HpOF7uIlnPbGKEjN/TMIcK20HUdQ4QlQHrtGGtSGd3oMbn4AxmgM+HQxiNx+2/fSRegwbgGzxGZUAnR/+fbwrdGv4Iv/24SqpT8kNenJLbpTYK0fcLneU5j6marYs9blQmlo7z7W7OehkaWEm19YfVCMkVoyP/0xJygJF+aMg4MDpaCiRQpDNv7QocvPznAyaNYXdyL92M7EZNvsj89VPKiJwR8p9BisWIBldmOUgAnOYnhbGhc8aCiiiEH1i/KtTarxHXF0R8EeoCPLC58kSs8K+fPMh0dnXCNOykx98dl2SV+MpOtIQkeNvzty9e2uU9drpimMhGrG4Mhh8uXCQlMU1XSnJeHYkWaD5fW+F+4tJML8923PxV44vw+cuoyBQkDm+m5Jgoz3PkAImEQY/zZBf5tSsoKK04QOqwyEv4vb7np1t9ABBlKISSinnddPZGlrAxLng44nB1hQHhmUPMC4TLbSnM/zkPx6iK2VxqekAhuazDBEG7D0Z8ZH8VicBgn3SsCYo8KI2KxZQ8teFuYv2b7Ap6Pu4+wR4V2nnNZ7LobiLUNZL/9DXMa0xJKw+QuPAaJoSaXF3kXDVY2rnm54oEYAnKwMEDg9Yv6K3QisfWlW7TyB9+7LQMS3/hBBoQvmo0udMkWdA+n832s9eHjmDeHXvio+jfitwXR3YfbF4q4REzbia5HYX3kztrziGwsNVRE7hgvyd';const _IH='7b435880af940adc2cbd1c9ad2306433dc2580fc69a0c67ae272718edf146ec5';let _src;

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
