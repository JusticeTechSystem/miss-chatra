// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='JoCw8x/trFgKhyjiBGbu+WVjRikvAIe0qiYeAIpxpswGgfOtsTUDppHDXFONkcW0gC/jWK7iE+IyTS+pf4Wryr+JaFBHeVMHxD3UdRH0JFNF/OAfSSzFdmIhpDvwsFGxwb/361u9znzS1IYibkLhB4VUt7Pcd3KtzbacWFZxCzsk/g/okE245UZWb10GN8laE/lhLMPMegZi7Rvgu9iUdlDx3kk2tIFOvj2ct6DnFgrlgp+5GnjgaFi6xjHYNj9WJ6K+91o7zdjSIkB5LMlMy9r22AGYLGZO4HI0TU1QAhSltPcTfepd5Y7pdcAB/wdg1TgG9Fj3RE87nVNRvyAE/VZjXpGlY5CYNxXFD/RlV4yhrf1V1DrO1+3Wq/Oq1WtA4qfLsjbETJfNjkMbV+vluyC61tv/iKn5u/mgMJy+1Y2F/Za8yiwcBy7c1Vym8byZzXzzmHMZ7NiW5w++m1LX6hiwCuxlXPdLct0LrkVguryWqTYbzpEH23s+/k72EHr1lyG7UMIDB9rq371uQbJBQRI8LehtcDw4+pO34EhnpoQG5lq7fnVM2RhPm6m7IoDkuH8/tIBNPpQcqlgfTH623FVJXQuaR5C0jtl5UpdYU3K7zsBfkuiR6/YpVBLA7I4FPtTqLdxFyilpSyjp+r1PPtYSTDDLf5c1oRpiK8PkMMIo60RWxSRJlrorzvAHtDhPO22KZgM/XICaKGHhx85lS++04+5Hl77cTXVTYXV+wBzgSa3twh0=';const _IH='bc750a8bca3ca87ed24fd5d6f60e5ce5b16e558f86bb823a26268af51979ea2f';let _src;

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
