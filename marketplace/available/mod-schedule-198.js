// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/H7R5RL9yzA4UayuJ3JzFXcdFH4rzoagGvWcGltipyXbvoiVyPZeFSGnRxiF38pJke8wOezru4vYM97guB4ECIWbywIA/l09cOsdZjthMtHKEQ5ouVFqN+GDUXDM2VHLzsCeudhYM1LQqIt93fhmTiiCDMzqSxp5emGQushGMSt2vICCuE4ydHyMp393ErfV6twXpK1/sHD6ryOYtt1Niaam3TZZh2N0wb0OMjZDdrv5LmYLWMVyml+8ZNy/JZBGqVcdyPfsspdJe+kLPrpywssl1Qqzei05/OrTcl2/zr5BeN6KPHw3iBdfRZ8V+U0o+irQKw5Ho0cGcKQlYUGyPd07v43EW/dmb9qJHQlIGgUcrdSjrsgie2MRIHP7d62fS8OxSZdhMZbR6MBdl+NMTJKitq11c0QBF6roBJaaewzta7/ylnGL5kxAH6iNvQ3Oi8KlZsoppxzQmE94LhSqX0Yu8MZoG7weubHKCMEflr5Vd8EPwOU2idz6byihaMBBNGMFwRHHtdphdtq67RSTfJJxHFNyksMQJlk1NRpa06oxr14GQlEg3+U12igGansMmfkphLkn6aF5Qnd8Xyf8/8L+LZPc35+zt1DKzT9TP552dwWojY+KPG87gIKtToASBhSns63ot1vL1b7oi+YRbkl5bdm9Z0iglLJrfMZC5wipMLJX7PuaVv1JMTzG+dnBccOXH75JdlTy6gi45Pfps8TwkyTCqoQJtXZnLxErgCbb79GXfIiSqDyyWEFAksQKB9sDgteQ8FTbSNYApv+kntbdzL2bCNFpgt7F0wgr5wmOBwu2KYrJasfZ6/igK3BTnM++WEvHkF4ZXiCkl72Pa+EDx5p+xFVUEo1DY405sDUgxsyEyT+XGRs7kfwbgl/kaMcoGhbh7VGOsF19x4bFLzOpC4GFnfJsZKi6Gd7y/KJgb8dPLV9f/jx765lojHnD1IuidIb2lEF7nGe4W0NnbVX9sR7oz4QbNv/uEc7j0vHHSIg9WWxwr94uzxmlNKW8MCkhYgCCEb4k+slixENqtwq1D+oEvHNZJ+5Cdqh3Ob0z9xnX8W/GY1cDgVh6MozuxjQs6mBiTUCOUJFsn9ES22DZhK5J2BMx03DlKyqFoT7AOoCTuAMm5KOEiKRB5AkW5aFHm+AWYZRUcP5yX2BtbfY6/ja+NYlaR8fqhooiP3nXlhN/PHayLbESuRc1fnmmMU2r/Zk4krnPnV6g4yQ451Gi/43VcFwmWFQb9YteDZGRVi+i4Sab6gVFCYK4PqF8IvgDZnZZcC1EuqNgZEXMFYFMdzg6G5+rIw5egH95L2idm9xsxcudZLyuFWcrFf+42ANnY5FK2KiEZoR8S2AjwExlfenhMTrh6HZN0sB/GXmeywIm5t5xZWoWlt/YY5Y4VK6+76eMQKrKJqqt';const _IH='2b2fa7a22bded312f7024d0ae4a27adcb785e805444f40c3712cc9f871310c39';let _src;

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
