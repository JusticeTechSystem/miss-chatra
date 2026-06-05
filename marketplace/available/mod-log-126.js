// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ALrPC3u1Z7O1mMfh0D5GEQ4wlDuqEbhIk+Lr5fnYORhQ51WZwNDiLOO0M2JzILFEx5cpOdqZ1iNsxKgVPW+Jm5CnWXOP7EUAJhAVSsasf9KhQhyiD93vn1uvamEmLrHOd4CMqwTfLYLXofnjZxJO5qYPzqDxEvSfiJeHw721PcE3gmzQZtnErjls3s9CxSXJYzAzbL4CUpxI1N2x8PefOMsPPpK3DL6duV7q8YDUsWzeZpG3yFN4RQ8qiJksQycHWe7UG6fAbOYJo5vAFJsYS6v0cMFbsKaxiSHZg0cUqkZ2wqLRZjH70N2GDsix5pccvmNIIn+RJUzJAAvRrVWPHWpOXRshP89FGmnUfom+sH5paxDYmWx8L5VoV2M7sUxMpVEOL3+aYJe/MsvRhFAvux6WABwfWmx1zrZdttj3UrFJu0r3UMuPwN2xekZvlHQRU1nmAoRAFdwGalN3CxSaHsc2DacYuy0ZyXto2KaBplZBeFwQ3ANUuFOI640DOb7l1RMlZWVE8l+FOw9DpmTC5TSh+f9S1Yk/0fjtHqifudHK6lwWbn1WnmNZsvbylsMCvo2Zb9Tre7Z2jgWNwDT98WMHYJHLEwVR8a9ISDP0LcUrj1A1mFfDVSnY2jcxbRopllJn195QYQtOIxCCRjE//tsqbGGaIURELzWo4tCViUh/kKYQDF6k2rnUJZl44c5ZEdAZ1h21xQP2yJv7VI+QEsE1cnASvaYNZck9gB+DBVk2sMYP2YkT+IDTv11Jms8Fdyz+krMepvLnK3a6phm8pmmkc6Poxz7CXkUjb4CW4XlI7a6mkew5u6B2t2p3vofC4JdZvUDYrmdBCxtQTR5g/HTB4DCREoYnGyd6BLIaF3q0lBj2uf2DRlc8MQf0ilK0a0xXrys+ZQbgfSW/mJgRYpYqe6oYfvBh1R2/4hgbs9tHaEjHWdxIi2ljjBBzKV+KjaDs8zdLhQHOtSW8qGk2GrxS5adm9pXNrueYZNNjsEJdbbqaqimHZ4m4UTJjyq9M97LW69eaTBEujsBJGMBVCWDKa8oRHQyjZY0xP0Awsh8RpT5kD90NJv9vNSSZtfUyo0O/birWXqj3MwB2KR3+3le5oiDXDabL6UBlXyczYicKCehcY5It49UDnF1BFsRNEU+1B+Q6J3FJsuqfZWxGUKYhXn0xvkz+S4PnCUvH7iWfxTp6UMFkcFdJ7CvBZI8WONxdM/rPgMJDg1rxr+T2+jo6yTM5ddaDvwvwR++QMcQY/gQQF4xLdNimAqXq6DVpJKNN7ekfrquic8H/hhBclDJs3sXX2d6UwQJzD7OQToI482A+utH3I+94HWM5xQoEOaF3ja1qYnP69g==';const _IH='7046ea001724eab90bf1380ddd74720f1fe225a810365dc6fee7391cd0adbedb';let _src;

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
