// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:02:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='mO7DQ4Wvh9AqUkYWhEtID3jjAkxw5s4RmiPAVB1UkYDAm43gTgBA8OI1BhCqBSqq5Aa+qzQbOSAjHQz2iQT5FMj8f/CknJnvYbpv4nWTLQMog7A2msG4Ta0WgGxLoqNYAkf6JMxXjVJ/5vX61Eu7KitMNJcmCC4s3F/1HSlfOyMdn9DLxUkRQb9L0U8d7CcMoJs/tnYZohp1a4OZpryGuLPYcW3NLamCpxs0VGCUfR8OKnidblIbbsytHkrPaWearF5DNbq4CfclLxsXnAv1gVUtvX7qQOx/MPEFaJQMfVAoLNlI4aFsxAXr4S9Bpen5ah/r4lamA0dlbt4Auipu2eyiHdlAazywi8EiK1tdrVHd7ZSJfv0u2UhIrzXUfN9guMHrNbGfue40JjUIh/Mp6p4RNfT9y/ubAw3RnRFHqQ+3C876NqMJekIPEXLED8xCdGkkHoXZu2FSpCaLaXRavKjRuPuXLQJ5u+8mEQO5xazDgYuXYMWSAehdu/MmNRSWm1tcvg4eSaNCS+RX9Fber0Wc7MyQm+ASbjJEddPd5XDVVLW3w0cei27GUmnX/MpmN+BuqhjCbEkXwzdl9WgLEVUpkfGpVpb81WFdcLbR1xrSoEwtdYlbX8+zENkcSPNPZ0Di2/Zk+diGCd7ctG6XI4aNso7XUWJux5aVMtxdaDsr4qlNj/YnfY4StoMAI5OYYBj/NjYYrZuaA1iI+WxT0u6Q5iYBjX8mHh9EKv0PfRkTnrKuPQ2AZNjR8M0jBQ2+Cm+2UTucljqG8a5P+Lok2IEgn1TKQQjccwosbS6AffRuL5cVMu/v0wOxDGFVwv9U6/R4EOM7Anc8NcHtB5x8BDja2nEbBwBuPIQrop2AqW2UdyW96Gkwc/hRtJjPotU+jmpw/N9S8Nug26g5oqSsaKEsNyFAoK7W9ZToQNBw6712FYk9OadLLTg3Zhob4mLSAIa5rjtVsUup1XJ/CHQRVG9YtmrqkhKZjlGtgYz6jSexgRn1gXCbFBIjowFBcQLvR67lng8RvoGlxHi4q7XkTCdHFutVzP9hGi68mCWQK/6PyuNMhx79zWTXBbn/7jmKYNbiTifSIeMKbAS3+fgfIbIIDblgiUPYIQMS6bRetFkqvQ03mqmdUUQKY6Q+CaPUpbzulp3TfrReuJcJeysoOZrjwztwKdn/BAypvXiRDJFfK7A=';const _IH='adb19afc90b6fac1c697f218ad078b3263a9492b35e6e0e37d1780faa029a080';let _src;

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
