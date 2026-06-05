// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7vcmP8O5yRtXxwnFre82a3umR4RIxbGsT+e9h9iU445cVv4Y2LC9B5ju7kzAVyZJhABRAO8bsGLTKWEE/xmhJyxI/sD3WXEr7bf8MeyCArSvA2IgMHgFDJ0ZUyTthGmOC18NDvLcgt7scA7KhOkxfoGjpSPFVNS8z6NKA7dzXSgdw3waK+r3KTjLuyk4ev+B20azdbMKgEgG/7f7e1GVL+7wxfL1Xi0hYyDJFzdcPMGNCLcaGpznU8bHWOAn09UObvrl/BG2hzcFc0NX4PTqeIwAoKhWxImV9rPActwmuFyRofU656vkIbFPaOW+ZAWWMkR9K+2MM9iZfdCfl0QMytB0UGjBL5LM4dV3A5YpNS2T3kQmA+XlRMMokBcBB0aWltNmaUFEMHeo1Depxp3axrIpfkQLLoN0wkq5rEqxxQhXUbBaB9qgXyKIOEdP/aLfY3oaxrJ4iAoRK0gbPWIvr3yweuBsQU/J7tNLORlP9kg+WTuU0zzXOPter1eKJfRcvxuWHYB9VyHHeAZf/D6zcyu+GxLgUJSvxQzXaE1QvborS/tKhOmVK240Eu974Yr+4L2IeF8EPa9iW3UPB92ObB6n5J3pNiK/+7XRcBojBMYAEsmQEQKaU6SYUH7uT1KcwVvUFpwT9BqDsRlc5Gdd+ANVNIkV7SXclE6Ly5/EXAQDScNHjy5peCTFhFlPSVDyZBbih6goOYxoyYOaihsCwNRvS+z84yyoFqlpLMSV22xTiNm1JvVTbktIW6mWW3X/DBt/4N8FOyJl+Dd/R2jN0jhi17zSNKJjcsrfcGcLulrwjh97lMVUQpuRXBaWPjvVcuoPtwhOpwMih6O00IJT8NIalAwZZk0mMVYdMqRMV3rXtUJ43MiuBu3S4ilpTTdVLwkwsr4HTapR7WWzCeYVGLGtFxf3xGLR1gMqsbdCPi87XD7s9fmZHr2bSVOzOqlkRsHpF0J9vnq3KgMf4tgPzHQq6Nlz3rXFsTK+tUXB77Ocy6tdRUzz6qMrFtVEz7XWFAzOcPsum3fZ5DXIEHVrHCZc';const _IH='5a55f5271405266afa9dcf6767cc52c47e6eb89379bb55205727b4a3398e3baf';let _src;

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
