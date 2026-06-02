// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='NgPXrUHhW31lJGy6MOo928euo6z2jQK85bertoDhTW3OGcO7TGEd51ZiBpkYWtgCa4B4bqJfOG0wmO9NaHpprjtaRfoAi3yCGHcK/Llm4LAEfb0ygVOIzA9bilOorbqTR/NFeFIRFkqYHymXy3YA75RHhTvWW7GKONMIhNBaxEG6ET9PAvis7tILuCOo6nKyd9TXdDFnv71NBMg2B99LuzbkKP/wdUab1Oaekb6b55rhl22qMA+bSg6tlNyudJrK+1Lp0Viz3elQtyVxb8zreT6B7m+AIY4OQ0AmQbOK1jft6NS762FBrwyai4VleLZ5kevm42tl/dxBgvLirVzfMLm2TsW/Pr7L6O/gOZ9JMGbLRImAiFNn+LGwInLIX+IUezxDfRFR+H8+7qC1vxLjQfx/iTDMqdC1EMmFDIsu/OUJjsCFjzs/Ui1XISwgV5u0qIISy95qx1vVFL474ABYCB8LAs5M86G1sivW1zH+B+xZj6dONre1aCW3NODZrbG/9WML1L/lcvz2L5wiifmfSASH84lHY10mkIYZFno1BJBaVvAdiS+74jKdTWlL3wHFbwLPlLvvwVYJNfL9F4l2NBpo+UxaPOY0zosmmEBo8fbL2Jd+FbBaPWO7shKCqLlZMs7k/YRkcKgBTJ4f5NCxQDzJTTWEwClFw9JZ2+qcYEBS3yoeOLzFcWNSCagjtldZpXWcJFMA3TKk8ekGlbFqjNxCy8RM95cRMB1J1cA487k4uXu4wtD0v1T9pFX61hlpuhEi/qAOsmznxYUa3M8/VsXs7YSIXW2qkPPhKp/5MN5oaH0oMxbkiYHDcJDjAJKr/T2+gw1G5kbgUPFs/KtrZNCI7eT7hs21auda6rpe5WaIjvfCvvNQMqh8Cn4ny8lpdNuInSJrSZczT/lFpfN8kvqC3dMxwi0Zf+0WhrnwctddTmHQ8m8FeKYVwnrzLSkQkuCdx9DYMwenKwm9sXWwI6t8TYxQzoxePRFhZV8TN8TKMKJFKyAY28Sc0OhEOdoinHTs8hWzrhvBZgSs/4AC5IDfG+Y4PEuWQPQEU5sQQRgDPw==';const _IH='71c66d143875f1adc914544eab301c74e523b4b2cd8bf2e4aa02b7f8deec3f1f';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
