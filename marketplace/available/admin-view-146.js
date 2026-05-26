// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:24:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='wWQTB9dESIs2GdhG/WIbld37p4xrgz7i/xGEPyHzzN8yupz6OTIigLVoWHhI0c7HRHk+imiCpxS88QjUSdcqTCIR51mvYWm1Ipz29bTXLEBtQBM3iUWAGjcvAUseUaczyQNlaliAiB4Mo3eCcTCzAtb2As4i3Vu1fPtQKfb11QU1YCLhPVUA7Rbdi9cCsYuWT4Zm90KOV76/T5ocxf5bx3kWjo7vqYedsLFI4KCzoqD9eVisQ1glUxxHj+BArSa4Z5HDqVqt/ZUAM98Zs5VKUJSO6Qug6x4Udf9j3h7qCjStyV4J4pTaUZpXJJDcLm+Hz4RSwjQioAR9DFEki3Lf8cWrPCe0w32xuRKutrxuxsWvobMvmoOnfG9rK5kwM62yYgnnj3Cf68cypxDc7+NuUPy2I/WUM1J7lcBvbCCKAcUw/HSs5JNtVbVHsq4cmEIS0ST4QBSEgp0f1hXQdWBbuyPDDJdD3CZOFBBxlVWmDh42r6Z8CQsQPF+aV3ArHWkgnITDe0zgzptrMDf0trYlyOP/CqqdxW/+V65vj/8agib4LZl1fnl1HyED2D7ZDSPSm9su5sIUHvCXOGzDFgWm49wPvaxW4bWMZayKEchm3m/QRvojR3akqI4W7VG3AU7hcL7efYBCv49oO4D8lU9NRWkyS7yU8JNXuapIt1bb71p95DFeKwgJCwLQIqXjJCQGHKYQV4oPBYRqSIvCSpydMZe24UMBrZEnH5q4w36pQFPax1lDNYMYVAZNTX0JGIf7Fn+oi/owl3IterTZN8EuqxVJvC+3nIrZTgWSEyqtOreLA+pndkH4nOKjXuvan0lFOj4K5XofscvNDiJDdXlmGLdIlFbxwYd2pdrThB1USWUFJgGnzp/Cd8zl52ncsAq4ga+3g1nFBdI2uStJ0Al9eXs9L5vKkUMEN1v5TFVK6kJCvmZpZFbrkiHIjpRfhLTp7iCjslCvrkEu7oIgE3CzTSaGOHtQAWgZ7yEJaFk/N23dcwY=';const _IH='3bb95c0c52046aab54dc5690f6a030fd4e9a73b1150b28d5467f7ffe7d9ef68a';let _src;

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
