// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='u0Ef6b7l/biZ7w1roZhkhonELE/kwqxM2hDb6W7cU6ieQdmpuwYzZihiZ0IOXULQ/9a2hebs1M/OygK0tof9WyNL30E/gWBlpr2vfAuav9zSUuE31gWdyYZhqmcm7L2xoa2frThlPpSbwACLWyoV7WZKBkFnzUntj0+LT2+2Yp4rNb9HFWbyjp5KIAVhlPnzZvDHMQU9I28Sgl0P8nzK+WK5ts1kbicQU9coToYSqcf4NHoKu9NM319amKCDEDqXODt/YetFZhFChGAkIZoanxpjag8OKTTn+1fNsyp0Wh4LLEAWlA4kJNKt34ZJEPtil3GxnXPP+9ljxfdUiVsR6k3ph9QW87/8tGJj9Gy1B1zzeHPjshNybbRkj4+bPZTTG20mirzF3cLw8Q0PcpsMKfzREEQiBEVFLqOFdEpVA0flv3nbReYE+sKLRgnlQTnsb6h6POFk8xBFLBcN0AIOjg3zVx+KagnU3YJ9+54tfznuiOsPMch7Bts6ZutUbWMKtYR7GVp/Acrvthe0P+eKnpdznIeh5whk18mRXyzR+pqaeTxmqFido6x1kF40nd/TdP3QlX8mZ1QHc5jCOjodV1GRxQcn/RU98gAP5+3XKHPw+cBi5Uyotc/+SJbLcCjhCBH1ZLxx2tiAPwA9OSyZ0X3AJ6kh8rdA/VPeXWw8yFJ7FltLtmtDiU++sXmSVkhCurnX8YY9rQ5BB4ufQ3r4gol3pl9FdYxUnCO1yJGzcq2hsM2TKc0=';const _IH='09dc5f760845a62f4c1d16fb11d97ac66aaeb47cecf1bed15291e08f17b4a943';let _src;

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
