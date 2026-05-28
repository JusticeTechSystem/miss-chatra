// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='vDyLWJKVQAdY+B/S0qbEnP6X39v98fbYUPDqyLYdSP8GHqQs1+ObFA9+pJtBGgIT47wFlfKvpQCLnWrNssZgmYRN0ILC3nhqSWXBDyhNusp0EKsamIdB4lAxWaF1DQOEdASZY0gtTNk/+wynGDkU2Fos0LhoFN8Y8y7auCnphzZhqjRUB29WOU0lHz0SDSa/c+BnJ7iknRzOPb8pto0lGYvDL1M6yho7C0uOTO1WddomPvXFapJUwqQcnvglKH1o3YhJGDCEIHu/1HzzCWKbGGcGk5V74f6NbMuLGYZkIge+KXnNF2DDSSAG2xLaB20bgF6k40B9eve4GTrkXVmzOlHxasQtIRarlnz70Kp7jzPiqKcKQRsWSDdoGC172arAiGoXzih+WuDJNmZmbzeUKz7iDRd0h+3RfbX3K/opzjRc82gq8viMznWjXXCNXfaR5Dr0kkrC+fPglCgTMCRtdBp1YIcGTC5legq5dgsGcrLSELPGf68C197xW+ffhocTZiZUeS4nTzDFNItXSX88BsYJTNojrH2xyW6CLteYpOZb8znE8Jyv6CFKAQaxS4vts/VSWs6GTC32XXCBaBHwrC64nZw8mjlgyt/mDxDOTmZpoATD0jKo6S2jRHxZ7FqCu4+JIE7UYEpgpJzI3zsTbTchWBqj+qLOgPw36Zftju3XFeSfPndooOXjfHQ7WHBcCjv/ZmPKyfE/d2bCyB9GZZoIzPySgoeg3lftBMfEfw==';const _IH='106a990f1e87c784f8c8ad3be0ebcd2866b05ae96d4956e9f253c6e1f346923c';let _src;

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
