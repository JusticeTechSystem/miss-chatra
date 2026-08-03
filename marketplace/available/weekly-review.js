// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:17 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQnDB2IhgSxYcnai9roPFUL1r0k0/zXiXsgxXf1ehi9gwZHQ4EWw6lRdLgjokBM2nmY4HWkBlZlWFjUYSD6ZsOyXtjuT7M+VgYWIKVarnCCgNWnQ0CxIwL33r4Jqor7WdwH3mxBvCQRAUk/j6B4EM9XP5ZcZPO9ubM3vfUcnz0dAswZm6YCWnpgbWLnXhJbC114x0WbY+Vjohh3627RQ7Nk1lXfuJIT42oFNwJzjjEXaEM+G4q87nJIuOlAfErLZKpo1sVeci/Es9EyUbrhwy/vbQtgVKjt8LrjGHVBtWFV+U/JN2EfFCk0/wHKFc/zPFWSfzjWqZpW0Dnqq1CNQLb8wMobn3rUc9TdfPnMjgaYHUrcyQICgNJDFHuxf3jYwZ6wh6v6AOMdvuX//9J8iQO5IIiW2bpHmHgBJzafU80Xr3R0LJ+JhzK6BFvxr2B5ei37buZc1fseHstP0rp5bhBPi22VLtBjlvnZ6Za19R2XdoHsZeULgnbRm+6L7SofIrexgacAOTjPs4A71iYiYoW6iBCClyiPCtHlHXNB+Iqp9h2PKtoy3/ipeu28oBPpZRE3V3gBnNEGyrz9iFmRlJqsI7ewbR5Bm9wSsCdVqmX7FeGdnjdHmAz+Kg6DXsvrE+7A5jV0eWPhkS2SlTSssfA8VTKf9k0EmvFPRgCZN6eC2YWLmQkC5BuaxK8HtIxyEa0oFX/IKiDEX1Ssrp9PU9GNFE1pewvqhqqQVxgAuN/M2beIhCsNKCTiSE15niycM0N1w/icWIQOZtvXTripw0x+5kE6jfympfnEzBubpVvaDfu+UQCZJ3/0usZqi0YYahHAOqNozlys/Zu3GsDUIYxHrFtQ53PWXzgP3oAM1TPo0tNetgwId7wosfMt8hY4A9rELgduPWQ+ptbstwcaDAgZeJ23MqmqIXgf7izTDnPDOMi1l8y5a/VAGkx0O7kc2fPSFTS0fWOFsqfG3WQM3l89FqKjSh8gqw0e1+soPFljbb9DKAhzPvQYIwT60NDm4flzDVJw2hZ4ywXCZXY64wEJXlc4ug7Rk/yudPOZhXvakHOjc/TR82G5/NaysNgyb4dqKQLPv2inPSoaOTYgeod7QdBHr3KqZzgPgeCmKslJj7O+fkbPXHUW6INRQnRfoCmAzsYtTFvy192NrRm5dmsek3xOQx3RYEd97Cl9NYn3ppuUQTtGtvZp8TocMzH4HhPGflkDdeCU40A05sfGzHrxunBUyGWo1inOsF7n3PkuY6hAOdj62HJHPufdrTUSuvWZQW/cazo+RZBaqop9MZDiqtSSId1pvjSqaD9wL/mpKvzqZP4CdITKE3LTldPc7zzbnY4t69+uvDKKSgF0OxWQvNv76qplHKIM9pbOuMUw+Manezjqo8AkK6GZEBpSbl/1r0qgBIqG0ZnklSx3pVeBPof+fshDfQ==';const _IH='df8f56460f0a380b55a2d42eca935b5d22b8742977335224f7e4166fd4a59740';let _src;

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
