// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='D7GpNhmQ3R4COg9DQum113juOnmKR99zeTriSe66m+KM/15zq5osawFMMLySJMUrE0szHWBM5PLU7wsTD/zwC9VPz1aZkYOdP4WNc807N0/X8U7bgP02sntwmZ9yuyNgnrRpcOmqFyCtr/DWHrBhmbey9TuR8AtJADcupcP2XQ5IoFJlqAzSt4W5UQHYAecQqyvVxJxi1g+R8cJcgK0htwBzzWilWBXVKl9VyhCE/VbD1GKTvLpG2LzaywXXzjaFBsMsdX39jS9Zf5k5redjEsJgCtDMXzqZtBHl4g+lq/s2P5fKI2bmT2ZVO9FQ6MMgOlG3p+pa6D+GANg35ZBV+T6yAYNcloLIs7UWXz3TKs9G4DATi7PFWxBMC/XXeyanUWcIoLj1E82IiiyFvt0cZF3iU4OM0T5nVHv4tgSad4W+2verWpFGe6eSuk5KosI5lnADAv7qSrHrj4h6lKxuLxaFgEqGBK2+yvgPkRauac8OTnUMSpqT54xMPDjCXsw0lc+by6onG2bEiVKByGgEArgQkRKwQc/TqQ3Nfqe0S1qh2XxVmTrAzm9kMk4/aX0qQBnxNNccR7LnpqPaKlJkiQXpz+WKG+S0AabuiDc5jkNhCrOpPWtpJjANS0ULvpZZuexxElFKyfYwQgF4v/TEP+cpt1JlgaXEnil4kJiMRZsNARlURRUNf0CiDBW3ApU7wW3OxkQTieqOf5uJFMhRdV+2QcyBwGEh';const _IH='346e243f392401c1b259d745592cc934e7db76d244648fc2a0e7820d1743c891';let _src;

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
