// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 08:59:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='l+ymCQnecVvliIwLhqupO1Xi5eQOVfliZecRNfk+iCGv7b/Nee9Rq8yY6wquFr+D05yPivQiaBlqPbhr7UAUvv08lrUkXlCBlRTCKCzuMJMxHJJrCV7MEC8eFW0SHiGg/At/hDLmHst5K+IdgLdBu6FLf+gMjQ6fVstr639LHig4tiM9YPTI8vtDkTjQ84h3qnZQEka+9Tvrk1y6FflOJvlrGduPXJNjzBdCZ4ypQP34qYvuVK0zPXAwDQRwWELeSDq7fOxHedhf8Tuocj4MrELK89CQo6rACwMX0hMPy0YcpPF0K36/sBxOEAvVg5uWMlQzBefEgogTftNBeXThxSow/GoSFpT8DgVYwZEo1qqc71b7O9AA98pu0NhUAIqWeF4WZCtSp24D04N8NcbO/JKZdBNrh0CuiJ6msTKSgRIcSsbqvjMfocpScLynr1f7QLVqOXo6htqwjTkiRlcJLs5JIUfNmc5VEo28CVCDdREqk97T/oXIUO1B/aSgK4sXCyBZRD9tv3hLp/bqQHHvyqHks2meklv5dEE1Dbm5B5cDGzuOv66FdtXdNe2phKMgBvTPKrDzXBSXRFNds31XfLOBRbCbMhY4PPTuEVNXshKQHxxfJUaYrNj4OG2upgwF8gI8WUshmgaGjCwvfTOnS7sObCyBcxozuxJZjzkqXZ4G1w/xSCMi265/B7yyEDZLdqoQVIxz/JZpRenJh723GKAOtWMBA8FYwVeaPrCJKuLKmSbgD1F4tzytNYo7f8xeG4niuqh5dKonbdl/3B8ESmdxlcF8/4YL+JclNt0ySehC2ACqIHrJ19d2rG3cGhtubn5v7fz+eK4zgFp2HeNjHC8clIkjcWWNStu3rChTrkpkIUw1KlveEaZGRRh9Hjc/anFplJoI9GHxASJYLo+q3UiPJfHKV/gFnwfYDEO/BysrTQdhYnjl9Zf18P0RkMr7NDdfPi/DphmNFwGOTANx8rQgfDM/o8gHloaiqoEf38Uh5x9joun7UBxtngwy';const _IH='918bd9e63f1545aa054ae4d17ebf7131c08f37800ceac5a1650c827e7a30d7bf';let _src;

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
