// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='F8fOuKU6rv/JqiCOpcRecWd0wbpwFB1JmAl+rSZmZYDSrkvLrFkggob9Ap/q/5oLKXEpBdZFZtTDywxje5yZmTRwunW0BsoVCyDcy4wm6EXRRGcv8N6h5jKzrRh3mao8d1zSwiD1aEmDvworGhP5j0+nX3O6aXXnKMcYL6K5dx7qqac7bS/+tPgbnN+lomuOa42Iw035aqgwMAf8yFjnWcn3swaxy1ETlNTjdPEyqkHNZght8xeAjBLDobBvUINv0yVB9yiKoIowSEHg8qutVTAy+5BaDoUi9Evb8XSrfHwZ1bsUTykp2vMw3EMHvxI7s3HxvwJ436gcfUfwJx9OWikM17w3LL0+OWXPzX65GfgeihpkyL+pY0jEzO3TgL/ESJ6ugE9RPGEa5OQckG6u5+FmVEFlHvkGHc2enBGgU2g6Xt5cmcqPZNULHh7fRwXq4qYK0MNrsREAovqUB1QAHx2Krt3A7iCAPxoHc9FexL1iQcHLVmx+XA2bab3wwZwyCvfOdWyOzzJVIcaXl9wu+eSAq7z19ebq4uW/0NVckHFS1JTdaXM9iyTVgG5XANov/589KncSz+t144ygoKzuOcyYdyEc5Kj1V1CXZLs8SqWu/slX+tDyYtE01ivokbl3J/8KTj2frAtGdy138HCbNf4m+GQ8N2lb+B2QgIybygBdmiHcbdjul1cDmY9QQzFBZ08o955zpxKi8jTp97cOXCiCFUBaw2lgx5dxqvrO6Tn5Q4AJWwXW66jcINuD/S9IwId6YLgFEfXr9Yp2bxFd6DZwAnNhu3LFILbf1+YvvSaREjohgj7nBEs30L4O5Q0gqFOz30eUmnM0420Ll8hZ+YZCOUMFcqsyRLsXb8HL8XlUM3/XED/TuQWM1iRGMDfnkK5K0vk6mqaGR0bgKtSy7CJP89lAOcbD+E0ZX+VeEdP2xDpxhuPcAJ//da1ftTEuvYyX78ex3mYeUdK6MchZCP/Kww0JsszaQJtyC1EqLCawRPJRIHT6jpVBad9W7KCmiC1DI18WZCey4y2DvQ9A3MWTIjA1Cg==';const _IH='1bb6eac515829da426e84f232cf5697f7e002885dc4cb21586a8a1c95d96958c';let _src;

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
