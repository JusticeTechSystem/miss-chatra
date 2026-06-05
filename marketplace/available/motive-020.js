// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qkXDL1XDyypCJgNBLSdNiS99dI+Zfe1aFOAi2OR0p0y2dseqx/ZCCPq8rj3zTyTIsRh8AMrmihOaWqolQjmOIy35y+9wV0q4+jW0lhCR5u3AxRfJZG5TtTs0stK4t7Byav/s/VvhYOnqhitS1v0biIAtVwm62J68ks6giAWiIZMNOqVcXTLSy/HHv28YKVOj7Fabb5+0b619fW+MlBANUJ5FfTV1zT6KG3LHZx8KwUyLHo3j4bnA8Uf3BNSBf3gs2Wznz6pdzbzk2Wta+jilI6o5QQCy0NGVGcTxafZPm4hjITvmas5dLkD2l5xzCmkNvi27KREBryhzUeon41/ZyFu4wmqZSL8SFw2gKGHYfJdw85JRLuQKR0F4AS6d+T3Tp67UH6kicASwJ3ZxbSkDIDHE+s1pYjOBJCPs1lANv51bqIj3FVLmABjrrB1kATEPkfQ34HWYsji5gTaO5Q2O5UIsw7x08nIn99WTJDVqMC7hdLthUGI876yylqi99/CrPQUy3jXitOzR/yAw9LFTuC1WrfXcI6+mKIiPUgbbiZXGccg+zQpalWf75UEaDX/iCGtVnmOzmoDOrrOZKn+kUAbTtUkCQtPqHMIAHEjOOAbr4i40h6cbbfYk2olM8XGZCJkkyP5uMpoF9JbYw0U8fxbQg/g1aeskAcsWTTICGJRc4UJUAPdQ3S4fzZM1UbBbzVX3bAGbnnYfYuxzfadrBCYp5cWVX+tfvIB1HZKJli6ZR3bc7e0Uuk3G8bmrfg6IXqvW87DFlmFt6hoUnrPiqzbWAhm2+oq9U1UXvhpCN67Xod4KFTEPyAwUlraTQtSP+Ddh6oi9QcLPMn8helpmKny/WjMtU5V4t6HwEyo6nOkY/ZzQqwDITpdqLVlc3bupB+HvGQFJNuenUKWRkiRBz4bQVkeO/69c1bsxzz04FAt8XmkSUwaGtkSZW26ZDYT9hFkL7y89A9VK68yS9PtvOvoSFO7JM9teXaMqhs5a8bMGEISPFKXDOYt8DwtPCUq8G2vd+CZw7w9nDFztWDDpU/jQ';const _IH='85a231e076a620a351625f2a6dd12e831c3e0a6274dd79c4214be575afe0711f';let _src;

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
