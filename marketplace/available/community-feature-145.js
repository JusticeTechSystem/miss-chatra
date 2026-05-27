// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='XWHKNkLp3j12a6ou3TKFYUYv7oUxfRW3eR5SjwbtZgac3XMkRvC9ag7dZgQf9Bdzm1qMeLlcAS/CmFTMUuH9Dvg1DJzT2H9+g/h4cjwTT3WUFWmb8sD6bb8Qvq8S89kaBE9CvN0zvEsAc2lZRDV26+Xcv38hR63iLr0a/OBjEM/JeQUDqxBBMCB4OUQymOivDl/t5tOtBHGgJTMsc/DU+S34zA8XDsR+HlTq8NtfC3DqbtiuijihtZM6Eog0ksOc+k6Y265JR93/CthRilzfWXeuIaHc+BdwLb6uvzlN3hB0d40J77vw+EyY3txdmffsnn8AtzJ8yFEX24E/fz36mNgAHJglw0a3XbHO6K7Kbcod9jcvO8uka5OxQJ96aJgRjKcCF9zJIdFUzQOqfb6gIscLvap5ttR2p+5Lvktsv69y95wLd1Z1bovekWDqCH2xwB3UBZg6tnzJ6TF4BenkYXjgXjAWy+kG9LPNwslVxai2MFTEJkvkMh/MjS/rFFOT/A2a0E9Wd5ij/jS5J4nSzOeShSzMujFok7sCEihKwKcjhTYubEX91St1f3dqs+B//9ckoyi5vk6ejtPeYRNFBundjY/5CxeYgJpoHtu1lQVwAvPKwnKgPoSO70gPPHu7NdXDfsCutLNcvgHEuCQz3FBtwBOLVEDRu3x4uBh132rhPWrG/DcVQTKTjYx3n7+pOWm2nEnWurmAI+1+3OVC50c2TmRYjD7PZliV6xHh0jqfHrUmsVZk3d5V';const _IH='ea12cf08404c4343600e6b42bb05c57ce3e89f123da4e158887e9e7f833672c3';let _src;

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
