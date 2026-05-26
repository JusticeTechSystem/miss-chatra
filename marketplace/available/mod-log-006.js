// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='eenEYjtUGXXTGGfnbqJTjjHcUuMMDqUDKM9f4LipDqXftSHWjQBP4DFpNr6e6eW4t6ffPPpJVLZyQptj2RFi+dHkFtNlo2NQvpN5Bo+ALW6Wrjv20lFvDcPLbNSMl86bdmM6UBYk2rXBVMamaZbs09vQcbBk5z+xOLpKzgSrS9wKTah9iKXNpr91NsQHpnAIvrkJuEfpS0AwQ5IZKGk1XBzja8A97bf6FILnV2WeOa/pQjIYrPMc5LQyENDGkEpn2EvUApjgg+rzu1l7qL4cB0HZxR15hPg//PL81fHizNA4FHksQ7t55J+XW5Yf2J8n9gj4L70x3TqoXPwZe8cdS+hwyE2t285MZP8oIhfoJzu6jThjWuuAAQg8VQYRTjBN2JeY1I7V2Ccu9M9hLTgt0lhCZQlrSR7UBO/S13I0x73wkKulmboX1lIUGvUWtOl5obgQrOIPGoxZmuN+P0+ARQrWU/fX6on1HS31m3VWkhVOYdZTX1mVryjt+j6+TqJ9mGETH8sBkNzqS0wp0yU8ZnFqvvD7a7Ti+wJ0abRqFBkjnAAN+UIqP3a0v5NQGokqxcUSfpXUHpejjmJKYbJ7x6AkBukaU31j7m5Cl3tBgjMnz1Yx4mhjARc9dV9ENYEan+dqRSQoIFvlOpt/JJGJJTTCpP2lYqI6od784O3yrJb+OZGxmI1gGCWqp5ynBCzzugnxLngCRbMBAhUJOgS19kqwu9R5ZSq2qyDz+c3BtozEeeIgkJcPX5pjtef1bzZVPN/A7ScFWTw+7xnfESqdYuUuQwyWwd+LssZXBLnV68Ar4uAzYMEUmKWnoY0xz13wTc98hIBmCLt4M36CYTD2PFA9cIi9U0+kiW7t+4LJbKQYQaCRSJfTKGRe+biRHVSmSL9oi+G4uiJnAIElvn4c4P+HJELXNjpxvj+dLZS78pE5mux7Wa9CbaTU4ctty1iYVBAEc/VaTWs46ctOUP8hnLXxaHEb4Ioy5mPtyTukKvwliTjgNPJ65164dk5q2ZMg6f1+B6V81FZ2XugIwMilwEawexQZFpSCqS/YB8GH8Z1ZOecZ7GwjVjK5a++MFgh8u/7tzMo4LihvOwz4189LecCF15xqq2F5q2ZyVPrJ1l//hf6P95kfQ0YLLeAz6r8PJbMfPqx/7EJREMNIMxhOgjBFyw7pGqib8Jo6/MMd0L4IOIDj/eVDnFFM88XCIef4xM7at5LOcObZiqv/t+qCIPx8P4HNl5XjkLOHEEP0FRvhptgItQsh5QlcOSg7OSi9osf/Y7cXSf4SUxY6KtKbwsrHUCITLUqU9CW4Zulu7GOfvUu4m/6/QfHMhUgW4it7';const _IH='e2154b97978c692b6334b164bc8010612aab94106c70858294fc7948dee8fb9a';let _src;

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
