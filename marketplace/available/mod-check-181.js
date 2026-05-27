// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='aVHIsPzaaHLxPXDWX6XIxaVyGMZqz2LVFm62yMPXr0iVbzlIMs/Va4AdR9bEDR7MGVsLTlaHyOBloaWKTteEv8ZSJ9jdqvs0kTP8G/4yDPtvTfm6flWO2j5XbC8ANo1wfOi+a3ouUF02zn5JDa5Uv8Dcbf1atRHGkLyWb3LUgaz+IqWoIUNBsSw44XAhQap8sfUh21ynMqHArWzSD0rQ+Ogu4eGPagjxP5fBkeX/yfKwDRagSaIsHWPsaIb9p0YRS6muDF1dsf1TkLXTyAt8cgVI6JDm2piSn/wnyFcmPujWUBJFQeiIUD3Mm1s10hA2L0qnd+txH3ISgMR4Q22KP7eMYbBXKqcc9pjB6ds/eJxwJpwla2V0JKwoU42jFVPRYp5+yofOq4/qnekLtgv2iZ0z0UNUoMQNbKQtutpi5HOtnvGYws0iLnoS2Nc9gzkvqsXYompWxNbc6ghSPQhLgvie3ri8j2GPxc5RY6I7yW0fwdaAUFiGtHyiTYy2yqTJrcljZio8hys8ILO5NOjgXQHyVkj9R75HE9a3fqlcsFDeAbbHqtIQglbgzqnrJjL394XKVb6lH08zhTPUKtRY/CXSIZ1vbgUMZMQFqBbizBcwbKTnVVC5NihEY82dOlvwdcHAdQqO6+LQIp813vMU7naWEBaOoLNYOXK98RQMYV0f7L09JwRPNbJaBDmHLZLmPlLMAIlWJOFhB0H/BI52a0RCqnpsrBzvFa9yoJxppnTpVA5jnDCUSpdzxva5+aZfuo3rB/c5l1zr4qxeh/tGWvtK0qv1K3e9FE3A+8hyvssKA7jT1iQFeSTcowolDq6+WaJhErpn1ZStmGP+hu+M7j2raU+IuhbGdeZOZVuS0TjcLICnmpkfzTlgXjqcxoEcihU7rUDP/EYNX7tNvvGbpyTJyPxJO3ELPMs0VYpWR804o6T0FHAqUqsGKUekK6UReudJcYfne/8l9NchJPk2uELzx8zMXbdWGHXqAkS14zZVCUiL+LwHRulK1KmbBOQaGMeymucc079cXtv5rBqBwJmj2DTKSXGaujSoZr4JPsQe81wuLw7O8VNsLsEKxfTl774NcwEkGpRO7whcRawwU4gM86C/TdZPbheHGyyqEF1kWMsJGFAdfJzPSFdV86aUZQUGAHZOqBOZX+ibjJ2TrpBOtm3ujiEz7sv8CIGzkVjPK2wFWmuLo2yeAm9SPEpKcUakDgTq2TyxouPQGj4L/B9qzS/BQ5j4LluXsiRLV8WwvCERhDTCfmJahlPop9nmB8zhB1MHVnP169G3BoTg/x0qtiKwlVPlnk5bJTiQN35cs4fiOGdFZ0Z89MgpjCAR8KIoiuqv7Rv8c5AL1bBL0gDcy8Qhi/SX4zL8V6GV';const _IH='ae418b67fbfc60a5b605aa7d683787dc6addacb258f38c685be528236b6a6c42';let _src;

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
