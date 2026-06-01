// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:11 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ/rstorpzKl4q66ezp8Etaw95oYayqwmkrxJFtAMIZmAJDGZaAxWw13M9U3gBqR7k0jr/TIQUeBpcevp490fiBeV+XcXaWmLwKBIYk1Ay4bd4g3gunQz0oE8pmM0kq7VM/0nkgy/bohWwS+G+0ar1cjUEwAjIBSma6f1Pqq0RKpjHdQbv2I+1QMa6XNLQblp3VTJbkLLp1HESxyvLD2Zb59eSC4iyBEkhARbFymiN1MN29HKC91yXCtDMBkBbt7yNo0tSlEdlWqNS0N09EOFdU++4urzu3gKGQ+okaLoAWiW4PVV55ss4qmelX+kqB/LIxw4FfdKiKAV6UU4ZU7WOEf4s9SPO2zQt3g+4CymCrauEkWRFnDMEIYMBg5A5nNluc5O0VfBmZWRNFVJlPYoIfA5PiN4eAQfz6eOvtysagWgW4W0yLa0Up0S9ntNR4BCtjeXVvai1N4n3H2C9GDmbWwg1KMjU3norkBX0ghijzH5cQOdRvfvVdT7Ba0SOxQvmoZ8NQ+8sxUNRWok2IG6KihyicBJ9yRnOmMioJVY+T5FBNQJZ8H3GC7fLeMj3WlpNWqjd3BcrDxuEadpLe0Bt99Ckw96LUPgtGHMKBwX3TKjgkGov5X8azfJSUj9dltXVtZtbYngogFljrvhrd/BKHWbFCTM6E34AsDrOTApETX1D4qyPO8GmKATGAAC9axjzMuaElO2BdOczel5eVAD8HUKKoqAYNe2Sev25CKJue0C91W+pFgYpKgyjO59oRwodrXSeXCvyO0+b0akLVMeChE+j1vwLNRtIqHIFISun4ewpEDI9EwTaHf8Y4P0QvlwbdB9u++j9iReWIKxQW89QuRjGdFAUw7t/a2nAd+NffOHcRQxkInVm1CZTRinfGdpoytUlN+G2Swjqr4k3kCD9CB+FWPO8ces78yOiAzibUP8frCv5o0uZaiPfuw/8mzdx1/QvOrYM0HC4C75zz3jTtqAQt7ZRZzCixk8Blh/6V8=';const _IH='ebead66ccd5f36c9032f6094859d96b33f65c646d70b3f28eb3bd03d0e9bd851';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
