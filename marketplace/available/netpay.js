// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='64yaZQ+Q5QXgh/HLx4TKax8BmHSY5IRvbKuqs3lYftxdB3ikhuau6ZxDtF1z2rknRdWhKcHG9Qwlyou0hbu9MyPosjXQUi3zZyo3YuOiXV8Hz4axRGcINSZR0+6ojgpvE6IV8r1331LSRMGa4w4eEFOYZ+seEbcE6OFVjiMdBIddeQdIbCxriN45Xk85V5l1cSeYusiM6LTKFtp9Mv2Nr0WtClM67KhP3lqu8Caw6rGOpqiHKI1lrQ5anoDYS079PNdfnP+K+qZw4K6zFv2zPr3nbCEg9RUTTdpyjDb7dj5QPMpTvb419nL/ig7FXaazZrlqrPeLEeKR7SXELo9g705+6vuX/aTMr52cFaZUZUAkExle2qGHjCnqUZZuo5WBHTkOHL41KMuFPaXIhqzx53KpL2JlFxM/T+C/vX5omI9f4QjCJhwrb8Y/h5+MnDpcAq0tkv04WThNLeYu81dN6ymj0UG71kx9bA3HBnTwaGx7xh/qGNwsjdXfaOeWz8X6JbLuwWZC+IOjxvpgI0z5vrXHfD0TvIEFnwjqezIQscFX25Sq9cCG04MIYN5pNTa4LhJ2Xpka/ja3epCxAHhPfDsPsoBChJCbwRnzVOU5zn6Wr9etvuII35gQ8EnL+PdLp6sfL+3h9GrNmd5sdut7CYcGfJTN3yAqlWqlIwieCRws5/5p1w4t1ycgefrtw9kQr1ZJU8azEyiZCthWOI2sO7RE9Tbob7zVPwS3pZ2yXm/HCJzbBTV00W+k+eCk3Je+/7xHc/vSpmSPo+CxJijSp5t1Wl4pgIKlmhVNsZb3BsijgOwH+OEzutzZEP3hyFsaYfYf/I3yoxbNrUBKaK2c3uVNr1fclS7Xs4fY2iFjf1i/EO6nExOnIlxXuq4ktO0loFRg08mnsv53wMWX82WfaroeMpzBXy71ZwENSa49GUjMcNXfojSgOCweeL5KyDrBK1Bl6QhLy1B/k5ScMzW42M1Yn0wcAC6OesYLO76j3+Ej0xnnI/cwRrSgkWNbMogPG+r9IfINJJiGK9vO9fohNz/QJBN+/jT+ngP6MrgHc6TQPWyh3WE6gvD7l/2LMu6GZ1JDhpqazPAEE4McimQgfdEWhv7ix2vPwHac8Yh3LOhjcRHY6pjA8lmauuzD2ab++M5xES64Meo3P5pZPi61TPaYFu9nsrA93fP5BKmhEiENiGMupNksLwMBFucpSCA=';const _IH='357716167b7dd2c679ccf3cae4b0921bcf1c17a2804780c7ae46133fafc69ed3';let _src;

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
