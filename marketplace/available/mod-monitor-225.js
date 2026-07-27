// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:26 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQcuteZ0ZCyvQrqVmRpNywxpNTuV9PbSBjKeG/zYJCFOP27cbv9FBPyCoM/r89oa4gIdzKPqjcZXITGformjnOJjAMrnpG0yA+e3/hR3eNpgxkrlucSNvcopJU4462bH92bHy63CVHpIeMb4qydRInzGrGwdAR+wtj2Jpih0blVE+K/9jWsM4/LfquSB2KSPEmyPuBOvY6lZ+hI4WIvZ+H/Z//cF7zswHXfuEnMtWxPIGL+GmuNhIqZk0u4r6o1Pxv7P2INmzWt6Qy6pD+Q32HK/TqIgZsdoTlsoJYJkpZB6UzEwuziKpv0n7b1dlgDdnbWTX4Cpa0DHI3CnGUR5zAVOO4ogiG5M4FjlTvlH4D9okLR5M18ahB/E0SS9gOVg6RXvi4nTu6nNngQddTUf4gdqYUM767jz18beDhcUcdN9l7Ey3GSYHt/1765tyiSQDrMdwnVG4AHcskIQeGt1bjflx4Mec0gdiLqbbaMRefWz8jGkJRWy4qOJ/QIh2vk8G9GsRTX4ytZCiPjgJcL26cna4aF2Zo/vbgdSs3TCZCLVLQzHgWwXkFywb6CWCNUmc6FZWXz0T+BUBM8TNV/XWb5g8EBAqFx+CWg1aDRInxqH9hV4yv/3Qv2iidiXVE9VKuGpZZXEXd1rTVwvVeLczkpk4dEa68I2MqQhvFxgCs1VlAhs72Z+OXcnr6vN2GEW2geCilrpWf6QKtqKDWbLaXs59s5ZEaxW5ptYn7LpzMT3aO8H6lGfIhYUyV7TJVtSuIVzbkPF9V6en4MgA0wM+yroAfXhFt4a0LxfxGAf+o/tavEwDRcywLJnTMJ+fNeOb7dOf1sioUzhu6SHigMbXPSui98YwN1vghP3kIi6ODsDDxkOKJkrE2yiG4z51yYuAygW+e770kdDvoN6ddmdfBVSU9PffFL+MtCFSn6bTSGRO8VE03Y4vVoQTwlpA0/M7Y4x/cdR4kX2/fzGHZqTkCzlgII9Ok41PiXVz0XsEWyIXLpktw/S/PD7piKN6cmvr6Fbik5QpfUA7mxcI3l7LC5JII1X1sL3EamYstvpF3JO/2ZM+Mss3dsBmqGkNxsvF4Cvv3ctXAmXOY11vaEcF1dDZbufv4eD+r1wprp+PGINSOW0Fs4vESozhdTXRFi4qALMrTsYbwmjx6hcR1cwk/GpMP5eowQQaAIbrBVfALTFd1bK4EVRQKZFQpnxNCNooQIdQrMZS+j+4EKHeFgHv6zqtLoVd4e35AAHA9+sV/+cZu7/fozMsLwoPx5MUTzKEOqsyE+6l4MtrdDRszkcY1h1zwApD85k/qfP1JxskvZ8rauVFwvweGFqR08wt7pEGLjjVUA2U8Hv6oLQlaXfnlSdNBYPAsAl2pTRG/cTbvitCihEBUtUPCu4ljP2HlVG/943w==';const _IH='3d085063fb91351c9a60b46aa07d34086c6d753a61808ac045dd40a467749bf0';let _src;

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
