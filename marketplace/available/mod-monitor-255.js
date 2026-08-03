// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:07 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSErSiu6klVwpRCKcqlddWP2RyIVC453rzzWuC5vx1sMQI2Vy0pDiOnCc0RN+2psTDXznj0Ht9QV/BRVrh12uKzexVngHpxSdVbBYBHKcLKHFPIQaPgcI39/dLWNP6gkp5CqXVq/hajQkXkZ8fA+D2XeWR5w0midJIk5o/DUNWxpp0g8ztuQrw6EI1Zp6zfeqgrasoVgHtIKre+hYmLLc3UWFIz0Kbn8NN0+FPq+U5hAmbJihjNGcbNAXA60kpLzlUr8e01/WszxbiymQY/kdr66NNKaK9ROj8oSiMB6wA/YTRdAcEtUooYw/j6i26PdJku0M4dVaX2m5TxLUbdMkcKPpPnzeYDAVgF5ZKviwZyc1nncKt/s0G1ckXtC+7Ip8kOGWTjV67ttMfRY5LCUF8rLG0yBYUUvN1QS3IaTZnWvdjn/p2VZ9It8Nf5rfqvt4vZsHc/VpHj16x4fVRrAC38cxCaET3z8C/ATd9yqlEUXPVX2iEEz0jzIJXB+c5PkJtkiUmqSGMGr/aYCmiOgmASJ34xtNQ7YJpEN+McOT4nh47z2/+DuU0+8iO5XfcIikcwr74uUNORJ86YTrxIs24AIFSfso6eGp+GHFabf1/d2UJpXoZHi6qZ/ieSNIDh8tVXDDI3x/BIDYPF/qlkeq4hPFa/skT94D/a8qhszDWYSEubWfQRSDjJm3ols5e3HC1yTcshhTNSiE2PKgOumxMo92ENW3EnZFzVqdClsZSp7wvN077DpSE35SOkfS1X/jeznkV2uGcRizswihoA/AFJHZeNIarvjEKbv9KM6kXk6QuFzaAOrwnyH8Ts5ow5/Zy0v2OIyA1xQCCB3jNLj1AOcqAhHffmrGHyJZ1wtbbb9cVH1fpAqejWhz/Qm0Eh56CG7D2iJ9mbmj43RF7eeycH/8bc8uKSSe2LAR5pBplnSrToqmWdkrdvDFR9ulJiixrqvRlaOIFtk4hjZBQ/tfZDqJMOfWo9ZHz6eMWfMruF45/Z0W1LYc5fGCSR9q5jGneo0Wv85Z2zWBkqtohPnpbqza02MHwTbaXxAfHhY6srkDnYqLnvDfvo5akWZSaorizSBUI2j/1cmi6qqcJI9oM1rvJk54BMTS8SZrkybc8ZckNfrdKGVAhqqBjGJNO2JG2mb9fu0r2Ox925tjpOe4188bfNRi01HO5xsDmlzg+lw5vuyatW7REbciDQKHN3sfya3Q1H2qdLs14lN/kkfR6UXZA9W2df6dtgm9/WA/8+aDWMZ9DK3A5ctFIfL0jrBkMVEBOsQDV4DLpEEltOz/HcekRUFbf8OtM0Q/Wyn7mff75iSfgNbhnnpsRBC/pKb0ylv4qX8McKzd0I0U0oWUR5Fh5KwLYQSm+3slGoK3in0aCh5x9Zh//Zf+7Pdi6rcw==';const _IH='8a2e1ff2ec536513b3fe83276dec0d792f7223e4a846a59a3c6cc657c3601198';let _src;

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
