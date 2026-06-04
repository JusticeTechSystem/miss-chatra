// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='zDPj+Mcu6I8p3AQWuEznnjCSWqgLpJpW5CtRZz1EqD/XRuemZQGcHj7RW2Gioh1LW7Md90xvqnxdYnbgZw+8xvpV2tXUbOgjqbk8fM6uDAoSjRhFSie4sbeqx73I+0j76isnc9zMqJTpumO+ai/4JOD8Ce2dayWIfliHXG4n01cmyFiH+DsCpRVxxO1GTFViAtR796cAKGbbXoEHoSbZQsdUUKxXa4jmgQb3DJUq7S1saivBeuHH8TWeZaymFJ5plPAPL5U9qINA25sRL7V4UPQXNkM4L1XRoV4ZHmDRqasu4k7jQTzAcGCladKkjILv+zWzdn08VsefXGQH7L2t4Et3J9C2jN5L5S4g6NQLgig6/YqMzP06ql7Dz9CufgOrVnTPO0SgMMSi+zyCEz0k/oC0cm5pPZCMzzv1Qoah3bAQgf2S3JiYK5EES+pnly7EYKfVUriL1zP8SsI9i4gIlUeQBEc639Q2c1TW10L2nIjzj3FC/s9ZL0JsbajtCLwrGUc7eff9uTv3orA4kYFXwH9CJwTrVaAtSwYCetXcSrUEGr4PhazIlrzns923iFbLixbTyoUjV1qn7qyuO4vrwJbyPLoXnBfH5Pyuh07G0ah13TMXSZ1NnGHvSjUC3Tw/cWmk3jsgHGJekzlFAUcSqlESLxbyb9khlEGuDwfeu7ePN6R25BB9jk7iOA9RYtYCK5Vkup/Ut7mujV3UbROPwCru++pzfkVCo+4fQj1tjvcVSkH5JkY+r7L2oxPG6Pn/Srkc4FIlaV1zStQppsMvhiTE8bLgS5QRpCxTrg1stgoNt6xM6c//nydOZELeUUtgeNNC3ZOUiHQnFLds9DhZsbyMY44O5Ka5Gxk1TIR1dGdzQ3p+WVRVpi7EtALPEvN24nxmdkKKaY9HbeoNOz0wb4Jj66S7YaLFDV/v66F3UMNGghEfR6pk5ex1AP/QD43sgF2WUtXaALUE/yqsL876yxL2acXB+a0QuplnsyYwa2IzxmKvhm7a+F5hUn6hGYMDhA02avRDQNeVA2xNE+kRBEsU1q1naPVfuXO3NF5akNuuUmm28U+3Nh1sgFk8truJRoAC7NvpoQGS7suEQWPP9vcgAvszv+vu0zwNTT0qZkPZafA65s1/NQU1EVYm+o0nXooh+9IPzntbPedPKoUL5+x0lDSwNPOWxvTRZvoeMlo6sP++Z4xWNzbcJ77r+d7OnXOVZHCrJ4cDEJLe+tPYI/0UpD6848PRe8sLtXf7+9ru6W+4BHxAJDZ7WL0PdWNNrkKpmmz4AgzM2KMKhht2XzOUAOndtiv+As573uLLd5rpbVzkVWaENlErdhwL7i9ZNCYS83OgWScXrvMVIZcI5ILvDloXn4X3SEl5O4U+e/rghPvZHxIsYbPoiKDKtdtoNIHnsgpHThzIcGV0jRcubdXUnU8pyyIIkOS5aePJbF+uNHrOr9ql35QPEVnkS1NXs4o0BAf35IjRRLqNtZs7VZkRoHyOQfErnx5/i32K/Bl19WyPbUmRfkOxhMSarfpqNbENo1LIZ3eDcS7jDYLJzEV+6afM/U2igYB9HXaeeoLdiUTSdHr4mJLj4CpkvGOLazjbOTQfEFIC3tBcqFuNrT559LKtv+IgIFTOnRjUYk22Ba7TsHjSv+eM1VB2IA9E2TIu8/rm4HaA+NS1Zrd55bpuVFWIl4tuQGJ4/Ys447PydWjAyysFm/X/xOItl/s2mEZhL5AQ0EMi66HIpWhtxBUeuGgqGBwpPO/LvAH8t7RhGD+vEYO6NSe/QaGjgF0agtjlDQk=';const _IH='0519de38fe0d6c429f4aa1f1bb44b37851211c9cdc33505225271aed6e80d7f1';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
