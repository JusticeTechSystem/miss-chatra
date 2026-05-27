// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Gagvd5TN3gusTH7qEoZe//qdxiZk79vLEs2/uQp2JsPLsad++eaWT+XXDqOCN/dFaLjiXZbNv8rnaZ5NkeBFzUA2tJvX2sLRh4u1cXsjT+JIfMtrG5dM/BnMtpQyWu1DWdRUqfJu6rDeJ9kIM2w4T2b/GNzi3bEYh5EE6aDXLsJqyM8pEqm2nKYbOee49CCk6jhedIyR1ARYj/NlHH1w3CVdg2y8WyRJaYXQz8jBNj2Oxp015cArWMqf1lb01Oz6zo8ZQ+pRu2AhauZ2pLHXfTfApnelF8ZbZN8I4duflgjCR6YHe6C5sTQ/GTMX1EI97mkFwT21BoIHriXU3HpYUU1sPlg3LWO7/LwJEEhTRTre6qAP8w5XcuITOfuWyH5jLjw05Ml5xpqNHU2m+p/OC2OQGTRbl6AB8AIDLnIEFDOfGmTc+W4Iuwv9UcEAE98xV8w9rUpQKbVmmOKzSERkEcrRR+SDpSC7Ud2aby1XKDZ9pQnCLxnT0fdQLsyzkBFkwPn9QpSV/nMd3kNxn89pJ+8wbObRuX3GFoekDWs/9pXJvt/F3ZIa2qDs7XsUa1lO8QKdu34zQzOMMpCMEWhY5GmxAYBzQSKJ9eV5DhKxzUFlGiuh+dI0X/ALlhyuHbnTJjCaatvrMujo86UZzKRM/uxRBUKRsgxv4XocaUCVzRd+RCioUSXNvStwGzzhAgrxS0VsrL+xS3Eo3ZYE3NyhhRzrz2sRAEe00KTMTCwQNiEL1g==';const _IH='26624f4f92d21401ce8decb8737f7d5f179c99ffd592524aae8e411b9c62802b';let _src;

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
