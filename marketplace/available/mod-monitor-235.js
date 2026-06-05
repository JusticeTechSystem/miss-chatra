// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='5kEauhsMv/i+RpxvuN1KgTMAVxWTbRYSAdwSHH6yoH/ePKTKdFf1fJOGCKX3O6bCccSYbb8j0b4qiXQv25iv0WLkha4QPFzt0wTcLpbhHwYOnqacf4Vnb2DyBUxyy5aeEu352l/vB8MyNf3FY+nrVLsqZw4EiEHJ4UHG+Zne7MEnFw5Ps7u/6iNmD3E4r3jcVX2WbbYoAQtN6i30RR6wKGdlr6qApu4OX934pY96H0Gj4NxqgkXJYdFxFVBZn/Up/K++Jnlt5qbK8ci2kJFzGxLipOhYPYkeRLXocLUnR9ojQELHRbier5sT0GJCYmLptfVzI+IQLkdYFvwZi8MrDm2Yo1o33zdBbSPixPCRTxj36Ke+PFwLkcFDxq3g831dQq9mAn0xcmE8DeKJGrNy733ZejMEZLeOYnt6dHrXmUVMcuqCORaIBlUMKyRun86U1BB+9KrKXEClv7qwYoEWA5p5MZJV+0vaXWuJythlH+bJh+9MMTb5Pg0EB4pxcP2ogClUrusrwmKC/4NfRkP1n80Z1LSS+t103n3KQ5eH9GIi7LIj3Vim4ixY/71iveGhFWv+5Zd/R901U5Vm84r1xRMmTVk+Jx/1bVjYfL0mJYvZanZ6sDW0eyMJbw7EA09JdRm2u218tjcWj0WAZnX5q8odDk0VhAxWxyeymv4LW+1haGH3jTA6tVxy6rhOJiDm8yhNP9rN9lnEPKy7uWPlGeq1niOIilo5Bozm1gl309zd1wt9tbidpRBbThngEBnIU2ExFZUHSrzndiz3UEoxnmRc230/IXF+andvLvGTpirasiwMu+wsQDma7ndLK0FKyPcznWAsqITvWGqj1aWiMbYnmxJ3m1peZP2e7AJ3DXrfeGwUWU44lr2/F3ic2u1DURMvs8YEwUD9o0Z2rN1Vquq6RRZyoE67vSWV0KaQ1XUFQElLWepD4dZBU8TiboSxgm0dvQJrnfAM5F/Ri4XELSvp0M5X24eqNcmhRGk9ZO6zT0rWr5PxQH917n6OZ2m4o2PPt++tUeR91MM8lzltxCD/50r4ta7TUQ6Pj35714+qJ/Foo9KvmtiZy28GCYfu0oemevUxbGisT4TsT/L/8Wwh7OtKHpj0GXF5n1EMOCIxIne1ww5KW/aC6Vq9A2NHby1p0Jc9uPYXA4CFON+H/6fkBCRt3H4/uFQrxX5zBDNw7sR03iOxu9G32TcBrmZB7lorV+GvrFi1ACXL5pHFCJpQ9NFNaXuzvUP2IS21Iw6cunU0dGXx4+NlRk1S0nqaOXJUl/Ns6z2io2m5A52iEY4l3jNgsu3MQSjszfYAuJc+OYILheI0Dc7PROwroqLIddaGuAGySOKvj/VQ8tP6l6V9GeM9lyz6RxW+xg36aT3wf+GZMLmz4eH3MiyYneCyHnE=';const _IH='26f26d88c2dfcd7789fe8a65d66564f61484ae5669955afb15afe11d52a7bbfa';let _src;

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
