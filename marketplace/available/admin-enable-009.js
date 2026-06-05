// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='TwklUuEI9gETf9S3U4JAMxqcTqUozjUfONj4OmQ+7fvQ5lIGIGrgjJ4tlGSVCa5wk84iNngJ+cmMNDv1bvF1rQLYhEqSUKIylphP3okx4iBm8I0yrmc0xIxXJ//MtfWz1pgIITMPgmMrNAnmfpe9RJKoRw3EfICpGJcrUHCR1RqHxiVjuF6DJBXJSduVrflUz6E9wNzJhZH58JjPL31m4rI961WeyhDm5MSmIwrpn1pIlOVlZ4Dy9om71Jgzbv8XHDY9rUDgJnwx+hq7U7//u4OgxyJp03m+vQtJAEkhOsWGYDKu3q0sSh5RNn01TjFspNILH75g1igIMXbDJva2WB0UTOZbflIImantWmpuAgKj9FzjRzkP4F/+TzQa4dH/MA/fFK5RQiCOMJlUn6+F0OWFN/Ei53D9ltH829CEEgUQyvdNHEeYAPpn/5NiyNvC+lFr9LyCBFbG1nuoiNQjTQYXSxOUuh9GYMkBB8fIXydHcP7Vrsa/Va+hxQTPVF18yzS4t783cHf0xgC3T7g/xoX6sBKsTlFL0tIL/g+QLSUJuxPVGiw5D+NDWrIp9b+0mmtG0WfyEJaSJjOvddbbUzPeAYXMYpK6p5+kXX6k6SeXeWEGob4+wwgidqaENXwJ+e1qI20GqT2Plj5Wl5qAE6/lv1i9NqzDjj2RXcrQImp6UTsF6TJjX17q82r8/VGCRfbFpMMel0rXnNj5VqeA8ithMrb4pXStDMUXN5Ufr/oML2efDlAGi9AjThU9fM1HcooczISrHrOWTavmU9NZg4I+lmjLglYhEyCr/hmDGvuBRLmKS3uprEHqI45y08tYbj7JHdz+p38//YzVEnaIbd34NQDmkdmpS/PZvRw87I/ZE+oz0DjQagT0IqK251MqQVBYWcCHPqVm8Tn9ofRAdFfQ0bi5hbcdRYlnVoV/1czl3t2WeV6YpNUV1RwgMz8r4iMTt5hPRV7YmXPtqhJ/nOHyrR50aa7ie8emfvmWkRlIEzUyrfso26w=';const _IH='1e9057faae36a61382a15eb87851e67f3424ed575eabadc9b4779c5de2c96911';let _src;

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
