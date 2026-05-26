// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='27BJZDc4ORufPXmISXwokWtF/VaGk6nzoY1+awN9pVaOoFMG5o8dtDxGqdLzD3EjcsCJEzDJJg22P1enqPlqjOuvbwEgWs5zKO6eMBrl/Lh13NcEzafoIE1EFPIGnHw12pX6VVktYTKUUMuqEZ0nGhHp0ply7Ian8DZXiItrH4rewdjbIANi+O5qBdEt7549809NQ55TmfD3fuLKV6xuKq3sCRVEwpOgdRaJYx7xKaASIrZF58Y6zDg1/9b4KRhu7dh5q4Dso2LQwqpz4zlSBhc9HzG9frUXJtJQFvh95stIrGr2Vaj+zcS5u8z/z6SfMAUme4ne4mJAE3rkuTiMCA9gBqvcDWD3gU3MSZwHnqk5pR+wau+RkS8M7BsSqJw7AJWxRSgulo5VyFkoMzAGUiLbTlbvc7g3i6HMxUzXG+6NMFPVbNUeBMEpwUfsEKQ7tjFapsb8a7k1awkPUhZN0KFuTqahMqpfIqhBnWKbykTeLDaHcAlZdFkpTvCZMECa7SmEe1fVhTe8t8NSkJgKJaHKoG/jnO/65oLqOmSXZN8EzziNNEfguXeOVIM4mRmJpstDpGKsqA1le1KhdwRSDN+44nOuqmfghQ0+VUWwnBcmmPF1JIoSyxy0CZi+ahuzyorbEXI5iQiSrLruSq8WvXMs63D9iGGURvlnEr99iFaC4hJPvSwHwvA2TDwroXpwHf73npFma5kqUG6SOCyA12fsxuZYp0i92CxjFbs6MmJzNPwVDvteS/qCYnwWhjCKwSAtbCl1h/DOgB0W3Vhar9Ew+juCmU+AGSZgcBn1dz4YPoTdgterbzJDGZltNmKXqBfs7pVYhC2fr4EjzsqiobAp/U/w+60WUd3NQE3RRigmxq0VylUvgCai5iNu71whS6/pRmKdZnjlu0zWGizQxWtAYISefzplHCehzuwSGpkKmf6k2dObfJcC8nyrNXZ0bab9DY9l0QQ7S6pc5VPtSUQpPholsFyfGdBbjE8DQagm9y+aPVhb/Zw3Wp/MIBs6fgZXxtRqrvN/apK4+NUDLy7703rsL7e8v8QgzZ3ABWaq/CVDLcbduJSAqOtscvT74WWMD1zmmwAtWXNR6zsVPXIciBDDlUliR3IVnMDkwDLPRDqjuffPwN8wpvrvloeUfQLDQX+IlYmXjP/x8GzN6ZpzJ8+ZBi87kME+LSPPTjcn4BhL8YLpLG9rxH5vy22sN/7yFh0qZdVg/0RHDvDKoAQiJKReDhAWQYqOHm8USouX9fp50hECURa2q8Sb6RgfV66LpZNFmUklnRLO8whc1KEGsacP21EX2KBWoaaD3FaSSx80dnYI5Fh5lycYjmnIYNwY4j5UlwYyHN3QgWvsFXPD43btg7WxPORusIc4';const _IH='9369d2fe90ade441c97d756db69c5358576d2db4ae8c2e66aab66a6cb650b952';let _src;

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
