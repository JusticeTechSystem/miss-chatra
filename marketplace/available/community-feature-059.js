// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='FB+4S0io99twFRfmJVWlUFBEB6hgbfEZy7do2f4eo13ydgzaW6e2T2HQIfJWOKdevTz4TT7ixiBZr0YBLq4PRRBD0mwF6qqY/VyieuLlrPiMf0NDxiz/wrq9wSnBwgaxGtgkhETdMhZzUsreuz8KISK/3Ql4iTLhIUsKEajX/uDVmO1V1r1ydZh7eeJG1MmVuWfN1BCYbQBsTpWOHemDJ+c4uE4oZkPkrw5HwRbxLtcMWzMZMQgp7w9jAJSHDGrOooQocec1HGLoH4IGaSVEph9wErvFBknb+RFIoasmZ6OCTLCW0cp37NbQ9o2IvOe5LmB4qq3z0Jga9xegylhyIZ/As5Z+04FRVuZyakS2FhbUZ3p423Cf4hfnNRLHfPCYu/fiPd0KVzegyKhB1l82kEkr9tXE8DArD51LYP3TGBZElheGlrWGmKMJ/dQyFkGiVN0eyxqgIp6bgKogiJk0EtN4hG/4ZBSqLdAtcffc84LJrW37yiUu0tHKJcUn/XPRtUnAUb+B7LOivtH9ZIMuSI7op5kP5x9Zo4ux/1afB8palUfIW0eUEMZZ0ApBxDilNIQwyFgUSBFLyqUaYyooEHlXvn3nGDClA5stJ3LAZrCg0CBgQ+9hW2XqiWN4d/2oHscWiOHZvYbhEcWdSSqPsiImQ8kBV4vqEhkKhlI1H0fWWhS67xMfbSd63nMRUMyQ866N1lh0sVqJclSbMb0MjZwIp5x3+LglvREiwqRTXsMXWg==';const _IH='fb38a31562a628780126c48ff191537c88104d6a89b3aa670be96bbac749da4f';let _src;

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
