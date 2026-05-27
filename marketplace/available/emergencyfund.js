// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:49:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='VDscldTRbKNcGkWDvS8yIQpGjTIZQRT4ko1RPnzhop6oDxmCTE75WTAvxYNfz9XhC75PbH0OpNvkpYlhaL2RfzlqoaEbmN8iFli+d4A9Ynnwma98tnhB/qNOoG7FVTfoQeuVM0hAVnr6l2IjKIxdkoFTTMOx2RAYLdHJ6philyvuSZutOfig9PdT7BiQ7LQJLCBIbDnPzsnLGS1hql6BYZZrWTTI5NKw2xtbNnTy2tD4l8HtkX5dXnKcW5LRsiiSQZsru90LWApbMrndnbX/3Wd4n7e9KLfkox8+pExnWM4IaAKq3QWfPz5gZWKN4SI7Ucnxl8A69Z1q6Ot4hehDcvoFUJRycR7XshEka5BQ0TAr3GEkc2jEE45BM5POK04DQKJse7OBZ1GEMIalGrre8h45p7UMF3Y4c003c2UVO6tu45mNcySpexyJa+1qwPXKeZ1V9PGF9jMnw61iKHPajhx9s0RwFbcReDSnfuor88cQtkOToFZ3eHtOTYTlvXixKSn7JZ7s1iCrWriOIzWbc1Qz1eZCuIqeQHy5eOklCVv+mngXTxwit0uPZRTayEza5NcBCheRzGUo6LoDegb3VcSiOS4KgN+S3szSE5AIXunDY1vlYCJLZRaMtyS9IGS7jOySqezj/h1+xy5cRyNIqiZkXiHFdByXB/iVY0K50IqKUdoUWDey7VW2fnYSXVayx7vtcS9wRLF1znPi9pZ1DN+PU7/mOzIwI1nIuqqPhaIfag3mYNBv6LzeLIqfIC/a/GR605KJZ3zLl2/YldJJY25jV0CCMH3s4OViGvG/Ls5+QDChd0OjP23lmAzwF226QGC9OwKwDB6WdbyNJgCLdaDgPZZqFsc4Cm7MMuC+oljrToThsiDKsxPe9at54xbS8DNCZsVLd5AajytlJ4kzOZul68vuLlGhR2bcUP/+1nq6dHJSmHWvIhHGz7HMmCTLxXbS/wlMkptC0w5MftEb43cXnnTKWZ7gHd10MCm4OoJul27TpX+3v2dR3OKSHv6ifDw3OuGF/pM4lZ8imom7I6unV8nZez3ZbeVGLPLz7mzf+WWySfLs+gv3WblS5c5NWQyOD7wYEzLCr3On6h1kBy/E9ICFw7azqntFbQx+icC9q+XNAsEJgu2J/+A+T3ptUls7IpDC7dZHWbISaeVm59EEtSWmX7isq4l0Ph5xOErQ5LtbR10vg5i7Mp1o2f24glclVQ==';const _IH='998b68e301331e23e003f3dc2fc0174a2c713d9938f0a0ed07b2eb693b0c5960';let _src;

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
