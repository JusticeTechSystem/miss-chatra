// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:48 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRaxQTMVQtwEEswhF3LZ4ugpoyq8lWcvi9xy2Bgtr8qJPFfDX3cyg8+7eA92wvAniHwBJ9PdpvT0d7zieKS7CRSR6xFt7ehHIGrqLGaMUi/mvrLMbfVG0nIUL6WGIF2sWf3QOOA2xQbirM3SgeMg9tKBGdO1HFzYnkQA+38uo1LY8qEJfnteyJte3OZT0b+NcR2vqmTp3OYmY2HiK7/4ihHO++4kmIKja8+IGZppO1WPLE3cA8xcCOx/uYrCfNpN47OglG6+kHbLeRWcX5tllOe3NDihJbToYBgsT2nCnJUtJoCBiC88kAV+78gTjo5nS5tHHtrNUgIxcT9rWRJURuRGRe/AhrITr3uFG3ffFWZmBVkrmsRlg99HiPlvY8e4Wn4IDPr/L47Ds6kFNYh5wyPY5sDPGsrA4AqzDMC0qS9rv1+woe9T3kSP46Fz7gFnsE0RNs51DaobnQ1Z+Ve2ZnK7wyFHvMbuk0dOsA+K57BDyXAeiPw1tnAZ88IhhI1MmYIMbm12X/0hF+c3gPixhgklP95wJA19NiJlRjyaMVVkn7wBX4KpL9rtVSH2SFbW5wFoj7b+gGo0Ldq6p2dvZnlepgpt+ZmmXYvhKVm65PXfe6nZAxfxFq4HfLR0i/v1i0r6SJeIKM/717yziS73mFe0UGCaCM9lD5FP6e21fhiqJX6OvpUZ0SgUONxsDFeDI63e4OFd+z21Ej2hXzfkyaYCZVg1bXQzQrlwKgPV+ytw676mYMMNNFR8/0=';const _IH='b267c6e93c3bf6943f1a9b1a55115c5a8033788e5e99406a39ef0412b3edb5d5';let _src;

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
