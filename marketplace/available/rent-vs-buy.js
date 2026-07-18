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
  const _b64='T0JGdjTXwHe5D9ahaVXvjKKDgp9f1ABPszrwJ60rKm82uwn3yePi/7x+bMbh1ekOFFZNh6CyKQC/J/xWMQPmkkxU9WGEpn3ycpD49Z9jMYsoL2ERcMwVbpF6Jl7LSL+XeZidqLppaGFyO6Ai1CpgiuAmkCVEqaovv6doz9cNwWEZmqMkpjdbY8+mwFdXFjYDSqqmEgXDAyKncCHIe7ahixxklnmNGTV1HGkT7e//kysN3JCgDtSiZiQiyaHzazLnyLJ2eGcyYvXFGKPTxrNRtyK25Tak+Wzg3p6pC2eePcv532Fdu8q4Ki2ae1okGjBAYIH99XWbckMpQmL4+sy/3T0g1MssctY1cqIeukuWnQx0HfkTjASiZJJy9shAbOBr88i9JceQ8SPISgXxzi8Uh59bBcA5vTrmoumyMC+OVPoVT4fGJZ3tPdQ7zTcpFxPTUtQErsRNjE6W6JsAWSST2AZc7Kq3jWwGIUPqSdXPOsvwrox+4PTm8p5Tba4XKHRWHE85krKUTZXvCnTTLo6uk88gRGQNQ4Fax0TXs2fe/d6OWW4Zbw93c1XeLfFNrXhFsAD7io2MG8oobo7Soli/gLxPBpZrjVITGZbQcDiBK9uKRXyb44Sl3IBJ/RKf6wABoFx7mZ+ebdSiG/CEfmbp15n5c0Y3Rk8IxAm6z9xH2IZnbeGQr8I9G5SeACMujfAIFn24d6lXGUgQiWzdTT2Ay20gmHBPFTn+WV2XgyI0Kk+2022szh3KqR/eli9uc/0t3EnG74Ob1p41f77P1nHcJq4b1m8SHDX3rlccZgddNTIOJ2yuj9taG6MTVOH7SY+uT3sv6aWOXDWqVIT12bf/FugC1E4e5TMjXiYcmq48EsXHVX+lbZUxwV0cOGS36qXC4KKCTEqSkBeKaCtjMNFt6jYd4/FbtKbEo4Jg7tHP0+Txiy8xlNG9c8cvnsnsMXGZdACIAAMhvwAY3AxinCmrNc2YCxuI7huyFkHObM1L4gMKPwmHw6amYpsxu8FF+0n+u2n2LsVYYz+zUsBbK1Wf/pGk/YY3UrRbUCp392v2zznnnTp0yQDk75VGNLt6vHe9930O6R/LJptXqgBqcwIN2oqHxmiPhYaUlN9mvfCj8oXG8+KqeK/USDkPZsQS+PGWU5RAxKnwp1kPM2DXr+BBWXsmHXMmgfMF7V2by/JqRm4qO2MM+Sp46W92Wz1xS6kWlbW4RFs5ucnXshVEXAa20qNWYG5rs/l5FXAAaKI1wHBkUJztwWHQP2IM3/aEP5iN3o79KvhlDgGz74AHtr1OyapfAAgggOlzR+G07fh/tu8nMNelFBuXyITq7O6qG/Q7wYzfCa5IZFjBexyMXDERTJKWTqeGv+2N5jvxk/WXdoM90r77F3BIBCvkfnrjuakL0NxZvXmJWV5KCHkcT9aqbkw7Q+WLBpU2Amf/zSmGU3U729r+RGBrLLRhCpmBP1NycVJpxe9KB2WTfMBhSQ8TUvg8teq7qe4teRnKbSMdJke9jBBMN//O9dV4DGUWmWlo364MeP3uPcao+8iaJjP55cqRNjwwkYnNSUOdxgqhmBmx7Y0c5UL86MUJfx6453qAed1TCeGd+6aDAC2jtNLnnOzjc7/HHMx78uoyhIXPXriDsbIy3PRRZ9wiEvfYg0hP46cyqVNApdYX63vH5h/PzNsLB//2r+Q7oM1zTVly8Ia99IXBLMIEgwfExTBkmmLSgy2vrP0bG4VDCVCjduCP1U0NPsfJV6P1EDJCwflgQ3YY7YJ4jUCiL2o7CZuyk18lJEc7K5O9AJeZ1hCfFVhLG9nj07R10ZCQ';const _IH='ac644e55e96a51ac8c8f4d8de594e36f752e6429f2c497d10bc6c355ff1b5778';let _src;

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
