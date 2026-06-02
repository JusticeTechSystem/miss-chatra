// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7MsKssatl7zKeoyEzuSEQEjrT+y6BLjl6IHAqk7VneGieuK1IDz43BLnEA8MHib58QwhBKLu8qSzi+2dikeRfZTv340WrRzrHSXF8BijeRLw9bSkL2JfYZf8vJg4QDa7xmdDaz/JxDnPPtDionZPK7fZcZcAB82NwfuCUbIsl1O+og0AxjJgj5US8PedoFF/nJENLmgf26wUIqcVTbnFNmyKIaN52R9DbJ+LDK8u8nQ5o1Q+X/S539FyZlYveZGGvv2el676/7t1aUyxfLVkImVIDHl7Y6MGzim8+aFBo5XF3uaYbuahaA+bQNCnP5476wKuniGymsFnFR4xMVlrt7yhML//oH0BdFgz3seU/QOWGodT2RgUwkovxwWnABF4Pdl9EQ4vAuJmNZp0kQ4S+UT3eSQeSNrLZRL94VyWQCghgrcZC6yxJv2zFjXz4B9AeChBTfqi4HQ3MDDhmdir5PZFj7ECyhWnqhI0nBH2PD9fTm9FBXn0Rm7ZOQlEQptCGmDb1pKPjh1krRuus5rKyJK3uzcBCNrQ3sD9o9xK65ySAJvC6mRwfP4u6xdiMgFLIDiyL7k61A3VSW7/euAHPlP5PoHbuRHBz9beCIPhlgP0q7BIPfyPLh8JSi0zD/+rR+b2X9cKKQcrjKJlrGKM';const _IH='0fcc6102e73a5922f8a1a17b685f660c605117e90f277851083b8925fad7702f';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
