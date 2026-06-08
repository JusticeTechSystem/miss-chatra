// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='EkN6tlszK/7dX09YBNqoc38rsisjEwE6FZY6G72W6donc5p8G6cWzjqQtVeopc8QDaNz47rzgQf0+5eDCnGjokG9yHtyTD1/LJo36odZPCgun4myu7uR0bqDAAywCPqAre2EcZ9fsMAX0wVarwU+rbEQCqk91MNKdOLChRMjIygSInUyntZz1v0LGceN/RAb6oV+axiSQkbugzRE+7bEqkI8NB0SmVPcjhVVPRtQmkkwsPbzfAD9Kk1lJRL9hHVJqKh5aV2PnLjqdoc28lUCCOBLoL/oR26QO3jcUksyCD1Pt58Kt/g+zExeJomyZk7p5Ft0+vRUPJocz55F+kcki5rMnY9BMRMsehy4TwDkm89NEkcoS+zPrlscTgjzwrdsMrnmBxR0TyP2f9yIrpWDko5faHlYT17K33jhSnJG5Q7pFoG9MKeMMNpww6lWrhZ+atuYHrn+6jJB6g8xr6nqqUkWaWCjKD4n+lkE465QMzhRloM88TiwP/NK/kjcRVzlWq/rwd6G9lskEib+vCX6nF5gjMnNcs3D2oaP5o3zv/y2yLyKLhXwQvieFz8lCxS+kh04blYd2/aVPQ+1fJaxSxYoMt/SjdJtGZ8TN65cbvZAbOgGtLuIOfI/BiP+Z1Y0p3XLjwLjEH2vwjnjCCsSMgTLGv4/SB3AjZOTCgjgM/6iR6f/A+W2CBwnkvQ1ZVAk5p5+KTsw7ZroacGY8BMRRPirrRLdmUWacO8lYNdckDnEvq/UzLQJRCicx+HXiHR5s3WIfJrCrPXq6Y+hos0SeAvR4F/Jy1OdiY+xYciP850FkY/3DNpLs6SO+HH9vfvKtyE/aaKONt3058rUL9Ps7W6v0uxmzKKCHp2E2E+SvNclgtKRIzYEVnm3oG7YA0uUieq4NxexVk+++5rvxBG2XBAjUo9lFMgHEfoeDf75Sx22JA2S7p6uYGeUbuLEy9zULi0b4I/Bcvj3iI5XNTRJ8WxmEsJFC1wN9rNFwo1AIlAhKq9eufjdnZL+Sqm5J56mKw==';const _IH='6c6419d7296f446204bd8e1415b0065398c2347960ca01d058b3ff7adbc11188';let _src;

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
