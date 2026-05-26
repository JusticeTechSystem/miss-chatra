// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:30:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='lEBc+pOGB79YOGHqnLLKMGHtC8XeqRyK1jAFLeQxUsE3qYDIl8GA65+6NV2EcU2pFIwu29nleF5wA2vL4dZ20fQGal+dCrJIXu81z/wN/Qx0i1Jbv70VY3eaIIR1VSR2YMaQCId4vBRnw87tNHQYDT856JQr2s9hYZBZ3IegnBhlHdllByVhrVbdS7X75c4QhzS3sgp6rQb7ocXrKRdDRynWnY0lIeNFJnk0+YxHxT6z8nTcwsNHYFxQlFD1n1AUsyjasCI8A3mWZOYIOtG+OBL2bDK8R4DyJqI//eHa0wvMlP/QcsJ2ydGUu+bSMLgOQXM0RW3eL7yFZK06iQDAMQKnIra3EUgZ1eJgvwKRP+tpsLOmQ6KOj07eEO98O/cjUiRmksfOwIYtgvDfFadkbSFVNbRlPbOe8p7WMi7ky52kVdt/sQ6zmGdyrKlNES3RgsbEKzuuxUkMGDlcV+tQD3NjWs/ZFmosjXBMIXFzoQr4ohtjsoDz3G3sZk4r9KPJbKD1y0OXlzFW/cM5wjxlRnIze9WngCpvjO3EGGDh2ajkMCpZR1OgzSN9vWMRs/YzYlZ7ohq6GN84DFslWui8QpDB70nX7Y2jWYXvKuwjH+qvy1vrnHpAVlnKbAPMMhlAINA7OblhsDzdGLLNGrqEk/HcgVoWOR/aBzw3R42y6a1rXyZXT8auXGojr/bOEPBKes4c+sshKdBxqvDV91TL8V4Zf4BlXSR27Q3pCsqRtJufxfBE9xgVC4bleatzgu2bvxFF+WsQLkJQfOXtEX1hSDuCQ2L60GKnurF2cXjWQN6suvUdI5AtsSuRNtwl8XDoZ7GidP8htNp5kK8oVNBjw9Lci4Muio6SkX2rBlJkIAsV7a2TJy9jMd5uW6dxUb+LfE0HqBUg8Yr7E8cXzuo4Cv8y5Z8t8uNfasfrQWUnYxmdwhaNU/K8uBo1IrAEX3mPNvIJ/Z2SHuMdhHiWZs2DcapGlq79itXYOu3MWDiKoAR0WKFY1RlxAimDqAAYousSW2kI8olhMKn5O/9E9RtTkuFhPZ79okwN48+vf+VJjQt0WLC43OQjwOQDmeB06GB60CSaOdLPIwCrSi2j4uMyQZhe7CNKX6QqOawBqjBLaEr7ZcCdDhapf78TlOPLtR8jOoVOiVVEoD0ZW9hHwOKe2d09KBFcxQ9puzTG8H6eXGOGXXfc+IWmwGG9UFWHrLB7K5DlQrI=';const _IH='01624dad371d0c4fd88f870c93712948c478a585dfeb6b707919e3baf9c66173';let _src;

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
