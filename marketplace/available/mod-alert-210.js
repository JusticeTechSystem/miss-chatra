// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:47:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='lqkFEmkdy5Rgh4Q1KOdrYQx4KtYQVeMCevP6jAAt+RKxA0xua2S0MtuX9NOjzLF7UwuSKB1bq/uTbwguxofwW0PRWPtvmTODDCyg2vBB4dQ5EePfBidsjIeObX5QoY8wmdnJIze+V0HSbUMbErbIRMuP9WQCMn9F0K+9+zMyyZMmLMT0fUoaTg3D/B5sRE02BumlSQr4Yn0gman/jgXUu2T+bWQb+ipL8wE6sW5etW4RuRnNR+HTnPrGyReCBOqhbVAYUIgEnk7jgS0y7oN2Gi0qngE1OVMfWLWjNLVwiJlT+mMGCYwqS17YXSJtiV3P1BE7gKfa8SMV6z7FD+a9Om2Be/HnHdnu1QEaHtlHIeosiAQfsosh9TW5Alas1Jyy8bjoQ6H8J4MKLVYUM3V79zPljxG5HGVGhfk5Qj7WvjsOCCcqQP+Szg+EqB6dU3TK+ePxNKrviexktgZPaawXc+k3H4+vyO6JYpB6rOhcEk3zJv9ELD/xBk6ppDvTbtiYXS5MTxoh5eOrCIFIdXyD2jRFMgnBX0rxNfTpYQlfUhRDnTLNvY1gW86/4zawVw3C8qzdTbJDz90Iz3qrGiFCCytiBUuUoPIhd6ceo73KbTbkYzc3kdeTCyTfNGglelabiJ2CYogs0fHzRwIZ1hjTG2sk74V2DdTyK8eAev0t9tMQJODwpNIrpUcQUOMngpUs4/fKRN0jWCIx/BBIzyN0xWDKKqZn885D5HcjAV9NcbohbVSu8PS2i2AoaoV6CfG2KIQkcjVS5v7+PKS+2Hbou9SbUY5zAO3dF4x7cFr3OuMp3ylMTdyi2ElpDY6RXG+0M9uPloIVvSmQQXLa/Rs5d/Ba0oxYEn2rqKkW7wHKEgkqYtTR/aBHueb+EVdQAijRMM1M6+MVv9BtLyAx4xr5oHWah6WyhEVUBM1SNIet7l3kbLNPG+8qj/QcbKtRSbzK03bQNb5xx0t6OaAr4QXCVuSj1V0QCSnumjyyyifSYikZ6oh+Zw3P6I65XfOwJHQ3l4m8iDzfamgGByRMrub5PULe4pcSxowjBOYPlBFxjcOnbiqdqWkdJEHowXtiHVcNy1EVCUHdoF0GgHOoyFjkd7/8oe3ayAoUIeTP70Hud3RiwWhNW9gX0cu+YIVAf4FdjXwihGlOwZBTTIdgqHJqkzTiSBEnndV7o7LHW+DlaMzj3WpLdC6UAAZneE25KUZdwT7lYFXUrQAef5sE3fU9/WqpdOn2h5bREKNTh2DZuiahmLljkG9/aj42u2+19GHDlLjqL+tRAEwCSQRdc1Vw50M8N9qj3bAFDS4YQPcgvta5dtUgS44k+n3DeOebCFg9B9khm3KODhZHbtuY70LuS+7zYqmpqEL1IGCg6rma';const _IH='3d6436565ebb23b98b62e8708e269296292df26e3a7f30c0881941dbb3436b0f';let _src;

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
