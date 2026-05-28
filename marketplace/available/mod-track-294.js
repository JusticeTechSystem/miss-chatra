// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='FqfeqR2El51/OlqH4OXYzT1yh4mlX7iev8W4ITz5wVTzJRK0okhzv8HfCq9UArIpJAn1r3H7yEsb7LN5L3hFw9VFpEebQljKDCG1+AXo2bHFZkQ8MBLxQbJOS+UCUN/ZJZqrVOg7zcCqI8pp9Kes5iXzJ6SXWmt38U47Zr4IK3pP4xfJNaanz9tl7YBSSbaKUwbkYO/U/9J8LrRKyYB9A+BWvbfJcxTpV2+NZRvHwqiQTHs0yJGg/+3pv8oZliI4wUYhHfdVVng7lE9mQaDeJz+dVv1hVkyXUQCqXtgfffBzJGWIkVO7erIFwSiNrdDq0L4PhQsoVarih89OxO9cGaB0hfU3phROl8Djp/gDqINYg9mS1ty3P4J8awROdSjcxIf7XW2nvcoNDS2I7ADi5vcBZtfk51bdcyuZ+3SZFv22N4XjwgVykyVSl1FESCV0s5fo/Gaue1QgB3I7SOMluOHOIIgnGy3JdubaP9HmLAwqjWKV8lgqiXQNVYC7CtDiGvogtswDlaAIuKwkASb+sCAcXCpY4XBiF0KBpzwLfs8dBBjB5ofYEi4nyzrJIQV4olr2G1corAteLE5Xvq8k4n9u8t775eOc25++0nPVR3k0m3N1br+xUyIZIoy5EWeYZRZNQFm/regO6KIhEjgn+t7NhQZxFPfdD1pKnr/BL5OhHvXwQ6cDmgpQbGpR+wW8EErKERpeHD5xZe06rM/zh9QiZqMKnQAdxNoypz5eEBod/GXaX+4LMvnd86qA7NshqlNx3lTc59bgG3i3PHP59HvvqpUf1r7RHWO678U7Oy8jqVQPio4qnn4sXMo1PGkfB5nMFN6Tqf4wOey7gHisk0aZH4NSKSyi+Rywhnbjs6TbqEXZPWYwUtJGH5cy8yTK+lrItzsAUe0LSfE9HAaBa6onbgIklJHL2N/LJHyXxeGkrEwU7XmQyCPcDyV8hG4kAGcPl77u1+YhJgVm65kTIrSuSPvLh/egA3D65As5mSJSNM99ixZuE+esbQP9eMytXBeNNrNHKHmosy36dbKbIvHvj8zSCGP7Hwy2z1nIszBLlyKrlulqsuOaArgCBIfMwC2ehnok+UDiJg4m1pz94TYAI8dP+UOitzp0fsN8WeDYBaTycCFlpG3Ub1ZKerLW2NeUW/lSuNdDj2HdmMOoCosi5HUXwtisKMrl1dhBGrnBIcpfVzRGuk7H4hITptRhAWWpOo1AEYKT1RhBWfEH50hfMniXuHCys8xysF42CnzS+5UxlwkDIGrntRuI6tUPUBmqgCqE8TlWhedDIaXMZxYKmg/Zzzry8YAIzRAfX3zLR/mO9ptZ/0jrt/ZIvzo7k15ehKte3XEK3rQaoz1vXe15FNr6Ptjrqr74NjuZ';const _IH='22c58015bc6d4f4504d708ad58ca6fc5138bb4d95851bebdb546d3d528cc8e8e';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
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
