// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='12mEEdmZAkK4j3wmdSsFJG1sKtYTJUePCG3N6Un5DbdcQZPR3wy48gWfLvaeZkKigSLGzMldc1/gDmbszORH9Cj1Dhor/bg658qb1ErCHRSm5zQdDyV5RVWh3E6hQIDVpspUiLwfgcMOLF7z0r0NyXt1ep95CaoJbItD0+aIieLx2c2gXY02tsyyd8FK3RDeFcc0vds0x+MZTW8aipwC5CSfKtua615jL+9KFscqLCp0yMbcaD0nOqoyDGXENvF0YZGXk6fyIOvCbUYnST3UjuvTMazcImfyT1IKxyMoyCXqPYsAaOcwmal+aXIQ7D3DdoUqF3N8TBaRs6ISdaD8JI3Ck9t4bPWKoH3cTSm72zmdJWNU/OLjT7JWIsiaZvKM3gKYsaXZRS2xpM7MHBm5YJqPhrUzIC0Nz0S5ptxwZP2aYQ3UDibVnZL8rNk42tGHQafM2KFcAVZEusYrJcgW3GfCPG+mg+hmeww1ptYW+GW45ReV2A4XJooNjwdGYVzLX0sJ3BvicH8IsG+N3lO8vFdIqObdqxqu2lfNdAJvsxcigE8hGH12gE6I9IOt5EUzRCgdytgv6cK8f0MGliKZ1+TKP/kPYc9AJ0RKdhJQgK60UWIY4LfQiUHm30Zwpp0bKgs7dtqvbwtiwIiAkpyfxa5XseRO7RdCx6msMqwl+SKrER7SaO5ZfNcpCHVhWNF0VUf2bWpVMXwwclJEGAW7v9hOQW5114TFEBc8acnV6Q==';const _IH='c26089e9a4ff1a507b2b983b420d22b284e98ad8175538e55453b44b2e831cfc';let _src;

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
