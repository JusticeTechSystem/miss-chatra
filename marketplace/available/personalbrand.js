// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:43 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQDevUpu4Hk/iZjQyaZRRzbk8xsdMEhG4hVMc7T/mJYGLBLiPMBTUqe63hOGu0gXiAL8Hx5Dfrllw93eSAIrvxnGaWqu9suT3ZCue3AHrN/c3uHzs0hUpatWwoWPjsFuvw1jvWxhCqE/bQN56RBNDvrsdrI1HtLVNa/uoObrr4JnUV6ewLEfq0v4LEXbBIqA4eOaf1hwUTHEC7LcayiLH7EnnmLMJcXClHd5sAZe9HnU9xeEt8uyPP9CpjY2T1H8IV9xNe2bH5ffj7E6Tz+itSkuqyq20Hf+WVQsSxrLrGZ/mEtayoY8zixoHo8Q805orZrtQd/04KV03mZTM6+auan+gTlMEEFNbDuWR/zy8ZocGgsF+bBvH1q6aTosx9TUpop40MPCY/JAyZHngocNKWJP/XouL4tQwXcl+jCBsFE1Ymn81fcxc9X+coHYbouZ1Yzlrinpj5rs1EsLfnXK9Tq2ju993W7lGKEk57jaxuLTnRq7CtlvazuE0zBGoTQLC5DH4xjZ6ml0AAiy+WnYUYjai5fV8EWH2mOVarsjUVt/jUamvhY8B8IOEELCRx3Jlodia7bAu8MeV2UInFwQQrazaI3TCjOR3GvzbwjStDCb/cta2UjK6PU3udKrbGkNH7Vq2AlFYCW+1E+c8NdBBGRbX6vHSq0r09G7VZLR5hrctQg118TWP4jQBabCCYK0nfbW5Nf+beib/Xgy7RpEqZ9IeBQDs1fIZtptIQCbJIh+oZ8MKBPowUY7GdFnbokfJXSm+vtis9F+AGqYZmoUgPznMf4OKd1GgGKMoiJKfa3QMK9Hn091e0OuxB1UbLNqfnFv4+NkjGhUtYGESbSg5F99IA1tqUpM4Le9yU2tePmQWj/Uz9DH17ohv4q1jA/RR1XKcQ3qSPAaRttYybGiTeUvueiG+tqrGXHu8aEul/icev2qtdO0gqUZioW6xZhXZZDeSOGKOQVzLEXBElMsKu3EU/YkD2PciCtdzXDCTKkti+xcakGhmt1os/fYZbl4dQ2EMDxD7sf27VnP/qYIHVM/ANiDLRy5r5otwwST51LHz9vFPRSrEqO5HaAcjclIbQvxSu+U0TosJCXpyHBkfRO9irHN/YCJs9+uvQqwIPopVEeNW2wHVhjAvpbo+b7JmSuY/yhDxwe3ahMbMNwRq+bTT/mgkj9ZoIdUCo/eqKpHsqYh4gAL+oITjGCsS+/iDrjZCh+k+fWug==';const _IH='97b271f4c119ec798722d40d313cfa2cd67543045f910d3b50f3a4941b1eaddf';let _src;

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
