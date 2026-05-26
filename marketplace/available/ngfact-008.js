// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:49:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Jxm0u37LKMPNDKECBFmiyAxUPnniyOhAQ+QoGyEfEdLmZp9kZepQZP9LOncXnqstv/uUf7ngjH/FGI7W1XwY/+8SCjZfGh+8PC4g7Hj/PR0tlGEKO6W6p0US7NAX9tQErAVkkcF1CwmN85K3wtbrZL/dkmBUPYlF5X41QA3hjb1plJZjSDJWcL9J+rWlIUg7TZkjLPduVerPKXwUHxVYugWievpxWReIm1G1fHpxOmfGPBxtBOlCdC56BBFzKTEeJBNdeYDi12NOtlmGNngY/7+1lQ3huYriz7In3GAGCN7AOwuT07PS0Yg9BmSuUlbM80LjT6Pxg2JLyWQ37tVLOtqr57Nk/XGyyFq/VRqFsXskdzjTVM6nYTI3eCAcy1zSNOM4CXujcIRshEBA9q1FyTlI8T8m507f/ZvzS2A93KRaYKQtVT7cVWsz7NA/Gq1Pms5/ELqSIYKPklOJP8VQ79Wma0YaAusKu3XJ4SkOumicfrNKEPxM4wn/XqPVvwW6e8nuU0fyRdFSyYi6H8mLedRL+VS+BQhJMbxchFQ+1E+gpYEKr1u9ZmLPf0pNS9rTkYt7ve/SGwEMPce5Tu3CUhjJ81zH0q08xhe/aV4bjJP+bygGByWcFWf0TrBRr8Vff3b81JK4EYXUBUJDtA93fPoQRO4TOHjPiUtSjK8O+OyJ0avIt3UzWC6TIOmWEXA9CC2ynzgOzgaLbMA=';const _IH='b5a6559adcb9b518f71598a81bd01c5ad20cf766275ba5f1d06d21abc2c0153f';let _src;

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
