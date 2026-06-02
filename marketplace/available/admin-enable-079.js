// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Z+5mhlNmAxe9RwXhV+2e87WdcTFo0w1AOgnQ3Rk6mHDHoxDwj5c/Vt1RA9tfWtNGMvoE8x8uF2OpcRwQ7tsU+N/x+65lePuO1m9/+qQxlMDfq1WKgTIsMVFKVSjtA9yvVd3lQbCSCMed+ip01T15GYGkPpEkmhaiLEKOsBUsjg3fm3y9dI/iysMhTr3YRDPIjxPgSYF2ePJWH/nw6mA5jnFsR456Wbwsqmzbh7uW6hJAkY1ot+kd2dG2S4Erw7JMUFPZHzMKxufeSdQuJUEOBVxPn0Ud4iNFrJdRR4aFA8nwx64w4X7uiY5LzWWBf20dRGf9MLFECEnN9ine0dHvS0WekmDlE/I9eacHMe3JHUEdR33s67Bctexu2Y7Mxxm60KtA1UYrHH3yCX4x6aB+ErE1OJUF0GyQE9LkTBz/y0K84llMDZjybdxeYqYzGxhvWXwMs8pou9Qnjc8z29CswFH4ywO3nc186Gs1xAR7ZErndZZ43xpuKIz5ixtK6EzMrSXA15WbuQzu7Xbo81RFiWAHM0xODFvonAPzDNSV6J0GwH66I0GJtThf4YjihzBgkjaN9ySt3aMiNTptwTCnqb4X1hYDa25nAhK5AiEboYuBjEJBWLr5JtrY/7fG8gGh7WyINtM+PI/qIoSYGot8XMJGFWLoLrCDfTfo6sab6OXWERmWUS6SJXfPLzPkycC81PcvSyQ7kcDt7qhZW13LOPHa9LYfxCvj4TNiRrHy93MtoNFWmAVQrRPyHJA+BQJuocrfLGHIR65IFJTkauzIKESgn9kNwI2BK402VnWursCnbZ7CRryb76qdFgQ6v1HdLWXMaTl4WEFw4nuas75gBdfJxH3PMqHpgbmf4gdljsrF5WKu2aB1oz744Xu4Vyb+qYy5QNIa+h5sabm0hFzfraE2YNXRQFQsEP3RI+uvQM3bRX8dzU7t5JChHVKS1vECWAfcCBKwU3VEETHvGgxxdqXLA8/DoMKm3GbCeobWS/DxEtijCcbpM4U5iOK6';const _IH='d432e345d63ec871692e0a1cf0a9b8ee9a56a5f914cd952ae5b5c25062395225';let _src;

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
