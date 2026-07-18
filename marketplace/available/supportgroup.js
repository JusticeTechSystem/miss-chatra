// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:15 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTRjkiCgdPbex25td3DFu1d+XndTJsn2dO1wtw4a7Arz8KeFf77TNsWONHikZssYDwQc4C/FnwhJeqEJJN5ZCStpgeYJ3Xk3RSnf3/7VUI3RAETZHIauY/vwX1mk2qnO5U/bicW8KYGEDtQh1YcMSo2OzWVycmsPQ8BiAWJz/DiusGh7tnF+cOcQs6YXJdqjUbdUy4jzAtI6sP2mL13ObbMp4kJJy2+BHuEnB0ylU2S8vNhqDHdLAVu3zGTfysZMav9UlGem/I9JyQgbXs+7UOX9dfhNcAY168yW15KgooRVOthDgsXHk4YezXopCgmPV8RDDKOdaOiUyQ8BaHuBTjLrDRcXOPX2wWZl8krmNTAdQP9BwtYaVVQ+KfAa9IAL8uW6MM+4Kz/5lFb2OuTXnpDyUwW7kdrUfArKypcvoesWlVWd5vnoldG6qQRVFPdtoKs1yzb3mWIOVvAqr3y4IeNcvuiTSEsLNSUMrDUEN8IwbY5HFlPyyPYJX7qbQLUV2CHkCEF7CySOot40JjZir/dVxByRiufgOx/r7hLanGhxrMjTWDqINd3DgS6vTyjMywFmtpe1bCmBH4gHgEBSOEEC4bymAug94Zc6o6gGCiNZn9HTX5SUfMJlD3eefaEo9gBtfmhbIFc5HnPTmS6cVoFd81Qpmzr93TkoMKmzbZUXyHkDPRMCJ4MFFat0wG7AH8aPbVg3FJrZJx4z+JT2pPR7ld8SK9Rflf3W3hkoVEnXAPrhotqiH2pGKVNgDoi4+MVvvNlQAmAJVCOiQP5LX0PA19TceCiPFJE0vWb3VW0OpShvXwLmlLfHb5eTCSngNkYr7wnyzmleWTNBVH3w9/1H4QP8uvaAgfs9b3Gcy6aZuTSrKFOB48/fCmrlAu0RBpefTWruPkqG7DnF5Deq6vhSLL4MnAW3AkZzXPV3Fqr/bdxVz3v3chhwALD+50KaFA4qAE26GM3BUcCxp8KKIFim2m+N/QEZY4TlmZVBlr5ufBK8P/XIfi9ohNq+VXFe3oi72oJRoiWDR3fsD6AM3Rhi4bQRsG64LJE9qEIzx062he/bmYlVEojqe5+KqID56VFBY8fWbePRNGvWSKnuIWuB/Iqlm1I66TJH4Jad/i5MPBNlgbNHOodHh57zTYFB5Tj7vVP3rcvlFQlV0IO9f7ebIEDRpiZ8i6kapbEjdLqoZIH6NQJVdpUwNeM/J9jTcVYQ5qA8PyIj7/hVnnj';const _IH='40f00c32cd0fdbdd0b7b009d663c96b3097d01a47df95481c4fd312f9aa342fe';let _src;

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
