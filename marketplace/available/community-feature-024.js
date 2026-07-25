// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:57 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTtUJPjxCumOaHSPL2NHhT9gs/BntZVsyOgM33DLrRHjQ4tDWLyNRnBWuQxtRe0prfSUhR+4PoXoIRCxkH85CTf9520gctJQd59/n1HugYwJCO7FbcbxOPrQI6KQMioqJ51tJul2+pNAApQGUewADlO/uRBvfQaBF0EGcyLoB/Cj4yJyKltiiOrVrp2xJ8cPcFlP+IDyExBtpaOfjTjknHXnQajzHwt2GkGdTSoYL5+WOgqAbrKQjZlRGdBJopth1p7Pebyiq6wT2rW1GIpt9KW/rV3Ld6d7ycjDYJqEyWu23/WuWmkIWMjalhs92BF8CiiXQsSXScr+GEWL1aLXor6kp2t95Rxh9Vc2gds+50eCm8fvyTBY217JkgOR5X2I+V7cnyltzKuEeS8ow4Qf5zNzEwB9/rwLuAGh+pmmfL+Hmts+erQAhQqc2k8pKihFMXXZAvZU9AY1eLGnUM+wKLCGzSRQjlpe1zD3TnZdUvYoMxiar8J5ZkPZJi403UXXnv10odOVgsBsYPQCRRuTdsRo8p85ayjlbjFo0lmvh4LbkXB3QK+0zmncm63sCfidGTt6Pnl/XZKbC90EqxElOmTg6g3FT+u/h09QgX+WpH1/ARuE6W77/OvaJL1t1aEuDCsgcblPxRG9poq2YBGrULumykAHOrfa6HgqaXxIu046344Fix1C+tk/6dtWCsB+ThEtgLI2eSfgLzwe1mS7g/U/pEgobWyVh7sHdSrd01Mvw1r';const _IH='f245783e4e80e926ae9c43a4aee7e2ff03cf23814b98310da03bf391e169690f';let _src;

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
