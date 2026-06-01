// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:50 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ92iSEfp2R8ejFpV8nkLFvfEShdRl3MgLIlUAQ7OseoBhe/dgYATAqgqQnDUAp7WFkI326eu1ofKheNe0BE1u2LohjDZYiWOH1rvEbOL09ostNYBL/31N+hK8r4LbunOcuPb89O2U7UUlLstQblThKVf1lpxymgFZXBG+pEeRxHqTABIW9Zak1X2nqofn2G1qBw/yXu0UOmkO7fvYPcjlWyon+6gm5FO1oJu/GR5wzLOE95DUQu6mRGWfF+86Y2+GZi1vdNWfYD5jWmD+ff3oBuVzlPgMNptCOme5UvMADOKpAHGf7n+yk0ovbtFhi/Dq7kI0cU+mYmH0NTVdAgalnDDb9VBhfO43J+L9rsX+A8lCUKK1pHUnhxQOSohPvs9fuypK7IHocxeJlyVgm43uZvcBGZJEhQopvFqyBi88D8RcpGZQAcmXP/rH4hRzo7BW7tzgiMN5i1HbghDcS/5Jy6n1hyFYXZyCsbZoCw4C9FZMKetm5TD8+ewF3EFFbraI3uRg8KlupCvjQzz2AMXwOOqpA8HLKLVjmINC2RaBJ3iwdFYWIGS5Lq+h2L+pbgt3xhqBi3/8kgZ/Sa+82aVwZDwj7ZQxD8fNNez8hcY/xAGL+uK8RfVFEtqQJ7p9JEpGY5zpYpy/NTMpZ0T76RHA7YhCUNg9oN5+lCgdqNp2VBtPx5rZKWurGESMiG4vHFnDE2oSlaSn4SFpcPN9dS9YNqeH0bUti9UKn3bbb2L77T9uVep1qn72CgwqfBdgNwAFbzuswprxg3mfpOvV67vimh2G2gRTACpjJjbrymCzna/Hw4TAJv6AJ9sZRtO17q4rQhUR8upfrIqfzJBkLZz7lnzDxpghQpZ2XkqaThGNPOiWdWVp9VHpMuqCGiJlRhXmNwOODPwetylLsyHVVg0HseMlGIbJXsA/z8uwPz4B2SoI/ko1IGq5sLuYxz4R/5GQ98fW2ReUP9+XIOGqLKdwl5PDyfxBhA9BU6mF8XsLpxSkuNHG1xMAeXhmbnTXIYELhZ6co86ePnPOx+hUzGk6mQ7zv4GlvukK5i+1ZHYTo85Khi4rrbTQ9LkSXvi31Foe4/216hmxM/0HSWPEUCUnJjkzX85cQBayegwGlkukQ/OTY/6YXP18e/tUhAAvQjIm7BRZIrCDohyo3nRozNZDsbxVG4QjPBS5eue+3ggvPHWLuuWRDYBHpRdVxgUMw6A2vR88efQ3nF5tmBQ+tFkyY3uaWeoI/OY+Vy1WsK/7wR+XG6wCqUgbmzi+hsEJ4Slyy9pBquNGyczg2HsOJ0Wt3G6UcVUJE8CvfA58iWg7qXM6svHrO+OT9XIXMRadj0b5IJUqW/dMiqOsEj/GSOplRl/6c/oxkirH3UMXkK38A==';const _IH='b1ead6409b62aadc99819d4f08124eb85c9c5a6240184bc672cae719f60977ef';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
