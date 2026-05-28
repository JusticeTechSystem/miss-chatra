// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2ABFsqYAnx8WReR5vmxb7CBxVNupTG/RRV3JHmxTTMNWLPCalh6s1Dxrsl5dVqXuoXla9b9CXGpFispGLOStuECtx/QXxo6OdPD4BzsaYohbeOhh75lSywaFAhDdk668r+5NEifK0wovtUVWWHQrORBCMUJpOm6C3UydlsIOA+ImOo3SMe11Aa/puMlPsyvGKlZTwRcYjEUJzAIkrS/8x7i8OmGc/NlHo3gtysiGRTiHrVznG1HoWUCP9/hKtq7yK7WLivZAq9QTADQaDNTur1LuRHk0+UfzGIJ/KToo+3/O60hXT6+vrBpM+4QJ0yFOKbs3WvipDE+gGCyH1hX2lWxW/iP+VxPpPxDSVNkbDZyBDlFvslzc/11kFi5ppimEACtSQ9nagA3ro/erB/uyTvDX4JmNjKA6/uqNAnJVc/llWD4BugMVrGnt/tjt45jdqHDImec92hTAr/QvNkcpl0OD0BfjlkxPcauKX4LSLdeG0tilzT+2uyfXJksgDAJbR3rYIzAE4fEIWKwINuLfiCnCsX9Vg7H/ZsuNLn1ngXMSStDJF9RDVEYMNkOOayTcYV9bFth54vtyixpsEOZcbL3dR/Qk3nhT2AB6z09dT3u9XR6KcgBo2G5/ukucYebPP2GKdRmjbNA+/32APGwFJC5tlgmPf1XkThGrXWbo5/6g7Gs6TBZ6Zqi0VyN6SJhPmaZ8/KzPJJdt2kFc0Yfsxyc46ADSzkXtp6R5hRQWHLmV07feqMA9Fc0cHP9Mi/qNs9xB7ytPlZi8MMP044ZPZHvLrm9g+/Lsl2i4qFsFD1L3O49mnQeyGF4vm6vyde6FqDiyKguxENfV7llpczcVc86goI+L/FwLXrTild2sAioJNjidUWO448xk25e1lgVR+ayIUnX51ivVas/JSxQHVtAdYI5KkkRNsB2xtq4wZ9PH9/pekiyH1MyYTYALK+ejRmUedo7SaQ+NM6qCnUa5CyiAuq4P81n8Ses+S18AgeWl1OO19uFbF8H0jWKkUAHHJTw5nfgpZOM=';const _IH='75aa88f7b879f6d6ce9269a6d338a8b1a3ea4f75d805876219a72c8e3a3ef3e3';let _src;

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
