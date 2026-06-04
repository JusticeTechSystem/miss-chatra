// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1uYgvIFWKF6UJUuh63XlLIjIkwrlOCAv1hS14m1C74+gUps7ZYXB5DRn0SycNpp2MfDh7YgMEoks80LM2UDuKFeG77Xe+j4HhMFEqXTFyUMctTHgclHrHhcPWv05feZKCsBPZeeboGKOzul/p/3OyN332ksLYuuKN6i8wq/E4jrXBY5vEvI9+OsLr5U57Q78Jr61yI//YlN12T8JT408aigGTSs4UnEhC4ApT/Nz9JGww7KdtDKTTLGxtXHOHzGs1SbdjSluK0E2XT1Wv+fSdrclTUub+UkM0/A2/5GDQMB9m8hWG+sNC8VgKcPTW8O07OK8mk/zBV65jsLkyiwxxWTCgLZ7EwYoU87O62e9IWrEinrT/QNYM7S47EMTa+Sz+XBy6SSwypdfIvodLN2nyjzN0Jkj8T0qRGUTc9T369NA2M3UAF0NtJb1hv6fOY4Tsz5MMbomZVACWCLnTyyxNO96FTaD/aWPC9/A291mvTfVkjK5ovhx9+oSFIsjoMfijpBA3ZH+Gq1rYfpdhT7sYFXe0gnCHacoKzHNWCsfn20G9Sz7ZJ5plbsEp4C6CStT41vu6hoq3WyT00R3WTKdAg67zxAFCKD2cpHnVIoEOnETA66ZFZtUxcsNoqZejiQVmIkwHjplRKVPTR0QChiwJwXkO86QbK+RwHo+hSJgMN/JIsl0Lzd3lrY6EumSfuawo57l6SYKP81cCxPZBiMuyWlbEyFONGBpI90Jj2cqs7Ga0qyP/asg3U+RiRMatMc/aTlEBSoDOQAf2r+ITmNeKY3RnjhLG058QGHyuDvxpes91eq6IKsg6dt+4S9qubbCpflosR/YJx/mPcH3xjDhzR8A+XfE/jgIhJ+N13HoyrafttrNrJTW5O3hwci/elVoP3k31Oy7Oy8boB1xiyt5UUXCe2U5z3Ky7Z6ZmO7eRWf++laavVplBzGcHLL05sJ23S/0UxDLMFDu/CEWrfHdadrrv+qZE/ZSiMWiB1k6gZqfiHHjpTNCoBIGJVHmyR19X3w1Kk4GGUS8pvYxl5ta5hXn4+doPbx3o+d2NAWsqsZs9pPcBXIOaGr64uaOMVJzvdnRO7NrtRu6GcHJTmPK+/NYa7JcospC4M9CYskANx89YA8kEEmhKH1IO5xaJtvi9CJtHwgeKnYFrxYWru9CSFE2M89Yagt4JHf1NgpoJ5OS4NSZvoegvyMKUjXz3ucwx1GNAQFHfG8FPYIa1kU99gJjBwSsYUeYC7lNbMFDPW/wfnvEpaz7vALN8eU9tm6XE+30QSJAieqKzUxDT6c/6WrnXddhT0nS3rqVoeTngxweEXiyrg1SJWYGwlquCd96gCqF2C7BZx749zHWHWLYPJPaMJKTMasU5D8hdIYPm6QKNXtOEzgl9OZpR6WNZU6Bbsk8yDAKC87uK2bpgAZ5yZk4Y2Dl7okBk8r2AsIPIc7rgwnL5h289iNIO0IjdyMzSaOeLT7yr4pXGRanRSsMiRUsEvSvYA91g6GQVc1Cn0t99axDMV8LbiNHCgXaLtclZWOP0ZnbO+4p2K8U0JurPoHwHimedfJbGqKzMxg//LnfkOx7mc1n2X7Vm0LD7zviOtWLb2GRvQDw3UTOqT5G4c8iNZUGIu4cMdmv+tebCN4Kddd5qlhK9TmiD22bf4/ZRRrwMujNIjQIFQZR1+ZEoSrrgYGFVOPg5DtpMCgQ9GJMbX+ieP/DPvCJ4fDkrukkbTlwdu/dyqlIAzNBP6lDnMd/+gMEGz6pWcDNayjqeLQtfyU8qHj2rDvIxNnoFL/putIvEm0=';const _IH='624d5898e8bd1414133427df8be71e24acf81c7f0fba45e3754f6b83f0fd3fc9';let _src;

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
