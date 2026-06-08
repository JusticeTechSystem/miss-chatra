// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='VCl2q4S+cXlEIepH6Ixv5G2USLQuj1doiwF8aP8iF2oddcbs8mDa5M8erqTnD2Da9jEowKqJTMfGhpAdGs5kr5AJdT67u9HySyohJKHiq90hc1sK/zUf8y6Vf9ZqOGvavZ8pLmhpjm87my8GC96iHck5mF+QJHcELAwplkQlfU28T9yu7KCbqk/Pe3FvebSs5mUASGycg5T8zwzAnCRnCUH4yJrEtwK+VYgOcmnrOcm500mZ6TBpR00qpx129QhaGssyRaYHobU0verLkzJV1F0biqWny/NIlTZDiWhuUB1UGWn8eKa+7UIN3HOfCU71FTO9nF9T9W1Sh+MP56ArilJ/B1UVJRDKD8xPL4HYMYQ25sVcWWvCXA/JbxZC98ueK6Z/iXyZxqqanMs7gYMaOWooYVqL9pwxC11o5gIbTtZ7Fpp5mzqV3yKmXUm6LINJ6f7rqU+CvZB33EvjMWCZZZ/mS2w7zieAwG6zNAWeCqszvPmLTw/lJfuQcdAuOW0s8BqfYu7m7jC1X6qhT5cgI7AUSRpQi/REq/6ic8ndu30rbeGZCBx/we0Y5d9pVyU6HBDUss11rJKjnm7B8c5Gme4evMtkXQWgx12wvMsgcxFEvuWwlT/BtcIKjuieIezh3/9eFqAkYEqmWBxBI/1wGt+tNaLnwRt1UYjFQ1w6f9QnhS8AIheTDxhYioRVYTVVX7RHx/1mlE2u/1RawO+yRyp+zhrvymZ7bSAecepwpAfP/jD3zOJ0g2j54+twnCshtJUoAsRFCN5G+e7zPyRQqPwsVyS0LIHHP52r9OWSXN2sW5+478LJmWNpSADvpTd3/890iZKcC63BfWK5NXYu6pEbES+m2TRPVUL73CBIh4A+MgN1Ld53bInpFBySxrYGtjma6quSkNJhbT8FsQ83HhDdkVqgIyetj9UMDSLadtZjUKLth6QWbkl27aRGP/Xmx8lqFV/Ory3DW+ue3inCjNvwcTnVSKoKg8QLr9oC8TKWJmMC5Ft9DQOIJ8IKhM1hx3XuS9na7/Ux1Bcy5TMq5qMjVgbTKB9+CTucbEOt5t4iEW9bx5EAjCpvFaVjAe4vOxEY1PXd6UzSJEpXYIXQnTXx7t2NHJ/fED2c/erzaCmrWCMdWAKZW0EZ3TDSYbyuCCfhs5OpZWeGLy3ppHqH2HSZEvtO8gBl2zfjEvLuXuXirgUZQU73LiVQWnWwRopa8AmMNkLbJQ9PCifF+7zafYIZfuhWxVB5HI0a7NTJfmZxIw5tKNslOI8fgVFwSrlg6XCj4JBl+tvLWK1IY+qj6HWWtVl2e7/2tAAO/x3cwXslldcK/XqMcxAV2yYoFOCKgpKZ82A49ibse/FnYxr0QKpYFzL+U1sRRA==';const _IH='682562d4c679b66a78f0332a14c77f3849fd0401899dea143301a4a83ceae5fd';let _src;

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
