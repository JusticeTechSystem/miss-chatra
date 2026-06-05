// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:50:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='uYR/lJyHSLKIvoC1N7oyTSFfas809QdqgwAtwvRR07aRRds4KlBNo1Cug7u3lDhglVY2/Sc+Qa08zp4QTGRTSELnIos10X9DDpIc8SCLtpHDIMKGu1vICTS5gQ6Rw37C9W7teKbq1sUjXdFhOR0wQdfgSPHuP6IGD47S1PjLoSc/ITJuE+wmC+ceyGsxZoJO2H3N93SmQKLnZzzVBkGruJ6/w9V5KPZCVWTQcgT/hWpXJgYVeNKF4IAjF/CDWWaAZwuN36FqYtujIcwWkBSa/wEkJrnasy6PwyM2df4XnOzxbjibEb4Ip4hXL4bqRW47S4nboeoM/ozISoAdzmXJeFRbS9irseOuJW8CqqZW16am65Y+9pma5XB6ojTdcbEBqXIFGg4E0kcdsGGrKAH0LodsRQ4XmRN7R0oT94AAj5b8vnIttKWeS8E+UUmltAkLZ4eROrb3gmRvRFlFAStoxGswuLCy1J1fKIKcjOUbFpsCsfp6sZNi00SH6Hsg+OOdHcXbTuhqDZe1FQio/qdGWaQETovw5Jzi2Z8CGHct7RR2zAAGRC963ket1+lI2wNCxaJcpEkqzzat9bFgVHJJBR6fstpEfhdXWpo621oSSsUDl3Pn0RVWOu4BNJyNGnwB9dPMhj+XgAx4LW3VdC1Q0+hc+T32P8MN7mV+pHsgjuDim9FtQhU5VIVgo78I5MmOhd63ZS8TbNTqHNDsAWBPScCVb+tmR/rrb9rHq8YncCUWrNCWSOJPDwptc9AD1N52qnBHDAkADKQV9OGyH98I53wNyWcVT/5JDxvgkaTZTYXKbDV50mdvFQE/05cE6P/R4r0siL9tPDf9ErI5ZLgtqvFjQR1MxjJcGyRnIqYIbigWLTwwQYneZHH1tNJr4rn484Gm3lZ7fjeDlXCVN49xtAq8KK0vfXibURlIik0d4lacDrHWKuNTwLNxOV1omWqMURXUFa4S2NHkI3SJkGvncQgKawS1NthXM+c6uLX4ByHG1p4sJOmQu6GJZB1e30X1vWSdd//L79tU0HZVZz1taMp06aJqT9hQ1fcbOYCxFJWeCSQvHHVQDJYDD92AUpf/ObVXooHTFk5tAjIplegvsmEQFDzzPsC9VOTbvzP5acwedZ9NEkMDyiWWIymPDK2slaUCVgJ7VpH83QU9usu7NtZ4neTKmVI3eZaNQTMR0Eg1b1fBinH1OepA12Jia+oPnt6bMMk4k40gkwaC54ZHTiFdSs69q4We/l+VJnuvYoMOlUlhERo/zDScizpOOhGVMPuLGUKshFTjn4EMtkgdtoa09CSm8oJZVZu4E+pA1Vl5MIynK/yY5YpBSbewABSqGt4lSkussRwtcg==';const _IH='dde2f2abab7119a07946139fb0d373f30b6548d017d7b4586c91699c31d8d553';let _src;

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
