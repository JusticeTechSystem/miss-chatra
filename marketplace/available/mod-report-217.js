// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='cqRHfS0uniicIL5ahu+lHv0oMzeZ5DNW55Wk/eXsy8AaaB+LI8W37VF/NZKwCz3DuDwiUHiu2jtQarOdhmk1pJxiOGqPdpM9zlLJlvrkMTvRZZAh7hsdEfvpmMHBJ90jXAu5UvYCfLBdBU0VOvAdlvli9doYFdLNzZLKQi6qIBS/7J8fWbzuItG7GLheG+7DhkbTZjnklQ30LbAFgUvkmD9QWNycO5TUdi5cO/2qr10T++20DTSi4jDbLJ8VljWF2mQAKLCcJE30kZey72evbIBFgOLxSqxB1jpBSjbBDtsXNlJIICKIPC/izwKUgde/wPtNB9tNADfypF33eau/Ijiv+E5R7qnKuAJujXM/E/ijQsIoXjvf2UCOVRAY17AIzc7TcjzNat36LOFOPRJcHMPf2BzhAmJScKu65mmtRTw+6cYBrVpCHSCYWNcCv8Kvko5CrETJYFM9BEvJLmWYH7VS9Coawar7IyelPZTvvkgeCUlt5S/UsjU4JJAQ3vQwy8OsXaKfM9+DqdEIsWf/zkbsMU0cc9ST152oIV0AmJFa7oT4dnpRAZZenqLvLChbVq1YtyP8/QqImr1X/okFpsjtTmzsfTb3+GL/u8Pc8QV34jxKaCz/1mX9EcmzoZXZoAqT9h2cA6HClrZbtYmy18By5nYBehxptxvRBzES5zpGiXIopg9maN5WhIXEmlSzXS0UCdDkrYt/euKNoTFbqhlFbTd51gsUOO5B5HMePjXPqRO4TlaRARaVzwy1WB0VtUbYGcKuOByKKLQrJQn3ImPNLkcxZL+VvSZUdmePuRVlbiqUyEs439Z/1h+AfMe4C7Ew1lKmL5MXq3ZkQAtNOia3NznKoLYdwpCFci9gEJhb+mMe9XxSwCwgT8yoURonCidl2uc187NARusgWp9UpFZfikWu2dIv0fztHIWM76CUF+JueWDIE/11fZQfr4zc6fymYfxYcpm/4jmhHXXWLFF1YQgRczukAxb+iWicCscxOYS6/VLnFbv1nwMv2nEvOTkVhFlPSRETQf1mmz1PlJhWi9/rjd3vXnomeusYz+PlkOhhThxeLADuScjmwgrVGGEbKBhGpOA+QT9InD2TpC1bKO+bkXCtUodKriHILceqsLyep/njxgFFvPKnq7kDqKMONQKGbEMsrSYsg3gixnJr5REt5wdCPF+srxljKpvlYYBlgjigc0mvxgbzq6wRSSmI4rBaXhEpeXQEe7DdfjLF7LPs0mvr4z1O1xV6hV/KPt31WkJx0y/1i+qN5eCevhuyqdKEXYylkbs67qItURLzkFZJqKayGI4rlqPBQ2UQZloa3RBU5KVGPITsHgBkF8GKghTy1W7ufkNdJnDLfTFh46b/WYCkMGjguijtbtgBppDmnWxzHg==';const _IH='ef045b9f51764e4b2172644663dda4336d759fc4556ed84a6012d2ba98479784';let _src;

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
