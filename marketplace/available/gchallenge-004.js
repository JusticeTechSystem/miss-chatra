// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:02:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='LMlNoLFGbao2YCmfZwgsArb2PB3BEYjCrwE3YsO5b7DGdARVqnFZg60zimnSVbMlidYiyQqQXiCTSsKteNmQbCrHlqIGTP2wjo3oQ+C3zaGJu3zrBcIouA44ZcF7aENAW7PPrm4gedOYDUBuSczXvB5RHjjSZW+30zWqUvDCcIBaMJ9Xtlx2baM2Dp17s+WutkbzhqWBRe0WX60zSAesShLBC2wNZXiSdNB/ZR/2ikiK13PAFhq/F72vu+SntFZzZhuk2wPPapkV2zJ/uDz+QcUlDG3ZxradnqDNOGFM8MfAihm5k1Bwa6nilP8T1rKuz6Geo2tUP1GizBsvmQlpY1qIaQr/UflXK2XwjhhOgzXb1Ewz9XzRO0oV3s47dLlG5pDIMX+XQiUY0Y1ujFBaHWnsA6JCUTKeYpThmC534K0xThRcFjrz7v/+XqmiD4wQt/gbScd3n92/KNj/D7OteYQglQlSA/SrCf5hjb7h9RzSmqXwTetybwECJX16JiP5DXg9fE7ao1RnUbWZPJKpzjS3PGTFkBgwC8T5x+M/6Pz2pEqzd0McDge6MYaQcRme6kjspHOVcTtPccjHQOYGsDqTDlPehGc/NRC7KXCioOBmiEvXyUywjc60lNRZHqk=';const _IH='900c7bed7c338489963f013b2de6f49088eb5af2dc370798600490f27c2d3c57';let _src;

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
