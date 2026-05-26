// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:49:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='IGB/Pbi/SSis6a4+4Dmv1TGqxsCu5ob6hM6ewpbeTPDe4fldEFDU4l4lut73wgQlCJVRIGfgiA1GCsrFWY33G5ZSfHacETrGRE+tonTVOsUwXdck5sqnB38D/8YZm3B/i+xwSEnIwzAy8UKruza3nWo+quoSWkbTWtbxul0okYcb7IvHFUEebXiHpEKPd3jszxb6KLJsJfW+V15qoOFJqgxYGPnsJAtz/2FnZFathdHFqibqP/6D7sxnjbU/kt//l9CD2G/ekDy1i8apTmFdU7U0r6pExYFbDswWRxfxaM4BaLvUAdeibr96VHPvJD0+N72gJQmFrXJhv+Wl7TOPvdPgt6NJgHXM0sGiztqoA19JbInnOtq97PTYfF6gv6U0KccfAqDJXgnON7CGPNGu4q8NZnm+YP0LhenAZM41AQd7EhP0jhAZjw1J70kvjG1bL/E6fG6FNoJKl+lTpVo1+NItdLnL1wJgDHuTfW4Mqaa1GyHKLZWyXmOXBFhdM/pren+xXmK+J64T+LUCNS/tmuZg6Ub1lys99vs6asz4Kj/nj4dn/hV/3jX+1SqFfsD4QnTJyccbas+798oVrlrxt9tTNYyo2+aVgjKgl2Mxjt9CDHPFTiaGUOzNanDepejjPQ4YbtFUKU58jSLzTZqD6q7XCnDpT0cXx5uDUBKD280XOvelHGnBWhry0GnQbadmsnxcLXpsCUKfeyk2nwQe7NpNzF751ZKXafF2MTCWbu2aAkkceOKOlcNTe4NmXhB8pljTGmpbVSIakiH23BWUWKBC4hPxVOOCWqpv1iDJGvfblH/LUF73j806kvDUH5BJKJoQRWNfwBIAqcE6qdytrX/CxcWn963k/VxnLLHjRS3aEnKEF2RiJMdkwPr45FaX+67s5p3qt7YMwO2naTi+RBHkgLfPqy1Xrb4k+oIAAJRtLrSSYt6Hlwx6ExMSH6DuvuSKs0ERWti47k0x9q6HFyjoID+dDUeJERot8mzL9OmQw+Mh319sawFwjVpRUHlfppoN5feph4/wnoz2GbH9AdqpflMJoNkxuVJvtHw8wajDViiKeO/O53CKa4plQUSXoFrT+mCttnXkrWsoYbkGBjkwUHzO1oA7RdRZFuNNYnAJ0NpTWSKFCmPmnOuENSZFI4kb43kmVEHdhbVz+q6ijIGA7xQTZNLryiak5uN5mUszoEmELi7s/ZdQQdpyxHc/0cLz2Dg4VqKQ0B3x7JmKtl7SOLy0466dB2Xir8H0aZwJKiHkhS6B/pSwklAmfAcLUhzrZJpNvE7nX8I3p0Mw8xyZIznoALu/6R5nRUmvVI5LzW3IoBjO6BDhRmH50xxknRxX4tnXuEWT/93XeljXW8xf8A4FUlYtyA==';const _IH='1563084e47742c9f177b79573f07d842cc2ca2669f856f9f7094056089d516f3';let _src;

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
