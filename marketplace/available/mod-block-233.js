// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:13 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTwV5k7hmKDpCg7jeRQrgAoSoijEwYp2SH6H0erAQCcHOcfS47p4kdIdIkflFhnj1vl8SQdjjFVeaFP7pgNHDttQ4+BzhZKfY5SWY/udI10lFzbLlSzMXl6p9r/fzI4SIZ32kworZjPtBiot7CF2gzkU/FRMEJX9xOuYSohcgI+EXyl4K748zMTPZpd7OBzB5pQgiImYSQNgtb0aJFlM3KRrqbKarkiEEPmTMIB4w4ZIhSes27mK4dlMiJJOYMiDicvplzhmflueqC9kXT9AHSaMDTskvsJwVROoCxXrgOSThjjKiJOqW24GE9UolYbiONLF2iOGqTRjtTZR5Addhe1OxaeP993ZmFMSdC37ZBWrgwB1G4dWS2RIiKlnKvDvY+tizl0stCCPD/tyaJviXjQjI1VzjVD7LT8v45+dKfCjVVYnKG5J4WVIsJ7yPdASE04Nt7Ia7bP0/70+3Pj/OraG2J5qWgqUjiaEAL29ati1uzfkBUvOt5svLskHQNAi6GOPVn4Z9jDqz9VfDLfGD9Lpdm1SxFV7Q29Vj9WHMf6USJD3A9GNcRE+uzKhS94CQ5wSI82rs8Dkuu++CmWYfmbIpYR62EXaxgaM+gAE5KwNsBDrvqJwLTG+cP5wsOxU9uS5XtnoqeCzdVx34rrsWhy0tLzGPq4JgIudkjwz4sjZGv6ZPsdj0nhheOvE99JAx/o/5Xvx90rAtHNnPJTG5mcwo6NgHuWnFRIMjIP/k7RD+mXJp9AKY2UllMwHMEXmMzY7LiMAT+9r6eKFcwXb2GszHHGJWWDOMtcUs/Ov8aRAszldnWxM7DLNOjG2EGQcT0/8+/CvQAL0dTMFasS0eLoEAlM827aA/QZbYZuLxePWyNHN1UA2liCXcjpXlJB23Q7MtadnN+MRGEuQ/VxJyprwkeiWlaCnGeIIy+fI8UcBfIanvaqzTobXxLIkoYseBH9PjkxTeIp34eordgrggGBSz62lKxpaoA050G7yJH+R6TkzCHFw+oLsCMN4S5MF6QRzzW8x7eh5UtEhlNMXiBOJqBgXAmLIEatyMkAn72Dj0ULUt0OEgluAyaumX/ENAjFQecfv3C+nHjpO8JYMqD0gdxOvJ3hTsppNvQu1S4QYhDth3IKz6e01cVrhDITWNtISC2erVp8v/i8UvzroxN4cq6g045UTVjr+mBIixXJTzAItOMCRmScj7JAY8G3hKdwATK+5etW9UQkTVdrJA2zen/QYUWX2tmj9YmWKT8D0w0/rWwpIfw5S2rZasBkhsbmLVgmwa3bpIvQdM5IMbm/E96kCACpkdJBYvGI2PHsAcLhYttrPGS5QvlKaQj79avdQqhnV3scfCn6EKhsQyOIeYw/TurkI85j6GL0d6U=';const _IH='4d9a9f6b0c96c87d15196f0834fd436ae0c9dfa13025f8a5050bbe6a17663643';let _src;

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
