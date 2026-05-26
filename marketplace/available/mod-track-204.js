// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:29:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='yZNkYyF/5n6DGGaGPkvDAfoSyLDLaydomkHgrNvzZxdKJBPBiG3yjsoFqpO5WecOQ80GVQaWjTQJxI+Rk/UGtfJxVDWlAC9A7wLghIoTDFT2P71cjh3+k66Y+8eOXx7j6RgLdGtBbnVUUZqvh9j3/R518A7J58Q8ssGBPMNYjklj2dPbTSflVJQ57eD6yeyVNiFCHEgmEiF4w6AvUNQVAZe7wspbguFGgcHdwaby+oCvmrj0qsL59N7C376JxqpF9VV6qhcD4VrOCj8/z6HkYKD4F/c/hilR0RoH/WYm/FKyCgXwQD2FljBSb+7H8w6caNFjNAc+ivi2qclcEf4inDgUB5TzdW2h7LnbmawRWy+m2N9WLdGXSj5dhINCOKrt5ALcPmuubgQztZ520bXnygEx6p6k3nU7nWefo7JnDXnnH5ndPOHH08kzpUuZWNLtxTw33ZMiUnTblOQViNOXem1G754lHVesWnSc0EoJZvt3ANt2/WTEOy2Dv9WOt1ltS4Vq/4eMgyywdcTGR6ML6LtfN3yhNh7/+eftKoR7taU/5Rrx4F+MXJ4NNpXGNKw5ve2WbswsymY7tUij4oPNTFswfNm0LLTTyvrbf3FmxKw8mFqLz74YSBPJXykOvfmubrJjaMPRpMveyILc74ok1Y0mnkTbeMugpXvn3WqEml9a+THBkC60aW8n9D/RrP1g2sx0QOnn0a+Nz0aRhqlXOMzJ4UWAQQA5M/mLQNlvEBROoDa530TBqEZli1OoDx+GDC4WKmsV3YmS1gTlFArk/kk6RJwq1RtwTonEPJ5CKg5MMD0cGSjz0SJJIDDtBw3xWAeUwgYfABelzPipkxOIuOBHRGOyh3Z5q5IIrY3g1VL7qR532YTI8Dm0Vi9rlvAQRWVO7WVdvtWdUPhHkFB726uPSoNaC51A7hAEaz0ee4aNmVXIe0QM4SO2ZbgXaKbmxr4zlKfFnkpTX8ChCq+SViQ2eHC7Vtf+5lNKU7TwvrdDYHdsETiGOlPqMyv8TDQ0eqww38b7qIp5ugueHIRyC1sKSF9NeKa5XFazfQnFAg8tLCMfnmVYJkjgrR5fOGfwLvxn7MzixfwwCbuFaBXmIU4z7Tq8LuVINFWUqBx97/NqxZY93URv9PC1Z56Z+CfCIphBFFFfnOyp+CM6yI9gIUpo3RabUuBZynTxxL1lXWCN/xi+LgvP5SnAb1WnXIky5jMsl4HGBV0LG2BemRz3GtEwpqak+HCd8LWqiOGpzlihPW9qH9ZqVpaWsRku++UbW76q+Ws8hGnj3+nL3UgLNpZp6pOjm2TJTLVbV73nrE4XDKRBc2FNYFWQS38D8L7RT8a6wAonMdKEbekjJYnBixXg679bC55XG9GtvLX/';const _IH='f64bb8c1922410b672459b1a4ff93fae80fa70b588609272361d7d38ab47a562';let _src;

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
