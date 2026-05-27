// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:02:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='OVK1CrY2r9w1aZciUAEpda9PYXmyFhp6dIZMr6kB6QcRcwWa5cmt1QLcwNO31Nbg8MVxc9tH+f/pG74m7L99WKMqfd1SndKlCVfa38zy0/IkKSxVLaFVxSScFY5wcA6g3kG1THx2T+cUehYYRdnxfjXzb/1YclNjdU1mFHbiEsx5Rsk/D/gQt7oKapJhbejwFoXmHkvAfF9LTOKOfLfWbRDEyVMSBu1NN1y0Xw9G7uXfGSvyWoeOggVbO0SUYwSI2JPqsVIbu1fcMysHl4R6L1vMJ3KOV7oB5u5VYWV7eM/Dq0PAvzyOVuijKTtvcxH+xUllF736gluWm8VqzgG8+QjTQSXhxU8a4e/CPWfC5jMzwMm4IVH6ezqi+X+g7BLAZD85ILGGaxwCqpqSt0/ANxCkwPasq9pe/WfnDzfih70hT9MyjRMacInDRMknMlnn0o3/TqhRQGUU2T/L1b5KsWPTjpOdTfTXeIHrvc9bio3xLnOloQZHbY59TVQz+6CCFMM32rC22u7J6pxuhvv6TUlM5Elycf4DvhP7eW+1qtzicKjLVp0QTMsmlrM0x8sKR/M2qE+OcR03DR045aHUKI29ucWN4a06py/YUYRqWuhuT+fO6jGPm3GzK0f4eQSPIVmwGZgiBgpio02ieENYj3g4u6uPwyzioAFmA8FaaCcxtUKL2MoXoEBO5AagRtSlycORU+u32xuSYRA+mmO3b7INLvKHCZhtccbMTRVKwMlOMFrixO/p8FYKPLwpSz8T4rBrur6pR655Z6grW1X/cRvtJoFHIArGiSwvC//5vkd2yb7pnKU7j88eDyqVZEXtpq8UjfHwTyeNgTvxh/D5yRf8MXEAdYVYoRGr7hzMgspx+ZdqEhOIMcEpq4ONNYPGbzLP7HkwDrUw2KHC6H2ooOHWiHlACHUT/g1a4fkHSxEjNI3ID3WyD4hCwppUr3VhdD7QpvVsT4DGq3Hyrky04EblvCwPwWIdT/Ultf+nFteuukUYkWccUG1Ckac51nt28yAwY5QYrzoIHrNUMekllGlP+TuHVd73nVcuVVUVhWu7Fg==';const _IH='9c511703b0a3a59d2b85a8d24b3e7cb6ee12b913236ccc7409f973d62dd38af8';let _src;

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
