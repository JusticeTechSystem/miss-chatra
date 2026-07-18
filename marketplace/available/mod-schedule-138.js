// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:33 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQhFv3WOrrVPtY4lN1nTiKiVC5tHcmT/LRc6I0sSjLbREMWOR9WeEfL2G0sP/JMjndxBt9h3C7aWC7fI1EBoUr7rnKQt9QhdJis0ZzPF2HXY6Jr2iEodRBn7w44r3G02Z/J2ixBX/BXSF5F/Ut1jccqYEQD6zG5ZaaZq/BsejlXxkQ1eKyOo2ev2U7q5JK6MgBXqY8NzvmHEZJ0DYFjhSPhZ+X3zgHr3otImpMTmYAtUMV9+Q8X7ttfifbenYwZDsVCVBwN58n24AmmnU8QZiWQWGVb5MVTLoCfElnwUPUgyfBZcuhusOmfwnKN685CBErAFFXkrtW4LaO+ILFj77ZzCFd4xUTg5VOOZZV95TPnIIeNDTwW4DDMFHEhTAD/QL8ZHrxmqeKAkcGnFhC3xG3mc0K9VVDy0r7hNkzFmRKRzU/R03sUNsjXK8+78OXMgUc5bNgZjgCF4cY6ggWXV1GPx1+J7HtFjSVb63IGUxIbS3067q+p8zYSxbVDD3i0JHj+9tDX+xcCLGlv2BBn16XuUlVEtuyFWBDq63bKN168/OS+ge4/SCTEDo+diWUDSUlip1KQufWXFItJuC61Fh9S08/XhO4N4phdNQwYHYRnOnVYFDvzoqkClRWltLMriR54W3Io8uB1nAO7JVZ+3jTUOXlCJG46xQCaJdaMMSleMOFlvLB2UHkC4vJbitIKgqZTgfwpccpweKXTV/hQuJfvKvYJKwevNWO8wGdpr0LagwrFM6qNcnsfIhM4No+A+HhCx7F3aKv04Clox8EuMXimHkba+dRgjUXIhBbW9wYWwQ6/SwfiUuGAr7v8yHUFR3wfdArKK60i3BciTzv+MYdiLu8lYFQ9VOoM/0IEtFt9wWTTZAtmLba2ON1Y4cHPFYaL6DGTQ3BYqsIQDSjleAm/fS4mTyLaDBlAnfQYjQLYnC2Sf9kAArt5O5ZhxWu1/aHIyUSVCMSGF6XXd3Kkmv2+BEQxYwUkaMv4oj4vFAucllNJzU6jkuImfvAIfT7I/rqx0XtOkhRTRBgaTNHhQ1irzjpruBMayOGqRMwXcPG51zwoYQhWu9n1SEKD1QUULkFDD53BFn55mNSqny/WLKewsQI0JT5KB+4V08ruHGTeW/cAQVk4pTW91P1e0DS1evzM8A+2lvxxe+MylWbJHsXT9NwbkuQqX79oqVuM1iSOHTYnXDK2yonzrsaa1vrJVaOIK0/sH1Iiydd9LUzWBo+MrFPQNOn2SNXctQUGIhGONLX0XmKLgOzZfUpovspSNeeLwJRD6+M+NwA3diNmWuHYKpvUjstMImF4g85Wiuol9fE8BsLOMDnSwyhdP7SktIkA5Oypr5HouIrio6ARdKDFcO7ospbetDHQ7ubucXoun2g8tYD+u6XBiuCrtycKz4zLl0Qmhagg3OCH56Y=';const _IH='ecc128b8f597b997f3d90783f76998f523c7c1b4d0d2185f59d75967211bf89a';let _src;

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
