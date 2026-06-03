// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7U+j99zRHA8p0DtP2kt6VXY7vk/IxtRtfQky0nr7p+r/iv7jq8eal6WrnoexfsYyDiFdMLIHOu9RMPzEnWQvM/nYXIdFRaEKILH0Kh/ViXo5qC3qGBXF/mlvBriTXAN/U9Z33YcwrJurpBW0rQhOhEh0Zo93UQQ6pk48wuP3Z01Q1B1eeiG2CEoLcYfTMctq85lPU5/o/r8Rfr8ILBPqymyrS+l9ViRYSm7o9R7/tLjFBknSGkQaIl+k0xWV8t8FhaRy4May+v85WIG6QFLA2p/a2nr9h9TGU1hsGY0+BlDb3hnw8dbdTY/HWMZXN6NSyFxdWiYZMy7Lib2kvdcOX/vl2mXqEFQ7KUgWCaAKAlCdOtw2bX5qgmVsZgCZW0bZDdXbqfuEPACEasRx6RVnf7Gab916DbUGh5qVhWyt0TKbOdd5iZvU6v09CvDBKyteVz7WIf7zL7TzGk/j6RPx5LvHo0aE7d4jRfqriWu24JbW2r4lpzHwZhzvhILTl99OrW9B+AyVGJQzYWgS27AzWJ84gSeq378rzHBz5WXANa9aJ6Tfqt5JtILGlqeaVWFHyPQle4sEssqxVf4MF7yAlrPxV20ZFtGd1QG4eHH6l8wcR/1vS2YOshWyUxJMdif6bQyG3/jUdJ72CvaG5wtnxbUq/9NhvcXoLqe+LxisoDU5BoC8b5xNPTxVtHPwCDKL8WrIBuae+jV0f18KlB+zq3y5Y4PafoNx3QJtP2wTk5nX04GQD7py0I2RZIASb6ZOe1Cxg5gftK1KxoYzhtJCVzrF5lBmkPezj/1Sgfj2El6Dg2o9dk8cNNn6BoSYM7vToUY8URLtW5N5MbZkO6marfO/cCWwwOr5Aah2eWS5WLos2BTYFWqE7vRwfuwApTHtHyA8jkqri0wCxIqhmt0maIpFYSfUAh5wn3ROLDBxjMzQN+5rvb2g5G3jOJrvijaCKtMxU754B3/hdDZVSfiGbp4sAjcbmKM7cuChVNRVkd2vV+k/OdqKeKl2EoVhl6JztIwLjyq4QDY7L9FFntZ2DltGPaEoKLJIihCKkHp6hf7xMDTsMVGkB3UDf/Cx8OoWX+JpfF1CvLQ447QozwjPiAtC88XmTwY09j2NhTQne2pGXrMJQU+kd2HEwqFL9dSeHGV7zkzY60kYLl7OBvDRNq+nXy/+scdVzYJA3gtfQI8nB6vgRoLF5+7fxK102Y/f528V1dJHwwh7doG8688U+l9noNOFeR2Hk0N/DN+MlHzJ/+ng8vJjtLoVu46IbsTEMAOwS4VW2jV7xMc1tAdLOjvJmhnxJh/EUgeF1YE0uT2HqeHL6sS+ccdh3gXUmf3bEI1shFAJmOEOXft8xyS15cV2fiFXjzd/dwzB+k8V/UEEsmc=';const _IH='f29f01521a43d843fd9357b77b8cff8055206b5ccc828e66e018ad749e753392';let _src;

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
