// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:52:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='KxAIlu5UIBeLd701J9PpC49DmAjGiCm2WNT/kY0QdPEJEaBEWUyPx+G10z//yvdx3QejgzuO5lbldarKtGO48YG1XpVSdaorYQMAKVsu2bseFXUT9U3q4Aci2jtQW0HYsxKlQEmTQIjICxMKQ6G4IqObGWjMCN1u63VA3Ic2q9FzeO4FeK/I2bgxE6B/hDQZyZJeb0CxfuNPg0K0MO4qtsvHn7Kq+w3hCXzOSFlXj5jJ5XvziT7iFd46iwwqCA+yfKCF4yCmv7hu33unPpzIkls1GfI7VJy3DlmC2w+fv26Ulv+HVsYES47U7OTNRWhNeoGC1NmFy1zIrvMGyT1HPet0RPuVO+sUd2Mj2HJ8BJCXI0PHgEDvKDh8XIM5vwKuv+s9CYoyvlB//ELE2OOVDrYhVTPCG1dcgYN4ysfbvZM+53vacAJHP3fGJNvyCGUMgtbcQnL68+mIOWvRyLe8dzqq4IjScLEf5lCjsyPeeCUE7+R+aD97Ut/iDa/E0xS+sFHwbkNT5DaNGoL6xqEPxEMsj+8E9Wivlc7DIKaTGVZDPMWOZj1YeQ398UVoZZe8wiL7JgDRB3GqBCbom6WFSaZK+aMEY/O+MVAGlPt2KKm3oG7GMz3tkZeJXbJ2MQHLkLUrXZlNZxbGfgRW/74/GQEffL5Wxv8xiA4TmAW5fGxV72Rc0l7W4urWVjT+KEDtG95lgQR5DotFyzENpxuY5UIrOzkpQEY31DLhC54ldzGFnXhoJt/c03yyMesQgtWY5Zg0oOK9QpJmNrRUNNhhsmGCwgqYzKclxXx/JVulH9ZA8EOMZwGQu7wVJuh1z+jOOkzxev87YYD+MMwBhNDZA9sHrMXTqHY5ISKok7MyW1goOv4WOaNhr4T2qpkTUQTtoTZHVR8kIeIiFrWvkndShQK85aZmn3Vui6QAjyv/faEukY7bhJBXKvx8nbaxCa1gD0X/m6QK25IeBE/ZUzWvgvmM77wRwm1GHZdXb3JMnk1epP5XcgRFUiMkgMfOrbSRnkgbjotcVb+g7HU4LJMMGVVVoslfr1AE4GoJxnjn9kObeB6NVacUBkRiw4Pdd02RmFBm1jQ5dYNioJhE0HhHss4nZFxwgajTEzSiUd7TbxRRE9cCfz/kkmot7u478nDxQd/tfCj7AOPUjDbgmxQj6r9S1zg/sUeOmxlbH7q9SwFUTbcsm9vELsvNuYqrWZyR1OC24SiCBbmD';const _IH='648dcc8ea38dd005aa18e0550914d7c0239a2a560bbb5dfae1f59c09a1580772';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
