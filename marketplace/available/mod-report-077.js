// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:50 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ6UoUiyUP0n+6Kn2hnLRmjrdoVZnidaqA9vhEuJJ2Kd5WsV6s+hUoQ8GSPtlPqA9lMik0oc7qmfF9aewt/eVCPrpjbu2liUvH1hfLPl2k16UQR0BO7AivBUi1KKvF61uA3T5B2YsW8RBr7zsU9wU4ixOZZovz7LCyUpEufAIEYa9BlKy0UR1NFZ72kbGpT6yBPG1Wb4NfkPRQ5MfCyQQSRAn6/6QeSVgiTNhE+512svdGeR+S3v4GnImrnq3QRwSJ7MT/3HJ5YZVnALMP01oUIW9ktlMqepySDeJgyckrONKCSHTFZtfpYErccdIg2xLFGJyj5NjEzybTiESKBu0R+RVdpxjYXJ5djdYeA1km4z1tylw6ijyCZMIIc1gdTMKqeQlkQ1RB2KYXyKfyrACtOQkniaWEubQkxN+NU7vMW5ndDDw0vir+aKUv5BMllGBftEaOnHPAAK6bVPdksshpwJJEBfoye9Cc5iEsjRpb5WfYmnFKBmNMEEFptvaYA0VB7Fkuo9p+X2Nb75zaz0+6FLFrO9jBtCMk6Pqj+M0HmJUAVNJi9DuuHoO/M5DtEN+pS9/oVUoXmwATLMDqKFUPXfuOx5x7rfAZueHKOpCUkcIpyOwKinPmvTzkCnlmdcD3Q80OCT1uHTE5KTZnJYTIbXbX23cTVM0bouH6zXgXYrqyvVp7pD0vk6MCy4RQ9sRNG3gJqkHt7rsg0C8txCCiS1KC8Y5t4Z8DADjQNC8wYHeh7zvHQBFfUlqEz3X7+OOA6+AKW6QWcsClyVThXBse60qQAqFmO0zrdqS9qpt9PSBuUoj3BntyZYwP56oCfdYWDkmYQfEznsuEA//bWRX+GxESLvkqcBM/SmCV4hZ+Lau72lidD64CNuSVbRTUmVpNkn7DY48USUUb+KF34uVYubR+O9XbDd+lshAzZuVz8VXuW/XFOwwtqwvUPnE0SInjlH7H2ZswkVQm4jHvWfQU+fSXRFIksesUitwQJolJu2s2p+0rPTYhJRajzngflVvefovzm04tGVN1OnOrNNS3TtoRWzJH8j5cFK3qH9v0b45azyv2qU2Ayj5pXvazApn8wKMBL5tVqhiO5e0F+VUAy6EdHOH3wefrAc5NbzdkMlqpOPhH2k1TFeTx71b0O8N4pq9nIo2PJIeckIqUooFsnixeDMNO9NxmyV3l8AiLeFE7L3S98IoYbYpspHT7plLW8uMp+VKSwwGcdl0UNbGtYrQdye3Lr81G8Q4FazWgowxDDt2/J+Kn5IrJxS2mwmhJBogAwQgvNWnTZtHYs4cN1cvN3PIMa+xlxnGQ6tpSsEZFflZcZ5N2ImcX9iu+imBzXwn/SaDLRRgrkeNWb7ITMUR239A9c/8/JySgUn2PIHCoAfF';const _IH='fa3cd0cf05ef77fdff5f0dda2a5c5da3497817e6ffb5c1b299deeb01dbd04c00';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
