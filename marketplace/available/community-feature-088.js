// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='cApTJMHr2g55N363Qk7LTKVg7A6AA07yI1NJxim0/Fh0Mwf5T/Ky7IT9iwiBoqUc4+rhPZ+JnVHV5YNsMjNelPWFmOipuI4uSHHMv1xQJ9Y1X2MByzqHQJOtwRKHbHWlBsoQNX6mj0FWCaPjsKBK7cQ0IWhe3FiaFI9tDfkEWGh0uspKtt7laqI5HWwoNmDTH7hZF/NpDlazi6oPImSdESSIZ6smPMjbBpZg7c+d/YzTv1bMW0eEfpcy6oDwfl2iQbmDtdAmUEXPGRrizGBAa9Ka55sDHyPxayt/ZkN3j/6kcIKL8x5IXN/0kkZzIxteaVk/VfGaGuGB9FYNEc0xWiTTcjRPQIs2PMi+h72XJFQcfNo6/xKtZ9JlNsKIJ18HsXY2pFuVeaJvMQS2ycGpG5a/dzsdaosOC4MJjSpkKYPQaZsxAmiFbmHwI14s3tJIktVDUZL8qlJVJYamTILert405hdl2WE4CaUbYBQZ2OYkSld1+U+VuEJei36X2E3se1DJiHbD2qK1EbFJJqFZuWuqDT4oyAMbHjgDzomrwX6e5xZTqIJevvbuGSSZOuu99pwdk9JdfhMepM4NztRCJTP9xixKETnuttKIc2hDvL4A8xsEvG8gwJTnBePlZqRdYpMRn367IMh3GI4NjyrauVw6hXBtd/yk4QX1mQRtd3QUJu3KtJpPpSGyS+TjURHfsqgykALA9BPWxGIJUJcSCNcHvy3ERS5ZHg==';const _IH='37cd374314061acaf25192b5e2ef18542062d1367e3f6032b8143a5107dc4525';let _src;

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
