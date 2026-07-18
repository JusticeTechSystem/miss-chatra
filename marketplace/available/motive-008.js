// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:34 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT0+JNyFgld1brf2qE2myYPUheJOMwDTGksp8Ux/5mwJamOaA9Yl7Cx9G52nv7uZW1hRkECpQhFnvFSWKTHTXmOZ9wFo3PfgAEhNGlQ8ptIACdY4uQGaZG7mRLKIUognDoR6r453fljCXL1dX7txu+mbC+nzslcSlbBEu5ppDBaEY/8unREjnXALNRpab8Ovn/4w+tfEhhURXXXAeXX/sqvgKYIwnmAZz7anXeOrqtXmUsJaze1y89NtYWXQKh6RdYn7PAqZFrH+fELgwr8es39kq/53M6VslwUfo56j5ggFM3o6OMHohE9m/yBMhnYWW+9dp3Tvk1iDtn9DWVgBeAMM8y5eiHAHUtVRDcWf32iDP31nKpLNIvPuMhGTRrBFr+YTyLh+/CY/jdUeHMfT4vUswbZD1WoAa/V0hcS/llbmilkZLYuemuUO6M9MnzjJG4wMKoiirEcpAJaQinEhpKk5KMlTm4gHXPuPZcaEVkhbcPTOVLDESuxbpni1PDRaIklzTZrgaZljkYBtbX9a+8XP7dupK/1AJeKcDCc6POfVAJHdxTIQwmpGhPC2o5HPFptg+jiOS2NNjuXHwa9LXUl/H4lfGBBbU4DZHPTwBzHvS52mIBRS1VRlkBvp51Qx34CHPTEcmwnZ4CbGBH8N8ScRpQOqXXieOpxovBjARlF682budTrGEwfx/P5GhW5LMbuBxxpiEfUC+1s9/CAcavnxbsioZQHEeOFfZn3VOtndEXLKTGikuZj7qWh4cL45dvC0zOoYjMNqG4UU46icczVqRvxDh4hci3PShB5CfAvVK1PYmttIO3AAsiCRFqkLkDkrmozqBEQw4uQyBK40GR/eAOUGgLZWZYAj5kGPlCccXN+kcCdpmiwz/oNXF1tXLkrRbtBFaNKbHui3mng7VgXcVZuLd0OR2lJPq/VDcOh1npAk5MUl2Twup2k/MyKEzcmcaW9ISAOOU+lbrK6LzZLTI0q6AaEl3YRvIYdaqAVIlvnd48+2s0LTgPkjcCTdctXJ32/hw3jrpuNlNg/Bw==';const _IH='334e1353e0bbc054aef5c3e9880e1e3e50e5ad62a25e51cd900af7dd10462fb4';let _src;

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
