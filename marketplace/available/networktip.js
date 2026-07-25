// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:39 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTJv4HmLz4Ut6zeFRQNnB7dO2VaYhJlVMHDzHA37wFT7ykY4h/9vFDkBiySQFnsfo9JMdcYX/BARRSrg4tamKc4yUHPQa2aTDykN03TxeAp2xvKAkcO0cupBcQFMd3RG6WGaOI7Xv1FzYJGCwBoTXJmPeaoDUNrKgrViNkO3p2pLHzamcqT+CfhDinE82Hvzc305HC10isoWbe0njdNsPuzmDmSaFioDWpNv8NnhEf+7ygBD7wjzk0NpZXe0kEVcMWsNCCURtLE4rCNZeyRp5iP26646CCw9D1cLvRYj3+5vZiwHABrrCrplTKPiTgENl3G8arn6cxJMhYXVY/eGHCgChUp6iBfREkOX8poyFFkihdy4yGrsY8ElfX/0bhJcXcOVsv7fXHDp3cJr8o/zPeROYGCKUyyo1xyafVomeGszAzCLpJCR0uprUrAMs5awqtkc6QONdWJedT+dPjZk/iA/PHhW94VMMse2gMdDhFtT7upHMQ3Bwg4eD/ckL7hhJOlzROSCk6hA9+lofVklWAlO4u8reXR9kGrALHysk5ju6goEZgj9KZ6Ay3L1vmKZQL4zX+O1HmYJ9/rRYg5pz7jzMp8V9CNmradTNJ2X9d5iCvQwvpqizQF+r9XmKf2bqRjbrALsup8ydCLVKim+SW26nmJ6qLHctwyWvpHf2aOqQv6ZMxE9OfexajsIc20koP697YyuQh3vKw2BasRI835IonGRkBJ0/h5fliUWr9l+N0Ir9qWnnsNTrlLUPOjWO2bs2bJAMm2F9/Y43m+N7R/kW2HLxyET8Q2Ojqt2/ACINJGkfwv5DcES+22eniSJvySupT3pWWjkfQizwqRiY57p+yL6wK2diF/rIqWfGvcuzM1udAgSehjd3XjIhOQbNjsNd84i0dEMXwy+NALXAGN0+1qvJFFVvFtZ95hvHRIXBx/TkYhHc0LbeKu2e3KbxZhowrAci+J5l9QObNLTmP7y/36aWGmwwSMJPK+GsnXm7QA09ta8bXkwidlmMs3S2KpinIdJESvuJUZ/VhrTaOR93YFZwhUzWDUtZus5lppRpwNk4wKtOFp6e0DN4HL0IsJJZCw5ZjB/aBaNbNSNlqQCGGygTalg/Wdx/7M24F1TeQufXvLq4Z9IwXE+vCY3LMF7Kd8aM7gusV3Gjw6U0TYvvkMtCvahX7vXpF6037CYH9YCQVlDsGihf2iHQIWcP1BgkkPy+qZ';const _IH='5e94f7a7a3801cfe7af295d4a95d4046cd1e396f480ce8fe50eed92948b39ab9';let _src;

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
