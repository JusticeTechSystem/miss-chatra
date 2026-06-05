// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='G2gBMcgJSxECaiD/UFSDC7v/Kk4nNkL/6OEppq1+QuudlmbR7wdBSTpVWAhjlY6LkGTJDrbxN9eniUfqsmFQkCsA+68Zuzg6c/XSPdRmR6HrtICDDBNCYJSjYnplYreLG3LmYz4ALUa4LUUpgrwTpQQoNnwXtyC2f5SmKU8KwNspDHyByudrsvQTaGZpYMnXYHHpLWPxlvW4xiMW7cjCexRquGd2BW1W28mh46hZ1YG9U+TEItpPIFQlxTQssgDPlI90Otcni+ct4Xnv1smrEuHFonYiFrsVy1sbIOT5/m9JK/94BIVi9NidbTvGxsB8sbgM50VrVl6ud/3uLp9OKGj61LhHYuRdjhpvfJ0f/9Qt3mmQK6AOls7dKYgTiWNCrF6pT4etTid00rvQt904+do7EdNPjeIWE6RIrWthZlh7WXW5+Wf/RyWzCeeOPnWN7EbFuHH60YqOLLCM2TIpgWzk1ceJVnHOyXpjQ2tKdWdVm6KEbcku+flH5UcEBiyL58VxOhH2MoA80hxwQ0PvrI38OxpHlqW5yYtqqrAhkeFleEb3/8lkrMqYAkQUOzi8jY7AgusTnvz/k39yHqyg6aNMQWdyEKgMWa3Q3kk8yeF8guKJ124art7mpJH6oWuTjnJleVXGpFsC9vK5x9vaxZVFkNGWw5lxz2VE/es1pixwZ2a2DFCl/YZDQLtERmKXFaz0fJvlo/C5wC8cm8iRDE+SVZf3NdbHTOLbr/8qoA==';const _IH='ae285d58ea257d887ac3b3f23568a3af095462f606962abf4945d8de719269f8';let _src;

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
