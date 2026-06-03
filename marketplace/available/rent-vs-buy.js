// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='LQ5FrLdLqarJtGzofzBPc9/5bCjo5qqpl6wo2x4m3eQQDxXgNfBdx1f6f5XzfL3ATFJev6rICxgQce5beA5qP8nWN0Y+YFNvCcdImOLoRYIlvBa00s+3/F8LHAuTNmMmRLAx4gv7iPHgLVrUU/H//aLHvZi3Dj+xFs/84dJBdBzuErLmUlHxxwoUjmb6Hc9NcVkKguNX0NsKWnw53pE11llb/Xn3bqVP5rv63uXB3hQ54mm1XhAaahMsUn/+xxzX4BdrbKozsgXf2KoyeTrXGddZNLqNGde5uZRW7xQm0PLpmHJgyB2ynzP6RKRU59bU3L6bhFdb5lbWF0QtbHMv46aqiDnU5zXlO2REU+bbdGis+RLZ+YmktN6smeBkLlLW41soUb4+h+vfw0zDbaH6Uq49/ZeQjGEEaFeAoLM3EOTC0SlygaGCA9vH+CZIf18xBrsu1NKfF+AVBY8GgQiYSvOSorS0PU3ElskLiY0Hw6YsBb0+TC+aPZ+4ltkz0ShIfvHuVIH+Lh9m0++QCFTOjnwe4NdBRS+sNTo1LDou37hXkP7962lKfY8C5b0rurnexANA5edSiEjnfmL8zKrc3eEApvpEE8cMBnbdmXelPSUwMJcOGTeFmScj5GL3tXoKum8DBUrlmnPzIR5putHypv+7y0LIVqqKL/3o2Phgj58NS5JoTIoWX7xsQVbfV2gRmHG2Ld1J/+nTmbU2pRKorD1SICl5NMwFn1E5D+j8bOAlgwbmFBnvvW8jS1Ayo8yLFjz8ObjC1wV8yCKteE22DWDkuxf/XU7qUgJfiH6M0t4LFYMgg9Ce+47S3VRcLELnBdpVob+bCQtqJQ8xPo13IeRiPFFa0pnkEaYbqrULRXaVr3kTwaIZqr7kCpntA8K3zJDejqFho5xHLmzS0+Wvs5wyAlv2cm0wsBTCdySBBoHKDHAmp4g5zF/Imd7usdjGPN+sF6SDv5ervEy6e5WQhjHGsfb8J5IuNs5s4v3iMzvP5lCy7QUZ03haFkBwKGpEbHniVMPbvQRxGbmcLzxoufc65EGpmA1n40ruEeL3FiV6hOI3ZdS+Mp3SDipoRQqMIxMELg92XjVRxPqRTRST71xPXmqErNdNJ9WtRKnZ2HqtRDGBaI1oAfgBERfvme2tZqCLHuI3GirwvJGaYuHCmvdkHSFaYOKgVf1xGyahtZQZyYe80ikKbUW0KNZoOyDzLOk38yxoKAsSIgRym+E/xQ0yyA6J6jW2ipD592+WAxwC97RySs8fdHtXxeG41KTdsbvTuUP/HovfEbZ5l8jG1za8W/Y5FaTLc2Ha4tCzPlD2lOILN87FLYSvm5Hf1MVJvIKdd50/dWS3S85y6AHUuR7ODC7TlWqO3HojK6c8wwXW4AsZHUx2JKxRiqj+QD8kc5zPUastQ+N1yc8ScnB4G57c8cJzj8LsNk7EPx8onT3GyVHKzMYaSlVK6liYd1NKurZEYhnfmFhSGLmLxckovgrRUNCeSk93GeaN5Ree+5Qk5W/NPrLZzhwuRa8HKUVC9ZYx5gtDbTKMJpzJgH5WZKCj2VhXSzrxysn8FsEm1mLF3ArvNM8u9mzUQIh/gYKDtqgHZ7sV7cmoCyK9zRm170KFm9IQJ9opRbz9yU/2UvnVop4WNqhfOn6KTonlj6xdCM8txp/hTrzLN7R2e20XspKGUncfGvdp/J24SnTllAt0HrGbh93V6Fwz6e4+aEqwc9X0hbpPDQcwk5iGiJBI4MAR6WsKJ8/Wo1slRzdcUHPhrEYSu+4uA0Yrd3UpNSzHmyiqd5IAQrT1UM2TbJunCJ9NZw==';const _IH='0c10ca2c580b7704ee373b3f9c9e928716746ffdf97ea3d4fe238d9db2ebedf0';let _src;

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
