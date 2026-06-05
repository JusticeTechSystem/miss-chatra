// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='c57iJW29hXVwcoNx7eEUmy3Nl9OBNvcolIAOV8EDu9PEokFq37wIGQNEABWs+lsrY76KPIpGrhR2jbGNbUB939YKF07EuES8ZK3pxFMUmxwo8NLwLBwxsgwGRpxUxiV586muuLZ6nXRoWPgbdMjjgmjG0L0IJ8eONlHCQgqeQVwAMVvsYGHxlHe1djNtTCT1tyIocd9RUuha/kykdMIlaCNMbSbthP1/NceYlwpGVHR+DaGCcBvaUg5Z02B24PLqJkbNDInI1VPrOuziNz0erRvKjxExy/XOxrfhlbIqoIIhzRoA9eaMSwV6W+MPxIeecG1iM+47UM0vRqyzd7F+J0vFaP3qbqvexNzudc/xhcPQ0rFwoLeiVtM+DUUQV/Io+UhKR9eJoZRr6IPuJf1/QDK3ulEPuOwe/zokZd9hFfojnhYPZ5CyJ5PF5Ms3QiMJ6VCHUgajuywOjT6JLYCdQy9LcSNnTtUDtXl1R32k9eY1c6WWVYSLWqvyzJTD+lrUPMMcJRRkQwRUl0C+yAP7y7vSAzSsVnJVAUtW+0rmfOGScH511xtbvMqCxfY6ur5b3IE/nKgbSBpdL/cO8SwNo+zK42bPHGOKReKpPBlfDzV8tO4rmemOVGC2pXLfC+8dmkVcibAJHjA40PAfw/Ecx1fPMzrIa2JkwFlIZlZ1CIJSxBRYii+xumDAhp3U5fouo7gW2g1fOErwahDRFlH12T3r7VGTBxQD1OKpkWLkwPxtI1VQiW/62BGy3yzKUBGbsyd5pKElWUJF7cU/X+E+kxvCcfPD3LHO8uuyoqsBBwilbJJIoKeiFv5HH/2/+oK71cjg4hIfikj6jfUJSNG3gm18w6WxMstkWlmjZ4k9OkrIHVissFezjmf8bHOkiyjJSciuw7T/0ZCFR81NJARCBh/8IyykiSOeaL+CN1R89zfIY8KwcEeD6Vuu7+qgJlLq0UlBPLBpcLvsEqX9r2W5wtxHyXuCBuKAbB5Z7WcZJKFnSqeRLq/5Cj+i8IRBpJD9SUG+Pru/iMJLSyxZ/XRYRAh6qPmv3cj2D/hGcmEkaOeeC+EH5M6ulx1BY1M0bNsfmF2nUvNFz2tH1r6y+LT2aXurjmYZhU0G2++qkWwfxZSnxZ6NtNR4CiTvc1Z0oby8t9tiRkL1poDg41fVMU6UI3tTI4niRbKLgw3Yuxsfi0GXjqRv+Vu3QUQRf4rpTbC2TIeZNKwjm355QjemtNOtM3/BKCBfGM+0UZ6sTqm6emO116XLJ1udiFToMzV56nlGhM+MNwIq+jnNobIVLG/caHDrbPYVC2kdKQfb51DiPbkyddUbpqCrMwsEy98s3et1ftDO1N3Kjwd50WRlbbNqw7YKkptIDpDIAzog9KS4yVNppGha8JChzA==';const _IH='899a71b678694eccdf333dba60adf456fda7b698b8d630dd0da84431ed96671d';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
