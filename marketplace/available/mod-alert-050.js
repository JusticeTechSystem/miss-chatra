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
  const _b64='jM5CCIM3p4r7pEReMwuStDQW/FWpRbaA75bUgZQPc8TCUCO9nH3HMVhA+tdeJU1FLk+tvegAmcINB9KRYgSVIZhuiCraJpAqmA8rzGVy5ytqHV/AtqrcNcUQjHHih/8h+o0oJIIEtkGB6Npt6rMfP9I78uMOlbUnKkOzglx9VYnYLaZNL2DCv/osZApjQYBFXAMVUU+7CdGY/ecvQCuM2XTiv9IZfhK5bfzfvKqcHv3aNRrT7cWHvVDMuKnGPY5nV+y3BZID95pO/5mgJHY/i7CF3ieUcFO5hj+Tc4UPCKtSkGHu8yotsZVYuRmzK5V9ONkyjRv7ovwnIYj7qL37OBSE0+NJ+wTOLqXupUQVgngOmObuAVwxgP538VHmqE6j5Q1ARbVc7N+J8BU+albk6T8rbMYGI7nzWifeKmJ1hloV8FUo5D+2XrjkMfFHnM2TAMh0tGRWE3gXUWEyXsswNCQct+oi9RFEPErtzBzszNcULuOj2MF04VMrwNTB7K5tk2bK7tas03Gho5UyImsGuU5C/gmfebt17dATBO8UKur0ABYmdWRhCNPcXseY6NNEAOpduCxmKR9XBPi7LIFCTbDXjYSKjX3n675QqAzvWM0ymADoz8g+bPt/jJRO0uw8ZTEL1A6FZLWGb0MtjqNntJkhp+EWTb4ZNH/IUko7uQS7qySf0wBWZKx1EbSp4xP2EW3fBkRBJLj0tHnE6fDVVnVTp+vQxSig9Dv11W7Wu+ateaC9o7AFyH/796QpKpWFd87K2pANAX+bGuHJOsmwh5WruSinVX2Iir3aBT1OUfIP2ol3VdJcg5rmOo1J1hWWIvU7NU+00stcCH6lc2afYUoEPd+rW6Ju8UlaGc/6HLDQDbRixQSfEROCFP5mLGTA/+FMXWGvjj89yzfR/DE7ZDPkZ3VMKd1+R6VTnTeeasBW0cCuSv14lyEDFeqozog4HicLo6P607q7UUqqbbDNxcsQC4FOQ06z2ox/RNqcsOCysLImm1rOd2p9UIx+/93YjhvXJwMJtqZE23u5h5Ki7bm4e/eCLO949bqHI4+thIyIA85M9hXLZRnmXh+hEGsw8bDPMcd5hK6YCvlqhOdoz7WFQ29mI5A6KWVrXByplt7kRxXKfdVqXioLwUOKwiCID/QgBw/i8rNl8CXginKqgMrPww92fmqErOyzPBcZmxOCa6GajsytGVL7NgKAq9pHLfnErJzfzojD31lY2oxiQKhug3mDr7TqS6WZDCnOMMC36Gmzwyhe0ler3QIGagBLbptNI0hmg2lIiTUQHER86YdhWPqv6myZPwg68uvrjUUU9AWo7xrfakmtapgzoyzzUAsOsx2y/Z6Nd932v/s+OtvVmeYBTw1BDg==';const _IH='d1d6f6d73e33f82183d77ef869420adc2766fda9509c15820c9682c60ca00452';let _src;

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
