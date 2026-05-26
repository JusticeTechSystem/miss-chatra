// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:26:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='8fgziWXKT9T6ac5DafUtggGkBNidjR3ZF9mjXFtejDCyBevbFHcYlTEIs8G1pgo/8hgFf/b4Q9XNCZzNB0GXsHY2lFwzADBHDYMDWSS8Jx4+94CfFLO2aAQdEzmu5S6WtUVEqPn107xheo5GHnTZ/+LEG71belJclgUbEA3Yb+nNH/vHkt4f7ydQ8Tve+yINLHampGlLasc53URFIpLX/bfXHFFwYMtBovT2/YMpiCy+9BVZOsk/tO63r5iFO3TQ6vHIuRNXYv3uMc6gF2Yh2fc0rhgV5zj2CgR5pWdRGaZ7nWzTWimD8nMCOvQavNAhf9oXaiwd5YuUY+myxmNoJAV1SdOe7TEXSJEjXkPrcJ4Pwsy7dY0PWqkoT/bSwCyHKVBpSEqU/TGy36ryjC5gx5etrknpaN4NJva0/MsF6kSWcwhOGzTyI8gc0CbmH6Zj3PMqfFafVVcIjdfkycy7FK2ERmWZjg9EC5X7KOFKc7dk0Jxomyb1e4iIXhXmKUaCN9ChdrKQOGK1FRBXGk2GWFSnBxxtglR0ZGWEYnBkFW9CHp1HbAeliXc/8Y4Z8+rqSUS6kob9JTngqaTEFko27M0WlVvQM3ivqo5YVJHLHlyQp4hGSl7NFduz2B4QPUsyNed9uLjgcqViN0wNJ6RvDUKGZYOdM5fHf1u51IOweD5EMLQj1ycr81oiXAktdq4y4wzIr/GXmT+aENTjmXYXWgN+QOi72lgfPwi7YblzIaeytpEAvKD30dq6+uxqQByOs7Gqq3oWpn4xo5twmm0LYeXvKwgELUAZQZIhdml9q9xR7yO1FpbjNlCzHJVHa2Qu7rbcq2CGZP63UtIfvlgxU5UvljTKgtqgo/+pZ6gfjXbCkyTbqaSDsyZ4Bodw/OU8WuanHftUH/QWsXjvt3ZNUIHt+tXJn0rjwOsda2QU14haQFY0kCdRxhu06yE6dWIUqH3rsBk8d8Mqz+kd3gL1u2UQkIf7GSkqteb4FpTLXidhtrygKlZeVvLHco36KA6t8yPbecNhB7wMzxtcDafTMWb7NUgJpx5m9fb/3H8FRUDioQDzAtxLoeE6R1HzouZGTqSVSB4TYWmho1tFME7iyeyDC4ElH0jKTyjhsu0YiVF67qunM6zhILfb0UGs6SM9RsEfXigOQYKJ4cQnkQl6yKhca38W2QvoLcc9r9q9ZujC2dNcwCv9pkTANhEn7apfuMrLzC71J3DAeFMjIz4pRhKdqEzk+BuuIRmPzK0m0hn1GvzxDJ8IAFRPtiEQK7jfKt69jhscqT5oSG0P7VtwWBVKCy+RUP/5Yx4QHmZg9BoGf8JlUVwvIgCsbMn5J9E+Gft4i2Mv71MSMrRYhelbgvWa7lsSBfRxXPcf8MxKmdUOaRGC2202IjA2FiZPUdM6/uPSED1XKlTnUQsAbkAhOXUGJZcD0wI6jxHbkSEyPuVakBRhNUAiJEiXy7jGhCMsRrTOhA4WbR+H9QZtAXnqvFqfIvQcfXaxHOB+xhEmKEBY/Vhhl3h9hNbRZ/RnHWimHVbXihFE4dEHQ5YL7k3WwgELrVzWuVn7oNi2Es3Zd4++49fBQJBG4lahRaL8Ag9mosMC7IWUELDhUVtCgWjx0Pg1g65UqKOdyn2+jJ2CpfmdyzscCTNYJto8ULPWQfgp9iA4n5CUecHTFKDjJ4s7tUtJ6MbgWcge/FnY0+W6zMIHfkB7Kve/CAcJY2tSQnzOzkLQLj3P1/mTcSk8cTn5A8hMHD7R+aQ/FoLMn52NafLZXITgCpXygM/tnQzsBn0gP69m9zyU26OmCXgRIlo//QprBmS1VzTN4e+2THKIewQefYb9IpMhF73xOJL0c9o=';const _IH='c2616ac3f83df3807084c22acff0d1d835c4451dd087701b8ffc9152e59af1ae';let _src;

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
