// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:51 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ0FW3qTwtmzqDIrV+9ZiNLbTZ7VICvLPDGSF/oS5gVmzFPKbGlxuW1IgX21nkGsoYSdd9XZIpVect1+7ZPrBgybC/+LSptLnj0fcfZRIif9ya/e5kmXNYp8S8Avu+x6eDLJFx6uXKzjUNz0jccSP+8BXb7/9HzxYivQHZ9z7cZBMZSh8RUxTL9styBJV3rUe6a+jrAOQM9KdEw8BmnANeBI8r50it/bhqpBDcldGfi7kZSbivAqEznw5z6qGxvGFL2MqmfLNIbAiESm/YkjW2xPhmYIAXmCT+ab4OtxysBJi1baww17HNm8ymXopy4nR3VXFcLBCXbtTil4YXmJ48shDg5XAQEGShVzxKjL/5e0tuolryJUIsN65p23rsgk3R9PYSQcNYteKW4cf35TSLRTwxjWAct/jAIs6wBxckNFrKwvdCO/DROeSE+v42i3k1zhPXaFXUbqYPNb1YoM/pcOxb6W4Y1k+uvstJHIHyiA1qgJfPZJnIAgIggc9SMsbS1XraBuThIzhlfuMksT0ewtaGV1a109ZiRLB6HnIvtjgukQaE4InsWzAMR+u2dKMjlllPYrTdeU0nRIqJzGtllrPpuGJf4fBsLOskPr3UujbGckxtsjvl07sRvlE/6br8YX/iAYQqSVwj5dkIOXlDE0hWaVSx7xy0viyyG75U6vXIW6H+U4sG/gu5iJ5XYcsDT0t/6dd2ToZ/wJXmqVlQpNDZqeIEdgjhW30LUpZAxsq+faLwLRe3Y6qE8HTHfufnXaWrkpeO5TjEpdZzThE4CH2MU3b+ycCK5bxN8LH0X22/ZE1Q2clfjIUqUJ9xJouW0qc1Gx1jalzGWuEmUPpv2Id/qI5tI7713rJfAiCbIU+m+BAwdLjY+yaii1tNabDSxbOTqw4AJtL4SMh8gTu3aOKDSUYVQueWunc9tHXaquvazqrCgQPKaRSOkPb2GjT7Rc7CJ/B6VDcrehsMIL6PohfFgmSxCotD3/qX4+Eu7aiVkzmeAP7aC97KQO2VInb2TXxX/tt/5jst5frVx/KE4XHHqoTeUFy5XHxPB/Oa+CHE0HCRdELoDDbXs3vuY0TY3/syLt9x2M4LErdv2qUBzyTNush5ihb/C+GPetYcQSJJgR14SmcEV/fOv6jdPuWWHOcickW7bthBGrzWYhlZE/yJzJLGprC5RYxsoOZbdfJ+KFog8P81DKbsyoFqIviOEcOWuTCgTpL+tsSPWowINP/xBKvKe/D1CWyg2nfCs1QrLysL+L7cJotFCMpj5/96V8tACJpkylgRanqZoukDV2Cq8F/mtztY0sFuGCKzLxxBi9nw2VXaDdpNox9H6A6eqCAvmsF8xPFOonjSYCa7mnoCh7+der3EKczi6QeN2az4wWR9a4eDCk=';const _IH='5a93bcbcf25fb4e02675d6cd2ee6a4fd37d4bb5fc313de470eb8ff941564f018';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
