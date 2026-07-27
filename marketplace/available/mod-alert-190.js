// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:14 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRcHbYKZTYEbRRpjEWNVVE8rIP39d3U4SDptfGBst3EqmsiP4YixCLvTCVrNuH5Sg6su2w52qBZ8BU/tyUP6vQehVxuUy7cGi3ch426dJbPGxyMAqTnTKB/48BXVz4IFcOJ9mZ8XVVwneRKlsJdeApgbCoHKNmZp+OcHYV2G+m4sw/xj7ipFgWidLlv5sm3ilB5FWsMBSsfL+ZibDpVXYAxSGV1cM1CQzk/1kRn4SA4jw0qNYiexopGTJaueSz0TxnFd+E1O/Qj9MkEta0CjNbaT1Ibc7W7wTGb3pe5jlaGMhqAlcprj0Q9XvpEGt5Y7MvqUJji3AyQhutN/Zzt7fW61sgrZoTrwltp6FbYKDkn9L0wt7IzAFZHxS2s2L6IgdRZb8nli5yYVIUeTGpXjjXJyhksgdKUoJzy28Ue6MXi7oKhBynMYB2p9hx2mjwunnYtuzgcp7kUspdiEEihNU+cSFI0KoY9UHvGr4qcriqNvvLA/2EBVyWKLtiUwmfMsRxDWucWwyHRPhYsNxCeuDGxaGgI3WwsZSwZXn6sfNTkmqGDlPEeyJcB55FY//ylDkZYywZOTvzekBTLEe3P246TDmeQ/JCkBcKP7bi+NdxpuqaFVDf1EQWXdjCtCqXnmBgfgjwUQUDA/TtCfb2lvcwZZsefhKxZqvS20CQnVQRnJrksDGLHmhpKnQ1jClT3z5W14FBDAlUXMru/IWedyO7JFVp3K9nG6OUVX7c/hSZ9Xvjvs7+SMHgczBsB9sPujGFixZbzWFv6hpRVjGZzGhCKIkdhfrD4badrKXyvOzjAs/uqHuauJ3qOdMluc2/bdaefQk4/2Sm6jB6TCX5oA8VRVjjEm44dYAHYR/C7wK2RqPwlG2SiIbjPyBUYzEaJh6b6jlBYnPjrdCVpPnO6DIiX6nKBeldASR7M7NIfFlansdyQXcHdiGJZUvsg6OgXEEQSkmi7btbjWek3up4e2NdPCqNfEq+xZ6S0ZzhbeCMIXmltB3/XSsHwljG8hS2Wn/dCz1oiEvk9/Rzu2X9tkkC0NLaMGkZrFbxUJ4boFBjFF1wc00v3L+5s+kOyTXgnOT93XEVeO/Ii9ieMokgVj802wLhrnJ/dkVxTRxJ0mNPVZwzkyZLQvdciJoZR1eeVxRCG7FzMY7fNZzhhfxzuW9Wf634I2pbX0sDBw8O03VeVrsii07T9zu2Vzzd46FUcBtoow8I3lKeMifKDZz8316vRs30QJ6V94PfgdEzfx68thcPCk9qalbICzK+7gTM+yVS0evVWbfrrXW995FNRYtHhViEDm67zzA/tUciKO2KOetIGBv/ZE+0FFPCniwOrL4zYAB+T3gHNv++cCTE0lrxZ0iploSJ9M70vkUIIIcA=';const _IH='8075802764f8ef3f9109e3d29129e6c025c6c5c6a139de8bac8e41e986814a65';let _src;

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
