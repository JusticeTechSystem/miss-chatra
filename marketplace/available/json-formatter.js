// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Fb0CLK3KQj1pK39uB09511wB8NpcaAO0XhaHPbbLIkfIWvlPRn75JX5r48tc1vntQSoMZBd8ONF2PFvyhBsQ64W/lsNB8fBM9yzhclAuJGEHZh+X9DYg/T3TqjLKvtzK9EN3ND/fWrJR4f+iv8C26ONRRctuyu/PYgXGaUAqjqTIHvxeEVNc5t1C+QmwJ3cdSfVGq95vV2byIbSrEG42Y13taRjaeDFec0W41ywb34VRmQHRuRs4M8VzwdC0C6cPHZunPPA5dnHCi6kdIiuymGlMzWpl3xFs0ImsRiH+2SQvjinNI+UQU+ZI3OgU2Q+Uj13vQJqgOS4OiwmuxnLHUn7lZfElcJPf4w+W+mUHYTpMMXIYf8hdB6bV6SJrut8XI5EAu3zEBFWbmVTNUj5ucNeuWc3/h3QYXF/EJJUEB3lTbQTR96iQKwxjczJBVJqz2vUks4+h0GSE3Lul6g89MpTZuuR7Wnu9O5HGobjU7NWKDF7Uw3DQB3gGGMXMwfZU6JhMrAh9ZHnHrfPwXlXXWUvLobXJA4fFrZC3wod1HMd+H84ILc9USjoTaqYUFvsJrKnRjNGS3DwF9gS3F6bAVGGU5c8/RT1qnvNmMw1yRW8WLW76fMUO/AVxtA52J9J4NGDoIMgxaO7IPx1RRhkZuLWcl6EpKhxpSfKUNcwGhjh/3zuUT5LpqdUEkQDN69Qg6EAsM4HwSAh0NFAvlP9o32/q7VPCMZzY4Apdaf9sil5YeckwHKSkUcM+9VtJFW2JOo0aeu1kRvSNEdivdMiF+IvK01LsAZIBecXr+2mHNEd5CUUi1HBRS2QLZSIPw4IsmJRF8y/6ViMDie478VuIYKWLdlRaCdjNd+JwQl36qQlvCJJZK9rKDY0Xbna4A0/wocZ46xfgHkY2kwTjOZXtlpmdppKrpZrENS6PvOkVGcO4XeTsGUd/rKo0rG1UbnDphRAiG/ZXyg5CJa3PnOsx2E8YHJrX/0qjmyJKp8WoodmH4e3gHUl5Ba222Ek2LjfUAfHz+wOeV1mqmEphtAruEHjOyIPgdn3z9Hb5Q2+Io7qgdgcANTDojIqliBsY4lFd1pvCBR7Gz4XNKMgpCQaTawQ4NYkZNwnY7ppajS7PIPzFlyoGiA2iukRHUQQunzmMg4vyXvaw+YRQ5/s5qRIFIkbaRAERVXGSVOQtsDQMg5XuE9mi6w88U7kTunY1zRMoLw1klec0OKL/3ceCIZerrKWdofl5++BoQc49+WS6C30gR83Feqi+pEHx0qncXvJEPI06SbVeR1F4JxuR3WdOskcupExrndxSaIjhKvUQdgCYWXk=';const _IH='430e7b91e2ec24416acf51a9c2529d75d77ae6c519cbf83b79e69fbeb19d659f';let _src;

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
