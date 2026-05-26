// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:26:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='rW9nq/wbWae+QAxQK/YDYpWW8WXg4jgQMWvRAaQ4w4cfnMX+TxHHulQdQt0CKDQviJzmRsRmOOrHpAefna6Htyu2WuUszlZaYs97lnDfQYuSRKbcEbUJGafXE8906qOGvjczITHCu8C5C6cmthY5fGlKxKuNh+AoP/0REI5Ndc1BiMr26sACswK0C95vVdfBYbWnRWGC29UxgBW2PsEqKGMafbpqAYDzMtKb978nE0HRnB/octoElv246ytqOX6u20ZjaD7fGK5VShXE4YEFZDh1Z2EluM0p446VQ9Zpd0yCfJ/1uJnVfZQy+LsvwVhydUXx241jfpXNgluPHI/n0cmRSTNVrxGq6tQhQjQrWGfTu2KLtD3U4dr8veQSlQu8o6DXlldTyklfxZCQZJsv5PrWO+JsZ3MSnxbUmvwRakUGhj2e/4dAOWXrqK7xTMmzzOV1TyMCkvLIvfj17bUilEKfc+K/uXwckiMwqjwk1q5xNFD868CF0YHpvjNv/7G3wdBcF7PiYsQN6JkwG+DetYLabXd1mtYppoYQ6nnhICXYXLCTXAGadZzNeLw1ktZ0AL4li6zFcIeBae4Wz/a04viFP01UrzA8gbpnyY4EYKFPmgK3VBwqCt6fEm/EBzYl5ahbhvTefedpTnKCHISrcXBYhZrkbqr/1iPbR9a9t81zZL2zz9hsN4dpAwouMXUewyTQ46Cd/XMmlI0Ar60riyBBcAgwaStgSNIUJRE=';const _IH='f7499072a24e4e59c6cbe9fa6a150157d84d5b209639d431df8af2bf657562a7';let _src;

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
