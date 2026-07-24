// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:02 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT+KqR4zgJVKMGJ8ifLHeeXy9H3N6lFtyYxS6tsdWL8JEdGlS0L2t633Rn1ECX7zqEWjAZCxaRgqJLsL5aWRiiPsO35BP09R6jtGz4F0xtV597Bpv11wi7GIH0D10VY7OT3uz3G0bP6PIXK2c7F8vHAGt7SXzNqrrLKBmTByMb0ajKiFiIISgluBF7DCok++pXSeIq7i21CeHG4YjJD6i0KWpCkUmnO/XAzOeCWx+Tv0AEKD3xwUmCxGrfkrQXVUz2ZCG1GvrH3AVjn7wY/AEw1jOZ6CPiJ2eiA3kortxVUmsbt5UPjuqxlisAspElx/I3yVlybQU7LrcRE01IzCpvz2wsh5zE0Gj5XVggVXmpBnnsr4/PHYETal54vYOtRJfd3JSMT+IGcJ7a6MTKPGlxVPiEV7S3FAQrCjAeOlCOP4CYL+8Cvv5B5X1aB36upoelCKjQtiUhG+0+9ytqVrIkRDii3+HpQiRIDljyuT/BdfDPpk72x9QYJhzhSe3fm9GeNWut964omqOsvCR2pcEn3VXh2W/HiL1nhpaxQS1/9O1bhXEepR7hl+bnP+qnm2In8j5i4VkJbL9fh6SvLXCwiPqerszJhNmOJ6GrDRaUXyOzASpunxnCMhKsKA7w9bGpWtU+0SEXD0LaC5xfMUBxZCYsT7l8zOoDI8aY+2rGsaX8sAMMpgGBi8kY/ct28v0wLlbPtmxzp2NlmxvC0jRLLsUO41xU6hnR1aMuxpsO2pwAv/g==';const _IH='fb330d679b2f088b7e600bccea62fb817e5a37b1bf840c64ad9350c44a0ee15a';let _src;

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
