// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0NwuSHY7mcJsDTIwSK9gSg/48BWbCRJz7KeNEBmdIPTi8dOv+Jr/wRM3zcxfBzMsreoo2jq0DYKEqFy9D2Zu5nMc//GtchP8bZwwZx+85nk4qliIyDVei8+56jK0ndh5z4idEdG68sx7iILzP+0JrJiLeBQynZJzIPNaBSnSVG2fKGPs74YXnbio+F+0KkNXOZ36VWU+simfh5EK5ayBP2bPNmb8AVMGtNatebBusZXx6OIA8soiMG0LKES4twIegIMr7xRK6axvrA3junvP9dZ0l3vj3Ac2LkYglNdmdJQhdLpdWwP0KGuPQPCLdGURu1X7tvvf37KzdNMWfoV8Szi87bLD+Lxyaeu7GBvqNDg2Eopv035c1nmwuiPW+eezRAJrMeudolFzuU1Lp0EJ4Ye7MpVAXsIju6HAUjTybrUa2Ow66SUzHlhdrJPx4rLAawVirNz3fUrusMB8ptr+yq/BRaLg4X/n5ClNC+lyvy7HRS4tortbsSWmAPK4ua1ePkVeKM2cBLxMjQBK1Dai0YPDF91wtKURqHFLIV1Pz5CozoNGlKqKkcVIeXGE9tHVbCk6+QN/FkccBcK+DhKssCBDRbNW7VDncIu4Msnp6bedYCGA/5RNR+tGb3iTl91A9TJDOY8IF1YaciZGz9IOLdwBV1aZ/gIOTi2tC713BaXcmpa5zusANJC6AEGdiK+tAosa3xyrE0Nft+5BqOmBW3Y+2IlRWDZcxUMcmfIZLhYe659Ily0mhNRvQSemZJ57jvygXXrdWLOZd+lsWH/DrSgiGSH8zsyZifQfwqnlxsmGyL0aridKDRK0UMHDJaW1Gd4f6AdwRGGVByOCZowLKsxPptLOUr0ZT9KsbNwwYrjze1AM/0jE7MiPWO3bSGQFtvs3xfaQ2tj/cobIVxlIDT6Q/4/HSZ2yGQUPdvAShB3MkaIqaiJlo/3iUklWwnd6f9WEnIqTe3orxRQ45wYT2FMGSdKS0zw7UB5neA5CRUY28DsqJrvqyIzEl+aX1Xj58KV4B70PTf2DoPl9cpKxJ86nHgU0Jh/BRWeDNe7MhcoM0xGU+OmsQd85h74/SXe+gHaGOnOsXFjTPnP3I6lVaLymJTQaeHfcPgGPLOSYvppvGpQ+xYBONtrkb1STg/NBAVk28W517EZVS3DKNoNpD30pZqdua/op2Eu6CCsydPwQK4Jk14/kBRx3JQUkRbIzrze8pzRohWVxtvzrRXkUwkJ0QNxeSE2TvuMgJwsARo7vJBBMuh5MwS+JEiPe57enETa8A1ubO06GzN0GKFEc+9SG2m/nztzi0/jZaV2G6czQUOj+iUs/vWaDhHfhCd4TKPlzDNMfaeGI7rvEagLMh/oOEmIrDo4DymjXUN+fDS8o684i/dQpP+jxSJZ5gdpyWjRteVsxE0l71eX543XTGyTl70viqNPixpk2snei22s=';const _IH='db0b9bc16ba4d70b460295437d833f38874cf3f47e4e09b0bdce5055d7ba3ae3';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
