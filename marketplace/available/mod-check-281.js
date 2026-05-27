// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jGOHduYIpjtlzLwl2oXk1I7SJ8R5dwEGm5huV+paB0frrNnts1Htilg5sP5PmzbwVexLPhCle+7i/MaeG/Qr90+ZL42iWQUjJYjUEE1OTngKYJTdMB0uoQpJmpyje9IK40FuDOdHeWUILZxOnxDOIrYnAB+uSR0tyEjovxAwo6yRVDrAfdryUJn+ssaHoc7196J8IJx4X8J2beTvd5ygq5RX+BRG+bFUa6CZ73aGOLCYy2iBu9Dk/XTUdAlcBPBhPFrf3QSCpxkf6R962Fx7C4RbyG6r24AfAb1DhS07Aq8/e/m2R7O22uLATpueG9Cg+fUr6NA2QZ1Vji2zo8M4/ggrxvWCSGkodEzj44HV2T8xKmWfFQ2ChqGKk3ZOeut+yTsvt9UrI9oDMciJH625cZHbPJdzbNBM0TXVm4Ih5qfZ2qTjD+zLRVmQGGpoodVk0nJSYCmsaSQALtnycdKNWnxVDFUQ86zsc9/re097kwOmzm+SSBMFlrh7Pek2C9MQrBvHJtfFXj1nq6maxI7p5nHWGHha11eQ5NEGcCdPCvzeROIiNxiA3Zg8+iDCIwUUzTDZjgCqMf4/FMbm0bGLEWjpZ8DyQgJSIynOhdBl9uWUO+SfdTDGJZPUPlLkRI+xdK5WKqUAgzM3upZxxP4M+4KSANKL2pRedQiua6XZBJqZEwveBlRF7UmoE+EURSZNy+g+0VXYeMGV295LbbhhpUI7a0wLYydU6OHcgo4k1IEtkxLSp3f4Muhx/Br2lLlIFGOp40avpDLHvkA/u2at7ctPo6k3ehG6rr79BqYNi05WiFeY1GRv98+AjdliOm1RCPZL+qRWGOqv4TZdFH14xOv27Yblqc8zzeEAFG4mSm7SySc5UdqDNmjguzslOaEG5rTuZBShR9bySTQeSkEmsctS7iKXBU6w8A4/+zPBHYETZ3usW0udTv/e+lG6dBzpdWDDoWPdoixAFbkuqOQlWAoUjVipuTc+1qfs7XD6zjvjV1KepuoqXoVAGG0TKrVjvS982DoPP9qO4iCdgmdQvHh22mrfvPvKUslZkJvvwK/ynYLwNmUYE6ekQRKXuuTugo0OVew/463xAQbQ2MYbao2Ti7dHCN1PZL2JoGYsHy8n5yVVn0xQzCxNfwd54ZRkMYpiSvA56fcsZNu07GKbHcgdfS3RlCGjaHMGwJyX5zLrsWE75j8wMefkBcn6YONxgPIP3wq4VAkUpMnb4rw9e3SqzlRcmX30uSxhYHGuTHoVst3jMv9hPoEVgulNuldQq80BMXz1JQ8S4NgfQvBoylc9D/sJu2xQxoJnv0BeynHIwOcXmzCCsd38nEyaYUfbp6e5fPwdQZB1DNdadWeRL7si9HTBqdhNhOJV0TBC';const _IH='62d8af1cd17c6100603f59b8adf6812ad41ba247f524c92b5aae6f69fae617c2';let _src;

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
