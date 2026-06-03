// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='f+lVqQkUHlXs5VEYJLezYXx3yMyXvdvqGMs4m3yiEMR6aQDCGTThIVGFPXmYW2hwayoQRBZRRR1A7Xt8Amm32R6G+7gbI4cNXKfUTa4R4Pq6UsYj5zGhwarobRnyLUnTBFs7aT4M8MIHvi80iHCGXre2Go0XKtrrpkwnCcj2M0+LSzSd1eo5JCGgTYBbASGfXdD+UHshJAdYyofOYKFiSIjYGr0vFSNKM6iklTcHhI/dkfuprFEmuYvq23GN7+c0XnOEvhyECFapq+CxqnrOXFxMNqSOC3foavm57ttnc65gYczHCQdtP0219nRiNdIxGcOXFSi4VeVPCYjSlSHbbL7ZYVXDtmpPEbjwbZkHCugH7yGPl5IECRZJfif6j1glLkPMmwr35zDYkuYGRQkuKcJpmhBYiOECSsRH4S+yuhHwssjm+5w8NsShr1uOnpY7qkuOZ492edK6Kzl52552AO9SY0QjXmrcqDL0PhZ3VxaTOebN6doX03/9DY/PG5g9G8Er/WuGjk6GRvExZprIHLvSfPJRhpkAPYszFf2xM2CkJkgua4kSiPC8ETWHiiZbGpupHHqGazWUHcmotrr+O6WKwzMy012/CYYaRdSdnGSvINRv2U/advd9wvZFbI6YqPD6ChHZtrojah/J8d1Ynhs2rAixdDm7HxWGGBj2QB68F6Tmwag88Y0V3WtHDDgyFv9NCX+fcE1bNKPQnlxMLQBWYUFSZHXD903kozyPSq6SyawUHo7k87No6kp1ELHJ9q7AO0hqdxuwatfKK2/REsU3dtaJNME8ivhB/xlu28L2a45tqCIf+OVbAEsrUCzQm3mhaII0YE7AAGkLmfKPoHOjxB0cuMKoxmy/6xj8/BI1UzrnMopuz8UlOpen+HaBLzW/sr2WEv/8tHzkVMVnWvgmAiUtm9DuXDhYXOf7rFXJ+havcDfxaGTB0hWVKiTWNFCttZt9UwRvZLDZ/VHbMvQuuns/kMKCJ+E36mp0bqeq0/Iv97ngcwb/RVlDTMU1Hg==';const _IH='8647477d7745ea26a28958d015e861a0e651e049505a16e7e74afd7461ca76b4';let _src;

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
