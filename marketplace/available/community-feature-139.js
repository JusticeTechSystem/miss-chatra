// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='yQRKlQmVrHwqPymZlIq5/R4TclNto5b9BY596/K5qx6QBE0zOUEN4CW3TmiRWhoMPPf/E5qyhI+/zPS2fDwjSKjD78TiF1NLmAebd0kQzijSuJ1C+jn19gQr0/mL+ydyXQKuMqqeup8r/t9Dhla+g59qf3wTNXYcRw2WtLOftGA2/I0vwqVr8PTsxTR4iOm8WbCael5zEDMJUWnR2lMpj9sRt4CQzvrp5KxDJlwo2kvNyUBCxoXFyIjg/duWYFMpJfLVgu5p20MhTcoRwdMBGFVH9W8WIHCbCfsS1OK3gLaRXKI5U9UlrxM4DmLdvMMIqLZL+CyqMWFlJqsd5lTDkQ6uQuK6zFQxt8bY2CtpH7PgEbdtypW30D6hNyDqvTvSp03EV802n0d8KCrYhuHdP6MxpS3e616Q52bcnOQH6+fDN7SgIf8bq3LNH1YI3YL/xDTeH9YgMWGYIf/UKmM5/LqqXeTWwp0+/29NR23mLvRBwtJLR8lPKnJijs8IzNaplp/gI0Mhk6GIrIgNx92dquSBBzBOH+sWi1IZV7RRLuSYayZoa1Md3Yg1Dnp8754N5YFDk6xlVcsDnbHwj4v9WdIGBxl+J+sFy0KvF87UJzYXT+hayGcMpV9NdDLjCAGU8eLZgZvnCRZ5KWPTQQHqKlBvfqqUGOOAjAtRnRsHwKcTSULFgvU3/6GBqcmH2o/qfLXQFroQBp6uk+jJpbvHe9KCi7f0lPX58PdTzr9d8HmFWNpAifM=';const _IH='b2229b15f94350dcfc56161d7b94f7ed566f79220979638e3bd31b55b54466df';let _src;

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
