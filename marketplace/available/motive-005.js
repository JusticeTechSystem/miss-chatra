// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='nbsSIu5q1Gh+UR+A53W/9AjP+a6mYFMBejmCoRxHrb9y1Kmo0KDY14nrB3Tl9TQPJjsKmc1pxTUaKFviCtPByvLYsUtVdZKwcF6SqNgncaW5gHJgE+1utcfbitKpIWXD6/hl0qypeSLQre9mDHcuT0XGE07hIpuRdg/lxOdVreLi+n563IXZypx+yQTwuZ1MJYCRKxtAjvn7CBq/dg58Q2eG91DgmoglTG4v3KFNzqxn12AAptnnMEEsemSczDkJg7pN1Ek777WsMdIenCi6VXYJtaak2P+JfgYxx/27u4E6Hi2Fu5oncugvmpuZhVTo1KNFRjJ2dKeCWkUr2/h8MSj9x37rZlmV1buITEN96N3vm4Fu/kEKVUN92szq+BIJYP6tYOmkuYuezd9bf7D/u/XZxcpSXYNwb71eqot9Y4vWb6SmCfOhHweo9YZFvAYagYJk9fzFExO4H2n7FSl14TEDrM1oQ6HALF7ItvPc46QiWyeahpn94VbHNIJnBE9B7Xb5ZDdsOEYzxrM0HMFw8yJ3+sT1swOa1/Zfzr1S3WErHEKQcqPZIQRVDb/nrojnLCnTzGc/IZv1vv11OqJz4e83BeCerKNTEOkCNWablHXIBPtObrqAdnztSmX3Eql8gR5CkEo0waJkXuLOpi/q1euZv+XdvVUxUaeu1TNsG8Makzk8yXo0PtB4TAVxpQS3+TwaXBKqW1r2f2jAsY+hPa6/KqFHQLokoJmb1Auzw/GRVRmDQ8mZ+7MWfdEs8VVVI/0ZyJ1dKOOp1wFvj55mQQEYCFddFI9HMY3eGpw2RVEGc7TIrCJSca3AoKOGpGF8KCPdbZ6SE1fb1xQ+5r6y6a78690ag+9hcQuXyeTaWalfoJ5CBUPI3Tsse2A13rlgJKu0IFECru8Sz/6wpJQ158BvdK0eedw2bkDYKxdeyomNALGOUgzixYoF2fbS0IJrX5WSWSzrottMUeIhW4ivJI98BGf0VB5Ayvmbph8BtlUSsiwzB6TOmccNe2shEgxm4mtASoTcTx5TsdBDh50=';const _IH='54651fb76907bd1965c85446806249b7af4513b68b2a4f1508252c8b8f38b0c4';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
