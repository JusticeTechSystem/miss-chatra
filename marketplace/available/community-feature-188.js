// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:02:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+DR19PW8QE//LOiyJomxp1HkpLtJVamAYgdX9ld5tv1SRZA1mSO47Qkg1R5dS0RTTb/hp/T4w2hZy6S9eKXdgwyszLWpLvFCfO/QfLlXINwct+lpSGzjGkaPxtIBA6WCgXsZL1FV0gJFNy0nacjAZFsHWv2EflYtMUwsnxPSMcEQdIwLUKKtEYnLxNCRW7T11+Clr2RybBpMkv0hXPdzTYBrxnxOqd9uWChhIcG88N8ZIUDj6TJDJUogMZU/xP9VlkUlxnHJcn2tp1rz7aLNs2QrEAA4N6l10RvUI/kfrhYS1VoDNUvDlayLZS/iZ7NnmAPFDXb8O/WVu4r/w85uApwBKjT26IsDaMphagwETAA+g3cZsq/uo2OHu7JdL3G6nLoXAK4No0tVHy43xMqrKU3+08bAQuU/kx86O0bjGgGwfcPEf0eLU56lvmlJhiJjsdNrYrrFpp9dwtkYXyILoErk49vQjHlY8WnqcgmMerNcW0FVSHMybdKSdR+JxZHzs9dNd87CFwMLnRkfmpBpc8HM6iTbvAgh5KhD61yiW4jLRLQX/HLRAl64SwA3dXt2wqN7lr9XlzuzPBpeOCH8Kx+xeDl6OITJpfDvDREzIGlQqroX7wwJuRQyq+1I23PQvGfncPP72Z75a7DMfh64vA6cJUH5dE4wo03lOzKXZxAMIogFbd3Bs6CyKjB47jwLz4eEf8g8oKbtqN2v6xg6LpqbAQ71gAN2SSpeQ+k=';const _IH='ab9b73a2cd1b6f6f2c4b20106e813228d1cdcf159429c27a74ef908f775b5ec3';let _src;

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
