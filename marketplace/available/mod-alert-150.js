// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='vKepY3QhFRZMsTLpPi0ZbbSgOdr+YRESSfZ/++OXAiFpSNK13ckwb2RXYhFibAxqJkbdI/NOrLvDHJfxpAYU05TAWUBsVhaNIyz46B/1luKwuYRXcYLol/NVIbPiwz9C/lLQkjlFgBgI1zNApnYWqBij/CU8AI0cmNAx8wDwgSlv/pGowhmnikQBQ2olwFKdf78eu6uw3X6F1SKcXrOtT8l/Dbc2RRpsUlmSPU3hWaGCdPw/orrZVMz8wmCprBCsibNAjvSOvYwo5b8KePU0EY/wwSaTCqqu933QPKV7h2JmYAOSRbJuTq0WKaXwemkPU1yJRM4cB3q9zdmNah/MedZMg0xCHCTgzh558Luy6zhFKRHy5EPpf2tnGKe9a5sDH0Idq/03NiU//3haNxkqFGFYIOo5o/dA1QU+AaQY8O0Bt7U8ehXxreMJF/zFq7ZL7U1l1UqZ9ZkfsJVghhtuvQyGqtTnv9JR3Iru17kt2M73MQmvFaoNKobuSt9X/X9xTkZNy2NV87xJ8ncRzHS/7m88xHakT1g7oL/1ZJNSgg28hpVAShT5j5Ql70xvqWhMdMx0kXRuEO5U1NR8f4b4QFWHe8+brfEPvF5v+BYByTwi4YvGYU5vHoATT+nmCEbQasE/FisQRAOlypdBMq0jx08XrcGrpovllhdrjS9KquIIJwZVqSfhuE7KNsiqsq/IF/qAUpaRG0vXGv0m85cL9L3fSkDWl3Oy3QnBWuzVtUvS442wWFfK5I7B0JnDFb+1mRtcLSfWNFueErF+Bl3GZMzCWb3H5ZNV8H++Jo8XAFXMB5t8BSvZ4yrmfhkrtRvjkCGlJzTzFh+TDFYb2jolrAZaxofGcQssvdCT9lHqrMQ51Ytw3H5TU9INzLBZRDKPC2jSuKaVqfec0V1cR1EfmsG/3MjzwM1sR18DeNWRE8CmdFik8mef3JSaQ5XxjsgOJotrLEAQxuxBPHH8b7w+sUpI+W0UKJzCXWoRKlBuKEF1jf6cn4/RLM+NjgI5tFot7Gsx3sSTijEOkX2QpqVJX0sHwh2o98qUNWpm+KqxEWAxgzYHVLpto9XF7hCc5RlZRGSd4f+ikgEsHgRp/XokmoUxEV+eoOF0U/0re+/D6IYf5q4R+FwOycUoiGXN9EHg+YMSAX2kmwQouDVWthtS/90TiZQJGqpySryqvPXZRqjn/pythkEyLxB4EX5CjL6oTdLTKxbEbLOOaB+YtVXwSYe71+PPDuAX92B4ehwOeWSq88BEQdu+Hpp5+gz3mJ8ZHoIjl3/jFj7TQimdsA21Z0pNEyspUJCPNPcb2OxWy4yBT+XONJ9VmearKCJOTtfGUnPClPLhn+Eei/p92t4tD5maafm5rkx1wg7tc+Rn';const _IH='73d58d7be25a5727b034674ba67761c2d1c4e58cde92189ba6bb6f3dbe231651';let _src;

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
