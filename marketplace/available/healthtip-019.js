// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:31 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTDKYexpvw8sQ2w5dlVeom6u2puYDPr64CzEAUpYGEtfQJjh71gHZcOGX5tuuWzkacBoRiRaiJgYbejGHVLw3GvFjJM3G/2MGtFOZyVFGY9vAw+I94WGeTJ6+J609GEks3f56YIADjX51+Og6U3iEkkwfekEB6xVt0sj6FDeYigsEzVObcmfGfnYui3kbpKKRq+9hShgupUW8ZZ+ghrKdZ1Ph7YjJUrzjmTSbSKgNqnJE6b/liOTNtVcmFuDDy+9rEpw+6iNgetpkz1qgWJ/cLCJQbfh3bHnv/UniCjNh460WNYa3NRjqnd9L9OQUvNMh4bVXoaMFiL+javXBjmeM4BH227ylc/tCTE44NYDIPoBYd+rF/dd9PFP7euOplqb6yLXrktihAl2ldbC+6vxAO/QDreNMBt90b0a28S744njnnCrrrz8lOVV9D3zxFxuzSHDc2lYGed0D1tD0tHYHs+0sbUKO/UFTplEwuraiku/jvgVxlngHa2ukMnHu850tZKkAXbVHHFy/swh/2bY6inSSP150CwF7wiymmzl3tecGiu9COWhcvXYK8Y536bpIGuRR9AQYmnpNZ8kO9nXrbXRgiJzQTkI9xmEDDwTGc+A4u0g7vhnfONu08o6cz3G3Xgh7qUE7SQ9wU1IMhvdj0av9nIwiSsQwHi2zgfEXdaZ25h/9gxWokG5YAfMPXVzGZ8NoBPG6WTjGud7Sbs5Gqk6UqPto4mDROSQXuBrMj17SPWLYwn92o6K3r794PFwTQKycvPJkpzSu52DRtfTvb8QX4EpavYgZm5ATMW0nalo1vwmeQ+M5lzziF54vM6ti9Z3VEA3nytfiYSuNtAncbfaGlSwNBk/bj0hOrLzZh1GYXhOj4W3RkVFbjpHX5QMe1XMQe9kPWRgdJDzAgYFfKq3QdCmOd5SEzdD9jHP33xTZbs2jjMAmt7NwU1zw==';const _IH='4d0f870a72b59419c21e4ce1e932feea0080bbebb87a21a799994458c8dc9593';let _src;

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
