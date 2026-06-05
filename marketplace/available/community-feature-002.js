// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='XGrnvfaJzfaQWFZoSJzDZ0ml+WeE0F0GLvJFxQdf4prEd3cq+e0MbttDdol6aUUxkgKSZJsmijGOLwPfDjgbpvWfF8iaFgG7gZNANun94JrWMGuCL5zzIgm+OmHHXxROl2gqIWPy+X6N4wNWFmI9oUbW3MwZisd6sTubgTdfMQOjST4S/7CcX0dmQ4vn58vu6h4K5M9ap7j2ex+MH74HlSIeJCT2TOEdZ0CozBgMdePRduajHWVLdMGC5xcSKnkm2MWZ915hSPQiHUPRY0lOL2UccVkRDLMAMaLGeLFQdN6xHvRA3BPEviEBewpkftfmJj6i/X58yZr0ND9ngWcHbMwUUiRWsVjzZxVeoGwmlO7KRKgBd322kbo2xjjOD1p/XCSg6gHAyaaIfFBo1y5iXASV5zjy1fMUEGaytOwfabJNAfnWKtnWKTjPS7PN8aczvmW/ZF9qxcLGOfBx8aVHpM65P7rODy/kfJYgs9B1DAGOIrexQ+rdwT8SCrqcpCnaKIRd44PQ17G/n6F2vLNwayk8yaSfRFPa+1M+4DsmjoocWMdmaBESnlonjKhepxSovMFfDIOhmEuVnUGzS4kQsjVQxhBwNLxLSOkL87RChRDjSkc0jSDlc2LnUjY5+EyyLUhjZV8r3FXlK/nVdu/3cRQybud98qIApsTWvMXtqa3SP4KYCMvPpMNwo2JuZU2/hZ8gKxcaIR0ZtfT+J235y4L7AYleTptkTN1n';const _IH='d90afcc8c336687cd594775e926cac0071c2c1dfe2f50adb3194f621dbcf95fc';let _src;

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
