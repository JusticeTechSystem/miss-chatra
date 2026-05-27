// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:52:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='JM6FcRN8ccXid6aQWqmYhoF1SSvdfh9zn9dAvLdSoLKLAEHobnfHf+5DsxGbdTfbLlsr3e/kkxdTJPzNaIQSjNQ+pYZbT6DiIMvVuP3xUFkOhWwGnISYH+ksT5d1B2oiHJ3/DdkFcBJlmeQRmtf7J6Y2T7Wx9207OeCia5oRe5mviyN/A3USFDXJJ20B92/X5IlOmttYYhcfdNHxOyARO3u/bNwiC023/kav2eyv2U2EcpIiUv2riKKsVgCPvutLcV5xVKEzR94eAqPXbHs84+umK+QFipBSi37I1aWcPWJvRzT4uSQJ7Y26xMl2wQ0ZKoU2+WAVccqf3MnSUikl74Lo5bGkDFv8JIQ7gzmET79sbQB543xZCxeXuf8YErdNw7fhrJiLm5E1UXvAV6bXYCwTI8xW36orsYX5/JGyWyUtuz5y7diosyY/sA65JnddDCF1ZxXEa3D4r6nZWFQPSbtFH9A4VtFso1NgwITsBHtmzKoQVlkeRWybW2Tisb77xSPZa3+qFTQi5LJ8Kl88U/N/XtgPWmho3inaQMtGyDbL4XkecLUU24ikpf73qF0KmMtlUP7D/wgwexrcynfOOQOK+pcvvi+Pb6rUkKRA7rQyF4yfNGE/0gJeQy/zQhy2UbUeBQCK87NlRqBWQA67/hfAQFCqUfTAFZ4f283vNHGR4y4dPesNx83vOiJCkhLjsU/suqp4HI4LaBadaTJuuS0qdI+tLN362VJo5Wmw9X4R/InUV/CLhYP/T+FivO1OV2r1ayJ5iaYRTp9dxctWBGnJLw75S8nHvd4daDTB4LQBS6bT15hXUCvSFYdPZ08wl1xJVVKIgb1pfgpulr9hh4ydnTiSRyezriKFL+hrc5TYTwU1VzbVgBw2n/YlVXzn4eR5UDqs33NZ0t86pUedvAMi1u0G6kDu4ocjD44PMH2tW3vNVueNpH1pLY6jm5fLVAP7Q80biVjEHtM5e4qzIIM4IgzkwbSc0+ZOkqnSsLYGfifo4T5yOPQtCifT6FnIm8DIcO9vMHKgriIQXUU=';const _IH='3180962899b9be97166b4944aa9f6e3f2b1c9dc45fe76296b3b29f4629a6b3df';let _src;

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
