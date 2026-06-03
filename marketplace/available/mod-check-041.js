// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='gq7XHv46HY2a77T9pAyeMRoRW4zlwUlsFvHqk0CyKIOcGcLiNHKmpBnrUYKQQTS1k6usv2cposTOFVRONYkIfEmYavo+5Rgcl/IsWvmMRX3sR6wWAuaQx7MMDWBCSs9TuIq6se94CnmluevbKLVatvI4KBpXzL+5q0hYgmvxH9I9nYe7LwaK3PvoSRLpFplqpumbC01niXvZrUki9AEbb0aLcDBQkjQw7BCwuN5ET4flycGWkmAsDjl9ULZ/8c58aPrqNdk7zQ3t1PxGuqVI+mhu+sjJwmAlCjorU6NzNF9y/hriwmQxdW+HU67XyCNMnmaojT74tD28yKWtbn4RzMU8X4PzHHCc088yyrUsx/cAg7L5hGfahaw7azUW9mEcwEmKB5Yidqfrfaw2hvxppSqKiT5uQifWevFlJXeQe9owQNggFULj4lGTjqHSgB4a6lHfMF0XxR3+k+C1tDf5jFaIf69ipdhe2SkjaJBpbqWygg3sFtmYO2ubfhiesCwkgYCH7Hqfo5a3LYTotNmip+r7XjkiLlzMamHxRZq6HAb+EMLQcqi2rrcs0coioGncMksvRponZzfQlkObISJJXSyxdgTf1V+kmZsTDdrCUL4QpGcaSGfyvtRu2/4Uajk7zKH9gJD9gmWIC/NyE18paG0peJeVFe4X2lUzrLSkKJihnUiyQbXcMktCrLqQKpEOwHDB2RyeRhaG3qdKvb3RE8UYDUakNe21iKwY7eL+cDMzZLTf9g6DOgC2DHwqpKc36SLVzjE/wTrldbBsISHIG/zTPKEh3RiLCjvuphDkRe06TtflG1t3ZH0rm+unQlAcAra9jyyEPuiuEgR3lV8CqkiEAI7iurdlAYfxeJrm6FSvNBalyzBXaTvyAITOkzeD/QRZIJuAyWKbSqUGldh8+L2SgSE8+PJGwBtAfxLN/Sntz1A4H30XEIBziZfif3UXZtp5pNGyZFXfzXXIj+llCAtpjL73F0iQs6uJrLIQB3e8uKfmt+fJub6ByFeHru4XGcSUfJDKqRd5oZKNK2EynjN3XcSbLmoNSrAocMVnNxS//3ywArBocHjn57KFRdsdeC2xh7KzxoAosDbfgdz5HxUTLUcZxmvxY2U84IJEtJWIT3yN0WBkojzm/JaxC3/7YVJTafAs5QRWDkaf3yjFbCEr2Dpj431lmra39XzM6dxhophFJvnPM007w+wvDLlL+jXAQZSXsZAnmKGkWIIsehWLjtsoOQ/TRpTHOHNuWzRDWpFofBqhXO0lhAYRM+4whOasBJ/hw5DduTMhQJdOKDOJwOk3Haf1+OqWP46WwAfbuoqLtgyNff2EQC3MppwH4ZIsDzBfyG2ZKRG6BJuwgqAIrT0ZpmJPgg==';const _IH='0daf759bdbacd7e49e2e4f8c5c1ce47dc8fa34cf6d53d38fda52f57d1bb0ba39';let _src;

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
