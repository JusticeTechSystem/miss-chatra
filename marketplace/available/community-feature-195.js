// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:31 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRd9TwNIeWcaV+CmcMcUrsfq9Y+B6uEhAIsRGkdi56vR/RbxOvvTtXgPDL0NTZypF05ict7Db4vdG0wcoTRduFpGE4TJcxrwzzDiJJu0rBAgGjTGOV0HMtHdpX9/03NueO3+wOE6zVAVoe6q/zeaw7QeNwwO/Mw0YOBiWLzAQMIMC1uzTAVEUQ28Kh1CGCScIdJ7/+5R8W74Z7jpWpKxwonPwwcELo4q8a24WnsnQJoJ1C0bjFe87d93CYdVt6vYFPj5fT4f/xB9Axy9DyhtA/hLdpb8gfUPVG1Nz8Ow4yFTb+EDUfZKQGdv6HpUIVf56zQ9Enqim83JLJN3XpnocO4XhVvv+f/01RTsesgXcDUgdqTb88I1m7uXvZ36+4cXXW2mntg1wkilhfW9uX/zbiXlGmCz0VKjbPRAUrukcW57qowtwVMbDX5nLLVQwDJTP7uUAT3eHqYrLWDRsp4h8DpajvzqhHxZqoKQibGu4JalNXDBBc6rw+Ktn8700dsymruKsvpCExkHU9/9MiO8AU+4iJPr/8eoJLlUTn2LEWAa/6FOMFvpaSJ3U+mbsDVJCMdxdMP2X66XszEhfQUCnZpe56MqQPlS8E2uHyoakiB7TEh6tUNWgjNLuJuztziy0Wqke5nEU3dgGF99Of+cLylobhoKYeKr/ybziFe8LFGJ72dAVyKzla02Da4CBZ0amRuemIFfUudZPRmcH7hD7j2B5kJdj9h7s1g+tEKe2mCcdOb2PD+2idJlNI=';const _IH='8215be476a1f15649549ad5229bb25683020f52723a151d56c16dc63e89c12ec';let _src;

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
