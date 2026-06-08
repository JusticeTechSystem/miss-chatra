// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='XfZbiM/ndA04RD6Sm/KsEEqESyrGMiSjCHeJVea5vChC5CzRmVws8JYDVQ5T6mxxpPm50bLbaF0QuWfs2fpADP4giBKmfHQwB2H9IMcJbeYZR29j2dxB6KffQ7Q5GY3yEOH6fiMcowATOIEvaUWfFnRJ2gJmJcORwrQM/WlNLXdDwaiXt49La2mQwPewOk2nYmYw6hvEQyqjAY0VPWndBB/I5omlHbLcl11jfi8Bkkuy4vFKK5s9+tXRU7bhvZSUQmcYl7tcWKTg2pq40R3KKaFfr7JjbF3yTp4K5wgau7pnMQjXNUJdZERpPwlT4SpuoBSeOZtGIF19tdakbfU+39ROTeLvtiTBNSXi/BXF2PqtEVGxhZyVD/hmp8U8F/4nUzDROJWUc9LZO2olTvjnjXlm4e7PjDVLC5isMXXwqNbSdhPCqilvzcTFN6HtmIqbod3ihhUJPicYws0aq/dzEfKGd3uwFEnLrf8Z5NyHMzGJYtD2vcjo3suDrBdFPzVQ50txhWXRTzwSeLsJvPmkbdZL6zPickc8vB/X4L3aHfWbHnmsvmI5ESkdAQq+8Ug07t91yZKBsMCrWy1ZapZHyjjpQlyFVyJD0wvgWBdQs3hs5OVhnb24OBWYbzWk4OoFsO2ttM6vm+iSTFxRBGuYUDYpYttISyQIGo4DXvm3H33MqJ9ZqIba1i3YPYkQDd6vCB+t1yU7eU+09Fq0X/G3B/WYU+A1lP9fuqQzBN5HrACqKIfM+ABAeMSoWNsvA1jtglA8Wst5g7UPZuQ6n8D8u1SvUy4FbA8AxdIsxeCoHLZpdm5swmL7TIyD9GCm4GYpaMoJ7q2KmaLjwrmjKUzn+ZsJEpMSwhlcr3ecaeaL5KJ26Y4lqdd8By5PJqV+uENwzVm2ozCnN4BymMnJTj0+18oNNMAsaWFnko8F68G4lvptAbaSl0z3eiQp5FugQS+zeCgBon6t7nsRfLm8BA9efFfeAAkcMBs8UN68ChC0YlOkzkqXh5wXr5DtVALG/p+iKoro5/Q6ycAPtcp86lkHAQDo0JeUHnvZ1z4Y6hrlLsBjTmGTQ1m5ZqptrJRsTJsKWZ9Zm58LQMqcTkY9zqnX7S08OrmiA0CNYvMSDqNWKouclAyRd0zkdl26ef3RRTD0enHzYXPGkgbGO/IsbnfFmqTA3W0kyJpzxAwARMl1MOc2+svPiYa0xKi+PERI4mZY+l+S+rV1KugjOSGjqc+qlmwG5pviHzIb8EdGwI4t/1pBkaV97BaZNC+tG3EvvEUserj9xcjpOMIz6sd/vbW2XLS6aYVMQTr2jjgIBtFJCpNbyGlJQNm0c5x8fRzwIzwHbaVa9qANPjGHiaUifJLCVnt+tY5ZeOcHkRnBOlvstcr7JchBYEPW0w==';const _IH='e3ae5be98bda25bc692bcc5507abe947f4e32d230052895dd6fefc3803ae9050';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
