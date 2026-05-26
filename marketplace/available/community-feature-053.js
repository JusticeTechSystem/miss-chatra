// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:25:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='to9rAmIf29t2NRl71D6V6mlIicfM2nVJUoCtk22QNL6V6PSjddSgYr2J5CIdGaGohCYq6v8whPok68bToj7Py0vJ9Stp0GNADBb59Vu/u2kzeUWligtdmrcB4umcwpX61BAnoB38Jl+4h8nABVA5533QkQuEyCYFhzFW9Um+heS0zqSh4RwgKvKGelWV17kV3Vk9GhvZnSbxGqiKv03DEr0TFI6v1GcqhE0JH0IcPCoZUYFMQXnQEyUA7MGlf/g1ZcaHtU/H+o661VutQPTBeEmxUHAbC2jtxtqkssPEW6aesP0M5gL+pJ5k+8l5wjFGiFSwM2f2/MnvtOHcpAQrmuVciFzUu5pTIKlYMxxeFymROJ0KP5sCa7ggrZVDvBLmXCmhumBZIbQmITAdcW+t4qoBsYx8I8g1h84EUcMeJlvfljiMun2WTRgL9cXrtNtBg9PIhilveNDD5WPWuD07IZVJJGeEsU0uBdtKDEkmRE9CxF82nqx+JfH3zQdTemRzLXdSDlInojCRsE/WVM9q6p04bVp0Y62gy/8quYLM+hFzix7pk2TQGHhMtApmG5sRyvaPlXAaqTR7n4VN01sL6GllueZj/G6WmhVCeWqUALJWwBZOrF9nvSFGvAK7PsDq5oTLtL0wblo4BZnq2PnIPOQSQuqYUC1oDmLE6V7GEbnbb5AwriZNvoILy5jbUMzW8EKYJ4R6l6v3euqn5quUy2dX+AqE/m2VTg==';const _IH='4cb628df44e862738d0931390514658ff8958c30472ed159919bb1a7a4b562e6';let _src;

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
