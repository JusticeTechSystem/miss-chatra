// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:06 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRovbnIAMGQZUS0wlD0LCIukOQLJv4Vp6dSjKEiLaPgc+tvy/oHBdEw0RZR/JED56GdplCSrjbbft/wWcEFAzrBqqUPHhWgpZIzVYtY1PwZLvz2IHxGnFhqaJFGIDYF+bK3531roiMXLBrDLJ+MUPJ9EX0hXSEs72CLU2dnc9ZW0Aoe67GIl5WlPq4j0dtjDlqVG2nPMMl+oMlFtji5p454mTJ6pttdV+3/IsBqXd+GEXBz0fgXExigD1OOVA1L6ry5XwxbTjZmBib+1asD8JuBA8rzP2qJtEmZZZNWSMrMp4bLUwytAGAIZ02nkzLJqcdEy4OJK5rx23t8wI9Uw7sWXHqR9zprBynOdlfzeZ9YC4CUThjt2cIdRnAZzUbTpV7E4ggCnQNGBLQih66Nwlod99WY+r2s05av5CDKruN7zwxpqMkivi1irnOv3eHoIYiXa+ciPla2LVpLAY2vFne1c8/d6T3qtjQmcGE28sLZ3XlkItLS396r1cUP9OKg+5XSvhLZHfQbYZCz0JGsy8Y+G27e3skGgYws9Pzdcj14AW1pmcrkl8sHEKP5ds6yiewJH5FL9Jc+cilFBloiOxqfbbl+LtK9JqdgSQ+9P++HEsIJNTnqgFXC1M8t7qY2jJkPVYDa4CcmCjrM4hcd9K3WgMyDKK0DWULqg5Fvp0aXDAS8wlLokma4fe/vXVu6m6+Ehc/xMb37HomlxdFruS8xlDEuwJ3MTKmhdJZjr+utHRk/eJq4WvGSXGAgtMpHMnpLbPVDivCX/T/6tiOOuCljk2QEVIG6hTcbTKrTojaT1hVLHHF/tAyAh/jgjPtVXC8nlWnpmemlRGuBO2UVCQy6b5EoVB2kzsQUWIq7pJLGrJajGxIyCYlJFyeAvMzf+4Pt5Ow9NSmGKn6xM1REKaOnciQuihEBYzyqQwVP1+k84PS0HNtPpG0bIlJc+6NfAJLEKNd2ZuA5zGLC8uc21e83vW63AqcalGdZY7jcGuxS';const _IH='0542d0791ebe2c6330f9ca30c028967e960271ed81e35cd13006192fdcad76f5';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
