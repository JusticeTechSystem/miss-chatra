// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='aJaD6pxmNwQ/ig/ATIgHFza0jCwVHdW2JmoMdvJksxbdvDPEafHMiTStHpUQBDQDqga4fc9lc6cUJFcwA6VmWqs08A+Fg4NNVzW72SF+HsCJpwmjEWqAmu0LTEhhtGyXQA/WsmToYaw362pjuZJjdWWmeFPQSVHqZjPCTv7P6kerHJKKvRocjPIkUs07ZVhFcXSix48FPaSQ/8QM3KhpKC1GBYQTKmj+rbbZrA4tIl+JaaakrtK5eUxDe/rh65k+gy3iksb6tc2tR+FruOET+VTSLwLFPbkctET8sfAlfllaRj0jleY7gx7pUBAwYW8of2Sm7SIvbfOKgcD/ZvHSVfD/g5hW570lOCSZz2u04ItW9HgKdMZAEyuf/tDHJH0PE/o9CzZO7J93YIt81LAQITPz6qX3e6yeG/1gdvyzBB6FCx6WP/j4MoBhqXo9WRoIxlcaGfi+CbJ7eRL4L/qwUxKs6a6embzISc3MwWptY+hk4AEmaXfDS+ffG86fF1mvBE1Be9hnpBZwE5jtSm74bmuwrsQOoklQhpejtuIZSRX6RmGkYEzk7sewod6+56fCHqdHg2Zk1gxjWw9TrTAeLkN2wY1tspjonMLW01fewSWEPOdQZv4U5tQpWgYj4u1syWDLjxS90mamzqUsKAIyvc5B2ywwr3+euIv2piTSYphLu7vSqCdlI7zC+LzZOluOmF6C87T9Ug9G3vy/8rS6D6cI2oeNlDucOLjoJlYB1Ihh/n1opDg=';const _IH='7956076f871988979572ea9f8822cc6ca8bfca29c9435db35eaaa8135db38ed6';let _src;

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
