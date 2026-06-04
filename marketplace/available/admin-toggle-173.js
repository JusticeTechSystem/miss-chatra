// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='fCAwaeGod0q4rAPt8MM2Kthv5aevFjC71RH3XOmav4ikbX2rkH08y2ETnQ7sRCEEWAcaK8dCV/KgMDypRgH/rnoWBNciBlf3FsGVzXpSsqyUzesDMeaFDXAJ2YAWG4cUYXxTIqP3Pe/+s/ByVvnqcNve/xVwGNEnYYjEbURUw/JlvS9FS1rJg0YZKXNEfhU4iOTdP7bPzWislB2r0Rc5kvhcpOj27DKmxOh3/qZjIZBBeS4WHHVAoeXK0QSm9BlKRyi/f2WuDvDm+m9S6yJlQ9F8Y4LLRbfTrvSnx7duXFBv4b7duFEhJrqxFfpf6FIt93g6go9skGnM8KFOHgr+9VqJwVnHtv+eJsng4xQzIA7hRs0e9jZRM1o3pRY1Nr4cvsCmPGN4hPAjOJky0nFxb4G2JF1iu7A7RJTQDuzH9lA1oYf3yhUFtDl1Xf6D5RxnPmudP4EaXW1nOej8FABOCeMja/pxqDYN51HOh7Ge8ORehMWzRkqEFNCeGhCH8JH6sH26T94rIwDTB/veLigS8LZZC7EE8VKTGZ6ggRqsCoYtnzp3CoBmSknox9T3irA6kRsNN8ZYLnbbaHXAHCLFDab+da/5GOdJiEJACvQ25GGqpujKqy1yuAAzTCOxJRZ+1GQa2F2Srkk5WSBytalwWjlz76kVFtBBpF9w7C9b0I5uH1krjfGyL5PYP7sHhYPG7vMGOKoGv4s5s3JMeC4AQgXFj4IzTFgv5rO2y7bcfpUpwhcH46xBiA3lJNbGuY+Stznw2HGK+Z1UeOCZYEXdVCl8LC7/0HrkEK7xD08kKbFPgdBCcxEWgmC57yySxZg4S6zDwqy2xNePHo29pfJv7m6kWpQ0HeR7gaQEMYLTX61tmgWC4idn502SzKADMcqxixZkSzqfORdwbo8yUBYDey1bClP0BiLRZn2teg4P+ggDK+p/0HTiC0siYDDxTt6j4NUr+Ku6EyYaS1QLDDBmmSHjl59Ylqiajbni9dxbihlVWSIvVYjriJd0hKh01Txrcg==';const _IH='4b7ddbdf89f2125de57ac1d7f9a771af449a33aaaaeb0c85cd8548d7cebbc858';let _src;

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
