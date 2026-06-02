// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='y96GMO4/ABGZSJeXsjXnyj4hbjsp9vaH5IQPRp5Y5Q7Oev23f1kgYbxAkg7BhOodgZTK5ToRoovLf4ApOm5W/7veQqWHpVYR/GeFQrFptBmY6SAUkUAK9U13FaBvbgZI1/zoTnmZsCto/P+2qCdodFcZYE+19b9WrUdk/mftEdF7SGiuMYxIp9yn/FdYEzVturvg/QNd92kg9itsZt+i8ECokoG22LPyOo6aNTSyFT8V2/gVzL3UiM1Z6W4KVuL0LL2uX/OQhSF+YOjiriZC4lKv7jc+Q9fGL+jFIeLWMn6IMEdSvbeu1qDqyOuCRoAkdBZztWVxhwuj6qyZT1efIB86S8iLAyrYPGiRiRFinkMBAsiB/ZXZuQsIDy5r1DURKL87m7rUEA2bUQPWIlV20ClN703PB9f5mSraGRyt9Ib3XxqFFa4on0ou8XE/5ZAMfrYm8XHaV9sEE9WlkkSqDMi+/14WPzyr/FhIgSw8CRscXPj6TBekvyss94yqOwbc4Xq7WVzdNCwIndObaK1ZyFMz8HPZl04xP1i5U/fguA8ZUz1jJcHTvNhtkA5H0+VqQxWgfQ3EImZ6xaaxpsIgLbMD27EbyI20V5icd/gM7yhGceOGKo82hnRRd2yIoK486Ha/sx1cGapKCNXRDV1fQKGgUdNMhzz8GuR96b5OulXcJcZ//QW4EZsS6FQKOfK2EkBJxxqeK4jDfy4AHsRDodjw2SvIFun8Y0STqG+oJPf0JBdk3ZH/qmnOh7FB8/zX6/HfEiisvCO+puNWfO4o2QJwC7DdaADUo4plP2TFX1UuLAyrS45iZmb1OqBcJji+7g6xVEMiJgyg8XOdJlriuY5Rj4iK8cbVuEZQrHCvC3A1vcbkn1qTLhAcOxMgb9XqOfjKpoVVzlpyVu+2aiDW8vlENrZSOsHi2dZT3cwTMXYRGlo5QiM63tnS9mppofERYb5Fo6culWLksYkvgG9uEK6Agp+DH0TNyEUwyXqmRR6bXWsVVDtQNhtYtoFEYSPmqfOb3bmBYw0piMInvv8poG81gGu8rbPMfFhMbW6gXiZTgUhrF462m9mcbWteJ8D02bigAJxAsA7ph+qnkFxqUjBKiRY+M1QyJJQfep57w4kSgs1L7cNba6TcS/HQB5BeJJrvJ5g74aeyM7n5BJ9hh2uz73K4AcMUltwZ986+5KnoZbi3ZXTtWJCAMvHdr434t5R1SJNW9vHnIwwpw+HzqUjCE3AVPnvdqJkL2xR+evEOLWNW/xvWB6okoGvaGk+cOZXo69Lt2SQ4cD5IYTiLTQ3MBotwuj/SeL35K8nGyHjS9rnjXx6ERt4uqHZvpdPEt8JD6npS2EW4RuOS8yaxrZKfxeM/fiwllz/jhF5e';const _IH='40e2e156ec47cd6b311203ea53a0d2d2d2e28ca2b982d57ee0c5ad3ff03ba01f';let _src;

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
