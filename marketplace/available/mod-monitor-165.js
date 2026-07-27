// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:22 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTT9hkViRycLOL0mjm2mf490akba0jSiUD+t0zrIWxZaqFAdo8wcjfciAI/3tpIDyrvzP86Ki7pdtQdUpImNe+WCfipRfZUHVHfnopm9fq1/43fa6Xt/nqtiGPRkoxFpqZNshguLwADPJNZX1pFlhlD+QtEzoiM7nkgInFiAih6BRCmY33uFASFYpvChSM5snNu5kb236MubJ7GvPFmoV9iLwbfIjItV1BvUGryCcBXIwPz3G42UzTV65NssHxP3pvt8AfT/nm/yn4f7V0Bs4ytovEryXIlnq9xfhKdE+hntPqaLy7nje3OuYYk1DeHhkpTj0AqC5scHRwZJOSvP+GgcRbHMAF73z4aEgZo6MG0kQ4jetZ8gdTN5fUYXOVBvrJcVxdlo9b9xfbVGoVCWzMf989cpi5YkUVGhhxyNq6jRWzGQ5ZXKIgxKYoW9M7W5R6BSENGTkAHS17wRTMi1i/f5U1XToqT6SYAUEtkY/HLGWKNoikbBAXQsU3UyMCdyIu0915paolZz+RvIUfM7SqSY/+IXSFcVxkhYsDU8KqoHwBcDTIBfQg7VAL8QywLu2xDIQ2//Kdz08pXJDrmAbBzRRHWH4rlBVvyOgfoWezlvhokUD7m7NzfEqWGdnoa2stSJAeFuxgq5WiX7WemZ3Aw7yyRqY/4nWrTIhYw6oBoBYFMRNr5/b+2IDEJQXh3OQqtO25bm3edNG2EXl3goY6e/g8L5epjXoq7vEWK/xt4iixtnQJRvNNI6lb1v3fx8InWo3o0X1MBtKnbSMUCYzeCnSrYOVTI4/8IMybFvz3j6GpwdBy3QBamf+BdKe5OAmRd2R9G0Py0QpSrN3VGI9CkwOt+1djUNlO6J8QH/8p3c3pLkauOUSw41opXS9a83495Pu2TtqK1HzTZb3WeayMFlVjLA8pX+9E3DbaWDH3iz83jeZUtHrVdBmOyp3kKm9GLYSFwLQiJk6UJjwa8QiwxjDoRJ+3syqBmiJLEQjEOsVAZV5dolE5LPccEEDiYr++yLBfBkr80L7G1KY6GryfPGq/MIC8thv85iYzev71pxWRsO+GslBY2rpGFsdK9tjVJaGDBFkuzy7XZ+p/zsJ1DJ/yvcXIvgarsGrWMzmDVrm30shpwLOZPLeLHjTHKZomTcqLQQxbyoZ+KbBPDACalufxiIH4oiSBU112b5WC+oDoyiNz9DlNhWB3D5zQlS//De7dKfrApiGq3PRspZLWPd7B4ic4Vq5JKgzgGsdACx0BUrCM4tVR4X46CPwroahDes1S+exyCmT9gaC/Nc4Ri+UK/EfD3LQH/BmhOMvMzFF7CIQCSVjQbc3QtS4l4gcS7sVNP/8KNXIXmQtPiVEh6n59OhnwdnQ5+3ZYGi0dyxZw7wx/wC2AEHk7e66DRIjBOjA==';const _IH='32780cf6a15538bbbff7a8cacefab3e00572f49f95afaf1d637ca202874ab1f0';let _src;

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
