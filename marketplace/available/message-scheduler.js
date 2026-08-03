// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:26 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR/lj7gXeCQdssgjdWBZtLhveGaLvG2nmAaPNYTw9/n7oPhBMJy7PC7Onh0KM+GIK0NhtXY+tkUJWOIBcycwdbcAVsCKNNerhUkWGex4zEoQQOBE7FMKLHARmhyn2EPavnCTYjaRd0Ksv735cWGEZLP7tf4QejwDhKN2ywF7EpcPB+4W3gPYkVwVR/WF/49hW7zHOE9Uy0LYy1++NDTPYYa28BcSYBWeToQ4Ke4AN7oRsWB3Z8SrCEred/OleOnVcUfZcC+uYrrY4M6A07nMkQcirI/bcp6lju7+k9Mu13bdZUaNKIigX3P4STnyxS6iAI99gfp4RuX+8ZpqrIRlm7i7EDjhbZhUA4yI6HbS/mI+rU812Cz/yIdP3KNLB5DRjZi4u9HsANyvwiduZXfZLxfPjBmk8nMBAZoa8MteIN3LBXAtsJk1ZeGrXjLbhwYfCkUV7fSRGlj0puO2wEIHwxFLt3YYTIOamILhJXqGsuRRciWxvNuXDtu4mnpLQbN7HC+5oZm1vaEXwk9DdFzqnYktyne3cQiWRSbcVZReXzmNiA2xsv6Zz5bHnK7HlX2EOLq4Nb8wAQ3HNTsDYLbvCIoMXcL95+rOu13ZVUQXSTLMWOXL8rjVLlTngyb2t4/kma2SyB/qIYpEtrKaNBekC05JYRUGu5v8BxLI+9zyxpIZhcVdwJDjXOii/EmjaZhw6dLgyjBUNP1YZesDF0iVOO7ser9YZ80GZnyUuF0Cxh225hYt2uNo6+1sQ9BoP+YSd9OBvnL3/kwrUBQ+GIr8fXUFUFXEAfbD7bzwfVVgrTRxc2YuKDMcJ66l2fa5fZUXhAdY98TH2Lz3lDEGQmAJD6EWZGfNWAVALgO4bI1v7PluO1VmRvlwoNzmU9HiYJ7RgCdZn2Q/40Ej9/b+7m4LOA3lnqP6j6w3JJvsff3o2MnLh3515t3c7uTzF+th074Qwxm92y4SkqxkHTUoDS/Sjno52WIDnSFE8WjKx3LNmBsv5paVDYnOJamii+8XvRilFuLJCtm3LZ3ILOoRNiM8ZIS/xsU79GCc7uVK29j1pR1sZyv/C78EHKh6DQanqg4zTPHxeXzeDRKrgO0sdeIABRkt406g939Km6Fes3Tpaep8U3KpjjQW6y5BxT2JxCtH+miLwBA/bdO5XqwGi7XpR2hQtKKenhIxEnCIcpedXRyGbEXx0KUKkKfbvloUlxq79H4eVs602tdGXLurXfR+/wyjyYwuBGNIxzFcDCTU1SxSHJxfZ0uHkzvUFUoPKV79D7lLqUwc884ngFei/MslslB/GtayUfJcNe25xO1i7CraQyWiKojLLXTMsmYCbc5VJ0i6n1H7dfqFMM1S3sRpUQfu09JFhMH9+smRywZC3CxamYNmeqjCHg=';const _IH='a356373df18490c8f8d9bb8a71e15ccdd54702da78f7add25862a2735807f946';let _src;

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
