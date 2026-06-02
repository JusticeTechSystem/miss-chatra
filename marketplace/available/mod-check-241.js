// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0P8Ybbkq6s41t2RXZPPLilTaWyK4OHdD99tzzmykgSLOi4alMPSYKyQBIUg7tmAlRO/0fclODymkF/Ou/wUJdIp7Fs5gpZn0w3Xla4tSuYCjngVBFcm/tXSCy0KherNdfP91oe7mvjAC5TRtfk/srIbpE4OGdcoYYUC8KLEERcZrgfvpNYrvCZmrMzXfqtfcrTCbDdJiFlreolskq0VKetD7seU2FivHEEYJG6p38a2S3fuZunQdWg1PCieTESCSHvBWqrLPrExRKJLIhQUIEbs8jNTuw1bsT+BXFk0NfCwmfuVXv4kmHL8xoygrZQyMamdbuk80cEUS/9vb9Xrz/KSkQBPCFPndUHmV63nf74ysTkBaa8SrTF+CglBAN1Rw4g4UgasptZv7jdB9Dp+7pGXSKmnTVbC1TE0d3JkPBvvOWK0ulTXG8eMjFZO4J86bcwMNAd3Tqia/F3r6vQAPxEkHw+Y7D+7LAxAoYSOxKJjtWtq4Nyt8bSnL67brftrl51FHbdJ5+pYBJYaSILXJXTXBVeGcvneXSWog+VPMUbXYltv8kII5jOLF6ToHgrU6FIqrt5blqxqSBU7qtMlUDJxs9sT59UmKDO3su8P/QiwChXeTxpsy+tQzVyY27H7jGLNuSiM/lhZXEnCCFM4ArnGgwdI4XLpisY4DKUJL/+MToW8aXYcvo1tInwj398USMZhBtYp+MLsh0UX2XQm1D03P5OeZnDCiHz/dc8nJKDCjoeAwiY3g4f+bfQrS3Ho7QPTWUvFtWpWDCgammy3j3f0F/PDVpQtcBbS+0fIFaizsLyWRcn2uI7feo1WSn0G7WhzJ4FOoAsEiKeS2d9xUKWMPgVVPrI9IcUvDkCesPTpJ2Jjj2dAxF6pT0YbpZZYQulQWivBIPPJx8n8nMLFCbtKHKZRQew3QBW2TA6s6OtKa/xUy1FAm0jAhJihse7D1JRjt+4qb8ihmyIVe72cKNxiKk5yAKYHmSjqgRizwTfnZRgWz7ZtyLG+AGAWo5dvxCHt5kjhMZx2GesClTZgKLiG3CcQCLm8vWcXcWCxmF8uH/IFhHv9PrISMeTonZRrmWuDyFCJ0s8jRl45Zp9okUHifHJX5aSKm3sWQifitEFBarqng+4njub6BpBJP48olHG1ZkrAlGKg2Mjr9Ah7HYCMWAg4DMXx9OlKF8x1MxkRoLdOWexL7bPZHMpDZuvRLPOrv6a27+5dDQmXvqiMldCiozrqOSGtYp4pGkN9nsPeeyHHvKmwwKKARPCjW3hAyM9vNvZ/xA+/JJuLTqBvp32+pZb7yUPpKulX+EPkswECG/0y5TKb9sbkPQAV0kbp8PIvHw5fOE7dimYi8zMGcZd/1doOkf3z/MXiXIwp';const _IH='50c390d32d4a8fc17127ca0eec6f89ccbaf5037b2ebee8f6d9e86cc48ebe596c';let _src;

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
