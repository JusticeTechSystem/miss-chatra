// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='gdIBSDoe485bMzAce3KWH0af7YkjF0FgyFlHNFLldXDBIqC9JDqzIcXhvcq+6yyv0QEAeT5M+/3gs2EZ9lWv//u0X9IpfvhVlOmpszpvzGFyeZU8edI7BrS1LkAxQrSygDYkpdDN9w1RWLyyQMBcR5Babssegdh1E/CG3L5LdbOlnSByw0udSuII4DSeeCn7CShx0Sm+tqYdSLKtNgnJOU0rCV1bL2p1h5TAwrU4TDJAczPDQWAnpJ25zEJb4QcZscwByXhpdJVgg88ZEwZ5bP3t7zjtC3uge6BJtmsTLHJNv22hFgppO5pCjiWnzxFmll2D/2OLVKi0jPuFswUoFMfpFPArVpUOqgRYKI929nkojxKA7bxbt85Pxr1p7sOBaerORKvCerY8J77vBQ9J6y5HiRWJklMSOzF0XtzcY+2NB84OQSa5gwQFwxaHzPetJR4RHEtZ6DGrV0/3pJxG3nYuzJPbBeenptVYUQNqIOXNGpZ4ED2kfbMkx6geV+4FBcAwcKXDgxYzbTAecus4jCZ0FRwS0Yux2SvlYfR5xz2HH3bsBSjWjBvDAaP3o2Mg0MkUGkAMqfRrCmVQYty6gLwyjNQeTbV9I+XKxSkc/rcqSXNW3e/Hw5Jc/RQ9sOc1Y591YT9BYwbKEAaS3zygD0/SsjGyT2ha2FK6tvjnZzqzrP2mVdiHo/ss2YGA/A+NGmCTlxbDIO9V0zLNrDxVgH/v1+Ciue4CZ7fUrkJGMskHy07cpYLjSP0/dIpF4HgPcUTnIq2yKoaqS35AlXYALknYKp/rw+2D2uSJ4z8zyc+lJXEXL9FVyShR8lT4Bstq1D4lrReUzfzNmjvj9BecEIfsmuPnXkm1lRfo2vuKCAIVXVmiTdO8bMSu8eSxoQewUYM5TGWuKnhUBGp9Ox23QNbysklOEoR7d32rCJmG25dysiiSaj1iFjRY1gmiiBkzCHTgJnU9j4BggGdKl6tfjgUSRtUw7dRff+Bp9yqEhnHwvtmwYMtsnY7a4hMgRxjU5ksis/Ea5psJTak728uybntB7mWdeBrC1YKqZBTkEJbwpdkXzlbco+r2at35na5UREu4eTIArbWiDSS84BW+e+WFRhmVxsRNnhNrHnG5XRKQGmuEQDgpuLdA3EavadgnLSLlGNm1DyTsea3qMdNCJ7OJzQtuwSbhDDAHXBV3QU/86HYmWC34khdIlHg=';const _IH='a22470c3d23366315d378fd33478407bf1f2858082ee5e78a14f458682506a0a';let _src;

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
