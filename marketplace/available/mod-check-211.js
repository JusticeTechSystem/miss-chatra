// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='f+hc5IzLx0gQp/a7bVBc5SeL6lNXfm3SK8WfcwzscsaTTb20NmPbyB6JGKPPLgJT86ld5W+qsaFifl3sWt+jy8las+o/e4iRxqb5PqnCq0i3v+XN6segKP4mAveMhKSLFzJpUbvoEPMOIrZdok3QvC1JCT+4fWYf81tXup/4hCU6RbyjpBBgDoc/nPmReyj1LEYaZ4+GQEkQ/yJQ3UTsg1WUGzXkLMUbX1pD8SIt+rwwwtfa6shTeN7A70BwIqibNRFXWZd7fGWwc37LEppFa4GiuG0C3tD0IZHYmwuHOXtUpos/5zmWdE7YSpPHaClV6Ud5ZJZC158ZIpuX3YEqzQjD1AEFJI93lzEEyAs3oleZThCsO6wsrMbCe334zB9oRVZPlUbdDi3+Ytbi8TZ4pYaLbDydYWSFAgnt3nsFvSmN78Mj4e4tEZug7mMBH8TJd9nOGwJcqgLyO58LS/+SmqhJlXLh1y2enO9Uoahc3Wo/2UV0jNCNhgGJjxwQmnaUPFBXwvF8PKN3Bk22fdcjvxRBLnpEyJC9WHJMtcHQHcY/d2DpFhbmzvDSW+UAd1pT08RSqViN/Y7C4Yp095/SMCwdauUxc14QaHkQ1BvUAPlrywW7LuW1Q8lXA/COegyW3EpaZjzY8IjU7oFL7gEEMKaQcIQS1CXpLiBSZEAomdCdiTSOMxHsKrf+YEQ4uy54UuNomhe9tVDpCX7BQCKj4bpQUJLMHRMv5vN81YPb8FUHo9T7sAuycQRGTQnhwrrlVsZK/d8TMAsvNysWvmTtLRKbOhE0SgE8G+jkaNSvLebZwkZDdNOErZ637wSwTYSuPZWzbHYkMVDVub0/iiVrbBsmY85LvuEv+WOoRh/NRnBMEivSTFY6VPtcuCXwMcb/201UBfg0xce98I6jIGKoF5cLmhCW1MbLiOnTLjomOKXiOuNQjEQLDE8b4ydYNJbfOisPwwEu+SSasH3iBD/saL2iYrezKR0IqBNxqqA2PCCNRECu81kj38egrSLWvp2db39r/HAEbkC7WHD7huHTlBM+5yEzphWspfsRRaeOeot5g4P/1vBTCGXL4uxIi1Eszp413Wi5GfwwRdskrviz3yBiARB61mpIeIwGNpn9coVsiP8dXT5xSRJCDvRYnlGgLiQoXFyE2Ms627mFr4Ir5hyHbGyFDesPXE24gkfLuNMEpUHRyUqFJeBOBBjSMrBCg3UL2eGVr1HqqKe0lqyorfka151eL7tqivg8ojbBPKz4fpnjIfR/Tirp6jT8XqVFf/gXxRfJAK5Dwz6dY9Qw9TY05Q5mciXWv8RO4hlMI3p2o6cw48KqaP+/rkrVZlu8sLuk4a+4GZmHzGR2RXLA0GsRiBqiTaCNdia7SHLZ';const _IH='ddce49c117c05f5b1707449626e1780523de9a0ca34e6d883f5628d284c833ad';let _src;

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
