// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:29:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='PtIEyOD5BkKXjVBd3P3Hjn4iuHLDK4H1ih6+5i4Cp1HeB1r9zHtbxvw/AFfMjh/PB3xpiVcpo66im+qp04Ws2IJscEo18gjmTmHNSOx0982+snocdnvAEyTwrbR9nJbQnZyFiC/JSu0JhH+VZivJb5/zt/THH4quVD1qURlbXMI6ftqJ/z6+oHf6LSHbQZ6ecUaTJlbpX5Us3RM0885lOZ62E8uHuMzja2pARLcRxucIggQH4RHKv7qmV08ta2j6lqCK2DGbT3uxs2XR1A2gA8udSH2fDgaqTowDR4/8edXQHnvbcaB8ayxNqYtLj0ksLn1HDUovseZDr862/yDKV+KuvxfLYa1S/9HmQoqcM0b0ouW8f0x5xW1V50e5B2mM7slIKI8UG/MjkfJuudFLMIakIXSh4/q5k0272hl+SO7bt4/3QhnkyXfiGy+T8HA1FK6mlLTH/w7pEHLwVIaZTN5IPIZiwVndocDhtcpjAs2yexzYAAeBK/o++NHJdXQ3oHx6Cdf67BNTmg0y5f0ET66c0SbxGasIP011OxtPwO2qnnC0vmW8fGeEpLIGCGcZqWJ5vDs7ZFxCnwi4k+TzX3gEjlJIH3czr+6410SoOklwk3Hxn2imnAUWxSROnf4WD8ZjPqYlpawgdeyoBM0CYJXi3lgvgwqORdAXwnkpHZEF4kDtVpXEaPkKYeKLEZX/S30b+UcCfmaNdnIEc5SxvvEuWtdCujkokTSXZLwqAtcdm9wiu/DQ7MYpCT7NeivI2tEillmlIFSz8ejPC1ea+8JsmOhK3ZqIhoWiUxvv7Nnv3jwP5F4bEM/jm2PfkzhDEh9XnA3OIa+3pPYYi+GjiG1MXRHvJ3myXa+qLr7T+zsgFamnVOR159ZMYa6wxK0ZcQdINLyyb0bgVhym9f87n3ZCOO1eCvbP35KKM2r9piJDf/dA+StI2gPLD2Qw5i9PgTa7/UVbMwSNd29pKMbpL0urXnjbgAkyLbSPg3N1yK2IgHYqjZDj0h+XlV3zzYogMl1ixE0En+Wher+8GA2lc0PW81weoUVzzQt7zljWbvmXf4vwuO7L9PEoUzlOqa57aFcXj2wbpW1krJeBQgrI2LeWdYD8sC4KuAMpooO5HeGHHjOcrCCK/veu/NXaPvRhcKw1FPptENd/9hS8YTTOjDQ++lB1dyPevIBArgjoy8faOGAOu62VVXwiNcFmoyhxfOUCfwlsZGXiZav20ZWU245VC8w+kX4qNhYB+2RLlWS+f7V2BOwKt5ebBupsJMbYuO2bGI9AoMGui+a6sa/Ht3XfE8tI66CuD0Bayd8ZYL8/MOuOIiCSikpP5U1TTVq+ltHbp4sQULqc6AxLoB21s6S2Sbeu3kdqY/WgW8/4jYdbJad7RXY7VHkLevIjllgRUhbIwwbyaA==';const _IH='0d3bbc71918708a6e7a471e43aa5a57a75883945262855046644bcfdb862eac0';let _src;

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
