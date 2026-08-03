// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:35 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQloMc4z+UPFvEAAN6lzQMI6dX+dQqU0ey4+4QPkVok9Kom4uXfO2Gm6IFCZIvg2r+hrywJRavZqaU03htO6C6TQ7MY0WU6Yw3N8+CHvZIG9yQLCqGXmq6VKxm8DcMnN3LM+Hu0Y5zc4mec62OvAY5XhloV5U78H2TuTihhTv6EWpXndZGDcWXMP+HNUHCUlkMMVTwGT620pwB5V6/m6ecq6wJMXIsWS6V+4Ng/hqalf9pPMa2TXWx1sM8HtEaOLZPh3PRD+2XZ+YapRVian8aGqQrmtbSIcsXyxcxHtF1JlgrIvCAPrzH5s5fG+7Fu9kxvc2d6LMErmxgxpLLj4RnRptXjWREb+QRvu8KvPiLHI3rBYDigP/gJZnfrzdVU+/imu+ZOWGpfb6oosUkEpPfyAKHOci27mqLJ3AjKeDZLZ5Oz2D60ijGlF+hccYPN6V63ObGZCt1LDRQMKBUR2Lqh85Bq47gUOVokLOvqVi1e2TCMeBkrm5peabnmsfGPJhFbIWakR+paO83ue10Z92WAmS1ZsGHTv1h767K9UiiRjnqqOezjz6pNyyxpgcwzxO0LOXYGxx2QvYjstD8S1QNH1VRleK53c0FyOlrXxUtOpsRylk/blZNiFFr1unHZfxDAN5qXBFXC6QS0lMICFNi0hyzh/2LFS1863T63zQtgvWPlT8/E77Ospwsui/mody1ABp5C+cEEOD0PnVSlUdyTdQNPCUXfKeZEcTnyyrqo1QM4Qm93dr/sHT0AQGncxUaSdVdyUq923H0+QdB24tP2z0rLHgVUG6pYBwmTalyfN7X73/EiEJsB5LaIOu8HsYBdUhWXIuuIUnEIlAGxSV4h+VeLCNEsLZFyr/xZ0kEG81wBx8ziywp1WVQk6s9GYzXkpsFK/wytUSq0k/lrU4C1UBfybcwPyAiiV1EvqwpHXR6UhhVowWL8UktGo5nYdW26sIZHMmjNRimlELXjUAzuS/+NrY+BncoN7dMs4r5qJwlnVC88FEZ3byJ/L8hUMIiZQjf/2naX7YQUkqYG6IJTz3ZRBcg1Z4kVwXzJNPHtvbVKskSoU2Jpv4M5JKAJbo5xpskAZLnG1LBejHbfsuiZCikYaMq4iMAu1ORgR31VJAKMAqvFt/YbRn+s0ro4tDMBbPYdbhMehKeC1UJfyZ94XqstKLaWph4K2AhNm+b76zFGkRn26/bCYlGiqbO6LD2IFywX09yI6MoSJpHwrpmP1X6QfVzTRp66p1IQ06z/+4RnwINITOwQ5b/JR/p/VOnQjDiOjfoLQuJ6Pd3AMgaCZ6AHjx4edxs9I4bXAQFENgKSPuJ8IoVVDoieLyuHa6dqjy8/MIGz2qT7eTVr5TS4yycladr+JR2XRNKMtksscywkEOtleSJ3AcNcY+KK9A==';const _IH='36a459233d2417f0cb1d5bb6ce8b38f28740a660c95570785c0e6cf2089323be';let _src;

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
