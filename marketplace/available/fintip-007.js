// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='rsTAYNtWFxiRB9u2Xk7oSJV3ErRhAhRJYfi5TJ5pUUGe26AInqNYa1Tn2fF7MAFqlNT/Tncgx89cJ0V1VAUHntvzssqMkaL2ajexxr6w/bYHyxWvtwPyE2jIr8Py8/zJ36kwZH9r//pti5Rl8Sr+jq2w3pTL22YuU8sDXQW2csctSP9xsz0LH6mVaTnhg89Y+g2owHPQCaIfnDh13zS7x6Fo6cJJO6QQnRyKxOowuu9nkNbmWO32UY6o8DsYV/WcPl4aXpTy6fuqlayROxhKnhjpYOTzFy7C/bkE4m5imEFcQHWZ8pfMXzC+NA7Ph5KUaajbNhE9L0EUFGXFhFa10sxsftGVq4CBaKdbqb5ZkhvlsNYlCFYu6LcPjkLGm1W5Zdgyzrs0n2JljeS8k87vwAZnvJVVzsqlhmvhIaZGCJytyoMIQK8ljhX/Fj9qRt7bFyTOFIEYlInwbvUxovz77vRIm1tw+2fTEgyLfZgp2cxpuXScvSxRNGzapNejyAkrGAHnYJR4ce5HATN0mJwRhMQZk24QClCg1Q3L6ARvitpkBxXwR1d1zPnckatHzE8c43LndVKxCBSxhEvkZEqxIK9LnM+AmkIWVjDdjkRTAghm9yhYZvlPY+h1qaHEvHIqy6LYSbRZhzG8i4Sze9kqKoHJqsTHpnQzFfiO+4hsSGSG2bpZFvcS0GX2bQeKcTio9OZPdCt1EIrZeQ0UnA7IQ+ofbPAwCY4s4CGYAFAUh5OcWZX6cfNF5Cz9XRv0Ibrj1sQQ4m2iC5tq6urhJD1EAZf+t/wwy6MDz6uPCXoN1/y4p22Fg32zpBK7raL3L/hJL4BVS5t2WouaGvt6jv2n0HYVA+mFZUzB1gfN9bk9QwNOlZLHx0jPT/hDT2WJduYlgIXnKvFNrl+b8hgcvT4sDJ+fx8CVed0FrLgbbFHkQCw7dzzpDlok6beiUehHNlK7lduY5BMN9ZNjMAr4/8vTR5IaevXKV5Ps0yJLpDFOCmf/Hh8kUECmrPVBpCHi9TpHIlGRiPF1LgfrePyYM7qMcjxEH3741Kt2JoA/guXR';const _IH='e7f6740fdd31a54526cf0249a35f84fc90d224dbd181c9d46df69dc1968f7eb4';let _src;

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
