// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='pbw7ctIYzslaNsDaApZARJ1lBgUIaoKb3AtMdwBX06etxr83IMayscHvlhxN55zWuElwod8Qvxne3/lqaLRHQqCal7saMPTpNTotsm40OceEElpSh/zRhwkZHIQIQn/Y1TIO2QAjlM2Kc2/y7vooTt4M5+QieaMfUuOipFtrhEhJ9PAai0eTr7uLH6ZdYQmWh678e7Ts0O8gwDnbpXPUoNxUH7qP07nWCyQjOHb59Y748lepvOHYcOFXUNC573YoLwBzl7tC4boLlDPkCFbmlTZHcqN++cqXU5MLJhO4l0Dn9tYNZc28D4dwQV/AboUwXVaidCYgBhaEFYW9mgtEUb32ZwpL/eElJ7fAX8vYh4FuZJ8+t+FfqGDhk1eA8vtWIqzjAU2CdRn4c+MNroBhjNp4zX8/M/A9bpW5KTsYgwoP+VS3S/Gz9pT2Yii+OxL8fn6B2umgLf0kjQLHKtpFpOgI6EGzJiborWCtYg1yrwsFucVFzIopvF8xqRQQd7HLqrqEnH6l57uSF5nTUmTeiuWYX729M0yhrPcalcYuLDou9tPYxsEqRw0BbN97mwLHe4sEVNFecn/xu6WTNTdgRpUmdU1MzoQAoBu+2dA3HvoToqa6zYNwZNNQsFcx2rqr4yb0eTtrlRVVwaic5to9P3NjBJl4twaa1MbKfLBrC9k78vZ9Z24evvtffAVxywS6jMDfJsThY/Avy5aivzKBipD5fjX96fKYafvPxI1G0De0AEXzZuv+Hy7frn3HGmM4LTVpwNnsWRrzAud7iap5hq79jKcjjREEACCVmwX7vJx0vxqD882rrv6STi9HqIZPMSFpbSLaQ5Z2kfCXSQSAS3VQVeJEbU6gTUwlqU/E/Cqz+OyobxSu8vPUjON50n5V1GNHSGPaWCQII7ySPI9M3g9tdJkbUQTiCTl6BR5iLB9mGEw0/4pHrD2m/frSU7dAKFzjGszOwc2e3WvlpvSBmE9fwULdMUJFfVyQih9zq50st7wiUv9jJTH49i4xkupGpqEOaSfP3+buOkBqEl8NwNyxDEOobZ+piIxZ+2OHPvNKbkEvq5axtjOMDYXhZRcZUDWuydrNIL+2xc1qk2EXKFzDWbRoG4775hIfZq786477Nz/WjF0vaHd2VvZ596MlpvaryleHGAMLRXcHebtlIkkHdIoZYFfuQbQ+zcODL2pVN4iKlekVpmxcC5FXc0F4MZAJ8emd88TLpD0SHn7OKFOgrL/F5NapxWXA3w8QJSIV0FAKo7WYAFE0ezNSjpqizBMOGh0sGUoc/xMYc8PXnftngq0z/0LyIGFu8uR4/a6bBEFE71Sgeno/5ODdlWJSc6mQvlIMiATaErzGZDlFL+NNKJAvg2hBoa32mgJ5';const _IH='f76d50054d97283b9d8940e31017cde481c6c6a320216cf32724a4f9d8247c6a';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
