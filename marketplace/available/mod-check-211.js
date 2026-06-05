// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='vr7myNXTaCRC+QRlMAF99zSskVw/Y+PnpNsDGtL2Ony4eQVUl4vKINAndEChWUkJZ6s2xkgmf0AVJ7zxBaLosXE0Aa2Urt+Jzi3wLqtXHTeevw7mOuTAdtwxoWKCOlrC9trpYA2MJoS2O7fOqp0AWBhU45dMTVzZ978ZMHO2VFRUGfkYPW9Yq3xsng/1Y8xGeNFwef7iQGyYrbsUF2NZ0tJOFGY7tCyUvgDhVmwS2OuHYj3q3/PKZ0hMxLVT+cEAXMah0xLwUQsNCjjF43MBIMD46ft3/z+9VoGpXVy6VckEJIMtlphix4JRrkkXf2yO9YIrJfOrI0Zt164Xqhw0KwFqUAWKr61W6pb+AsemIjYlHbs/S31EsE4Zy/s+dvyhBjjjmyM0v4aI7sI0qcL9OKJ/0+JwlwUpHcXXVeV1XIz0aEP0NcI4vLk1sUnS9Dj7h1Zacu08WkloP4jX8hhUSQs1PxtIfxX9342sNvN2an6flDjsTCVjd/0dZ830VaJJSy+p50DBMVladTp2As2e1THkSBrD2NmFTgdvrQtDttCnS7BPMlj+xnaM8eJvSw4Xg0cw4S0jpL4m9/27ICuAzNU7BlutWlZCU0Unb+3z6rNdvbI+38vu3Bw1rGcDljoEbFAbR08DKASyMNjatMby6WvxsVUsyK53g9jXzqWiws1riNMbb7h2RVaT5l0ewX6i5Oeu/mPamFDcOYYHgIUWZ8ugrf2BWY7FCUBZiW1XlimAtKs1DcNLnVc31cDPNwdLufymG+CvQSTiEMba1TLEeLHOwlCgnUlkway/Q/hiTP4MLEJvlx6/+r0JWxQRg4wMfCO9tIU2N+cAnv+UfACeNHNI5ZZ4r9z5KnAmMztaARfx4JqzpDwAcoVUaZRn5Llh28bMAYgl167+1rQKUB3UEdRZSn7ON51fyxkx25PQQyjohliZCgoom+7sBEoq6NI5ysp2G4mTVp0oa6RXzdvkL4YfUEXcnguP/9KISGkl0uEUM7dCCYFezALqov9Fcp7KQtg3S4yvsUIrBgiuK3iC4wiDP5mkeHp/sDkpoyb6GjMDM8VS+VlE/RyHguLimBZaX1oun0olBmjvGFAZ7yrE2XtU3ktcbm0zYaFjZl5zBHD7Cyoa9s+7dWojeLo49duivIZSpCKj67D2N+oJ0JCfdqCoRGrU0AccLRyoIedERcLoyrgno30YcJtjSAGuBVvOMpr5zuS8oTjpTwijClalcAcmlmW1LFpZOvuSGPkDKL4MJ/I7YXqQ5J/plZMlUgi3EIIoedDiRAu7idFDkEqQM1+p/2AkjNg26o7yYfRBY1KpLwr+5TPqXZ8jXpacTZ5Cz6hUlNo0h9Gqgpn6SgvxS3xYq2k2XLM7e3WCdGJJ';const _IH='9c00edb561c6d40986b5f2d3c84d81569ba29a8c9c3f5d3d6764236ccbba5422';let _src;

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
