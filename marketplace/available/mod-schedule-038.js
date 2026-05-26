// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:29:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qyC4+5UF4THG9RbKE0oMvq7x1rk0MqMxOOishyoDI9c5CZ2egITfqbInThrmKSFsC3e9XWO0kpjuDeUckxkC1DHMoX5iuHRh+J1Z2PUYHDpZND+ons0qol7LlpD4lo2EbE4R3H4n9zelcGSHRHqZpvoalCEUVRFb6HRrmy5TBPN/AoCcDP5lofs3wfqqpQhplkZ3uxzJhIyphzrhuoZv++JTl6UZiABl3VriMwZT6kqsOahtVLXwFZrxGvlpJDGtSW1+vMyjucF+qGN3qGE9KJDjXb7sJxJSyp/CnT7czS0s0mXWYCFZtM//DryyoiTotG3F/L0WDlDEtaEzGEyN5kNm5zIkoO4oFTG7psJTqfTaGeka9hOilc8sg9IPOD5q6VpYD7IrBwQqrVoQPw0CBl7F+BZXcXmAGoXtNuy2f6xukNXSHPhT2LHH1thuO8oTDKLtFcRI1fii3FBHd+zFIPN+S8FPICzXOJuo9tkEexRVktsrD6KbLQJmI4OUMRkYgJwaCIP+lLUjN4wd59WmpidMiH/JN0LWHIXvBT/Jsa22haasYIDeWteQRrSxI8V1lAuT4wLMtO/9Re0TGp41jS2TUeEYbYutoQouvPTWzSDFMF+KE2jf7CkJzuYkUMIj10BncCbKiyAICvEVLgy7FL3FZcz3PTUIkg5uu0rUrtChlPg5Ijmrqh59mQAYqvA5DB6cSsDccv9BgxtJIycp+ElzR5boP65i2U6NB4F87ERHctIJSY1GNnMtYpNOBRWkm1cMVuQ+RjcKjsUZxsThZ+0LJENnDqj/bNspQNuwGU3iUcQ+VTmfyqAVg1YTxTZAfsYWCAhZ+MKYrVZxsAoSS8cgPsci6EekqJYXC1iiqzuqpttl+HcuKIhmBX6KUIXYZ9ok/fkwE1agP/J89/uEuCoy+0RZQxTLxPbeBOQjLAjzwDHTknyBKZ3PARUk9nxZkzrDyblw/0PL6sEmUyAjfO1L7UUZ331KGDqyHOtOJUw40w+jfdvBhmi5eK8duwZKMKmWgzzBJPmyzdPF85tDoAavj6xECsEkiWvDfM6dojW2gixj6hiitU4+FO3UbPTIPr3vttTH3Y6uWd2Y2WgweVF1al19Vbw2lQbti1smSTVSyp9ktqqXkAlil3qEbM5DsalnOt6Yyjb4zs3F3dqueaaNUCUrpUB7NBn6ae4Jy8Z//rGZdIxAtxg7dtRP4WS891zmuTZfz4bLJjFK495w26a0ANv73Y2iPpScSek5ueg/rGmb42Oe5kTOpApgN5kYlgb7hqN+lBaIyexLDPKGt7GjtyAZ8dgUx1tTbKYeddv+OYbHXVl3WS36u2/RE3kNAQT6XE+N1l1eLxW4g0L6zCs9+gye4hT80/DE++VSue7Edz9v/C8OgN12dSKEHoK0z9nYWd8H4Q==';const _IH='6e7bcb3197cdc7297503f4d17e92026f45bdbd835e8c9fab3193957772a9e9b7';let _src;

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
