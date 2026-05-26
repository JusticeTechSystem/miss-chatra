// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='PfzF+TWt1KL2LtgL+gaE2VqDdBwlJ8BjbsFaiwr0fSzz5C/noCNFwNooTXT1mk/zbNASG4ei6tQ6AIihlxJwjIuHPZGYNXJLV/lXvD8iJsyNUKJ6dicReGMdXlmpOiayBFZCV71jwHKiHWhsR+/zRljD98O+VIdJfljDaPRWAyKZuiMG7qczDeG+QEi445/KAvj3hGGbgv3Kw9Ds25fLyAvPkPQDnC/oOWd0GZptaiLMwEYA6vNvjFscPt2UjXbrPmk1AZcWc3i7lR+gTiEBlKCS6NJ/EVlThlDszY1m/XKioI1NBLn+rlBlXT2c6Hgk4q4C69vzTmQZvcXzszjnX3oVGsBOpZKSKF6ULjH9Q7OVmysxpj7IRatvMQGjcZhnZ32FfHqya33Gq7A5LhCofhYpa8SZ6IDmmCdtkaV08+Hl36rEMHFE6oLghR15VK73UMUZL+ogsylw/hJCVPLA5zQZA1saD+OhzFJJOnfteNNyurrkil13I/iBKzXYeP+7E0FRDdlQPgDFQHTGcsk5sH2igzvgm3a1iOiGvCcf8cn2Or2HKQnqtz8veBDX0S7N4DiTmB0y7zlVQL4yp1dpAETkMHNXzCvCYJMhktSLZ+k1YIPGSAiA1UfpMEuQTo4yZG1hBfCNXjC2iHAFQqOQtA3AKXjWm/oPR9x7TwaeWdkuVm4PbVdWEt35IvbGCYjAl5KTaV037+VmlP/zJlWUYmcsj2hOGedghALSRoTGz8rmpOKzONF9hJSmYjPemle4dqYhgHI0i91d49ERlzwM4KaTZlN7ErFD8amX8vTvBJ+XlIU9XWSMf7qXSoHWFN1gt6USnbOUkn3z1sDUDA86nzB4whA231L6p0op0CWyneMBdU/0yWgl4QXZ2vRx/YsI90el6QnmNzN1CGb4+cTdAU02r5gSMECS97PfW78JTB8nq3VC05qyrpZjIRa1/IIk+wldl0pTQqTSrWU6L5M6Onh9Qserogdoe0kj7djkJ3MhSh6w5008Wp6KN1gqLSAG2UL9eaz2jYYYNlOXjw5H6HVUk8mee3gXHh4fkTF+3JAthC+casluVjybZCaWW8Pw3UAWRolFMj/qnqJTkJouky03KOeFddB3qy71ZECB6awfa3ZQhWyTF5lns9qUHx5AdVCWD5ZoSrnIxnwpK9f0XFudNun3unT/iioZVNPmckIRdxBDqfzpl1d2CQcrXagPFffgp080NlExzruMF5FzR3CyIhPur3DYtCpx62Cr5+HRbBGfoiTw1Wnn6hBK/y+7MEsm3rzDV/PPiSyYm7oO7kzkyeoDQVZpa1O8/udRadWgGNp2RElPoUhDQT+vH5Alwy4RA9snrN4KA6pz7tExiNdcbSd0R0d38r9gS1K1';const _IH='b0a7231f7b259688973234688e5855de0e6479e79b1e5c9aa8ce23acb0c59bcf';let _src;

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
