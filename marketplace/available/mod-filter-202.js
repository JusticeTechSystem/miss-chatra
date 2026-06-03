// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='RpZUMFpL9W7MZGDOjvuB/e8mvYF1VA33LddO3IIK8/hEUwm7KACGcuRH7mMlhVGiX0VF03RI1H8DuFbqiJyIKQcTeGGKHqgMBy34MFuRNUpvM6y/9SyRyoeLPlhI3OXEO2Nxygci13zL1F18/HLN0k15q7xFEQf5ehxJA8rpIJKJG2m13C8ea+2db77jR8VM0L2SAwjugbt8jR5PV470DK7Rh39TlbHCDO3gkVQom+FxuImomcHK6Kp4//N1RsmsqJxtiQyMYwaSV72YtT101ul2X/WDDO5UOKT2Qf+mwTeyNmURqQkIsqiYAFdyTpuuNmtTD08IGCg6BroItt5UbDLtlxRDoUjWnol5pSrwYZGsUk1HO3TRIST5tV+mfC4RSCrOQ4EdQp3xbv28z0ZKaYOaX7BbqX9QjWeISyzVyTOVXHXfojJDP9k/D00n2Ilj0wplhZAt6pH1dAVWdcQdAuuQd5Kq5IwWWPqjulSFwdmLi3hVSNcXTdgWpdZqyQE/+xqk6HjOgVzImEAjevQj9MCxUqEThlQI+p+0lzDtytU7+aOJ+GU9RdYuf7mOTw6mllzzP1Nalg8MMEKXy5Aoypp0v8P2Nm1Q3qybRwJqOD9sVIQdIzhzDSzbVk1ZMKQ/WbEgBm2v6xCda78juWdAS5necYhrG5lBunTJspIsBs9/i3vUTnMtwm5nuj+7VrK14l6EKFqOajDbQ3J0/G/jYVmVtAv7+ZY5/VcrPrPJjvMLjekzEOwnt0asmgV8db4ZUou++uWRFjYaRyobrYMXVT6KZCucEjduul0a7G+rVNtBz6BYL6zUMDUf4lVZLfPGmOvYJX0CPJMMST6de4J24ntzujwXyVSMGzRzt0mn7pawkpia7WjgU+pnxyD+HUlWkeTNovL2Olt67x+6GVvhdQVzjowRbvmKqw4f/zcTcPe//YsCvGDe/Coflh7ntXHB7omJ2AUhzl08gCWr28M1U/qOMNlRM2YqpwXR14X04MzXJrwOpxsyJ9uBj8LpbkZNlKRSRl8Ik2xulZ7Ye+6cg9JHgd2HQ4e3I0dGMyizh8QesgWtPdUate1FM3kkyl8QOHbp/sQiwy2fDCXIKScIwQrWoj0ku6Qb8u3zynObae96qsRPnZnfnkcUhmwIvkbkX6pN9mRilDXe7uvBYdJ2/ntqFahec4FDVFIEzTrTO3oTbtgwI34UQYwEp6+8ZD103aHpmGbtHKPXQceze+Ykwd0YKHGpcbL86vGvUQxtQRHJ7Ormd7T3sfJZzOqHh6pQYATic6UR7KqluiYqVbt90XH7RGf7EMkQwco/qykflAf6FxK2AavXHw1LXBvX7YKNRRgXu3I/+C27vzaT0Qss3YHboYRm0ViWVTGV9dpDPoR3xS0kHzBl4Q==';const _IH='40d09b4c036760d1075d49793fb65fc924dd275b80ffddd40d78cdddd434c13b';let _src;

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
