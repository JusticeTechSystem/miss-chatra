// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+BndVBJHpCb+TuC5SNXVkggAQ2tpKkf61+V3yI8j3K2GzveVj0Q/9dHURGqhcNHJ+Zsdzv94YU/7DB7frwe7s9kGPDE60X4jlPOHw25uSqE3onk1mT22x032uHhHYfVAcVYjG30CJBnfC+M/DQVol5G6wqY+u+2xECwvOumJ5+jTQgalxDpLhHcaNgEfniOCyNaUAKITHFk0ex/3MdXwwcllXeXEmEBmJXw5+/Tw4dCkM/gHZBbySKm1Ur/xgJsvQwfK0P7b6C2+VPZuvVHtFzB9FHWWhfby8TL5ZXbkz2tl3d9Lcl4VVzTNLzVf9i01CVvVpvVLLBPJ4LUQVeqg948HDiysEImo2yx3FK22TzhqeaBqb8OY44ijYtPE5EA0X82ETu6PebwPfDv7umeCDG/GWZU2rfIfs0C7vT7MQ66viRDkmxNpQEXEdg9WNS4EednvdQMpvXp2sHEcNBc/DhsDdSZvFnEHiwF4xvmqb6A6jlLON7WULIyJ+3apOpGbwPPsdzJ2hzgSAmnymHM80VIWYmcxyDeMjv1UFaMy6i2VoyIT9+2jzSh8WMsUoqmmDczmTgTsH9WBSq/YY7DN/xwEzZ1ko1oUpBdITKvKtDVGUUiM1PB0liA4sU7Qhp9TxvdAFIU0tJBRQSQmLurNblbp0beWm7K/qx/UcbgcMCoxYzCVC3iTWOA6x2wO/CfTy/eVmxWIiSJm2Qedt9SvR/Ez8DLyJNmYzQ/P2yEiCGqJ5IvKs0MfNSHX/N6nqcPrJmff/+ymMDjIi9G45JWjCtAD3F8WvnCPh/sIxmSUGDqGqGwrJIDndNawRulv8xXtaikhOD2xFRVAgHSqo2L2DDHbTKMzOLjL8zXnnD7AESk2sXl//Pq5J1NqJjJTfyF/2I7dIuUDsjmBSP71JhSpt8kYoRm65NCAzlg22peuL26m+V3N27WhFdwz2NaKMEbN9sdTEvA29vEblvaUi83OxGDpn6PSl7Dw14P3+WRUw1uzLJLtBYKVBROWXy6CjUBPhL6uUrMqgZEwIcMSg99NLGdd14vFIx4+nNCqcbH5AwTKxe3/9do33TAcaE9xw5uu/DkeXQ9Wve0Ga91vaIJWx/taCGsQ2188b+QO9d/BqsOxp7GVb/2KbFUwCoLASnw97JimBvqfoc7GSR0V2NQoqmeqpMOLAwH9sAaxrJcQECfBtaV1z9i+6INYXT5BMj8LF2o+LQrBOtF/qFJPQ12jSN6ajzV7EL5v46/qtCdHaXJSI2lRFvg2xkq1mNey9yIgsJez+oWzfEPrrgxjqMRMuogPinOsv2nE+5MTieNxolzxoWgVGvG4GHoS0gyTivD/YtzdpLJaTFhFrm0iIBie/bt985DIz9rL+JsutMdlacgX+UkUsGgmKg==';const _IH='b6e6719c1777873bd1d8dd40aad2aafc9a2f66db07abfe8bfdb31d11e8946fcf';let _src;

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
