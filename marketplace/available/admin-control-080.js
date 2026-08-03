// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:23 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRIUIDNCZiQPvY2UpDkNxqKlu4So4n8DPkK+mODN3/uFrU9VjqUIamUa/w5yGUzxbUXAZficTVM8whF5zHDRiIQJEHyiHVkXF1ktffVaunoE9QNY8o446BRHzUfeqT61oIMOaCsxzZWGXKIGHnsSygg2ueZrWhlOHv2UAjx2vlJrvevsfeUDe5kSd+hULDznLnQ8pOw6qOVou9IZE3D5uJsuMvVSwsFjIdWk/bJXNNG2QLucTdZK+Za6ZkuhzhWhlZWgWwGzc9FoBww12MqxIR3cNqOHWAiqZLwPOnLEFvj1tifLu+XqTc6nEu4XJZfOpenCfT+7OqKKDFTpb1GaHO8oldU1Uc2Xg77lxd6zoM811UFuxqBH+OI39LMKMySgk9egxbjBv0keVYT20UvuK8PiwULL8rkEaaXacXwWN+LzOlo7ggFM2vMq9Jwxw4JU99fRGeYaRO2O4Vq6ybkph1zsCyNsYmfB1CIkFm7UVAllV4ACog35q1R6iWkuCMAmBfmcgkgwkXufhblzD39SRKDx1sPe7RhxAKegfyWMLfPDX3BGdkkT6YJR2pf16i+VHF8kOQrF6LQPNZeo9Kh6WZR9VIOBtoHZA0X7i8x8OeS2NaN4Aan69iOZ/GeivhCf9isgQKo0Xvmo3LTIj1Q7bjfGV/el+25JsvWZAQszGGjoYVIhaLlWI1ISnlLyIbXFxa0Hut7jXVN2bYgT4kFmCmIWoF9Xbw0mERbYFDDrTkqRaAOTWLYtutT8kHq5DSAecHQE/Ys6310gyZn17lMNJuiwma8xvWTBAJ5bCORcoV0oQy9vvbsHpIC3Ku5VR2LCv4SUVjK6Gv+xUHRElHJG8dI/M9JpwpYJ+WMYdqobQT7iqkrnTKEcCF8T9BFunvjnKeNTYOOSvn3gXpWiCBqZBfVW/9GQnykmeletl7R1qtewgMnPTqc3JNdB/LkFemz08r02lzYd7d8DXIBB+OxtRlLJQKkytm5brnkdh1OqNYIAERnqjB9vt+kUTiRqb0M31fcMA==';const _IH='a75b564fed89b7676ef4f6f229b264192b374daebd8e857b2d01f6e7ad982aae';let _src;

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
