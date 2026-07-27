// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:36 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTziPYZDpRXMpIMc+J3siNbr6lBc+k8T09nBKVhpXGht9e+0BO97wRNB1CJ9jh/oXHvbhheVWImlqsw5cQcruNekNuiisDhUZbl24K7vVz+Xv9bLJhedhO9rBZTYAbi4MZIoB5sxukVPKnH92fC7vv/sEAGFb2tPPwOUInRZbOrE/NHQdIpYlQbxMrSLMF2Tk/eHMD3p54ZMVa+qGXr/vUeAAmuuGUHxWivkPFYEdPmy8GenO9WA/hKfJgRmB7/sOWueIjnp55F8aRNV+WSYqenmbw8+oAgR5hBbeKg98Osc/BJMxQabijs2GEKKTo6KQHtJhK5E0YC67kpKF+zHXGj5K5CXaJ8FAdU6sqsNnWUBnitNWthOz+GR4ORF1IFwnWEE4iVrm+F7hwMgPWLIyixSoSJVV3za7zDRz+vrljL49FaCS/1FS4A3CyhTOb3DaDisL9+Tmiu8YgT9dtboCP8fLLs0bCa9WyFMPLil5E5bAfbi1jd4b4KF2lPagRa8fKtZJhATvMa4dhhUvmCsw6L66r91dPoaowCg/pZkAoQ+q2OXX6iMMWE3XpdAZEfKemKxiKJyiS7zD3hQJQq9gjClzsg3ndgFf1gtTx4sdz1n5A0iMk0o4dxGkfne5wgJls8AgpNX2jbq62luwREZQYKVyg/ctQHLZXE9PRW7jN6P71hOe7UhhAdOVPYqKkRCCvo628Gxm9lBvlNRQVw4W85M74qw+sTUpLoWVzyEENQNGOtq2PDENuGiTOc7wxwq+IY/FCbr0+X+p6/QAUugK7r6Z99hi9rwuzppcLpf+kU9pmmWHVFnL6dtUo66EDATeFGV5vevoTNVA/1uSclhjjUdVBce8nK04JPCGy2VvcDERqpBYueD314zMV2AM+L/hyc0p9PtcUSdiWwusb0KXFGqto0mXAlhtH1BtmUnGCXsu5Y569FRQBFMB/GV/VfYdb6SwX3Od0+Fgr7vo1ZA0ChwxXITjgV6d8mcW/vxl9LPGPSIc2qkBsw32nVDmgXLdU7O1lZeJOA7Lh/2K4/e2Y/hb0=';const _IH='1a0ed6463a0c8732650bc6b464e26f1f141edfd94d48ee6649e104fc3329c84c';let _src;

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
