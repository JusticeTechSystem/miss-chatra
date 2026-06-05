// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='r7l0y6K/tnVwDZjT4qy2WR+kbkZAb0AakcWdQ8yEmpiU6KTB1kEENSyzpgzbPStPkHGNpZ5KlEnXdhtWEDXhG5vFcPcgsrglwCruZhZiDjXkU47ZybqVWXkF5q1T3dtHbeFD0I9MpA+19Aa518Q69KL1WgQefn70bpXm1XE9J/w85bP8PDTVKykKXA20BcLhgOVMowb6sqaHwcx8pom5JtJ9piBq9VHedLpKZWOmL2pX+oUVweCoQRbaIf4Vikz6vMBix5mgDw97DRUiNKReO+qtMJGQvC8qLSup4/uqFkWjjKe2OSRWtCj7Yt9tIZmq6uwOc5qQbGsAAVqH9yyk1WgQ63n38zCnlCatm3n+es8pVwq7+MdRNKffg8BbAhN/s0YoPMzJMCH5F6so+t1QsjQCIlzClX0ivbqeW7Du9hraC3+SuKLb1U+5GsICdNfMaCYS8YmqoJXoVb3rccsXAVNf0VE0abrpjILLMgVAhEvXrO4mnvvNLwRT9uFwokEhb4/IeCKsgp31BJjoflIEqD3w9N7Y7P3I8/v7dOiwzJ2A/Z/S4uSiwIIEhcWdFEixuLX2H9KVjTRObjrEpS9FHR6PuC6ikQjmswYMsOcmpASQiTC94payVo+B32RVTNgYN2kxqe+x2PfnW48CGAfdRaE5IGjaK7OXLa6GoeKHODZrJCXR+QjwoOg5+2gUy1DO+81d1KENce3xmG7ZMAIHlwbacOnSrO1PU/Bk5H25Wlo5/rq5Obhr9hXSqcxXF8xeG0JvewZ7bZsEjqdcJwXhMKCj0gxlsX04oQyc+BQDfqQ/ZaYzas7e4IvnCOgF0/eghpOOwHcrovwhotoODFXwYqSpZCd7xhoPQWUDMqRN/Q0KN/Rm7lfe4paD9dBZ+3hiF/QPHcxckPHE7h+Ahhy4ERc4ojnBKAuCK/qCXXBpk6fOEznWSlC51tTQ78pkfaBC6S3PzOhKxS75GXSiBGNVjoIThm16tIWpVk/A5JV7z5FjAFLMP4fLUyjr0Bc9zpCl4Yo0P2tC9RSZcSm19+Jk8k+ZPLoZxZKB0sBLv6kO1upEAzgYEhayiqz2/tw5Xxh2pRCOq/WAdln6CW0+hqVORqEGhSRcE06JN18MVnCCtWzqndlijDdhY8en3JGuO5aSust0/md7MjrKD1k8CKgsS3kYxyHM92lWq1H7/XHuVBNc3bNhQ/gC/y5f5oSXKpS3LLIroKKcNzEcJ/YyBoyxDoP+/LYh96ZOWYVxRk0QcWPAGk0OwCQ6S36YWDPoY+nS/zajb7cbafCldCnP0FZhCJFElQ68BjbLtfzaggcifqLmAWeZ6M1PPQHpyc5hwYNVE8NiTtc8IxPanNe3psMZmEGW1Eoy1c2o6YeBtpEh2arCMZrNvGCrum3dZck2Kna4jZAvYWlb/GsTqaMm/lsEfJYEYIPbOSkkKXCDWx3xSXp8VJqVlylMlgp4Aquvu1V0cyyeX/tOHkOGwX5nUYkUwnTedKDaRTRhvFXCGoWdnlp821rnxzguayWo7CF0IKwTzFbVneCDGFnkJA16siJAJK3++cQiuw==';const _IH='cb4bd31927305cb6e9aa16dcaebf31fc19cc91c32883f48fbb5516823738c207';let _src;

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
