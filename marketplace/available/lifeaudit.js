// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:36 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQVtNiY29ZBn104Qff1eQdLc1JTEcXtKWWjPqnDjdOUBop/FkNMCyoheGdIXFdd5rYSWosQIHJnBRSpQOEE36RK0emr0MFsTR/URrHdH1676xhHwqMyS4lO08x03iZ4lLg74VMapkDeHRxg/4UjixiBI/PAbs5kv6ZnZ+g3PbTpGMfXnRHaAwp2U36CBkjElJg+WRSL6LekzbKptpHoUXDBFNBWBaK/AvvW0oUTDzUF51PzkjAI1w5b2XgAaSdt+iMod95dfnxFk7sCwy3IA+blm3EV0Jug8VBrwZ8KTMEGXXJrL6tHYW9apG8TfLYEoqxpuWXdB2fKgHQav1Rrlgk4PeD9GmyXNy8sNEI8BZpEaTFl7xwESRVvZU9kIeG566n5HtAR2GIH5rUKdkBF196Ih6KvPCabgrDfeD90MJXKGVVQZSOWb+r/9tVTIIm9SSAzTPtOCv9YXQrjhR6e8orghtsVQZujsyl2C2ZiOittHT632HL0YLOJ1NRvDymWNK6XJ5FQNp6gD39xfm9dpnvTVnYufOm0lxGZT83FNaZrLL0eue4Y1Eo1KaqkQwQRehu3AAOnpmX277Myyez1c5/NpekwCxjTXWqnWlyHrizOB3DnHQPSqLrjGf8kOIKJBdecnHhkuK6aax+/tKgKFeNr9EucfrBSAGzK6kSUaWQrQhwjdUMdMSlOAYZXXpzfqqgC7EBE2br41UhoMsf+DSIF7b6nTIJ8+ct7biztClplzL7Ow8Qe6MDY4uFV64jTlYECIqBx6mYZkVNbrt6FAktBBkT9obTIk6+9XCZD9g3nJpZqUF71dhHo8NNnh+2nE+FCs52QBocWQH4jdbbkMapILnMa3P4Eir97iP0Kvtbjf7L4HHSMSVriZKz1we9dPJ0czgL54Cwcb6IaitvsxhHvDvm3XzqPv6XRELz+rF4aiL3VJwpHCKdnu32OG8TUx3722kXwwaLWGQTmYq7iX9HPG6ULREQk4ltrmK0TFe5JW44RBl2EnShbth5g4B357FCZ/Sd/kRo0A+j/wDWUyjDHex+6VS67QlotoEjMYrE3/l9ARu6i++I9CJcLryHVTCLRTXTvr8GgC84tGlTMlEhY9VFYNsFkyedroHIESFcidhHJtraJn+QJGF5xm7IVFTgHjJMbVSZ7otHd2GMXsmBRj/2jfpgq4GtGvehgTRMH4yVfYvcc0Lg2HTNxTfDoOOydmoo=';const _IH='81d68e9f0138602a46831478db36cd6acaff6455f85408cb4e9275ae775bb12d';let _src;

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
