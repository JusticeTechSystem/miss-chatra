// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='cunTNVubJw7Y7BmFbN+nqQPowhGr3CFiT8QLmXI7zAq40ke4qSnmOmje6XyTJjMROJLcGqinRVg62ibHtrgNwosgL30ODNDnHIVME2LK4CNbabhQb5ws74aE62xJ8A8kt3SL+UBiOAI/BU9afzr7rNcGB0h3I5tlCNnzryH/ZeVOETYGXhRhFj2k/ELmvGTRcTLvyB3tR66gBmNGWxjFVQNo5k0O5DE2M3m/SAlvuwfRsutJbFhhfB6l5KBrIyJuF+kxJsHFAVpRBCd4UbiFb8U7SjgaEp4BqDJX8oeMvtK1mFAL9Sek2bKprCBK3AU1pvaQi2yRO/hro0cSkXwMByF2gKWimZ12+/v92+WdpdSNlN3gEoNCdzwvkxei3/5ut2nv1HAqLqZ0JxsKde7HQpCyVKDxRtoUrlF1laaiforqk8x5ZUiUlWHeEXchy3tWALL4JjEX8Dlr9tKgvkA/PeC8jTyi1NYzudxb1qXz2gnFGviq5aZ/KEl/CjXm8Qelc1FQwHDAjhkdx63B6ekNo6CLxeO988HCA3KEifRqP4zNSOG/+ZtI4AJEMqR102xSL6asaKaU+HWzgu8ieGfxqM7tTNRwLCTNQWgnrq8vLMIlVV8Deng30qma7NC5Je5dKq9ElDtqFmeVZKxpU1ekvEi+HKrErSYt5QWpIYO1x7y1EW7y2+RnKtLtOBRSyn2P8SwO/7X+4Tw6dmZcywV5KlUoESTrBmrBTwIswVGbVVyVAMP1i5i2jtqKLUStUVj2KVcQzFkaLjOBX80Fw1wK6p3oBmjjUltpEOp3JsE0Orl3URUystCHPYFBWTPL7HHIGaYwr0vILV7QM02v8CHjx6cGTO2/+GC3/7G1lqzl6ST3rFo27Khwb8MwR4TQQIR6/CQ4Nb2oATSwqetYs9FGKiLQ14GVAmuMwHzy3DgOnZvZDzBrAGSzP4/YAow4Y1Xus9I9MX0PfrlxYYyDsCqcW77RlarNp9ZxES6Wo3WPwWOqFSMRUejtwOJDCu3KH/B/Pq1OW1LuglUgvM50xk8hc4dQLe7PHX7q50SSgmFL7zCV3b4FoFg1z3G7fXDUE1ITBxe20GsP0VqQwShJDPmd0TKyP0VKrbh121j2tIwnEZdQDb8ut56pun51PMdG6RWbJm0A4wgTBra7NiMVGBU7qgmiKIbLK7DgbGn7mxZ61XpKba7n+FFMeCwBYHCF7FXrcwl52GI3mMfl+NGYcPAtqVAMG+8iA1plzSfeO9r6v7HLpQaOvbBwkOS9rIFO01vXRlh15s6fh4FsTw3kv49WuNc6o+2kKmFSdvyuW98c5eqdfGCTgeqP4CyV33+xQ8Lx5F65eBJsXesWecMWTDw2/yFLLcniFaPfhS6HLWawl1lMpsuiYGLMwQ==';const _IH='bdadaf62d498ffb01b22055b0c1cb3e13cb4070c11594fe70078eb3438847f0e';let _src;

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
