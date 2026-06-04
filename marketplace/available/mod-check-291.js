// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+BVGe92Vd/EDRL2ry1oRBPfx1c/g/nypki2sdu+tEuj9juQC5l15BndBB1R7n+lOUrDTw8fxwnNoOj7VV3LyXKUwMdHZceudlTMxwfq0k2xbD6J56TYByXYytNB3v6EB3N4ZzUTI2oIiE/yyEN7N4oFxQnF/RzFzZKNs54eXwJNxNzjhzGgNMjyeVU+jIfvYP0gv79MfYg8hIotiav3NGj5dHbHfFTPG45uP370SQTrstvByTWR5xvEedU/zwBxXfaQzdkxyDggY9RBA4Z0jvz9xOr6Uk3Kqd36uySipQ0YfsqxvWTJVjig/xhwi+6EpTPRy22tMRdSNb1m2hMJ9mwgTgkrF7/5o7X+wxVe+joV1jWTSEhPpwHtoXcYe7rTfOPYoA0JEXl+xTC1oxec41DhXw7Vay1zauxtWSDSBMcMIi0O54VLkGjp2VqjAUSlE6Nd4z0ZTLcXogXY1EVOt5rhLVzb39m0V5wFEbxtKZaS5Ox5sje1ycLqjQ45YXtdh3gWKNgHroH48Nc0p1CkBx0I59rfX5r54l47YAhn7QPw++dQYg8fU8Ntsi5N8IHb6/Kc6yabRyj320VhEBaU93QUO0pvZzK9heIExxfi2RKLPJRsvVr9NrznXuf8X8BvEUYa2cbTxMjEdrXxDSsgjnlYYP9s4l6leeDJiHET8Bv/WrQHIEuOJ9KjvDoassd61ydGDFJrX9J/e6kzCw1TaCwMexXo+RpFGrR++Qa1qHuv+17S/T4isTTRMnB2i5IvQ8dsb8nxVeUeVX1qc/O0J/ZjkcFdqmarS2jhdxq3HlYQNC+ZrYbFrr9TAexKgb74lSmuq7daz47VUloInjeuzkA9FrFqtZ7PMbBM4hYAn8ekHe0a/q65BXJdYyG+BeCjl8AkfgY50SMmXwobCZYkUmD+hJyjegwz7FUVTvf5AXYKdL+VxcqpoZXe1ax03YW3zj3EEUKFf0VLgJUPeGsYCzeL4LLD+xp2EJHq86aM3VjwVNOpbGwKIVb43IKTpUIfLCZwc+IOFzVoz8GqGCRDwYR9+tkX1RK6hyUVEv46jBIsU8oqeDerLnsV0fvzLLyXO6nNqkc3+td3V8PkFctY8a73dplXK+eDWsCvlbMhr2es4mmCRuDGjnlqWntpNC1ESHu/XMpZ2habmcBum6tDghdxYcgKUsf1uXlWnX9m8LZv9m8sPkrpYbYsSPpaEMGVBdslTqcl6yx/o+rNXsmH6i7uWrP90NhiLy6B1ZvIoYhlhej4BH8Hs99daOf0+rQiqYKAP8EMaPwmcMrQE3QigIrtS7TCoUbR96NozBrHkRt8M9hXzXheyNF8jkWpmXxKIdhGmmkAe+Ikdja9A38UdMNZ21+UsP1l07hZ0ilbt';const _IH='591d45e5b99ee35b9315da638a738af3a29af21989a711cf9f83d8c1a14e7784';let _src;

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
