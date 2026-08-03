// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:57 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQBYmaF1I8BF/KQ5um1rjxFX3QpuP8+nFKmopDv3dxxtDT7sofZiGb6NZt440cnP0MnVc9P6C8e+Si33jMwUJm1eoCc/IZLwR7vHXIg1hJFR9+89NnNRzsIRVMBTAO62qmYaqTHtUKrqwRu4otEikkKUtmtTQogZslaQOP6arJkDuXttVRL9Mz66N9YyE1A8XwN6EbrQkhK97yIbd9cbbDZQULqUZwwLwzkGlwo5CGxlf60csgm23l0ctzNgPeJR6zLc6tFSjm79BsfYwlLqlCWz5qM+0Gzcg8mmVkWcZbmjfkZlIhmzwf+mQ1eiETLFRGycYenwsnMc2eavbStagRVEuOMmLo63zh4VLlDnd/QIaGjEvCaSo2DeNRGx5ndy2/K/tNxJIHc0ddMSxfV2o9xF2rcF8k/9la27grXV5moe+UN5q1Bma+/RdwaV2aC/l/XZ192BSKr2H2bnjZW8MDqy7BDnhDrjm/cthzLTDhmlUvaY3K/hpv+gg4yv6SJeqlstwRhkzCzLDmbtLht9I9wVf/DLi80nBE+fPvZV4GaNUV3n3yye8S3/vqkGmSpBcUxPSvc0FBu7Qn4HrPE5s4jrlJAmqo0zmBdhrd8yZ9tNlXDydG5jun37uzCuPMajSW7iR0Mh80bmT15vVzj4Zb5VDEn0O1sLZjUt2CcfOBgrLn7X/xbwD6CxoFh+4M9gnEJVJN2l57ejS8V5Ux9IXO3XZ+tvHHWu2WhAnAqJIc/WtCCaa4SyxNFvCcIBqJIDL4xGRj5ItyEIeSs5xix80zm9445iI4yMNZsrGTCzRFUQ47vHgherW4HfeN+0TS91VWpIHfAIUgYYarddpNPjgcqebvilwLkqwbG/BGIJHrDAQOgfoKPrBPAt4vTHuZFgl0ixb6o2f6tP4GSm7jkOtL1Ycaz6NtOOSW1vQSr0uvaZH34Xz38Sl9FBH0xbhwXR6z1wDs9XdgDIei5Kc/XX/BUJ4kR+I3I4b39R66oN0GRVKY+UyrXOSCUswVUzT5O1exWSmldFzGXbeMsX6u+WWM0RSDCR444r2GGMS1RKdZpaU64hdlbfguj3KYT7IzSWvXuH9iG328QeT4sgOpGr4/PzVX/YmrBmOVsfbbETLQuwg5sBRgHkI6aExyOg3Wm0dkAGA6TfFaR/nF1dJtANqBU7my5M0qSk/Bm1ruNcaDtSEEpnbIG7TZ5w2fX9PMRms9yM0juYMlPXNWnE0PHP7qlBVk=';const _IH='55de3d842f9c7261b43d7830fd95c8930c9d0c8505092db597a5484991657d38';let _src;

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
