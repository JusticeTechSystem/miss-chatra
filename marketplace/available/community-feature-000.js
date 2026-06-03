// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jq3Q8RPD7l6gi95P4uWKkslert7l2fcYyIuNA4+ItRpkeyTmapXP6j5Gu+Y/bqhcmEU9USQQ8+exAULEeNV08k7Gvo1WEov1eSToLwz8BRjY1QgBPDmWWlBdf4T/L/Zq+w9+3FUYFnbbKomLcV6cFkhBIMKR/ygOFXWHNi6t3M+GiXBRN60p1vlrecQevH+FVUIeOsLFki/BsR86xk+foJPMsgBKkLyCBthg75JfT7d8pV6EWoGPL69PNe17PITNp3GpZZ+uYARgRtDlu788gVDM9ohiIFL01Ef6aJ4w0TE9/1lNmNgxM8yQIb5CI4rLiwxZ6eWtwxAUZKzgxAvBXIQp2m8sbzfCoJhknArNR1Bq1jrszJhb6RX22BvZ1dhBqQxn8StI8gdq0zQaHf0KaXndkgXugkgykg9MakvNQ1bKBX5WWPeMCcg19bu3/JByEaKKD9JDsRaVtjRNst2u7/TIWlg5AWqrFs7viB+xyCAB3eNjgvIw8WStGQiugOfzTB1THbUT01J+Pzq2tduSdsmmHUEZpfqiGLjkAx2oCITCn2hinZ+/bE3MbmoHBHxarYRnsjG8Gm2WPCpBEIwBdPwEvW3HO7leHagmmagomnUgsdcgayX7Shs7Rxegoav3r61YWMgQJc63P99PWR/eIHoZWy/4PB2UiD4SEkziShmx1oxQozxGQgmfUZRc1sDE7P3Hz5BaGL18Ta8nmTXp/XfQTyse522bZ1iUabo/xdnw4g==';const _IH='86c5805fb43491074cf578eb34b4afe14b87d081af3081fd880539dc00e53105';let _src;

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
