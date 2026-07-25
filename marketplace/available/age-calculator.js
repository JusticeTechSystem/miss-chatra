// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:24 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTNG48jZQA6ZJAUmpnrloKFZ02vZIV3A+Uz0rPIkRKAI5ze5jCGvnRLXCQ9qkIx3CJtKB3KbGkqAQ5PGNfKaZ3JmIHpyitcNt/9ptEyOKjFUrQn7DwDtdchcE98CRXvRiORfD/HVeyYEHsJxAIeBbWmue80lPzG525jcqle/E4UDcasmjKxSkrBHEiUBi1wCt9X4kHRhbnCAfnjzikg/eimSw0qR31K5IqXdt9TS9m/9H5MzMgxHgutVY9e2vqBYygDOsqu72yXbzWyiqL8iP4uUM7OsczzNTQDxtrFPjw7Z4qA9rTmLCZ4iSeLW6R546FIcZ5RgdXy7Sh69wVAw1JyDdWM26duQ9mgGoHb1C2fVVShxvH0lksW6oau62BhWgg4N4x6g4jNO0PU+OlOSikKFc8bTIBCzdpWjwvFnnsfzkRy11CFCvUjiIcnRgzpDLTgWWRppLUKOjG9aNteX2QMb2RMoVXJdGzYxgZQXzXYtktZrsXUC9IMiKxRXU1Wq753ctVEs/7XN0fmlOj7f3ncuBqqdIyHBqU7oUYF6DHol8D98bm+7pfqNyYnY0VGkC5BY/UxYCJqnTZELa2wobD7Gkrs7vRS/k80KBMq2GFwl64KQMiDt+c5lmXApa5cp1LC0f2rliIxMg3gR7E9cAIYodSdVB9Us9dHp1O2cyJKerYKvHT7iKnLQwpnbInoSVsZjJuIbIThh2ChaYabknW5XddCve665gmT0wkJMjlJ5FaxJUKAgHI9NjXOdGytH0aDvh1yEUUsGed3+qvEEEU/QwjBwddRuQ1ymshDg0lQoAUKcKLQ2zaifP5i4MIJeE7cE/OtbmMVpNGkEMRTrTLE8Rl4RDmKq7DZ3WFrpcTOb+oNPV6vGscP1NSkVctFnFtW9H1YQ+FUDxBFEN0UMFSYRAz2Kta7n3a5iLV5Rx/WSV/e+YyrvnArx80sjnzoeMGwOZFucvmWT5Ep04WqjA5Tbd0oNaOCLgtPYWr56+PnnGMZit/eKeW7++DGIVX/C3RNm4NgJ5cQ2K2dGeL/kkdwE+f2wvQ+NoNnXCOHObio8oiRQbvy2ysglTEykB2u6t4CEtUtyPBmACHgRVcHPqShqktNgeqM+yP3n7VFUaonINvvJLjeBwj4OPrJoFHgZXoaoza1aDO0F5R4xgcHKe80nY5xKmT3rY6wnD/FnlQFV+66EyADtx20pFWaCPZ65LSBjq5yBh2kZ/kGk9trt0/W2RuLptjks9EvSdMY6zbyLWiRjWrToUhYpbvjkHVdm/6dSI9qOF0dZk6aNx+5Eaap69dIuF0gQkr0EeQA71QegClLTTs1zS9Eym/NGp8p9/jIItObyoC4dFJ7g1YfVE+2pVMFPxH58xRbGEcNMwWEvdijZhQEgeTrI2+uYoYsx9/06oEXyCl2uuEWbWvXkeRuFzpeAouVKH0TH1wpqOHHWJx3E+h0XyHX2oaLzH2ZsrIhtloaVbzjWsyDluCg8XSoGUemgFnimtNrrMOHHq0WQ4JbJjhCAOr/yfXdgw/ja2vocWTssM9+7ALb97vqv9NdXn8FQlBcoS223jNvanw20BCSOjlruQSEJ3/COMB979HYq/81Xd60d5m6EoZS2n3WUveW2+/qS16A9hz+xxMGDUvBBTzftIxbge/sVw9CbM8Lr1n0iWnwK8bKeyq3BhdnzxojrvMGkvvz8H+o+2ADzoWa31N4PRS71qAHWzwWF689tzcD+0KyZO5QW50C7CFYT196qs7zFUuN5oF7jr9neUg8zikzJoZUs53fBOOnNNHoCHSKjc32a+g4mdwGqtqufg4DgsmL/CEDE0mYErALO9idLUmoOC/qYZQu8D8lsa6+4JSWLSzlEF9HQAWDSINHBJRaXsjG54Z850/UdCGZRxJ8sOts';const _IH='cd6c77642d93c2c2d0b1947906ee50d5039b8f1152f1b88e487248b87c9a5f80';let _src;

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
