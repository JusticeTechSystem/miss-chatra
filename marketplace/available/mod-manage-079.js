// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='MiwMbtTPhsaYKLjMN7tsG3EqF50WS7VsmkTMabS85fNVXK3AwONxjZRdkRKSj4SlQiI/RkP1ZuDmn4VQWSRL8vdpmHEqv0p9aJFpCTF/cEna8+cd93Re7XcrEjYBL92G8YST/WUgoKqqGscT0u2RKvJUCvaKgVej8zD9m+Dm+AQwfJBYJREPU2QI/UUW0SJIkY8Ox1tH/rcEqdkGfFMDQ8vQk2XhYlGXmdkAR/qKDZ8Piy87DtqdEpp4v2AmEZ+DeLhv8FAe7CnlgyXzS9VKjgXkPtAcPfL2cSksvYHw5BiNedvVxvvSOTZxDwp6wJOx/BpTaPgD+UZwk9SRKwIGFhQAhMof20PoUCdfjKaEcG65RgrXFmtiqWCMGQb2CLssCkiWpEHhXeXEjxjMUfpuMwXLHPlq3XQH/nzr9gpqRw/pk8P/qJ/Ol/5n0DsPnykv9ffCxmcthM/w+acszFBomGR/YDQHn3H83UY82lYyFuK6Nn139MRMBFZQhD23/Rwtwx3f8B580pmAmgMrCs4xlZ+yy3Mk4W/YNP2L+B7Jii6riH6ldJ7jnJxBYdEU+VAyaUbiEMPplRpuJSnUPvuHZVe5y1quQyLtwKkYaV+t14s7ecROf9QCxqMcdtSUtlEkYdNiX8xlLQrufR/Pl+n1E/l8N45GpofsaESH6wHeZgs2jIhiqI2FMt5/EZ/j0UEFIkv3Z8QwhtQQSZN0Gv/yCl/2XObwnWufz0jrMaVEzphokkx+fFPf1MykUAwx2qt2hnF/8MXUz2On42DtNeeWVQ7mWbp4TluTNAFYwgSMiqQkK1ObKmXWGfzyK4T8ypmiCuD2L6GaxDwZ1lJu5lROLgJeWViSB3eCO0Gi12rLy2yNUrNW0nNzTarw54q/uizMmr3gPdfcBv+dFoI53yLZGfaENcX6mistszOXXluaTUGDi1nfgZOAiRfPvTV1pbaxSvftlUOojXEWG6IwQYQJkF/7CKXJRQk4F2TjVg3jX05ECjfD510w+uCEXy1qSZih2D1xnu90V5Yt9M2mWQsAZ3nP59PudO4pZtiUJkDUNR8yQp5ngFHqRbrj9DiTfW78tZB/R/P7WswfPo5o6Va8nxdoV1xdIe3qI6StPC/fuvpJfExpqUai0/0jcYtokd8JnkxLI8HtbfdnBdS86fIxxNdAP7NgTeo5znkaCwwIuIz5GvecGJ0zm1NY0HTxoyk+AJIScCD9mM1tp7AmjEM51MS4zdGk7CjRCEcHjTL1WnbrH+czvAEysxU9zRAweqrbnQaXGsJYcWLyGcZGiu1n1vevEOPZMgvVkTvvJT2BxTKXb8ytFZ7RUe9UnAnI3RtjVbwzggdsw3vQT3nuTlEawLwEdcVowqVH9DWW4CarUObSOgk=';const _IH='762e6455295db9f30901898b416c0fe2d797f7a91bdd72b29795c5936bf9c3ec';let _src;

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
