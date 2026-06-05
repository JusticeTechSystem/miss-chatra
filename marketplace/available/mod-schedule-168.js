// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='x50BMlv9Bra4aRRVjer2CTB71z1Q6JLfIrX1ZW1H0MNoATnQr/yxh+wEYE4q9WA1rxukEk/iTwaZZC9d3/SwknT4DB2mcXZDDyJxTX7Hd9lyiE3Qd9W2TylPsbXW6iO2bOaf2txYVEY+KPbXkyF1+bCuhKE3+9tDv4/f3OHPVHZGud9A6fw1ejMtXyYG/sz1BmqhyHv+oY2ZBWp/d+Ok621dnbQF0oO3Zqxdh+vszWRwjxng7xLt6VQ7JS7twd3JAb08BUSrjwxNqccMg8gVVrFOjw7mb9o/ngnn+oXYybLMyYMwTWuIm2SFWbaWVFJYsZ6wEzkdT9zc40w7BYnT5WSwRNfqdeN+Q/Hw+ejkDOezV2q+0ycbv+gQ61ZxuAIJ1TVSwHlnp6KLo+9925C0xJAn3glSw647aD+TkIH6RlSJ9dT69teL8fjoymGEJIvFCoMMeNgZ7+oAOcxiorxHQc57P0wl85nHmepKcK1I/QmFl6OncUFJPHT6w5uMftRx7deAm7bNuuD6Kzr49mp/sZdprSArLYfO7JcDJJj+Hvs6ixRFMiEPPxAg983Zb9+HNNagqKAnBxmojpd0uqlvgmGkEdxJcUak+7pTPLgzivYlpnl6u5FK42mp2XLkTLR05TWHVvguTFV4NvoVm3TyvIx0gdEKXuSiXiSDZd/MjfwpgIZtDLnCzZ1Sc1646bRClWOhLWehhq4WVq89xInO255Mp4bB8iF8OBexo1S/CRvnpkQVsQrutBe3LZVoCVXiVGFZSo3LgurnpXBcIubbRNLuNJ/6BRAyhNr9u4z3FFE0wMBvOSi+hnH6yjV1u7RA+PWTuTUxK5VMjR8t4RZcFgBjkG7mhO5qk/xMBqIDPAuxaQFYA3Vda6AMFwESkqiqPyvYbxiud7CwuQJZj3OWmGXXQaB5jFa1c94e31jOBMmR19/UrDsngxIS4DVP0mT6dGMuOoHxh5ew9GSDGzgEdnPEG0wF0YS/3EkngGsTOA8x/NTJlzfetB6s/ptAu3Pfm9wHF5nHwI3zWJ/8dEBRepCsiLskLZRubyoUhOuzNBRElEe1OpVxVF/rOFnH02BYBOaum/zF1oaI/ri7lODWe/TYgMqlgYkw1W4yXlvQ3Tt6dfkjxdupky/a44Vt/f8vwP0oWCNwoond1nBZwKEoI0Wb/IlGKk4tj1enqAfbhFlcrrUJW+q5/kdJQCWBdo/S1JnkW3M47uX5+SyOghw9/bfGUXycW7wpTO2wS6EMPzS/K2unkDV9L2MsIWHFub7oHLNVGVLlq8l/DlUZ1nE7MC5s/IheRx1wz9EDjTLN2gEzN4Sma4ofrf6WlIuZ2aq4dga2gDbquZabKlaTE9oTZcFi51NylwqWz4ghJuSBf2ZcTrbkelw23qlI2R97ExRGGeqFdIb13ZSD6aZf';const _IH='9f4e8e237d29e5b85f27d2ff53ab0819feeae61f2fecf642672861b9fd64a61c';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
