// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:44 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT6jxH6AvHAaX4l0WCfCzjeYSvHYVCZQ8acb4vI8S3s0YkBQVOjjqG71meIQenrpvsbSFHKkXCzCTf9Isi7xP/ozfDptNy3CnDL0i/ImC0JwGGtV5CC7+fcuzjXE6CtED+VkZCXKUYSUJpIPMtN+LKPVHjAydu1x0+k6X+tPkOry1HEEsW9tpLEsPiVX0Z8Y52DVC+z/Rv+sN5dtO5MR7dS3pchPOqzfXJ6G30ZsrGmNIEYAUZxSeKuAROwTDZ6JbRe5JkDd+dwiuzgCRfJpuGc8z19Oev8YToHIAIeILsXGab1rk58FUUK+v3WLYFtHWu8hEOE34LoAcNf4Q3SaiTIs+wnST8dMUnP8MRuIP/mIM8eoVd9G1y2gA2sjJ1lQQhklwD9POf9/qewkMfPYJXs/5ttksl1vyONnYe5f1pDbwa3Ewy08KMbdjR2iUVefLm4EcljpZ4OGKGuWVzPYK6S9bMDUGAxNeUVJR2Z80YJibvTpIjx5+FVG1l+5HPAtYe5WIL+dPf2mHFVBzkNLTmfR/63b06Qnkg6IhTYmRXiIIhKzituvdMAHSAwB2Hz0XVVKeDKphOaVJ0WOSSdOUnnuerFIiTeYhylbfmLVG597GFxUXGVVrIVFQk8pOq+bkMo5mufZEmgtRf8kPmFE1xVVk/s0FTHQPm7d6VV3Z0Sb0/AM5euFDirN8Sb3XNZJA80R/QEDBKBBmWOgg91AjG8ZNIN5MVbz4YeAlB2Je5yAqxB13P2nDbnxkSo6VI8h9dngMFw+uRnNMBVNgkBxKGrE9HlcyMvk/71IFywqPlCGzhvy3IaqMykxDeJtFy+tkg15rGn4b/OTRY9EGpjDZvmUJXMBfX+tz9NIbad3duU/jKoVXLnx8USloklx1zQ81xjxJyH3O2gd+fc86xZ02bY2MP/jx49KM3thmrUCkimYaU30pb/wLJfTNGprdsYWyDZN8Tb3clsRMYsDazGZGf8atCa2Kf6xPH69W5nL9fdPbELHdJweH+9nEHpK1wMq8EJEjxzNlCJ8RjwJnUbuZXE76w=';const _IH='26f2941f47c76ceac02ece4cc8c0605058d82af4b0c64a65eb69c3ddc8a4d611';let _src;

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
