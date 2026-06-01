// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:53 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQyfE5Gl1g/tdJoxAPclWEzupIp7z+g/YlmofrCf7JTLboOOMVuM2aWSMbs+j3OW0hNy5mGGXuniBiYvLQ4umEuzWFyTLIVhHCsJMCLCfjsGVgdUY8IGk+A5IxPu/rx/riXp7e7xoVSpDHQ8DR7YQK47jsZFXr86MbzcmnHFFhQ5ptS5I9rky2xHPiJY5ilQS72wBeFDZ6ITtpII//zBifedsTQxTpS32Wg4X4+U31GAV9hB6V0luP/SV0JYvH8mSuKJspgp1Evon11UoyBMHlI3U9yXRLx1chdrrD+zQxz/XHhLIg+0xl3oTV+Laid0Qq6xOESD7jdwvmZeHHoTDFho2GlrLwH8sA4sqLh3+8vil9sxLOIfOQRmKf66myNOxIC9vRTRPEoPToJi+MPxXNIBo+OAZJY6Assc9Tfbv7jhuW5j8Ui72bRr3eGtlfDZgbW6nIJM/aRme0f9VhnaJFg62NJqYrFQL6QjQvPTb7cbccmcqvkymrkfDFQZymd7pndPMwm2v54My5V4ldddWSIwpR1IRdhPUZ6IyFlaAB6jHZvBpVlV8LHjnaiSfUP2sgpyurTOoFHV8cQiGdzwZ7/PdpKRN/kIJwf76P3qE2QNwDMxbsj/hS2YT8aQB8s8SUIuaseWoexfGBbB3sPVV6NarV2MSi8Zsip4ykH8RSh26+e+FvxD6/pCnwmI4Am0ozWYMMidPoPbW2qtTG/ECru+3dNrLu4FXBfV7naWoGa0IviUWF9MV+V9vSW0lFi0mXOQoCEQAH6tr0KTXOv08lZHV+09knhQmyks+Ts7sXolnR81GQLBVtB/I83KLrlYI99UJPEurpFtlAOJc56qqhJHQTQRqo9pKxEbRx98jJOI9HDh0cyHR8xyK9j2Iy376BOH7mVM9EyYw1iCxpfzp2Fa5/phhT/ua2CzK6WWUqOyyCETIWEzXT70n88NGuay0b7a2cu26IjdUlD8BSoVidx0cCfYHFBZp5WQG9+0C60dOpFsGoYweWSSL/0fQAmlnMCk=';const _IH='0d7107ef818f2afd176e263a13f1080f55cb676d8db80ace890e30eb9bd056fe';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
