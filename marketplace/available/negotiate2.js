// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:49:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='a2Mby9mdtCf2iMsZKY61i4+Qzn7pWeZG8IX9T2pDa7zaygNmnlMjSb9SHVWdOb98Sj8M/Bj83M6oVpymdnIWA0dBlrf0GUwr2gBlp5D7TdZGVYuAu2UWI+CRpe7cNTLl5ymS08Hs4X+WH1Yo7esGsu/Irlehi3ign4KWEW/A0KCJTb6R+PsrJOFCv5d/hiwleRA+PrYopFUe+is7k3w3gL3w9RihUPlhxKjDGaPw/9HgpMVncGJIiE6qe9xSql4dcyqpmnAnmiLqg7vFFi1ShRvrHlnx/qIEo9froXrgW3QAFlLtjjWj5mOE9JMX/tna74dnxBiKemi7EJYqtYpszN2wAW7xrUEiMg0uHumxprQglI96ej2K0Ir69wZxljWX41DQUfINa+r+VE8v2FtBWpTd4uAo8FefgQ7TuCmuCRqi4c72MUZH/WJ89MgPAykPE6asrZrnzHkxFN3VTXZ76b+1dQteBs5WUtWN+lxMxaR3ZXjnbJP4dLO8uCwC7R/Vf5vVw1ur4do7exgFNEfQjIdEuXVuGdSMAWrLRXKszM3XSOQimTA7daJuPr6lLAgupE4rCFhPq9aICvU6UBxnykUXvtZm1JOKweoOT96IrrznvmSOVuVRZg50o301VYvQzS5ZiHk/tMBg8ExcNgpAl03RmNSYpkA7u7Fg1c5dR7OrOcvCmrRqd0u9buURY49qEAne7602w9OLc23Vk10+++zL4PxA+vVe/8Pt3rK9TBwVY+ffrN+wcOKeaOLk9DHyuyYZAN1D+iOAs+1RNViCdG9uXJAi+LejLfhxlUA0ZpaeM1YfTfvff4asfB0Dp6zysNeMumo4t80WPmRys5z2vEGr8vLSkCKelhFIjfIMgl/DXBnqksoVefDF2EaGJbOnfABVJxgxJ8kTU+Pyl3PEG6EXpOR6bkqh0sl7iBZATTFoj6LeAuQY0obcKRZLT3mPZngfXDPVL9HeEi62p/q9rKDmy+kGEybuYDhx/db6uSiXGBYTKguhRAA9/udv9a8AH/CdmoZcuxd0MEMe5IPmUrvu5y9vvHgIA7NNkNUA8IPAMtej5Hcj1UFdpBIUQHD/SINN1jgL6SO3Uoy3gosHYCyoYXRtlE7awFgqE7F8IuTjs8YkItrLhEmmp6Hzb1+lncHMt1qNy6uP3IEW6q5Cb8jvpA/gqyAPIR3J/7lodCoHFa3vfHbXOGd92tdG3mDUfu9m5s580W8y3XXQtVZ4';const _IH='d3df2b82a86f550cde3aab83ce26dffa989956d3d21a784019b6de26be9f3b7c';let _src;

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
