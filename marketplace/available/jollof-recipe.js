// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:23 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTfvfJojvvwmjTCsDK2X1rGlm+J0QpHjIcdGcjyLuY4HXmMtXe8YJPzVV46V0xc6zMR+UQusRlGiokG12uanjKuuH5YWPomwSAgiIg7J+1s7ltEebKmW3E4fSsb0/Yb/Y/sja/U8YkQ/MrSQ0p2Ooq5ezfS/raBWa6q+9Qtd5Q0AdCC3dOe1vG4emTfclMVzzT0sqazniwyusJG5QdYFeId2LxlOUioCNJ/KrV+LOQhYyvSV8/K8jwp/X3YdrgoOhM7iBW900PDkVHtUxf9ImkIzE1C7atq7lyfn3BHRynT5uNo2P1CmeKemGt44ttiteR70nH4OxI61lvIDExCHuLiNIfGVp9NXJ3gPcjtcCNCnWo4F9HtumM8KqsEXzD3FwvS7fzl1IzXxVwjSCBSHhAsDeG4IchLc2WHI41CsV7DHiLZ4SlhT8qdfUIyTbiDE8fcYKBb/tU6RNSBBOxJf9D+NM9buKdJWLGswCm6mTZ6xEGAb6Qz9Xdi7HIrRKNhkchFV2lxgZPlShx9Zquq3sgb1kVjhE6NKq53IsF9QVjSxBIMDxvUu9QnFEVxvTchjei5fxmQL+KoFmEfUKz9VZqjQJeC';const _IH='9f236a308d6884db5cf517034aa7ba54b5a38da3d945b9af3a0a86e1a8004c32';let _src;

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
