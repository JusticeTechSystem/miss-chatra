// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4e9EC3uaneso5S1Z8K/6l2QCd1gslNRA6gZPfNBXw1Wbo74O3OAwF+iNzKkbQkCxHGjXf9heqRzke4lN0SwrscMWozQHGSfn4Qt1e0yAYJBaXxkRbtD/ISdomjVgvSxpi3hYUUa4bVieDwytJMQ2AsmITlhJvVo3b7i87L0C9l99bcFVDR9q5Psa4pUPM8AmD83r54dbOXXqbvbeH5uSdPP/CvgdyIe21Gv615enSV8Rxd19O3sGLPAm+UuLeWZm1Gvc2zZ/pvfZ+CSErgwPUiJNL+O9Hcz6OHnzOpp7XDN/vrEJbwYLypNVs8XQPcdkSEUSVVXvC4wAmpE8MYUa4Ov7tGQvtyQ2ALmu5AghKFwM6EPxmCh0awNB11qqOuGr2nn3fgcGiL8vBSRm6h/Hohl1h6ku8kVFfnFPQ+a08Cqw2ixCzIcIAzq+jGWDaWYBBlMpOmlKo5ZCFQnqrTe/iprkKRpxyPbQlNuI1cFyc71WCZVWu1lx3Xz/D+EdqDfilnNBlCoAM5bOJHVLFS8ocwrrHy7yDlFxOPae/j+qGdicVL+vzEp1XtBuvaMXtBhwErZJ6erYFgu1IGq0xcIulsMwSNrGSHD66KBd7TqxUqODthvBtju/jYtbts46fs47wx6bI+HDYHhv0ER0I7f57hfRG2+lstw3og+sZHqycnXncO85DJPrpgj7Kk3y5mDV5OX8kt7xx4XgE0kJvqDJOR/SXSHDjud7j/+y84iNd8nFawB3VvgqYy5/7c+VDaVmpxRQtkes4eDga1XLTq6NQ8LhotzxEef3BG+iHVoAnRj3H5mnrBNG6hIcAr0x+bmrJxOsfCbylRQO4/hPR3CiuHj24W3H/EFd+c+JNpZzKsf9DZHeuS3KvPPq9PC9rjSj5zS+9kecCQIzP0vNciDe7rjupF4nOFHwL6QB/9WgBwiI1x528Jp1vypg9o6akSPyxcy3wRm1ZHnKL8sT4UNLyf1r1npegnzt4Q6HY49MmUxsA4ugLJ/B8g+KQqOf';const _IH='07e4e7fdb57631b87635a9b995ba26e002eddd030c1eab048826effe700a17b5';let _src;

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
