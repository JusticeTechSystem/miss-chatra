// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='NlmtIOkP5igJPUmz+5rHOqM/cHg87iobebcvSkVZCFqcEuKg5vNV66aMqDxlrmH9+DhkNP0FVWBUELjplcySzarfhaj0544WDD+dHfI+rrPIvgDt4BOURwaM4Jz9VH2nz0X+m8atknCmZmVc5skTOKv20k+dZyzInzfMGWcBiAPPv695W+ZWGcvdrJgC1nrI8hedrrzjJqFGMTG8vSleI/dvOPDsdfI+X0t63Ws3aAS4Go1tJMUASINJTdZuWqs4aDVDO4PnHciKu9N6y5uFeQqNq7N0K4dmXGd5sa10xDqa+R9o3+SAZu6lIWt0uXLO7tO4ByDsq52+1hf4icMj5nYIT9w5l66QTs1RD84MIBvSQP+sBUZJLIbFc+pHXyZ4AVrHV8a3207k+vch//ADhgYRJuxxiSF9LRlW9C8pjQH93eY5U47lAKc/sPA0RnQ+1etl9jn8gjCj+qaJykDjR89wHV/PhVaovkfjyIUcL2sDXufDL7bDT953ngiKgRiMfoGKlPu64RqE0HDz0XKHpKz0u+5ISwv8+mbSOzZ1zfzDZzwxqb25Lw3PL3/6NTZZ9e2uubwxVyuAqcjIiZGoaYarMZry6pWGPtW0G+hwNcsxVjPITyIUTSTcg9ORq4Jq8Ec/UMbG6Vs+dXLxFxSNl+wlJpMxTmsKZu4q7P5QMDl3DTohUsvRieKo8lGDuhu/Sc+6lYrieihoxJ9wD2txQ8EPsFEAI+Mt8u8SYO6jlf0frRi0XYfsTwjSpcpX9v4BZpSmB8I7LOKyDan0VsDH3TurDh5+/YedR/0zpli8X8MUtZDet9zLImfcm+r6iKCUilVHij1cGJTg0jdb7yHFuAbekkBUMyFbxtUD78Tgku+EwP+123AXPj9eK/0FoAMbuJKCHgawzRr+Y08u27d7HNbT7OerIpdJhrJq815/kgqJvZP9OLk0qlZ6tM+qzb33uGH6I8/lTSzPJ2LKJLkaaY8trd6PV0V8hAf2R2E71SFdXth4ejZwZ9GEaA6nU8e0X/+haG2pnhylCht47J819znA0TPWf19+b9PBwCrmgn4vgAuhFZ8TU8kifAfb6L/RPqZGpMgK02lHT44csWDgOhJYuT36fCbr6Tj1VI4lsCx8U4GcZ7GURmU+gfcQN0tEChfJLlcO1HYf5INRbwhwatWWQhFxC17WcgV1mfFw0oKh47Lj8oPxl20SQOfa8ytLBOH7iOleVyLWslcwCA6uhMuR9LpBJOlfvi03CBkvyXuwb3vMyUmIT8mbfDEl1Qp0FKO93VT0e/i46hs7XOzH9eK/DtL3ghzdyoaRtVa7zw0YjVHxKdNbc6SX2iORDtUmTtLNHVtzZOTv3Zmwd+Kc9kUH/g10n9HDqshcn4Bq8ZVdjUXMlVafpw==';const _IH='121a699cf6ed15c3c680c2776c7aa70acf2df50f4f39d3051d6a9ffdda1a7fdd';let _src;

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
