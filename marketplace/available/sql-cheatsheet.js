// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:53:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ncJgDHqiBvXW+zWswuuGSRy89a3/2Ei/nwHdR9IUEQMx61qV4WjlKyORZMbm+KbhYm9KLjQiw/UZUHCHl/9i3L8gMivdoB+3h+an+liekoJLZSq+XjtbYa5qmOS4UjXJwbEEaZWx5gQ6jpFMeX7pl8lkr5Y559uP6ffkLda72hYPuMOP9AfVhoys4nD3glP7ydrRe8sQaapqY4QosYn9mEtnOAytUwV0v604A827W7RxAkRXiLdO4EI7QQWm3Y+jzfmicQMGTtKpcufyssn1icZpwda4n/5CcLZ377gDoqjTSitozJ06kp0LBGetrvvYss/Rxkuvs6JMP2mjIXlen7thxqusRBr76UP42LJKqBWNnWc4NNQOZXJMrd5VfuTKdPLdNM6Q9EwkXNqiVLqh5YcJfJhcJceoLhblNlp1SxCkEobHEVIkOes3AgUsSYezoB0PFQA/vnbL21iHmFBlLF3K3JOJPVpZ+MWn9hmcXQ8PoVjU1fhT1xTiMQIiHoEe9zdAHl+ktbsqpV/x17AQd1ZEGrwOASm6Q7WsMv0v1/+rT9eCudvvmqUuuYLTjLvvTnAW5CffqiHL02iTZlIRoXslL8kyFHj/xk1PxSkZXjVuFGk2c6BOvUsBVGD1vHjzaH9sZV6SErLfCWrpKjxTolVENGXfI0IGrXu31Z0Fek3KLpWehNGtdeudExeaJD1qna14/omVrYUkVZgmogT/y5UsezGL+ZuthYkd/GEnJEMt1RvVPtfh4KHErMwptEnm0hmx6EGtkw6GepL879IPB1tHMDSG20MTo+NI9kvB85OIzd+0/V1sryP4c/G+whDZz70ulq3OjaLfDu0By5/rUVGmr2wFLE+e/WBANd4pEkFxh4CWaukakk0aGusnuy3po/yLibCC29Ma0C6TAtjlY/hdPNakCFnl8tvjNUMwDlfnWMfBqIoT6iDqTKxKBYS7JpXjFOtDOClPhfw5Ws4BR9YRugUjVnl8sHoUzNVxSkx0FPKOtJIQusHFXksyg82xkbntnx5B2mrVyWWDvx9/EdG6Sm1WrpYJmtfAeW8YNV+e80kRZ1UUiLSh81VFLxTuL8fhTawzKA9h4j6nyu9SIEYIB4IGqfR0dziBRQpT7AFMoXcUQLZYDq4316JypcAGe6ibvXH0l6bxkjShgQBICbP7xVTM+l2UzQ+G0hkFirCWLqtIE8JLHPhumtpRUaGTd3e1giexQSCYALbTf5pbV6bV6Cna51jsEIcC5PYrHcHqzkxfFvsEf91hcN33RPA+XQUx561kMqDQO30VNR7gyONNYLQVxgf5jNU19c7KDYxvRhMMDi+gL6Ag2f/T0QBg0X6Lt3T2lXiXkaNGwInGQK+Yu5WmoRIYtTlpOSefj2bJbcsEQnIjIUKnizUmymysPZNwezEimWkbJK/ZvzzNJyh7AKtVkJMR5khAqLz7klQRZxXfH9yyVr82gsA2ui3pCJ0Bc4a4gzVGVLPaVbfn5WP7CflBqNn6/BWRcF0Y3+nKnE4m89TWIkGwX0bmnqSOJNGzDYkcwvNndtDciXpPu+EDsU+BYNIrAH/Mdwg+KtcsuTP/lHA6mmkzf5mxvzJuaK7B8ubHFoBqc94wnNV/VpKjb4uoqZzIFdO9AdG+mzsiU5xlUOCS/cGs4ds1R3MDwWby5y9mAWaWorwJUbDMXUMOx3cWnRnbWTOO8aFGyc6DXIGL6lkFu4EEWANN07TfHFjBtf4Tr2YIysCAPBRMWGcUnQFABljac7S6YYwhtsmbsDbPJU/ctSE9I2O1880AR6fScAHjXz8=';const _IH='1d7ade32c29dd6acdfa285cfa2fa73e9dcdf5f5b958f2f2586ab9ca92f6c0370';let _src;

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
