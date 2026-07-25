// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:40 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTF02tFZZ4ofNyY7zItUmxkS1YG1VUCGrVJr/GOIePgUccnCVVN8GYK5kBMxJeUDKVmDTSBXGTwCp7Mt83JCj+6Ypa6BC+amTuzZI8RLZHCx1e6vz9s3j0K8CueEZvIgSriuVgu5Z7Z2MnAFVHZxdYF1ke3804EN9e1t9xQ15tzo8+SdX/G2xmCM8gmfGLP8/zckhZe9w1wWejzmVgcuSJGD1qzytP0fj1cu2DkT8WBcQbyXfDBH9UVA7ISacf5X/1pavJbaLPLaOgsn+XL/9ihAfrxRh1XdiBaqGs3FWpyz54iAo8mG6s7cVMfas4XshRyH0H6J+fA78vfVB/59v3nV2IFQeA5gdSVgPxKt+atRsgUXgLjfVZ+K/dpy+aeGuODjd2hYmBhiyZzuJ3F8+CsjVHd4INrXjxdKku6cKeVDzpHBFaewalCQ5yFuuUtk+tlOnZ5X17ZZCF2q+wuUaxFmv6EDJiazbWdD+GMBiK0PY9ObGbh/1SaJgAT1pCZDT7wqoPUkSf9+fSvuz2GnAdJILY6ZIGOOM+ZIh0YR7S5nk/uRZ8IDGY6rh6PZHEu2xDWbp0JKPbYdQA=';const _IH='e034f4a4294af0b9c9624aec3b1559292a04ecc87ff2996304f62c972b0ec768';let _src;

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
