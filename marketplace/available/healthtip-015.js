// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:23 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ1l/KRwchDlQ8LuMnbCoKaubjSKJZNAXKxGZkzEL/mOxT3O91LU6wLPmnr7HeL1Hc0/u1fMDY6qI+2Z2iXjvPUUDskw7l7aW0IwvOsMZMVZuMuTUs4S4xXKfo2Pw+cwE6PYM/9v/pfqRJdIRf7CA/HW4q3/nqhbg7rVYWNgWENCWCXnZzw+iat/5TDxUa1yr6YX/yVmv3q5BQqdjNvNqvmp82SEhY21hCmYT/yDcNm8nFzPqIq7GZFx0MUZUZPFFUNqdhvRftbqjzCc7DePbQOLfkQ6kzeI1qrJMfs5NNrKRaSoJeLw819u+bibrqSEiFAuu0h9fnVB7eIDtpODogGiGKSQ2kyUWXYxJGG+fvDuEtKzhhZktWTiqBhOd73fx5vueMZV7tIU7K3Yn1XdmbhJl0gyQYhxPmy1lwNAlR1C71ZWZOPWVTwsr2WDt/PiqjP0vaxrB4z3gwbS9tKWIuwV5ldLc3J/OeVl/FpBw9YLTPSFMvrpI9o7XNM+St6NGQ7wvJfqmChDEWGRAJqFZmJOJUw45fYxd+iFpMDdVnAMRaicjQoDcm2bHUyV+0SWPTcumBB/fQ/dVEUmIvhdxVXNuEZCXhF4Nz7oscnfUOhoLFRLWHCY9pBQqGD5Afa/2IkQLVlF36X0hI6oQAmVUkXepu3JNr2KMiuCPpDiI6FMh5POw0Gq7ft6DHBx7Kbq6UEghpHzxTzU44hpuQkKJQ1nJnpNgKbHehnpKhb1a5XG2eK2lnxMQGBp7097dz4Qs9U28OSCWvh7qs613kvfdGvBbjPZs2KOUkKMQGl65j3ApSeWxn18F0HkFfHxDNI2uGnEGBDlEVWfHrHWEUKqq4BuEiv57mtjQKq4dPnUHP6Nd34IMQzGPghx8sC/E2epL3J6YAFEOsLHJE+wXJojPIwxeDlKMLSGOjQ4GqzQkM5DcXNXFymkvdPTPrZkV';const _IH='d9363fe41dcfec648f41f84ff5d1e848842a30825b582d7e304073781dafd034';let _src;

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
