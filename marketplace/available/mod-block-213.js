// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:49 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ9p2/+A/s23PQGrkDdSOKoaqJ7J1/9oUJ2SLc4EF9MJ5TL5qMLTrsBhRbpHQ6W+E8WsBX2AY7aiqmok9FyZma5gQmEmehEPpltIcr9l2QuT/Cd3asyf49Al6KuENIelZzaxKiCWfyHZDmp0bJT3IqZlQvdffft29+yNX72N6VnNBRr27BEiJg0qh/V95PzVitmoeP9NKe77dZLfKVe7BT4u9LmdsMUaWTm10vP/8iSfwgFTYZD9kbwwyNF2o81H+LKeRFbrs6XTDNA81G/vah9JvchL+3mXPawT9e0gKMGKFn7re0QJ7GMhVgYUEHm4eR17eAfHV8EvdsX3IpSJxpmsIuBJgmmjemcj3lr8uCQvBamZj8t9js4LkTmcjGAQOJNFEpvQ9zYp/CFMrLdOw4AsTbBHz4VgfeT96jQHZI7jeznPU3tUVeSkgQnFzS542hJ031VY0hqH/rOQqW6/aDxuRW1Ofb7FRuzshVAVCFvSvhyfiFMkVM51gUGq4B1M8mTCMhyHedINx7uwuJxFKD1Q3RdZ9IJMJK/WHy+cBMkScbhzx6JtR2h41/ViZli0jf6/Br0KJ+JaYDLKYy7ooR0SZHbE6riKAlGbtPcyTZbe1wT1UoO5qukXhjixhzZUYyxiQ3zjM4yOfD+h4PDdak0MjLIJOzO/hGWCww2UAjEuPeejcLXoF0OLCEV9SUAuMY0YxYo2nXu7TjLaVdsO4aG5gw7fhAvqbUw6ViEmxEWOSnHnsXizfp1Bng+WzFFP7d5NFAljvy6nRg9N1F0PjVBADxdWfgIedXA8PfLLiPAVVh/RX7FIHcXLzSV5Z1/ScFR+7kLGMr4fJP2ejdy9T9ts55tMIOqN3XfeHeufqLeYgvfgtwy0K7S1C+fxctZGw9p9eQa9hdFJP/vckd/4+VAjS9xQBWgs4BpB0XMJolSRQlg8+5bR5Mo2LVb7p8LI7QDJzXD/R5OnZGsn9CFn7EOlIGFPfSTAHQnWyw6vX7qVT9HvZhRQ/UnOblnF7bT4LcoFHYWS3enE65boTQ/tfwkGdfGDFTB6l4gRslJNIc+bxJI64vHaJPUq3+2wbRe5DYz8HjEVOCwRJtydbUGHYTZFFK2m7WonFYQ/InyM6fDT9/eCBLG4LVynqmt6/iZpskJwVKcPDhN0uoQtNxoBEo4ygfin+dXEWTT/AJFx3q6sJlyUrrWp4IlcCgI/ZYHuKC1TNYAuyKHEdpx9cr9qvW/Dvr5k/YvtrGl0kli0P+G1KRFovu/d/8/cByQxGAUz0CpnLKHLpCBZLWxH6EGvUbTsVAgtMoF5b6YHIeYQptPJX12bjzkim8KdfO6Lms1WLU80TIZMc8qStRAvwAj14ZchRIaW+iuYPRucdoF/txA==';const _IH='02a8790b49644ef4d4a6af4bfe6afc45616b7b02d04377f88275c18e9d4818f4';let _src;

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
