// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='FIu4Bx/b85VaC3RrOuhxv0RQvGp1mAVVGsYJ5ZSefHxzjOtf814o27P1/dJmRPReggsOJX4M2UaYtlxcUun6uWcSfXhYlwrQ0fxzT/gySN3brb1BFln8zpa4P3MZPQIHm5VagHSaRcy1VH4M53Ikb3MNe1XWImprd0hJKtWykzD2aPgV0N1C66ZQAFerqfVEZLYujP2mCepxmjevafsKRksYdMU3d7GszR99f3FpOLQW7NkA7KYyfXgyL9nNbjo3YijHGtAaLy6pb5SBNadOHiF5xOLEVwTeoRDUV5/JTFeStuHh4vo3o9matuzcPCbBQsYUanc0dyH1CSjNmlddQbRbs/hHaNE1F6Ya6OOxe/ZbmfS0RDnzC7Rq3SHhVDVKc9oi3mFqu1ytKLdZ7KBEP+hQzaXzKi2N6vz0TWqVgSdjHdjNZ+XtNRexdQJIMXdVPJTsOSIYKDunqVW8AAj8/WB6NdbtoJGOAMimPn+qyeQ1fhihV1LOmJJIJ7Tn4KHxirw6zuM32wH5Sx6bCjzNA0P0W2L1KDzmR0EqnlGB/w+lBs4eUb8H24/tQ+agYae0jBKMbS0bdb1TvTVIjkf68DyZHzTM/EIVx6h11oE23PJkoTQKodFp7+6NiB87GQz11XGHphUx2yeO/Auq/hcTwduqPbbeasQx/q2e6/do87YZwmQybEhbPtCHhulWgLz8hINhZcXy7SK4jL1hzqgr5z3CJgBzhv8Jhw==';const _IH='efbdbcab3d265f43ee5af4a9936659153ce1f038d6e01d6583834ae88fcaf4cf';let _src;

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
