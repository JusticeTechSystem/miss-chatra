// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='KMh2LTQbOJKInGMp4Xd8DpFoH3gYMYl4jGUnssSwYM6J3V58mAS6bscFucJ0jVXTCHVZIec2Po3KFLNbR9rBzi2Ma+MHmojBZMPO6z55d1HUZe/fEbQWb6e9WO4M8CWKCuBXNBwygkMoYPGpzyvFrVx4O3fIDd4gb1OQLUDmkB4cgTwNplQcvqycuBqfw7Toow0CoN+IUKMOkvQB52z1obZXZB2GU1bqD/ol5ZkvQ6jTsAZslcOCF4xwAKA/yyk9cthC4E7einbMbefn86OrGg8jTDshCQhGiGEj/02b9Dy0bTqtDbyGk5nMPnM33ovhY5vMYDdtOLDvaVzLKB56QNssYOqVuDB5TRZ4e2BilgyDYtBNo38Sz/XPfJm3UgPTjRCTytU/Ma3/gS03jNnChm5xa+pRaFJKuvhYbjvWfzsa8tv33qWJacSQml/QDTL5tZ1nwpJ00XoRLsVR30wcY98bvBTrsLC/3lz2sW+x4FZyG/KP8754nJ3aBnpqIwJII/lyUl8V8ZqRtlDboP3wySd2PYzAIo1vqXZWi6VWw071BNRDgHEMftzKRmHYjAfr8BHmSKQs1/QmeDkapB9aABmASGxVzIlwxu4mH0wRJiL0Mz2pSq2nru1D3rSeAJhWp0Iy/VPWzTQZIdvLsNrpDJziR61ghwJYpf2uAqgdX/XxBvVucOEiSVoP2VjaQUGbOKEgVMP2LocXdZNorWbgin/6apGw6K3VjD2nQURqBkv0X//FJiB+CrFTwJ0guQfnrSCbU+IiaESMLUwlLc3iTycbcqmPmEn3kqELUDijfvWJZfdA8nNtk4l4Nq7zFK1Lu5eGhl9K5ggti5sG0bmMUWBASM6ed9ogG15zkFRLpU21KDfYi7GG79IyvHig8hy3uv3iPx54QabUn0rzpA0DBoJLzoojaV74QT5Hg9LlanofgxuqTlxdGHZmasq8jvWJeZg6Dk3RZVRd6RxPP2h0rAyOsDmVijJTtXZ9XaX9IuG9IyMQqKID6ELRx6+dwfP/ZaEgEFmalo+OscAWxbi+O7HMAtpsb8IQIZe4FpjKSyKnu1npQ7CBANEMBDqjg7Ad/J8uJt+8RkTXfcCM6l/qYlL/rG9FiGoCfq+2f6m3b+pmZBIx4rk7vWFHbRay36JR34fYpl7f65rhwCV9MQQNpk2rGt1qFg22flyUZXHez6G9Av1SnhQnJClW14algoLlDEENaE2JFjj6RHZnOUY=';const _IH='eae248bf57dca3860f36fa737ebd6b72870b41f60ea01f534cff0132422f89cf';let _src;

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
