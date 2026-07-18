// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:16 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTFLFE1KT7Kt6fbZZsqCbnS43+0OqVfkS25PH0FU2lP+mEuiP5Yr6lanrJg7TzfeX3uHGOd1fm0/fsTmDWm5zyR4R8iAMCBqOXE/+ZuU9NxRGvQyYiVVRHle15OfMSSROTTE7wGscCNmyZJsXgMiIjXqmDvWwmBGSzyt04gUt8Oib10uxNa8jj+zTfx5z5ZCQVb8WgTYdtQRUXQzE3QJgGlxJVDO7pqaYXcs1M3iS6H9XXdFB9qKkhZQavLpeOLvuwHW3Qt7ViAqU0gxJ/MxtZM1BAN/jlCzvDZu1cpeL3I3MeND8inukZIRsXzd3WNDKRupCU9GGP2m8CDO41/kMBVQg7SIzAO77aU30bzxg5sq37+6heiXv6njQe0Tc/tB16IXl0feQoRQGtHJue/pX1CBPl9+Bw3gHD5MR6mKMRtY0cK/ldAo8Dzy+CUNaC/ycdj+e4vwhmkt4QBvhRfo8bQLG8tvRYRikjFwzXpGVN60oWypaDoUZ329sFGsaQBpvS1pZByK0pQtdyrSJr3HN0r4J3pC7Umn6KGTeSZezuPBx6kqDexlgoLT9U2QCY4YDZwWeaIoXZweZer6s5UKgy8goAtuEWY3AWdGH6sqYPkk+DtzZY6sIG6uOXzXDUdq5cQ2HbylqAYxiTG8BRajD3hm55rbDSoLClS4CujSMaqQkgpjBYzmUAkCUS4UpL2y0W8ojUwbUMAoh905HZEdZIrwo2IrGg4qCL+68RXa8fS';const _IH='7ed410576d10b24f5a7d16d0b830b3623518413fd01bd98100df470935256e0c';let _src;

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
