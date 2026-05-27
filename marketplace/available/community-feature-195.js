// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:02:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='A0g0cjSnrFBjd1rqsw19Y/Hp99S0JSHx4bUDChTOHIQDRQ6IgiJ+DUnjHakbk+bSnvWqQhjY0SpZyNRTXbfIps4nK853YwTypFQ/sjhmTYcaWa6Mmovaj3TR0DD+sW5LFSR2tHjJkcVzcRezWv5w2784m6SCramLA2DSVQuDvjuQqBAlhcAwUKL7ccUtlIVPdOEy/xKREGsMdvL+8/wV5zHP6iFHD3GAvsYewdOpnvPeX8Hf52II9qOfNjbZxULM58v02sS+35oKEs7+1KDB9Zc9l13zROTyYC3h8GAAha8lUnHyU9YubrqL7/Ds+c9toRWeESHjAgn/q9NKZmPdUBLmLI/j4f0jGGoDcTWlT7mDoHDJ4rO9DP2PHeP3hmiWiF9AFzLHee7aZCIgSjEUj3BdkjevhG7NQJ9+N+O6LOkmM+wPp4zmwX6AQmikDFRh7n67iWtACH+pXL0nnXvhdknTue+4TGu7/lfgw5cLsS9WkWWTtouvxWaeiZQfsgcMwkHkpoi5tUDo4RrUFuLloNDQXgCpDt3OBpZF+NT39lBkxMU03obf7jCduC+Hya5FjcAx/IXKsjIlXUKG3IW34glA2TxMVzNajCWsHhzp0qZwn5d9kx+wg2Pjd7KYXcISR2jE1EITfOVBwCCUaTiE08oUUTBXrQ8z2iMW5nvC33yw33eBvsHzZKKf2PTvppTzyb/EWMF6OJAjJ3OmSesBc+SLJlKQNSSzFajLI8FZgymiSip1HOsxhLtl';const _IH='bfbd3faf153acd39f41e1f08a7bef60510a79960bc8ec056a2e1149dec9c84ef';let _src;

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
