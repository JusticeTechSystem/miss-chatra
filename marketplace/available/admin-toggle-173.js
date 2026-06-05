// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ucB12qeHFx66qR2qP4tFQCcyopoBypGgteYGsj/2DnuTm98Jo3A7XiuCaL/cYtuihvt0hH0rJkFxRJwx7hd8wITd6XYRvwkSJWrk1wpTP33ufCqDStxLDKZM5ORNK8i5zfyTKb7NryytJHLf4DN5YTiihpB0R0To8CwnJt6F82CV8BNYchhfot31sMkTOtEUJnliNk9zB6nbUW2ejcvmBRuCUQllUD4qC4js62t7rVzIjQfqyR1vPUGZlWC0D0Qi0xnnSiYS6/xBX/DxICj5xG1WWYqYFaRMv8PyhnoLdUJcm1t/9pRXuMGVQ7okbXJYf94bE/hK0M3Ok1lS4hDbiRNGN/t7/i71X3GvbjgR7jd6IG+GSt+UEC2ZYutwVw+udITJXEo2b5IE+8M9xNoV0snTuUk/VrUKI80rNhsAucJ9l2R1JaMwGs+hcTWg/2zxj9v11BJFvC7ivOm1ThK1K8BZc4zbQj/VRbauFboWLOHqzGjdOpE4/J2kBaoOvxywheAo4rFU5iBcAukbEYGDm/xo8H4oM0AQGQS5wJKvNoEp0GeQMlq46e0XGULehoyiNgu6MpkNcwMcHpcmETcb45Tsb3pp6kOYBMrGLE+URJ165AOh0XY6SFy14QWwQtDqdZwNOwFOm75zYznrMVG/AfW4BZHmRxxkZDYPt2M98ElxSzktuQi1pAa0lON9UbLTFqa4tuoxUD0cC4d7AUCb4ohD9mLIw/daNYS2/mzDK+A3j92MVlvGLgq96g1Lt1gSSf0ERYT6pXevFt2Tj31PdMgLj3Vj7/mK7Z+odT9gsuHnR1dzTzzgSV6j5myrgNzFAr1tOGKGUi5D8O1p1xSP77j4yceELtzvB2v1r7CpM5GPC9Al9TErx7LhyUS7mW1/JAP/DhLdrqrYaWbswEiypJBjxmDL24VCoHF7jxpYH0MvFyUeIp4x4RpU0Taw8t+L68PYe1XpAwI5QTYTzv4fOoi+LSipIK7B5vrsv/ySLyHNiDX87FXJP3YZXciknp9heQ==';const _IH='9ada2a75f814c7787825ce2486b8aef5adb8bdc1232b4f0e62dd42f1813bb577';let _src;

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
