// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='om3Xau62U1UIb2/sBqD1lfjVIxRdqXL7UJDl20qUkE0x3AV5s2S+s1QczsewsdnuUKdOAQrc52O6cXZ0C5oeZBjty/lyBpUSQFxpSmtZr7TSOCh+0Zbq8hnkt8OmQKovDpmD+Bw2myF2je2u2CtEwTe1Q0dTGKwJ18i5f3DxOUhr/AuoP2g8gysil+VCChKvWi2tKt+SpAaWt04kPWqDXVyAAGSBGimIXQeEVveCGkr6cXJRC3LiI+A/OdRh+5KGFDP4xYUKY8i0iyzBaWut9VdfKuaasBqkACnH0nO989sLNLXVfZiORQ2ybbWZ8GKzeF+pS0F0hX1diMRcZBBEhWZ8nVCqHSmXlU/1Xn37fBel6k97BSYJXu4Os71X4xaKSg2+4IbXvqpiFjrKREfpuEMbe7ICn+QiFJCiHnlaMFzRW64W6umZtplars/4Pv65HGQl1t7LkiNWccf+JoI2eGU1jAEvwESlEdWBBVWvCZOGquXb4b5vhDyVJiBIeKYSNHrprQLDdW5Pgb+EtkgH4OhbovumVqMdsnO5QMZ//i0TlL5WImGEE85m2TvYSas7v+c4wtDcYAStxpBamRcq0XhMHyo9umb4EUJhfyMdhlDkvbtqbZlOSXf5Wa7ty+S9G+zAPPv8AQtCmzXXx4go6fLJG5FIF5FsoY+FDj/GJ+zhmpsvjkqjRn12j6kPMbzDQxqJCWSqm11WzhuBwBXLUk3K89pjgxsxRECf5DrwM/U2jRSzZojMNIwh8+MJ+4Tf38aIPDh7MwljYJJGZPjvSTlSAzCdF4U4NfQzr3p6S5FXBDhvuAel0IgfNxVwl2FCFjlwl0kG73xPU9QerZWmVKeAjdZ1UvSKM5ZfrSNjEWvPVmkULac6SVBgqD0q+HgPfxtvH6VAvpaatv6scSYU3+TwmoGVc584wubzVr99WSHLchnyuHFog1sRqgYP0232N21wc/4ivQ8XZabSyttD4jLeLFtxfE6YZBDLmlVyoX2IqTkYeZtTwaPvE8OYJPhl5qTJ8x7Mw1U133nmGc1egtpYbMzunrt6y6DnHXVtNpr5sPFRfAQWTWTcsu7zwZqnegXDf+O2flkOR9ePwtGKzp/TBQ0ye1LzD7kgrLrrsdpteoDg+uucDpz4Xfe74IGNNn1P0c73cNOKU90myEbLIX0zdpw/3lMAUzqGFE7G83Gc8FhV1TH4xuMpRyzzPJKT+BwsT3vDp90dl7EybNZoUHFls2slyi3tqDrxOaLvrgcnTEbnyhXU2Nv8DPjCgkakbOGw5l4K2ljEfK3ur2VZH22TuoMG6s0G/NohFYrjzHYgO/hAtgrYOmPKqDjppvV9Cz++nhwDtiedCQxTfdvN355qjNko/E0UDxFKR9UUDsol6vTBJdv/dw==';const _IH='4757c8b81f3d20b425ecf752b7dc3eebba03bc67f592e659eef4d16e54b8eb18';let _src;

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
