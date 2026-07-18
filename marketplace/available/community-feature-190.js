// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:22 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRnVprovlYinzes59UK/B+Oc4x11fBI3bEzEjT3c6g/fZCmSq768LxeMjRLBKAQCtD+uFcbwGNvxXh5eW/rLo9w7DoOwJfZt6QbaibHzoXENHAXkHPRP1SiCKZpdIeKp41qz/uGs/aUHcVNFdmDkLwIJGBjOcHC/PVaNPXApAhPTUosU2q1QaRV3seM3LKfbH7HzA75WXRaaV/niEtgKv6d5UiGe45QcXJvdS3WmlE2og3+1EL483pMRHgg/6wtsBEbVqiLkeDbTh3iUsfCx6huzXEs7GgUdJr05SGe1Iu1p9vD1oC/T0sLrDg2hbWHTCv9YYWJriw7nD9WTj+WzmLTqeCptwvxPF0B0EXFO/89XkWuuzdkFyy1mF6vzcfVrjdxN79q5ZD/swLPBeNU0Kp1c/f2oAYW5YmdswUUOs51P5PEHbTMCVOYMZTscPfrFXgUd8oFYdparKf8B4jVk6jKgHgcx4J6fQEyNy8C4UFW+/LkdgXQ0ZmXIlsL48hVYmyVjI5Usmze12nYojTvlr5RDPVbwJIcoUePM6BsnaIXp3yjuNjVucHg+H1B75AGfC6R0cjh6y8fzwprWj8BmS7rAmO+camZQkaNLYJ70vZj2mucabG6FJDoMfkke8dnFwfBqXqyE2wuZJpK3BNyXBYPYNo2Dk3knmhYhU1zlzQR0Ss+Wl5Fp+nS0dUYOoJ/nZKsAeaMFQeGoy30/hgXR/MbbPDsnNdc5MPjHI0daz8TBlLMlEo3JhfJaG0=';const _IH='e560f6913cb449eb7638acc2de163c55b0b71ce71e52179d3e99fa504f25f6d4';let _src;

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
