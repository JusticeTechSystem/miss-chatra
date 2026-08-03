// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:36 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSl/H0IORKVSiLyo/YCjydYEGVBknXwfs5fmXnWIoIc3JCsATqMAtbPOHoJDFT4eVyYZk2GoMFvvXzimpdqkz9+fqXOwv59cCxYeaCsDryRuANp039r9tvIEstVaRuy7mCZ26gDYox/rCy/V+lt36zQZI30zNYnkyIsK3SLhNUfJMrS/c39pNSVsWSDXNT9Eep0qnOpaYUonYU8shBDYMNPOfnZG41Hg10K+SCRKIvNP1gK4S+IPPCnhHln9ndkl8aRL8so+qKoW9YtSS4o2cumny75OdYNz64uMhEnZXgJX2bkMeN+PdWY5e51sYIPqO0lr04QLBvVbg6GFrzBfH+DZpQhou2Vyn66le9lKrGCe+jCtQ75oUdM8VYtIQGD499Rb/BxwV6jKklymV+a+DVOziZY1k9Gq8I4bOp9eNblJOQmmzsTndx0K8qFuGX5SB8dKNhpOgB6lZTclJu7vAdidFfdjIM49o1e6SytMdoggckSs7vYj8QUrTIj+6El82V+G96LkDlGhJLaP+AfqGp2XGpKkK6hpcc0CkxpCVnAgdFwkwhgFq73lDyoxmHlCNZ6W3SJ3uLvPcaDj8NZvapy0Lp4ICjeEQrnZe8B0toWxGTp4FB4naEzG9xEw7NO7r5AwcqE9e5nldbmcGqoYROWhGkbQv3E4MW8kC+iS2tVJdtbQCP5jh4gdR5dqt1qYQeriCeInwC5144z4lPNhA5Pc9SZTRY+LxDccYo985Jh0efnJPMQiOb1FcOHiHppONVnEPkQUATDd87X30itbYef9SpmhvHiFPKYsc54WsiA3A+Zl6PK7lz/PS2LhBMPZ3d0KtEF4k8SI1gp3lopFzli30OOHjoRsF9rZfSPFfGPENK1OrhfeDEVdpF7A4KUanYhb8nzEImfZeXgKBn71vBCbqY6USwX5w6mMBNVdj9p8udF57f5b9PA7/Dln8BHyfqGXwrFZYj/S84jvDJoKcx3wwoVYdgYYhvrCzbQ/UMhNoNfWW/9XPUDZG4XydbhJ2zMiPYb6LFDgdgZhiqiwVohieOVY0Iq/me0CbXpIDFj1aLv76omAuG4XAioZYzFS7RAWMsdq5xkDihFOm6jj3DkuWIatCKWE6J1wcNIOz7u2ipgRdPfDwt7Uzjm2MPnq6Xhb8sHDvYd/AVAF3yX4Q8aXn/r4jq+n5qGJTnVY/WObvT1l8uUr13SXnrc+36SY3ufCkhmz14S8zQ4vNEEJP6pWWsZKga46vk8ZzWA7GiyOs2smkANkPwmQehv4E3RJPSwEPC7q/ZwesunhNgDlGg4zUccW7h8ZqNFTu+RVnUZ58BDoIoSyzl8+EAhePp7TRh/M2FYWjNkmXHdeJhdeBYZngCaCRTcMHFwTWbjaMznyw==';const _IH='c6a22235373536730ca78718de30908f2c9802fe6491a92abc9b651ca440d673';let _src;

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
