// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:03:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='CHc/88Wyc8uNH0GRWUtKWPaJfkDMNR8Kfu8wkGWuFV3pyKVOzMKSGk/pNBoF6jy1BaNAuUnPgv9GKvL4BVKT2bWWbzDenNOCseqlWEZoppJefxUY5+/JH1ryx1kunAlyAdClIFYO1ewBIX3cSmGEGDJmlNKxwJBVnuHOIVLdyNetDiRcc5xzvi+lDTVkYe1ItnF67HEhUit9CbV0Bg6x6PQbeRIRCRv/waHmn9ukpeIoBpfWCB518Ezy+NdeStL+mzxHDYtUFqn8o122ydKGj/fL6cQPEQyrn5xGXae8dKcv+2Nmlts3l6K9nQZAOGusnwSd/tiNMGuc/Cl8GK0Rx8Z9aWTU7gFl1gDJwiE6z43qkEp8HPZ8FgWkJGvpDY9Ca49Wmjzxn3n2TDm1jrTFjXXZHyWVpnoMjJ6x+ibtLCzEXIj8szvgtTx7mROC9lWBtod20M/ldh3rhX8prXraBVmpvsppjVYnSSvfy5TyviGpoMpF51L+gYi3vuwiBbAazPI2fN0TuXHz854d68lWicSVRX1zvGAwfgH0kZf+VSKkJb25xTaiqyRhEzcGwcI9O81UxBcNTW8Q/mhqbnxlmgkHBew4RtehXtdLV6uG5ydrgJxaYbwRQbD6+NMu+oJO5q0J8EUfG8KwmHqoU/C3gEsHb+xSK8jIFJ+HS0tdtSKdN3iUp/6xXu4+n4JXpsLQMQWTWKCLb6vR0p6qwCe+K+Mn0fYbjcrqlK/pXPtWZEz7xs+B+QF59ea7zVcolwcx1yVeFu/rrdEG3ISMyBN6eyUzoMaYo+8lVm+RKFMZqZquWfHHXKQ9RrL74mwh+D9yFgVLGVXelY96yuv6/bcsCGgXDkHmhebgsiGxH45ucBZsuKltAeR2CTEpmbL4xTNh9BI3JS+c7GUq5efNg2wdPty8kXc/NbJ8tSPPDlSnIp8Y11rWulHgWEx/nvh9Pi7APvHoDlrg4ReWy6z5KtlYvvgyQHdgXF7vX5tnOF3ekjV+oxVBj1oJf0Mm8IWW09ERRIJWMiCw7Y8aPzo4KIhQB2ATPtgnemIU6iypHxD0pRIGAgDbybmMDC3hLGZd8x/ezjOYpOJZI34EtWf3yOCzPgBfLo+CcAZnSiVeUeIuzY1Csx1o5WgA9RbBm3vp1w1+0P+rAu0LbG9UhSq5vdOGckL9/W0OQuCCUEJzLQl6H94QfU4Dg/UA3Gp1CRsao7dZU8itCr6irEEFTPTnwB73yWCxuQRbAVmgpX78ZoEz3jJTFCaVFXfZ0RP8SoPciZaQWYmPr5kRy4/ZFBWE0BtKR/JH1OMpv/2YnkJNpxSBo1m7u0LCnuywHsR41xb1v4zhqLTLON4huBNHQTILw5MbaqP3PxO9MmSoDg==';const _IH='d644c8ee53e3c35d3ed29e3ffada72705fd9ed7f832fe26304f18cc2abf9c3e7';let _src;

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
