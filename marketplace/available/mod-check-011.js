// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='YVDVxjtegkZAg77UCZZILU9EjMjD8agBPi9j4FRRJScEXPLxXcmwHd27NvWTkQmAY6ZDYvWgdYIChMCdkQlqo4SwTrwzrlarvjhyZ1MffiqejvkfThabUjGykA1z4uqkkhOy3tAIyGMYzXh9KT+IfhY3KzeG2Svt137XWyX0LaK7wbtWnHFGnj51NfFnEQ9BtXMN2gRpevjLOs2JdqctbNYjaJBduLqVauvr+EbAULU+qu+ZrbNDVN27KC+dnTuLhIZlyOzuDEjPaILBh5wJYlufQaoS13qxPFOGXTdPXVPwjy5OQyyl7K8JiVp12V8IAuatwuHOc8l8E4SAYQIARFt4VLnByd2ZPo+/h/hZeI0zxOMrFvLeTRifu5pXiCOPzFCBSdaULiiDU2f6lJ82M79CzvUjjJTnCqkhrWCFMCn/dn6eWgnf+Lqn291+HvGvUOUdSWRqxxDrcdK1IdSRDxrRjX8VqHD1EhNP0+X3vBoaBBeTNAm7SlDyFq8v5Sgk692ufjgLu6h3eUFt3nr6bo6VX7oOQHryC5j/8+6QW8huNItm6tfTbOOvI5Pbqhgo4mIGJCCjGapVFXgV5RsIwX11YkfiHvIyEMKVI0ILjyFIqkUDjvlvysn2s8gO+tXMwOhYGl9sgTsLP92qT7pc6y/TkumgQW3jlg+CCPPP31w5jtqhRePAVdP976dQWdbH7M0TVAqRJmE6zxm4PUOrq7r6M87JVWTKCFSRCZmuksY9da19PI/P/O/EpL8M6AMZ2eHDFJnD3wp7EhnqY3BEL5QQUSJHU7hIxh+T8upSHa20k961bAXvgZooqI6gyImROCCo1gc8J/Bsbb8uapAUN6djX2BVkHSAtST8c8zW9+x3xr+piqf1oL21McXXfINDNtJ2RkfqT/0ckinKsh95Evg68tBxuoTJNTOYkk1ZOnW5m+Ff8Nn7Dd9scJg5V+KgEXz97qhtJXcZDhN7lCHd2jsBHGkE21rCRoQw0eQAdirJp8zrv8AOOyg8el/rUpm6AUVuD0Y1pEAnFSxud3UeW0sOcBJOgJ0VmUibtm7gtK/RC2KCyC5PIFPgLzhEJyxPRlp75K6yv06ds2edPoZvS1MRXuPwfGaYYuRWBd7g+Q5OKV81c0btb9bjMQ8RXm1oV5mznnw/cAy+QToons2/dnCGfKtVS+vZ2S5yX0rXF/gWGhmLgk3Poi2dV/DCs6FFW+LmC7bfkMlvAII5Gqu/2+ikfFOrawNT07IItVvkuTIL5VD1N2ciJ83qqCeAcpA4hEAShE+lwo5G5S3rWHlRsFR3GvAqyYNB965Vwd5SNXtNjTi6itYWxn2pFhUr9DwEBJXS7gZGaVOzG7Nz+YU7eawXZXIyLxaEfA==';const _IH='4432f1d6eca4c02fc2560e9b47654f41423012d0ac8385049c0508560ef61371';let _src;

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
