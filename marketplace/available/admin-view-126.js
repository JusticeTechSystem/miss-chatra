// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:45 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTlYhiQlQPXt+FR+IYd2WYQwLSpHUv9GVDaAejIcwvEfOLoukVyMGc7j9592AHLrPaACSLAdPzfLZhJDCqQ9vTRvfITy+r9HAUNYea0VpjIcpXYabYptYHPaPAlRvlKbxVJFq2I21AYhkUeCBYbwme0OcTW+7+X0P2EDiz4DtriJShrDkh81sPeAM7db339kqvCjXvSsjS+Rq/TLDpgt83AcknzIkt0fLtHxAl3D8Cd+jeawVl7fQy8ZYmxsCchY43nXNrNDPBpPUgwoRRL79jqBmiMR8qomorpoZIsep5Hev9RQvdmCTjdAqeKPTxnA7PFRy0E1BfoYguyw/Iqpq/qXSW4C1fNtv9mHWKhPRD2TfjD/dCc8+urnWPPPym1wO/K5nGszForimlEzXigTLWvJm1uKTeVnuDbg3+QKwHilWPp0pv4omlTKv9CLvH4TxnM+Ky9cEHHz5JQZhzjZjXxwZRltble1VUtksm7sVEwexBdnbWr5oeFLi89Q/hHiJS78oDPAzLu5tII2uv1fZ1N5vXepsoGGScaAoZX3etCy6aX2ZTotWBQBUgIysJiaINDREzx8v6Btrmi05rhgZsHp8EXJFZP3ovWmOywL/4q0CxRMUs0xRBLjNudbxhuUW79wQy9ynrDxBzPf263MlOz24cbqEQsKVdXDpw8UiJfmGsMFhuJwK/vqII9JSIVXJNEHRoq8aRMKCZinp7qBSIZojO4+pU9KD+m9BiFi2ValMmqBfjhAyfy9NKcBGPBrgYJGKA91xwXrcPCjHDdRpYlLap0Jm1P9dM4t7O6a82YxXF+h+wKzKUOmSK3AUa3i7JU63rSINCrhkbXEsNY0M9A4tWLTM5LKWKKBPYEM1dijuMpvXOXYN+i+2+OBW9LZS06/R0kSl2vBDIBNI6ygFQ6eacI9FbVVH0S8jx5QcI2/b3olORlQDhCBpfZYA44qFn9E6l9sh79d68f1XLBNz+1IWK13qCGaHLPNV+glyrq1t4Hug==';const _IH='9229b6a198e8f38f467636cc83067da4a88d42e77bb63f6a176431dc836d0fa5';let _src;

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
