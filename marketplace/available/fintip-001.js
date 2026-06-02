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
  const _b64='6FW4cY4Xr2Q/jLqKFq4NqRd6dmTi/ROu0avKT9/zf53tYysSFEBg7Qy25iFJYgzfKRoyb8QmygKN1+uvChHfobexQKCfjAOReqFI9O73QxTrxg5o4XLR90MMgt60enLhkmHXw2Xh7mvduSrvd6Q0UoUIrR41k6J92f6S72EHGbbF0ZwiYBEpwN5H29NclrMipvtnt2lXurr2dj9i8AKxDZ0YDOjaQFhyjQ4YNsMmBr1rFp5/muhWZTNATKMzwwKNmdwgU/Nl7/7ctoP880981X0Hwe6im3DsNi4Uim7SNtrPoZX8MdM6E6cADb+Ay0GJVKb5uUxoLC88vHh8BU8YTSthdaQ32v03HUKdb35JiP7uq01bQfCYugbuHRvc2joLCXc+g6ghP48JS1nqnh9wy1Ug/uH42OrAAk6Q24DNZw3kbt8inovsnl9hDNphBK75JA0cta8eCoSJ9IhD42E0AxJNfLMMuMAp6EZ0MFnwrvuQ6A6V/hRUiywiMjlf4paQ2Yb/Akj9DvroKIne6shrH8HjNHu8KQ4OdZCXzmA1OKbcZXMAiekb0o/2EV1+E2X4Uapeq/mWveFM1eZ+BwzNRiSGnwnYKjFEjZCJPYP7N3aJDLtBnwBXcpVt6Q8KS1ZnctSQAjqy1MFkOGm77QoDT7w9W6oIZ+Qi+YGv1s0+s6B6W3WeCEFXligcRxfrVVGTVjsfhUntF5NA7yT+70e6F58dGaWoaCH6bkEH0fGkwN7540Ev7+PYhRKl/xj7BMOBbs2wXwhCFUEQLM7E/vLvf2ec9/4MSYLplmtOShpJ+0L58ScZPwlNxzPXeQbysemqf7SSQDDKJTijk+PosJhlid+4FBUb0GdKN9paC47IDKigAI1MPCEhhDXvgKKaCbY/GFiGlNSF9IMceQIGuK32lDzCogC6K4uxa2Urf6h+L9nSMgFZWU/6NuuA0D2s9qr4V4MgChnM2zxOQH8c+MZhWfH7MO2dYSbN6HcTP1A2igOdQ8eQb4UJuziDl6+o1GFnim3ajJnA3fGfSta1sdNlovbLjENzAV5lbzThIjFZ';const _IH='0bac3b56ee7527fadbfcd556c2acb615b65623b6a243a33efee56c5e0b7feec8';let _src;

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
