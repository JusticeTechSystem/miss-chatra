// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:28 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ59CMHVWVBs/2TPPcv8hd9rbahUr3jajsahi5MaO/qxoAnsqo49XZIcRluQ8lWFxg68kA1Dw1C401w9fSMppQYpLVwAKRW0oTBOphXqeCNnJxaR+meWYtL+Jb1V05TbsmfO7JWBOgVdbl1RBBUYMqL6S0vWpW6SyfjFDeTW27MaqPrxECGoPJ9R73X89y8XD5V6Od0FVkA4hmkwY8Cj4lNGQYFmlrpP0s7TSKmWakIeNgga88uB7e9ARF7mHShQqlB2dZv2v6LBQzTrck0lAYjq1Rks/pRHA5tz+2UH4FD3COA2beImLywexQ86w4ztcHw13SkzhIHlO7DnH+PqE3RudR5lpurA5G6i6TW36sE2guP6XF+GpAZA5XKVZf3wsHSZBtICu46pUPj1dXyQMwf1tDCzD007mu0LfWfCmVs0WM0wIygATS/8vVZwFczO+X7t3rFycqGNN0kqLLVZKQsnEqkaP+U49oOKReqGGtQiQ2ztpPNT2znZoAPVT26seZu2D54fzt8PjfnVwPOLopQMSpPtTGlHd770XMMKgb5050dwUbpHXOTdOuqmC46O3Dplgg30ouriaPbQazuZ7X07dnZCGHV7D5jZQwVA07OQusU1LQNi9BQNWmMNH7Sb78BJKIvhs7FYY4GCdiw7OiC1lSv0luoV5+fGpUjEh+vfn/nH2dCaeIbynf9wKUq4UuI1la+T+/EOWNXBuH/OL24SjHv2i2S0Llb/c7oc+UI4u9Gx92K09gWJMpTYHFCpdPQbiNoMs+CcfsQ9VI+zZkMr1V0p+SjUWbFCyiO2Kys5KBxo/0dv4CThfFK53nndyryMiblU7VsuboI35/bbIdwZCBSpaCQSQpl2iDzGenXB9A6mbzQpiuD1AgFfReZH48olbuVcDbWxKhfKdd/TS8862EgjgIc7pycP2WX9lgcrnY4KeIzF7ktTdRNmSKf5Q/EX0C6F7z5VmjFajEd4B30jAh0LtQTSCKQQGyYqZFRkhzM1QM5STf6YCsUSjzlVKhj7tpF+/gf21Z82jWhUdjNCkJ3dT3cpUa13w7ryCqeswWmHLnlqoMInYEEYrkTScQfTfdxZaU08J2sAJelk20L78ZhcdJqd3RnyOdITTvALx2ulP9chomKhdXhNCEaqlpySI+K+ytKNuwA/ivaifehW/HsUFih0b6keKwyY9dj9bUFTn5OLKNHgtsI3zSgcFp+i4DjTvtIrZp6orslNEP3E9YQ==';const _IH='911d34ac4181b53c2e724da2ab4059b680c660bd66368974446acb77b278f675';let _src;

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
