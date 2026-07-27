// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:14 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjREUQIwAmwfzliLAwNE/NDHRqiRkIWU5BMX6KCiIIEWkLkBND1uCb9JkVmXMdez2E++uEMy4njPiWf1xlzqdLfXW5fXNWWDCk0tMdXCbxxBjklMzPGDQNTrbVBSTVex5yfi2vz4DMf6euNAE/P544tgR705gma6pAF/SbsSUmgLom9rtJH6PExi7trEQ56G0ZWMfa2QELBbFTmi1rw8hoEm4WM1CahOjGeefuXnDI2MgsjwK6YG5cGeLPjigtcT6ORQ6h0rKoDi/U5FqxxRNYxUncSMDAhg7eaLh2OYfSSacZ+ealBxKoFLgoZlyqJVnjUsJJw14x+0MUDPXICU4IpycSK2vempxk5L1tHFH/mlo91vD5a/ZAVDA5v8tI3gVOq3JTkegirkgCaPItL0AyanbE5vriQDxlDY5PZ7woJKTgj6E+hCZSkySvMT7OIeGGEq20RCQCrwRyg72SpTewyVMI1MlEkVVTZ4S+p8zZo5ypr9h3lvbh1qC1m7zTc0d4Xa2nj7Ob/gnu5IKd9bywaHG3DQ0W/Xd+bnn4oaa87kZJOTZmFRakDTKxdQ+sJ5XjsbvTq+yJs6sS/EkZUOCQzbd84amzOSCxj5vagxup8Yj73LSL7c+uYK/eSUAb2YNqzPMjCmc9VyVoJPOB4X0Xt2DK/7XniGYoTk1vDYGvVB31mJAPusSTFhLsKFCCkq0FzMakngHJbiWsN3hs+riXEntOvGnZXsFg1t7y5KNP8Mtfe9v1LEzLU6WB+64zRTnLVN3tM9zxj58NNm1dSGwXMPkqo9ehq4mxvyBo/NXV06ElOcV21omuJs1MIuxRNgWNUVm6SY71H1OjZhTClqGePpkuQTyMzBpu1mPDGc238kPsWT/aT5GSpl/MhFVyYnKNVQtczQA2Q7YUWwxFL/UD7OUaI5+GPjnVZvXe8IAzptVJmjRF+AZcdu9FP9mwE6fqn2h+W0GKiGQT4CjU52/jHGpYtxJ5leQPO1ovpZZ0YoTGEW+lP8hDgCKlbrGN5PWFUB2XYLIKd+uOHGq7FzJbr9X70/wzrNO1YxDUtWQbShRb4CeLtiZ/co+ejy855SpxYIUNyhx+b933IrbVMeHl48ENsCRX3+xmjLIDI5x15aW/IcVxmmDiOliq9uvB86oNPt+Uz6m6ZGV/UxmrTZSNhBXqoTpGCo1KhXTxjnK5nN3nlXIjFuuDWznpj6SZ5iYg4a68k7xw==';const _IH='609d7754f753611e04ef5109f17cb574bfbcf8c4fa28586f852a9b1f5d82de59';let _src;

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
