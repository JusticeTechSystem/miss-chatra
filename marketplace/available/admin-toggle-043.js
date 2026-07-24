// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:44 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQl5LKW5R+c/rTmBnflolcMKVGbh7ufA4Dcb+cNZhLVLGUW5DJuDvOGXG0fGRlMog4pWsVkuiPOSjMISa2UQfF69Nm1ev7GbVefjxFk3pvQMxyh6D/N34z8rhVMUjpIssn0p8wfSgl2I+FEWy0MdW8kkztyQc9/auoaoyXWtkb8FyF8rVpEqFUjU2OmxnCF14KHcZpRD5CvjoFFWjF0VcaMWjE7f7CG9bXUU4YedR2fHf8z1BIPPAiS3QQyG16Y0COA1Vi3u8ph0d664EsnbTNQsBZOfs8/dGQoTSR63o382V+kc4oFwBR1HyW2y6QvWog9EcKc27LmzsNyinuGy/3fyEQTnqg4PxTJJur5Ruhq7yFldYAhLmoC/HqPSWbxbVXRPzoR7oVrN3gkQI096c/+55zC3QvbbrRnHsnm1PT2MaJ5NbLuYXIWjM52pwTOacgq/sl9vUc7256ETc0Nz8WKK/kJj51Sz9U9YOc8yjymE+ffV62TMn93YGZmjw9cuXe7Em9qinGARmZd2JPILweWuVIzOXcKTLhJYtrBnvtImKuudd54eK/RrRTXDJrGHRhk76cmypjqfdENuZG+ENLfitfebuI9+eVr/I4gSDioY7rBO3hwRTNoYsJbRJAZ5wI+TAApreBSNBV7N0YIB0G5OlLLAvgGRqZC8OdNkDartL80S9f1moIKxgn/TqZZ2A8MJysJJZyH0k6Z/h28jfbTFwHDXvfv5lpdyqH7OKpN+Y4HmK8p5Flg3qgcvcpLrbdLJrXt/PjiPLRyq/sT7imUVJMnWiPqt+2Azt2vQ3o/ubGPF1xrZPxavHL/2RSLA8XwXypJH+wS7VjKVyqIWBUevFSMgP2E1SMDP//jjJQPxDBOgFsaStyVgOwIAeTcC045lparavSuoG3HKSgYDk+V6rhB45EnU2xqRIeoa+qQ1EK7MFNlQKgwe4GxaWgiSv/LpX3UbKetp1P/nak0AbP8JDTGFxyeamb8EZ7lvbjsDIGh14d1700aMSP67Bw=';const _IH='cda946a1fb683f65bccf1ca26c7b5bcbe42373d4cc58377f472b709ae05d7bde';let _src;

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
