// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:27:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='lln6aVmyZRkBm8ZhcVJZNUEBbUb7sD+DcwV+cB2jwDnzBrvLHlpEdN00cYgygJqfdWbXk5R3i+yNL4pYWijBlfzUvIp6Mardm/NjuMspCt3eqwHbZxEmJHxmOEBWhdtxNTLBe+GcAIuH6Sie0J++73COYgUQ3j4PkR5A8uJ5R4qkvEQp/XmUi/qMo4bHu38pNlb0pokpZGiZsJ0bYFn4pd0Nb5McvidHxi7KtdwMJYHbenFbku3C2iVe+eq6wNUF+hPjKkI1xRBg0EhdiznsfEZx3v0v0naqieRle3b7lI+TvSHLUtBLLVGePsJffBSCWlnDiFXEp0soKcCQaHV3BZnCI3dRmhbCFYMkJLKYvNACKrC0btj6LTQgdxae1Sl2lMeN+Xe8KlDXUqZVC/XcowERxtbS4ZsXjtoIwqyfn85XbnVsBJp5EgR7VI7Vo2s74onTrnIKDdbylpHDIZHE1pBjZvP8T/BIdWOYcK98TMhgdrhaqAZevgNisE4V/Xa1QCM7MyrYxiSQsqHefZ1wGLHPcmS6Wsv9fXuQiTyvUF2WtvIf3dBYHGZhQCMBPDbEzyKNODpxU3TNqBqGE7ujeIyaqQRdkEwJUoiX/mxav47FwXrg9NqcHdKwYtvWv5sEm+zl+Gh22Y6Ovxob0HrKBvau0u6HlFdeKxuChs2hEwCQ01Xda0a0YwpvNBwqhQ3pSeit/qq61f348pCQxPfWoi9+UyMdf2Q=';const _IH='053ac07dcc48504ec4395006d1aab8a376fc2a9b1b73c23055c1ae10de6e19ec';let _src;

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
