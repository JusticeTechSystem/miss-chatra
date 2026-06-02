// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='YdLcocfygd3iN53WrVZKvwrmlo2w3vMz0/gu0n/bpw8RMiPhivswVjyloN1nN7UKe4PISis4qNZT2s2iVbTwEuCkePcbMJ7M6B6ezwI0yhccQ0FQn3hTEwBgprkIsdCEzNOT3kvYqijRHsWYM3N1tI7pYWVjp7dZ76Ndhkj+nKw21v+I4TUULNHITlYW5ZEDap4fItJ2MLVmriW7bkq5Rhy4ynGHuArJZ+Cwr/lIABoNcLNh8NbfFxVlF5q1SuMUnsoO6jk3EeSvfOHrKjBPlu9+9UUXCwguIHSXnpQ8cTHX3EWd/ft+LBWHAkGAsrhjfk8VPV/wMEwh2Gjg2VojJfiGMGc6IQAeJMa3dU9OPRYjajq1WCWhQN8qkNjchip9yRNR4XaYFOJI9zBgR+bzXXFurO+uAYjY5ZvyGANTEzPU4+tRcoWJ8w6Q6BohNdscFaK/sbEA4MqXDvhFxPlWNhhFBi506vOmMPslH60RXWhjhs8r2xP9T5dnQlNCDlC8SLRxbApU2tflLkI4qxo0j4nyPhcbCUx/RmDiDNzZRV+TMrQFipYOQJfgUPWtqPkbLC2dVtszMKxv2Ip/K2bD5R5/S0i909XhW5JU5iVgaoZpujTz3CThwpCKi54jhBRPFSqzV8KelAeWH6w8PUEgX5Rvix1g0EziCUzhp9Nlvaimhqs+cUJK48nvnr7og1OMminrTHNF2/N5JfOuOYr8/x0XJ/MbbZtxv4ZIVez5c8o5BKrvoyNdjKAoLUSLs8bd61UJpr0WSy8+8UkLgPpjvADqqnubYb6smVJM9GwZ56B+A5YX8lqrHuGHz34FIHsY/h17MQS/iZempA4k9U0GpqqfZDJBmoCQWKSh5yV2Zbi+Olhq4s7pWPwi7rXSBL26fLyPd98DiomEGbOaf7WmRzmzqwBqqLuZzt9p2yWj7epVZ9lNxFVBnjHE30ygVA1WJdL1p7Bs3cuESBLIKpTCtZoPPtqSVDacxa7YfPyQRQMd7E1DbeCNnyfgDVTi';const _IH='6bd6adf9e7d7dcb5c791acef27d07567ab09954f8a196d7152a7843448bb5ee8';let _src;

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
