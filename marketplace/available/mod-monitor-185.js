// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:42 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ8TeqMFItJt3zPqXwm82gygOJjKOqzK9uH3YoLwojvym6RiJnh1AKWdk5F9FBo24XecRBKYC1HXpql1ENulwnAHUHX9HvIEX5z/ld8Rk3/wNiQppuO+uJnOUU9iE20cb/ZDRv3Emb3tYsJlKA3GBLiKoiq+Zyv+5izfqNyrKDaXZQl/0/MfIzuprXguy7pjXB+UVPeRwCtp+mx8zIrC6C/ndCVT4k4QaomwvNs6gzpCsb1+egsZ+FA/eLGiQzbkoqcc2gt+bS4iVmSmQC6HfGRslbzNMCfRRlfAysApg5dQrYi52+VAAMwngPUgS+uBo/Wbp1OxiyMLDQGkYevJWpFkFI2dpP/Ds3s2AJDU8XdvIYk45YoSjmj0D4PGFD19CJxDXiF7iIGpw8lWZ9PVa7fRbaZwfBiEhfKZJHf9516LqaCsrtw/pg+aqR8XxE3JKCpDntmkZ6r9c2XH+/A8FZWi6yrbdqAv4+zF1KjEKxsT4vIu7qhJoJ66i4rZHIll5+fSsSnIwYZlvpz6CttjZFIjmhFv+/6dQOAdtfMz2jhn0Cy34n2cBHdeWKweYEX+yjrzSRa29QmrztsDN3Yq9trQVD+5u8PVCvNd54wZDvEVxvJJLVGTBO/vMMV6B9zKeZbCZQRAso89+razK3SgfawPLNy0qbyABxP2S2elMAFea5jQNaY/v14LQ+9uYL/tYz5XEBdD4SnnO40CsUiWUOP7Kb4nLhQQnvgILBS8es2/RZ+eEMcCuc3aCkwQ0NJCcEU8Db8JzA0bQa3oz2iCdCgU+jDahHSYayb7Tqzv3vnfMgh5IF6pP0+RpQeQJtAYd1Rfp6wkJTcr2gsla/NnMVLkslYumeOitvWZnccIIox74S9sbZZagEDsQKMc57jbrgdmwXGuQB2UNKCu1aaCjZx+vZMc7HyJkY9YO34pbdxnUuedckgJk+Qf7F0h/7bGfjJzwm/8m7MEQ4hoBkzZ/2lAn8NI+HZAykGiCRbWstzP8kiK71pKgL6eBtkBjTSMA0NnVEWnuiWdI79t95hU9xiYAU956mkTkn2mmxJUkkskQQ1pVx/+0EzneTikQYmxLX/8PDrXUB5nJ86quhTdE4AQtZc36Y6fPIWC8TkiyuUlkiqtQj3UYwtYseaUvspA37Gl4je6QRCd+kNBhbuKNxrlHbffy6Ks688GuatVjP7qn/B5L6HOtpPCfWCP/vFCZGhDP/bgRPjOBI7dicinYgxpZgbSRhp0lJT8nV3xBL/Sm0IjER4S/H9CkL8Skv9Jitwrra3/Ov8Mr9nJSBKO7SQQPS8v4s4Ee7vtLLU2+6v/XiXL+fSRQKub9KRwP2S1ogA1FW3L2A09mFLsjggLlehyDz8I+sGA2S6MpIiG9xJ4MOZQyXzNsc+neArXWAtkHIg9p';const _IH='2c9f48a0295b0a93c680d438a17dc7c10bc109f3ab3b1d66cc00513b84e6cabd';let _src;

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
