// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='um+SJB5hIBh5Z3eW9R2Az+qCPp5eih92Ox5ScntU/YThM32C5wgNPdBomj7W+X+CeG0YT7oew4/hpry5EAZMcezmhEuBvIpLzActaf2WKARoyZa6TbUhGYsUPnxeQUkKIYF5wSMexEAZYJwowdof/miVXQEquMAlVVP14PiQSTm8m/87LWovn0ahzi3hBfv6gmtbnUy4zqywTvbhjjAUyx6UYfBczgUp1GlGQ1ArBxcIB2+YOp/EpAa242KBFZjQBT7L9QDaVzbBpOEDhsRPCgsjUyKWE8oc1xh8s4WYUyVci33OYqqdu0TbOpXGj35TWcZHeWI9hBlH4m4lQKcrsg+ARwx7vPzEKeNqGCbaIC0X0r7cA4KpA7I3P6oKr4ru7Ofb4LCOxHA+hUpUTFWjPpNNbSb2tlIKnA6wCiYreyqf9+Ex423M7RW4j2NVgMDAgNtZdF7Rt4BXvl7iZnJ5RfnJctFl00JT48lThrgzWpFmTgVQi4G49Wu13LA9uWcHPPE+xEUhlTxg0Mize0yk23EtHY5EUFtehb45F0IVu+liVcJ9pTQxt5c/1YRTDWSOThYv90Ngod973jxIA4p1SjzGuUwqpwkGOU4cJwy+Vf9nN2WQg4mlHsKEB/Nb24yWWN9PVJqpcex/DlI1yUvuomwcQAEvZrGtHV1E8r/2IohsF+ujcxlgwANapT7UzswLjkGqyt6QeOKQMxI1gaWhS5FGk8Vwic3DVTruKlfznBkFz8AQD2qA4uo/FnE6XIy8k2IQE9Doh6aimcaprCl97+iFvvB+xoWVvXTfBHeEJw4fGXasTxa7NaqdwkNeJ3cst0qaWs2Yg8ApLgHgKjshn4A5a6Igd3DdRHDN8ygL6IHTXWeNrFm/b4T4ubP+rw41Jzpv1tEprGobndmWX0jpxbrvEeSUez+XsNJE5rFTfTVi/czHNBGdmTTrf2x/3fYrczvaeDZrKUAGobzERfVeg1vbIYubGDUk+Zv62usSQXoCjVAI+9vDZPS/QeyvYeJ7kRTsANNynk1R/Xgk6pnelF//NnWpmQ==';const _IH='6303b42ca0077cb8c8aa93277e28810f1789904b0f0e4fa7e20c19cb47d058b2';let _src;

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
