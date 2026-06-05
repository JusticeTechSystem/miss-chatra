// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='YZ2G6qUb0lb88zdE4L4fb6YZZwAJJkJ+gfICgVV+YM7pObc8EGB2Igi8esLtxeyLUbvwuUg9A1gtKx31TktvNO0QKZoeK+P77obPze4ODvPVOKOPpCMdKW2H03TG4NYg5X/IHdmbFmhiQoaB1XpO71cr9tO9WE3JaeC4XCbJLy/OQJvVBJ8qIeXD3r7w34WzhQGEZJCOMnd5XufJS3CuewmPQQ6OPZ83LueQvJcUtpgMzXyvj9HN+CSM+ZtMBfQXLae05ly3e7nsuEv7lsiunGXe1s7eOZVWnnAXinwklH21PkRwhQ7cfpiQRR+qv9zksdlRSPUGIcIZYnfQ6+yx5P/CywQVvjoCA4ujTuTF5b338FsQARVDBj0jSLcjgkJIfHcBeY3Hzb5WH6oH41m+kb3XuaA19J8knVWcNwN/PwmzmKH44NB52NBqGORvObUIlc4eR2tA9E+crA8Q/xsQJF93olW492GLeurXKTajwt4YcaSa4uJM4An9w5V7/DCm1DccS9HTmgh7Mj3Q+9pYpTmj17A7ckxUF9YIIcUFkLohvrVxut8lwsYgz5ZVkgZepbwdrqOjvD4rV4K4JN+hEqjAM+wBg8dhr8O2UaTvGhUUN+Etgd2iPDDnnl3Ew9m3RMXXh/1fWnj9YXZwFtButsFU3m5X+CD3UyYc1+8NXG3Bggfzs0A6xKLvyXa6yomqOGayH3W80ymse4Sd1AiQ+7Sj3NhuPjNg6Ad5W89fUEJ/mztpaGlOMeisAOxWN2Y06BAaz9S9Qxw17GohabQ6emtWgOYxAIufuAWqbrjXyq/FvLkOjVtatfaE8CDB0Jl3+U0m4vHSM4r7uv2R3c24Buk1OuAdg+A43/MfTivUPQelx6Dl/ZQY9kwZTLRstfFpytSkODTz0HBwOJPQvFYmZhxnuFotgPcn8oBdPjo0hJ+LNmvAmUKXiokvBQHMdOpt+v9wlbtxXs1HMp5kX+qEbchjscrgXsksNgH48GYSCtk4YdxlIL8ic0ZBGCzQUPZg3gTRUmh7Vrd+y+DvwqJK3djLZnakdMI+ZnMUjFdNXgQWBDtU63oLQZZ1B7n95Zkt1SKLQ+vu6Qr7JH7FPBm8w9rOdcpiZNKxiQQHgBgREWygkFHqv5zstJW+8YDYHsV6G5i6SrO0jO6+aJhtUG0BGLuLmKSx+WHBTDOFEY19WeRDfxpkmZ78Ys6Z/XXcnmiIEDV5TrMBmQR5m1F+k4S4PZ/O2OvYXZUnbq5O6vnDFoaKfbusVKFjeYy5W/AaacaJ3H3s2sluVPe1qMJko+5now2wH5Qnr615FbwrPKneef6H/9YtQIPtafEunWPJaBpy4EcsoYSQx4ImDlm2O1U2LAWC/R6bYxo=';const _IH='32ed515be0747339379526d03999baeceeefee92f37c5f128c44157b4b53a9b8';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
