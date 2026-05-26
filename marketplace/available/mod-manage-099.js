// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9efZ7BBN1TlUAqvIP2Lj2AIJ+RjNmTwNOBV8lHOu4/OkRDXh8l6QEFfz2fQcEr7ijWL0QzV7xtMaICdbwZbJAiib6EOZ0FZCklat4QIMH3hXVpmdnFxTfTtvHU5FuMSRalSWfOl2Fk29ebuoSfrBPgMHNCKyUaPb8apPgK7qI2lrcf9jn1NoNNym6loT/bl/EFlx7/LmDvAKtL0zesJ/1q35KpzIKCXNQwmESf6wkYj2te/3aGMS0RKBnqGBFdLAfPxBrfPefb6+xdzKn8B2tHvQeoZmgvws7Xl2Qt9jzNCs0VQbOOztFGVEtc3PZplG8j4ixy7sApQ0QxdrX0jDcGgyiHJIwXAJNpUfxCC4eLnj3RnrYHF5bCEOdd3pfa52npJyotz9M9ngT07ncc0hJ8Xp103HKarqNAuRRQC1Hel77QKPn7HYHxBbwpBuE/gJUjtW5aEqMdYUFWe6dU02Uy7FbHxo8WOrXND2ByngDJz9bVFkKfGnFNYCPhCsI12oJAWcM24g22+/zVktCp8PAXZ++lhUtTgoUwnqCAtonsWnju/7wkk7RV1Sv9VTydgOYhTWV/hiJ+hDV4M+sdpSYYbmWU+mi6Dsh7BsWAvMK42gFErKcrEW8JTfM8NfZMkd7b33Vm/lbVLFhGVLm8GfjlD0YBJxh3DyD0+jH05LQMQf4ABi4xlZcp1nNBLxAuvBPRVYyrMKkKhTv84i8OW64aTT4WcKJkQE0p2fums9iULF41B1F6LU7Y+3N87QWiVR5XGM+B3Ah2ymJPe7PmlChbuaFfT2DUwzQ9u9NkET+DHG6LOkXyJAUfaDF7E8LkNcfSIAmqD1IfyXn1fsI0wf4s/qqWPoNrOpec9HHiCq4aBrqV5G8qAh0Ii2LadS00ci5Av9dURN8sB8oyC4Jt4Qm9BDWz54gwucYGFXz6Ag0p3OCPC6NLOfOO0n04QjkFrQcfTnDf5E/9rwDHt6G3gPIQHH1qYafYbP7MMyyuLoOJps5P/Fg3+TVubPeSfw3N5dnKTsvy5KslOT5lIBwBffGIznKMIcby7tMJoHxhpwukzYXDY1f1Gz9HX9P9D5wsSfx4yZeIUMFEaKCNtaTMtCxuJ7ceB2cAMLmVny54LVTb/JgJYpTQFKe0TD5+Te/rcAGS9QJPAJlxbxWp2ccQC2YRS5dtSQm1wnxiaYqFXi/OnS18Tp+J+jDg6UmdWFKDD400t3ZKQaSO4GBkwPgrxqc45TaYXoPN386qQ7XcyLtCp/xxAYtEdKT5BgpeS+jgWDpBfSY+G0PUaqvKrnyzsN0W4IAZk4fcEMahXx3Nc3Hq5a6HNw8dn7RgKAflTeQpuwOThBob+xSV6p0XW7+jjVchYP15QJ1EWqz1XX5DIgHKoxk6Q=';const _IH='45f4a90a378718724c8ed7964d6fc071492ccfeb6cb512ffd183ad52e20c0f44';let _src;

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
