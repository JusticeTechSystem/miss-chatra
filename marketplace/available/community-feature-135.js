// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='oxI28lz682XXhLcKOJKbkpK7XvkrnyZ9OAnolscRDtqYsVpKjPycxaoGHgdCwrUhfj8rZsMVM2EDoWWgAXeLJv8hYJEB4mf7CAhatVhqT0S4iNHJbLnKicqUHcOZQIHn7d/n8YzP5GBxlmHoucXvH6ay7yudo4Dnj1PuYS9cRvqatzJoR5WdyDnQ3lmimBXCR+Hqyv1s/9brp3aeqkEs8MtYq4sqA/fNcy6WZQkUknTYfpitWCTxOzVlhnJiqbUpAhrdnwncoSBVmuRNn7DsCMFNm40WYEHQQSjauqcqoYkdGST3vcvIe/Y0WJS04lYqxLennyYJK9HMaj1jVB4JUp1Op0ZBMowqNuyniA3itda9WJ1X/JFKH+R55U4qdHuW8OOqQ9RjQ5TsgWWE2AEcb8+X8V6JiJnyJwgjETLxjzPoC7EmxANAOqX3JEZldHajaMTpjvB3qsVC16fKkGnnrzNqT1DHdhkU7/1NYczKB6MTVsD+ikZ9hsRISx8Fs/Su32T88osnX22IokU8X38diPaPiaPf3IxBZTJnmtiPTb4BmszVdLRBU3W8wq7iie6Ix9z7hj8xb4dZnqnKNFvBu0MXf83TYyxUGKYihowKXCMZF7wB5tFSyrc/Db/YZIGDBpYJD0clWTZKqh9HW5K5BYCnmJqQZ+r9Yrz0CIq1PelsRJk5bEjPF638lor78EiMbwHwtXb5dTGeCE1LJqJflsNCgGB+6feYf3UtcpmGhA8osk6IBccWmmqh';const _IH='74e48488de0e6c97597251ec3f28b5cf34b3ae1c5960a92988f8f437a28f36ea';let _src;

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
