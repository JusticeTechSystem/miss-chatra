// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:13 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQSvdZeQkKPpoNiFZN6TZ2UnFXLOBDtV2W5Xe0p9C/dckXmpu4v9E/1W4nghlOd0C7Lx38AH8bUlgtMrR2eNx+GSUPkndf0FD0xJUo64jPwbuzT9aL0x1nNslaAlIwNQHgNHxYbi6Yl/2BjC2OE6amE0EDGyNJgX1jqc8qwI92jDaDZnbD7Dhaq16msuo7p9LpW6BiWb5pXlFP0wyYv3LgP1ul132hNHo4J3VVS1Sd6+D52Mcw43zWHfyMa4KblVVG3DtuYpdNprLx0M+oxd9zVF+gRlV6Q0B+BbStwgRQ2HYlTTFcHDYNUMU/qfntBwiPRwSjix43HdmG77D67jMKlamlXTKMyRZ+FG2g0W/iJa+2GoTo1j/9FMIlCY0wSJ8mXtK6csL3e01VRbciEzJdu5xVhm8p8E1j+fRpbO+SGDmk9iWkGnC433mLtLtY5+DR9189TLJdBdqc8S66GWidSvuqPARKyj6loyenjXOY+bGSElB1che5cxkLsN+vKrCOF5f+9kNSlzTHqDxXToiGgc5v8zrX94tYn6trO7EXXyPYkWsmuvs7x6nKusZdBANm4bdiXb5lA8/7Kfjs07nRYUunTG4WhAogKqxAd66yNBRotF1Dkyu7+r1xPqo85yLfldayA177o2gc+3RnQkY2norlo0B7/BmzFqAc2PUbFgt0yebsh/eQV';const _IH='c5b26c98f5815bdee4edd63836415183f5c7fce1c087c9cad48b67b7d740ce62';let _src;

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
