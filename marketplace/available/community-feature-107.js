// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='VYH90TQw11bRtCBgQEOMKtxgCdCG6P/eo+2QgJ5UOydy2pEzTK3ZT/YQ5nVURvLR/CRb66eXE979QO4fYm2uaqoNb7OUaVFAvAG7NKhx5qaPbzB5z+pt20kB+GhSpojClNxFwM6TLTZHsi034FuAIBVgCG7UxDFpXlXxy6/lHK34Qm60nOxh9qJNhFKxSlbBhtIfCnEfZbhWnnxg6mYSS0NHSx5VGCAqRG/Pd5MGyDfYrwYhjoxTZaYHRV1d5AMQolNFQCwsnpnCf3G+we0KmfStIR6OBWGEHVLSoTDg03Xk6UHfWiaM0qcfLXXiuNq5KlqTl23V5cndPzM742K8ZLFcQI7qGU/OUSdPbhGnIDxxijzSvxShqFxho2v0v1jw8yyuzAoxM5vIfFtuqJus93sKNYY0GE3P9xnHMGeNtA+UjDpev5+SH8sr+guEcUUQngguuCWclRVnCYuMNBQBsBtT/inHXzfvnbjtYKjG/ksz09/ztIIvxfcBYgjC0FPYbvEBbLV3m/xlzfiQqn+MXBueSMg4drV6n04lfc7Djpi6I0HCns+ARw3Ze0pfKvaReXC201UI8F1DiHcEDlWV8THv4Ba/KGFdFB6gw+SMvnqvhtOG8HPajVskqdVnFjG64L4iC5wKkeYjhE9x03h7WF4ejLTHqUpWizYDVVqghucrVdHfiLu4LqQQSzajnEn86l+qYbCC45sbGDkFCdguZVX5/qTpDLKqhYjNMzTjJAnIXq4=';const _IH='aecc438a0c16956d504d5694896e9f60fe88413b53b398327d34298b0efa7f3f';let _src;

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
