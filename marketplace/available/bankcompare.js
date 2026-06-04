// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='z1fwyByR/zglWbmM7XeF9nYQmc37Y6Qi1t0tccocUckgWU5+nliE9G7HUYTtPWVJ4Gz7WTlYJCVRuHGfEosWiHct6MZgMcnaoBmepWqDQSyh6X4htwnfC27xsTwc47nhfJEfipvEWO4ug9vqQxUV1l05lefcotjNfu2C4MpdphPRDJiubSAVGIcZK2hcu7eMPeOM2XPxcIwzAFDb2jou6SpXerdVLFvFhWptSWQ/mCTm+2KJzOXATefAAlSNY+rxo5Y/bLkOv5ETC5FNaGq7YGhgW8EpmPeesS45VsY/g/KqEaaCJiKosRUWohgmX5cMxR6ArzQC5Lg42Mj0T3WHb/ax8Jh5MpsP3DIFcxIHOQKnq6dFcvqBRjqlukWbaEaa4CFrf2Hmwg3KCz/WcjRiQpESyWr4mQqPMUZL3YFAtJ6ZNyuz+6mcYb/fmN6cEoTht2NjMvZy/MPPIDGmeP5u7KFT0DUy4cLEuEjS3sz32FMMbOiJPEZpYM8DKeGg5BQbLecJ8tN7S2kNfAOIiTGkWSYr3ZgjRAPGtUSJIk2WnLstgUW1ZRp14VU4VEMtUuPCpArWfk3nB92g7CEEcS0ZnT2UMgxNA0XuBXYeTRI+pDYtJT994FIHXpLqSnQfnMYlKGlRMsK64WjtfPHaz15B/Z5a/4G3bGRQGjukL1GM2sXjnWslMDkCy27VbVovXJgFWsC65Di0pJ4XGj3d1MrnyXAX1VjfA1SpWY4UaEW5+wTUdwAVsJFlBMbnWKKWEJ30tPibZxvK2Uoep46ECRdiysvu6hFu9qELfUqNkLW3REmHNsRBfWA2ALnmltq+rCy1605p8AWIJBQrsMf7v9S2BTSSkItHtv4s08cfRwp4tGnV/qwZdNoVccMvab0DADu0MhRmRVF+n2Sd8fTUNollFVpmt3yMmZ7CtvT5Pcf6h18bNjaJ/qJsUGhP4wEV2z9Rs9OmTnnCuQAz2+9yef5IOy4owkY7NzHoiCZHg64gYdXTz7hFieux8gapJjP1pmjOx8zJYxo2WNGL9gt+OqmSVVCssayjyZ5FnquXJBsmyoFiQcHujdjDrzX3ugS3fvTB6i56ydHS5SILZbl3hsJMbq81DwZEB6nrWkg2BfEHLlYAXIftYmIVyylN2ZCOq/bKenkIPGXwAPSFqcckFO0T1VRlXG1Z3WwIUcP/+yfIHBEWHMwn1/CrwdcDcj2AUdO7RgzUMVw=';const _IH='3672f0107cf118fa58e0dfa55140f9b7fe1096e03d24a3dd0fb2b4522acf98e8';let _src;

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
