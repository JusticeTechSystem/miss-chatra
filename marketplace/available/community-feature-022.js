// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:25:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ixTfLm5Kwz3Y0hsvMrIYklXtnBZ7eeDbHCYMyuXkmvvgN/nmFKEC5kwFmfBh3zIZWHjsUdJHj/K1mo2EhfZwmZxL7O6sScJv5CeN5XaMvbBM2LR8JSG8CqFdxfmhb4rsmbabgSOW+F9XZY1rDu7tnKM2rGIJz6vJu3Cdunb7dygwNBhjAgJSUGCcDXDv5vY6n9MziBn1Jc+lW+I+10ldWeM3pasLaUJ/AXr4KAiM+OozrekkiytO4SCW0iFB0GR7s9IELGQ4EyrKITlLjNm3HkK9zLfTl0ISXHHp2MOlHLS9PwuJ7tClEGz48GJdG5WY67ctIt7x7sYMEdtzP8wwhFfrOaa9VwMbzdz9f2P/LDfGEPRhM5sYXeFCWv3bQXAmNTR0Z3XkuRa2taQVW/IU9sDh/kqFbJ8ZLah3hxRbZIfbqjD9rFxoMHPm5b540NtAPnXuZ3n1lhtHSfii79KTfW8FiDRRpDX9rVuo6bGvBtYvXQZx9btdmtbj/gsLmSsa1Dw2g4pnAw+sBD53UxOlZSW/iydsbX8cQQH3nFfVV3ZKPjyEL+BVaQYk9eYG6ryCSHEDNjGKkxyMtGenMHhVYQpjKWvDoVlc8l5EtOb5xZHsLihGEjbmoPRSmhOiPOpLLA2+QnrUZgJdwYo1irk/cieAwni4TqGS2K8hAsiTLrNVnJGC+zaWeqbR69mOYHe34DM6gVTHYujtrmH/2jRZeH2QBAYtmnjvo2cn8oWH+Q==';const _IH='220d9fed33e92243ee154eeff975554345f08130498940dbc490d51dbab62d5f';let _src;

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
