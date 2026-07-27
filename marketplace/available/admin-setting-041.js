// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:11 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQknXTySVPRYPSV/RxluxejfwDnZkQ4FgtzFub3yvbUydJKpz7NEA2sBedrWmU2ncIlmop1vv+JfbPbRgCz1amTMPTu0DIWnStM5SvgLVwlu87iNMeOOcbH2xbyEMT6tkL+g82NWKxfxjnl93P/fzIv5iJiJi3WMuOJdSLEmBzblneNN+2CL7o/H85nNgl8FdT4eWVORiQ8RFR/xTH5TGr16FASDaN4VRBcz2bCEI4hr425ZJPbuclu27EMVamlpS9+4U8K2wXp17R6EoZhswNlEBIlCMRupX5nJLelAs4SMxZ4WhJZ/k9XYSVavqo3sctwUbKnIiwFxX2HvLlMHpXjHxcgd9wMjXKmP8n5gEZdUbAY+FH/Vevh76S7sKUlxY/mJwZymMXB6RswtOmXkYedY4hQH7TcD4suNQ9vhAy/CTC8+Er8P/5fL1z/tdL0YbXr0tLOKzXTOsjiUCzdmpg7gZ4pgGNzCSyGpzZnX4xQDOrKUiTQEDq6WPdWrAroRBcJr3h2SPBHx7RgYuacA7g1oSI5aXibV6KzeKE04ecORUMvHqj58zqrdw5+szBsUct4iRuJRhk+RTlKMraj2+ePhkoL6bYUcb/+E0ExfoFPq52n0Zlr3PxyGcNkbAMWrFi6BvCFm4FyHotMwv/p1BkNdznfU7XMyzPmprSGnb8kXeTE6MKrtww737eVWIIH7NWdXURZA4XU1NKseULbPZYwKc6Nd68Esal/6djj2giutaIXEdOPzaHusbYMGxVjt8BgA4pLh4ntAafhXMssUFiaVHkdJvbAb8ynOGsp06zhCaO8+SNUsXTHrqsdW4KxtJ5t8+gge7bJ71v/t94x1b8kw3B1QmF+aVO0li6y3C/f1BnV0wHz7aWtXWrLxGt2wuWC5R104P2ZBx0PzlY1SaHynPxz/dRgE+fLOYVEfcvMJoHRevdWhtgsKS4fEfDWOIPIyEUMqCVP9bFFQYcQa8V3jyvfrzp11V9azHepk/kSqAoxbG9Ve01k28B/xMQCpBgjIzSm';const _IH='657287523fe771460bc63f1281bd043cf974d53d6a379eddf7fe1c0e5c7f4298';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
