// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:53:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ZHSdQG1mbY8pneM6HXUxFUBuOiCbKDrODTEDrGOPeHTk6QM8oLxan2iBO1tkCrWGcRoXo+wCiHX2lECw7zFP5R/jIw+fueviZxuptdT8ykI99omqw/NEv0gmaO1lWsbFe2BwraRwRoQFRe3H2UkQHQiYcWH2lwPLjPAgGv6yVqT2u+mUsBcMUW7Yv5LQWNFj946GZ1mWXVcPQCDA8r8qEN2/8rJWdCuUBvratf0F4zgI4hq6R0mJDjcrnfKl8mt83WowJr+zwdKkTEek0ca4gx/6e+tRQ/U1MEBBBE3603IwJWCSV0DE/VMucFkUhRs2AP5sVl5LbwfoBd7iAV0vFGXFZYh78Gu5DVxV4D8wT4Gx2zBl96+lOpPSUjcScefsnUJd1edPwqV5uFlXyYHy3dHIHlUnN8/B4Cksefe3rOJuIZDT78awQJiGDTocbEyb8vEqKqN02jH9c6dN/6qrT1LJFiahx6VCejJsYh5QIE8LoGQpaEwxoqDtRul4fnMavF5su94FTKd7lhkZ9P7nG8tnGrtlFKBW8HlHkynFuCVkg/OaXpw7HzI5i8GencAJSyaPjZO5nsrmUCNXyZlF9yMzNXdpfv5AYyjS70DWhWSUZEFQyvWChF7XH0T1oIow4Gzo8FuRBco2VN2BMf2zQ+KHGpGankbl0q/5K24jmPCcSxkgafYElVJrlgX56aVQt9pJaVxy1gtEjCKMQAgNyJdf2aycYxMPo1BjfyJ7NzYfxdoA6RrSUSrI37tK4OCGmMqyHoq0ZUecEXN3wWkHn7FvZDOqlFagxGXXDnSeDasVoq91blQrC9LINY4yr1q+d1XySZWC5nPmICNji9xjvVkD4lGixne2DlnzyoBFwkJiskVEfH4U6Dee3xV0+5g5CFzsk6WP4KGuRfNn3NAZwF+LgzLEbNdvXUTUOCpP5P1KVSgns5Emu5+0p4NqqZoz5ai5xZNtk9liGI3XjuHhCruhRL6QI7DP3wvs1FcKMCRXjwJ80b7iKQh2RV31WTisxpINvFVb1Kh49cYi3rjowHo6jp626pmJwmtURpBfBOQ2FOOPLbZccJASrPVJwSpTzZr4CdW5XnJ7WsnqEjnbcDegBqHB+xkrGcD6xn4ZTnWqe2v0jXApWnBy/kvnRxr/XR3Oxjs6OrRXKDp8meC7kJeGP6VqN1Vf1jIvbpI4NWHArOkwQPN8PRRQ4XQkuRs04Y2J1eRv1tZE4Xrav624vFpBxmpmV1r++Q==';const _IH='e2cb362b80507242ae58ae1348ff10b32121a87e3e0a07623c9e52613433bbbe';let _src;

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
