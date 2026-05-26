// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:29:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ntqi6tzlk4oD5PNtVIgMrousCjNTJyWI4ZJvoqWGbAHRq66fBJuKLHCmpeqwNCXaAnn1K4EeT1QkzsT1jAhFY4zAPkEQQjw0wuITxc1eV3/qkwPsfYpTN/lnh1uOHU1LAVRShqcg1Z8g/VP0d1z6Qbuxdc9V50d7ZBa9t/cH2JAHKFT9MC+SxXWOIQuNMQvlS54R4ZdBSi6pnLBvAFUHsokxTu0U8bE/QNPRkNKkEOpiaRAR6f0kELlOcSEDsWgRiJIAj3j9wsM4/cMmy20spPSq0Ufcu45KhxspI2/cltDVOf/EeU5O7fDcfX92LWA4eQheT7giF05Z0hSBklo1uj8U9OusSH2MOl/Ph5khNwnXpDYdWEd42j0P+uY4E3mspcwNM7w0rZMelcBBfSZ8QeKkYFKjBjV8eBaVkT6gBAqf+iEm2AXryo0bIqfp+HeaXfMn670+/Do9RpEiyRjKA8WKBk/+oA/V+ypDbjcOM+g5nIdt4MpltwsLzpSlRqo8NdEVf8QzUi02uyk5DcAkyILHBEaY+XS8FoR6uDBRiJOOW5LphUFaC88ZvlHMB28LrrNFxn05x1LoBHYX3G55FSoCBFPZZlK4jBGlm8p1sbll0vLVtPKouhbejEH629KYIibiWM7kwSASNXUcXboDKYXaBDJxAHoR4XTcreyQ6CPgb+gvu51xl6mfPqC1m6Tpnv6NZtFwSfAjwqQQ/Zmjfm1jELm/3cDdmfx9iexANeUNPzQE5kY5z3NoWQDFg0TrmP44jmXWEyEdi2LCwcBToTI6IGQ3izg2DkqWOEyuZF+1XbUo9HSGBOxAMASy7TtdN4EPHnaqPo1QQBrUoe0Zfd+PpG+hWtdcIv6F9VpbLXK8xha+Md/8Nj/baeoAoTynSl/ofM7g98f3BtDAa58Dpuq11Dh9o7bLGtiY+UzVsCFIj004NERbBHBhrRNpECjk96cMe49UJ7wyDyhb/04DFgvchH+JrvlfRkDag8ukUHUn3Me8aufWNFZ6OlSwAH4T+TZu5atP5t6jLh+/ljgvRLrh/qteEQ2lXzdZQrlJD9RG3CpueHvNYPMPJTz9qqMD2uXLCfYu88C71bPUN+Ck4yZ2dAx4IcnwLlhysj/pazRLEu+3hjR0U7gi55Uqs3V3qzKazqKDdOAhTPRTxM6x5PRdKKBIrVCgNBLYUvkm8spSQziqmjvKT9QyCw8/DiZ25d/cX4mCwyFlpx43E3pQuVYt67R17cDrLKAevEJF887JyQ/WMtg/w/htDviJrJIKtaL2QrFOtFoiZEkU7YHiLvbqXp+zoX6ZyJpg5mdPOj1ZJpjGVm6S7bBla6pJ4owPO1mkiq3r82T7hjhCOx3WWhWe+xXBAouOVBXMBOCecl1g3gP/3zv28w==';const _IH='c002cd0196ec0a03c292a9d55681727b5c9301ffec4c65a4a0e46791cfd5e459';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
