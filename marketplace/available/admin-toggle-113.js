// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='F9jPD0lXOP8qd5gqJDcnrB6d18L/yOtRO0I1AeAno+N8fUKPEi/7/KPtWHnKJGkRzSAaTB82MVPejiG9N8CpYnwgTEUoAmAwMgRM//VdSg7C8Xo8vsvyIEQKpUs1Sfw3bqmPC5e+KAkSvmhYmt0YIfonz5J0ehPTSV0Et7q3m5yZHDxG5hxk/lNijiiuG0H0875lHEv6l79grn/Tc59ZFdMag2XFLfpkUcuD9bxEWqIpZPHdXgQiSG+hF7mlbtAvndR5fkZg4g0eBXUQujohrDFvfrWGT+KVo9il67IhahEVefxFF0jrtbENiwJU8xcMiqx/bfhvOOlUuStgbTvFaguTlXgAxsidmCa7VvrEqd1AIU8Dmcx5AJBGlO8S+Glwu8UhmTbxEkucbr7QpdyDe8dppZYi1cNGgI9r+fgbxfLnF8cEXnV/Bw/QoFsXN6QBjrwx6kUZRIyKowsGegkVMtZgbssJLSFVImrLEgYRZwbHaS0IiDtxuxE6UBnWO2WsQW0b7BJgzDSsjClNopM3N8JaUyi8qNH8fhPYKVfkZTQ1fhS/cRSJkTMQ7J0lQONMY1vx8u1ciUtUm4QjjoOyT1EsCM158vECtP3KYJYc7NdOQzjU2jT5qtmaPvYNGPThnJjjbXHUzj6xMD3an5ZxvykgTUq/zZSTM3ViagXRSdWgMMB58LWxa94LG1t14zHV4BpKaDijUY6JYKrdlqcCGwuiux7mbcz4eVLcw9GuinFDTMnSpPWeVELNFociZIvzyQ6glNpq8C/8JPBk+spW6wxmMtsG8iqp2Z4NhJ4Cb2NunQgOE4hITaM/rZuU/IKk7svR9obdJcHFg8aAGJpSFXtnK/qTJFF1zXco1xlUIpeIK5/LlK4uQA1BEZndSXHWrdMWG/2HPvKPgAsL9RNSVFaa9faNeNF6WrnA9Hp7gqyluExoW+zhxzHVG9vYq7ZyaMDlDshU4NbKkUiIxCGQUgJo3HQYVFzBR3QW4C+vQ5dVY0hhHEDArURH0Ua0M2natg==';const _IH='f1c7b4d6fa6bf3f8731ca876b0735b4a3de61bc7aa6511f59188f06693b71393';let _src;

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
