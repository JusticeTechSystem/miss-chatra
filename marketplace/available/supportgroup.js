// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:06:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='xC5rPrIXOQODcRJXjjZjy4RwZDIJ6+zYkJC7Y/nnkdfN6eizkLv1jWHutudqQ9U9tJKl/RxUVtSLsuPhcEoQXMW6ZLJsNBtCmtY1ag2WpOor2fgzcz0MAQVDs7gk1oAeYG27cEUIe3gg65onSlkFrHAd6PAtwNvthyIxqdie03iERHOpSt1zst3hZsT91hShUa2bJMtcG+RVA47Knz+Fc+6PZHV+czUqy/piuF0257PCjL7Bv4M+yFfcMRicS857f0qylG9STN8TUe0rAygje24ur3HnnrP19u5wEeqQpxrr9jp9kyF5tGILH5rA9MAcGC/GIfRozuTIwGSV5vAQ+iYEvgktxZ3NsGkcnNnk7kTeKGxrzGfoMdTaCuVXmToGm3MXbTxgx5mMAoSi2StJfA9QQEfvQzuKxbL1f8zqlmRt5WT5C7qmtkkP54aFOQ8byZn4HUudpgb2TRgYGQtfA6uFS0C1Cke8qri7YLBc8AE3jBeSKbADIyZaIJaUA29qIMMbGakz1kVlaRm8Wj7SvssfqtumupkPV9LDZhpitYCc5KEDp1XBXKsx/+2YG5VUF76lgasfzPrc1yc7kVvYbsXyEYN9Lip8TeauhIddJ8zeHeK4d9J8bzH26YnISFYJ/d89M4nGsgqEBiy4z7aw4GHQzoEHtTrVFHSG63p2t3LyWpb3shyaE36XS3UU9zWQBEei2nYUpq//kG0Z+l3NumaPHOK41ggqemVHuFmO1MpJxcReN8ru9AqRif3fR2hKVzoPU+NauuWfFQedDh9rS5sfHvF+HyIpfPEF+uxDeP94SqoN4VwUF83I2cy+O8p9hIdVm6OTp96AoTCk++5aOIMJN04GRnG72m02QP/GhvmOEjj86ADKOyEG/Zas+PYndOMcN7fqYXyx7tkEDavndznXFCWXZTJN2BZSQc1A1Xiqn07QmNcuiYBxrkFjeyk756LEblGbyUOd6HsGoqBLpXzcaU+7D/lid0Evixm5sRWai/mGcj0btE5TRfzG76sQXV3wtX0OUc3ihxviqf95DnPIGQFm+gNVGp5FV4jCQ69fsTe9f3+pCEXE93u+dMbDZPSgfTEhymN9lU96gqoFlbyTliCxgYRUJMHqmG2+of0PdB7ICI5LCs+MC7MdCcbft+RSAWEvBnqus9Oc5nJNBJHYSRa1g1MIq1G/e4hVbYsSGOiDqU0TaPbajshFF2dII69PhrJsvnAaGUTu/A==';const _IH='ef05457eeea2db23bd910ab78dcd63273f3281d4a11975da8cf4deee24cd0e8d';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
