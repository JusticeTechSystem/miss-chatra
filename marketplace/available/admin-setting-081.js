// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9mThmoxF3E/m+tA6o0Oxyt0FP3Zudbdhr3DAMAN40HBZ8LLlWuzyiDLBUck929aGQxkk0ngD+P6rL8zudDSDA/JQYci0g3nnRJ9PteR5ccJJDzzuv8A0M4KBNmm1lwDQlOLiiSQ+kgsAnCMTUt5NDtYE2NZNtz4yMOlf3KsU1iKbNO5nxhT1TUEM5GlRJIG5mUZKZuWbIicNrSBzNAL1p1Rqcw/Ess5bAta6ICO4CsKShh2Gn5szMRs1l8HPOovtb9av0uTqlKDSVk9vJ2x7YMlfpB3OEnJQFCqBk92CKexJLyEfInM5g5obXSHzsAdGHVahGKxz70E/FLAA48HUSNC+yJk+va7hSti0+v/HmARnV/da8Xgq+bl51vM1uenOUd5I8iAavhBvl+s43/uH2lCFjFOT3sYB1v6AfXMC7GBGePIpQDwBPK6IHSVePuQWysNoz5zE4h5b3yEnN2yETOwNzhu5jVcW6qR0yYqIb2yZ0LBSDTubcyhUVWExxe28XOUNZAEuLZdXjEqGBUfRr8ArUeERsVxwebKSwoOkg/8sp/wyQ56qnHKyM1AlRBOmc/L9Aul18PTgm1jQFRIqeWJF4cgP1WAfk5mLiAkZlHlpIt42fRpnWRLcuhsxdYzPUumyRXwKiFjt3I4u1TTQ6H1O8zePC1LVZ4McoWnvy+hQp6J4ZCB1quhVWwZ+Pn1c67D/nprU5kcmg3fb4Qo3iBZyr7S7/m+tfjnKdX9fwG0LXMW/ypBq4VfnLVbmYmpsiZnjlJo4UeCwtC2o9JpMr/wcRtG6Bw+dYBqvkLEy28ywZeztWVwUwtgsecSCbCZ4dmYmYdYmLibVEZeSaXXeGvsZwLXCBvL5SvauLTMYnzgBTqmLDdsn8RZx1u6zCm3zGlKQ7dJtFUugFN5Yi0yktHFeSozeqY+Bn239hwxXoFPI+k6/LKTVhlWPMCmgXroPcdDQL9XZWL6nAlRR1cNU426XRTx1dkbpAIBDgTEfIkXAKb/3v/Df2M0MxdnReawWOUu/dA==';const _IH='321473de5e46f9543f66ee77be9df717d12ca67fb41f661fe21b2629ff836c53';let _src;

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
