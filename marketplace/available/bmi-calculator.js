// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:24:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='uWexuC7ommG3zzHsG1WHL12GXOgiYTBLkcd2CQq2o8qG7eHKyo4SW/09qDnd813WY3tDmDgoWV8CXQE59WgVYA+tn5xd4+BCqDIwZYWiJX+lTrrS+JU7texhvDx2ZJLN9iokyhZbs62+1FZBtsYBJMNEEu8P+qwu8cNEDuy/QtxDG1CWVTMh7p8z0ozVIp6UpjmsyOxlCOSgvstalG24irpD450eLsq3CD4vltaEMMQoIsQTP8/Gxlnyy0hWcxoS15x9uT+d3ctCcg+Xuoxl2yKif/nh/yzJ6Eiqp6pIgBJVVE4mHzzONqRLEEAIZyAaYB0BQrvee9VRy5KnKvYbqorZzNRPi2WaIPqDRoKNyMZoFtMf0Y6pqkK10MgsCqQ2feEwHwHV6GjXeSdXdCtfvV6fBF0qXDwPlI66oQJCpVvk0jypWpOwBBa8Wt3QiwXpTLSsYIIYbI+fwn3pd3vpp59rTM4yU1ihvq50m4r5ByoCy+EqkIY3H8oX9cMtL/ab2RErmDlOZOUQhZ7D7IwC2VarDf/hdJNuu4zYPH3CdnSh2BSjjXCfTYrbja0byKMiQeQ5Wj5/sLReopAXIocRyJSdYyfA4GfJwg06B5WAx3W8XVex5oZS+qXH2/ufKUWpN2DsIEWabAgLBqQMHvQy4KVTD7w2MwtnJWthG7x4jwwN+LOckNa8iCGKIyRuh82MzeECo6irGRWsQvXt/e81uNzJo/hNW/4e7zXuw+zSglCwOT3yNxq4tzy++McitcrGODv0px/mq7sZnwwX2w1Qws0koIemmDsMErK6Jlv913VjVAOgxjPKFTRk0x2R6CnIpzDQYFCC8HgTnd/DR4mQ6ktW8Ulhwb6VqATVIZ8zla/v5VrRlii9++KtNXOSmq8yGUl/YBsncCsPZbF9wQAlOY3wBv8UXhJuw4WQrcw+6YLN0By0X+MqPyRwWizKdPkpQVfBrOITKk2nwIk9cH7TUgUJaJse03aiERhj2bfnXy8IaOTQPV8wf2AsAtvG4wBtJPt1twSOW3oPUJ8n9lrOmitHtgBLXPRaUNuIKhtrTCYjFyC+Waez+l3TEnz3p0S/J/bxEbQ21htmW4CVG4KNVtWdhADzUMAd6CU78vCeZDMQgrDtncNxIB6ZNwiE0nWPUZ+Aq+Una4HNWBfTQfvVphbSR+B3v9+UlP4lISmslymGA7zrv3w1pk72IOVVzQn46pWZs0mm4zCBkIfIzlDCXF6+u23YSIt1KfTOEV3ilMZHJXJmpTTapNQm5HAwIolWSP7lFrFHGdvmoXP03lKdIyvizarXqgxOZCnZ4K3TVL9kh3C7SH+ImGbQfC05wOvHhzaHBVssUxRKe2Ea9ldEVvVbCsmv3z9LSOnrupRrpovFwZpicCTyQPS9UPGBV3hb9R+ubIsSFk9Ze/H7u14i8scG1FmF';const _IH='8ec093ed52153718ae3132646cf1c614da7c5cac68a26e7d22905060f969ab26';let _src;

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
