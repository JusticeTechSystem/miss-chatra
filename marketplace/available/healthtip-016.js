// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:31 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ0HIOkS37PYyXju8YnCqf8VE9HmwTCDo9CUnPKu8D4Fc9lO6+PHy9c21ZEGJRHWZsq2P1iL7dYmLDsqVUx1qHuQWQLLJLL3x+/Bk3xrl2ckuPMmt7SaueBLzndkamI/oUyoNr9u39AHTS8Mt5bi2jaWQckPtzWtqioPTCZlCeRiQyXXLeZzoB2urgRAcTP5RiLrLJmuvWjnYylTxlWbY2yx0bfp2Yle65QrQhKzoO13aAO41YRv1Ho6KmfajeyP0hvm/UUR7u8dddsew+31u349F+0wBtJB/7yxCuLdNTF6b8pI+f1gbj23hWfkCWC0k62OwGD+Ob52lNArVBx/FmVE4jzdP/svqIXplfnf7ost752auyVz24jdZV5OtI1GIF2mWpMCqcDZ3HEoCF1f+jpNKeELfLbXu2zISgNmJB8/GFPQsfoyBstJ7QUnsugDTDDYDGqBN7cTt4y1SCMA8JxUixhi2FJ6JqGQdHMimar9I1khV9sxWo8AUkdPOqBNdYQPupcMvw/n5VvMSrvf8zo4JetbwHNDSAwgYHeEwEfrB+SmnGTgDGI+sKcWYeFG0SFPQ/kq0cdKTgMG8JSMd3YuTgNkY1ergB+KF84vcCeaGo5txzRiyyCKF75OouvL5x+Mm1jiVHoLwNg+uE1jmr71793po96HeWcMgJ+LtiSqBBs2ARs2FS/w6Rpbig1Wr0x8y9ePsQG4ZJKZOdq5a+X2x6kbpGzHdI6jPdXWRACsVkx1xT2OIv0SdT9HAtg9OJ6xt3Bg28rH97GkjwQ8hedB/uYdAKZj2J8P2zsF5MmO87NiMHM7GuCLiXMb8+kDJfb6vOfbsm0qeU3Ve2MT29J+ocAxgubLhF01Jxwz6ralbfjhC8hB14u0mdfPLnZWuycVqO9gLnlBjX65wd/dC8dOm8IQb8MSv0OSbqmT/xd48V7vSvPyV6e7J774k';const _IH='7f863c289c1224d498452444dcd30be6167ac72c50250816167eef4f432e83c7';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
