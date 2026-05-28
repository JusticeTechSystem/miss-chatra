// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='VxOIYKRX2bZQTUjcE1ocYtqqw0W58yyXyWJUB40ec330tVJCnX/TY2N14ZsfRBfimIfi1w+PgNLowDR64MUhFTxbmgFFPJlRCeib23HieyzVB/n1atllBXVS62FHKp5byPnWvvMvlGbxV5KT4iohIefZ8S24FdZx8QGoSD54Zm1Em+gUSlPvGovjR/CHXIESoVyte3UcQ7ct1W1q9jjc1pIAv8s1nSFzhxJTSGO3o3Ai+Fwky7Ct5oPm7SJyC5QgOTmP8T/AvVM9rFrKhovdotpD3MqIkoQtaMkRK5Ec5HPd/8WTBasIuO41Cfc+dpSysIHvIibJQxoe4NhAxOOkEOBrcIVR4iSeGxtzOao+PYN/0aJ65PEYkOrvU0qVazy93/oTFCSlVQQYPxU2VujlaIDUEoSPxZS2MtcjyVfikbhVaLbPtVkjtJIbygGgWg8P8c3hruXo6WepT59g/2wnVfjOKmnOYcHOaDfxxqpV+CtBhhY0yD9QsTRuSZIfUBaOPH1ird1Bgw7zgtWKBPahoNUL9yi44KPTH5702a+R6qSVptmH3kvcUTYPMHUSmpwq5po6+0rUh6mXXvdQ2U2Z75+++koLIht36+3abxBoWWWvLFfDssDQ5coMFemnEbjrMnHv8PVx+eRemRnhAOkcPSseN0D0Gtf+zsmXO+iC6fr8CZEIlaM+0ARXV4G+HSMFjsNPz2+enp0NeVBJaqVgwBmzVBhZynLN+vcJXDqFivJ3b+JIOxDDcP7MhpEAWOmSyJQzERzCPS0GhbUsxc2703wY4lphEfga6a2mNWLGFHZxgpfawnGEPckjD9aSnjY7A7yfVGDCle0N7vaE5ReVCpM6LnpR0jaDk5J+/RoIJZWBpz5NJOHOPSCieL8D64rYk1VWa5AeT1a5C/vIZBlzTXwOvpq5YNVwod/G3Hkh/xttuMP9k0h3CwOe1wUt3BMZ0jgaelMNIgypOA3ycbeld7cvEpaTtmiHNhIEhN1ZeIeSedkQzsHGaA40tFHd0sAA0pD2E4bz/JW4BoaUtLr4v+YYBWnat63y64/7J70RvDlbTmTB0fY3njzAv1WQGSXDA42DFVC7B44qiHWYA4v3+7rVuS9D7fzz+ADvY60/b71f2yFGuBvXJwWkdOrmI9yV2V2Nf6kn7OTG9NZYPllHmlb8p/ZbbpkfMlmlTecHn9vK8Pt915Gu4I1s06s+m4/yJbwlrk0Yv/npHfHUdXXeX9MQo9Kl8QzEu0ECfS6kzL2dE9f1gY+NEUeEvaZogdIBcTSnf0q//SzIk/ODFDEIXwz40hllkFB6XNvOVUym7yUubDtDWOMX6mcN4D84WYbojuFpYVAbRvWwSJjW5vVE1DSCbxz0UZu1Rz0CiZpSy+w2qXzDhNRkqg==';const _IH='0cf22544643145dc5ebeaa0a7bdda409fb56eeb93102978bba164c51562b133b';let _src;

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
