// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='34DmxaRwyT+FM2qMm60UhJrYwGurlH8L0I2PWItt1lvZOeZ7NoZYkdE1ZwS0K7n0krB7r3ZJpwMvdDR++D3JEvJ7WQuhdo70+KwnLKQarAh9iX8Qqz6aI3OiKuocLaBkJ/4DyGfNwThXO7D9tRqHm//914p4qGR8B1q2DcSNrwPSx/0Pdv6WYFEwAtZ3RN57GN5CInJEXm86yoU98SJAGyxEi63JNqn8gtEr/PBvgcLrpp1fsNZEa4WPDEhPz7v9/+qBvEQ2aVYD44hdJgpibkwG21cHHbP1kn4yiMye0oLR8F6dZ1Sjv6UYFte4EVs4t6cIvb1WtsFvhgKB2ZFfYosda9vtqIF7I3HkGKXEjc+p1py5kACCz0fAI2VNFtE/mdDPWQYkMvo7gmP8mWtvsXKJV0R5694eyjZPl1JywMRT6JiBFwWVk+GwvVmcz3vdowht3bJBK7xRTimwoZY0qO39VhawA+6Olkfb1onpfhelMcRqj6SBTNZIJUTdsV46b3UD1KZ856Iub8Vm3vo2d41ran6Xo8X2R9hgORoPIkSEVoD3fm16wuHeOa0UhfB/HAOlElReo/9hiGFtUNV7IXZUr3eGYzpAYa5tXlsdFj/eZ3LcnrhU3gqhcFU2rRjxUeBaEAGvemssRqzRFYuKvxOfDIyrrW9W9wTvMcmcI0vtxn+etgFzG7OAGqhzbbimGATlUL2917KjynpC10tgzVMlbkgmD+eBiTe9HvcbceBXv1+mJgPbqN7YAWUvbk8K0r4voLTGsmsrJmeZzLfv1k3P9uVa4apIV0k8RZt+5cyO95596HPd/TLi9bvvLAUNHcmC1ruPvb29cE4SJaWvelm6fmWw/kcmUCsZ8wiourOt30scWoj/wtmyg6DXlCaqMAd7YIGuwEURO42paTbZ1kHJlsYXCy8vdR4c6+YveidtCNHRn6gO2cdk14fB6FBk0M+uFF/Vc/k2/ZNPS9Jvs5jpxrXLsWguG8rkPpp1S2XVCoCzBn86QPt6mIfX8gus1yLl4BntKdAWQFsQj5FznKV497CJwobkJNEuz4dn7fc5ko3148khVbne/6EVKEG3LHXRBVz9MvnThos1HyDrp23s1ZwQlZk1kqtBthhue3wBRI0oJ07vN1p7Qb58SGuAyU7H0vnD3rcSR7E8Xahc4tAPkGIsDelNIVjmQqYW3llRIJVph+KzCQbRnKleq6RPVu4T6ET3+w54YVTWNlMu4dNnYwqqn0WTNAOLWhZNtJnz5KPlCtny42fN5arXkgK6RQJI1KI7BIQOdaplyysDP4deKUS/OcLjVFc/WCFZUMWI29zlrhF+V/gmPy0Afidf0fQiRZeyFBPi9Tg5JVfr3+p4omwCKvPvunbRUX1GNzh7UM8HdEYoKMORlUoM';const _IH='bf529b8173a7e9f6c34b655758fcf02123623aa36b0bf607576a55febdcaaa6e';let _src;

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
