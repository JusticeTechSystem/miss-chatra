// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:37 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTJi47d74jX/FSjw2HOv0EnYb7oRHefR74i9n6T2okHXqLMfd6ktLidNc8Z7bOxvZigAWtWsuJwmJtC53IIaQBPndBQq7hymzDGb+k+dYICfXOF1ItgHnhToB+DXXnNIetGKSzhlbFjo/LEq+xXIv39lmmMOREElcGotDxaXmMOtDqGjblgg2w62PhU38icG4OVb8S9vATW8GYrcCfeqeL7zte4gOt6I8V7diJbfPz2A1NP4ZT31aAFNcVFiY/Yfh6z07XcMtVwCvZX6TNIBgHnoxqLpC5k+LASqWT35JCZkU3Cul5dbt2qzvXPcC1+a5KNF9oTJCjQI4WAiNhbVHrjZzs3ICAJYwD9Rtq7C5iA0EKCYavalPwjqIVx0p7wr7lD16Ymf/gm+DL6z/YJeEBsKEG8Cw4DTCenkSMUsHWyrOOrExd9YwClcimiu3/9ujqVEEWqAWYfmw8EhARuHUEe4CskRjCDc5/eCk3bnYV+iycBAbWf/68q2hPEFgBq+K4SeCTe6H8y6dBSoP59onCPX/kaHOxeedne0bsQxuR3Pc0PivgG4MbvjrmqoQW5rMhSz+GWxxQ94QQftrZDX9dbuHZz/nQIySKGA0fGlLC2BC9HYT1i3yVnG6/Y12rTHFXqYdyQXqxcMPP5lP5oytNKM7LHnGKFFYHXlbUYXEn27FpNXJEvepZZ/QcT3Irm5ESVYGG2gwqZbUeqXu434x3HpSwQKJYjrqn1MSY7LVfF3x6r';const _IH='a19c7037fe20d42ddf77154ee808247152fc2977321ad69ca6255b3441abd0e7';let _src;

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
