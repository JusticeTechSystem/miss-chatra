// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='FMrLp0eJSrUpnzj8Hx2Fm7FltXYGEOPgt1geIm7Z2UhawMWdjxO7uSg9vyjxSVKjg9GTZ5fw/Y96kH+wwKjUzj38Unoq0xUboivjsZlTAiUF6H3zf6W1Ej15yWiz26XvPahLBNp/gE7ZC2HXg0iFR3PRpEo5vaNvDPh2f/rVBOl3rcvHBvhcYtMnGZ3JeB0bR3t+tWpoI5YQJlaZEIwQAi9FauIbhonXxdfATaWOczUwTk7uBh0Qi+7cw7+w/DFk0MRN4+EA8Ns+lbpFEsJCoXsz3o32IDYCuXZB151eDB6i8yGjMTSvq57SWLFnKs1typFE4ywWQcxY4fGBuZ9QAEXyQKVttlXD0nF3dU2bR21WO3ix288oo+9dcdnjUcnwy5taPJ3JcYEm+a/kWk5mHmAZyDz4HRNrsADelxCYGB/9RQ1UuF3OiZdFWrZ0IXTT+n0tM/qaaX/b8/9aDNiCfXLlYh4YXbqCeuVZn5Y06LrdcqkPPGOh4QFxrpZ2bxggF7p5505baSHpCwbP4cfCckRwUfYiHDpUKcjnKeqTkG3bu8m2ERCsuvam70TUCYWopbgh//U88RmARZtOn6fKjV8otnGJylP7qms6ZH1aNludLrE9R6IsorWqDq/BckeqyETGzFj/S83qlK7zLqg2GUQSYkji5jbDDzyhIu6fQYfuJNNzytNZVsj53nsooUqsZ0f2oXBUJSQ+h3Pe28T2QCKiFPj5DrIhYay6oqgB4FffA62OuO0R8ofoodGsKMul4zuFzkco4bE8erA6DBmOBCQji1AQcKQyRhv14iQAll2FOa5jumDjIin4Uh+or2MkIbk3MdQV+3ZJE1tiCBPjTwLGZHjNT8x39XcdCCU20ndGbBlR8dF5YIoTXnO86Wq3ME3GwfhiHnLTdgh174gSx4iV9mRyRU9HosjLysVu7492pLmB4MEfWP2Ky7o9PQh3uRQb44DTT8YejJI/yvVmjjKpanHBNqUjCi6u4+MADP5jAApPaF1kcTAGDvg2';const _IH='5ac8a117738937c691b6f77ee5b7ea1b358430914b3a2c1add9e8946570c0606';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
