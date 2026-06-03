// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='M8KR2hkX6e5aXIl6ZQt+969VSmkKuiMhEj4jJC6dkkNf9ZFqINLBqALAyBzXlxmmaVBqVtIF7/lTPWbfbQJamAiFAZ67CMofHtTYMoV3eiIGh26kfETglAOLL/Pcmx5H88G9rnWPI4o1+aZpF0iuzHtvUWt3j7nLwHYxppoo0Y79HLb/ftgpChm2mA+sG/nJx6ybJpjulUxk4g3muDJ9F+IN1BdWtM/EjYfXR9z0eBKgvC4ORFOOQ23B+oMx4Kyw+YmBi8YrMV4MfLMV7AG5nLNwswrzuYyyYuMPuXir5EYweZbg5DUs0RI16VRsAFa1d8TL8+5LMTNZ1ZA3rxvkHvjDitlXE5w/bBBOHAvnBrY/i3nFNH+8fbMuINUMwN2dZCnw+JTgrDLucWKXI8AlZx3bbaepz4LHoTDIT4jxmNBBcnTTH7RepxpIVaRqjraQevrf+V4d/kNdf8Z3LO7PwkdAvCxoe92lLbJEijZgui7zSOMa4qJSQ2XXefB5F4EaxlXG8l3X898tF4hk3rDZ8RhdvZWKi+TJzktdznZrpq3ekwAcmDyCss+4+0ptxUOsl1i+LQAMrRp/k6RzyZ9ntB5G7oNuZ7mupf+kotxunwcDGQ6qJGyB1xabJ1+I+/fg3rBGTBR47doyWfvEjUS9RaiFEoWOKR4phXAfFeHLjW//4giwA79EhoSsPVuF8TCOBAhXc5xNgwSa9HiuTlE3GO6NvnQuRS82AwUmHfhf1HN4ZkHkS2xTQwnM/6USXc1iolLRTtbJBN4hxgfEdYsolLe7BcF4/mtJhTsbHhB08N3v6l0wYtAwt4kO4Il+VS6F/zz55LWX0yXFpnk5aQ7BvsEOmFpVJ2AqztfInH3bA21jeVQp2uhr/NwWkwsbSOsPO5NxLZOzVEqBwfgKfdxyXUm0dVgniCcyo+grWk2W3c16k5MMIt0ww6r7Llq1nVdvJBWUFkBHLIRzOiqRtsIuHa9nIh1dLDPs';const _IH='e62d04fc873499d92635f6664e21859b2fdadb7b1ae6237e8a207d015192873a';let _src;

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
