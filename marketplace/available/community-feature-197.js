// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2HT+awWpMrCvySdV3YHJeLzMfmtcqnDHS5eAjMwLLLOqD2uvDBs7Le75Lo3xsWOh/7GTMjrCTumf7690ZGT9LmDwP6/dRJCojdYKZuymEyOfWgE1BkgxyeXkfYHlBpe+Hq04YpQ1U277HZAUcJzoH/+gnwzPR0N2Yxt1RREiG+RcMPjbVrgYUR5xWuvPBPvrBBaxeNFb5SMk/adKDzDVWaz9KIH9GXO+30CG/KveSwlmepIblP2mfwq4f4HDYbpgs+1MZYxwOfBesIe1drnLiu5s9hvKAGNqm/1Qi+joYoWBdwZkyhHk9KykaPg8KiaPGvlMdddOJVwxz6KsPNhHLpFQACAFzExxJohF+G8iovT8omVkidaSjremorWi4UlRDYi3QOGDdGDPY+JICCtrpIKOeHVtBSUGjiU9MY413gjff1EbrsvxxedeyYYu7uR6Ss7aMTe1Y/sTzi5TrKL66KdAHXM4PAhsX6rn0WdVljD4FQJIQ2NqrE7OPSY/3MKwHk7p+VD3Ch9qPbSjnS1cjQT2wB0SeR+hKngQLSmUlulsk1NKsC8uDBp+HUPqMrlA7kuPMZHFRYzsvvXC5a3WIwHcMCdhNNhNjlK1XUqvgUIWebGfLdOWW7TPa4O9c6MtuYEwWBxzxkU84NiHej+GAVEtXrBttECPYS5VmpHHmjxhw+t3ixa7mBFNsxTKIiS5VyO0EixneegQayKmXcdP55YL3uhpkeecYeL0/oElhAy3Fmw=';const _IH='1d56226eac00deb2530b863e88fe657a2df4fdc6a1a28384b50e7b12d0194e15';let _src;

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
