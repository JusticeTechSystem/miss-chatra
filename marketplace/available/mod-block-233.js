// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='wxYAa1/LB3G+PKRZzTyr9nEm2n4vYXDODrT9Xma2seTtxFJ8bMU2Tw55iz2x1aHtMLAsdxzXX9QLH+c1O0k3DR0KRLxrVozFghC6CqtrKgT54YLtNzj7B5LuOP9BGac0ebajDBpUQJUGxDe+lW5qmjGRC24pkt7656PjLJi7zJF3UaZBSuHpibQlqo4Ml8Stk8l6jE6HCY8VGLkQQxcdGaP+I4rIv5NzrSEtLsxb9TERSV4MuzzEbYPwrpKzg9JYddIEahKwhkMVshNi4VT6hde144m2RFQSgsOs/zde03+LNqRLn0KEAUzBWD1kWOssS50jGbHnl8i6zihv//eB+Zmy9L7KIrB1hg3inqTCKV3TS7Q2ttD9Z36ACbRC/Hh482t3iIXft4c/Y1IDkyiizIB6Gg0kfSbF6NB8mXXBtiKy/FvPp6G/bZVouD8OIMOAwxFkUHICsPuKOun1nJpCCEgw6DS4zSBQjkflTgAQmJK8k2Fsn04z9LeBtiuDJY733oEqNNS207zB/2+Vm9eMMLu3yxAcStSo3Z4KtnG0s7mcKlHfCHvp8qW2CqSfxOIVCuXMi9D/9eG9gQ+KhI0MVl1ijK6ZjCuDfL6jNFbWzFgI2leXJyOc05zZHpVEDSwSwA6Q+aEDirWqBBoEhB75+eg3iFus3I/zngJms+ghmFz4vwcHZTG6wl664YVNigHFEOPzrGxnQWHCVzAxP73w6A/YKW+mXVWSYrOVO4p3bzeuRvj8Ln+Ki3VCYRW6AYF75zxcV3BGVO7Ldq8bkRUield2eqK+89ulIR+lyXjo9B7BhKahTrhYaFPYyEyLCdkKtyJVWR5syb4hPRskNCoITi3GbkTFLJ8byvLD6WVmNH83cMnKDSYk1HsEnm/T00CcrRNVBLrNUxHakXfEk/Mk1cFcevNMsESUNqrDkPwL3ZeMLNQ2yPt+i2HsjsXhRgun2dEaY10ZfPsgbgLSXZFzdX3vDIJmpcoqzGVefpzGch8E6ez1hTtW/FP3p50XhXisrWm1766tgf8OFTygX4YcFvSrTHb4P059JGCMwxmGo23sDkSZSYBF9STmkaqSX9NZjNAANcJPL2dp18Qo9ir8451iIuMuJctMjG0DnoI9bOKe5bH5AfGKlW9rauj6oDGHxbTOk2IPmWdCAkH/UEIOZ6o4cW1RLLbeb8Lmj2qa19eCo/IGO1QrvPADR7cHMA8Lpl2R/zIHiQe63amTYogmZtrtfzvp82ufG5p20jGHosuzZ59Krm1X4YTMdfqIqslAQpLO/BUmN9GqQ8pzZuv98S//eiUIcjZYZegvbUEKgIykW6oS0srG3cro8SJ7V12zRvH1CQJHWYJcKnbdP2MrBzt3FIkNibnSMttXb7Ya';const _IH='d26a4735f6cbab7b3e666ca242016de75c4cc4abed809cbc93f02c1ab32a0532';let _src;

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
