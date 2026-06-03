// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='bmEK2kwYGUaAzGgzjGnlSmkJd9dKkkJogSidMtIDNke5u+1bNdplZ47UM4kUEgzfrkqSQZqqr/shc93mbNXhOSeSXQ6kBF2m776dUHu2cZ00ZQOwIvcfCt/0XtoObBbxqfV3CClhC145gKDybTFYdzN5JtnweFF9jEH9dnJktdk8Y5ySXACC6WSlaZ0Ukiae9UgTGDaMGZCzVFL+ylH1HX+Ozq1XQSJJmCi7oTVbYRp3xk004RQCaxXskoUbuJdqeLbxw57fljnu7OY9JoCbsBi6ML3FPJHsrdZhiF8ILpdxJbu2JshRVJ+KbvJTqeQHPluOyd6ivl0d8bxaf7aryggtxEV77nSN9X/pmX3xygLtpDKHzEGDMO0vKaSBGOQtI6Z4Zl8BQDgtsqHDzuqMB+wenwJObhSCNKk9xRjTsU3A8gYCiKeVs6yUL/VrBiWAIpkwh9KV/v7hlwSM9YSElKJw0zlsxpKGRrCeIbysW16IAl+fpSzzhX35ER5KhsuDW/JSF+fkAGIbdTWM4SK7MNKSy8ZsC3U86b2+NPoSIeRJFz7ZOiiGulL2ANBv8vMl76snZYngpSjZPAcmZQO50ClEMND9nJWu1YwYfWJHmdqHcJgsSjjhmUeXiaq4J5X8h81PfBv2AfY6KI4FBz0ZqlMUHU+PongcxU4V66bhjxQuCkdOuRtyKjvUKLif8F2wCH40gGxLvbhwiHdzXhY4bzXRgrrBTSf3Pl7kPjAx6d04CpV+G/eOgucULkbPFkIvj4VNLFLxmgIzm7Afm/2cMz6QLQauRkKTCTe6J/1SawCmmVeHeKStA7Kbb4JOoP8L4TEC7Q+RWShMAoZ2CojowBnDTG4GpZYfTYQnJIZs3fJTAU8VKMmNknRMyUuvXDBxvYp1zkljFBm9Dtz7TpPIhwX7HLakJuoRAa+oYLfmylXeeHu/1i5yE3XPBaf8K8FsAD4w90DCeEadd3RtTJbM+9+tv8cCVSMMil+cQdpEvcaSIhfROzSDBbLVvvCAaQ9JE3GSuZEuSZsNe3u5nB1YHXiQDiIOqJpsxo0Vmg4cBTTsLPzjzVLOqEdrF9y/Wi2GnmyT3DJ9KDthbtih35aFK2GJH+z7CY/+PBTkBnJ3mk5L3PylzW5PNZquabmYalvrhwCRcEb73e29S0nhywLglD8q8OfRBdzW1/aE/gy6bLF4nSfFvLdVOXlpwgE4a7NuAVBwe90hSFEkScyWOwaDpl4dkoRV/VrBWa0Fm7MpISLs4eQFU6/wEpeNPvtlF1CU8oy9oItg9diOEIv2CUIDDWChRGrWGzN7W2WEldF/ESCp6j8EcqZyjS/UXURLCPV0EN8niAFzfscGaZ9NnrfZgfLsNQGSUvmQD9ghvXiu';const _IH='515a447b0d936ea441bc61f37799a5e00767ceee92852084a405001600f546ad';let _src;

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
