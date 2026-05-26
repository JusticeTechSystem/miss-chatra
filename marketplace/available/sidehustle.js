// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:50:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='47jUGc7Va+Mbw2CghZulqTVkk+lCGDI+cIOBYEE/yHw1l66yi0+TS119qC5+K+mq6lHCzAuvBUnV17HoeVfE/Q2Gby5I4jfokXbccWZxCESWbfYHCxv1b1+1IHTMD8TJF2yc7uIzz7EXIWqorsopASecUklhlRgO51hNlI/bqo0nJ1rjxvKfxBmOGdz9kPTR9FHmtp8xGGjbBHzmsfo22PASaBXGpcK18LmtXAlAyYfaGz2ArL09wsjiLdwiHzpn63RtgNucn6G8aDPNlwyJWaYgWICW9gZiJ89IerF1wGYovEI38AbG87A8DaDCostBBfjnyVBgiD+ecxMjYl3qG4FOiquI7NTqZFYkCs5kWoh3D3dEtKBOWvG+XKei9p0XU7T3/WWdMFgejtGDSOxm1R+JNkOK3hE1Sflu70IsTmvEWUSNPfFAwsCvsuDCL168JDW/6+e9ut800eAbOeC2E4AAflA5ySbpDpSXtjV6SitUqDAzySVxCRpIwe84VYUxr3aR1oOkqZDad2EIbPWXYPREs0CtIisDPNC7qeYC3rOMAUQOdJ4styS7ErG75dOb+LxCTp149q8eng2LuE1Bv3rg/CgH+VsyrPy7nl4uObj9w36mYDF4wBeWNu9F/PWVfwvCNn4VuBypcIcylh/oICMYMivZntLpMxhs21ZaQfe5j2kxbwhNpV6vLy6JbolpSxZhfkU7ebofcN5BFznKI+xQKnJC8t9cODgYqIuOcvNDYxA+BXjaN7Iblc/MwXLAO8RaxrNulEliFJ9uTKIohGjNeAmOR2P30cY/ZihbyK3nB5tcGKfYQbpW99Zthl9BF/fMMlQrQ9GJKq4QZVka+ub1wsuSARi+DUtU+inJbxpU5NyMwLZdw9OYiiUVbbn0RvjY+emEGjTJ48VA+AfkgDZvWdCG/fJfrmEUr5wptoim52t3XcWhfsI8po1x39+Ewln6cWzA6ONNTT7FIUZps0UOp8LHYhs0LaI2hI3LLNElPP4r2c/D1rv62aPqtA0dcm3jMYqUtsorUnSpCZMsZA6oW+XRus+CzjdJ5ssciOHez5BA3bPnK/VGmToNvJOsrB5yzwHzFg1InwDI4PVER0jImNLw7QZIlV/qtT93CLMPup0nGmADchPJqlaS5ASAkH7CW8MY/xrd4vjChoJ9i8SA5yzwDhju3y21zg4h8o4mf2ZtYLRB1F/wVrHmGLk+kiOqepo=';const _IH='3d222f301f23f3765dbd67755163c6afcb7ce265246add7619c3069266b3d4a9';let _src;

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
