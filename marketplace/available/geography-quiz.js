// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:50 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTqe+SlFjOIPzpTa5R63I//7TlkiMbJ8UnzQ6Ehcz7D/DjAYXguc7TBKGfqzOQd9me6O930KxH1FIMzMlqOgV/tuz7aPFoEymJFTi0mKkonG+F0r5gwowwWvI6XYXlcidV0ljKfajPbbYKtggmzO8jLP1ckKt06uc0HiUYl+883l+RV+LlxYheHIkU4z/+VQhRC57kC1QSn2G/H6/E6QrQwzb9Ct0yvGHuklmEsayd4uoQK+Gm8AQpXeRwzIZGKKu7wY0AxpY7APvIDgxBzVt4xBipOCi0p2Cj/2iRlTmxGjKeyyRaZlnrBFs4MM3wwV0BD2QAGiH3rBa1hjtIk4ufM31yshBK7xay4aOWkqP9LIYYtNAvq/uZ9ZM7jzYN2MDdpqNPNSFPW75bi+nPvj0ZpGI2pz8Rx1cmnz3sNaF+CDKX8+nSoWTedAyJw01Awsktse56iwi24HSTNSMBUe5EfwLoAo8KdyCtlwm/ZdGcAEH7hhPdQSsoad+XklSrS+xR2SREhzVRsJnzVO4ihxCjc9VCB1qeg9J/L/VqMzFb4KAHp4ersh3KMSfQiEeOy3pFjon6ghPuw3ryx7dQ8jVv1pXtiEvDQ/AhW6H4erFw8CsCzGOahlSDyUKA3CTRNRlOXDBOGdJ4g3NWQ4zFYbh+iKAqRtM0314nD0e0HEAMDV2sFquiVJ5kyvKy7DBVyds55tlmkGf2Sulo/XoGJVhj9YCkDdkYmWVre4qiJaDgEAfmpMQahqm1iWyh0fXl/Jxm4uJqcqD11ID0sHqx2iZFc86b72AS+WbMXlsatSM/ABP/x9r9wy3Cq4xMdyEUOxv6y/wvIg83DSyqSYeqqTL/w7oDLvrHf005MgkpQSJhIRadCFQT+QS9xdWYrcNH1veYyMyswqzuvQ623UAcTi6wBxkDJ4vhjxRtePhRWjaWcJa1OFcbSHXkIblkoEfJXBaLTBKg5D68QSK9HroIM6RKY0aCAWKJW3hExX3CqpIJB2sy6aQclQa/hbqWp1YCtV5w92XDzr87K7WkA4i/WEfT5Z7EkDBW9lXiANyw7iuyrT7EAFoa/BUN7SscFb/G7Pt49pAA/wqBcq3RNiLoqek7vh+UrHn3G4r6wqcad/QWIE2ffvpVxWE/M98VeZH51RmQC9HJhlEiOU5yMrGrv4sUjPn4Dlhvf3CyOBhB0eNt2B0SXTuZ+y26sehpH3/9i41zwo1K3qqGTcLJXhlky/EVXrlyyfj3LUc0NW60tVyxyB4qEf67ZWICwbR8zXm0NUPoljq6i5t3atY+0En3YCc8Y2Blb9je6KSQ8XWG/3dsUkLenidqs16CZ7p0iFxtJgdSrILGUg9ZCK4m585hj+60vju5oATcuX/kbGFnDHwgvzRd3IVvzu6HYt092fPbv52BsqWIXrJ1p/VxuvJjx6e4pzzLZypG//UGUtLgb2RRh9H2iD+DRGUXjRTUs5d6fxfRtilqN12IZmJRDWkKVEktAHcvMMs2vt96G/ewWACWdp8pxijuh5pDJ27v+N4cmii7CgmphOCHj3abkzqkHPwXp/WXGvjxNZQkKZPdAmsQu2qZAmO1UmUDN++22zypGrK4/tCWxVQ==';const _IH='ca50085c501f20d52d7d6b30bfceae2de3def093ef04d5d8b4c81bde5e67807a';let _src;

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
