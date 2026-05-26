// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:25:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='5DaFcmAQOzDytHKFmOSYG1hlxaH3Kr4DmBMP6aNeumFpsyJKvvW0Y+cVyVzB4kZ3JFDF6j9ybd5DpGYXO47syz3N3qVmZjotCxfU+sX82usXbg+TwI++4sUD/d4BQBBn0vWrj1EXFdr1Z+XQnhWUXeYNmTBGmRt3lHKwWiW/xWCmHksV53bV8pGCQxUfwYs2NWYkXCW7xavOmnS4DdpvrQQjXXWeZF6FCnsJDtc3oVk7jKb0F9i/vvT6aA7dr+EwmYQKYWtMD+fiv49qKoIQ4MXKjr+Lra8Atbzw6EK9GRxNxS1nntQjO3YRubTK/9NF9n3PApee87Qk8ljSUytnsaEBtPX4us7W2+l5OLS/BV2sy7l7tlSJ7ux/vu+sqWAly0fKkM+4JPAtew9UowFMDCpKnBRANMAqD5rExqUGnbFF4H4eubSj5I8//6zQhAE5RkvdUxoXCbyWlxFDTj29rpBgHwwX4vRA96iWgjTyDEV+1JKN9Q0fnPxnBlegZre0Z+jWull+rKtzdVwB2cl4ZEQnfGWICDayiaQPYl2HyLRtAX6jDwG8SOWptNIZ/Vb8H1M0vVAFeS0JkHIv/E4/+d7qZ++ZipOZ2uU5H2pgpAJxjv6OSTm3b2cmTTUtHJ+A+cLy6X4JmU5H4X5CG0CZvFPqIRk9qJZwosWlvWkZwuHAI6E2LYW+sOpM3q/Oraf3INCuWqBHMz7cJpX4kkAf9QFlIhawKHry3R0XvLB10A==';const _IH='6885195d812d2a6dfc80436e08d623e74f16ccc48fca2f8a5d5e582ef743d712';let _src;

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
