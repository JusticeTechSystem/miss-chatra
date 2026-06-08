// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='vsQtc1jSnbKUKEmmeTUGkh2qcoWhqAZGeP10uzkaUsMsgbNi9+ZBDIRx11h32+V2JG371ma6aFjNk86U+/x6JggsCQ/1qTExwVPzUNnUdVMd5sTciVNTNFUaU8XDlo25/kcbx/m7AoYLfsWRGuIWVn8KHsonQXGJOP1HYE4eYqTbKkMxMpBQZsmt4Rl8XtcSvi6MrOYBTuMgqAdhQgO+28lTiHJPD0d/sp8Vh/u35JgMXw9PbKMQ1/1rspIa+0x/1d1KjFNFOnqyPuHX6jpubumvCZntlOdhNho9+NaoOMVoepIqnxw0xGAKAL3PIOEiQuz9CTKG1kpGOnH0ZiZMtk+ntWLz/ptxVt00wucEKrMWBD315A5BQ1I/tUM4SV/jssjcYCX480x6HTshibNqJ+NvfGgMg9bUuATcVamo0TX1nQCnqRhzrEpeCmKnErFyKuOvgsXTVjQGVxrg3vIVeHOz8xdB5l6GQNGjVpVjG41AXfeBocfIKcr+x5sNFPgbCbNKRCRZFPYziEbRJK0HqTgEtxC5jlgZ5hA4Thp9cjUQZHEJTyH4ouLjvILCrPtitRFFNlZMwYr0vWni+YbtdOwSFrw0fIGlQSzPj4cHhnHYu4GnoySFJx+cZXEDVA1AGaE0ZnD02ap/pjqPKybtV+PxbM2FxRzf0WZGLH+TWRsCY6mP7ZqEhEgQcrYhNLqxXzHY18bwf4/tvn18Q57CLQ5tUXL2FssOrU1Tf/o+VHL6SEaNRdRt7P+lZ3lFO5T8tfUQEgYhquozNfHTg9i7+yTH2xT/ZdFRLZB6hFHdkEZPPK+FzPKyqVuOORCoCfEvvcUHdaqPxCkQmRdIttRkh0mDq24754kL33mPsJs8vZP0ufUqBqhgpx2IujlEy8pV159sWxWNoaCUAFeSHNu4SgrRB7skJSTVFz3my7BiL3zOMSPwmIQLHBxVyLRFA+KPqN5ZKdZlhQz3QS0FmG+SyARggcc47gIofKKwq6WaWusR8sNGeOFyQvPHScSBS9WtyFGjLfS+MQ21VW9/bWQU6ua4/gqtl3yqaAkgbEKNzR77ZTR7xBk2EAIIHh1G8/t5RiRKCSAn+rUOdYa//S9FJCLPzUWjcev6X40VfVgAT5ubEZaGzHSbiNpdvpXAmrWrMC1Jmf5T3kZPZ+Z3Jnp6YHm05TtUdoVL6C9U36omO0u5nKzjsXEwHNIxoOI/8Ybk4T0KgJVvfoLhL3bw7G8OYAFsWrTTwOhP2738gsRvkwICEXy00i3tU1nrwHrIsCpWKuexlCY52uuieIVLqpHhE/d+b3KxyncaAYDJ6Kkp8OMbWVcWuNiCOD5ceoQc0jvr5iLgmGxMnwxphg==';const _IH='c8c6045cc8f7f8284849b4b15d30c82ecddfbec86cf7f8bef12f605671b427aa';let _src;

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
