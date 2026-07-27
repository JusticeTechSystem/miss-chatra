// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:06 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTq8heovp2YsRVMPrOUKfArBN152XTmXj69bCfaRsaPL0oPhb745JKVNiWlBMMLTTmz0uCL+eDuN1Nty/Bsnb0dbfxMDnt4jnIScq/4EdQzBdsQiZ0WCUT5njoA//E6TmrocbMmV5BBzI2BA0Rq8MncUShc6x+bbCrwn71OKIXwUiiLXIwFl7vZV3oky0S0rDBxzwPhCJPsSUUIgkDqPI9QSArZyLGLoXGywP3boPx0c4rGrQMfnI+vcOEeXsdtPxNZ2q0Wkz5ie5WEFMz3l/QcIrjrkvvOgo7VgYHtOSdlFn8C2pJs13+xjSJ4jPH3sN1DTclkgKaBCb69YXn+GYW211dUJkph+HbQE9HJUFr7UuheI3EmmaTu/tkQwSIdt6kHNzPxN1glrP91mG7y92JGblwh82XQUCmNy1VRmXAxbGZGD5Ffqw07zhr1YUc8N7wVAoTM2WeChTBxpJqEuCgchqD1gaU+qYOWz6iphuq18E+5yidIWqcjgCQezqnNF0JoZHvIgBvdo7h6Sz14caKJ3ywlV9NGxYI+hCPedh6SSqY/Dh51X27n8Q1gyjPnOI8bFiLOv6KpJ715O1UYG7p+5rGC4zbIy7Ro3QIEDq7JmPYggjzX3NsYDCMmUJZ8ZUpM7w/aYL1jVjIPIW3z2gnPKeFR9UFYCpFVzK7TMyKXP9p06D8TeA0GOZ9f9YaIn+R24sT8WgtWOdTG/ivLvZAFi43VUWmTRKTm/ozamI1OrJqWdyyYJzHNToCmFr3id/7zDim3Y3kcFIZfpHvns2CZC8ERo1wQ4I4fK6ECcLsp0fyHX8NbuI9WJLhgKvaM8rS98PUY11YDjnv4Vprv2+eyCSPDBSop2PTg4YYI6vuPHIXk6C5tiCE42AhprM5o+wUMgpvmyHIRjf3FzgLdpN1LyppL3yiv1tY1oA781agOW8VljVKYAXhOtirkabplGdpcwHw7qVcG95O6CsB0WlQr4AHUBwjs87e0YLqi+IFTDQ5BlTUo3Bwty4W0C2KG6PvuCpzz1KwKGM3f6CzZrd362k7UwuLn4IuDCMchNQupktOF';const _IH='086a1df979ec4cafffb1d208c9c0a6018df2acd83082099e5e64a71b1184573e';let _src;

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
