// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 08:59:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='MoXY+miAz3d4s9EdaPGISYmO5itw+BA6xdX02bbukaa0ea53KrayPt7C4EdvIr1UtqWPmvX9yDu6Jf/qQsC+4fArmhfUM11ogox9Ny/yngJz/PaQIkaqhpCp5tzU0e6AmPnJlyyS2dDI9rbO1wuA9p9hZXx/3cLLS/QGBK5S3npCfs+aD9z0r/zNkFmFP8kz/elYfXvaXTC7X8i6zGQ/BiWFwAGvmQE4oYMqzhnTMElRWi3lksfaYgkieiDy7UfTGtYtU33jC0/RqPbAVJyHjjrqw1gcxBYVA9/F3sEWs8D9iyaxo9aBPGTlp2ZDd5qedatYkrI8fG4Rj0wMRPUosv82mzDkhC0opMbhZ/HF2anzfqNaG4yzJZ72asjU0DWaC4cDcKB6oKl1df8TVX0hphbrAHLNuyMlPe+eVImP7pX5G/KwHMQmu1Rd0Lt9K/uEv9e/UbY0a/rsdxIkzActJge4EjBTJ3emDFYCgTQqJ1f/SfCnXvGouUSslZgEHcaYKYXkrq2EaIYjZ9SpqMnuMeNC+/qUdVRvMirwvITGHhyS1n0POyL+TyvRnxI73PfxRg2nd2g0NDW4v+EnL7ge0X1MhOQySJiKDcWGMll99iCrDQXDmXYmPQLR0I6VnkI2pjfuMpkWQ50DGAWsRM7kLKLxa9Icv2n9XURw3X+UJK0NC4YCMJoKBEvOJJOekLAiAtOdMpXMGo77qcElBuHmm9MzJb61FU4Eb6z8M5LPSYdlZk7wOTLL3eLv2R6mVLNj+XI/g9MQVb5qnEAbob8F56N3Ure6fGIhwcEXLsLjSYFpDK2YD0EBnCuaXFXJ58+moHikeCch2Fxou9zpZYw4t4khblBhqPtcXV7Gcii6nrBQ2/mf1uBD+DOx667Hqlz3bZM74+YRN9NBKWxDOaRKPCvCWIP3IDOLsGLOPBX6RCPAeMBWs3R6QJzIPCNKcNTWKVKyD5uydBXlmuDapygAbd9gvhGIgZK1EoIhxIdycTHKPm8UhM3ZeSD8OpmjQh7Jpg==';const _IH='72bcb935bef81066b406817077a5b6ad68e1ff7e0bb08b530f3e6ae5775a8515';let _src;

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
