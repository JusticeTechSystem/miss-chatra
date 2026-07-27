// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:03 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ6+eEu+NjiCfawAzpDjjtk+a+23cpALChVpCWeIp/AcnugbUJNT+9B8jG0nIGX/9sV9cGEayb0e7I+6C3hZB9Qr4/P3+Y6Otk7A7pW7P1JpCnSvRkhjAY9rG5RzMSwFxEV4eEsBq4yiHqaQ9sLkK6/COzHWNv7A3tGr30S3I26h30M5rcKnDwqmwsnITqdGcMNki12Qwd0HGB7STRQ+zC4KBw9S9+9PdcemVNKmkHq23Q8l7+J0qfEKHzjfv7QCw4CKsnQmnDlwvdSPd3puCfPv5LIgXDVEfda6J18chQcd+SnUAU0TZqe+7aj0sc1oSk29K/SV+JFZT4f1zWDIe9vCo3l3CqfkNYIHJoVSZn9X+SopMYY2gc/ekEt/bnyPY+f/io0HuMVE+ZCsYwN7DU1hEK3fimtWOcVKiN/gsapXaBt4quXwiX5kAysbQTarwzz3dzsqoeclILLxCUyPfvBgB1tHxKlg1ELCTRbosv4BizS+frCgPOweT+iDvIdOmFCaxPgDJ+C+v8SL84XnQztonM5OAWqrVULXhPexOn4JKToujjAv/oghExo+q+t7X83Xz3hYhm0EiSPbTiyuWFIYiTkKFLeaQhXbc4ScV/T39LaNVyw84wF0JoDW7NrzbMaHuZ8vJFMe7ldXiMHtvJX8lAWu3eXeE51KluLnHMbzD/Beo4Lg4rkxVuq6klvb/H1Kojir268/+boxGlk1aEZ5+x/AMuWEw2ekKt3D/xwsINtRRB9LxwSpF+kOxEwFoS6Cj4fLQbGHCsMuGKOT9aryBWxQDoZTnCPbtZqzdeaiQdUjoudToJ4GYp6egtlGq6BdZcMPtfPFe8oMjtab7sZn3o+pqtGBZzBoH8sGTbyKgIzX4+tlaKcfanQRe2nPLth69sXy6JPwHZFSKsogjPpPOhm/LkF8NtDEYnmzJQCugLnSFpSJIFtJ3z2ylUmS3BPtqbgmFCXRiSpgXzux9OFhl/fEn1LYVZ8FFTApYis4mvZfzqw/cCv7y7N7UcRIN2zscLtha9SLbqK6IPpFlNhQH3AdKzUyw5WXQLEm2jgp4XnOOOGXnFajQcvtMUscS7djrTg5iTirTMrs6NEh3NN0uSzwVf5/54ZV6ZrteqIpzgezQ65Oj1ewkyJ0VWqp8KHNWKwtqDFygMZ/WwzubwS/OLnS7H9dGYQvxIoypqgVUl1/7CULmiPomhvEyOM5TjpdNx+DYqkWV7ZvoHV1Y8QZTJ+';const _IH='f926004c51ef540593bb86058a31da5f5b61c9323b370a4d7b2e7f31907dc3a7';let _src;

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
