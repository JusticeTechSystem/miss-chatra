// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:05:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='xwUqcP3+uLHxdQHHps7+LDAvdd5TKOymnBh+bHca3ervH25j7pOEvbV3+9VTR6LDnkOr68SDy1y4qDTgt0I2S4LOXuhSoTkP24GM/1S/nf7RGfnDLh/cmqVUjGO5DglPKjkJLwEAe81hLScByrFjaKVC2LXO+stBDl61rWsMd/jtfmqOsqRfWc+0YnILYFQjOR2oOHYjXVOU8ZkWElQAqYFujfHfREeZrtByDcFNVjO/7u5goYFjA9Vs81C4KNWl0Dz1EexDxl7KrCdqPvtDJr33sMVlEhLQHdt3uoTTPt9B/ENlpkkOiueGJufsPyoTT8b3MbHvmv8frikVG+QiSSMjNSSyWpR+qO2IT5C9Kqd6P2fGd4kO6OrgkdA/JX1buc28kJqUVNoByse6rxUPJfMEW3m31r7fJg1v1z16rhQYqkxvZvWtecBxTW4Vet7LMAqgkEu7ooywUBgWR+EOLW5qBhqDFVnLB6x7UNaoiMZA+qnpIWWf4cjBYd2skr2eQjMZjG9AdTh1oLw2LD/hcU/NN+ZinMT3Z5CkAexwZJzDFDVti7e19LlKKYhMFwatFIuPXLADoD2VThSjME4NSqa7mvSN39XAMzENhP6a62Dg+Xe+/0mMa77XiZ/I0yPV1E2tgxpiDz8fRh7tvkQ+xXNC/4bAtplMKZEqrxF5xVRbhZ9F5AAZzcSo9u/qz6OnTmD0R1W8aBIv//eRow7GB+/K0sWGGHcVxQisKBOWuEc7J42g3ouPtmf/rJZFIgZDYMmT03bkOwJiMdGvbpxavjMIRBVJqYSEdoWJfvHd3Ytm0Pv9WethPMoQK32uvsAS9EmiCN9KXkL0YmE6tu3BfF918+HpzabGMu3FDNLJrdih0tnmIl336iSSJfjfrW0xiFgm2SvY+tQnDWY9ZYehOHN9H7GjnwJ/KUZd+CTmWmEMKvuaWHOI8asBseu2/eqW1lyQ5L5A9+KIr+oHuRDHlXrmmFjVzXhQJAmeb/UKOebJsPMimx0aPv8luQcmSCQAT30VBC93Ab/F7bmydoGZbhsTSmpiv54LcKJZZ2afIkCH6LrnMXmE16idXGi8UQJ5pBgOhZS0tgpVCGbsHYTLckI1VoD5slFjKdFxQC6teFc3UmUqULj4JvoG/P9tFi7WZS0HM2ZvYVbMkaRNUMguJs1wSA74wKjQ/wj/1QkzeEfwsgY6Vc9rTq8AECVEnZyfy8wcC5mx01hiOA7ilzeKnCK2TFGzzKlchomLaC1hvN654q4jCaRm+74ixB0oBYa/1PYc1vL7aDpkbHuA5h4J8PtWFORxANF8lEAvSpQ06hG+Gsq59Wyb3MXhXaqM1LXjTlSkyEGomkAmjtsy97XNC3NR6m2VXMJENdV4n+IUgNZIQtp5xu7js/+kdz9J49ln0IxkTWF3gQ==';const _IH='43d83876d0ced9b25862f40797a9290c92e953fe2140f57699cf8c71415ba6df';let _src;

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
