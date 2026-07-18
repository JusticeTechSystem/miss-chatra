// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:32 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ0bQwTUWRyqGg5x2vIZnQM00g9wUQbjhfCX1h4/GCs5a/PADiHjNl8jQhOAUR075liV+0lmeH0Kc5rXR11wjLDvmAKx7h2z6JhieVJFu1Qb2zuOGj/PzNvid4lTWLNkGhpcJKUoRy+vCXGwoVeb7bedsBR0Q5P07q6sPLJ4RT4vgA3TcByfDIM9oKShKxYY2e7IcAbkKWoyrCUN9hvo9b7wm5vFVNN0QJQ0dtN8uBZ8ZIjFv1tDPTfLIyhAoDnSZdY8Vw1kg1cj5GQ4cYu0fWoNjWn+kfptKq0YGKFlLbEZY+TjPzaEzSGErZVxreilluAt0TkDlixJAW9gCBeQPmmVczqJ91vK3CdDmbw5VM5ITZ4F9KEE7fF531GDO+OOEt8jMJnH62FUzcPUXQ5GEANXIplfoLWDeZBwCr7Q1UN5uZrvbeJfWu1OuwuR/lb/IdBekd0TgB4CH0UuQvMtpxnwt8HDtBbY5cY2CgWfaiL6XuH2tW5Tn7j2ChLhrDLx7qDTqfpBDwAFKNtUerEKkM/quU0wor8y52Rx0epMUzf1C7FtqcnmKonX0Omp6x82GfYCOVvP9pBwimAOjeQol8kQlXq1k58ccKZhEiggo+zqBBGt1hU0ZbxzBpN304xDrkFLVfT9kFcNOxO579w/PFVQnRIql3AN2pNM2NsHwkfo8qxvqhBfp/6DMj3AO3Qv+YM4k6bL+Trl2TV+JB4dmIQpT3/TAci2ZCKZasVumuLwMXvOZv1yZrc3H0=';const _IH='a809cb24b03cef6be895bc45e0d70a903b5f341ad7d8179db982b6273d033684';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
