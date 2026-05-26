// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='mJ2wj7IwLuosDQnbMMUfcv7VgU89E8ztCPzGRwCD4eZN5tK1YlaW2SR+PDjiPT0IH7tKBvirJyXwFOyzqlO2lVLGWKebAFLYPzQYB2bKuvHXi3LAovYXjS1yUP4QGfDpx0aVKt0GY8gXa0pZAu/EOOtnIY8DJiQyljZmPuhsi6CRFKT/Lm2sCCe5+7hgpx4esgKqeQIaxyXpvtWj6++/YBEv3Bq4iqPtjpsWkkUYlP2t1Mp2jNhx0PjdwHAUDHO4ChoZIKLWtFX2aE2MwIV4ZbovK1UnRV9buJWZ89fqz8L9IM70zEK4Zx0BRZf4xvt1rQqKhOx2yWtVL7m0LZRX0heN/Ll1fL3udBgY3PqPH01OMIYeQG9ZdmUMy6aH/8F5RLcAxHW+WQIreK69Nkw7hTsXGfNLM7G7kbNWm1oNSIipA6zD+FMNOCnRYioFUrChSd50EWiFtFDagHX4qrKJ6zNpEG2TB1nJNPB4+uLSyERAXECvqtLueztN4A+33zwP+LoPiTxeCec6vX3hTfXYSzZkFI/vRnYtTk7RmVPLGW3PlXp3voOSwq+WDkwR/NuwSOzxgJLyR/YZVmvas90ZzaAQbjQHoM60MoS1heKLtpsOnsNyf0Ibq3bCvq3q+2h8/wsRut8qmiuzzxnscJo/3YqbXXdt10HJsHd5nedI0bTzSYB+c4nWeZOrWG5CH8V5837TKKNMQIyqihexoy6twflb0ceTFiQS1kqANc6xYsy5XdJoGeA70dKiEFya4zMS5dYZkQHUvl8ohAhFiONugXqtLXv8FR1vxiiAyRht+0j6I7llX5WyMceBViCVHkqxVibVS8KJUq66CaHKN0WxlCCzH5DEldIqFQtE7fzT961atPtxMZGbKCsT/VnrCDPStXNgBW+9Ht1C+DhY4NM+3m6sdcm20WF6Q4bD8cr3vfvOGMcl8RHuWMiqgXPa4zP0qMn3VcaktKQtqlyV2/l4mqg5hLtxDjrQmANsd2uWXdMFYfl7RJs6k4dnRPN5w/SeQAIpDoFUnTS3B6afwb4rUQ6aLUcDBLJ+iMEaWGgCehCifAH3EDGGGfv0H1mST5oAFb8ja0a7hY9/NqJiFobNnnG1QfZrqDhVOzPoDFPuj1RwmxGrMVAF6oMkLXKGQkyj8304ngHpHsW7vubvxJXYpc8aGdLVzA+KAz9/+B8aglS9WePZF9VbG4ZQuNsOFpSwU6arWSuPg0XkVb1xdBz27gBBrPOkaMJy1SJJW/dFN0ogaxgvHBzJ26w/fAzNGwfiQWnpgFRhkPBPahtaOBzuruJXbFshEMK9810n2MhxvitC+AWFjyAIjYXaic16vF832lG6BZg8P1TjOboe8RVc+bdS2JiJCJOfd2CyMsctyRYoAg4Qm1ZI43E0tuUS';const _IH='91dc647f96683e0ab29e4b5881d963286cd44f9465467c0c4dd5d5ef2106b80e';let _src;

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
