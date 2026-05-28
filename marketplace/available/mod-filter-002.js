// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+g32R/r8tL3era5NRH8CR8fuMoKW/qArvU4U/n4+N13F65TZdchrwnfmWqOwOCbzpdd3l35wrb26ylteOmeGXu2dsGIMcDXDTZ/73P7gikZS7Wd2tt51QEZNnz21oaw0NQeeg1Vn7NAJbyEJJTNYYM411s8BWge+1K/nJvo8TFbBavQ9XDgHigqKdK5Ltvmc79tyCJbOEIfD2s9xAO10GnYBpdD654Z+jvgL7esXHMkjGPdjHDjByCc6EkChCy1a4Yg5aiyjsr+mbAGIeaBQrKOBcJBJNOQdPZWTYBsBh/0mwMp5QnfonnALoIihXXaMquV1g/xytEXry83HCVXny4dFl7902RYBVSN5UcZE6piq7mkgUpOv3WHdzQClOrH+6xWATHbU6gzkHYovmfcXriyEaA5xmcfU8pBDeQcOy71xKlI7cQtHLQeOuD5/JLgQ7S7MfnDO2DUmOlk1h/40s+s/BRyIgNE39P9tGnm644FYCluJfRNwG9MWAmUk+S1x6Hfuff6iuQs+7T5D0gtLehpOJT2cVPjJ3ld9ZrUeTfb7wggQdvW39Gf+csjMdPi/ODpWww8uqgC31RGQtQXHbZ63UdAczqtgTMiqj5016s3Gh4PORlO8FgON6mOVTyg/glcu4VE4V3Xo/J5k+VZMn6jNaAt1cHLRsaVrGrzUUhI9sOLn8ehp3BOQDOsCWVT6C8b5BfK9+kTWjKawAnaPoQ20rRX2FBgeF/vmMPS+FYBDPkppj9TRlkAqFndBBPbJzeG4o5vA985uTKVGEejKrZtzmcKkhcV23QOD9ggRE1HnE6Gv3q0cpynNB93M63Uil8kfV6F2ya0dcKqthtQVS6z98an690fYBVFOXXEt9IYjNL2QJN5ojMpQTBpMIPXR5Ya9gWkQ7NGTBTGhqKsPqJ+3raJU4Xfc3F0Cbta6BuiDqG6aqK0MEjJKilu87AVL+1MdVg0xUsl1ycHz9HQHrAbPtVTsDf2sdWBmL9ahsIdg/1eTN5Mqrx8alsjMe8+kfxfUMdijT2VjS1R8CCkGQBqtxgZc3mp13LoUVQh2aFbjHcjPmJOqzO0NUu5IxTxjGS0ViTUL050ymzUMFTKy73q2full8+JgayxCWYgyCRI5J0iDXKFsfq/b/V26Dv3xO3M8IHBgI5OXHYTIyHTU8/Ii9uA7QJ1sYH5Egyxy5VIizmQPxDKzhsO5B2ItgFVRj27kSEmDlqq0+xKt4yfP+xxcdXADBem+poWR3QMfBB9DmsB44mxdczbjoDxE2FTL9mGKg+0kL6gFS2gdUqTmdrSJOaAs7EzMnPdCxyQBXW/ReoTfkotK9FgXTCTdUnfApGBL0BC1T3w7M6Eor981CuplbA+BLlNenNvE7XLV';const _IH='eb24fc80eaf04d8da1e79e9913c11120a4b5ba14e467cef11886ec5c2daf9af6';let _src;

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
