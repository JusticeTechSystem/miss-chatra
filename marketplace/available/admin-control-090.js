// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Tk1oJR0KjqukWej9U8FtiiPVNz1lhYiPSZo//R+nMUmijrgoxrj94LY8jX4IASUw0KT7k/29zzo5hsl2qlPmL5gBrSauA1zZ8ebYGI1pKQ/Zw/s1N2bOZ5TV6vcnUsmV+cF0sZykQUREWA5flyYZu80msWMMxJ+PmJ/QwZ1mKzIMxN10XEUN2BtRZuRqsgXL3EAIt0qJDlcYzOXGQUT2YSNSZA/HBv2lfNl85VBf4QSMn0a571YZpT3plggjQ3NeWlWxWq0R+nLPi7Nz/I725/TBmVTxa+NTjN/waGaUgeqACsNOZHfkg28L/YHktSsyd1V4CIJTok5HFO/fHExlG/GjQ4FXdUL1tBxvIXnC2TOLs7hUUX18LE5daVZUvIW+f9UtcD/tEqIcXxPeE6y4osJ2xaC+B8xu2PJ3zN49bErNvcHLJyOPN2zKK8YHeJtKu8xwngf9ZDhoTVce6qLdevtgQoaWvNosiDAkgRyDSzqxf4YCPpSMEP23GdktycRCbjA8L1JebXzhCtX948F5vJQJxuE6GgHwDdH+EdKSlQ7uxJwHmzOJBRFe+RKwiaxsT0BrHlPDfFqxTrvZeI5zoJmgWL6w2lnay8pv0TdDuy5qFS2J6h7G9CGTFhQ0YXoFXMC2547nErZBQL3uD7K7lZPjkVfoXh6FSA6619+0s63NtEK29LpDGYa08n7xSQhntrCE7JAc+UMv89jIKOJUpVyPUwIYA/D8quwZIA1jNwRbwKAjaEcF4zUv7nBw1f9FX46eiSqaC8Snaa0oe88r6YYaBtijWW08JiLASFWz4PLvOudraBk5Ibzq8EeBC2I0J4H9Wc4QCLH5xUb1csuFHy7quUR0advGUZqlw7ccOpCSrj1OaWHYVqNClgZiFKYWOocH1gZKsvk9YlehrSkFEFGGtq0OcXD1qLyt9JzAN3m7feOEhKEmrw2TwuishKYCl/qJll2XG1WfHuFcB6d5DT/RxSMlC2Zs6J+bPHDziU5+xR8nLEzOy3dYQkJIiiAw2nI0xQ==';const _IH='a2c9dd2eb50c4f297c3367933c7d1fa540c135e3dd2f60c05842f752dbfb95df';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
