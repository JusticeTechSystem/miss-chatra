// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='vz3afmdTakKVXSEg/wE1m2Fh4/dmruKZ/1DmYIC05oPT7r0sCQ09jqNozSGhSN88dsXmET7XgrX/zacvcMRXgAQNKeQYj2UVYz7xXxMshPZVG89x62+SvfB7kr64l6gkL1Eqvf0fuXCGGBG2laKLErdSTfol+nBrPwyl1jvM7KUIAFuqUPb+A9TF0JRnSk5Wyn+bUjHSkMUNnWSFZ7AijXMkBfr7zEQ/f/qb2iRyKi7/jn2XcRoBvHCdKNKQKYINKyMPdUbHnOByJH3DNeu8U3L/13U9V86UQf4m661qBzuVAcjFq+2XFh0q6e59cYLi/71bfe8RVxZcuiYxxu8zeF46vyB9LxrusdmeoXE5oz+GV/it7BL3SCaQSOJsO+XCXP6Snr2TAjvTeVo0BAeYWyx54qoRGAo/fo8+CQTTU93bMtWBCGe2IbbDr7mmgKR/5hSWuhJTTtHYSpruedVLrxlXxMSUGDe8EkOZVxS+lT9UfRxtlnjvN5dExj+qQFkWsqkoJihsuFaYyNFqdbsophpD8wxt0zZFnjxdXSE7Guin9bajj5lOF6Xp+j+jPnr2nue74BKGyhK7lnT6+LBEJhleZAg/Nxhps5KXnORx+x7+L8aCtu9GTuJEpV9aNWZ9gRCqk5qKSv2jJIW923e0t2byIMJrA1RX3UMfwA+iJoVugG2sADc2ImN3yQy4Geegl4Dt0fqU+1IIACYY/l+GImSG93MJOxwl2KBunOTyN3Z0VtVxha4r49gbnQpmWF9redzG2aPQDCGgZdkPZL5yd1QkT1N9dlC/b9tIrux6VAeMkVIEHLwY3upAolArAcLClN082lAa4kN3I/3p+XqwDbs4Rnee6cuoBUtc2BGNUSEtdY0DE+X7bn605H3avxCYO5KKRmoSDsMKrusEQmLrdk2BBQb8EJqLNeFDHDw2Y+Vtfh88DFB/pUq3vmHB01v61TUz2emHFy1GP3I3d1I6Pat8q2yKr7Cww9M3fa62mN7UMVWulB+EJ69akO5yejqhypDrYMryjF7jdtZQh6s=';const _IH='2adad929f32369fe32884b6d2715fc3de01a1111036311516ff635adc5e102a7';let _src;

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
