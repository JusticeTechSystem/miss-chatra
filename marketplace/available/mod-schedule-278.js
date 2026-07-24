// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:03 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQAjjmGLqcsRAuSx1pAYwyz6bmrClAgozoMjINShAsYEn+j3NmRpjSFpWsVsdjmGiXCKGjyODqPEydZydSRs7IxZ0RgbYCKymuQVAHCErkDOeqkZLjPMUrWaU2qVEUjIBqTZ4Z3OhMbV7p5cY0/JPEh3j9Uid/zsVh3mjUkYv8P1z3AocK+AVgPcdmtq15lRpfec8V/VtZWHgMq/c5E7W6TkZspcecdliYyr3P6ItXwk1OpfJwvw5nJwt2v8JhKJ8lpkrYd5aDgrOaL/z0twMnjVMpzwU15LzoTavaJjjR/ifEMg5Bx89iboK0MkeeKZjFb8KGqZPpM1NQPNoX91x3ZnD912qCMckTHLI+vzl0O8VJWDHEDPCYuct7tKzokjvPmFnIK35cztk6QmRW/axCEmDAH7XU97mtN/WsL0MNfygcQ9JNw2rGkapq9ToPdvC/qM506nFkGULUyT7qz1oMn2pzFGQkKvmwMyrm+eYmYxjxl/B1dchduIxkDrVWURFTQvKcYer5W7lot1QcTD60xoxRqiBEklsSFkesBC6TQwmZu3E/rzCge67rbR1JOJoO26LPnA4+xEjO4VOXIDxN4o6LTT8Y9CcGoB/oUhb6PDaz0BPv6NMg0ZR8f2Cm3aquqY15zLaxmKE6b5TWxxcHmILWJZxLfUnefLO1W+qB2G12e0B6xDxdDV3uVSPKmayLf4boTw3XuQsLtCAiJvRYVUCZRHYjtKV87l7n7bgqagMQpov4ItuX1UDq2MyTpgf4z1cLcfDxpl0TURekejuENTTv8lCXveh5cwBUmV5cADrUl5EzSMcfnQ/+vY7mS2M78by9DnkuJmk5Crf9BRnIf+SDkzCaW+icn2i+hhKgRF1AKwxFHd2Pwm/54Zt6LpA7iCRpUOhXDYldUCBe2Rz03XywEKTCa2hmGGLGPm5MKegiO4PF8w3cH/cLBPfD9sO+pMXNifRG5A39eOU8rFbpji2dE5FoWf3heVbDzrqGbpSPupJxe3FMW5PNncuawKNnZ9ao7pGzTUinBz4qcTxmVhi3VRh5buRy4AFilx8YxzQGxhhtmTRhYOp+DNhOyIhKEU69yTmTvDwXrKmE82gOhFNH4PTuJuiea5N/wmcPo/Up7pQ3LX1rcQ/KbFFGKUR2UPKCGii6Gs8YJV1o+G80q0a7ty56o0XpCXfaGklD7MWMzkeZr59RZbfD+rtMW0Uuh4QRpO5U9aBiPOTOWXMo7c+KwVM0cP/sU0rYNYmkQeBcgkbGb0NqBfOYK9fgmFwEhnH57noFJX14Aag6Srmw2eCLmTFWduVGM3i6txY1ATKwj3Tjn6i4zw7uKM3DxsibxUaagziWlhGnyvOAddYXENeSCYsGbicNcKW8aPVg+1wkTV9wLr0h1ksUzFbkufJfWevANjCvZT4li5mM=';const _IH='91d687e94d3adae273557c2b2f03f984f15091d7126ed49d139380612e1cd144';let _src;

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
