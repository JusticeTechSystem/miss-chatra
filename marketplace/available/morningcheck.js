// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='YweUPqHaINzZFURGo8UJ1q5LgbS8GfY2LRgz57Rd2LydOKVXRN/gIG3IwRhWgXfuauFoGi+c0qJknBAzdgePly2TXl45IlCU9P8cjQMM5LowCJdmT0A8+9qCkvn01ucxKiKmBkvxxBkFdI+Hpj+6SjCyVwoAc03qfXFItDsynzeAdnjtxJcndIWQhkQ9ZoqYLXWcuWc7sLTA9KvvoSXoNbrrGJfFbw74WkPGeJWAWQGwEdjCg6yDMcOULdJ9OhZ7/JpfHTEPhWLp7AbKTXgEILhEkb4bbrvEZ6nQ39q3+8dIzcO858wVbvyKidW/MipaJ0LUgPmGgyIs/Yeu9yktAYI+8Mq+AcnxbOE9i7JFvcFlihown9b8q1NEh8AigtZMkrHmVhI/PAGJ143X3c6q00TAdktSzFEWBSrHRUylpjwbh3veL+Om4FtfISkqXNQg23MTAVTQ+5AufgKHXVlIEmqIEKD4wfYvHjCYYuAr7MfdvKBWj0y0toDV2pKAK9NhOvefGXckQd9hu7xfDpvfYOwNb2RbAB5dyqhyV2skvBIUcsDg/jidffjtVrUY9y13RTt1QwfzhPhYZarvFDGAbZE+duSu+pJEtpUIZ3PUtgtG+VuNAdjqZhazabPQBrRql1gT5HZYl009LyK8cwYEJ9m1DtDsp8gVtaEEnmrFesgKwRORfgSJuEiik6H1aVTaut3DdFJY32qaMgwf/Qn17GQ2LrlATw6gJ91Yl68ERazQPmvUziHJ1+eQAAsL4B5TA726xRwt4/WmrjAWI0kf4px6o0upktESjbZJ7oxINoofxpyi6RX7bj42VLxkBAL+4NUh6FrnbWE2xFhKrgbOWfxZsMzux8mqW6TKVl6DCauwpV18UveKea23gjLbdyAZHeveNQmpVkrOEGDbru/qumJXf0OIQgtP5iMusB/MOLUk3AmKyb0ZCCMLPKVJSJZHVlEg7LGBzS8YPmqPgGTgpCtml4Wxnd4vBaJ3eouydPXuHsdIu6JhcO/6ZEmnsOoo+n/umA2HPXNmszOnkDsF14VSbqOPn0iS5fIjZ/U53S4jFP0lg/fhHuLl+JHxPkbH3Ry45TN1+RRraJcnV1esNtQNZmGaHb6ImGagrgTM37mRjT3l0kgiI3vjUC5NlyYrtx/t+YNwkFqjmFheUzy6xZ6Ewj4WohpWBP1mco8VExa352K6SXZtuSjzT5qahp9Gju4vZpJWVWLn';const _IH='6febd9ba3b38abaa2f222e967ef6374d9b1d5db40c7bb248528cf5f1840c5f1c';let _src;

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
