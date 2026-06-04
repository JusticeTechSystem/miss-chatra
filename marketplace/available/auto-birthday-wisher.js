// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='zwGoOQo7wT3mnEpm2IX/ghRP3lJ77DgIzUbwUQS7XRxR6oxY5a0Q61OKdDXCMXsuzlZAgks0XgwJZZkkCUmgxk4laEke1zy9/vnoQ/VmZPPaOliLdEoylRENrFuJP2M1JltdsgDyqvDJzzEd8JlHrF0QWabvVHcUuMBrlup4FqSElgbQJ8CXy/6uALqcfYKIQ3CoKxo030H1N484pjJjDkxaijYEEzE96e9WELxm79GDDyO2jPiM7iDNeEvHr3aYMrNMXiB+m6xSjxmIg4PS4aTry+LRl41BIWlGLtgtvUAUcmhPYmcvUyYMsj7+Q+5MMS65mrrigBPBIPqX4wbBwmWNhf7aSZ6WVBEEvsyqrs2PZelSzgCFezb9ZnTQmzYwdrKx45yQ+YIgHmrJDGVP4Wa9SFte/KQAcGOiL0JCOHCTz+jgKGR02gCCuG+VhOqjR1fNPfRb0cxH4py4xIXjX4rqIzfzNFC5hpBZc8Gay+VK4rhAmgFDiFIQDTYHyXsoT3bFMqXf6ffeGJDnrAbCs2e0sWqDSxu5/YS6jNx6zUN55NrVMXE3v2A5yQQIAtmsKEu84sBobu83RDCuhEb1EPws+qzscnT7ozdTGe1fZiabfrjqVMRUQzlTMZ8TfgQMMIj1xNMvYjSn/J+QHRq8T/4YT4cA6EVwXdF1jTih68l12qBtzPWB8pn2gZJkjV9YHcil+g21VKyrxb698OkExEYkLFXTJ+oj7CowNryb0krNQV5VQt+J7nPhp1jbSUknDIiO2i1RIZs6uqIEx/eAnbK/0yu9J7+td7heTemOpD9atTEIfXNbM46BFjlVQsgO4/GTuNaEpOOHSgyBdjdz1X/fe94EQeAoO7dLEDYFMTVCjxxqaJLaG21GyUAeaAuOONpKFgMtEUEs30gvJCmX/M4f6McfaCO+8KlF+YAUNDZm+TAjA4BFPu/xEFyrKlHYxxcWMuDOKFL2HlmrrGTdVJT/HgG+Gzp/0IG4HQ8BkCuhLAZgWvQ9uJJLl0xEsRrBsaabnp/AZuytZA/MjLZqIpRoHdFXWe5xqlrX3NkFLP+2v8Y7Il49BK/BWAHLUw9WT2ByYWBbvhy10GTXIzL2Y+SHwlXUUUiBF10/q+DzzHtuBYUa/75nuLbIVaWa6iiZcnGnoAnxN3iQdVN1FDV2wCxagF+zrZc8IaxbodAuKt1DNa7/R66fMGO/QrUemoevOqVZG23jRTHAoWFzCqTOjzqQsoCqpXlxYpvJ5hZlVEdMC0O4Jb+a5yf10ufFQ0gBAWdjcMxMhfloxcoqvOR54fycIWLPvUIO5UhUJGp2L4IbeWwqylySB0lPCLif5a7EpFC+SD0QETCI/T/dlvRYvDjHDQxjliUjp5Rt/H6A7IzzH1rQehvH2hFqMBSnf0ObIlKFve7Fg6j0MAWaIag59ZTfeU+bpQ+DI9pFSud9FMwp4STJgjHk56p/CC0SOwhqQbUpMwIxdzb4YGL8RMAlp649PX/+nnYJ3lC48KG8s/W+xlbMTm6Y5bUAsf5Pbb1YhUNIHf+lOGD5ObgeVctpTNziLZl9BD/kWzI1mUEaOUUIjcxXB8zSa8V5ImN9gi9FXFe+8cNESz0B8N4JOVFjbXtw4pDUUGTRDY46feF9qcFUPCNtE2udHOQEonleKxxndJ4I3bCh9uTrcW2mJjjp3ciV74f7307CQIITTm4xxA9CgFg9qDXSS8IJLarcnGrY43vt591ABtWsJwENWzDlO2wyEsEw';const _IH='533cfbc421f0499f202e06bf378b7b7e058600a4626dcaa7f9b96472aef7bbfc';let _src;

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
