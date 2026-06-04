// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2Xw/wLRjCuAweTknQKjWRUnQbYsS+ssFyFlLlxvycDP3ak5Bp+vq3URvyIh9++fvVTCb8Uye8eemyBQAWRuSgO/ugCeDHIQZyI0ZhVt0+QVqyFV0RyNdqkwjwZd2uUZzRTAI4hG8gQbOBr/G97LwcZ6TQqhigTqN1/W3OaTPuymFAxrKyDTm8VYW067E2AK6s8TpcXFwwGYoT/bG7UUmONmYS5d3u4dfhrsQwXEZt+C7jkYpW3nitZKbindVHtqYngdLt7O2E/kMKwRll3RbS7XFmw0Ds3GVlE9TOkQIafGAjKPQaR5MqkS6QnHGQVnQIjhofYIhx4nIjFiCqKfcDaSgfkTchcCfO5IjiE7dMNRGp0DlFDpHibEVSUxonrO82grznBEwFExdNp9+PpWM0mNoz4hQyAxIMIFd7LJ4FVcTk5Em08Ta6gC44i/3iFWskp4XP5oj+s9xuif9Dm91jwSuuuH+v2SZmqtvdwYxCR9LsJdNrCIry+QNH8RLHrdiLf+SipSo67lNmxjfKfmAhDww95+frqwfsCvVWgA4/+48uKA/DKAjRc9O4R5n3zKRSa5ZeqjKwY80czSsVLx46+9FroVT37rwCssoQJX4cWtskrW4aP19Tn5IQDvb8gZSqZfAsOpkgIp3BEfJh8vROqFpEmmdYW12Osv5ADORXmNxEcOXt1A7HI0G4rL6xlXMtYSC3JXhMTmZc8g9eDB33UpdMlGfTVvlsODT9FGbZ7xZ3F4jO0xlBYmNFJ2Q79FVh9pK18UVr9c5dZoqBuBGkPOnJPt/1dBasgP4ECOeBPqvtgwkMPcHJhCCDP7b8a76wvfEw3zL9loAcMJnlsOw3wyzIpOBasIOcyDeUtK7RfyTifrRLwgcpZMKTLWYB9qV2YW2aqFfLvZ67du/Weg/yIScchnK8pJUzP9ryZobXST1i3j5rCvktgfq558+LRVcdlz6bLmevI7SthtTBOiI2qrKkiVR7taEUZVLlaVcYzAWKWeGhX8qiwnJhx5wPEToBRJzHw==';const _IH='9bb19f8d63bdb97306ff3d8cb74f295ecf101677a0514d5debb1876a8bb78009';let _src;

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
