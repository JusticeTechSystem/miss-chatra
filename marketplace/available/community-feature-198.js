// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:46:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='zTw4ULGu1thj4FnTZTCynsfpiaJJsXGyzYjZGmybnDJfQ4fwqguWAjUMW+bfZeshTkHP9RAm9cfR8VxSAaH+/Uxi25gvdFSnBxpFac3qUa3vcjrAM63/13vEx7Ygio4Tn0bP2/TWWxNPLKNUYeFwK65GOtj6fBrHJOKO27dkx5phzTv9x+XPs5fACd0I41COoffFMCoczRSFU5D1vcKsaKrvpiqdJoAYKYd0M562TUEHv1q4DnSTbhN+bMv7QYJQsDfB/7KkrhSTvHUeWd/hya4BjBtGIKMx6+uluXPB1sFBd3kANksTHyfHC3OElUxwF4AVuMQaK8kQdzjPVirVcGa9R/4CoAcMfeFpOjjs4zH29H2OxEsmkrEsG55TkUw8Guqmo2xlGFoRdmCal3ggWflxokJIKaae9upXfNFN1kZNMJ0is86UcyXlKl1ECsb4xtgyv3VHGoBNf9eHPw126RvzsqKD9pHc9jTACudsKfhZM6XfkZ+J7dFsZhCNONg2CAglUI2lk5LH+DbFsxipyLB/3Vj3vdKDdyFFgcEq9eHDa9Z2Dw0HGkE0N5isikueS+WYeIHbrhUPqKlxPcvnEqdQDOWnN16eFiifxZQV7nZi68BCr/iUQJTfrvNh9Zs47xMZV00ZgchcZRfbhzYbjiLiSU9U1N76EArqVh85S17By2VpFJ7T/BUZN5MFQJkLk/2d2wLkc/ZrAwGH8FCKQStKx7D9UlqPUe0ANzc=';const _IH='437c4330f0de62bbc97ed46575301646e84475b850dc866aefdf462f698ed01c';let _src;

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
