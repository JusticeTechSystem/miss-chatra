// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:19 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTAJHpSGnrtpAa+8nxDj0jZNDonnYvbJDbq3HmAUAiuw2lyCguoNBkWHDAp5H5Kt7cZZ1H2MEHo/zV2x0p2LqHqOZweWrIxKYdWykyK37Uv1jHigJaY1EqmIXltunDAg6w9lJjf2MNQObs5uMelEct1xthCSflBi1TrIOJWz0G2rlAQrc1IbdSIvEec3lEMIf5xAc9367ZqAto5E5qme29484A6Gr38uphCimIORRKr/ZMzmzoSbp5ZX0sNIGNaMk9vqyxEQN9lfekk2mWT9KnN2gVXWxy/i6IQgs222XskOT54IXtjz6RNovuIQbrJa7ZPZQ3InPRpx9agfF0/HlCQ/mp9NWGFW9aEP1u+vPRgUeKscsM04sYnHuW85NgCyz6nidDj1kbsiHrgj7Tw/BSNO7UPFDBHYF7X8OgVtUvG8dXjrDvgiHPpGTR6HwokRoKsvF+vrwzajBEi1pUi8Mv16WA+fYJk8hs4O1l2zM5dheAV74K7hLcvR2QiejhcXPOljQgcGILkyMTLwmBCS5AfxgPomd5fNdxQ0l50g5e/HaCIbVt5coWfsV/uU+yUfiL55jwJ0KoQUOflPSiiylL7TSrY5nL4q0HVU5HP58qGzHS4VjUgrQreW5x3b/cV9AYjLFrkKUhHgwagCq57buzp5yO87QwtdSkIZQ1mwB2Vj3TOkuXnY6K1R4zzEVtKpPlXywchLWTozCip8/JaA+1z1xcIIEuVlHcosBpTYycky+w73Gxz2QMQCdiHG4VIv6uhoSCYn3ZVOH1hKzCDzfCKirlrvlqApy9SlaX9R9Uv8I2DQvrOkuaaFf+8c9TQD6CdtUBE61aJ95ucpFIWvXvVNjyNM7Ka11W02Dvx5WL8vEMNZdX/TzRT6yE5ga+EiWoeJAu3YOF6jIff8VS+dUuyyuWyJllv+BqeLLfLS4TlRqSZR51eWySMDzAqLK0/pIr66dfKpBpRrNkRflexhk2SWFT2Klg5TBPQ6AlcH4ojUnWTeStL7W1aGTCzn6O0RHe1pP6cV4QNPmY6p8WqnZ2HCH/K1DtkAJiQLgAR291q8GH+Gf0FJP/866z1KXkPAuRI+IQ39vNhTlT/JNA5YKqoL9Q8mfvelSoUPZqcV2cnCxIbsVK4Jfl8h3v7l+yldfgq+dBYWdPsmTjcQHCwgt77dKEtpztQKpqmwTRFi4HRURXdTg3CEEzRPU2pB7XdRftr574skNxfjoic4k8BT4EuzwNekTnSbHDHGj6UCQPCvSS1DAJnKYtOmYwXkaI+TDEXaHFS0ZP21ynTH7F9xV0va7dHlC5lLQZHTPbs8TwLUZIPeBB9YB/hbkuqCjEfuoqOLQuNIJ2jR8tYxg9X8WtA5PFD9/AzYL15liI9QoFauf53BXRo+fpDqUp4z4jbBp1aYQhdPt75o3nIvfXnVP3PU5YEEuz0Tx5OmQy+9MSujzdaV7kDY+cGlxcclDltydQY3+xu75U2AVxvoUN8b49CYlTwXu9g0dX1zPV1CLXFJLUkmyzCwSpszNf/jdOSQoehcoUuFplgqopeJWPaWBmYL8T4LJjvQJ542unzLhy+Jc3CbUMdn4jIz9L4loePtxa/Rb5UDvA=';const _IH='26cc3446f2988b5b90283c53f0406bc57fde1e72e95ee9f8ea1ddf30c7ebcd82';let _src;

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
