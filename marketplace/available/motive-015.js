// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:52:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='5lPZZ/EvJD7bUoyBYH0YB/YkpupyNXqyB7HGHIw080dn8pnJnYDOlkOZNXW2WhYXQot5DlBjWbrQ7Si8jfqAorDBYH3DanxpgduyI+BNf88f1qsal1/048WtYgAoJFS1ccWEJ9Z9H1+VJLkcFJboTal+j8IoGuLs9XhOrDECQAcnrUjUOSlipdMQtX5yO0HQLWSOTmHENGWICip29+RQdDFG3c8UgM6oKZo0SS4YOz9djXXxlcDYHvLpErTqe0XrPBoYAeI4vCaRlZcBUro2sdCVfuYKB9wSWEbnsLMLjL7v5n7ZcFV/gRiP97HTpmYU6wXtaRQugd53SwhS1vAbLm8rqgbAYCIUP3BBkoXUZRXM9DaH8WE8HlEHzulA8uaQRzJ1d2d597Uv5wrZtEAMKT3vu0GdX0yJCXS6zu3yS+i/M7ptzjZka2SaacW/wxySqFVau+L3E0cuFXWc/Ek6jpK0O1pgxSqctJd1oM6aB/yNfXmEDsfbllBdQw+3PvmPokcg/xrTzX3+bOt2808Wt46ge6j5H1WWbjbI9ESJjoLcs/CqFIMx5DLFbdM5kZcal638O9zUhcstCaIgOZKYL/TKRkk+koqVmK+2CDHUL6sx7sGhpXLrsxuhlySbWeHdFI6oqU+ayRB+Me5t0W/aaojS9Z3GqKI4LA7eh8nJvM/WgMckUEQPDQzzug6eiAbobF7IxFq0MQcsUKzDmCi9ubPyJYX7BRnJumVDAGJdn53gdVE7LHW9QwTuLWWEyNY93Rag+VJuJRkAhdOjckWN2HStiIlIBBhgZzZV4noqcsTF06MVHCKZYFAZQYZ78Lw9SxC+g2bc0nScfo5eCR/y1rfLyzhRzqJVXaytiNb8gOmjhU593UEaJeVu5enDJLZtADC7VkEvSVJa0mOqoxZBYLPlq+JRhkhENZehJOmxPPEPKxMf+H+y1OJunmALFKNcIC90bUbzRUvXeh08gPzdp4Rsgi0WflDxe3DJEh5poSuulp1xpPTVyGy19ao5kognOrHo26gNA99LufLNPvzCkaUj';const _IH='837e4062eda4ddcf27effbb8106767915d7034b23c308cffbe970fcc5c818b86';let _src;

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
