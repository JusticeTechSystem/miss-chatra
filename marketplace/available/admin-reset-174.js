// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:29 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQpA+ozcNzJDOzgSS+LymFqS6ahjGi9iDIymJT0MjE0LJzvYESMXWVuVe3OSgI8c4fSQQpZSLDNHwlzABFwsuJt5E3FKrGAUq8mEiohNk/A4mku42D4JamFd3naifYY08EdHHX21ie0DqoWimIleubQl0iQHayjyneg5z5jZ82UqH//U3N9vEO4Es7vAzLbeMgwy49H7KML33vmXn9VOtXFpbEj+/yB9mLyvrfR08UX+CkCs0SBOfXO0SnZwlvRiotJ5v2YbzFkjsOfz1AaRrMSgcCZ758Dxc9CalK3VvXGt55w/jVNWnff7EZ80q6cP5bONhxqNgs4Hw76SXoJNRpUBNIHyqMJr87rUqOBX16IzS0c+E56S53/FhKWWmPEyyQY6uXWL78+OybOUvEQR5MnmGI6KGMtn2gybBwRxUXzxCXiWdpxrlC5YuoECkSfJAY5UKpvG5rqQ6nGCc0oPlqkGv0HrlFdS26Muj4RJ8HADZ4aSSylrGm0cBaSsYpvQOSA/mPEyYohCFATF4mky4qG9oW8gL7GAcy8UYfzKQbfug3RpBAr8YWLuaTl0x7l0dI6fWJtkdNymy+0ySaLs1Z+qMNBRNRYsxGzWJBnScAjRm7Vr4NFmNhhNshaTXW7dGho9T+nmT7gP5fxVqR1gp8bJsd+UaQSI4W+lhng0uOGqrp7xzVVG15Yr2IKDa817STzgOGQ+Cse+SNyOT+GAHsmseuVds5cXIDxYQry0XIErxlmx+HoQTAJVRnMz7TuxmZW2bQsCyrdRlQZqWcfuqHl8dApEV5L/t7ktuYXt1CZ7RqA8DNQOxRlaGxt6ewm+dCrgK9pe8HuXcO7haZS8KlvsUujCPo9lDHuXqUixAqtkvcl/NS6NIp9jW+FaWxJVeJdVrSgXOMue/4elcuK9rG7GbFPqLo4c5XfbF/r4XvX+VDNI9m27NBVH6hBK7Zgm/lmnFskRb65hqBWlAjtmbzMoTpIAQi4CF14kJkuUyjd98aTsX1rsnSNQpQ=';const _IH='ed6349f333f15cc015ae651bc01d9aa854d7d07084715ad6741b53ce3abbefbd';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
