// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:27:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0sQvdQmG5FXduFGmxAuYwLkqjQILxFCGlaFjYgvv3J5nqRx92iIKcMGRn95nkcV1Svmv3r2OYxmSXyVue6JHM5dhnmc5KPeEX4PIt9fr7jmnWBbfPpAFN6duMulWy0LvCviDRC/rIqiJ0VOdAUQbE7vkgrt6XEn6LCFdPHGjgAmNbhXHXaigMpq0a09iVJXpyaP6xUufsEBebt/m1yLmmW69j+P91yuLOME2QirbltAxpsdTWbe0Vt6prDixNnZC+WY1V+lPiwmKmzjvD41xBgijUD8QyP4JQZZTfKoe6ICrxjem6rUa40eqQB11zdt2ZECzOftFkyZh5he74uMuU8mxUrP2gVkgywPtw1YDoHlOkEggA3VGp+oNBgtWhJdewnCdcMh4cNtOu55nQPm/AheHFeZQjtU1ynd9AYc3Vn44C2uevcQEpoqqRRHQL1FQY2YMEsoeeM8AgM/SvPBLob9qwlk2XQfvACPsYw2l28AozAmyQ+UCR4BCrN/JBOoxpVklDyzSoZjYL+GubEtI0mWDrv2qB3byCorzzxBTqS5aoIr6Vkqw2UQIYCIi3I6TSygPpKsF6hcQnmiWq5XpwpVPeFPUIL3MxUnOlOeQnQnguCzTFKCexa/VGpffW7hw6mzjovQH+gA9y1tsondMJDjDPuWhQH2N1T/G6yxLqTlXr7t/xzwWp6j4EdsjHxajz8x/GWFGHmUY+1gycr53Lqc0xUR/1hGwjdwvhHrSGQ==';const _IH='d6e75ad140b1dac35f2baed8d14df7dddcde33b1db76a018e45944478049ffae';let _src;

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
