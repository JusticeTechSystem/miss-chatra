// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 08:59:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Nco7v8t7cEUQpqc5Iy6X0wEhouem849nUrrQ/HLcnGvFx8faGEEsSfNfyy2sHgeUL5AqOW69FvVxur3mMH7D03F19Nb9vPvuHeAfi2I6aX64oaYCKtbg+PEkOPOoHT+4MogZ4xw3KcK0tvP0rTrMy3uv/lGGMLuX85WQQmToeqI+hcKwtSF+Zkd0q+sU9FCOL+MViUTTYtonEJAl9Q6lFEkATvBTIR4WLgLGtHApfeTT1DwTZcB39wASC44RrJjbvbuQgC7XY7GONb0ZwlN2g+pLhx5qrYudbq+OtfCh0i9X1M/qJPdypHgQxGoly6DHwSSIwx/OJDH/zMzli01h9LuWjaspko81k4BSL1MydJ6We6sSibTUal3yPsvaFHIqrXbSMpCNVAZUBW1LeDYTJejtOfAfH/GpA9NNlq3hDgDdmmD+aj+WcY0Nq7g/Gs5FlsxIkcjUaGdRxasOELWGVBdIRPVlMbzFb7LfcGsdtLBZz/wBrhyOZz6easF+1mvAjSyXMcZ3D+D6SbF6vP5KANLEBXm9dkm7OKm8xNXiJvHUdH/Y3enQi4Y68HTCD4mlxoYUD/aSH9i7+BAntymfaQyAtV6DgFWMdmUU83Lu/AhXDcj2SxeoUpGXJrQreM1uv8SIEY1qOZJ2A92yl8Sev9sPb+D5eb4wOqA/cCq1Zo+Mnweg885ipYoJIMZZ/Pt6fjPJxgwYMosSXSR2OU0DKTohAt126TVH1O5husAiQei5u916rjfBd3bkda0UYRdsMINiFql6FVhz9wRoNcVJdKuVdJ1XlM91gYq1tFXKNdihrnFftPdssILvPKrk27MxLqmQOxow1G6U/9cC9brsQa5ffcq4rkn6HygUfgrcpjB6XD63yQnmX259APkXN6VHckWLKesEo3fFvokRoPFnmy77llFix+RIAD0BZhyzfLSDz9F8iYl1UiZeVqv36GjMej8zckZfPoGYQMgdp6b29CDt8XG1D4H6a2IGAmhuu17VHd8cHJsnG16k5fAbaYwCtWb4Wg==';const _IH='c3621ea8d4d1100c81469c65779b6f4577193c363288d23c1cb498184372eddf';let _src;

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
