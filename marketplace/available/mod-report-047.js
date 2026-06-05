// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='JmVNxZVJeqaWsDba7iFwy8US71kzn4lvx0BiZLiBYEqMpHcRkKqnkgCGSV0lZqILFpSy2o4arTTdqtMPFZ2SS4trRQKcd6hUhQf1rpDCQRQOA3XC6v1bDD2NaR23QWOdJACGgRxYDYuD0g2NxXvaS4zqaJEMlY58jQK/ELqF2FqHpLYAlilwojJ/cV8D7DoUeogy3YfGk/08FleyuAoxdxvBQ9eN55rgl2ntvWCabJzMprh0npgFAdLIvuUElKGqmtbULrGeE/PF8HbYG6PS7aK82K/F56L/bJmWg3uAO7PLxWute4Vjdq92BZuM8L/6PjfUw1YzmsG1yBFk0yGUlKlcxuTEz1u8pEOCXGULpCMurrShSA9GXh6eOvbS+o2/C2/DIREvoeEaSplhcPHZ5LxXC2PbhNkiAhrfKf2P6tB4y2TNMipo0cjJrrs4b+fI14sgz0mLmLVkiS9G70A+ApAPiSrvF14ftzQz4pHo8rNDA1BndyNn1ZpJl89qrieLpG/UnKS0TMFt/dQS8K4q7latkBhDcJNvdPIycOvYsw6ZEkd3oVvHP1IunuSSYUBSHlAmjNoZ3nYiXbg2ixUtwXdT63WfLHDOuK7T8+RO3EJuFm1vah6sM8gd0/SeDIIxlJmEi60TTqS6fQPciNlTNXelCO7vTV6YD2Euurpn0i0POdh72sI85BaY4LwAI0hmgsZQGeR2TOoDzi0MEp4PH6WKTM3LroBkMCbRvEgzOgSjR88jvqpX7ZNeIqWfc4KFewQWsMzxsZwued5xWwlW1egW4L7xq8BJLWtD2V4LbRYtrQYMhOyxkxw/e1XcZkGMMt0m3t1+tymcScDUOy3RDjRPWWNXsh4zw//4l8rQZ1JHwrE82lLk4i1o7ose5i5X+m8OhMJ5YHY6C4hqiLJcgGi926NUunOGChgynQf7tHM1HXiibNwB8U2m4ois1HG9CeEvZXkIYuz00NVQdeQWt3BNn7gHpNSw92Wi1DmoU/ACdOL9n3oOFLcNYsyOSC0Ry4aDz0GEwdVSyI1h5OpxBz+oarZ0LazFlAg6LwQZoNCiQxPZKxDzSK0wgw8Yt6chOKyso6ZWW6pt/T9VRv3dQrSezA31+SxdN5ljLnfeEX0W2njZdVPLR2sSeRs369RS7Bmkt6L+UuhkwpzhHEJ99x4jx754DHztAW2+Fc82hCIKpg7FR8wArlvEEk08OIuzwJtxmllpW+IuLUupmSalQDF/Zkk6jn0czEmEZEYbrVAF7XmfTzjs+xyIfDuXICVl8yEXbuYO3t7a1I2XtIneB/uaV/ChDjjkWmdNlqmMVskgcjSNss/QMWg/Ukd6UxgOuQSkFKB/zGYWUoPVn0GOJFT083qC4vG/c7VSVTzKlZFptgw=';const _IH='15f7ffb14a48ea8b5780b9a98b8725d8803c54efc4e2adf3213a86c3af678237';let _src;

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
