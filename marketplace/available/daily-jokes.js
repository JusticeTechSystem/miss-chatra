// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='8qfvoENFHlMTSbdR19oDHkIDVcGOSZ6AYc37ru93M7ipcXAUe+CW1fAirIxCx/Ye4icrHqjizOAuUK7Q5nFfKnYlAw+nES1XUdn1q7ag+MhzW5d3XaYyI45jnFLsbIgvlpQQiyFg4RWvjD2DrFDtqwVDKoLIqY3CRXcggd3/QF+XIuP+TrXLVwDpXM8N5pDbrs9ffKJovHAq8cgiFmaVw1Tm+dDsDWUlgKvc2j51fDFfQeVEeMLhKetKzeYFiF4SxhwHM5SKM/3kdMJ+TLTFpu5YOP767k+w846oT623ZOHFSfz/DihDSSjIVavafjzbwyuuKg7TTcYRWam9X3/HUmsI7GPCXBN/Xfnoci+7AT0511hMj1pG7DbzYTfwZqEqS7TCf6XeQBGYl8t3NLthYCr+E3ygKgFKGBrk20eJDClzGtZX85JKwyve2ENiWYLU0yNYdJBycWAM5yLme5SjgOfLnA1uY3ayVu6Bsu6H614eoUgyR54w1BwnU8q7SpTu4+znvsoLAQg6h/RjL/Nlye1B5d+z15holJUGAmV5OS6dY8RBzDoiDe4InhyMWjugu//qKfF92zBzEGZk3gEL+PJ4mtKitnMYCT/ATolcWtXUUW+FksWmM1J9g59E2IszOwIq08BIfJIrD2sQjTJMKjWTTFq+Cu1mBNXi38/kmie690ymWEJFN7Gr6NQWmn2ABZ8wz4MdcL29+o947/pFmRgonYaRhuglBfbPsUHJj9/Uo2rQpu3T3LTnQVIz6MQP0vQumIEjboU7Jm2ahct4TcXpJPcu/LbR1rxJGXLO79i16WYeF941NgHt8FkVd0erAEnpILiTXJ6zqWYenVyGz+kauPtWe+lZDKIg+pbYfUeGCL7XRkJ0V491XTBc9rw6N3iH8Pcj+9xYNkzN4BFUO/REfPVdS80IfitedKLNO8i+zjPMqjphDNfV9WNX2SNv9SMUT6dscTezarO9CKUcfB1969J+V3Zpfw5eVlDiX+23t3BUVPHO8FTZEg9AfF/vTcSnyb+FjyTq66GBjXrvgCg6Dof599ckMRI9lrV3vA7xEcHzkzzRM+hHgjFuM/ES8t8PXQ/h+vldvuEi5OWgdT3a/UPyUHLgY93BslZZfS2iBr3A0jAwBkw140qI5AFuvT6kS1xi28ONKSc/fyxCsNga1R4NwcSY93JBdTHnBjqy5Mdt/7mzFxxAHDey7Doup0xLILOTEtO/wDCnJ83/a+wYJM8J45qx2ld3654ygocx3yIQRRUZbFc7c2vy353LYZSbdbrFLL1upkStBelxjwhgxnsM/SrG+O/fkXClE3coQPdRh3jkkeZB0UePy2+MU861ZU78HRhBo7NQONHP9Tw03BejuVc0Lo4psCPL5y4ZtRHkt3Z+USfvid5R1RknmLiy46P26Ov/jsouROV3wY/4o0JP4Snq44YjMk0fFZGrspnBxvjY871vbtTZVyb4oWcXuaXeCrl5zegwOXq5zTkHZ0istB9XH3Sq2mWhls1NxGTHHZBz6RjSwPfEUlHl2sk2BQ1dOJBHAbDGlOtItDq6iUOBUeFon2fDWRZyw+vXtJQbY/xhu5saMKqvkGllzfGV7mwOuiYGaqJVmxY175PXs88O5EbeTqLl24LLJK8qr8LjA14mXJyaDYL8FaaSQwUDMYbKXvNPZh55gfuHDpbudl1wwKIH3Q7mhDiyFASX6b7Z8ozkH1CgrvNKOWjnIEbn745HXzXWuc277F4elFJDykNE5ce7vXgF02Pmp3aTMmS2eErJAkUrWtaDa+7kTp0MLn7T55womQ==';const _IH='fd6422212f4ee3d298d24cb00cbfcc703407a021e3266c066e0b2f5c72277179';let _src;

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
