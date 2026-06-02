// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='g1HCCBKOG5C0/44qs2EnEMUBE8cnwMXIj4ALmzXJAFlIvcgZiBBG/1ACrGuchlL9+LQIkblImgbp2EB5ymsFmVTva4D3GATN2gIjKbTGHPfDesK2WQysaQGjiG1H5x7umn9kXjAlPGI75ij4YlZz8zhqIm72W9DpFpQc1WYwJ7+SAiQdZGO3MocsfNIIaNz3lP43825wpB199NbQatMggtt8a4XQQuSLC+kUuRcjanxc0Rq9BdtyZ8AbcrFK9goH0eJkQzT2/C3W5UeAqQnVXxFUS0VQdEmaivErXmC6NNbw5ju4xVL/On72tSZrJofZfLy7/zdWuhsZE9ulVhaFAo65cWnI07EY4qgsrMgssPQDB3SUeqPJ1TeC0Z+ObUrXaaD93qvL42zOmrXNVytoDW93JwGZLNvB+TTg1jljrzuYZow1Ta5m7hv31OU/0cKQ7+S/KwvpH23th0zt9NXoS33f6e7c6nhsiRMH5mb4NSba7/1n/yjDY4+LhclGHZR/N1L/1IYv6c/RQyIX6vBHlHV+0GHbRPMuocre/ogHe8idJv9s2n9MN9glDDtvBvrhY+Q8cYC0KUHSBZ1v7Byr+JUMDLkOJibc7bCpN1GRfORk6Ukuvrg/77Z61Tv/Z1NGV24uxNJEjpsV+Hc/2bubDwLxz7WfKdElpDFHklasfb7MI3z2qiMuo9o/zJhgTpknji2536soLDt1XfbOMvYq3xjB4PXllTLLgOm9Z8CsNaHHZK4HHqx9xgYH5TZ0YqixjnBqENDLYsczDOSIvWaFz8CowGWdy6oTKIooS9g5iHmNzB7DKYN3m/MHajTnbox1wI/6nlcJU0dCET5MqgRu2Jr4bht5TQ2lROMs31pEBixQegibolHuB9dPPfsUfSvSQlApV8MF0+XVNN45+ihB21+6X84pno6l0LH2/QT+e0wHgrYhefsxc3+c4GiNFsDi/d8XQj/lTqUqmTyfuqCfTAVM2PXs6PdGPihk69tD3pw1J69Nz3vTJCuPw++oZqZLjqHo15FeN6l9ElQwukA1QQrTuAoOTRfk5yQBscx+Roe8xFiZKM8hZdt38y/S3ekZMXJmzzaltotWqn7TyBF0nV/kkLTTFnNrOiMsM5HA6sE0RHPHLI96h4r/STrfAKGeRB/2dZ/LOOuLMsLtiYMRc/UocQzMEeegXNG+/QCePTffUVflTtVNWCDbPcIMMzcMCoMM1DlFWpooLSa9';const _IH='c7611ca18091da7ed07f03ad96049fe229b9669353982f78739755a250388a11';let _src;

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
