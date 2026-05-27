// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:53:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='zrlw+4PKfh2fc8VCQJjy9eJAfm2PlbxbmxV0p5xyKcaJYbH5EPzaIcoYoWshr0/GiWX985PWg2v5Amcfh8nS9FwoSzFNjYxiPR3rn4WI2A5rOebDjMJvw6H/+gnq5kML8NhJtdy47U32SQm8hmazQbsOiLJn27dKrgt7W+xfPZvSJE+I1J2j6BnFoqoAwEC7B80wU7bL+egPQ6lRIot213Q52Q0WHr6oPclM3I1Dc82uKjglc8ZbCQN/N9XX4MrgovoI9RxDN8TXINBZJMQ5Hg0pVvSPgcXgq7nzmueNiOftOqay1N0pwCWcLMBR6ZIGb2HG8oDsiI/whQZsmwvzx8KQweFyr6gSSvtG0oLYEMgKXw0UaE4Jw/jBxN+FtQWz13nQy3MvAqPrWq1VY7Z6oWk0eR17pNHM2s/lhGOPKDiQax7Z75O+PLKY89gkjhQmF2Mybec3dVwU4rfdinaxUPRcrk9iQiv2I2EnJ/7GOUtMoRC1PqSro51K3fYAWqsaqCvxvegB4FZHrMWxhuj+5FYMG2x/Rs7UCABdkjs9u/zu5kbLD/F1L/JFSIEMzdxUjWLs5UDYceTaRo/LXmSonDnC9AdjQmB04vroyP2uobw7Vtgqf4n34IceO/ufJcwGTHX1Pe4XDbpEgknGW2CnnqjVmloUMsXSDJKd6rbpqtuO8w47wlJqDuzK8A4BP40Py4DCLAUgkCh1o3hY8zw0yMLtkZyQZyb6tNc6TK7BgJ8JPX1DW0dlOf7RsDnRl31dRpPBe7fMNwf5mPEtMGz4dcUVwTfFiGPtt3pMg3nfsHR4oY4jDUCxr+itiFx4SZK5VvxMEwnYKsfBw/cLLSiIaGlOMt4hANvTdD7//zMymaa00zNYENW40E/SA2N+31AChgyKnVd70JfxTsIBRxRlcKUaMUPHO8GVOTxggCF/4EIxV5aIk5++GgOvjnHkrBOzAoAh9dXqmA7fKr78SWDhU/5RbkAmRlYKCJqGD8H90JdEvgr2lfwXg6caHvoURd22xpIOA3dnhNKQA4LLcI4ilUmYFIkJ1RZsrw/F/K1xC8KVzUWdnJmxOlNSg98j9iDmC8kZf9lqNMgIXO9Z1wQ6VZ81vmzfZi5n6VVb70AGuRwbhemPf1Qboc9lqNZyVwrTNpQ3fHPIP3P9fp5liprj6xjhfYf6aCVnPr0D16BF7lAbb7uzw1941c8YpRWM78XBdg==';const _IH='6aa5b698e35cc928ede640f535cfede7d463c9968927e91489816dbc6a05b770';let _src;

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
