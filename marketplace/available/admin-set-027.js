// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='z0B8HecgHE7TKCZXQkj+x6h7nDSnmdqrzDh9gvye/MNLe3bjRydBqM2RVtY93/boasQN/TsIHvyU10m8TKqg57SG9KFaGs0K8kZxV8n6wRWObfsQTOD2yTsf+jLmL7KeS2u48Kh6vcugr+dc8PGZ30OKTn0FuCAAR/l0yha67nTBAOmr0KPfme05AFlyJA136AcErlDF6pyX5ThvbueFxHvBEpfTMnRP+JVcHsGaLpErMyqOQZaNuQNop3weFy7RukSKyN0wGe6S3y5s+okncJIqcohTqBJbjHvJruKcA/rptPiumT4oboa9dm0NKyEP3LFn0y9e4+V6a3NVEt14bluQm71yhwUeSFyHSKRgCs5Rp+WTpflEbq3KVP3mmF1qdkWrBt/3p6ghln4vy55lPldIVDVtR/UBIPFVse0Q9sDoYO2+rEC0+1CQu0kQ5C/r91kLmnWl+sttyRZ+dTZJjJeChD3/PUJP+DOXSteUyj5g2YXUeetwWdszqNBG8MTpu1BDUbFJ0LdlQ3RRnjU2gagNxqt4KoVZLKb/TFtj3PtysNBn3G32CtpDCZnjVwSeBgPyqVrIhUYj6UV/Divu4poB6SgkuBkKzGGcSwZOHl1zAaD9sLKBhU2cjHWtpZyCbdRI9k7d1SJNlvjPJjWLZa4uAmdN1dtjKEzo+vTUnwNtOKHKcHfBduxcBvfxEFEfOhoYY48ZhrmnfNY58TTDDsMecFatx9wqz68eTceuXT5tWFUP37MXzCODBcgvK32QeZP13YJatsdbeXwy0HI7cWus7gaIK0x0eb7K0W9HtFbpEJMnL1KTogXLi5O9O8QTPA9oKQQ2RANZDd3clqFpL0YfFz4gRsxuB1+pT2O0AhjjxeDKD1auIz+xRu4f4/e3T8ezGFBEIed2ecjHCP+JvY36PnFmSj3bubW3t71ajGR/PhHJHjakk7cj92Wm/VTqEuXZDpHhHfu+UIDyaU1bTO7eARFeZjqg';const _IH='c81438718d0e6ba5c02889c51af11ef1d3dcb2d948d9d5dff87310050138a89a';let _src;

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
