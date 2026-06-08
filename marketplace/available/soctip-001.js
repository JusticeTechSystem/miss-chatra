// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='RDgljPQJ5Q275cb7iVNeHtITEyqq7MqVG78WJXQTjTo17lsOZ4gkmB/mRf/guQjt8ERcvVuv7b9f6C9CR7+ZscX9QMujO7qXFU1l2cYXKyhh7MLKUlpbnjFVu20E64xNvcdhL7mI4Aja3Gh842fRfqUCMmVu2T6o9yfLFCghnq4SLP5Kwgq0G3cLwk/AU8lKiqnKCnQQR7KbBUEudoNJAVedccpQ8BD1VLIwQLo7bTptL6lsZYzV0RrsTAX7S/c+krznaYyeYKlPrk20sJ55pp9ZhbNKc3JTVrB9eVl4I9mkaatW29Gicp5hCeoLmlwbjOGWmjNsjYtcRDBEzE3gTJayRnO1XTqLfiI/UnerZ29TVt6jBRrsjFPJdOAQUNTEgND2415gd+3/oo1Ua3ERQRJRKq/sg8LgFH49YncmjOIIW/h9B0NSA1bvt4pnNhSON76ZzPFjYoPQt4LY8khnK5OdW6W1lcUHPxsYAtZuuF1MuRKucLw1yf4qvnxJdkmzFesHyFngQlSOlQlxSdzlOAcLSS5ZIA1+t8d42AHUB8I3Qen0ymsILjNYDy+0c021p9f9oUfI8dStkGtEosKoFGYuhsUdk3EcA8YRyjKlnihu39fp9NUQ95c1kJ0ulQPqAYI/Tv48/TMKK1drd00bAEzdyWk+19mUm1LZ4XvzWko6uFKfEen7B7Qm/+eXTfK6fWh/UTcq65jq/0I1k6IdLucrok1DzHSb9Hz3pgBaS0I8MQ5s4PNxknyU3KHy5CWyZyUusJlZDMdxyRAhnlbydMYAURJcvjrUKUcV302KNXHfl6mBgFvTNRGyiM9VN4KloMmLdPccGyGuiK7jhvU6NNxhJDuWpLgV3esVEjB6zMnrkMMrI1ntDyU9BQ1rCfY30L2AbjL0ZRBvzEo9c6QEHUQF7laVIaeGPvo/5kj3ra/e4aCq5wM67dhjIAVY9m/ffzP6X69rYi6FDhA4E0lVnFFOVEtbsQ88Z6dvW3bfgksmToPyRzSrkdCVWKM3X/nKPhwhOp8qmN04cDFBt15GQqgXiuqoC3EtnSZex7G0v1Uc14sDYV2MrFtOgw1s1ylid65ih3Y1DocJ3Lo=';const _IH='20811762030250bd8887d4d81886ea008bb33b4bea8ad915122c3b2b69db358f';let _src;

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
