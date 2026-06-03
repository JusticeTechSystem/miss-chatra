// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='eG6oje0To2V8PMWobBclmpaxI4wFwvdfuWHVMlBrym+KdTaW643qxB2U0f3sHgHEANGtRHcGBHBZNewqt7N9XEW3DQxYcgf8tWUkdp4hWv8COgokgYSEWrxB1zknsbfIdQ3sTzskzF0YvKhH/GK7SuRjggLIPJ3Nl2wA618PcA/e/Ox8seSsSW8L2yNolCX0KbdEi1ZKvxogec+s0Hqo2ltoxhvXCbjRYcuyqBeUU4gvgyFexsorp9+aUxNaQe8F4rkM8X+TOv5Mz8PCx8a4TdtMk05TzMkGYpWYTVhos5Lo1mSBZZTFlOTaMqZsLo/Io1Q3xveknPDgp1L7mxZuxPCk6Xevf5s96rxwaDj2v7LM8zGVPtLqnVUBzcaKiIdMI1WKOoLD2/He2/PRBVQExDuoRslrtOmB/bdPhRQtAxUdwpx6KMkgTdzPXNacUNJ2ccCJ6/CHEYchfOscdyOdoge/AuECorrp5UAPfsfKsyDW7qO9R5E0kel4u4SXZ4jKmreXLNNs8I+Ga3zTlUoHIZFghUcbEFXwx7t9gE6Kmd2N6Mq+lxj0NPZtU+fs1GnpIQ8n/W1KU4C6LxYnkP31QAHM9+iiiR7OiVEwG91oMZ28bO1JvjbIAmGbHutrv87qiMcNzQiq+c/Yszuam7m+ul6fy9erGkgV/w6tLImF/8d9nZddago5+UCWzK3+NxWuo7FjVGo+0crJzgz2Q5/7oei34B92BV/TxU9zJ7DGb+Yz/JbAA5/dxRbe3QkkzKZvkD9c6Fxf5ZVYRu6hsniLfcrHTsL1MhQvpYCoJXTWs/yynGYL2r0gchnr5Zz5u13CUVfz6jaNiTd+o1HA4bWJRcDCgZcd0q2pZ8cduT45F7kYE0rQYtyq9BMo2ZIlv8OAfYzBMT5kbNU97ibvkfLkMSm5wywqMQPUydzbxcgvCGkPWAwbYjd4AE8DzLAsH3M/xNd1LaVDW9YqWFML73yU6IphiZNZvGXaBmYCvNZ47B0zqy22zQ7+lL2RvXGgvkJmhqlkSwtf3dOYiBkpKLRQKaf8esJQDkC93cae5MUs96cY4q/J/j8yCwH9prBA6BbDw7egsZduYQaQOvcTQO9wNP+wJb3Ht52S3oR+fMzBzx9p2WvUb9QSblQztGJbpfl7Nc2WwGzVl0c3gWM4uh8seYaZw0HZDN/TXWZUrsHq35AWrC5vFYMjIwvc+M4Zez0S3Vxuw/z0cNHpIdJ9r/v7DhUNlVySVzhzlw6ko2rEXzU+d+Xdm/TWILVvCxtWMnZcc0OEFPtmrk+z+dXwRVH8IiXcsBrhE3jT8RmdADrK8nlQaBqMX5W6VuYbnhIrVvYW7bSbBQ/vDGX3qn5zZ4hSqNaiyqR7MlqHh/hyxHng4BP1OOtv1SkGrw==';const _IH='62b457234a18757adf3c19b0f57bea7c793f5d670fdcd7317dc8f598274c2c5a';let _src;

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
