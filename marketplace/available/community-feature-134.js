// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='QBY4FP1QWyc6TpHnDgEqfOSuhYhFiqjeYlrh/Ol+w5/bwz0cNClqfE+YhmYatrVyaxX2M5F87BRApI6/15u+mfxRsRTiazKulxIRj5OwfpgFtAnH6+3keEFl1n/SO7DXHN5f6dW//qtHrVKRzpyTryVzGJ6uPxv6vPxCJEjh7VISqAVIpNcjw5V62bbIyg6x11Z1hr+uJuXgsWplQUPEpqMEqUMQCqS4HjHcJMxCf8ac8vYqsV4QNqVX0rNeTgTjd5qTlqkz1/XWovY7WNk5myH1Y6GhFOmfQ/+BZnV1rbc/gTc5ACocj/LFUtY16iMO0VlG53xeyx9WG3iMTcYxMqLTRNt1b5Dq5aZFQhnz/y2Tk26GCFPFAs3nIr/UkNh03VXM4j1Z1Oe7lmnqS3BIUWaEsPiWL+XZG/5Clxs6L5JkyhXHG5IB50cRgGOv0pBVla+F16brYe0kbXN6gZ/UDiOfoiuVkEEEHvc2LoC5IjG9bbMYc7LN6tiRhOB/7TvFfV1EpIc+Gdpvav7bwvqfK89dAJ4rxtSp8KWVhKohtAeTekFax7yfNyXaQffSHbCogx7+uVdA2R7WKX76XPb+aCNO8ghqNXikW7XHhriwP2vrvWRR7bBi2uw7XAdVKjYNQ4HcGVdqXme7DlvbuFHxIodYZZikqNP+QqRuc3WFzxApYaPJPGT04eI2y9Bxv8S7qeH9pKKKMfU2ulCaP1afMcg9rn8N2/FA3j0Gx0HAaVpzPc7t3WE=';const _IH='07fa84cd6c45e7a3200de4900b744080ebb948e8fa88fefcbbec086eface0c43';let _src;

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
