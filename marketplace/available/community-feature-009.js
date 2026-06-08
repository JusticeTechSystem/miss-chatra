// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='cDWbwN6Bpw15kFfLH1q5OKdkw2BOlKKP3enCefCvYovQNS3/tY/Vnt/c2620q4Zq9darn97FdlKbnSD6V0meQp9IUirMnD5eeSP+bfqgr35UJuREPlmPvLGthMBQh9/sBcP2/Vppjg1tM8qM8R3sp2rhPZ4uZIvRMpR3lE54kInZKbQOMAhSlAKgmpOkKiNIrcvR08OobHxRz69IUqsM4F+p8QM5BpIEiflw5ihwatWyn3Vfn/Sf/DeZq+R226oUV1sDI3yo4njlEbxsCJFKgy77HoZbOSv8TivbXhNrj+d1BUGubjRAt7SWBMC3Ha2KzrcjffLYxJ4mc1jN7KmkYX/olKVwULiNwttKGcx70YOiRrffwom3ZLa/apFqeyfwXoWOXUpmJpr4QXeEiz2KAIwk6CvgevQ3dVgkh38fXrkY0GZkN1TOOXAHGz3VhESwtzBIvlDKmMF1ab/qtjvvOs6VbfkqLs6hLfWuCNK/yRSYX4ZF1d7enUo3+9nWwxdmZx25+87ZhpUJj6QiA5YJzc3puBzwbeehuDBlfEj0Bi0UTqjC+BbnpDvGsJfTRY02hprypvX8EKAj6/jd7Je+MmMvqEUoOujBRTLYrNZfpHQwkk232AM2WwsmD02w0Q1Z8AlGMldZrH4L1qvnWHOpSRTjymV2cARvpY6vI2r6fzuKiIZhcFVZPm1AP+syt4AibhrWpWjWftnIgoC4742+CqJKxnjSQNNRq4p7G1bLNg==';const _IH='a136d03ec4eb081609822869fa0bfcf4908c4d7d27b2c0929b1d1035c658058e';let _src;

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
